import { useState } from 'react';
import { programaTeoria, programaHerramientas, programaSemanas, programaRecursos } from '../data/programaEntrenamiento';

export default function ProgramaEntrenamiento() {
  const [tabActivo, setTabActivo] = useState('fundamentos');
  const [semanaActiva, setSemanaActiva] = useState(null);

  const renderFundamentos = () => (
    <div className="animate-fade-in">
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', border: '1px solid var(--crear-gold)' }}>
        <h2 className="text-gold" style={{ marginTop: 0 }}>{programaTeoria.vision.titulo}</h2>
        <p className="text-main" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>{programaTeoria.vision.texto}</p>
        <ul className="text-muted" style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
          {programaTeoria.vision.detalles.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {programaTeoria.fundamentos.map((f, i) => (
          <div key={i} className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 className="text-blue" style={{ marginTop: 0 }}>{f.titulo}</h3>
            {f.definicion && <p className="text-muted" style={{ fontSize: '0.95rem' }}>{f.definicion}</p>}
            
            {f.diferencia && (
              <div style={{ marginTop: '1rem', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}><strong className="text-main">Hacer:</strong> <span className="text-muted">{f.diferencia.hacer}</span></div>
                <div><strong className="text-gold">Ser:</strong> <span className="text-muted">{f.diferencia.ser}</span></div>
              </div>
            )}

            {f.filosofia && (
              <ul className="text-muted" style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                {f.filosofia.map((item, idx) => <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
              </ul>
            )}

            {f.lista && (
              <ol className="text-muted" style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                {f.lista.map((item, idx) => <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
              </ol>
            )}

            {f.propositos && (
              <ul className="text-muted" style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                {f.propositos.map((item, idx) => <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderHerramientas = () => (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
      {programaHerramientas.map(h => (
        <div key={h.id} className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <h3 className="text-gold" style={{ margin: 0 }}>{h.id}. {h.nombre}</h3>
            <span style={{ background: 'rgba(1, 180, 228, 0.1)', color: 'var(--crear-blue)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.75rem' }}>{h.uso}</span>
          </div>
          <p className="text-main" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{h.proposito}"</p>
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
            {typeof h.estructura[0] === 'string' ? (
              <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {h.estructura.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
              </ul>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {h.estructura.map((item, i) => (
                  <div key={i} style={{ fontSize: '0.85rem' }}>
                    <strong className="text-blue" style={{ display: 'block', marginBottom: '0.2rem' }}>{item.dimension}</strong>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                      <div style={{ borderLeft: '2px solid var(--crear-gold)', paddingLeft: '0.5rem', color: 'var(--text-main)' }}><strong>Siendo:</strong> {item.siendo}</div>
                      <div style={{ borderLeft: '2px solid #ff5252', paddingLeft: '0.5rem', color: 'var(--text-muted)' }}><strong>Haciendo:</strong> {item.haciendo}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderSemanas = () => (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <p className="text-muted" style={{ textAlign: 'center', marginBottom: '2rem' }}>Despliega cada semana para ver los llamados a la acción diarios (Daily Calls).</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {programaSemanas.map(s => (
          <div key={s.semana} className="glass-panel" style={{ overflow: 'hidden' }}>
            <button 
              onClick={() => setSemanaActiva(semanaActiva === s.semana ? null : s.semana)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: semanaActiva === s.semana ? 'rgba(1, 180, 228, 0.1)' : 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', textAlign: 'left' }}
            >
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Semana {s.semana}: <span className="text-gold">{s.titulo}</span></h3>
              <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: semanaActiva === s.semana ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            
            {semanaActiva === s.semana && (
              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {s.dias.map(d => (
                    <div key={d.dia} style={{ display: 'flex', gap: '1rem', background: 'rgba(0,0,0,0.2)', padding: '0.8rem 1rem', borderRadius: '8px', alignItems: 'center' }}>
                      <div style={{ background: 'var(--crear-blue)', color: '#fff', fontWeight: 'bold', padding: '4px 8px', borderRadius: '4px', minWidth: '60px', textAlign: 'center', fontSize: '0.85rem' }}>Día {d.dia}</div>
                      <div className="text-muted" style={{ fontSize: '0.95rem' }}>{d.reto}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderRecursos = () => (
    <div className="animate-fade-in">
      <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Rituales de Contexto</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {programaRecursos.dinamicas.map((d, i) => (
          <div key={i} className="glass-panel" style={{ padding: '1.5rem' }}>
            <h4 className="text-main" style={{ margin: '0 0 0.5rem 0' }}>{d.nombre}</h4>
            <span style={{ fontSize: '0.8rem', color: 'var(--crear-blue)', display: 'block', marginBottom: '1rem' }}>{d.uso}</span>
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>{d.proposito}</p>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              {d.instrucciones.map((inst, idx) => <li key={idx}>{inst}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div>
          <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Películas Inspiradoras</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {programaRecursos.peliculas.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--crear-blue)' }}>
                <h4 className="text-main" style={{ margin: '0 0 0.3rem 0' }}>{p.titulo}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Tema:</strong> {p.tema}</div>
                <div className="highlight-blue" style={{ fontSize: '0.85rem', padding: '0.5rem', marginBottom: '0.8rem' }}><strong>Dinámica:</strong> "{p.dinamica}"</div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ display: 'inline-block', fontSize: '0.8rem', padding: '6px 12px', textAlign: 'center', textDecoration: 'none' }}>
                    🎬 Ver Tráiler / Escena
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Podcasts</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {programaRecursos.podcasts.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--crear-gold)' }}>
                <h4 className="text-main" style={{ margin: '0 0 0.3rem 0' }}>{p.titulo}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Tema:</strong> {p.tema}</div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {p.episodios.map((ep, idx) => (
                    <li key={idx} style={{ marginBottom: '0.4rem' }}>
                      {typeof ep === 'string' ? ep : ep.nombre}
                      {ep.link && (
                        <a href={ep.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--crear-gold)', textDecoration: 'none', marginLeft: '8px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                          🎧 Escuchar
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="text-blue" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Programa 6 Semanas 🚀</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Ser Enrolamiento y Creadores de Contexto de Alto Rendimiento.
        </p>
      </header>

      {/* Navegación por Pestañas */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {[
          { id: 'fundamentos', label: 'Fundamentos' },
          { id: 'herramientas', label: 'Herramientas' },
          { id: 'semanas', label: 'El Viaje (6 Semanas)' },
          { id: 'recursos', label: 'Recursos & Rituales' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setTabActivo(tab.id)}
            style={{
              background: tabActivo === tab.id ? 'var(--crear-gold)' : 'rgba(255,255,255,0.05)',
              color: tabActivo === tab.id ? '#000' : 'var(--text-main)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '10px 24px',
              borderRadius: '24px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.2s',
              fontSize: '0.95rem'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenido de la pestaña activa */}
      {tabActivo === 'fundamentos' && renderFundamentos()}
      {tabActivo === 'herramientas' && renderHerramientas()}
      {tabActivo === 'semanas' && renderSemanas()}
      {tabActivo === 'recursos' && renderRecursos()}

    </div>
  );
}
