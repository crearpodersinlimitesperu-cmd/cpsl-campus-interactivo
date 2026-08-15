import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../services/db';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (user) {
      getUserProgress(user.uid).then((data) => {
        if (data) setProgress(data);
      });
    }
  }, [user]);

  return (
    <>
      <header className="dashboard-header" aria-label="Cabecera del Dashboard">
        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          {user?.photoURL && <img src={user.photoURL} alt="Foto de perfil del estudiante" style={{width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--crear-gold)'}} />}
          <div>
            <h2 style={{fontSize: '2.5rem'}}>Hola, <span className="text-gold">{user?.displayName ? user.displayName.split(' ')[0] : 'Estudiante'}</span></h2>
            <p className="text-muted" style={{fontSize: '1.25rem'}}>Continúa tu entrenamiento.</p>
          </div>
        </div>
        <button className="btn-logout" onClick={logout} aria-label="Cerrar sesión de tu cuenta">Cerrar sesión</button>
      </header>

      <section aria-label="Grounding de Preparación" style={{ marginBottom: '2rem' }}>
        <article className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--crear-blue)', background: 'rgba(23, 42, 69, 0.4)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ flex: 1 }}>
            <h3 className="text-blue" style={{ marginTop: 0, marginBottom: '0.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              Preparación y Presencia (Grounding)
            </h3>
            <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem' }}>
              Antes de continuar tu aprendizaje, realiza un ciclo <strong>5-5</strong> para optimizar tu receptividad cognitiva.
              Inhala por la nariz durante 5 segundos y exhala por la boca durante 5 segundos. Repite 3 veces.
            </p>
          </div>
          <button 
            className="btn-secondary"
            onClick={() => navigate('/groundings')}
            aria-label="Ir a la sección de Groundings completos"
            style={{ padding: '0.6rem 1.2rem', whiteSpace: 'nowrap' }}
          >
            Ir a Groundings
          </button>
        </article>
      </section>

      <section className="dashboard-grid" aria-label="Resumen de Progreso">
        <article className="glass-panel p-6">
          <h3 className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '1rem'}}>Progreso Global</h3>
          <div className="progress-bar-container" aria-label={`Progreso global al ${progress?.globalPercentage || 0} por ciento`}>
            <div className="progress-bar-fill" style={{width: `${progress?.globalPercentage || 0}%`}}></div>
          </div>
          <p className="text-muted" style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>{progress?.globalPercentage || 0}% completado</p>
        </article>

        <article className="glass-panel p-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <h3 className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '1rem'}}>Última Actividad</h3>
            <h4 style={{fontSize: '1.5rem', margin: '0 0 0.5rem 0'}}>{progress?.lastVisitedModule === '/modulo/modulo1' ? 'Fundamentos Teóricos' : 
                 progress?.lastVisitedModule?.includes('evaluacion') ? 'Evaluación Completada' : 
                 'Módulos Avanzados'}</h4>
            <p className="text-muted" style={{marginBottom: '1.5rem'}}>
              {progress?.lastVisitedModule?.includes('evaluacion') 
                ? 'Elige tu siguiente paso en la Ruta de Formación.' 
                : 'Bases del Coaching, Principios de Posibilidad y Ontología.'}
            </p>
          </div>
          <button 
            className="btn-primary"
            aria-label="Continuar donde dejaste el entrenamiento"
            onClick={() => {
              const route = progress?.lastVisitedModule;
              if (route && route.includes('evaluacion')) {
                navigate('/ruta');
              } else {
                navigate(route && route !== '/dashboard' ? route : '/modulo/modulo1');
              }
            }}
          >
            Continuar donde lo dejé
          </button>
        </article>
      </section>
    </>
  )
}
