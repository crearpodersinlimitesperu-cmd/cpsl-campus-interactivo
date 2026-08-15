import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { rutaModulos } from '../data/rutaRegistry';

export default function RutaFormacion() {
  const { user } = useAuth();
  
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

        {rutaModulos.map((mod, index) => (
          <article key={mod.id} style={{position: 'relative', marginBottom: '3rem'}} aria-labelledby={`title-${mod.id}`}>
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
                    <h2 id={`title-${mod.id}`} style={{margin: 0}} className={mod.estado === 'bloqueado' ? 'text-muted' : 'text-gold'}>
                      {mod.titulo}
                    </h2>
                    {mod.estado === 'bloqueado' && (
                      <span aria-label="Módulo Bloqueado" style={{background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem'}}>Bloqueado</span>
                    )}
                  </div>
                  <p className="text-muted" style={{marginBottom: '1.5rem'}}>{mod.descripcion}</p>
                  
                  <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <span aria-label={`Duración: ${mod.duracion}`} style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)'}}>⏱️ {mod.duracion}</span>
                  </div>
                </div>

                {mod.estado === 'disponible' ? (
                  <Link to={`/modulo/${mod.id}`} className="btn-primary" style={{textDecoration: 'none'}} aria-label={`Iniciar ${mod.titulo}`}>
                    Iniciar Módulo
                  </Link>
                ) : mod.estado === 'bloqueado' ? (
                  <button className="btn-secondary" disabled aria-disabled="true" style={{opacity: 0.5, cursor: 'not-allowed'}} aria-label={`${mod.titulo} está bloqueado`}>
                    Bloqueado
                  </button>
                ) : (
                  <button className="btn-secondary" disabled aria-disabled="true" style={{color: '#34A853', borderColor: '#34A853'}} aria-label={`${mod.titulo} completado`}>
                    Completado ✓
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
