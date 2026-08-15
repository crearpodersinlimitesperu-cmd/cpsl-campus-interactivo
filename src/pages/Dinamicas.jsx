import { useState } from 'react';
import { dinamicas } from '../data/dinamicas';

export default function Dinamicas() {
  const [filtro, setFiltro] = useState('Todos');
  const [dinamicaActiva, setDinamicaActiva] = useState(null);

  // Obtener la lista única de escenarios para el filtro
  const escenarios = ['Todos', ...new Set(dinamicas.map(d => d.escenario))];

  // Filtrar las dinámicas según la selección
  const dinamicasFiltradas = filtro === 'Todos' 
    ? dinamicas 
    : dinamicas.filter(d => d.escenario === filtro);

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '2rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Máquina de Dinámicas</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Un sistema estructurado para generar quiebres en equipos atrapados en conversaciones limitantes, moviéndolos hacia la responsabilidad y la acción.
        </p>
      </header>

      {/* Buscador / Filtro */}
      <section className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
        <h3 className="text-blue" style={{ marginBottom: '1rem', marginTop: 0 }}>¿Qué le pasa a tu equipo?</h3>
        <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Selecciona el síntoma principal para encontrar la dinámica adecuada:</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {escenarios.map(esc => (
            <button 
              key={esc}
              onClick={() => {
                setFiltro(esc);
                setDinamicaActiva(null);
              }}
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

      {/* Guía si está en "Todos" */}
      {filtro === 'Todos' && (
        <div className="alert-info" style={{ marginBottom: '2rem' }}>
          <p><strong>Guía Rápida:</strong> Cada dinámica genera un quiebre. No son ejercicios "agradables"; están diseñadas para incomodar y desplazar. Selecciona un escenario arriba o explora la lista completa a continuación.</p>
        </div>
      )}

      {/* Resultados */}
      <div className="grid-2-cols">
        {dinamicasFiltradas.map((dinamica) => (
          <div key={dinamica.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 className="text-gold" style={{ margin: 0 }}>{dinamica.id}. {dinamica.nombre}</h3>
              <span style={{ 
                background: 'rgba(1, 180, 228, 0.1)', 
                color: 'var(--crear-blue)', 
                padding: '4px 10px', 
                borderRadius: '12px', 
                fontSize: '0.75rem',
                fontWeight: 'bold',
                whiteSpace: 'nowrap'
              }}>
                ⏱️ {dinamica.tiempo}
              </span>
            </div>
            
            <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
              <strong>Escenario:</strong> {dinamica.descripcion_escenario}
            </p>
            <p className="highlight-blue" style={{ fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              🎯 <strong>Objetivo:</strong> {dinamica.objetivo}
            </p>

            {dinamicaActiva === dinamica.id ? (
              <div className="animate-fade-in">
                <h4 className="text-main" style={{ marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Instrucciones:</h4>
                <ol style={{ paddingLeft: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {dinamica.instrucciones.map((inst, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>{inst}</li>
                  ))}
                </ol>

                <h4 className="text-main" style={{ marginBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Preguntas de Cierre:</h4>
                <ul className="icon-list blue-bullets" style={{ marginBottom: '1.5rem' }}>
                  {dinamica.preguntas_cierre.map((preg, idx) => (
                    <li key={idx} style={{ color: 'var(--crear-gold)', fontWeight: 'bold', fontSize: '0.9rem' }}>{preg}</li>
                  ))}
                </ul>

                <button 
                  className="btn-secondary" 
                  style={{ width: '100%', padding: '8px' }}
                  onClick={() => setDinamicaActiva(null)}
                >
                  Ocultar Detalles
                </button>
              </div>
            ) : (
              <button 
                className="btn-primary" 
                style={{ marginTop: 'auto', padding: '10px' }}
                onClick={() => setDinamicaActiva(dinamica.id)}
              >
                Ver Instrucciones
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
