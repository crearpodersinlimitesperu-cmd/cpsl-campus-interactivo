import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../services/db';
import CartesianLeadershipPlane from '../components/CartesianLeadershipPlane';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [progress, setProgress] = useState(null);

  // Leer estado de métricas adaptativas de localStorage
  const [leadershipStats, setLeadershipStats] = useState(() => {
    try {
      const key = `nodus_staff_state_${user?.uid || 'guest'}`;
      const saved = localStorage.getItem(key) || localStorage.getItem('nodus_staff_state');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          rigorScore: parsed.rigorScore || 88,
          empathyScore: parsed.empathyScore || 92,
          listeningScore: parsed.listeningScore || 92,
          pressureScore: parsed.pressureScore || 90,
          ethicsScore: parsed.ethicsScore || 95,
          xp: parsed.xp || 1450,
          streak: parsed.streak || 3
        };
      }
    } catch (e) {
      console.warn('Error al leer stats de liderazgo:', e);
    }
    return {
      rigorScore: 88,
      empathyScore: 92,
      listeningScore: 92,
      pressureScore: 90,
      ethicsScore: 95,
      xp: 1450,
      streak: 3
    };
  });

  useEffect(() => {
    if (user) {
      getUserProgress(user.uid).then((data) => {
        if (data) setProgress(data);
      });
    }
  }, [user]);

  return (
    <>
      {/* CABECERA CORPORATIVA STEALTH (CERO ROLES DE SALA) */}
      <header className="dashboard-header" aria-label="Cabecera del Dashboard">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
          {user?.photoURL && (
            <img 
              src={user.photoURL} 
              alt="Foto de perfil del usuario" 
              style={{ width: '60px', height: '60px', borderRadius: '50%', border: '2px solid var(--crear-gold, #ffb703)' }} 
            />
          )}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid #10b981',
                color: '#10b981',
                fontSize: '0.72rem',
                fontWeight: 900,
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                letterSpacing: '0.5px'
              }}>
                ✓ COMPLIANCE CLEARANCE (ESTADO APROBADO)
              </span>
              <span style={{
                background: 'rgba(255, 183, 3, 0.15)',
                border: '1px solid var(--crear-gold, #ffb703)',
                color: 'var(--crear-gold, #ffb703)',
                fontSize: '0.72rem',
                fontWeight: 800,
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px'
              }}>
                🔥 Racha: {leadershipStats.streak} Días (Multiplicador 1.0x)
              </span>
            </div>
            <h2 style={{ fontSize: '2.2rem', margin: 0 }}>
              Hola, <span className="text-gold">{user?.displayName ? user.displayName.split(' ')[0] : 'Colaborador'}</span>
            </h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', margin: '0.2rem 0 0' }}>
              Centro de Comando: <strong>Liderazgo Adaptativo</strong> (Alto Rigor + Alta Empatía) • {leadershipStats.xp} XP
            </p>
          </div>
        </div>
        <button className="btn-logout" onClick={logout} aria-label="Cerrar sesión de tu cuenta">
          Cerrar sesión
        </button>
      </header>

      {/* SECCIÓN 1: CENTRO DE COMANDO & ACCIÓN PRINCIPAL "ENTRAR AL CRISOL DEL DÍA" */}
      <section aria-label="El Crisol del Día" style={{ marginBottom: '2rem' }}>
        <article className="glass-panel" style={{
          padding: '2rem',
          border: '1.5px solid rgba(255, 183, 3, 0.5)',
          background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.12) 0%, rgba(15, 23, 42, 0.95) 100%)',
          borderRadius: '1.25rem',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Badge superior */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 183, 3, 0.2)', padding: '0.3rem 0.85rem', borderRadius: '9999px', border: '1px solid rgba(255, 183, 3, 0.4)' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 900, color: 'var(--crear-gold, #ffb703)', letterSpacing: '1px' }}>
                ⚡ SITUACIÓN EN TERRENO • SIMULADOR TÁCTICO
              </span>
            </div>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
              Micro-lección diaria • Bucle de Evaluación Rigor vs. Empatía
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.8rem', fontWeight: 900, color: '#ffffff' }}>
                El Crisol del Día: Toma de Decisiones en Tiempo Real
              </h3>
              <p className="text-muted" style={{ margin: '0 0 1.25rem', fontSize: '0.98rem', lineHeight: 1.5 }}>
                Enfrenta escenarios con <strong>Avatar Reactivo</strong> en tiempo real. Calibra objeciones de clientes y desviaciones de integridad sosteniendo el contenedor ético sin caer en el autoritarismo punitivo ni en la complacencia cómplice.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {/* BOTÓN PRINCIPAL: ENTRAR AL CRISOL DEL DÍA */}
                <button
                  onClick={() => navigate('/gamificacion?tab=simulador')}
                  style={{
                    background: 'linear-gradient(135deg, #ffb703 0%, #fb8500 100%)',
                    color: '#070d1f',
                    border: '2px solid #ffffff',
                    boxShadow: '0 0 30px rgba(255, 183, 3, 0.7), inset 0 1px 1px rgba(255,255,255,0.9)',
                    padding: '1rem 2rem',
                    borderRadius: '9999px',
                    fontWeight: 900,
                    fontSize: '1rem',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.04)';
                    e.currentTarget.style.boxShadow = '0 0 40px rgba(255, 183, 3, 0.95)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 183, 3, 0.7), inset 0 1px 1px rgba(255,255,255,0.9)';
                  }}
                >
                  <span style={{ fontSize: '1.3rem' }}>⚡</span>
                  <span>ENTRAR AL CRISOL DEL DÍA</span>
                </button>

                <button
                  onClick={() => navigate('/gamificacion?tab=aprendiz')}
                  className="btn-secondary"
                  style={{
                    padding: '0.9rem 1.5rem',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '0.88rem'
                  }}
                >
                  <span>MODO APRENDIZ (MICRO-LEARNING)</span>
                </button>
              </div>
            </div>

            {/* Tarjeta de Racha y Regla de 48h */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1rem',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.6rem'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--crear-gold, #ffb703)' }}>
                  RACHA DE HONOR ACTIVA
                </span>
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 700 }}>
                  3 / 3 Días
                </span>
              </div>
              <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #ffb703, #10b981)' }} />
              </div>
              <p style={{ margin: 0, fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4 }}>
                <strong>Regla de 48 Horas:</strong> Si transcurren más de 48 horas sin resolver una simulación táctica, la racha se reinicia y disminuye 10% el multiplicador de XP corporativo.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* SECCIÓN 2: RADAR DE DESEMPEÑO Y PLANO CARTESIANO DE LIDERAZGO */}
      <section aria-label="Metrología de Desempeño y Liderazgo" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          
          {/* EL RADAR DE DESEMPEÑO (4 PILARES DE COMPETENCIA) */}
          <article className="glass-panel" style={{ padding: '1.6rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  PILAR METODOLÓGICO
                </span>
                <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 800 }}>Promedio: 91%</span>
              </div>
              <h3 style={{ margin: '0 0 1rem', fontSize: '1.3rem', fontWeight: 900, color: '#ffffff' }}>
                Radar de Desempeño Operativo
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* 1. Escucha Activa */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: 700 }}>🎧 Escucha Activa (Vasija Vacía)</span>
                    <span style={{ color: '#10b981', fontWeight: 800 }}>{leadershipStats.listeningScore}%</span>
                  </div>
                  <div style={{ height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${leadershipStats.listeningScore}%`, height: '100%', background: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Silenciamiento del juicio y contención empática</span>
                </div>

                {/* 2. Rigor Operativo */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: 700 }}>🛡️ Rigor Operativo (Sostenimiento)</span>
                    <span style={{ color: '#ffb703', fontWeight: 800 }}>{leadershipStats.rigorScore}%</span>
                  </div>
                  <div style={{ height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${leadershipStats.rigorScore}%`, height: '100%', background: '#ffb703' }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Cuidado de métricas y acuerdos sin complicidad cómplice</span>
                </div>

                {/* 3. Comunicación Ética */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: 700 }}>⚖️ Comunicación Ética (Discurso que Calma)</span>
                    <span style={{ color: '#38bdf8', fontWeight: 800 }}>{leadershipStats.ethicsScore}%</span>
                  </div>
                  <div style={{ height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${leadershipStats.ethicsScore}%`, height: '100%', background: '#38bdf8' }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Neuromarketing ético y desactivación del cerebro reptil</span>
                </div>

                {/* 4. Decisiones bajo Presión */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                    <span style={{ color: '#e2e8f0', fontWeight: 700 }}>⚡ Decisiones bajo Presión (Calma Límbica)</span>
                    <span style={{ color: '#c084fc', fontWeight: 800 }}>{leadershipStats.pressureScore}%</span>
                  </div>
                  <div style={{ height: '7px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ width: `${leadershipStats.pressureScore}%`, height: '100%', background: '#c084fc' }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Gestión de desviaciones de integridad en tiempo real</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>Calificación de Acreditación</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10b981' }}>Nivel 4: Liderazgo Adaptativo</span>
            </div>
          </article>

          {/* PLANO CARTESIANO DE LIDERAZGO ADAPTATIVO */}
          <CartesianLeadershipPlane 
            rigorScore={leadershipStats.rigorScore} 
            empathyScore={leadershipStats.empathyScore} 
            compact={false}
            showDetails={true}
          />
        </div>
      </section>

      {/* SECCIÓN 3: PREPARACIÓN Y PRESENCIA (STATE CALIBRATION) */}
      <section aria-label="Calibración de Estado (State Calibration)" style={{ marginBottom: '2rem' }}>
        <article className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--crear-blue, #00d2ff)', background: 'rgba(23, 42, 69, 0.4)', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--crear-blue, #00d2ff)', textTransform: 'uppercase' }}>
                STATE CALIBRATION
              </span>
            </div>
            <h3 className="text-blue" style={{ margin: '0 0 0.4rem', fontSize: '1.2rem' }}>
              Calibración de Estado Mental y Presencia (Ciclo 5-5)
            </h3>
            <p className="text-muted" style={{ margin: 0, fontSize: '0.92rem' }}>
              Antes de operar en el simulador o en terreno, realiza el ciclo de calibración <strong>5-5</strong>: inhala por la nariz durante 5 segundos y exhala por la boca durante 5 segundos. Repite 3 veces para armonizar el sistema nervioso.
            </p>
          </div>
          <button 
            className="btn-secondary"
            onClick={() => navigate('/groundings')}
            aria-label="Ir a la sección de Calibración de Estado"
            style={{ padding: '0.65rem 1.4rem', whiteSpace: 'nowrap', borderRadius: '9999px' }}
          >
            Ir a Calibración
          </button>
        </article>
      </section>

      {/* SECCIÓN 4: HERRAMIENTAS DIRECTAS DE AUTOENTRENAMIENTO */}
      <section aria-label="Herramientas de Autoentrenamiento" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          
          <div 
            onClick={() => navigate('/vende-sin-vender')}
            className="glass-panel" 
            style={{ padding: '1.5rem', cursor: 'pointer', border: '1px solid rgba(255, 183, 3, 0.25)', transition: 'all 0.25s ease' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--crear-gold, #ffb703)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 183, 3, 0.25)'}
          >
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}>📖</span>
            <h4 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', color: '#ffffff' }}>Vende Sin Vender</h4>
            <p className="text-muted" style={{ margin: 0, fontSize: '0.85rem' }}>
              Ecuación de Alex Hormozi, los Tres Cerebros, y el método Grand Slam para transformar obstáculos.
            </p>
          </div>

          <div 
            onClick={() => navigate('/guiones-mj')}
            className="glass-panel" 
            style={{ padding: '1.5rem', cursor: 'pointer', border: '1px solid rgba(16, 185, 129, 0.25)', transition: 'all 0.25s ease' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#10b981'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.25)'}
          >
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}>📜</span>
            <h4 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', color: '#ffffff' }}>Mentoría & Comunicación Empática</h4>
            <p className="text-muted" style={{ margin: 0, fontSize: '0.85rem' }}>
              Marco StoryBrand (SB7), aislamiento ético de objeciones y guiones de acompañamiento sin coerción.
            </p>
          </div>

          <div 
            onClick={() => navigate('/retos')}
            className="glass-panel" 
            style={{ padding: '1.5rem', cursor: 'pointer', border: '1px solid rgba(56, 189, 248, 0.25)', transition: 'all 0.25s ease' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#38bdf8'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.25)'}
          >
            <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '0.5rem' }}>🎯</span>
            <h4 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', color: '#ffffff' }}>Retos Diarios de Autoentrenamiento</h4>
            <p className="text-muted" style={{ margin: 0, fontSize: '0.85rem' }}>
              Ejercicios vivenciales de fisonomía, hábitos de disciplina y rigor personal sin jerarquías.
            </p>
          </div>

        </div>
      </section>

      {/* SECCIÓN 5: RESUMEN DE PROGRESO */}
      <section className="dashboard-grid" aria-label="Resumen de Progreso">
        <article className="glass-panel p-6">
          <h3 className="text-gold uppercase" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Progreso Global</h3>
          <div className="progress-bar-container" aria-label={`Progreso global al ${progress?.globalPercentage || 0} por ciento`}>
            <div className="progress-bar-fill" style={{ width: `${progress?.globalPercentage || 0}%` }}></div>
          </div>
          <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{progress?.globalPercentage || 0}% completado</p>
        </article>

        <article className="glass-panel p-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3 className="text-gold uppercase" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Última Actividad</h3>
            <h4 style={{ fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>
              {progress?.lastVisitedModule === '/modulo/modulo1' ? 'Fundamentos Teóricos' : 
               progress?.lastVisitedModule?.includes('evaluacion') ? 'Evaluación Completada' : 
               'Módulos Avanzados'}
            </h4>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
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
  );
}
