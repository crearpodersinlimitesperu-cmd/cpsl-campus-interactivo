import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { curriculum } from '../data/curriculum';
import { getUserProgress } from '../services/db';

export default function RutaFormacion() {
  const { user } = useAuth();
  const [progress, setProgress] = useState({ completedLessons: [], evaluationsPassed: [] });

  useEffect(() => {
    if (user) {
      getUserProgress(user.uid).then(p => setProgress(p || { completedLessons: [], evaluationsPassed: [] }));
    }
  }, [user]);

  const isModuleCompleted = (mod) => {
    // Si tiene evaluación, debe estar aprobada
    if (mod.tieneEvaluacion) {
      return progress.evaluationsPassed?.includes(mod.id);
    }
    // Si no tiene evaluación, todas sus lecciones deben estar completadas
    return mod.lecciones.every(l => progress.completedLessons?.includes(l.id));
  };

  const getModuleStatus = (mod, index) => {
    if (isModuleCompleted(mod)) return 'completado';
    if (index === 0) return 'disponible';
    
    // Desbloqueado si el anterior está completado
    const prevMod = curriculum[index - 1];
    if (isModuleCompleted(prevMod)) return 'disponible';
    
    return 'bloqueado';
  };
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

        {curriculum.map((mod, index) => {
          const status = getModuleStatus(mod, index);
          return (
          <article key={mod.id} style={{position: 'relative', marginBottom: '3rem'}} aria-labelledby={`title-${mod.id}`}>
            {/* Punto en la línea */}
            <div style={{
              position: 'absolute',
              left: '-2.55rem',
              top: '5px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: status === 'bloqueado' ? 'var(--bg-card)' : 'var(--crear-gold)',
              border: `4px solid ${status === 'bloqueado' ? 'rgba(255,255,255,0.2)' : 'var(--bg-dark)'}`,
              boxShadow: status === 'bloqueado' ? 'none' : '0 0 10px rgba(255,183,3,0.5)',
              zIndex: 2
            }}></div>

            <div className={`glass-panel p-6 ${status === 'bloqueado' ? 'opacity-50' : ''}`} style={{
              opacity: status === 'bloqueado' ? 0.6 : 1,
              transition: 'all 0.3s ease',
              borderLeft: status === 'disponible' ? '4px solid var(--crear-gold)' : ''
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem'}}>
                    <h2 id={`title-${mod.id}`} style={{margin: 0}} className={status === 'bloqueado' ? 'text-muted' : 'text-gold'}>
                      {mod.titulo}
                    </h2>
                    {status === 'bloqueado' && (
                      <span aria-label="Módulo Bloqueado" style={{background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem'}}>Bloqueado</span>
                    )}
                  </div>
                  <p className="text-muted" style={{marginBottom: '1.5rem'}}>{mod.descripcion}</p>
                </div>

                {status === 'disponible' ? (
                  <Link to={`/modulo/${mod.id}`} className="btn-primary" style={{textDecoration: 'none'}} aria-label={`Iniciar ${mod.titulo}`}>
                    Iniciar Módulo
                  </Link>
                ) : status === 'bloqueado' ? (
                  <button className="btn-secondary" disabled aria-disabled="true" style={{opacity: 0.5, cursor: 'not-allowed'}} aria-label={`${mod.titulo} está bloqueado`}>
                    Bloqueado
                  </button>
                ) : (
                  <Link to={`/modulo/${mod.id}`} className="btn-secondary" style={{color: 'var(--color-success)', borderColor: 'var(--color-success)', textDecoration: 'none'}} aria-label={`${mod.titulo} completado. Repasar.`}>
                    Completado ✓
                  </Link>
                )}
              </div>
            </div>
          </article>
        )})}
      </div>
    </div>
  );
}
