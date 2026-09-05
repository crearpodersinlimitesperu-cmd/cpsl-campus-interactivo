import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import ThemeToggle from './ThemeToggle'

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.8rem', position: 'relative' }}>
          <button className="close-sidebar-btn" onClick={onClose} aria-label="Cerrar menú" style={{ position: 'absolute', right: '-10px', top: '-10px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--crear-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <img src="/interrupcion_logo.jpg" alt="Logo Interruption" className="logo-holographic" style={{ width: '150px', height: '150px', marginBottom: '0.5rem' }} />
          <h2 className="text-gold" style={{fontSize: '1.4rem', margin: 0, letterSpacing: '1px'}}>INTERRUPTION</h2>
          <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <ThemeToggle />
          </div>
          <button 
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-global-search'));
              onClose();
            }}
            style={{
              marginTop: '0.75rem',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.55rem 0.85rem',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: 'var(--text-main, #f8f9fa)',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🔍</span>
              <span>Buscador Global</span>
            </span>
            <kbd style={{ fontSize: '0.7rem', padding: '0.1rem 0.35rem', background: 'rgba(0,0,0,0.4)', borderRadius: '4px', color: '#94a3b8' }}>
              Ctrl K
            </kbd>
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
              to="/gamificacion?tab=simulador"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
              style={{ color: 'var(--crear-gold, #ffb703)' }}
            >
              ⚡ El Crisol del Día (Simulador)
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/gamificacion?tab=perfil"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              🛡️ Liderazgo Adaptativo (2 Ejes)
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/guiones-mj"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              📜 Comunicación & Mentoría Empática
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/vende-sin-vender"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
              style={{ color: 'var(--crear-gold)' }}
            >
              📖 Vende Sin Vender (Autoentrenamiento)
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
              State Calibration
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/laboratorio-sintergico"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
              style={{ color: '#38bdf8' }}
            >
              🌌 Laboratorio Sintérgico (Grinberg)
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
              Autoevaluación Personal 🧭
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/retos"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Retos de Autoentrenamiento 🎯
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/evaluaciones"
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={onClose}
            >
              Mis Evaluaciones
            </NavLink>
          </li>
          {isAdmin && (
            <li style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 215, 0, 0.2)' }}>
              <NavLink 
                to="/admin"
                className={({ isActive }) => isActive ? "active text-gold" : "text-gold"}
                onClick={onClose}
              >
                ⚙️ Panel Administrativo
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
    </>
  )
}
