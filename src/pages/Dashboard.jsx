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
      <header className="dashboard-header">
        <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
          {user?.photoURL && <img src={user.photoURL} alt="Profile" style={{width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--crear-gold)'}} />}
          <div>
            <h1 style={{fontSize: '2.5rem'}}>Hola, <span className="text-gold">{user?.displayName ? user.displayName.split(' ')[0] : 'Estudiante'}</span></h1>
            <p className="text-muted" style={{fontSize: '1.25rem'}}>Continúa tu entrenamiento.</p>
          </div>
        </div>
        <button className="btn-secondary" onClick={logout}>Cerrar sesión</button>
      </header>

      <section className="dashboard-grid">
        <div className="glass-panel p-6">
          <h3 className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '1rem'}}>Progreso Global</h3>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{width: `${progress?.globalPercentage || 0}%`}}></div>
          </div>
          <p className="text-muted" style={{marginTop: '0.5rem', fontSize: '0.9rem'}}>{progress?.globalPercentage || 0}% completado</p>
        </div>

        <div className="glass-panel p-6" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <h3 className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '1rem'}}>Última Actividad</h3>
            <h2>{progress?.lastVisitedModule === '/modulo/fundamentos' ? 'Fundamentos Teóricos' : 'Bienvenida'}</h2>
            <p className="text-muted" style={{marginBottom: '1.5rem'}}>Bases del Coaching, Física Cuántica y Ontología.</p>
          </div>
          <button 
            className="btn-primary"
            onClick={() => navigate(progress?.lastVisitedModule || '/modulo/fundamentos')}
          >
            Continuar donde lo dejé
          </button>
        </div>
      </section>
    </>
  )
}
