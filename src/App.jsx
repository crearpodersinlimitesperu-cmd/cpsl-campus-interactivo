import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

import Sidebar from './components/Sidebar'
import GlobalHUDWidget from './components/GlobalHUDWidget'
import ThemeToggle from './components/ThemeToggle'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import RutaFormacion from './pages/RutaFormacion'
import ModuloContainer from './pages/ModuloContainer'
import EvaluacionContainer from './pages/EvaluacionContainer'
import Groundings from './pages/Groundings'
import Evaluaciones from './pages/Evaluaciones'
import Dinamicas from './pages/Dinamicas'
import MaquinaQuiebres from './pages/MaquinaQuiebres'
import ProgramaEntrenamiento from './pages/ProgramaEntrenamiento'
import AutoevaluacionCoach from './pages/AutoevaluacionCoach'
import AdminDashboard from './pages/AdminDashboard'
import TareasQuantumTeam from './pages/TareasQuantumTeam'
import GamificacionStaff from './pages/GamificacionStaff'
import BrandscriptGuionesMJ from './pages/BrandscriptGuionesMJ'
import VendeSinVender from './pages/VendeSinVender'
import NotFound from './pages/NotFound'
import Glosario from './pages/Glosario'
import MasterclassDistinciones from './pages/MasterclassDistinciones'
import AdminRoute from './components/AdminRoute'
import { useAuth } from './context/AuthContext'
import { useUI } from './context/UIContext'
import { updateSessionHeartbeat, logSessionRoute } from './services/db'

