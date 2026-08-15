import { useState } from 'react';
import { programaTeoria, programaHerramientas, programaSemanas, programaRecursos } from '../data/programaEntrenamiento';

export default function ProgramaEntrenamiento() {
  const [tabActivo, setTabActivo] = useState('fundamentos');
  const [semanaActiva, setSemanaActiva] = useState(null);

  const renderFundamentos = () => (
    <div className="animate-fade-in">
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem', border: '1px solid var(--crear-gold)' }}>
        <h2 className="text-gold" style={{ marginTop: 0 }}>{programaTeoria.vision.titulo}</h2>
        <p className="text-main" style={{ fontSize: '1.1rem', lineHeight: 1.6, fontStyle: 'italic' }}>
          "{programaTeoria.vision.texto}"
        </p>
        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {programaTeoria.vision.detalles.map((d, i) => (
            <div key={i} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--crear-gold)' }}>
              <strong className="text-gold" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{d.dimension}</strong>
              <span className="text-muted" style={{ fontSize: '0.95rem' }}>{d.detalle}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {programaTeoria.fundamentos.map((f, i) => (
          <div key={i} className="glass-panel" style={{ padding: '2rem' }}>
            <h3 className="text-blue" style={{ marginTop: 0, fontSize: '1.5rem', marginBottom: '1rem' }}>{f.titulo}</h3>
            {f.definicion && <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{f.definicion}</p>}
            
            {f.diferencias && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--color-error)', color: 'var(--color-error)' }}>Hacer Enrolamiento</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--crear-gold)', color: 'var(--crear-gold)' }}>Ser Enrolamiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.diferencias.map((dif, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{dif.hacer}</td>
                        <td style={{ padding: '1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>{dif.ser}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {f.filosofiaTabla && (
              <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--crear-blue)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Fuente</th>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-main)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Concepto</th>
                      <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--crear-gold)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Aplicación al Liderazgo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.filosofiaTabla.map((row, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>{row.fuente}</td>
                        <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{row.concepto}</td>
                        <td style={{ padding: '1rem', color: 'var(--text-main)' }}>{row.aplicacion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {f.pilaresEstructurados && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1rem' }}>
                {f.pilaresEstructurados.map((pilar, idx) => (
                  <div key={idx} style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--crear-gold)' }}>
                    <h4 className="text-gold" style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{pilar.nombre}</h4>
                    <p style={{ margin: '0 0 1rem 0' }}><strong>Compromiso:</strong> <span className="text-muted">{pilar.compromiso}</span></p>
                    <div style={{ marginBottom: '1rem' }}>
                      <strong>Práctica:</strong>
                      <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                        {pilar.practica.map((prac, i) => <li key={i}>{prac}</li>)}
                      </ul>
                    </div>
                    <p style={{ margin: 0 }}><strong>Impacto:</strong> <span className="text-blue">{pilar.impacto}</span></p>
                  </div>
                ))}
              </div>
            )}

            {f.ejemplos && (
              <div style={{ overflowX: 'auto', marginTop: '1rem', marginBottom: '2rem' }}>
                <h4 className="text-gold" style={{ marginBottom: '1rem' }}>Ejemplos de Futuros Imposibles</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--color-error)', color: 'var(--color-error)' }}>Futuro "Realista"</th>
                      <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid var(--crear-gold)', color: 'var(--crear-gold)' }}>Futuro de Posibilidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.ejemplos.map((ej, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{ej.realista}</td>
                        <td style={{ padding: '1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>{ej.imposible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {f.compromisos && (
              <div style={{ marginTop: '1rem' }}>
                <h4 className="text-blue" style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>Los 3 Compromisos del Programa</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                  {f.compromisos.map((comp, idx) => (
                    <div key={idx} style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '8px' }}>
                      <h5 className="text-gold" style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{comp.nombre}</h5>
                      <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{comp.descripcion}</p>
                      <strong>Cómo:</strong>
                      <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {comp.como.map((c, i) => <li key={i}>{c}</li>)}
                      </ul>
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
            {h.estructuraList && (
              <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {h.estructuraList.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
              </ul>
            )}
            
            {h.estructura && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {h.estructura.map((item, i) => (
                  <div key={i} style={{ fontSize: '0.85rem' }}>
                    <strong className="text-blue" style={{ display: 'block', marginBottom: '0.2rem' }}>{item.dimension}</strong>
                    <div style={{ color: 'var(--text-muted)', paddingLeft: '0.5rem', borderLeft: '2px solid var(--crear-gold)' }}>
                      {item.descripcion}
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
              aria-expanded={semanaActiva === s.semana}
              aria-controls={`semana-panel-${s.semana}`}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: semanaActiva === s.semana ? 'rgba(1, 180, 228, 0.1)' : 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', textAlign: 'left' }}
            >
              <div>
                <h3 style={{ margin: 0, fontSize: '1.2rem', marginBottom: '0.3rem' }}>Semana {s.semana}: <span className="text-gold">{s.titulo}</span></h3>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--crear-blue)' }}>Herramientas: {s.herramientasClave}</p>
              </div>
              <span aria-hidden="true" style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: semanaActiva === s.semana ? 'rotate(180deg)' : 'none' }}>▼</span>
            </button>
            
            {semanaActiva === s.semana && (
              <div id={`semana-panel-${s.semana}`} style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--crear-gold)', padding: '1rem', borderRadius: '8px', marginTop: '1.5rem', textAlign: 'center' }}>
                  <strong className="text-gold">Compromiso de Acción Semanal:</strong> {s.compromiso}
                </div>
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
      
      <div style={{ marginBottom: '4rem' }}>
        <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Rituales del Programa</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          {programaRecursos.dinamicas.map((d, i) => (
            <div key={i} className="glass-panel" style={{ padding: '1.5rem' }}>
              <h4 className="text-main" style={{ margin: '0 0 0.5rem 0' }}>{d.nombre}</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--crear-blue)', display: 'block', marginBottom: '1rem' }}>Cuándo: {d.uso}</span>
              <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem', fontStyle: 'italic' }}>{d.proposito}</p>
              <strong style={{ fontSize: '0.9rem' }}>Cómo:</strong>
              <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {d.instrucciones.map((inst, idx) => <li key={idx}>{inst}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h3 className="text-blue" style={{ marginBottom: '1.5rem' }}>Métricas y Evaluación</h3>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--text-main)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Métrica</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--crear-gold)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Meta</th>
                <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--crear-blue)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Cómo medir</th>
              </tr>
            </thead>
            <tbody>
              {programaRecursos.evaluacion.metricas.map((m, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '1rem', color: 'var(--text-main)', fontWeight: 'bold' }}>{m.metrica}</td>
                  <td style={{ padding: '1rem', color: 'var(--crear-gold)' }}>{m.meta}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>{m.como}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <h4 className="text-gold" style={{ marginBottom: '1rem' }}>Evaluación Final (Día 42)</h4>
          <p className="text-muted" style={{ marginBottom: '1rem' }}>Cada participante presenta:</p>
          <ol style={{ paddingLeft: '1.5rem', margin: 0, color: 'var(--text-main)', lineHeight: 1.8 }}>
            {programaRecursos.evaluacion.evaluacionFinal.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ol>
        </div>
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
          <h3 className="text-gold" style={{ marginBottom: '1.5rem' }}>Podcasts y Lecturas</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {programaRecursos.podcasts.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--crear-gold)' }}>
                <h4 className="text-main" style={{ margin: '0 0 0.3rem 0' }}>{p.titulo}</h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Tema:</strong> {p.tema}</div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {p.episodios.map((ep, idx) => (
                    <li key={idx} style={{ marginBottom: '0.4rem' }}>
                      {typeof ep === 'string' ? ep : ep.nombre}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="glass-panel" style={{ padding: '1rem', borderLeft: '3px solid var(--crear-blue)', marginTop: '1rem' }}>
              <h4 className="text-main" style={{ margin: '0 0 1rem 0' }}>Lecturas Fundamentales</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {programaRecursos.lecturas.map((l, idx) => <li key={idx}>{l}</li>)}
              </ul>
            </div>
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
