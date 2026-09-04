import { useState, useEffect, useMemo } from 'react';
import { 
  CATEGORIAS_RETOS, 
  TRADUCTOR_EXCUSAS, 
  RETOS_AUTOENTRENAMIENTO_DEFAULT 
} from '../data/retosAutoentrenamientoData';

export default function TareasQuantumTeam() {
  const [categoriaActiva, setCategoriaActiva] = useState('TODAS');
  const [filtroEstado, setFiltroEstado] = useState('TODOS'); // 'TODOS', 'PENDIENTES', 'COMPLETADOS'
  const [filtroDificultad, setFiltroDificultad] = useState('TODAS');
  const [busqueda, setBusqueda] = useState('');
  const [excusaIndex, setExcusaIndex] = useState(0);
  const [mostrarTraduccion, setMostrarTraduccion] = useState(false);
  const [showModalCrear, setShowModalCrear] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  // Retos personalizados creados por el usuario
  const [customRetos, setCustomRetos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cpsl_custom_autoentrenamiento_retos_v2') || '[]');
    } catch {
      return [];
    }
  });

  // Retos completados persistidos
  const [completedIds, setCompletedIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cpsl_completed_retos_v2') || '{}');
    } catch {
      return {};
    }
  });

  // Formulario de nuevo reto personal
  const [formNuevo, setFormNuevo] = useState({
    titulo: '',
    categoria: 'ACCION',
    dificultad: 'Moderada',
    tiempoEstimado: '15 min',
    puntosXP: 200,
    sintomaComico: '',
    principioDidactico: '',
    practicaConcreta: ''
  });

  // Combinación de retos base + creados por el usuario
  const todosLosRetos = useMemo(() => {
    return [...RETOS_AUTOENTRENAMIENTO_DEFAULT, ...customRetos];
  }, [customRetos]);

  // Manejo de completado de retos
  const toggleCompletado = (id) => {
    const nuevoEstado = {
      ...completedIds,
      [id]: !completedIds[id]
    };
    setCompletedIds(nuevoEstado);
    try {
      localStorage.setItem('cpsl_completed_retos_v2', JSON.stringify(nuevoEstado));
    } catch (e) {
      console.warn("Storage warning:", e);
    }
  };

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Crear nuevo reto personal
  const handleCrearReto = (e) => {
    e.preventDefault();
    if (!formNuevo.titulo.trim()) return;

    const catObj = CATEGORIAS_RETOS.find(c => c.id === formNuevo.categoria) || CATEGORIAS_RETOS[1];

    const nuevo = {
      id: 'custom-' + Date.now(),
      categoria: formNuevo.categoria,
      categoriaLabel: catObj.label,
      icono: catObj.icon,
      titulo: formNuevo.titulo.trim(),
      dificultad: formNuevo.dificultad,
      tiempoEstimado: formNuevo.tiempoEstimado || '15 min',
      puntosXP: Number(formNuevo.puntosXP) || 200,
      sintomaComico: formNuevo.sintomaComico.trim() || 'Hacerte una historia épica para no empezar hoy.',
      principioDidactico: formNuevo.principioDidactico.trim() || 'La acción concreta es el único antídoto comprobado contra la rumiación mental.',
      practicaConcreta: formNuevo.practicaConcreta.trim() || 'Ejecuta el primer paso sin mirar atrás.',
      criterioExito: 'Cumplir lo declarado sin excusas.'
    };

    const actualizados = [nuevo, ...customRetos];
    setCustomRetos(actualizados);
    try {
      localStorage.setItem('cpsl_custom_autoentrenamiento_retos_v2', JSON.stringify(actualizados));
    } catch (e) {
      console.warn("Storage error:", e);
    }

    setShowModalCrear(false);
    setFormNuevo({
      titulo: '',
      categoria: 'ACCION',
      dificultad: 'Moderada',
      tiempoEstimado: '15 min',
      puntosXP: 200,
      sintomaComico: '',
      principioDidactico: '',
      practicaConcreta: ''
    });
  };

  // Filtrado de retos
  const retosFiltrados = useMemo(() => {
    return todosLosRetos.filter(item => {
      // Categoría
      if (categoriaActiva !== 'TODAS' && item.categoria !== categoriaActiva) {
        return false;
      }
      // Dificultad
      if (filtroDificultad !== 'TODAS' && item.dificultad !== filtroDificultad) {
        return false;
      }
      // Estado
      const isDone = !!completedIds[item.id];
      if (filtroEstado === 'PENDIENTES' && isDone) return false;
      if (filtroEstado === 'COMPLETADOS' && !isDone) return false;
      // Búsqueda
      if (busqueda.trim()) {
        const query = busqueda.toLowerCase();
        const matchTitle = item.titulo.toLowerCase().includes(query);
        const matchDesc = item.practicaConcreta.toLowerCase().includes(query);
        const matchSintoma = (item.sintomaComico || '').toLowerCase().includes(query);
        if (!matchTitle && !matchDesc && !matchSintoma) return false;
      }
      return true;
    });
  }, [todosLosRetos, categoriaActiva, filtroDificultad, filtroEstado, busqueda, completedIds]);

  // Métricas y progreso
  const totalRetos = todosLosRetos.length;
  const totalCompletados = todosLosRetos.filter(r => !!completedIds[r.id]).length;
  const porcentajeProgreso = totalRetos > 0 ? Math.round((totalCompletados / totalRetos) * 100) : 0;
  
  const xpTotalAcumulada = todosLosRetos
    .filter(r => !!completedIds[r.id])
    .reduce((acc, curr) => acc + (curr.puntosXP || 100), 0);

  // Niveles didácticos de coherencia con fino humor
  const getFisonomiaNivel = (xp) => {
    if (xp < 300) return { nivel: 'Nivel 1', titulo: 'Teórico Ilusionado', subtitulo: 'Muchos podcasts escuchados, poca cama tendida.' };
    if (xp < 800) return { nivel: 'Nivel 2', titulo: 'Negociador en Recuperación', subtitulo: 'Ya no culpa al tráfico, pero aún busca atajos cósmicos.' };
    if (xp < 1500) return { nivel: 'Nivel 3', titulo: 'Practicante en Despabile', subtitulo: 'La regla de los 2 minutos empieza a ganarle al scroll.' };
    if (xp < 2500) return { nivel: 'Nivel 4', titulo: 'Arquitecto de Hechos', subtitulo: 'Sus palabras coinciden sospechosamente con sus acciones.' };
    return { nivel: 'Nivel 5', titulo: 'Maestro de la Sobriedad', subtitulo: 'Alergia total al drama y puntualidad casi quirúrgica.' };
  };

  const nivelActual = getFisonomiaNivel(xpTotalAcumulada);
  const excusaActual = TRADUCTOR_EXCUSAS[excusaIndex];

  const siguienteExcusa = () => {
    setMostrarTraduccion(false);
    setExcusaIndex((prev) => (prev + 1) % TRADUCTOR_EXCUSAS.length);
  };

  return (
    <div className="tareas-qt-page" style={{ padding: '2rem 1.5rem', maxWidth: '1280px', margin: '0 auto', color: '#f3f4f6' }}>
      
      {/* HEADER PRINCIPAL: NEUTRO, PROFESIONAL, DIDÁCTICO */}
      <div className="glass-panel" style={{ 
        padding: '2.5rem 2rem', 
        borderRadius: '1.5rem', 
        marginBottom: '2rem', 
        border: '1px solid rgba(0, 210, 255, 0.3)', 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(10, 15, 29, 0.95) 100%)'
      }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(0,210,255,0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.12)', border: '1px solid rgba(0, 210, 255, 0.35)', padding: '0.35rem 0.85rem', borderRadius: '9999px', marginBottom: '0.85rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00d2ff', boxShadow: '0 0 8px #00d2ff' }}></span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1.5px', color: '#00d2ff', textTransform: 'uppercase' }}>
                Laboratorio de Autoentrenamiento | Persona en Modo Aprendiz
              </span>
            </div>
            
            <h1 style={{ fontSize: '2.3rem', fontWeight: 900, margin: '0 0 0.75rem', letterSpacing: '-0.5px', lineHeight: 1.2 }}>
              Gimnasio de Coherencia & Retos Diarios
            </h1>
            
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
              Prácticas didácticas para domar el ego, desactivar la procrastinación sofisticada y hacer lo que dijiste que harías, 
              sin necesidad de inventarte una telenovela cósmica para justificar el aplazamiento.
            </p>
          </div>

          {/* INDICADORES DE COHERENCIA & BOTÓN NUEVO RETO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end', minWidth: '280px' }}>
            <button
              onClick={() => setShowModalCrear(true)}
              style={{
                background: 'linear-gradient(135deg, #00d2ff 0%, #1a75bc 100%)',
                color: '#030712',
                border: '1px solid #ffffff',
                boxShadow: '0 0 20px rgba(0, 210, 255, 0.5), inset 0 1px 1px rgba(255,255,255,0.8)',
                padding: '0.75rem 1.4rem',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.82rem',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>+</span>
              <span>CREAR RETO PERSONAL</span>
            </button>

            {/* Tarjeta de Nivel de Coherencia */}
            <div style={{ 
              background: 'rgba(3, 7, 18, 0.75)', 
              border: '1px solid rgba(245, 158, 11, 0.35)', 
              borderRadius: '1rem', 
              padding: '0.85rem 1.25rem', 
              width: '100%',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {nivelActual.nivel}: {nivelActual.titulo}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#00d2ff' }}>
                  {xpTotalAcumulada} XP
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.75rem', color: '#94a3b8', fontStyle: 'italic' }}>
                "{nivelActual.subtitulo}"
              </p>
            </div>
          </div>
        </div>

        {/* BARRA DE PROGRESO DE AUTOENTRENAMIENTO */}
        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1' }}>
              Índice de Ejecución Personal: <strong style={{ color: '#00d2ff' }}>{totalCompletados} de {totalRetos}</strong> superados
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10b981' }}>
              {porcentajeProgreso}% Coherencia
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
            <div 
              style={{ 
                width: `${porcentajeProgreso}%`, 
                height: '100%', 
                background: 'linear-gradient(90deg, #00d2ff 0%, #10b981 100%)',
                borderRadius: '9999px',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>
      </div>

      {/* WIDGET DIDÁCTICO: EL TRADUCTOR DE EXCUSAS A LA REALIDAD */}
      <div className="glass-panel" style={{
        padding: '1.5rem 1.75rem',
        borderRadius: '1.25rem',
        marginBottom: '2rem',
        border: '1px solid rgba(245, 158, 11, 0.25)',
        background: 'rgba(245, 158, 11, 0.04)',
        position: 'relative'
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.4rem' }}>🔍</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#f59e0b', letterSpacing: '0.5px' }}>
                Traductor Didáctico: Del Autoengaño a los Hechos
              </h3>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.8rem', color: '#94a3b8' }}>
                Un ejercicio de honestidad radical con fino humor sobre lo que nos contamos en la mente.
              </p>
            </div>
          </div>
          <button
            onClick={siguienteExcusa}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#f3f4f6',
              padding: '0.4rem 0.9rem',
              borderRadius: '0.5rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <span>Siguiente excusa</span>
            <span>➔</span>
          </button>
        </div>

        <div style={{
          background: 'rgba(15, 23, 42, 0.8)',
          borderRadius: '0.85rem',
          padding: '1.25rem',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div style={{ marginBottom: '0.75rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
              🎭 Lo que nos decimos diplomáticamente:
            </span>
            <p style={{ margin: '0.35rem 0 0', fontSize: '1.05rem', fontWeight: 700, color: '#f87171' }}>
              "{excusaActual.excusa}"
            </p>
          </div>

          {mostrarTraduccion ? (
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px dashed rgba(255, 255, 255, 0.12)' }}>
              <div style={{ marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  🎯 Lo que en verdad está sucediendo (Sin anestesia):
                </span>
                <p style={{ margin: '0.35rem 0 0', fontSize: '0.98rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                  {excusaActual.traduccion}
                </p>
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)', padding: '0.6rem 0.85rem', borderRadius: '0.5rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase' }}>
                  💡 Principio de Autoentrenamiento:
                </span>
                <span style={{ fontSize: '0.82rem', color: '#cbd5e1', marginLeft: '0.5rem' }}>
                  {excusaActual.principio}
                </span>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setMostrarTraduccion(true)}
              style={{
                marginTop: '0.5rem',
                background: 'rgba(56, 189, 248, 0.12)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                color: '#38bdf8',
                padding: '0.45rem 0.85rem',
                borderRadius: '0.5rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Revelar traducción sin anestesia 👀
            </button>
          )}
        </div>
      </div>

      {/* BARRA DE FILTROS DIDÁCTICOS Y BÚSQUEDA */}
      <div className="glass-panel" style={{
        padding: '1.25rem',
        borderRadius: '1rem',
        marginBottom: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {/* Pestañas de Categoría */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {CATEGORIAS_RETOS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              style={{
                background: categoriaActiva === cat.id ? 'rgba(0, 210, 255, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                border: categoriaActiva === cat.id ? '1px solid #00d2ff' : '1px solid rgba(255, 255, 255, 0.08)',
                color: categoriaActiva === cat.id ? '#00d2ff' : '#cbd5e1',
                padding: '0.45rem 0.85rem',
                borderRadius: '0.65rem',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.15s ease'
              }}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Filtros secundarios: Estado, Dificultad y Buscador */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            {/* Filtro Estado */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8' }}>Estado:</span>
              <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value)}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#f3f4f6',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.78rem',
                  fontWeight: 600
                }}
              >
                <option value="TODOS">Todos</option>
                <option value="PENDIENTES">Pendientes</option>
                <option value="COMPLETADOS">Superados</option>
              </select>
            </div>

            {/* Filtro Dificultad */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8' }}>Dificultad:</span>
              <select
                value={filtroDificultad}
                onChange={(e) => setFiltroDificultad(e.target.value)}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#f3f4f6',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.78rem',
                  fontWeight: 600
                }}
              >
                <option value="TODAS">Todas</option>
                <option value="Leve">Leve (Sin drama)</option>
                <option value="Moderada">Moderada (Estiramiento)</option>
                <option value="Avanzada">Avanzada (Sin excusas)</option>
              </select>
            </div>
          </div>

          {/* Input de Búsqueda */}
          <div style={{ position: 'relative', minWidth: '240px' }}>
            <input
              type="text"
              placeholder="Buscar práctica o reto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '0.45rem 0.75rem 0.45rem 2rem',
                borderRadius: '0.5rem',
                fontSize: '0.82rem',
                boxSizing: 'border-box'
              }}
            />
            <span style={{ position: 'absolute', left: '0.65rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '0.8rem' }}>
              🔍
            </span>
          </div>
        </div>
      </div>

      {/* CONTADOR DE RESULTADOS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 0.25rem' }}>
        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          Mostrando <strong style={{ color: '#f3f4f6' }}>{retosFiltrados.length}</strong> prácticas formativas disponibles
        </span>
        {totalCompletados > 0 && (
          <button
            onClick={() => {
              if (window.confirm('¿Deseas reiniciar tu progreso para una nueva semana de autoentrenamiento?')) {
                setCompletedIds({});
                localStorage.removeItem('cpsl_completed_retos_v2');
              }
            }}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              fontSize: '0.75rem',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Reiniciar progreso semanal
          </button>
        )}
      </div>

      {/* LISTADO DE RETOS EN GRID */}
      {retosFiltrados.length === 0 ? (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', borderRadius: '1rem', color: '#94a3b8' }}>
          <p style={{ fontSize: '1.1rem', margin: 0 }}>No hay retos que coincidan con estos filtros.</p>
          <button 
            onClick={() => { setCategoriaActiva('TODAS'); setFiltroEstado('TODOS'); setFiltroDificultad('TODAS'); setBusqueda(''); }}
            className="btn-secondary"
            style={{ marginTop: '1rem', fontSize: '0.82rem' }}
          >
            Limpiar filtros
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.25rem' }}>
          {retosFiltrados.map(reto => {
            const isDone = !!completedIds[reto.id];
            const isExpanded = !!expandedCards[reto.id];

            return (
              <div
                key={reto.id}
                className="glass-panel"
                style={{
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: isDone ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isDone ? 'rgba(16, 185, 129, 0.05)' : 'rgba(15, 23, 42, 0.65)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Fila superior: Categoría, Dificultad, XP */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.1rem' }}>{reto.icono || '🌱'}</span>
                      <span style={{ 
                        fontSize: '0.7rem', 
                        fontWeight: 800, 
                        color: '#00d2ff', 
                        background: 'rgba(0, 210, 255, 0.1)', 
                        padding: '0.2rem 0.5rem', 
                        borderRadius: '0.35rem',
                        textTransform: 'uppercase'
                      }}>
                        {reto.categoriaLabel}
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: reto.dificultad === 'Avanzada' ? '#f87171' : reto.dificultad === 'Moderada' ? '#fbbf24' : '#34d399',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: '0.35rem'
                      }}>
                        {reto.dificultad}
                      </span>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f59e0b' }}>
                        +{reto.puntosXP} XP
                      </span>
                    </div>
                  </div>

                  {/* Título */}
                  <h3 style={{ 
                    margin: '0 0 0.6rem 0', 
                    fontSize: '1.15rem', 
                    fontWeight: 800, 
                    color: isDone ? '#10b981' : '#f3f4f6',
                    textDecoration: isDone ? 'line-through' : 'none',
                    lineHeight: 1.3
                  }}>
                    {reto.titulo}
                  </h3>

                  {/* Síntoma Cómico (El drama que nos inventamos) */}
                  {reto.sintomaComico && (
                    <div style={{ 
                      background: 'rgba(239, 68, 68, 0.08)', 
                      borderLeft: '3px solid #f87171', 
                      padding: '0.5rem 0.75rem', 
                      borderRadius: '0.35rem',
                      marginBottom: '0.75rem'
                    }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#f87171', textTransform: 'uppercase', display: 'block', marginBottom: '0.15rem' }}>
                        🎭 El Síntoma / La Trampa Mental:
                      </span>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: '#cbd5e1', fontStyle: 'italic', lineHeight: 1.4 }}>
                        "{reto.sintomaComico}"
                      </p>
                    </div>
                  )}

                  {/* Práctica Concreta */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.25rem' }}>
                      ⚡ Práctica para Hoy ({reto.tiempoEstimado}):
                    </span>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                      {reto.practicaConcreta}
                    </p>
                  </div>

                  {/* Detalle Didáctico Desplegable */}
                  {reto.principioDidactico && (
                    <div>
                      {isExpanded ? (
                        <div style={{ 
                          background: 'rgba(16, 185, 129, 0.08)', 
                          border: '1px solid rgba(16, 185, 129, 0.2)', 
                          padding: '0.65rem 0.8rem', 
                          borderRadius: '0.5rem', 
                          marginTop: '0.5rem' 
                        }}>
                          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>
                            💡 Principio Didáctico:
                          </span>
                          <p style={{ margin: 0, fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                            {reto.principioDidactico}
                          </p>
                        </div>
                      ) : null}

                      <button
                        onClick={() => toggleExpand(reto.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#00d2ff',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '0.3rem 0',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem'
                        }}
                      >
                        <span>{isExpanded ? '▲ Ocultar fundamento' : '▼ Ver fundamento didáctico'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Botón de Completado */}
                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <button
                    onClick={() => toggleCompletado(reto.id)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 1rem',
                      borderRadius: '0.6rem',
                      border: isDone ? '1px solid #10b981' : '1px solid rgba(0, 210, 255, 0.4)',
                      background: isDone 
                        ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.35))' 
                        : 'linear-gradient(135deg, rgba(0, 210, 255, 0.15), rgba(26, 117, 188, 0.25))',
                      color: isDone ? '#34d399' : '#00d2ff',
                      fontWeight: 800,
                      fontSize: '0.82rem',
                      letterSpacing: '0.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{isDone ? '✅ PRÁCTICA SUPERADA' : '⭕ MARCAR COMO SUPERADO HOY'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL CREAR RETO PERSONAL */}
      {showModalCrear && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(3, 7, 18, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 10000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '560px',
            width: '100%',
            padding: '2rem',
            borderRadius: '1.25rem',
            border: '1px solid rgba(0, 210, 255, 0.4)',
            background: '#0a0f1d'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, color: '#f3f4f6' }}>
                🚀 Diseñar Práctica de Autoentrenamiento
              </h3>
              <button
                onClick={() => setShowModalCrear(false)}
                style={{ background: 'none', border: 'none', color: '#94a3b8', fontSize: '1.4rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCrearReto} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.3rem' }}>
                  Título del Reto o Práctica:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Saludar primero al entrar sin esperar que me sonrían"
                  value={formNuevo.titulo}
                  onChange={(e) => setFormNuevo({ ...formNuevo, titulo: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    padding: '0.55rem 0.8rem',
                    borderRadius: '0.5rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.3rem' }}>
                    Categoría:
                  </label>
                  <select
                    value={formNuevo.categoria}
                    onChange={(e) => setFormNuevo({ ...formNuevo, categoria: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#0f172a',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      padding: '0.55rem',
                      borderRadius: '0.5rem'
                    }}
                  >
                    {CATEGORIAS_RETOS.filter(c => c.id !== 'TODAS').map(c => (
                      <option key={c.id} value={c.id}>{c.icon} {c.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.3rem' }}>
                    Dificultad:
                  </label>
                  <select
                    value={formNuevo.dificultad}
                    onChange={(e) => setFormNuevo({ ...formNuevo, dificultad: e.target.value })}
                    style={{
                      width: '100%',
                      background: '#0f172a',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      padding: '0.55rem',
                      borderRadius: '0.5rem'
                    }}
                  >
                    <option value="Leve">Leve</option>
                    <option value="Moderada">Moderada</option>
                    <option value="Avanzada">Avanzada</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.3rem' }}>
                  La Trampa Mental / El Síntoma (con humor):
                </label>
                <input
                  type="text"
                  placeholder="Ej. Esperar que los demás cambien para yo estar de buen humor."
                  value={formNuevo.sintomaComico}
                  onChange={(e) => setFormNuevo({ ...formNuevo, sintomaComico: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    padding: '0.55rem 0.8rem',
                    borderRadius: '0.5rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.3rem' }}>
                  Práctica Concreta (Acción exacta):
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe qué harás exactamente hoy..."
                  value={formNuevo.practicaConcreta}
                  onChange={(e) => setFormNuevo({ ...formNuevo, practicaConcreta: e.target.value })}
                  style={{
                    width: '100%',
                    background: '#0f172a',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    padding: '0.55rem 0.8rem',
                    borderRadius: '0.5rem',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setShowModalCrear(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Guardar en mi Bitácora
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
