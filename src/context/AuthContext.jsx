import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { googleProvider } from '../lib/firebase';
import { initializeUser, startSession, getUserProfile } from '../services/db';
import { SUPER_ADMIN_EMAILS } from '../config/permissions';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionId, setSessionId] = useState(null);
  const [authError, setAuthError] = useState(null);

  const [isAdmin, setIsAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [role, setRole] = useState('estudiante');
  const [sede, setSede] = useState(null);

  useEffect(() => {
    const mockStr = localStorage.getItem('cpsl_mock_user');
    if (mockStr) {
      try {
        const mock = JSON.parse(mockStr);
        setUser(mock);
        setIsAdmin(true);
        setIsSuperAdmin(true);
        setRole(mock.role || 'superadmin');
        setSede(mock.sede || null);
        setSessionId('mock-session-dev');
        setLoading(false);
        return;
      } catch (e) {
        console.error("Error parseando mock user:", e);
      }
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setAuthError(null);

      if (!currentUser) {
        setUser(null);
        setSessionId(null);
        setIsSuperAdmin(false);
        setRole('estudiante');
        setSede(null);
        setLoading(false);
        return;
      }

      try {
        // Obtenemos el token para verificar roles (Custom Claims)
        let hasAdminClaim = false;
        try {
          const tokenResult = await currentUser.getIdTokenResult();
          hasAdminClaim = !!tokenResult?.claims?.admin;
        } catch (tokenErr) {
          console.warn("Aviso verificando custom claims:", tokenErr);
        }

        // Mantenemos el fallback por email temporalmente mientras se configuran los custom claims
        const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'jose.sanchez@crearpsl.net';
        const isEmailAdmin = currentUser.email === adminEmail;

        setIsAdmin(hasAdminClaim || isEmailAdmin);

        // Inicialización en Firestore resiliente (no bloqueante si Firestore rechaza permisos o está offline)
        try {
          await initializeUser(currentUser);
        } catch (initErr) {
          console.warn("Aviso en initializeUser:", initErr);
        }

        // Leer perfil completo desde Firestore para obtener role, sede e isSuperAdmin
        let profile = { role: 'estudiante', sede: null, isSuperAdmin: false };
        try {
          profile = await getUserProfile(currentUser.uid);
        } catch (profileErr) {
          console.warn("Aviso obteniendo perfil de usuario:", profileErr);
        }

        // isSuperAdmin: true si está en la lista de emails privilegiados O si Firestore lo dice
        const superAdminByEmail = SUPER_ADMIN_EMAILS.includes(currentUser.email);
        const resolvedIsSuperAdmin = superAdminByEmail || profile.isSuperAdmin;
        const resolvedRole = resolvedIsSuperAdmin ? 'superadmin' : (profile.role || 'estudiante');

        setRole(resolvedRole);
        setSede(profile.sede || null);
        setIsSuperAdmin(resolvedIsSuperAdmin);

        // Construir enrichedUser combinando Firebase Auth con datos de Firestore
        const enrichedUser = {
          ...currentUser,
          role: resolvedRole,
          sede: profile.sede || null,
          isSuperAdmin: resolvedIsSuperAdmin,
          displayName: profile.displayName || currentUser.displayName,
          photoURL: profile.photoURL || currentUser.photoURL,
        };

        // CUALQUIER USUARIO AUTENTICADO CON GOOGLE TIENE ACCESO INMEDIATO Y PLENO
        setUser(enrichedUser);

        try {
          const sid = await startSession(currentUser.uid);
          setSessionId(sid || `session_${Date.now()}`);
        } catch (sessionErr) {
          console.warn("Aviso en startSession:", sessionErr);
          setSessionId(`session_${Date.now()}`);
        }
      } catch (error) {
        console.warn("Aviso no fatal durante la preparación de sesión:", error);
        // Si falla todo, al menos dejamos al usuario autenticado sin enriquecer
        setUser(currentUser);
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      setAuthError(null);
      // Verificar si las credenciales son las de prueba
      if (import.meta.env.VITE_FIREBASE_API_KEY === 'YOUR_API_KEY_HERE') {
        alert('⚠️ ATENCIÓN: El botón de Google está conectado, pero necesita tus credenciales de Firebase en el archivo .env.local para funcionar.\n\nPor favor revisa el chat para ver los pasos de cómo crear tu cuenta gratuita de Firebase.');
        return;
      }

      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
        alert("Hubo un error al conectar con Google: " + (error.message || "Intenta nuevamente."));
      }
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{
      user,
      sessionId,
      loginWithGoogle,
      logout,
      loading,
      isAdmin,
      authError,
      isSuperAdmin,
      role,
      sede,
    }}>
      {loading ? (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#0a1128', color: '#ffb703'}}>
          <div style={{width: '50px', height: '50px', border: '5px solid rgba(255,183,3,0.3)', borderTop: '5px solid #ffb703', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1rem'}}></div>
          <h2>Conectando con el servidor...</h2>
          <p style={{color: '#adb5bd'}}>Por favor espera unos segundos.</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      ) : authError && !user ? (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#0a1128', color: 'var(--color-error)', padding: '2rem', textAlign: 'center'}}>
          <h2>Error de Conexión con Google</h2>
          <p style={{color: 'var(--text-main)', marginBottom: '2rem', maxWidth: '500px'}}>{authError.message}</p>
          <button className="btn-primary" onClick={() => { setAuthError(null); window.location.reload(); }}>Reintentar Conexión</button>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
