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
        <button className="btn-secondary" onClick={logout} aria-label="Cerrar sesión de tu cuenta">Cerrar sesión</button>
      </header>

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
            <h4 style={{fontSize: '1.5rem', margin: '0 0 0.5rem 0'}}>{progress?.lastVisitedModule === '/modulo/fundamentos' ? 'Fundamentos Teóricos' : 
                 progress?.lastVisitedModule?.includes('evaluacion') ? 'Evaluación Completada' : 
                 'Módulos Avanzados'}</h4>
            <p className="text-muted" style={{marginBottom: '1.5rem'}}>
              {progress?.lastVisitedModule?.includes('evaluacion') 
                ? 'Elige tu siguiente paso en la Ruta de Formación.' 
                : 'Bases del Coaching, Física Cuántica y Ontología.'}
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
                navigate(route && route !== '/dashboard' ? route : '/modulo/fundamentos');
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
