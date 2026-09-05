import { useState } from 'react';
import { maquinaQuiebres } from '../data/maquinaQuiebres';
import { useUI } from '../context/UIContext';
import { useAuth } from '../context/AuthContext';
import { logUserAction } from '../services/db';
import { celebrateBreakthrough } from '../utils/neuroAudio';

export default function MaquinaQuiebres() {
  const [patronActivo, setPatronActivo] = useState(null);
  const { isFocusMode, toggleFocusMode } = useUI();
  const { user, sessionId } = useAuth();

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '3rem' }}>
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
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', marginTop: 0 }}>Máquina de Quiebres ⚡</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Genera intervenciones quirúrgicas para romper patrones limitantes en tiempo real.
        </p>

        <div className="alert-warning" style={{ marginTop: '2rem', maxWidth: '800px', margin: '2rem auto 0 auto', textAlign: 'left' }}>
          <strong>⚠️ Disclaimer de Seguridad:</strong> Participar en intervenciones de quiebre debe ser voluntario. Cada intervención debe incluir la opción de detenerse o no participar. Asegúrate de ofrecer una alternativa silenciosa. Estas prácticas NO sustituyen atención médica o psicológica; no utilices intervenciones intensas con personas en crisis activa o trauma reciente.
        </div>
      </header>

      {/* Arquitectura Teórica */}
      <section className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <h3 className="text-blue" style={{ marginBottom: '1.5rem', marginTop: 0 }}>Arquitectura: Las 4 Fases del Quiebre</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0' }}>1. Interrupción</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Rompe la inercia del patrón con Groundings o preguntas disruptivas.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0' }}>2. Desplazamiento</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Mueve a la persona de su posición fija a la posibilidad usando Dinámicas.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0' }}>3. Declaración</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Compromisos públicos, contratos o manifiestos del equipo.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0' }}>4. Acción</h4>
            <p className="text-muted" style={{ fontSize: '0.85rem', margin: 0 }}>Traducir el quiebre en resultados con planes y Checkpoints.</p>
          </div>
        </div>
      </section>

      {/* Selector de Patrones Limitantes */}
      <h3 className="text-main" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Los 12 Patrones Limitantes</h3>
      <p className="text-muted" style={{ textAlign: 'center', marginBottom: '2rem' }}>Haz clic en el patrón que identifica a tu equipo para desplegar su receta de quiebre.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {maquinaQuiebres.map((mq) => (
          <button 
            key={mq.id}
            onClick={() => {
              const isOpening = patronActivo !== mq.id;
              setPatronActivo(isOpening ? mq.id : null);
              if (isOpening && user) {
                logUserAction(user.uid, sessionId, 'Diseñó Quiebre', mq.patron);
              }
            }}
            aria-pressed={patronActivo === mq.id}
            style={{
              background: patronActivo === mq.id ? 'var(--crear-blue)' : 'rgba(255,255,255,0.03)',
              color: patronActivo === mq.id ? '#fff' : 'var(--text-main)',
              border: `1px solid ${patronActivo === mq.id ? 'var(--crear-blue)' : 'rgba(255,255,255,0.1)'}`,
              padding: '1.2rem',
              borderRadius: '12px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <strong style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'block' }}>{mq.id}. {mq.patron}</strong>
            <span style={{ fontSize: '0.85rem', opacity: 0.8, lineHeight: 1.4 }}>{mq.descripcion}</span>
          </button>
        ))}
      </div>

      {/* Visualizador de la Receta (Aparece al seleccionar un patrón) */}
      {patronActivo && (
        <div className="glass-panel animate-fade-in" style={{ padding: '2rem', border: '1px solid var(--crear-gold)' }}>
          {maquinaQuiebres.filter(m => m.id === patronActivo).map(mq => (
            <div key={mq.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                <h2 className="text-gold" style={{ margin: 0 }}>Receta: {mq.patron}</h2>
                <button 
                  onClick={() => setPatronActivo(null)}
                  aria-label="Cerrar receta"
                  style={{ background: 'transparent', color: 'var(--text-muted)', border: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
                >
                  &times;
                </button>
              </div>

              <div className="alert-info" style={{ marginBottom: '2rem' }}>
                <strong className="text-blue">Quiebre Necesario:</strong> {mq.quiebre_necesario}
              </div>

              {/* Receta Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {mq.receta.map((paso, idx) => (
                  <div key={idx} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '150px 1fr', 
                    gap: '1rem', 
                    background: 'rgba(0,0,0,0.2)', 
                    padding: '1rem', 
                    borderRadius: '8px',
                    borderLeft: `4px solid ${idx === 0 ? 'var(--color-error)' : idx === 1 ? '#ffb703' : idx === 2 ? '#01b4e4' : 'var(--color-success)'}` 
                  }}>
                    <div style={{ fontWeight: 'bold', color: 'var(--text-main)', fontSize: '0.9rem' }}>{paso.fase}</div>
                    <div>
                      <strong style={{ color: 'var(--crear-gold)', display: 'block', marginBottom: '0.2rem' }}>{paso.herramienta}</strong>
                      <span className="text-muted" style={{ fontSize: '0.9rem' }}>{paso.instrucciones}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="highlight-blue" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <span style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '0.5rem', color: 'var(--crear-blue)' }}>Pregunta de Quiebre</span>
                <strong style={{ fontSize: '1.2rem', color: 'var(--text-main, #fff)' }}>"{mq.pregunta_quiebre}"</strong>
                <div style={{ marginTop: '1.5rem' }}>
                  <button
                    onClick={() => {
                      celebrateBreakthrough();
                      if (user) logUserAction(user.uid, sessionId, 'Rompió Patrón (Quiebre)', `Patrón: ${mq.patron}`);
                    }}
                    className="btn-primary"
                    style={{ fontSize: '0.95rem', padding: '12px 28px', cursor: 'pointer' }}
                  >
                    ⚡ ¡Superar Patrón y Declarar Victoria!
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