function App() {
  const { user, sessionId, loginWithGoogle, loading } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [consentStatus, setConsentStatus] = useState(localStorage.getItem('analyticsConsent') || 'pending');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Registro de Rutas Consciente (Reemplazo de Spy Mode)
  useEffect(() => {
    if (user && sessionId && consentStatus === 'granted') {
      // Uso de clave idempotente para evitar duplicados en StrictMode
      const routeKey = `${sessionId}:${location.pathname}`;
      const lastRoute = sessionStorage.getItem('lastRouteRecorded');
      if (lastRoute !== routeKey) {
        logSessionRoute(user.uid, sessionId, location.pathname);
        sessionStorage.setItem('lastRouteRecorded', routeKey);
      }
    }
  }, [user, sessionId, location.pathname, consentStatus]);

  // Rastreador de tiempo basado en visibilidad (Heartbeat)
  useEffect(() => {
    if (!user || !sessionId || consentStatus !== 'granted') return;

    const sendHeartbeat = () => {
      if (document.visibilityState === 'visible') {
        updateSessionHeartbeat(user.uid, sessionId);
      }
    };

    const intervalId = window.setInterval(sendHeartbeat, 5 * 60 * 1000); // 5 minutos

    return () => {
      window.clearInterval(intervalId);
    };
  }, [user, sessionId, consentStatus]);

  if (loading) {
    return null; // El AuthProvider ya está mostrando la pantalla de carga principal
  }

  if (!user) {
    return (
      <div className="login-container" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 100 }}>
          <ThemeToggle />
        </div>
        <div className="glass-panel login-card animate-fade-in" style={{padding: '4rem 3rem'}}>
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
            <img src="/interrupcion_logo.jpg" alt="Logo Interruption" className="logo-holographic" style={{width: '300px', height: '300px', maxWidth: '100%'}} />
          </div>
          <h1 className="text-gold" style={{fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'center', letterSpacing: '2px'}}>INTERRUPTION</h1>
          <p className="text-muted" style={{marginBottom: '3rem', fontSize: '1.1rem', textAlign: 'center'}}>Plataforma de Entrenamiento Avanzado</p>
          
          <button onClick={loginWithGoogle} className="btn-primary" style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Continuar con Google
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`app-layout ${isFocusMode ? 'focus-mode-active' : ''}`}>
      {!isFocusMode && (
        <>
          <div className="mobile-header glass-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <img src="/interrupcion_logo.jpg" alt="Logo Interruption" className="logo-holographic" style={{ width: '45px', height: '45px' }} />
              <h2 className="text-gold" style={{ fontSize: '1.2rem', margin: 0, letterSpacing: '1px' }}>INTERRUPTION</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <ThemeToggle />
              <button 
                type="button"
                className="mobile-menu-btn" 
                onClick={toggleMobileMenu}
                aria-label="Abrir menú principal"
                aria-expanded={isMobileMenuOpen}
                aria-controls="main-navigation"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--crear-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <Sidebar isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        </>
      )}

      {user && <GlobalHUDWidget />}

      <main className="main-content animate-fade-in">
        {isFocusMode && (
          <button 
            onClick={toggleFocusMode} 
            className="focus-exit-btn"
            title="Salir del Modo Enfoque"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            <span>Salir de Enfoque</span>
          </button>
        )}
        
        {consentStatus === 'pending' && (
          <div className="glass-panel" style={{ position: 'fixed', bottom: '20px', right: '20px', left: '20px', zIndex: 9999, padding: '1.5rem', borderLeft: '4px solid var(--crear-blue)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{flex: 1, minWidth: '300px'}}>
              <h4 style={{margin: '0 0 0.5rem 0', color: 'var(--text-main)'}}>Registro de Progreso</h4>
              <p style={{margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)'}}>
                Registramos tu avance, rutas visitadas y tiempo aproximado para mejorar tu experiencia de aprendizaje. No registramos el contenido privado de tus reflexiones en herramientas.
              </p>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
              <button className="btn-secondary" onClick={() => {
                localStorage.setItem('analyticsConsent', 'denied');
                setConsentStatus('denied');
              }}>
                Rechazar
              </button>
              <button className="btn-primary" onClick={() => {
                localStorage.setItem('analyticsConsent', 'granted');
                setConsentStatus('granted');
              }}>
                Aceptar
              </button>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/home" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/ruta" element={<ProtectedRoute><RutaFormacion /></ProtectedRoute>} />
          <Route path="/modulo/:id" element={<ProtectedRoute><ModuloContainer /></ProtectedRoute>} />
          <Route path="/evaluacion/:id" element={<ProtectedRoute><EvaluacionContainer /></ProtectedRoute>} />
          <Route path="/groundings" element={<ProtectedRoute><Groundings /></ProtectedRoute>} />
          <Route path="/dinamicas" element={<ProtectedRoute><Dinamicas /></ProtectedRoute>} />
          <Route path="/quiebres" element={<ProtectedRoute><MaquinaQuiebres /></ProtectedRoute>} />
          <Route path="/entrenamiento" element={<ProtectedRoute><ProgramaEntrenamiento /></ProtectedRoute>} />
          <Route path="/autoevaluacion" element={<ProtectedRoute><AutoevaluacionCoach /></ProtectedRoute>} />
          <Route path="/glosario" element={<ProtectedRoute><Glosario /></ProtectedRoute>} />
          <Route path="/evaluaciones" element={<ProtectedRoute><Evaluaciones /></ProtectedRoute>} />
          <Route path="/masterclass" element={<ProtectedRoute><MasterclassDistinciones /></ProtectedRoute>} />
          <Route path="/masterclass-distinciones" element={<ProtectedRoute><MasterclassDistinciones /></ProtectedRoute>} />
          <Route path="/gamificacion" element={<ProtectedRoute><GamificacionStaff /></ProtectedRoute>} />
          <Route path="/crisol" element={<ProtectedRoute><GamificacionStaff defaultTab="simulador" /></ProtectedRoute>} />
          <Route path="/simulador" element={<ProtectedRoute><GamificacionStaff defaultTab="simulador" /></ProtectedRoute>} />
          <Route path="/liderazgo" element={<ProtectedRoute><GamificacionStaff defaultTab="perfil" /></ProtectedRoute>} />
          <Route path="/modo-aprendiz" element={<ProtectedRoute><GamificacionStaff /></ProtectedRoute>} />
          <Route path="/guiones-mj" element={<ProtectedRoute><BrandscriptGuionesMJ /></ProtectedRoute>} />
          <Route path="/brandscript-mj" element={<ProtectedRoute><BrandscriptGuionesMJ /></ProtectedRoute>} />
          <Route path="/vende-sin-vender" element={<ProtectedRoute><VendeSinVender /></ProtectedRoute>} />
          <Route path="/causa" element={<ProtectedRoute><VendeSinVender /></ProtectedRoute>} />
          <Route path="/retos" element={<ProtectedRoute><TareasQuantumTeam /></ProtectedRoute>} />
          <Route path="/retos-aprendizaje" element={<ProtectedRoute><TareasQuantumTeam /></ProtectedRoute>} />
          <Route path="/tareas-qt" element={<ProtectedRoute><TareasQuantumTeam /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="/superadmin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
