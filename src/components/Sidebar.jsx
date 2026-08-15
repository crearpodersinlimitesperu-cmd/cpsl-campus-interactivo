import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Sidebar() {
  const { user } = useAuth();
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'crearglobalcom@gmail.com';
  const isAdmin = user && user.email === adminEmail;

  return (
    <aside className="sidebar glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <img src="/interrupcion_logo.jpg" alt="Logo Interrupción" style={{ width: '45px', height: '45px', borderRadius: '10px', border: '1px solid var(--crear-gold)' }} />
        <h2 className="text-gold" style={{fontSize: '1.2rem', margin: 0, letterSpacing: '1px'}}>INTERRUPCIÓN</h2>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/dashboard"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/ruta"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Ruta de Formación
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/modulo/fundamentos"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Módulo Actual
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/groundings"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Groundings
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dinamicas"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Máquina de Dinámicas
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/quiebres"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Máquina de Quiebres ⚡
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/entrenamiento"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Programa 6 Semanas 🚀
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/autoevaluacion"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Autoevaluación Coach 🧭
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/evaluaciones"
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Evaluaciones Alumnos
            </NavLink>
          </li>
          {isAdmin && (
            <li style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 215, 0, 0.2)' }}>
              <NavLink 
                to="/admin"
                className={({ isActive }) => isActive ? "active text-gold" : "text-gold"}
              >
                👑 Panel CEO
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  )
}
