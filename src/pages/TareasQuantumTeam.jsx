import { useState, useEffect, useMemo } from 'react';
import { TAREAS_QT_C1 } from '../data/tareasQtData';
import calendarioC1 from '../data/calendario_c1.json';

// RETOS PRÁCTICOS DE AUTOENTRENAMIENTO (METAS INDIVIDUALES EN MODO APRENDIZ SINCRONIZADAS AL C1)
const RETOS_CONJUNTO_DEFAULT = [
  {
    id: "reto-01",
    tipo: "RETO_EQUIPO",
    fase: "ANTES",
    faseTitulo: "Pre-C1: Preparación y Compromiso",
    titulo: "🔥 Reto de Autoentrenamiento: Alineación y Presencia Consciente",
    descripcion: "Práctica personal de autoobservación, escucha atenta y revisión de intenciones para llegar con la mente en calma y el corazón abierto.",
    metaColectiva: "100% Compromiso y puntualidad personal",
    offsetDays: -1,
    time: "18:00",
    puntosXP: "+500 XP Aprendiz",
    origen: "Autoentrenamiento Consciente"
  },
  {
    id: "reto-02",
    tipo: "RETO_EQUIPO",
    fase: "DURANTE",
    faseTitulo: "Día 1 Viernes: El Quiebre",
    titulo: "⚡ Reto de Autoentrenamiento: Desconexión Digital y Atención Plena",
    descripcion: "Estar presente a tiempo sin distracciones. Apagar y resguardar el teléfono para entregarte al 100% al ejercicio vivencial.",
    metaColectiva: "Cero distracciones digitales durante las sesiones",
    offsetDays: 0,
    time: "09:00",
    puntosXP: "+350 XP Aprendiz",
    origen: "Estándar de Impecabilidad"
  },
  {
    id: "reto-03",
    tipo: "RETO_EQUIPO",
    fase: "DURANTE",
    faseTitulo: "Día 2 Sábado: El Espejo",
    titulo: "🛡️ Reto de Autoentrenamiento: Honestidad Radical y Aceptación",
    descripcion: "Reconocer las interpretaciones limitantes, aceptar los quiebres emocionales con compasión y sostener la palabra dada.",
    metaColectiva: "100% Honestidad emocional y apertura",
    offsetDays: 1,
    time: "20:00",
    puntosXP: "+600 XP Aprendiz",
    origen: "Módulo de Responsabilidad Radical"
  },
  {
    id: "reto-04",
    tipo: "RETO_EQUIPO",
    fase: "DURANTE",
    faseTitulo: "Día 3 Domingo: Graduación & Enrolamiento",
    titulo: "🏆 Reto de Autoentrenamiento: Compromiso con tu Siguiente Nivel",
    descripcion: "Consolidar tu plan de acción de transformación continua y definir con claridad el para qué de tu evolución personal.",
    metaColectiva: "Plan de liderazgo personal trazado",
    offsetDays: 2,
    time: "18:00",
    puntosXP: "+1000 XP Aprendiz",
    origen: "Maestría en Modo Aprendiz"
  },
  {
    id: "reto-05",
    tipo: "RETO_EQUIPO",
    fase: "DESPUÉS",
    faseTitulo: "Post-C1: Continuidad & Integración",
    titulo: "🤝 Reto de Autoentrenamiento: Integración en la Vida Cotidiana",
    descripcion: "Llevar la práctica consciente a tu familia, trabajo y relaciones, manteniendo vivo el hábito de la autoobservación.",
    metaColectiva: "Práctica diaria sostenida",
    offsetDays: 5,
    time: "19:00",
    puntosXP: "+400 XP Aprendiz",
    origen: "Cadena de Hábitos Conscientes"
  }
];

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
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL', 'TAREAS', 'RETOS'
  const [filterFase, setFilterFase] = useState('TODAS');
  const [filterRol, setFilterRol] = useState('TODOS');
  const [now, setNow] = useState(new Date());
  const [showNewTaskModal, setShowNewTaskModal] = useState(false);

  // Tareas personalizadas creadas por el usuario
  const [customItems, setCustomItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cpsl_custom_qt_items_v1') || '[]');
    } catch {
      return [];
    }
  });

  // Estado del formulario de nueva tarea/reto
  const [newItemForm, setNewItemForm] = useState({
    tipo: 'TAREA',
    titulo: '',
    descripcion: '',
    fase: 'ANTES',
    offsetDays: 0,
    time: '12:00',
    rol: 'Modo Aprendiz',
    entregable: '',
    metaColectiva: '',
    puntosXP: '+150 XP'
  });

  // Progreso completado
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
    return [...list].sort((a, b) => new Date(a.start) - new Date(b.start));
  }, [selectedSede]);

  // Seleccionar automáticamente el próximo evento futuro
  useEffect(() => {
    if (sedeEvents.length > 0) {
      const nowTime = now.getTime();
      const nextIdx = sedeEvents.findIndex(ev => new Date(ev.start).getTime() >= nowTime);
      setSelectedEventIndex(nextIdx !== -1 ? nextIdx : sedeEvents.length - 1);
    }
  }, [selectedSede, sedeEvents]);

  const activeEvent = sedeEvents[selectedEventIndex] || sedeEvents[0] || { start: '2026-09-11T09:00:00', equipo: '1' };
  const eventStartDate = useMemo(() => new Date(activeEvent.start), [activeEvent]);

  // Clave de almacenamiento
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

  // Guardar nueva tarea o reto creado
  const handleCreateNewItem = (e) => {
    e.preventDefault();
    if (!newItemForm.titulo) return;

    const newItem = {
      id: 'custom-' + Date.now(),
      ...newItemForm,
      rol: 'Modo Aprendiz',
      offsetDays: Number(newItemForm.offsetDays),
      origenManual: 'Reto Personal',
      origen: 'Autoentrenamiento Personal'
    };

    const updated = [...customItems, newItem];
    setCustomItems(updated);
    try {
      localStorage.setItem('cpsl_custom_qt_items_v1', JSON.stringify(updated));
    } catch (err) {
      console.warn("Storage error:", err);
    }

    setShowNewTaskModal(false);
    setNewItemForm({
      tipo: 'TAREA',
      titulo: '',
      descripcion: '',
      fase: 'ANTES',
      offsetDays: 0,
      time: '12:00',
      rol: 'Modo Aprendiz',
      entregable: '',
      metaColectiva: '',
      puntosXP: '+150 XP'
    });
  };

  // Unión de tareas maestras + retos en conjunto + personalizadas (todas en Modo Aprendiz)
  const allMasterItems = useMemo(() => {
    const combined = [
      ...TAREAS_QT_C1.map(t => ({ ...t, tipo: 'TAREA', rol: 'Modo Aprendiz' })),
      ...RETOS_CONJUNTO_DEFAULT.map(r => ({ ...r, rol: 'Modo Aprendiz' })),
      ...customItems.map(c => ({ ...c, rol: 'Modo Aprendiz' }))
    ];
    return combined;
  }, [customItems]);

  // Cálculo de fechas y deadlines en tiempo real
  const computedItems = useMemo(() => {
    return allMasterItems.map(item => {
      const itemDate = new Date(eventStartDate);
      itemDate.setDate(itemDate.getDate() + item.offsetDays);
      const [h, m] = (item.time || "12:00").split(':').map(Number);
      itemDate.setHours(h || 12, m || 0, 0, 0);

      const isCompleted = !!(completedTasks[eventStorageKey] && completedTasks[eventStorageKey][item.id]);
      const diffMs = itemDate.getTime() - now.getTime();
      const isPast = diffMs < 0;
      const isToday = itemDate.toDateString() === now.toDateString();

      let status = 'UPCOMING';
      if (isCompleted) status = 'DONE';
      else if (isPast) status = 'OVERDUE';
      else if (isToday) status = 'TODAY';

      return {
        ...item,
        deadlineDate: itemDate,
        diffMs,
        isCompleted,
        status
      };
    });
  }, [allMasterItems, eventStartDate, now, completedTasks, eventStorageKey]);

  // Filtros de pestaña, fase y rol
  const filteredItems = useMemo(() => {
    return computedItems.filter(item => {
      if (activeTab === 'TAREAS' && item.tipo !== 'TAREA') return false;
      if (activeTab === 'RETOS' && item.tipo !== 'RETO_EQUIPO') return false;
      if (filterFase !== 'TODAS' && item.fase !== filterFase) return false;
      if (filterRol !== 'TODOS' && item.rol && !item.rol.toLowerCase().includes(filterRol.toLowerCase()) && !item.rol.includes('Todos')) return false;
      return true;
    });
  }, [computedItems, activeTab, filterFase, filterRol]);

  // Estadísticas
  const totalCount = computedItems.length;
  const completedCount = computedItems.filter(t => t.isCompleted).length;
  const progressPct = Math.round((completedCount / totalCount) * 100) || 0;

  // Cuenta regresiva
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
      <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1.5rem', marginBottom: '2rem', border: '1px solid rgba(0, 210, 255, 0.35)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(0,210,255,0.2) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.12)', border: '1px solid rgba(0, 210, 255, 0.4)', padding: '0.35rem 0.85rem', borderRadius: '9999px', marginBottom: '0.75rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00d2ff', boxShadow: '0 0 8px #00d2ff' }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1.5px', color: '#00d2ff', textTransform: 'uppercase' }}>Autoentrenamiento — Retos y Prácticas en Vivo</span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, margin: 0, letterSpacing: '-0.5px' }}>
              Retos y Prácticas de Autoentrenamiento
            </h1>
            <p style={{ margin: '0.5rem 0 0', color: '#9ca3af', fontSize: '0.95rem', maxWidth: '650px' }}>
              Plataforma abierta para personas en modo aprendiz. Fortalece tu presencia, disciplina y autoconocimiento sin roles ni jerarquías.
            </p>
          </div>

          {/* CUENTA REGRESIVA VIVA & BOTÓN + TAREA/RETO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
            
            {/* BOTÓN + TAREA / RETO DE ALTO CONTRASTE */}
            <button
              onClick={() => setShowNewTaskModal(true)}
              style={{
                background: 'linear-gradient(135deg, #00d2ff 0%, #1a75bc 100%)',
                color: '#030712',
                border: '2px solid #ffffff',
                boxShadow: '0 0 25px rgba(0, 210, 255, 0.7), inset 0 1px 1px rgba(255,255,255,0.9)',
                padding: '0.8rem 1.6rem',
                borderRadius: '9999px',
                fontWeight: 900,
                fontSize: '0.85rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(0, 210, 255, 0.95)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 210, 255, 0.7), inset 0 1px 1px rgba(255,255,255,0.9)';
              }}
            >
              <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>+</span>
              <span>CREAR RETO O PRÁCTICA PERSONAL</span>
            </button>

            {/* Contador de Tiempo */}
            <div style={{ background: 'rgba(3, 7, 18, 0.85)', border: '1px solid rgba(212, 175, 55, 0.45)', borderRadius: '1rem', padding: '0.85rem 1.4rem', textAlign: 'center', minWidth: '260px' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--crear-gold, #ffb703)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.25rem' }}>
                {isEventPast ? '⚡ ENTRENAMIENTO EN CURSO / FINALIZADO' : '⏳ CUENTA REGRESIVA AL INICIO C1'}
              </span>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '1.4rem', fontWeight: 900, color: '#ffffff' }}>
                <div><span>{String(countdownDays).padStart(2, '0')}</span><span style={{ fontSize: '0.55rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>DÍAS</span></div>
                <span>:</span>
                <div><span>{String(countdownHours).padStart(2, '0')}</span><span style={{ fontSize: '0.55rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>HRS</span></div>
                <span>:</span>
                <div><span>{String(countdownMinutes).padStart(2, '0')}</span><span style={{ fontSize: '0.55rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>MIN</span></div>
                <span>:</span>
                <div><span style={{ color: '#00d2ff' }}>{String(countdownSeconds).padStart(2, '0')}</span><span style={{ fontSize: '0.55rem', display: 'block', color: '#9ca3af', fontWeight: 'normal' }}>SEG</span></div>
              </div>
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

      {/* PESTAÑAS: TODOS / PRÁCTICAS FORMATIVAS / RETOS DE AUTOENTRENAMIENTO */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem' }}>
        <button
          onClick={() => setActiveTab('ALL')}
          style={{
            background: activeTab === 'ALL' ? 'rgba(0, 210, 255, 0.2)' : 'transparent',
            border: activeTab === 'ALL' ? '1px solid #00d2ff' : '1px solid transparent',
            color: activeTab === 'ALL' ? '#00d2ff' : '#9ca3af',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          📋 TODOS ({computedItems.length})
        </button>
        <button
          onClick={() => setActiveTab('RETOS')}
          style={{
            background: activeTab === 'RETOS' ? 'rgba(255, 183, 3, 0.2)' : 'transparent',
            border: activeTab === 'RETOS' ? '1px solid #ffb703' : '1px solid transparent',
            color: activeTab === 'RETOS' ? '#ffb703' : '#9ca3af',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          🏆 RETOS DE AUTOENTRENAMIENTO ({computedItems.filter(i => i.tipo === 'RETO_EQUIPO').length})
        </button>
        <button
          onClick={() => setActiveTab('TAREAS')}
          style={{
            background: activeTab === 'TAREAS' ? 'rgba(0, 210, 255, 0.2)' : 'transparent',
            border: activeTab === 'TAREAS' ? '1px solid #00d2ff' : '1px solid transparent',
            color: activeTab === 'TAREAS' ? '#00d2ff' : '#9ca3af',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer'
          }}
        >
          ⚙️ PRÁCTICAS FORMATIVAS ({computedItems.filter(i => i.tipo === 'TAREA').length})
        </button>
      </div>

      {/* BARRA DE PROGRESO GLOBAL */}
      <div className="glass-panel" style={{ padding: '1rem 1.5rem', borderRadius: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#e5e7eb' }}>
            Tu Progreso en Modo Aprendiz: <span style={{ color: '#00d2ff' }}>{completedCount} de {totalCount} completados</span>
          </span>
          <span style={{ fontSize: '1rem', fontWeight: 900, color: progressPct === 100 ? '#4ade80' : 'var(--crear-gold, #ffb703)' }}>
            {progressPct}%
          </span>
        </div>
        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
          <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(90deg, #1a75bc, #00d2ff, #ffb703)', transition: 'width 0.4s ease' }}></div>
        </div>
      </div>

      {/* FILTROS DE FASE */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
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
              cursor: 'pointer'
            }}
          >
            {f === 'TODAS' ? 'TODAS LAS FASES' : f === 'ANTES' ? '🔵 PRE-C1' : f === 'DURANTE' ? '⚡ DURANTE C1' : '🟢 POST-C1'}
          </button>
        ))}
      </div>

      {/* LISTA DINÁMICA DE TAREAS Y RETOS */}
      <div style={{ display: 'grid', gap: '1rem' }}>
        {filteredItems.map((item) => {
          const isReto = item.tipo === 'RETO_EQUIPO';
          return (
            <div
              key={item.id}
              onClick={() => toggleTask(item.id)}
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '1rem',
                border: item.isCompleted
                  ? '1px solid rgba(74, 222, 128, 0.4)'
                  : isReto
                  ? '1px solid rgba(255, 183, 3, 0.45)'
                  : item.status === 'OVERDUE'
                  ? '1px solid rgba(239, 68, 68, 0.45)'
                  : item.status === 'TODAY'
                  ? '1px solid rgba(255, 183, 3, 0.55)'
                  : '1px solid rgba(255, 255, 255, 0.1)',
                background: item.isCompleted
                  ? 'rgba(74, 222, 128, 0.04)'
                  : isReto
                  ? 'rgba(255, 183, 3, 0.04)'
                  : 'rgba(11, 19, 41, 0.65)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}
            >
              <div style={{ paddingTop: '0.2rem' }}>
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => {}}
                  style={{ width: '20px', height: '20px', accentColor: '#00d2ff', cursor: 'pointer' }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        padding: '0.2rem 0.5rem',
                        borderRadius: '0.35rem',
                        textTransform: 'uppercase',
                        background: isReto ? 'rgba(255, 183, 3, 0.2)' : 'rgba(0, 210, 255, 0.15)',
                        color: isReto ? '#ffb703' : '#00d2ff',
                        border: isReto ? '1px solid rgba(255,183,3,0.4)' : '1px solid rgba(0,210,255,0.3)'
                      }}
                    >
                      {isReto ? '🏆 RETO DE AUTOENTRENAMIENTO' : item.fase}
                    </span>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: 800,
                      margin: 0,
                      color: item.isCompleted ? '#9ca3af' : '#ffffff',
                      textDecoration: item.isCompleted ? 'line-through' : 'none'
                    }}>
                      {item.titulo}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      background: item.isCompleted ? 'rgba(74, 222, 128, 0.15)' : item.status === 'OVERDUE' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                      color: item.isCompleted ? '#4ade80' : item.status === 'OVERDUE' ? '#f87171' : '#9ca3af'
                    }}>
                      {item.isCompleted ? '✓ COMPLETADO' : item.status === 'OVERDUE' ? '⚠️ VENCIDO' : 'PRÓXIMO'}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00d2ff', fontFamily: 'monospace' }}>
                      🕒 {formatFechaLarga(item.deadlineDate)}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0.3rem 0 0.6rem', lineHeight: '1.5' }}>
                  {item.descripcion}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
                  {item.metaColectiva && (
                    <span style={{ background: 'rgba(255, 183, 3, 0.1)', color: '#ffb703', padding: '0.15rem 0.5rem', borderRadius: '0.3rem', border: '1px solid rgba(255, 183, 3, 0.25)' }}>
                      🎯 <strong>Meta de Autoentrenamiento:</strong> {item.metaColectiva}
                    </span>
                  )}
                  {item.puntosXP && (
                    <span style={{ background: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', padding: '0.15rem 0.5rem', borderRadius: '0.3rem' }}>
                      ⚡ {item.puntosXP}
                    </span>
                  )}
                  <span style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#34d399', padding: '0.15rem 0.5rem', borderRadius: '0.3rem', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
                    🌱 Modo Aprendiz
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL PARA CREAR NUEVO RETO / PRÁCTICA */}
      {showNewTaskModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="glass-panel" style={{ maxWidth: '550px', width: '100%', padding: '2rem', borderRadius: '1.5rem', border: '1px solid #00d2ff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 900, margin: 0, color: '#ffffff' }}>
                🚀 Crear Reto o Práctica de Autoentrenamiento
              </h2>
              <button onClick={() => setShowNewTaskModal(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>

            <form onSubmit={handleCreateNewItem} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>TIPO:</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setNewItemForm({ ...newItemForm, tipo: 'RETO_EQUIPO' })}
                    style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', background: newItemForm.tipo === 'RETO_EQUIPO' ? '#ffb703' : 'rgba(255,255,255,0.05)', color: newItemForm.tipo === 'RETO_EQUIPO' ? '#000' : '#fff', fontWeight: 800, border: 'none', cursor: 'pointer' }}
                  >
                    🏆 RETO DE APRENDIZAJE
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewItemForm({ ...newItemForm, tipo: 'TAREA' })}
                    style={{ flex: 1, padding: '0.5rem', borderRadius: '0.5rem', background: newItemForm.tipo === 'TAREA' ? '#00d2ff' : 'rgba(255,255,255,0.05)', color: newItemForm.tipo === 'TAREA' ? '#000' : '#fff', fontWeight: 800, border: 'none', cursor: 'pointer' }}
                  >
                    ⚙️ PRÁCTICA FORMATIVA
                  </button>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>TÍTULO DEL RETO O PRÁCTICA:</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Reto de Atención Plena y Desconexión Digital"
                  value={newItemForm.titulo}
                  onChange={e => setNewItemForm({ ...newItemForm, titulo: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>DESCRIPCIÓN / PROPÓSITO PERSONAL:</label>
                <textarea
                  rows="2"
                  placeholder="Explica el propósito de autoentrenamiento que buscas fortalecer..."
                  value={newItemForm.descripcion}
                  onChange={e => setNewItemForm({ ...newItemForm, descripcion: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', resize: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>MOMENTO / FASE:</label>
                  <select
                    value={newItemForm.fase}
                    onChange={e => {
                      const f = e.target.value;
                      setNewItemForm({ ...newItemForm, fase: f, offsetDays: f === 'ANTES' ? -1 : f === 'DURANTE' ? 0 : 3 });
                    }}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                  >
                    <option value="ANTES">Pre-C1 (Antes del Viernes)</option>
                    <option value="DURANTE">Durante C1 (Viernes/Sábado/Domingo)</option>
                    <option value="DESPUÉS">Post-C1 (Integración / Cierre)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#9ca3af', marginBottom: '0.3rem' }}>HORA LÍMITE / OBJETIVO:</label>
                  <input
                    type="time"
                    value={newItemForm.time}
                    onChange={e => setNewItemForm({ ...newItemForm, time: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                  />
                </div>
              </div>

              {newItemForm.tipo === 'RETO_EQUIPO' ? (
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#ffb703', marginBottom: '0.3rem' }}>META DE AUTOENTRENAMIENTO:</label>
                  <input
                    type="text"
                    placeholder="Ej: 100% de presencia y escucha activa"
                    value={newItemForm.metaColectiva}
                    onChange={e => setNewItemForm({ ...newItemForm, metaColectiva: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(255,183,3,0.3)', color: '#fff' }}
                  />
                </div>
              ) : (
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#00d2ff', marginBottom: '0.3rem' }}>RESULTADO ESPERADO:</label>
                  <input
                    type="text"
                    placeholder="Ej: Registro de autoobservación completo"
                    value={newItemForm.entregable}
                    onChange={e => setNewItemForm({ ...newItemForm, entregable: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.6rem', background: '#0a0f1c', border: '1px solid rgba(0,210,255,0.3)', color: '#fff' }}
                  />
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setShowNewTaskModal(false)}
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '0.6rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 700 }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{ flex: 1, padding: '0.75rem', borderRadius: '0.6rem', background: '#00d2ff', color: '#000', border: 'none', cursor: 'pointer', fontWeight: 900 }}
                >
                  GUARDAR RETO
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
