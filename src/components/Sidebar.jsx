import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Sidebar({ isOpen, onClose }) {
  const { user } = useAuth();
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'crearglobalcom@gmail.com';
  const isAdmin = user && user.email === adminEmail;

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>
      <aside className={`sidebar glass-panel ${isOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="/interrupcion_logo.jpg" alt="Logo Interrupción" style={{ width: '45px', height: '45px', borderRadius: '10px', border: '1px solid var(--crear-gold)' }} />
            <h2 className="text-gold" style={{fontSize: '1.2rem', margin: 0, letterSpacing: '1px'}}>INTERRUPCIÓN</h2>
          </div>
          <button className="close-sidebar-btn" onClick={onClose} aria-label="Cerrar menú">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crear-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
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
              to="/modulo/fundamentos"
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
              to="/autoevaluacion"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Autoevaluación Coach 🧭
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
