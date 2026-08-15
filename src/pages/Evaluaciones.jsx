import { Link } from 'react-router-dom';

export default function Evaluaciones() {
  const evaluaciones = [
    {
      id: 'fundamentos',
      titulo: 'Evaluación: Fundamentos',
      modulo: 'Módulo 1',
      estado: 'disponible',
      preguntas: 15,
      puntajeMinimo: 80
    },
    {
      id: 'intervencion',
      titulo: 'Evaluación: Intervención en Crisis',
      modulo: 'Módulo 2',
      estado: 'bloqueado',
      preguntas: 20,
      puntajeMinimo: 85
    }
  ];

  return (
    <div className="fade-in">
      <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Centro de Evaluaciones</h1>
      <p className="text-muted" style={{marginBottom: '3rem', fontSize: '1.1rem'}}>
        Demuestra tu dominio de los conceptos. Recuerda que la retroalimentación es parte del aprendizaje.
      </p>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {evaluaciones.map(ev => (
          <div key={ev.id} className="glass-panel" style={{padding: '2rem', display: 'flex', flexDirection: 'column', opacity: ev.estado === 'bloqueado' ? 0.6 : 1}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
              <span style={{color: 'var(--crear-blue)', fontWeight: 'bold', fontSize: '0.9rem'}}>{ev.modulo}</span>
              {ev.estado === 'bloqueado' && <span style={{fontSize: '0.8rem', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '10px'}}>Bloqueado</span>}
            </div>
            
            <h2 style={{fontSize: '1.4rem', marginBottom: '1rem'}} className={ev.estado === 'bloqueado' ? 'text-muted' : 'text-main'}>
              {ev.titulo}
            </h2>
            
            <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'rgba(255,255,255,0.6)', flex: 1}}>
              <li style={{marginBottom: '0.5rem'}}>📝 {ev.preguntas} Preguntas de opción múltiple</li>
              <li>🎯 Puntaje para aprobar: {ev.puntajeMinimo}%</li>
            </ul>

            {ev.estado === 'disponible' ? (
              <Link to={`/evaluacion/${ev.id}`} className="btn-primary" style={{textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box'}}>
                Comenzar Evaluación
              </Link>
            ) : (
              <button className="btn-secondary" disabled style={{opacity: 0.5, cursor: 'not-allowed', width: '100%'}}>
                Requiere completar módulo
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
