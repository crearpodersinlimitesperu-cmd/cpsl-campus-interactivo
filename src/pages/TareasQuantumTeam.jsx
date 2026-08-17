import { useState, useEffect, useMemo } from 'react';
import { TAREAS_QT_C1 } from '../data/tareasQtData';
import calendarioC1 from '../data/calendario_c1.json';

export default function TareasQuantumTeam() {
  const sedes = [
    { code: 'UIO1', label: 'Quito (UIO)', flag: '🇪🇨' },
    { code: 'GYE', label: 'Guayaquil (GYE)', flag: '🇪🇨' },
    { code: 'LIM', label: 'Lima (LIM)', flag: '🇵🇪' },
    { code: 'CUE', label: 'Cuenca (CUE)', flag: '🇪🇨' },
    { code: 'MED', label: 'Medellín (MED)', flag: '🇨🇴' },
    { code: 'MEX', label: 'CDMX (MEX)', flag: '🇲🇽' }
  ];

  const [selectedSede, setSelectedSede] = useState('LIM');
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [filterFase, setFilterFase] = useState('TODAS');
  const [filterRol, setFilterRol] = useState('TODOS');
  const [now, setNow] = useState(new Date());
  const [completedTasks, setCompletedTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cpsl_qt_completed_tasks_v1') || '{}');
    } catch {
      return {};
    }
  });

  // Reloj en tiempo real
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Lista de eventos C1 de la sede seleccionada
  const sedeEvents = useMemo(() => {
    const list = calendarioC1[selectedSede] || [];
    // Ordenar cronológicamente
    return [...list].sort((a, b) => new Date(a.start) - new Date(b.start));
  }, [selectedSede]);

  // Seleccionar automáticamente el próximo evento futuro (o el más reciente)
  useEffect(() => {
    if (sedeEvents.length > 0) {
      const nowTime = now.getTime();
      const nextIdx = sedeEvents.findIndex(ev => new Date(ev.start).getTime() >= nowTime);
      setSelectedEventIndex(nextIdx !== -1 ? nextIdx : sedeEvents.length - 1);
    }
  }, [selectedSede, sedeEvents]);

  const activeEvent = sedeEvents[selectedEventIndex] || sedeEvents[0] || { start: '2026-09-11T09:00:00', equipo: '1' };
  const eventStartDate = useMemo(() => new Date(activeEvent.start), [activeEvent]);

  // Clave única para persistir el progreso de este evento
  const eventStorageKey = `${selectedSede}_EQ${activeEvent.equipo || selectedEventIndex}_${activeEvent.start}`;

  const toggleTask = (taskId) => {
    const updated = {
      ...completedTasks,
      [eventStorageKey]: {
        ...(completedTasks[eventStorageKey] || {}),
        [taskId]: !(completedTasks[eventStorageKey] && completedTasks[eventStorageKey][taskId])
      }
    };
    setCompletedTasks(updated);
    try {
      localStorage.setItem('cpsl_qt_completed_tasks_v1', JSON.stringify(updated));
    } catch (e) {
      console.warn("Storage warning:", e);
    }
  };

  // Cálculo de fechas y deadlines en tiempo real para cada tarea
  const computedTasks = useMemo(() => {
    return TAREAS_QT_C1.map(task => {
      const taskDate = new Date(eventStartDate);
      taskDate.setDate(taskDate.getDate() + task.offsetDays);
      const [h, m] = task.time.split(':').map(Number);
      taskDate.setHours(h, m, 0, 0);

      const isCompleted = !!(completedTasks[eventStorageKey] && completedTasks[eventStorageKey][task.id]);
      const diffMs = taskDate.getTime() - now.getTime();
      const isPast = diffMs < 0;
      const isToday = taskDate.toDateString() === now.toDateString();

      let status = 'UPCOMING';
      if (isCompleted) status = 'DONE';
      else if (isPast) status = 'OVERDUE';
      else if (isToday) status = 'TODAY';

      return {
        ...task,
        deadlineDate: taskDate,
        diffMs,
        isCompleted,
        status
      };
    });
  }, [eventStartDate, now, completedTasks, eventStorageKey]);

  // Filtros aplicados
  const filteredTasks = useMemo(() => {
    return computedTasks.filter(t => {
      if (filterFase !== 'TODAS' && t.fase !== filterFase) return false;
      if (filterRol !== 'TODOS' && !t.rol.toLowerCase().includes(filterRol.toLowerCase()) && !t.rol.includes('Todos')) return false;
      return true;
    });
  }, [computedTasks, filterFase, filterRol]);

  // Estadísticas de completado
  const totalTasks = computedTasks.length;
  const completedCount = computedTasks.filter(t => t.isCompleted).length;
  const progressPct = Math.round((completedCount / totalTasks) * 100) || 0;

  // Cuenta regresiva al C1
  const eventDiffMs = eventStartDate.getTime() - now.getTime();
  const isEventPast = eventDiffMs < 0;
  const countdownDays = Math.abs(Math.floor(eventDiffMs / (1000 * 60 * 60 * 24)));
  const countdownHours = Math.abs(Math.floor((eventDiffMs / (1000 * 60 * 60)) % 24));
  const countdownMinutes = Math.abs(Math.floor((eventDiffMs / (1000 * 60)) % 60));
  const countdownSeconds = Math.abs(Math.floor((eventDiffMs / 1000) % 60));

  const formatFechaLarga = (date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="tareas-qt-page" style={{ padding: '2rem 1.5rem', maxWidth: '1280px', margin: '0 auto', color: '#f3f4f6' }}>
      
      {/* HEADER DE IMPACTO */}
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1.5rem', marginBottom: '2rem', border: '1px solid rgba(0, 210, 255, 0.25)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(0,210,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.1)', border: '1px solid rgba(0, 210, 255, 0.3)', padding: '0.35rem 0.8rem', borderRadius: '9999px', marginBottom: '0.75rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00d2ff', boxShadow: '0 0 8px #00d2ff' }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1.5px', color: '#00d2ff', textTransform: 'uppercase' }}>Sistema Operativo QT — Tareas Vivas C1</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>
              Gestor de Tareas & Deadlines en Vivo
            </h1>
            <p style={{ margin: '0.5rem 0 0', color: '#9ca3af', fontSize: '0.95rem', maxWidth: '650px' }}>
              Cronograma operacional sincronizado al minuto con el calendario oficial de Capítulo 1 para tu sede.
            </p>
          </div>

          {/* CUENTA REGRESIVA VIVA */}
          <div style={{ background: 'rgba(3, 7, 18, 0.75)', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '1rem', padding: '1rem 1.5rem', textAlign: 'center', minWidth: '260px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--crear-gold, #ffb703)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>
              {isEventPast ? '⚡ ENTRENAMIENTO EN CURSO / FINALIZADO' : '⏳ CUENTA REGRESIVA AL INICIO C1'}
            </span>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', fontFamily: 'monospace', fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>
              <div><span>{String(countdownDays).padStart(2, '0')}</span><span style={{ fontSize: '0.6rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>DÍAS</span></div>
              <span>:</span>
              <div><span>{String(countdownHours).padStart(2, '0')}</span><span style={{ fontSize: '0.6rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>HRS</span></div>
              <span>:</span>
              <div><span>{String(countdownMinutes).padStart(2, '0')}</span><span style={{ fontSize: '0.6rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>MIN</span></div>
              <span>:</span>
              <div><span style={{ color: '#00d2ff' }}>{String(countdownSeconds).padStart(2, '0')}</span><span style={{ fontSize: '0.6rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>SEG</span></div>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.4rem' }}>
              📅 Viernes Inicio: <strong style={{ color: '#fff' }}>{eventStartDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* SELECTOR DE SEDE Y EDICIÓN */}
      <div className="glass-panel" style={{ padding: '1.25rem', borderRadius: '1rem', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Píldoras de Sedes */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9ca3af', marginRight: '0.25rem' }}>SEDE:</span>
          {sedes.map(s => (
            <button
              key={s.code}
              onClick={() => setSelectedSede(s.code)}
              style={{
                background: selectedSede === s.code ? 'linear-gradient(135deg, rgba(0, 210, 255, 0.25), rgba(26, 117, 188, 0.4))' : 'rgba(255, 255, 255, 0.05)',
                border: selectedSede === s.code ? '1px solid #00d2ff' : '1px solid rgba(255, 255, 255, 0.1)',
                color: selectedSede === s.code ? '#00d2ff' : '#e5e7eb',
                padding: '0.45rem 0.85rem',
                borderRadius: '0.6rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              <span>{s.flag}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Selector de Edición / Fecha de C1 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9ca3af' }}>EDICIÓN C1:</span>
          <select
            value={selectedEventIndex}
            onChange={(e) => setSelectedEventIndex(Number(e.target.value))}
            style={{
              background: '#0a0f1c',
              border: '1px solid rgba(0, 210, 255, 0.3)',
              color: '#ffffff',
              padding: '0.45rem 0.75rem',
              borderRadius: '0.6rem',
              fontSize: '0.85rem',
              fontWeight: 600
            }}
          >
            {sedeEvents.map((ev, idx) => {
              const d = new Date(ev.start);
              return (
                <option key={idx} value={idx}>
                  {`Equipo #${ev.equipo || (idx + 1)} — ${d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })} ${ev.entrenador ? `(${ev.entrenador})` : ''}`}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* BARRA DE PROGRESO GLOBAL */}
      <div className="glass-panel" style={{ padding: '1rem 1.5rem', borderRadius: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#e5e7eb' }}>
            Progreso Operativo: <span style={{ color: '#00d2ff' }}>{completedCount} de {totalTasks} tareas</span>
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 900, color: progressPct === 100 ? '#4ade80' : 'var(--crear-gold, #ffb703)' }}>
            {progressPct}%
          </span>
        </div>
        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
          <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(90deg, #1a75bc, #00d2ff, #ffb703)', transition: 'width 0.4s ease' }}></div>
        </div>
      </div>

      {/* BARRA DE FILTROS (FASE Y ROL) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {['TODAS', 'ANTES', 'DURANTE', 'DESPUÉS'].map(f => (
            <button
              key={f}
              onClick={() => setFilterFase(f)}
              style={{
                background: filterFase === f ? '#00d2ff' : 'rgba(255,255,255,0.06)',
                color: filterFase === f ? '#030712' : '#d1d5db',
                border: 'none',
                padding: '0.35rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                fontWeight: 800,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {f === 'TODAS' ? '📋 TODAS LAS FASES' : f === 'ANTES' ? '🔵 ANTES DE C1' : f === 'DURANTE' ? '⚡ DURANTE C1' : '🟢 DESPUÉS DE C1'}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600 }}>ROL:</span>
          <select
            value={filterRol}
            onChange={(e) => setFilterRol(e.target.value)}
            style={{
              background: '#0a0f1c',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#ffffff',
              padding: '0.35rem 0.6rem',
              borderRadius: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: 600
            }}
          >
            <option value="TODOS">Todos los Roles</option>
            <option value="Capitán">Capitán QT / Coordinador</option>
            <option value="Registro">Puerta & Registro</option>
            <option value="Guardianes">Guardianes de Sala</option>
            <option value="Audio">Audio & Luces</option>
            <option value="Soporte">Soporte Emocional</option>
            <option value="Logística">Logística & Materiales</option>
          </select>
        </div>
      </div>

      {/* LISTA DINÁMICA DE TAREAS */}
      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredTasks.map((task) => {
          return (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '1rem',
                border: task.isCompleted
                  ? '1px solid rgba(74, 222, 128, 0.4)'
                  : task.status === 'OVERDUE'
                  ? '1px solid rgba(239, 68, 68, 0.45)'
                  : task.status === 'TODAY'
                  ? '1px solid rgba(255, 183, 3, 0.55)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: task.isCompleted ? 'rgba(74, 222, 128, 0.04)' : 'rgba(11, 19, 41, 0.65)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}
            >
              {/* Checkbox */}
              <div style={{ paddingTop: '0.2rem' }}>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => {}}
                  style={{
                    width: '20px',
                    height: '20px',
                    accentColor: '#00d2ff',
                    cursor: 'pointer'
                  }}
                />
              </div>

              {/* Contenido de la Tarea */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0.35rem',
                        textTransform: 'uppercase',
                        background: task.fase === 'ANTES' ? 'rgba(0, 210, 255, 0.15)' : task.fase === 'DURANTE' ? 'rgba(255, 183, 3, 0.15)' : 'rgba(74, 222, 128, 0.15)',
                        color: task.fase === 'ANTES' ? '#00d2ff' : task.fase === 'DURANTE' ? '#ffb703' : '#4ade80',
                        border: task.fase === 'ANTES' ? '1px solid rgba(0,210,255,0.3)' : task.fase === 'DURANTE' ? '1px solid rgba(255,183,3,0.3)' : '1px solid rgba(74,222,128,0.3)'
                      }}
                    >
                      {task.fase}
                    </span>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      margin: 0,
                      color: task.isCompleted ? '#9ca3af' : '#ffffff',
                      textDecoration: task.isCompleted ? 'line-through' : 'none'
                    }}>
                      {task.titulo}
                    </h3>
                  </div>

                  {/* Estado / Deadline Vivo */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      background: task.isCompleted
                        ? 'rgba(74, 222, 128, 0.15)'
                        : task.status === 'OVERDUE'
                        ? 'rgba(239, 68, 68, 0.2)'
                        : task.status === 'TODAY'
                        ? 'rgba(255, 183, 3, 0.2)'
                        : 'rgba(255, 255, 255, 0.08)',
                      color: task.isCompleted
                        ? '#4ade80'
                        : task.status === 'OVERDUE'
                        ? '#f87171'
                        : task.status === 'TODAY'
                        ? '#fbbf24'
                        : '#9ca3af',
                      border: task.isCompleted
                        ? '1px solid rgba(74, 222, 128, 0.3)'
                        : task.status === 'OVERDUE'
                        ? '1px solid rgba(239, 68, 68, 0.4)'
                        : task.status === 'TODAY'
                        ? '1px solid rgba(255, 183, 3, 0.4)'
                        : '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      {task.isCompleted ? '✓ COMPLETADO' : task.status === 'OVERDUE' ? '⚠️ VENCIDO' : task.status === 'TODAY' ? '⚡ DEADLINE HOY' : 'PRÓXIMO'}
                    </span>

                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00d2ff', fontFamily: 'monospace' }}>
                      🕒 {formatFechaLarga(task.deadlineDate)}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.3rem 0 0.6rem', lineHeight: '1.5' }}>
                  {task.descripcion}
                </p>

                {/* Metadata tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                  <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.15rem 0.5rem', borderRadius: '0.3rem' }}>
                    👤 <strong>Rol:</strong> {task.rol}
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.15rem 0.5rem', borderRadius: '0.3rem' }}>
                    📦 <strong>Entregable:</strong> {task.entregable}
                  </span>
                  <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.15rem 0.5rem', borderRadius: '0.3rem', color: '#38bdf8' }}>
                    📖 {task.origenManual}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
