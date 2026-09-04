import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

import { useEffect } from 'react'

export default function Sidebar({ isOpen, onClose }) {
  const { isAdmin } = useAuth();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>
      <aside 
        id="main-navigation"
        className={`sidebar glass-panel ${isOpen ? 'open' : ''}`}
        aria-label="Navegación principal"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', position: 'relative' }}>
          <button className="close-sidebar-btn" onClick={onClose} aria-label="Cerrar menú" style={{ position: 'absolute', right: '-10px', top: '-10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crear-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <img src="/interrupcion_logo.jpg" alt="Logo Interruption" className="logo-holographic" style={{ width: '160px', height: '160px', marginBottom: '0.5rem' }} />
          <h2 className="text-gold" style={{fontSize: '1.4rem', margin: 0, letterSpacing: '1px'}}>INTERRUPTION</h2>
        </div>
        <nav>
        <ul>
          <li>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ruta"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Ruta de Formación
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gamificacion"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              🎮 Gamificación Staff (Nodus)
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/guiones-mj"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              📜 BrandScript & Guiones MJ
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/modulo/modulo1"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Módulo Actual
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/groundings"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Groundings
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dinamicas"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Máquina de Dinámicas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/quiebres"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Máquina de Quiebres ⚡
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/entrenamiento"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Programa 6 Semanas 🚀
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/glosario" 
              className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <span className="nav-icon">📖</span>
              <span className="nav-text">Glosario Central</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/autoevaluacion"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Autoevaluación Coach 🧭
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/tareas-qt"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Tareas QT (Deadlines C1) 🎯
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/evaluaciones"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Evaluaciones Alumnos
            </NavLink>
          </li>
          {isAdmin && (
            <li style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 215, 0, 0.2)' }}>
              <NavLink 
                to="/admin"
                className={({ isActive }) => isActive ? "active text-gold" : "text-gold"}
                onClick={onClose}
              >
                👑 Panel CEO
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
    </>
  )
}
