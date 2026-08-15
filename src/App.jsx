import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import Sidebar from './components/Sidebar'
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
import { useAuth } from './context/AuthContext'
import { useUI } from './context/UIContext'

function App() {
  const { user, loginWithGoogle } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();

  if (!user) {
    return (
      <div className="login-container">
        <div className="glass-panel login-card animate-fade-in" style={{padding: '4rem 3rem'}}>
          <h1 className="text-gold" style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>PLATAFORMA DE ENTRENAMIENTO</h1>
          <p className="text-muted" style={{marginBottom: '3rem', fontSize: '1.1rem'}}>Tu proceso de aprendizaje. Tu progreso. Tu transformación.</p>
          
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
      {!isFocusMode && <Sidebar />}

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
        
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/ruta" element={<ProtectedRoute><RutaFormacion /></ProtectedRoute>} />
          <Route path="/modulo/:id" element={<ProtectedRoute><ModuloContainer /></ProtectedRoute>} />
          <Route path="/evaluacion/:id" element={<ProtectedRoute><EvaluacionContainer /></ProtectedRoute>} />
          <Route path="/groundings" element={<ProtectedRoute><Groundings /></ProtectedRoute>} />
          <Route path="/dinamicas" element={<ProtectedRoute><Dinamicas /></ProtectedRoute>} />
          <Route path="/quiebres" element={<ProtectedRoute><MaquinaQuiebres /></ProtectedRoute>} />
          <Route path="/entrenamiento" element={<ProtectedRoute><ProgramaEntrenamiento /></ProtectedRoute>} />
          <Route path="/autoevaluacion" element={<ProtectedRoute><AutoevaluacionCoach /></ProtectedRoute>} />
          <Route path="/evaluaciones" element={<ProtectedRoute><Evaluaciones /></ProtectedRoute>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
