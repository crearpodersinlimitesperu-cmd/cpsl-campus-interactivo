import { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAllUsers, getUserSessions } from '../services/db';
import { generarDiagnosticoAlumno } from '../services/ai';
import DOMPurify from 'dompurify';
import { curriculum } from '../data/curriculum';

export default function AdminDashboard() {
  const { user, isAdmin } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userSessions, setUserSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState('timeline'); // 'timeline' | 'ai' | 'trazabilidad'
  
  // Estados para DiagnÃ³stico IA
  const [aiReport, setAiReport] = useState(null);
  const [generatingAi, setGeneratingAi] = useState(false);

  // Filtros del Timeline
  const [timelineSearch, setTimelineSearch] = useState('');
  const [timelineFilter, setTimelineFilter] = useState('all'); // 'all' | 'action' | 'route'

  // Helper para nombres amigables de rutas
  const formatModuleName = (route) => {
    if (!route) return 'Sin actividad reciente';
    if (route.includes('evaluacion/')) {
      const modId = route.split('evaluacion/')[1]?.split('/')[0];
      const match = curriculum.find(m => m.id === modId);
      return match ? `EvaluaciÃ³n: ${match.titulo}` : `EvaluaciÃ³n ${modId}`;
    }
    if (route.includes('modulo/')) {
      const modId = route.split('modulo/')[1]?.split('/')[0];
      const match = curriculum.find(m => m.id === modId);
      return match ? match.titulo : `MÃ³dulo ${modId}`;
    }
    if (route.includes('glosario')) return 'Glosario de Alto Rendimiento';
    if (route.includes('dashboard')) return 'Dashboard Principal';
    if (route.includes('ruta')) return 'Ruta de FormaciÃ³n (Discovery)';
    if (route.includes('groundings')) return 'State Calibration';
    if (route.includes('quiebres')) return 'Simulador de Quiebres';
    if (route.includes('admin')) return 'Centro de Comando y AuditorÃ­a';
    return route;
  };

  // Filtros y ordenamiento de la tabla principal de lÃ­deres
  const [tableSearch, setTableSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'cleared' | 'required'
  const [sortBy, setSortBy] = useState('lastActive'); // 'lastActive' | 'progressDesc' | 'progressAsc' | 'nameAsc' | 'timeDesc'

  // Helper para extraer timestamp vÃ¡lido de Ãºltima actividad/conexiÃ³n
  const getUserTimestamp = (u) => {
    const candidate = u.lastLogin || u.lastActiveAt || u.updatedAt || u.createdAt;
    if (!candidate) return 0;
    if (typeof candidate === 'number') return candidate;
    if (candidate.seconds) return candidate.seconds * 1000;
    if (candidate.toDate) return candidate.toDate().getTime();
    const parsed = new Date(candidate).getTime();
    return isNaN(parsed) ? 0 : parsed;
  };

  // Filtrado y ordenamiento en tiempo real (por defecto: Ãºltima conexiÃ³n descendente)
  const processedUsers = useMemo(() => {
    return users
      .filter((u) => {
        const query = tableSearch.toLowerCase().trim();
        const matchesQuery = !query || 
          (u.displayName && u.displayName.toLowerCase().includes(query)) ||
          (u.email && u.email.toLowerCase().includes(query));
        
        if (!matchesQuery) return false;

        const pct = u.progress?.globalPercentage || 0;
        const isCleared = pct >= 30 || (u.progress?.completedLessons?.length || 0) > 2;

        if (statusFilter === 'cleared') return isCleared;
        if (statusFilter === 'required') return !isCleared;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'lastActive') {
          return getUserTimestamp(b) - getUserTimestamp(a);
        }
        if (sortBy === 'progressDesc') {
          return (b.progress?.globalPercentage || 0) - (a.progress?.globalPercentage || 0);
        }
        if (sortBy === 'progressAsc') {
          return (a.progress?.globalPercentage || 0) - (b.progress?.globalPercentage || 0);
        }
        if (sortBy === 'nameAsc') {
          const nameA = a.displayName || a.email || '';
          const nameB = b.displayName || b.email || '';
          return nameA.localeCompare(nameB);
        }
        if (sortBy === 'timeDesc') {
          return (b.progress?.totalTimeSpent || 0) - (a.progress?.totalTimeSpent || 0);
        }
        return 0;
      });
  }, [users, tableSearch, statusFilter, sortBy]);

  useEffect(() => {
    if (isAdmin) {
      getAllUsers().then(data => {
        setUsers(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [isAdmin]);

  const handleViewHistory = async (userObj) => {
    setSelectedUser(userObj);
    setActiveModalTab('timeline');
    setAiReport(null);
    setLoadingSessions(true);
    const sessions = await getUserSessions(userObj.uid);
    setUserSessions(sessions);
    setLoadingSessions(false);
  };

  const closeHistory = () => {
    setSelectedUser(null);
    setUserSessions([]);
    setAiReport(null);
  };

  const handleGenerarDiagnostico = async () => {
    if (!selectedUser) return;
    try {
      setGeneratingAi(true);
      const userMetrics = selectedUser.progress || {};
      const report = await generarDiagnosticoAlumno(selectedUser.displayName || selectedUser.email, userMetrics, userSessions);
      setAiReport(report);
      setActiveModalTab('ai');
    } catch (error) {
      console.error(error);
      setAiReport({
        error: true,
        analisis_patron: "âš ï¸ Error al conectar con el evaluador socrÃ¡tico: " + error.message,
        estado_cognitivo: "Verifica las credenciales de la API en producciÃ³n.",
        directiva_ejecutiva: "Reintentar la solicitud.",
        rigor_score: 0,
        empathy_score: 0,
        detected_archetype: "Indeterminado",
        neuromarketing_alert: "Desconectado"
      });
    } finally {
      setGeneratingAi(false);
    }
  };

  // FunciÃ³n para exportar toda la bitÃ¡cora a CSV
  const handleExportCSV = () => {
    if (!selectedUser || !userSessions.length) return;
    
    const headers = ["Fecha", "Hora", "ID_Sesion", "Duracion_Min", "Tipo_Evento", "Ruta_o_Accion", "Detalles", "IP", "Ubicacion", "Dispositivo"];
    const rows = [];

    userSessions.forEach(session => {
      const started = new Date(session.startedAt);
      const fecha = started.toLocaleDateString();
      const hora = started.toLocaleTimeString();
      const id = session.sessionId || 'N/A';
      const dur = session.durationMinutes || 0;
      const ip = session.ip || selectedUser.lastIp || 'N/A';
      const loc = session.location || selectedUser.lastLocation || 'N/A';
      const dev = (session.device || 'Web').replace(/,/g, ' ');

      if (session.history && session.history.length > 0) {
        session.history.forEach(h => {
          const hTime = new Date(h.timestamp).toLocaleTimeString();
          rows.push([
            fecha,
            hTime,
            id,
            dur,
            h.type || 'evento',
            h.type === 'action' ? (h.action || '') : (h.path || ''),
            (h.details || '').replace(/,/g, ' '),
            ip,
            loc,
            dev
          ]);
        });
      } else {
        rows.push([fecha, hora, id, dur, 'inicio_sesion', 'Acceso al Campus', '', ip, loc, dev]);
      }
    });

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const cleanName = (selectedUser.displayName || 'estudiante').replace(/\s+/g, '_');
    link.setAttribute("download", `auditoria_interrupcion_${cleanName}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtrado de eventos del timeline
  const filteredEventsSummary = useMemo(() => {
    if (!userSessions.length) return { sessionsCount: 0, actionsCount: 0, routesCount: 0 };
    let actions = 0;
    let routes = 0;
    userSessions.forEach(s => {
      if (s.history) {
        s.history.forEach(h => {
          if (h.type === 'action') actions++;
          else routes++;
        });
      }
    });
    return { sessionsCount: userSessions.length, actionsCount: actions, routesCount: routes };
  }, [userSessions]);

  if (loading) {
    return (
      <div className="p-8 text-center" style={{ color: 'var(--crear-gold)' }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>âš¡</div>
        <p>Cargando telemetrÃ­a de lÃ­deres en el Sistema InterrupciÃ³n...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="p-8 text-center glass-panel" style={{ maxWidth: '600px', margin: '4rem auto' }}>
        <h2 style={{ color: 'var(--color-error)', fontSize: '2rem', marginTop: 0 }}>Acceso Restringido (Action Required)</h2>
        <p className="text-muted">Se requiere nivel de Director de Operaciones o Administrador para auditar la telemetrÃ­a.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in p-8" style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.25rem' }}>
            <span style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#38bdf8', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
              SISTEMA INTERRUPCIÃ“N
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>MÃ³dulo de TelemetrÃ­a y Rigor Operativo</span>
          </div>
          <h1 className="text-gold" style={{ fontSize: '2.4rem', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
            CENTRO DE COMANDO Y AUDITORÃA
          </h1>
          <p className="text-muted" style={{ fontSize: '1.05rem', margin: 0 }}>
            SupervisiÃ³n inmutable de avance, fisonomÃ­a de conexiÃ³n y congruencia operacional de los lÃ­deres.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="btn-secondary" onClick={() => window.location.href = '/monitor-vuelos'}>
            ✈️ Monitor de Vuelos
          </button>
          <button className="btn-secondary" onClick={() => alert('Próximamente: Portafolio PMO')}>
            📈 Portafolio PMO
          </button>
          <button className="btn-secondary" onClick={() => alert('Próximamente: OKRs Cascade')}>
            🎯 OKRs (Cascade)
          </button>
          <div className="glass-panel" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{users.length} LÃ­deres Registrados</span>
          </div>
        </div>
      </header>

      {/* Barra de Filtros y Ordenamiento */}
      <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', border: '1px solid rgba(255, 183, 3, 0.2)' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flex: 1, minWidth: '280px', maxWidth: '450px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <input 
              type="text"
              placeholder="Buscar por nombre o correo..."
              value={tableSearch}
              onChange={(e) => setTableSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 14px 9px 36px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(0,0,0,0.25)',
                color: 'var(--text-main)',
                fontSize: '0.88rem'
              }}
            />
            <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6, fontSize: '0.9rem' }}>ðŸ”</span>
          </div>
          {tableSearch && (
            <button 
              onClick={() => setTableSearch('')}
              className="btn-secondary"
              style={{ padding: '6px 10px', fontSize: '0.75rem' }}
            >
              Limpiar
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* PÃ­ldoras de Estado */}
          <div style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', padding: '3px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <button
              onClick={() => setStatusFilter('all')}
              style={{
                padding: '5px 12px',
                borderRadius: '6px',
                border: 'none',
                background: statusFilter === 'all' ? 'var(--crear-gold)' : 'transparent',
                color: statusFilter === 'all' ? '#000' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              Todos ({users.length})
            </button>
            <button
              onClick={() => setStatusFilter('cleared')}
              style={{
                padding: '5px 12px',
                borderRadius: '6px',
                border: 'none',
                background: statusFilter === 'cleared' ? '#22c55e' : 'transparent',
                color: statusFilter === 'cleared' ? '#fff' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              ðŸŸ¢ Clearance
            </button>
            <button
              onClick={() => setStatusFilter('required')}
              style={{
                padding: '5px 12px',
                borderRadius: '6px',
                border: 'none',
                background: statusFilter === 'required' ? '#ef4444' : 'transparent',
                color: statusFilter === 'required' ? '#fff' : 'var(--text-muted)',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              ðŸ”´ Action Req.
            </button>
          </div>

          {/* Selector de Ordenamiento */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Ordenar:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '7px 12px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 183, 3, 0.3)',
                background: 'var(--bg-card)',
                color: 'var(--text-main)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <option value="lastActive">âš¡ Ãšltima ConexiÃ³n (Recientes)</option>
              <option value="progressDesc">ðŸ“ˆ Mayor Progreso</option>
              <option value="progressAsc">ðŸ“‰ Menor Progreso</option>
              <option value="nameAsc">ðŸ”¤ Nombre (A - Z)</option>
              <option value="timeDesc">â±ï¸ Mayor Tiempo Total</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tabla Principal de Estudiantes */}
      <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto', border: '1px solid rgba(255,255,255,0.08)' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: '900px' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(255, 183, 3, 0.3)' }}>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>LÃ­der / Estudiante</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Estado de Rigor</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Progreso Global</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Lecciones</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ãšltima Actividad</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tiempo Total</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>AuditorÃ­a de DesempeÃ±o</th>
            </tr>
          </thead>
          <tbody>
            {processedUsers.length === 0 ? (
              <tr>
                <td colSpan={7} style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>ðŸ”</div>
                  <div style={{ fontWeight: 600 }}>No se encontraron lÃ­deres con los filtros aplicados.</div>
                  <div style={{ fontSize: '0.82rem', marginTop: '4px' }}>Prueba con otro tÃ©rmino de bÃºsqueda o cambia el estado.</div>
                </td>
              </tr>
            ) : processedUsers.map((u) => {
              const pct = u.progress?.globalPercentage || 0;
              const isCleared = pct >= 30 || (u.progress?.completedLessons?.length || 0) > 2;

              return (
                <tr key={u.uid} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', transition: 'background 0.2s ease' }}>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {u.photoURL ? (
                        <img src={u.photoURL} alt="avatar" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid var(--crear-gold)' }} />
                      ) : (
                        <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, #0284c7, #0369a1)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                          {(u.displayName || u.email || 'U')[0].toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>{u.displayName || 'LÃ­der en Entrenamiento'}</div>
                        <div className="text-muted" style={{ fontSize: '0.8rem' }}>{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    {isCleared ? (
                      <span style={{ 
                        background: 'rgba(34, 197, 94, 0.12)', 
                        color: '#22c55e', 
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                        padding: '4px 8px', 
                        borderRadius: '20px', 
                        fontSize: '0.72rem', 
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        ðŸŸ¢ Compliance Clearance
                      </span>
                    ) : (
                      <span style={{ 
                        background: 'rgba(239, 68, 68, 0.12)', 
                        color: '#ef4444', 
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        padding: '4px 8px', 
                        borderRadius: '20px', 
                        fontSize: '0.72rem', 
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        ðŸ”´ Action Required
                      </span>
                    )}
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div 
                        role="progressbar" 
                        aria-valuenow={pct} 
                        aria-valuemin="0" 
                        aria-valuemax="100" 
                        style={{ width: '100px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}
                      >
                        <div style={{ width: `${pct}%`, height: '100%', background: 'linear-gradient(90deg, var(--crear-gold), #00d4ff)', borderRadius: '4px' }}></div>
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{pct}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>{u.progress?.completedLessons?.length || 0}</td>
                  <td style={{ padding: '1rem', fontSize: '0.85rem' }} className="text-muted">
                    <div>{u.lastLogin ? new Date(u.lastLogin).toLocaleString() : 'Reciente'}</div>
                    <div style={{ color: 'var(--crear-blue)', fontSize: '0.78rem', fontWeight: 600 }}>
                      {formatModuleName(u.progress?.lastVisitedModule)}
                    </div>
                    {u.lastLocation && (
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>ðŸ“ {u.lastLocation}</div>
                    )}
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>
                    {u.progress?.totalTimeSpent ? `${u.progress.totalTimeSpent} min` : '0 min'}
                  </td>
                  <td style={{ padding: '1rem', textAlign: 'center' }}>
                    <button 
                      onClick={() => handleViewHistory(u)}
                      className="btn-primary"
                      style={{ 
                        background: 'transparent', 
                        border: '1.5px solid var(--crear-gold)', 
                        color: 'var(--crear-gold)', 
                        padding: '6px 14px', 
                        borderRadius: '6px', 
                        cursor: 'pointer', 
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'none'
                      }}
                    >
                      Ver Historial
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* MODAL DE HISTORIAL Y AUDITORÃA DE ALTO RENDIMIENTO */}
      {selectedUser && (
        <div 
          onClick={(e) => { if (e.target === e.currentTarget) closeHistory(); }}
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'rgba(5, 10, 25, 0.88)', 
            backdropFilter: 'blur(8px)',
            zIndex: 1000, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: '1.5rem',
            boxSizing: 'border-box'
          }}
        >
          <div 
            className="glass-panel animate-fade-in" 
            style={{ 
              width: '100%', 
              maxWidth: '1000px', 
              maxHeight: '92vh', 
              overflowY: 'auto',
              background: 'var(--bg-card, #091024)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
              position: 'relative'
            }}
            role="dialog"
            aria-modal="true"
          >
            {/* BotÃ³n Cerrar */}
            <button 
              onClick={closeHistory}
              aria-label="Cerrar auditorÃ­a"
              style={{ 
                position: 'absolute', 
                top: '1.5rem', 
                right: '1.5rem', 
                background: 'rgba(255,255,255,0.08)', 
                border: 'none', 
                color: 'var(--text-main)', 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              âœ•
            </button>

            {/* Cabecera de Identidad & ConexiÃ³n en Vivo */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              {selectedUser.photoURL ? (
                <img src={selectedUser.photoURL} alt="avatar" style={{ width: '64px', height: '64px', borderRadius: '50%', border: '3px solid var(--crear-gold)' }} />
              ) : (
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #0284c7, #0369a1)', color: 'var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                  {(selectedUser.displayName || selectedUser.email || 'U')[0].toUpperCase()}
                </div>
              )}
              
              <div style={{ flex: 1, minWidth: '220px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <h2 style={{ margin: 0, fontSize: '1.6rem', color: 'var(--text-main)' }}>
                    {selectedUser.displayName || 'LÃ­der en Entrenamiento'}
                  </h2>
                  <span style={{ 
                    background: (selectedUser.progress?.globalPercentage || 0) >= 30 ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                    color: (selectedUser.progress?.globalPercentage || 0) >= 30 ? '#22c55e' : '#ef4444',
                    border: '1px solid',
                    borderColor: (selectedUser.progress?.globalPercentage || 0) >= 30 ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 800
                  }}>
                    {(selectedUser.progress?.globalPercentage || 0) >= 30 ? 'COMPLIANCE CLEARANCE' : 'ACTION REQUIRED'}
                  </span>
                </div>
                <div className="text-muted" style={{ fontSize: '0.9rem', marginTop: '2px' }}>{selectedUser.email}</div>
              </div>

              {/* BotÃ³n de DiagnÃ³stico RÃ¡pido */}
              <button 
                onClick={handleGenerarDiagnostico} 
                disabled={generatingAi || loadingSessions}
                className="btn-primary" 
                style={{ 
                  background: 'linear-gradient(135deg, #0284c7, #0284c7)', 
                  borderColor: '#0284c7', 
                  color: 'var(--text-main)',
                  display: 'flex', 
                  gap: '8px', 
                  alignItems: 'center', 
                  opacity: (generatingAi || loadingSessions) ? 0.6 : 1,
                  padding: '10px 20px',
                  fontSize: '0.88rem'
                }}
              >
                {generatingAi ? 'â³ Analizando...' : 'ðŸ§  DiagnÃ³stico SocrÃ¡tico de IA'}
              </button>
            </div>

            {/* Fila de Tarjetas KPI de TelemetrÃ­a */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>TIEMPO EN PLATAFORMA</span>
                <strong style={{ fontSize: '1.3rem', color: 'var(--crear-gold)' }}>
                  {selectedUser.progress?.totalTimeSpent || 0} min
                </strong>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>LECCIONES COMPLETADAS</span>
                <strong style={{ fontSize: '1.3rem', color: '#00d4ff' }}>
                  {selectedUser.progress?.completedLessons?.length || 0} lecciones
                </strong>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>ÃšLTIMA IP CONOCIDA</span>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  {selectedUser.lastIp || (userSessions[0]?.ip) || 'Red Segura'}
                </strong>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>UBICACIÃ“N GEOGRÃFICA</span>
                <strong style={{ fontSize: '0.95rem', color: 'var(--text-main)', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  ðŸ“ {selectedUser.lastLocation || (userSessions[0]?.location) || 'ConexiÃ³n Local'}
                </strong>
              </div>
            </div>

            {/* PestaÃ±as de NavegaciÃ³n del Modal */}
            <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setActiveModalTab('timeline')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeModalTab === 'timeline' ? '3px solid var(--crear-gold)' : '3px solid transparent',
                  color: activeModalTab === 'timeline' ? 'var(--crear-gold)' : 'var(--text-muted)',
                  padding: '10px 18px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                ðŸ•’ BitÃ¡cora de Sesiones & Timeline ({userSessions.length})
              </button>

              <button
                onClick={() => setActiveModalTab('ai')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeModalTab === 'ai' ? '3px solid var(--crear-blue)' : '3px solid transparent',
                  color: activeModalTab === 'ai' ? 'var(--crear-blue)' : 'var(--text-muted)',
                  padding: '10px 18px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                ðŸ§  DiagnÃ³stico de IA SocrÃ¡tico {aiReport ? 'âœ“' : ''}
              </button>

              <button
                onClick={() => setActiveModalTab('trazabilidad')}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: activeModalTab === 'trazabilidad' ? '3px solid #22c55e' : '3px solid transparent',
                  color: activeModalTab === 'trazabilidad' ? '#22c55e' : 'var(--text-muted)',
                  padding: '10px 18px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                ðŸ“‹ Trazabilidad de AuditorÃ­a & Exportar
              </button>
            </div>

            {/* CONTENIDO DE PESTAÃ‘A 1: TIMELINE DE SESIONES */}
            {activeModalTab === 'timeline' && (
              <div>
                {/* Barra de Filtros del Timeline */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button
                      onClick={() => setTimelineFilter('all')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: '1px solid',
                        borderColor: timelineFilter === 'all' ? 'var(--crear-gold)' : 'rgba(255,255,255,0.1)',
                        background: timelineFilter === 'all' ? 'rgba(255, 183, 3, 0.15)' : 'transparent',
                        color: timelineFilter === 'all' ? 'var(--crear-gold)' : 'var(--text-muted)',
                        cursor: 'pointer'
                      }}
                    >
                      Todos ({filteredEventsSummary.actionsCount + filteredEventsSummary.routesCount})
                    </button>
                    <button
                      onClick={() => setTimelineFilter('action')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: '1px solid',
                        borderColor: timelineFilter === 'action' ? 'var(--crear-blue)' : 'rgba(255,255,255,0.1)',
                        background: timelineFilter === 'action' ? 'rgba(0, 212, 255, 0.15)' : 'transparent',
                        color: timelineFilter === 'action' ? 'var(--crear-blue)' : 'var(--text-muted)',
                        cursor: 'pointer'
                      }}
                    >
                      âš¡ Acciones Operativas ({filteredEventsSummary.actionsCount})
                    </button>
                    <button
                      onClick={() => setTimelineFilter('route')}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: '1px solid',
                        borderColor: timelineFilter === 'route' ? '#a855f7' : 'rgba(255,255,255,0.1)',
                        background: timelineFilter === 'route' ? 'rgba(168, 85, 247, 0.15)' : 'transparent',
                        color: timelineFilter === 'route' ? '#c084fc' : 'var(--text-muted)',
                        cursor: 'pointer'
                      }}
                    >
                      ðŸ§­ NavegaciÃ³n ({filteredEventsSummary.routesCount})
                    </button>
                  </div>

                  <input 
                    type="text"
                    placeholder="Filtrar por acciÃ³n o mÃ³dulo..."
                    value={timelineSearch}
                    onChange={(e) => setTimelineSearch(e.target.value)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'var(--text-main)',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {loadingSessions ? (
                  <div className="text-center text-gold" style={{ padding: '3rem' }}>
                    Cargando bitÃ¡cora inmutable de sesiones...
                  </div>
                ) : userSessions.length === 0 ? (
                  <div className="text-center text-muted" style={{ padding: '3rem' }}>
                    No hay sesiones registradas aÃºn para este estudiante.
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {userSessions.map((session, sIdx) => {
                      const events = (session.history || []).filter(h => {
                        const matchType = timelineFilter === 'all' || h.type === timelineFilter;
                        const matchSearch = !timelineSearch || 
                          (h.action && h.action.toLowerCase().includes(timelineSearch.toLowerCase())) ||
                          (h.path && h.path.toLowerCase().includes(timelineSearch.toLowerCase())) ||
                          (h.details && h.details.toLowerCase().includes(timelineSearch.toLowerCase()));
                        return matchType && matchSearch;
                      });

                      if (events.length === 0 && timelineSearch) return null;

                      return (
                        <div key={sIdx} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '1.25rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ background: 'rgba(255, 183, 3, 0.15)', color: 'var(--crear-gold)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                                SESIÃ“N #{userSessions.length - sIdx}
                              </span>
                              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                                {new Date(session.startedAt).toLocaleDateString()}
                              </span>
                              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                ({new Date(session.startedAt).toLocaleTimeString()} - {new Date(session.lastActiveAt).toLocaleTimeString()})
                              </span>
                            </div>

                            <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                              <span>â±ï¸ <strong>{session.durationMinutes || 0} min</strong></span>
                              <span>ðŸŒ {session.ip || selectedUser.lastIp || 'Red Segura'}</span>
                              <span>ðŸ“ {session.location || selectedUser.lastLocation || 'Local'}</span>
                            </div>
                          </div>

                          {/* Lista de Eventos de la SesiÃ³n */}
                          <div style={{ paddingLeft: '0.5rem' }}>
                            {events.length === 0 ? (
                              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                NingÃºn evento de navegaciÃ³n registrado en esta sesiÃ³n (acceso pasivo).
                              </div>
                            ) : (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {events.map((h, hIdx) => {
                                  const time = new Date(h.timestamp).toLocaleTimeString();
                                  const isAction = h.type === 'action';

                                  return (
                                    <div key={hIdx} style={{ display: 'flex', alignItems: 'baseline', gap: '10px', fontSize: '0.85rem' }}>
                                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'monospace', minWidth: '60px' }}>
                                        [{time}]
                                      </span>
                                      {isAction ? (
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                                          <span style={{ background: 'rgba(0, 212, 255, 0.15)', color: 'var(--crear-blue)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700 }}>
                                            âš¡ ACCIÃ“N
                                          </span>
                                          <strong style={{ color: 'var(--text-main)' }}>{h.action}</strong>
                                          {h.details && (
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>({h.details})</span>
                                          )}
                                        </div>
                                      ) : (
                                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                          <span style={{ background: 'rgba(168, 85, 247, 0.12)', color: '#c084fc', padding: '2px 6px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700 }}>
                                            ðŸ§­ VISITA
                                          </span>
                                          <span style={{ color: 'var(--text-main)' }}>
                                            {formatModuleName(h.path)}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* CONTENIDO DE PESTAÃ‘A 2: DIAGNÃ“STICO SOCRÃTICO DE IA */}
            {activeModalTab === 'ai' && (
              <div>
                {!aiReport ? (
                  <div style={{ textAlign: 'center', padding: '3rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>ðŸ§ </div>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)' }}>
                      AuditorÃ­a SocrÃ¡tica de Comportamiento y Rigor
                    </h3>
                    <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
                      El motor de IA audita los dos ejes (Rigor vs EmpatÃ­a), detecta el arquetipo de liderazgo, evalÃºa la reactividad del cerebro reptiliano y emite directivas tÃ¡cticas innegociables.
                    </p>
                    <button 
                      onClick={handleGenerarDiagnostico} 
                      disabled={generatingAi}
                      className="btn-primary" 
                      style={{ background: 'var(--crear-blue)', borderColor: 'var(--crear-blue)', color: '#000', fontWeight: 800 }}
                    >
                      {generatingAi ? 'Procesando auditorÃ­a...' : 'Generar DiagnÃ³stico de Alto Rendimiento'}
                    </button>
                  </div>
                ) : (
                  <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Tarjeta de MÃ©tricas Bidimensionales (Rigor vs EmpatÃ­a) */}
                    <div className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--crear-blue)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--crear-blue)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            MODELO CARTESIANO DE LIDERAZGO ADAPTATIVO
                          </span>
                          <h3 style={{ margin: '0.2rem 0 0 0', color: 'var(--text-main)' }}>
                            Arquetipo Detectado: <span style={{ color: 'var(--crear-gold)' }}>{aiReport.detected_archetype || 'Liderazgo Adaptativo'}</span>
                          </h3>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                          <span style={{ 
                            background: 'rgba(255, 183, 3, 0.15)', 
                            color: 'var(--crear-gold)', 
                            padding: '4px 10px', 
                            borderRadius: '8px', 
                            fontSize: '0.75rem', 
                            fontWeight: 700 
                          }}>
                            Neuromarketing: {aiReport.neuromarketing_alert || 'Neocortex Aligned'}
                          </span>
                          <span style={{ 
                            background: 'rgba(34, 197, 94, 0.15)', 
                            color: '#22c55e', 
                            padding: '4px 10px', 
                            borderRadius: '8px', 
                            fontSize: '0.75rem', 
                            fontWeight: 700 
                          }}>
                            {aiReport.compliance_status || 'Compliance Clearance'}
                          </span>
                        </div>
                      </div>

                      {/* Medidores de Rigor y EmpatÃ­a */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                        {/* Rigor Score */}
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '10px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>EJE Y: RIGOR CONDUCTUAL</span>
                            <strong style={{ color: 'var(--crear-gold)' }}>{aiReport.rigor_score || 0} / 100</strong>
                          </div>
                          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ 
                              width: `${Math.max(0, Math.min(100, ((aiReport.rigor_score || 0) + 100) / 2))}%`, 
                              height: '100%', 
                              background: 'var(--crear-gold)',
                              borderRadius: '4px'
                            }}></div>
                          </div>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                            Firmeza con acuerdos, cero complacencia y congruencia operacional.
                          </span>
                        </div>

                        {/* Empathy Score */}
                        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', borderRadius: '10px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>EJE X: EMPATÃA QUIRÃšRGICA</span>
                            <strong style={{ color: 'var(--crear-blue)' }}>{aiReport.empathy_score || 0} / 100</strong>
                          </div>
                          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ 
                              width: `${Math.max(0, Math.min(100, ((aiReport.empathy_score || 0) + 100) / 2))}%`, 
                              height: '100%', 
                              background: 'var(--crear-blue)',
                              borderRadius: '4px'
                            }}></div>
                          </div>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
                            Escucha limpia, seguridad psicolÃ³gica y calma del cerebro reptiliano.
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 3 Secciones del DiagnÃ³stico SocrÃ¡tico */}
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #38bdf8' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#38bdf8', fontSize: '0.95rem' }}>
                          1. AnÃ¡lisis de ConexiÃ³n & FricciÃ³n Operacional
                        </h4>
                        <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                          {aiReport.analisis_patron}
                        </p>
                      </div>

                      <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #a855f7' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#c084fc', fontSize: '0.95rem' }}>
                          2. Estado Mental & Responsabilidad Incondicional (Agencia Radical)
                        </h4>
                        <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                          {aiReport.estado_cognitivo}
                        </p>
                      </div>

                      <div className="glass-panel" style={{ padding: '1.25rem', borderLeft: '4px solid #22c55e' }}>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#4ade80', fontSize: '0.95rem' }}>
                          3. Directivas TÃ¡cticas para el Director de Operaciones
                        </h4>
                        <p style={{ margin: 0, color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: '1.5' }}>
                          {aiReport.directiva_ejecutiva}
                        </p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button 
                        onClick={handleGenerarDiagnostico} 
                        disabled={generatingAi}
                        className="btn-secondary" 
                        style={{ fontSize: '0.85rem' }}
                      >
                        ðŸ”„ Recalibrar DiagnÃ³stico
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* CONTENIDO DE PESTAÃ‘A 3: TRAZABILIDAD DE AUDITORÃA & EXPORTACIÃ“N */}
            {activeModalTab === 'trazabilidad' && (
              <div>
                <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-main)' }}>
                    ExportaciÃ³n de BitÃ¡cora Inmutable (Compliance InterrupciÃ³n)
                  </h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Descarga en formato CSV estructurado para respaldos legales, comitÃ©s de rigor y validaciÃ³n de estÃ¡ndares de Alto Rendimiento.
                  </p>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button 
                      onClick={handleExportCSV}
                      disabled={userSessions.length === 0}
                      className="btn-primary" 
                      style={{ 
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)', 
                        borderColor: '#22c55e', 
                        color: 'var(--text-main)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 24px',
                        fontWeight: 700
                      }}
                    >
                      ðŸ“¥ Descargar BitÃ¡cora Completa en CSV ({userSessions.length} sesiones)
                    </button>
                  </div>
                </div>

                {/* Resumen de Integridad de la Cuenta */}
                <div className="glass-panel" style={{ padding: '1.5rem' }}>
                  <h4 style={{ margin: '0 0 1rem 0', color: 'var(--crear-gold)' }}>
                    Checklist de Trazabilidad OntolÃ³gica
                  </h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.5rem' }}>
                      <span>Tiempo total invertido vs horas promedio de certificaciÃ³n:</span>
                      <strong style={{ color: (selectedUser.progress?.totalTimeSpent || 0) >= 30 ? '#22c55e' : 'var(--crear-gold)' }}>
                        {selectedUser.progress?.totalTimeSpent || 0} / 60 min requeridos
                      </strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.5rem' }}>
                      <span>MÃ³dulos de Discovery completados:</span>
                      <strong>{selectedUser.progress?.completedLessons?.length || 0} lecciones</strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.5rem' }}>
                      <span>Estado de Integridad de la Cuenta:</span>
                      <strong style={{ color: (selectedUser.progress?.globalPercentage || 0) >= 30 ? '#22c55e' : '#ef4444' }}>
                        {(selectedUser.progress?.globalPercentage || 0) >= 30 ? 'COMPLIANCE CLEARANCE' : 'ACTION REQUIRED'}
                      </strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Desviaciones de Integridad registradas:</span>
                      <strong style={{ color: userSessions.length > 3 && (selectedUser.progress?.completedLessons?.length || 0) === 0 ? '#ef4444' : '#22c55e' }}>
                        {userSessions.length > 3 && (selectedUser.progress?.completedLessons?.length || 0) === 0 ? '1 (IntelectualizaciÃ³n / Inactividad)' : '0 (Sin desviaciones)'}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


