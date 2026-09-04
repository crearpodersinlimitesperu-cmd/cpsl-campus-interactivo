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

      {/* SECCIÓN MODO APRENDIZ & GAMIFICACIÓN STAFF (NODUS) */}
      <section aria-label="Modo Aprendiz y Gamificación Staff" style={{ marginBottom: '1.5rem' }}>
        <article className="glass-panel" style={{
          padding: '1.6rem 2rem',
          border: '1px solid rgba(255, 183, 3, 0.4)',
          background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.08) 0%, rgba(7, 13, 31, 0.9) 100%)',
          borderRadius: '1.25rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 183, 3, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 900, color: 'var(--crear-gold)', letterSpacing: '1px' }}>
                🎮 MODO APRENDIZ & NEUROMARKETING ÉTICO
              </span>
            </div>
            <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>
              Gamificación Staff & Fisonomía Nodus 2026
            </h3>
            <p className="text-muted" style={{ margin: 0, fontSize: '0.92rem', maxWidth: '650px' }}>
              Los Tres Cerebros, la Ecuación de Valor en Sopa de Letras (Alex Hormozi), el Observador Causa y el Simulador de Decisiones en Sala con Trazabilidad Causa OS.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/gamificacion')}
              className="btn-primary"
              style={{
                padding: '0.85rem 1.75rem',
                fontSize: '0.9rem',
                fontWeight: 900,
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>EXPLORAR MODO APRENDIZ ➔</span>
            </button>
            <button
              onClick={() => navigate('/guiones-mj')}
              className="btn-secondary"
              style={{
                padding: '0.85rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: 800,
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderColor: '#f59e0b',
                color: '#f59e0b'
              }}
            >
              <span>📜 BRANDSCRIPT & GUIONES MJ</span>
            </button>
          </div>
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

      {/* SECCIÓN OFICIAL: TAREAS & RETOS EN CONJUNTO DEL EQUIPO (DEADLINES C1) */}
      <section aria-label="Tareas y Retos de Equipo" style={{ marginTop: '2rem' }}>
        <article className="glass-panel" style={{ padding: '2rem', border: '1px solid rgba(0, 210, 255, 0.3)', borderRadius: '1.25rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 183, 3, 0.15)', border: '1px solid rgba(255, 183, 3, 0.4)', padding: '0.25rem 0.75rem', borderRadius: '9999px', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--crear-gold, #ffb703)', letterSpacing: '1px' }}>⚡ RETOS EN CONJUNTO & DEADLINES C1</span>
              </div>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.5rem', fontWeight: 900, color: '#ffffff' }}>
                Tareas y Retos Sincronizados de Equipo
              </h3>
              <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem', maxWidth: '650px' }}>
                Organiza las metas grupales antes, durante y después de Capítulo 1. Deadlines vivos calculados en tiempo real según la fecha de entrenamiento de tu sede.
              </p>
            </div>

            {/* BOTÓN + TAREA / RETO DE ALTO CONTRASTE Y MÁXIMA VISIBILIDAD */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate('/tareas-qt')}
                style={{
                  background: 'linear-gradient(135deg, #00d2ff 0%, #1a75bc 100%)',
                  color: '#030712',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 25px rgba(0, 210, 255, 0.6), inset 0 1px 1px rgba(255,255,255,0.8)',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 210, 255, 0.9)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 210, 255, 0.6), inset 0 1px 1px rgba(255,255,255,0.8)';
                }}
              >
                <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>+</span>
                <span>TAREAS & RETOS QT</span>
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}
