import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getAllUsers } from '../services/db';

export default function AdminDashboard() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hardcoded check using Env Var or direct fallback
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'crearglobalcom@gmail.com';
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
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Lecciones Completadas</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Última Actividad</th>
              <th style={{ padding: '1rem', color: 'var(--crear-gold)' }}>Tiempo en Campus</th>
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
                  <span style={{ color: 'var(--crear-gold)', fontSize: '0.8rem' }}>{u.progress?.lastVisitedModule}</span>
                </td>
                <td style={{ padding: '1rem' }}>
                  {u.progress?.totalTimeSpent ? `${u.progress.totalTimeSpent} min` : 'N/A'}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="5" style={{ padding: '2rem', textAlign: 'center' }} className="text-muted">
                  Aún no hay estudiantes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
