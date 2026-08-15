import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAllUsers, getUserSessions } from '../services/db';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userSessions, setUserSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);

  // Helper para mostrar nombres reales en lugar de URLs
  const formatModuleName = (route) => {
    if (!route) return 'Sin actividad';
    if (route.includes('fundamentos')) return 'Módulo 1: Fundamentos';
    if (route.includes('m1_eval')) return 'Evaluación Módulo 1';
    if (route.includes('groundings')) return 'Groundings';
    if (route.includes('dinamicas')) return 'Máquina de Dinámicas';
    if (route.includes('quiebres')) return 'Máquina de Quiebres';
    if (route.includes('entrenamiento')) return 'Programa 6 Semanas';
    if (route.includes('autoevaluacion')) return 'Autoevaluación Coach';
    if (route.includes('dashboard')) return 'Dashboard Principal';
    if (route.includes('ruta')) return 'Ruta de Formación';
    return route;
  };

  // Hardcoded check using Env Var or direct fallback
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'jose.sanchez@crearpsl.net';
  const isAdmin = user && user.email === adminEmail;

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

  const handleViewHistory = async (uid, name) => {
    setSelectedUser({ uid, name });
    setLoadingSessions(true);
    const sessions = await getUserSessions(uid);
    setUserSessions(sessions);
    setLoadingSessions(false);
  };

  const closeHistory = () => {
    setSelectedUser(null);
    setUserSessions([]);
  };

  if (loading) {
    return <div className="p-8 text-center text-gold">Cargando métricas...</div>;
  }

  if (!isAdmin) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-gold" style={{fontSize: '2rem'}}>Acceso Denegado</h2>
        <p className="text-muted">No tienes permisos de Administrador para ver esta página.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in p-8">
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>CENTRO DE COMANDO</h1>
        <p className="text-muted" style={{ fontSize: '1.2rem' }}>Monitoreo en tiempo real de los estudiantes de la Academia.</p>
      </header>

      <div className="glass-panel" style={{ padding: '2rem', overflowX: 'auto' }}>
        <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 215, 0, 0.3)' }}>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Estudiante</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Progreso</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Lecciones</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Última Actividad</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Tiempo Total</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Auditoría</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {u.photoURL && <img src={u.photoURL} alt="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />}
                    <div>
                      <div>{u.displayName}</div>
                      <div className="text-muted" style={{ fontSize: '0.8rem' }}>{u.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '100px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                      <div style={{ width: `${u.progress?.globalPercentage || 0}%`, height: '100%', background: 'var(--crear-gold)', borderRadius: '4px' }}></div>
                    </div>
                    <span>{u.progress?.globalPercentage || 0}%</span>
                  </div>
                </td>
                <td style={{ padding: '1rem' }}>{u.progress?.completedLessons?.length || 0}</td>
                <td style={{ padding: '1rem', fontSize: '0.9rem' }} className="text-muted">
                  {new Date(u.lastLogin).toLocaleString()}<br/>
                  <span style={{ color: 'var(--crear-gold)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {formatModuleName(u.progress?.lastVisitedModule)}
                  </span>
                </td>
                <td style={{ padding: '1rem' }}>
                  {u.progress?.totalTimeSpent ? `${u.progress.totalTimeSpent} min` : '0 min'}
                </td>
                <td style={{ padding: '1rem' }}>
                  <button 
                    onClick={() => handleViewHistory(u.uid, u.displayName)}
                    style={{ background: 'transparent', border: '1px solid var(--crear-gold)', color: 'var(--crear-gold)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Ver Historial
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" style={{ padding: '2rem', textAlign: 'center' }} className="text-muted">
                  Aún no hay estudiantes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal de Historial de Auditoría */}
      {selectedUser && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}>
          <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '900px', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', position: 'relative' }}>
            <button 
              onClick={closeHistory}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--crear-gold)', cursor: 'pointer', fontSize: '1.5rem' }}
            >
              &times;
            </button>
            <h2 className="text-gold" style={{ marginTop: 0, marginBottom: '0.5rem' }}>Libro de Auditoría</h2>
            <p className="text-muted" style={{ marginBottom: '2rem' }}>Historial de Conexiones de: <strong>{selectedUser.name}</strong></p>

            {loadingSessions ? (
              <div className="text-center text-gold" style={{ padding: '2rem' }}>Cargando bitácora...</div>
            ) : userSessions.length === 0 ? (
              <div className="text-center text-muted" style={{ padding: '2rem' }}>No hay registros detallados para este estudiante.</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {userSessions.map((session, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold' }}>Ingreso:</div>
                        <div className="text-muted">{new Date(session.startedAt).toLocaleString()}</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold' }}>Salida:</div>
                        <div className="text-muted">{new Date(session.lastActiveAt).toLocaleString()}</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold' }}>Duración:</div>
                        <div className="text-muted">{session.durationMinutes || 0} min</div>
                      </div>
                      <div>
                        <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold' }}>Dispositivo:</div>
                        <div className="text-muted" style={{ fontSize: '0.8rem', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={session.device}>
                          {session.device}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--crear-gold)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Recorrido de Módulos:</div>
                      <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#adb5bd', fontSize: '0.9rem' }}>
                        {session.history && session.history.length > 0 ? (
                          session.history.map((h, i) => (
                            <li key={i}>
                              <span style={{ color: '#fff' }}>{new Date(h.timestamp).toLocaleTimeString()}</span> - {formatModuleName(h.path)}
                            </li>
                          ))
                        ) : (
                          <li>Ningún módulo detectado (Sesión inactiva o error de red)</li>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
