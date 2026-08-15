import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RutaFormacion() {
  const { user } = useAuth();
  
  const modulos = [
    {
      id: 'fundamentos',
      titulo: 'Módulo 1: Fundamentos y Acuerdos',
      descripcion: 'Bases conceptuales del entrenamiento CREAR, historia y acuerdos terapéuticos.',
      estado: 'disponible', // disponible, completado, bloqueado
      duracion: '2 horas'
    },
    {
      id: 'modulo2',
      titulo: 'Módulo 2: Intervención en Crisis',
      descripcion: 'Protocolos de contención emocional y primeros auxilios psicológicos.',
      estado: 'bloqueado',
      duracion: '3 horas'
    },
    {
      id: 'modulo3',
      titulo: 'Módulo 3: Herramientas Avanzadas',
      descripcion: 'Técnicas de reestructuración cognitiva y manejo de trauma.',
      estado: 'bloqueado',
      duracion: '4 horas'
    }
  ];

  return (
    <div className="fade-in">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
        <h1 style={{fontSize: '2.5rem', margin: 0}}>Ruta de Formación</h1>
      </div>
      
      <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '3rem'}}>
        Este es el mapa de tu viaje de aprendizaje. Completa cada módulo para desbloquear el siguiente.
      </p>

      <div className="timeline" style={{position: 'relative', paddingLeft: '2rem'}}>
        {/* Línea vertical conectora */}
        <div style={{position: 'absolute', left: '0', top: '10px', bottom: '0', width: '4px', background: 'rgba(255,183,3,0.2)', borderRadius: '2px'}}></div>

        {modulos.map((mod, index) => (
          <div key={mod.id} style={{position: 'relative', marginBottom: '3rem'}}>
            {/* Punto en la línea */}
            <div style={{
              position: 'absolute',
              left: '-2.55rem',
              top: '5px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: mod.estado === 'bloqueado' ? 'var(--bg-card)' : 'var(--crear-gold)',
              border: `4px solid ${mod.estado === 'bloqueado' ? 'rgba(255,255,255,0.2)' : 'var(--bg-dark)'}`,
              boxShadow: mod.estado === 'bloqueado' ? 'none' : '0 0 10px rgba(255,183,3,0.5)',
              zIndex: 2
            }}></div>

            <div className={`glass-panel p-6 ${mod.estado === 'bloqueado' ? 'opacity-50' : ''}`} style={{
              opacity: mod.estado === 'bloqueado' ? 0.6 : 1,
              transition: 'all 0.3s ease',
              borderLeft: mod.estado === 'disponible' ? '4px solid var(--crear-gold)' : ''
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem'}}>
                    <h2 style={{margin: 0}} className={mod.estado === 'bloqueado' ? 'text-muted' : 'text-gold'}>
                      {mod.titulo}
                    </h2>
                    {mod.estado === 'bloqueado' && (
                      <span style={{background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem'}}>Bloqueado</span>
                    )}
                  </div>
                  <p className="text-muted" style={{marginBottom: '1.5rem'}}>{mod.descripcion}</p>
                  
                  <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <span style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)'}}>⏱️ {mod.duracion}</span>
                  </div>
                </div>

                {mod.estado === 'disponible' ? (
                  <Link to={`/modulo/${mod.id}`} className="btn-primary" style={{textDecoration: 'none'}}>
                    Iniciar Módulo
                  </Link>
                ) : mod.estado === 'bloqueado' ? (
                  <button className="btn-secondary" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>
                    Bloqueado
                  </button>
                ) : (
                  <button className="btn-secondary" style={{color: '#34A853', borderColor: '#34A853'}}>
                    Completado ✓
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
