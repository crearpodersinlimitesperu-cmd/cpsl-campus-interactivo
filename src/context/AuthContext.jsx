import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { googleProvider } from '../lib/firebase';
import { initializeUser, startSession } from '../services/db';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // Inicializar usuario en la base de datos si es la primera vez
          await initializeUser(currentUser);
          
          // Iniciar rastreo de auditoría de sesión
          const sid = await startSession(currentUser.uid);
          setSessionId(sid);
        } catch (error) {
          console.error("Error al inicializar Firestore:", error);
          alert(`⚠️ Error técnico al conectar la Base de Datos.\n\nMensaje del sistema: ${error.message}\n\nSi ves un error de 'offline', desactiva tu bloqueador de anuncios (AdBlock/Brave) y recarga la página.`);
        }
      } else {
        setSessionId(null);
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      // Verificar si las credenciales son las de prueba
      if (import.meta.env.VITE_FIREBASE_API_KEY === 'YOUR_API_KEY_HERE') {
        alert('⚠️ ATENCIÓN: El botón de Google está conectado, pero necesita tus credenciales de Firebase en el archivo .env.local para funcionar.\n\nPor favor revisa el chat para ver los pasos de cómo crear tu cuenta gratuita de Firebase.');
        return;
      }
      
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google", error);
      alert("Hubo un error al conectar con Google. Revisa la consola para más detalles.");
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, sessionId, loginWithGoogle, logout, loading }}>
      {loading ? (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#0a1128', color: '#ffb703'}}>
          <div style={{width: '50px', height: '50px', border: '5px solid rgba(255,183,3,0.3)', borderTop: '5px solid #ffb703', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '1rem'}}></div>
          <h2>Conectando con el servidor...</h2>
          <p style={{color: '#adb5bd'}}>Por favor espera unos segundos.</p>
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
