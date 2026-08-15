import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../services/db';
import { curriculum } from '../data/curriculum';

export default function Evaluaciones() {
  const { user } = useAuth();
  const [evaluationsPassed, setEvaluationsPassed] = useState([]);

  useEffect(() => {
    if (!user) return;
    const fetchProgress = async () => {
      const progress = await getUserProgress(user.uid) || {};
      setEvaluationsPassed(progress.evaluationsPassed || []);
    };
    fetchProgress();
  }, [user]);

  const evaluaciones = curriculum
    .filter(mod => mod.tieneEvaluacion)
    .map(mod => ({
      id: mod.id,
      titulo: `Evaluación: ${mod.titulo.replace(/Módulo \d+: /, '')}`,
      modulo: mod.titulo.split(':')[0],
      estado: 'disponible',
      pasado: evaluationsPassed.includes(mod.id)
    }));

  return (
    <div className="fade-in">
      <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Centro de Evaluaciones</h1>
      <p className="text-muted" style={{marginBottom: '3rem', fontSize: '1.1rem'}}>
        Demuestra tu dominio de los conceptos. Recuerda que la retroalimentación es parte del aprendizaje.
      </p>

      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {evaluaciones.map(ev => (
          <div key={ev.id} className="glass-panel" style={{padding: '2rem', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
              <span style={{color: 'var(--crear-blue)', fontWeight: 'bold', fontSize: '0.9rem'}}>{ev.modulo}</span>
              {ev.pasado && <span style={{fontSize: '0.8rem', background: 'rgba(52, 168, 83, 0.2)', color: 'var(--color-success)', padding: '2px 8px', borderRadius: '10px'}}>Aprobado</span>}
            </div>
            
            <h2 style={{fontSize: '1.4rem', marginBottom: '1rem'}} className="text-main">
              {ev.titulo}
            </h2>
            
            <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'rgba(255,255,255,0.6)', flex: 1}}>
              <li style={{marginBottom: '0.5rem'}}>🤖 Simulación de caso con Master Coach IA</li>
              <li>🎯 Criterio: Calidad de la distinción</li>
            </ul>

            <Link to={`/evaluacion/${ev.id}`} className={ev.pasado ? "btn-secondary" : "btn-primary"} style={{textAlign: 'center', textDecoration: 'none', width: '100%', boxSizing: 'border-box'}}>
              {ev.pasado ? 'Repasar Evaluación' : 'Comenzar Evaluación'}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
