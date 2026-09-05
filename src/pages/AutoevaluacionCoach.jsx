import { useState } from 'react';
import { dimensionesAutoevaluacion, checklistCoach } from '../data/autoevaluacionCoach';
import { useAuth } from '../context/AuthContext';
import { logUserAction } from '../services/db';
import { playSuccessChime } from '../utils/neuroAudio';

export default function AutoevaluacionCoach() {
  const [dimensionActiva, setDimensionActiva] = useState(null);
  const [tabActivo, setTabActivo] = useState('dimensiones'); // 'dimensiones' | 'checklists'
  const [checkedDiario, setCheckedDiario] = useState({});
  const [respuestasSemanal, setRespuestasSemanal] = useState({});

  const { user, sessionId } = useAuth();

  const handleCheck = (index) => {
    setCheckedDiario(prev => {
      const isChecking = !prev[index];
      if (isChecking) {
        playSuccessChime();
        if (user) {
          logUserAction(user.uid, sessionId, 'Marcó Checkbox', `Checklist: ${checklistCoach.diario[index]}`);
        }
      }
      return {...prev, [index]: isChecking};
    });
  };

  const handleInputChange = (index, value) => {
    setRespuestasSemanal(prev => ({...prev, [index]: value}));
  };

  const renderDimensiones = () => (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
      {dimensionesAutoevaluacion.map(dim => (
        <div key={dim.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', border: dimensionActiva === dim.id ? '1px solid var(--crear-gold)' : '1px solid rgba(255,255,255,0.05)' }}>
          <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
            {dim.id}. {dim.titulo}
          </h3>

          {dimensionActiva === dim.id ? (
            <div className="animate-fade-in" style={{ flexGrow: 1 }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong className="text-blue" style={{ display: 'block', marginBottom: '0.5rem' }}>Preguntas de Autoevaluación (1-10):</strong>
                <ul className="text-muted" style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.9rem' }}>
                  {dim.preguntas.map((p, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{p}</li>)}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ flex: 1, background: 'rgba(76, 175, 80, 0.1)', borderLeft: '2px solid #4caf50', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: '#4caf50', display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem' }}>SEÑALES DE PRESENCIA</strong>
                  <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--text-main)', fontSize: '0.8rem' }}>
                    {dim.senales_positivas.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
                <div style={{ flex: 1, background: 'rgba(255, 82, 82, 0.1)', borderLeft: '2px solid var(--color-error)', padding: '0.8rem', borderRadius: '4px' }}>
                  <strong style={{ color: 'var(--color-error)', display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem' }}>SEÑALES DE AUSENCIA</strong>
                  <ul style={{ paddingLeft: '1rem', margin: 0, color: 'var(--text-main)', fontSize: '0.8rem' }}>
                    {dim.senales_negativas.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
              </div>

              <div className="alert-info" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <strong className="text-main" style={{ display: 'block', marginBottom: '0.5rem' }}>🎯 Acciones de Mejora:</strong>
                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                  {dim.accion_mejora.map((a, i) => <li key={i}>{a}</li>)}
                </ul>
              </div>

              <button className="btn-secondary" style={{ width: '100%', padding: '8px' }} onClick={() => setDimensionActiva(null)}>
                Ocultar Detalles
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
              <ul className="text-muted" style={{ paddingLeft: '1.2rem', margin: '0 0 1.5rem 0', fontSize: '0.9rem' }}>
                {dim.preguntas.slice(0, 2).map((p, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{p}</li>)}
                <li>...</li>
              </ul>
              <button className="btn-primary" style={{ padding: '8px' }} onClick={() => {
                setDimensionActiva(dim.id);
                if (user) {
                  logUserAction(user.uid, sessionId, 'Auditó Dimensión', dim.titulo);
                }
              }}>
                Auditar Dimensión
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderChecklists = () => (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      
      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 className="text-blue" style={{ marginTop: 0, borderBottom: '1px solid var(--crear-blue)', paddingBottom: '0.5rem' }}>Checklist Post-Sesión</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Responde esto inmediatamente después de cada sesión de coaching.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {checklistCoach.diario.map((item, i) => (
            <label htmlFor={`diario-${i}`} key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', cursor: 'pointer', opacity: checkedDiario[i] ? 0.6 : 1, transition: 'opacity 0.2s' }}>
              <input 
                id={`diario-${i}`}
                type="checkbox" 
                checked={checkedDiario[i] || false}
                onChange={() => handleCheck(i)}
                style={{ marginTop: '0.2rem', accentColor: 'var(--crear-gold)' }} 
              />
              <span className="text-main" style={{ fontSize: '0.95rem', textDecoration: checkedDiario[i] ? 'line-through' : 'none' }}>{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 className="text-gold" style={{ marginTop: 0, borderBottom: '1px solid var(--crear-gold)', paddingBottom: '0.5rem' }}>Auditoría Semanal</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Tu espacio de reflexión al cerrar la semana operativa.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {checklistCoach.semanal.map((item, i) => (
            <div key={i}>
              <label htmlFor={`semanal-${i}`} className="text-main" style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{item}</label>
              <input 
                id={`semanal-${i}`}
                type="text" 
                value={respuestasSemanal[i] || ''}
                onChange={(e) => handleInputChange(i, e.target.value)}
                placeholder="Reflexiona aquí..." 
                style={{ width: '100%', padding: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }} 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h3 className="text-main" style={{ marginTop: 0, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '0.5rem' }}>Evaluación de Impacto (Q)</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Métricas duras para evaluar cada trimestre.</p>
        <ul className="text-muted" style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.95rem' }}>
          {checklistCoach.trimestral.map((item, i) => (
            <li key={i} style={{ marginBottom: '0.8rem' }}>{item}</li>
          ))}
        </ul>
        <div className="alert-warning" style={{ marginTop: '1.5rem' }}>
          <strong>Llamado a la Acción:</strong> Revisa tu Plan de Desarrollo Personal si no estás alcanzando el 80% de coachees con quiebres reales.
        </div>
      </div>

    </div>
  );

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '3rem' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 className="text-gold" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Autoevaluación Coach 🧭</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Herramienta de auditoría profunda para evaluar tu propia efectividad, congruencia y capacidad para generar quiebres reales. No es sobre qué tan bueno eres, sino <strong>qué impacto estás generando</strong>.
        </p>
      </header>

      {/* Navegación por Pestañas Internas */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
        <button
          onClick={() => setTabActivo('dimensiones')}
          style={{
            background: tabActivo === 'dimensiones' ? 'var(--crear-blue)' : 'rgba(255,255,255,0.05)',
            color: tabActivo === 'dimensiones' ? '#fff' : 'var(--text-main)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px 24px',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
        >
          Las 8 Dimensiones
        </button>
        <button
          onClick={() => setTabActivo('checklists')}
          style={{
            background: tabActivo === 'checklists' ? 'var(--crear-gold)' : 'rgba(255,255,255,0.05)',
            color: tabActivo === 'checklists' ? '#000' : 'var(--text-main)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px 24px',
            borderRadius: '24px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.2s'
          }}
        >
          Checklists & Métricas
        </button>
      </div>

      {tabActivo === 'dimensiones' ? renderDimensiones() : renderChecklists()}

    </div>
  );
}
