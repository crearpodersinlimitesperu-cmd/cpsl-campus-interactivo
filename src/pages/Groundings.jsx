import { useState, useEffect } from 'react';
import { groundings, groundingEmergencia } from '../data/groundings';
import { useUI } from '../context/UIContext';
import { useAuth } from '../context/AuthContext';
import { logUserAction } from '../services/db';

export default function Groundings() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('Inhala'); // Inhala, Mantén, Exhala
  const [timeLeft, setTimeLeft] = useState(4);


  const [filtro, setFiltro] = useState('Todos');
  const [groundingActivo, setGroundingActivo] = useState(null);
  
  const { isFocusMode, toggleFocusMode } = useUI();
  const { user, sessionId } = useAuth();

  // Obtener escenarios para el filtro
  const escenarios = ['Todos', ...new Set(groundings.map(g => g.escenario))];
  const groundingsFiltrados = filtro === 'Todos' 
    ? groundings 
    : groundings.filter(g => g.escenario === filtro);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if (phase === 'Inhala') {
              setPhase('Mantén');
              return 7;
            } else if (phase === 'Mantén') {
              setPhase('Exhala');
              return 8;
            } else {
              setPhase('Inhala');
              return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
      setPhase('Inhala');
      setTimeLeft(4);
    }
    return () => clearInterval(interval);
  }, [isActive, phase]);

  const getCircleSize = () => {
    if (!isActive) return 150;
    if (phase === 'Inhala') return 250;
    if (phase === 'Mantén') return 250;
    if (phase === 'Exhala') return 150;
    return 150;
  };

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div></div>
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', marginTop: 0 }}>Herramienta Maestra: Groundings</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Un <strong>grounding</strong> NO es meditación ni relajación. Es una intervención breve diseñada para generar un <strong>quiebre</strong> y prepararte para la acción.
        </p>
      </header>

      {/* Herramienta Auxiliar: Respiración */}
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
        <h3 className="text-main" style={{ marginBottom: '1rem', zIndex: 2 }}>Herramienta Auxiliar: Regulación 4-7-8</h3>
        <p className="text-muted" style={{ marginBottom: '2rem', zIndex: 2, textAlign: 'center', maxWidth: '600px' }}>Usa esta técnica para reducir la activación emocional antes de aplicar un grounding de quiebre.</p>
        
        <div style={{
          width: `${getCircleSize()}px`,
          height: `${getCircleSize()}px`,
          borderRadius: '50%',
          background: phase === 'Exhala' ? 'rgba(1, 180, 228, 0.2)' : 'rgba(255, 183, 3, 0.2)',
          border: `2px solid ${phase === 'Exhala' ? 'var(--crear-blue)' : 'var(--crear-gold)'}`,
          transition: phase === 'Inhala' ? 'all 4s linear' : phase === 'Exhala' ? 'all 8s linear' : 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isActive ? '0 0 40px rgba(255,183,3,0.1)' : 'none',
          marginBottom: '2rem',
          zIndex: 2
        }}>
          <h2 style={{fontSize: '2rem', margin: 0}}>{isActive ? timeLeft : '4-7-8'}</h2>
          <p style={{fontSize: '0.9rem', margin: 0, fontWeight: 'bold', textTransform: 'uppercase'}}>{isActive ? phase : 'Respiración'}</p>
        </div>

        <button className={isActive ? "btn-secondary" : "btn-primary"} onClick={() => setIsActive(!isActive)} style={{zIndex: 2}}>
          {isActive ? 'Detener' : 'Comenzar'}
        </button>
      </div>

      {/* Grounding de Emergencia */}
      <div className="alert-warning" style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: '#856404', marginBottom: '0.5rem' }}>🚨 {groundingEmergencia.nombre} ({groundingEmergencia.duracion})</h3>
        <p style={{ marginBottom: '1rem' }}>Úsalo cuando el grupo esté completamente disperso o en resistencia severa.</p>
        <ol style={{ paddingLeft: '1.2rem', margin: 0 }}>
          {groundingEmergencia.instrucciones.map((inst, idx) => (
            <li key={idx} style={{ marginBottom: '0.3rem' }}>{inst}</li>
          ))}
        </ol>
      </div>

      {/* Buscador / Filtro */}
      <section className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 className="text-blue" style={{ marginBottom: '1rem', marginTop: 0 }}>Catálogo de Groundings de Quiebre</h3>
        <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Selecciona el estado actual de los participantes para encontrar el grounding adecuado:</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {escenarios.map(esc => (
            <button 
              key={esc}
              onClick={() => {
                setFiltro(esc);
                setGroundingActivo(null);
              }}
              aria-pressed={filtro === esc}
              style={{
                background: filtro === esc ? 'var(--crear-gold)' : 'rgba(255,255,255,0.05)',
                color: filtro === esc ? '#000' : 'var(--text-main)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: filtro === esc ? 'bold' : 'normal',
                transition: 'all 0.2s',
                fontSize: '0.9rem'
              }}
            >
              {esc}
            </button>
          ))}
        </div>
      </section>

      {/* Resultados */}
      <div className="grid-2-cols">
        {groundingsFiltrados.map((g) => (
          <div key={g.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 className="text-gold" style={{ margin: 0 }}>{g.id}. {g.nombre}</h3>
              <span style={{ background: 'rgba(1, 180, 228, 0.1)', color: 'var(--crear-blue)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                ⏱️ {g.duracion}
              </span>
            </div>
            
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <strong>Escenario:</strong> {g.escenario}
            </p>
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <strong>Formato:</strong> {g.formato}
            </p>

            {groundingActivo === g.id ? (
              <div className="animate-fade-in">
                <h4 className="text-main" style={{ marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Instrucciones:</h4>
                <ol style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {g.instrucciones.map((inst, idx) => {
                    const [step, desc] = inst.split(': ');
                    return (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>
                        <strong className="text-main">{step}:</strong> {desc}
                      </li>
                    );
                  })}
                </ol>

                <div className="highlight-blue" style={{ marginBottom: '1.5rem' }}>
                  <strong>Pregunta de Cierre:</strong><br/> {g.pregunta_cierre}
                </div>

                <button className="btn-secondary" style={{ width: '100%', padding: '8px' }} onClick={() => setGroundingActivo(null)}>
                  Ocultar Detalles
                </button>
              </div>
            ) : (
              <button 
                className="btn-primary" 
                style={{ marginTop: 'auto', padding: '10px' }} 
                onClick={() => {
                  setGroundingActivo(g.id);
                  if (user) {
                    logUserAction(user.uid, sessionId, 'Abrió Grounding', g.nombre);
                  }
                }}
              >
                Ver Grounding
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
