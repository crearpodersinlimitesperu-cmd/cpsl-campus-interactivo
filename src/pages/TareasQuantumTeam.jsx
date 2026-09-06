import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { CATEGORIAS_RETOS, TRADUCTOR_EXCUSAS, RETOS_AUTOENTRENAMIENTO_DEFAULT } from '../data/retosAutoentrenamientoData';

export default function TareasQuantumTeam() {
  const { user } = useAuth();
  const [vistaActiva, setVistaActiva] = useState('tareas');
  
  const [tareasAsignadas, setTareasAsignadas] = useState([]);
  const [tareasQueYoAsigne, setTareasQueYoAsigne] = useState([]);
  const [tabTareas, setTabTareas] = useState('activas');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTareasAsignadas([
      {
        id: 't-1',
        titulo: 'Revisar Embudo C1',
        descripcion: 'Verificar datos de Quito.',
        asignadoA: user?.uid,
        asignadoPorEmail: 'jose.sanchez@crearpsl.net',
        asignadoPorNombre: 'Jose Sanchez',
        estado: 'pendiente',
        progreso: 20,
        deadline: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2).toISOString(),
      },
      {
        id: 't-2',
        titulo: 'Enviar reporte mensual',
        descripcion: 'Cerrar el mes con los KPIs completos.',
        asignadoA: user?.uid,
        asignadoPorEmail: 'jose.sanchez@crearpsl.net',
        asignadoPorNombre: 'Jose Sanchez',
        estado: 'pendiente',
        progreso: 80,
        deadline: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
      }
    ]);
  }, [user]);

  const getDeadlineStatus = (deadline) => {
    if (!deadline) return { color: '#64748b', bgColor: 'rgba(100,116,139,0.1)', label: 'Sin fecha', icon: '📅', urgencia: 'sin_fecha' };
    const ahora = new Date();
    const fecha = new Date(deadline);
    const diffMs = fecha - ahora;
    const diffDias = diffMs / (1000 * 60 * 60 * 24);
    const diffHoras = Math.floor(Math.abs(diffMs) / (1000 * 60 * 60));
    const diffMinutos = Math.floor((Math.abs(diffMs) % (1000 * 60 * 60)) / (1000 * 60));
    
    if (diffMs < 0) {
      const diasVencida = Math.floor(Math.abs(diffMs) / (1000 * 60 * 60 * 24));
      const hVencida = Math.floor((Math.abs(diffMs) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      return { color: '#ef4444', bgColor: 'rgba(239,68,68,0.15)', label: `VENCIDA hace ${diasVencida > 0 ? diasVencida + 'd ' : ''}${hVencida}h`, icon: '🔴', urgencia: 'vencida' };
    }
    if (diffDias <= 1) {
      return { color: '#f59e0b', bgColor: 'rgba(245,158,11,0.15)', label: `⏰ ${diffHoras}h ${diffMinutos}m restantes`, icon: '🟡', urgencia: 'urgente' };
    }
    if (diffDias <= 3) {
      return { color: '#f59e0b', bgColor: 'rgba(245,158,11,0.1)', label: `⚠️ Vence en ${Math.ceil(diffDias)} días`, icon: '🟡', urgencia: 'pronto' };
    }
    return { color: '#10b981', bgColor: 'rgba(16,185,129,0.1)', label: `✅ Vence en ${Math.ceil(diffDias)} días`, icon: '🟢', urgencia: 'ok' };
  };

  const tareasClasificadas = useMemo(() => {
    const todasMisTareas = [...tareasAsignadas, ...tareasQueYoAsigne.filter(
      t => !tareasAsignadas.find(ta => ta.id === t.id)
    )];
    return {
      activas: todasMisTareas.filter(t => {
        const noCompletada = t.estado !== 'completada' && (t.progreso || 0) < 100;
        const noVencida = !t.deadline || new Date(t.deadline) >= new Date();
        return noCompletada && noVencida;
      }),
      vencidas: todasMisTareas.filter(t => {
        const vencida = t.deadline && new Date(t.deadline) < new Date();
        const sinCompletar = t.estado !== 'completada' && (t.progreso || 0) < 100;
        return vencida && sinCompletar;
      }),
      completadas: todasMisTareas.filter(t =>
        t.estado === 'completada' || (t.progreso || 0) >= 100
      ),
      historial: todasMisTareas.filter(t => {
        return t.deadline && new Date(t.deadline) < new Date();
      }),
      todas: todasMisTareas,
    };
  }, [tareasAsignadas, tareasQueYoAsigne, tick]);


  return (
    <div className="animate-fade-in p-8" style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '6rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.25rem' }}>
            <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
              SISTEMA DE GESTIÓN Y ACCIÓN
            </span>
          </div>
          <h1 className="text-gold" style={{ fontSize: '2.4rem', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
            TAREAS Y RETOS
          </h1>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <button 
          onClick={() => setVistaActiva('tareas')}
          style={{ padding: '12px 24px', fontSize: '1.1rem', fontWeight: 600, background: vistaActiva === 'tareas' ? 'rgba(255,183,3,0.15)' : 'transparent', color: vistaActiva === 'tareas' ? 'var(--crear-gold)' : 'var(--text-muted)', border: `1px solid ${vistaActiva === 'tareas' ? 'var(--crear-gold)' : 'transparent'}`, borderRadius: '8px', cursor: 'pointer' }}
        >
          📋 MIS TAREAS ASIGNADAS
        </button>
        <button 
          onClick={() => setVistaActiva('retos')}
          style={{ padding: '12px 24px', fontSize: '1.1rem', fontWeight: 600, background: vistaActiva === 'retos' ? 'rgba(255,183,3,0.15)' : 'transparent', color: vistaActiva === 'retos' ? 'var(--crear-gold)' : 'var(--text-muted)', border: `1px solid ${vistaActiva === 'retos' ? 'var(--crear-gold)' : 'transparent'}`, borderRadius: '8px', cursor: 'pointer' }}
        >
          ⚡ RETOS DE AUTOENTRENAMIENTO
        </button>
      </div>

      {vistaActiva === 'tareas' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-card)', padding: '4px', borderRadius: '8px', overflowX: 'auto' }}>
              {[
                { id: 'activas', label: 'Activas', icon: '🟢', count: tareasClasificadas.activas.length },
                { id: 'vencidas', label: 'Vencidas', icon: '⚠️', count: tareasClasificadas.vencidas.length },
                { id: 'completadas', label: 'Completadas', icon: '✅', count: tareasClasificadas.completadas.length },
                { id: 'historial', label: 'Historial', icon: '📁', count: tareasClasificadas.historial.length },
                { id: 'todas', label: 'Todas', icon: '📋', count: tareasClasificadas.todas.length }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setTabTareas(t.id)}
                  style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: tabTareas === t.id ? 'rgba(255,255,255,0.1)' : 'transparent', color: tabTareas === t.id ? '#fff' : 'var(--text-muted)', cursor: 'pointer', fontWeight: tabTareas === t.id ? 600 : 400, whiteSpace: 'nowrap' }}
                >
                  {t.icon} {t.label} <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '12px', fontSize: '0.75rem', marginLeft: '6px' }}>{t.count}</span>
                </button>
              ))}
            </div>
            <button className="btn-primary" onClick={() => alert('Próximamente: Crear tarea en Firestore')}>+ Nueva Tarea</button>
          </div>

          {tareasClasificadas[tabTareas].length === 0 ? (
             <div className="glass-panel text-center" style={{ padding: '4rem 2rem' }}>
               <h3 className="text-muted">No hay tareas en esta vista.</h3>
             </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
              {tareasClasificadas[tabTareas].map(tarea => {
                const deadlineInfo = getDeadlineStatus(tarea.deadline);
                return (
                  <div key={tarea.id} className="glass-panel" style={{ padding: '1.5rem', borderLeft: `4px solid ${deadlineInfo.color}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-main)' }}>{tarea.titulo}</h3>
                      <span style={{ background: deadlineInfo.bgColor, color: deadlineInfo.color, padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                        {deadlineInfo.icon} {deadlineInfo.label}
                      </span>
                    </div>
                    <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{tarea.descripcion}</p>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
                      <p style={{ margin: '0 0 4px 0' }}><strong>Asignado por:</strong> {tarea.asignadoPorNombre}</p>
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '4px' }}>
                        <span>Progreso</span>
                        <span>{tarea.progreso}%</span>
                      </div>
                      <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${tarea.progreso}%`, height: '100%', background: tarea.progreso === 100 ? '#22c55e' : 'var(--crear-gold)', transition: 'width 0.3s ease' }}></div>
                      </div>
                    </div>
                    <button className="btn-secondary" style={{ width: '100%' }} onClick={() => {
                        console.log('EMAIL enviado a asignador:', tarea.asignadoPorEmail, 'COMPLETADA:', tarea.titulo);
                        alert('Avance guardado. Se ha notificado al asignador (EmailJS simulado)');
                      }}>
                      Actualizar Avance
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {vistaActiva === 'retos' && (
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2 className="text-gold">⚡ Gimnasio de Coherencia</h2>
          <p className="text-muted">Los retos de autoentrenamiento están activos. (Interfaz resumida para este commit)</p>
        </div>
      )}
    </div>
  );
}
