import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { evaluacionesRegistry } from '../data/evaluacionesRegistry';
import { saveEvaluationResult, updateLastVisited, logUserAction } from '../services/db';
import { evaluarRespuestaAlumno } from '../services/ai';
import DOMPurify from 'dompurify';
import { curriculum } from '../data/curriculum';
import { getUserProgress } from '../services/db';

export default function EvaluacionContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, sessionId } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();
  
  const evalData = evaluacionesRegistry[id];

  const [studentAnswer, setStudentAnswer] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [aiFeedback, setAiFeedback] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    if (user) {
      updateLastVisited(user.uid, `/evaluacion/${id}`);
      
      getUserProgress(user.uid).then(progress => {
        const prog = progress || {};
        if (id.startsWith('modulo_staff_')) {
          navigate('/ruta');
          return;
        }

        const moduleIndex = curriculum.findIndex(m => m.id === id);
        if (moduleIndex > 0) {
          const prevMod = curriculum[moduleIndex - 1];
          const isPrevCompleted = prevMod.tieneEvaluacion 
            ? prog.evaluationsPassed?.includes(prevMod.id)
            : prevMod.lecciones?.every(l => prog.completedLessons?.includes(l.id));
            
          if (!isPrevCompleted) {
            navigate('/ruta');
          }
        }
      });
    }
  }, [user, id, navigate]);

  if (!evalData) {
    return (
      <div className="module-container" style={{maxWidth: '800px', margin: '4rem auto', textAlign: 'center'}}>
        <h2 className="text-gold">Evaluación no encontrada</h2>
        <p className="text-muted">La evaluación para este módulo aún no está disponible.</p>
        <button className="btn-primary" onClick={() => navigate('/dashboard')}>Volver al inicio</button>
      </div>
    );
  }

  const handleEvaluate = async () => {
    if (!studentAnswer.trim() || isEvaluating) return;
    
    setIsEvaluating(true);
    if (user) logUserAction(user.uid, sessionId, 'Envió Respuesta a IA', `Módulo: ${evalData.title}`);
    
    try {
      const result = await evaluarRespuestaAlumno(evalData.title, evalData.caseStudy, studentAnswer);
      setAiFeedback(result.feedback);
      setPassed(result.passed);
      setIsFinished(true);
      
      if (user) {
        logUserAction(user.uid, sessionId, 'Finalizó Evaluación IA', `Aprobó: ${result.passed ? 'Sí' : 'No'}`);
        // Consider a "score" of 100 if passed, 0 if not passed for the DB layer
        const percentage = result.passed ? 100 : 0;
        await saveEvaluationResult(user.uid, id, percentage, result.passed);
      }
    } catch (error) {
      console.error(error);
      setAiFeedback("Hubo un error de conexión con nuestro Master Coach IA. Por favor, intenta de nuevo o avisa a soporte técnico.");
    } finally {
      setIsEvaluating(false);
    }
  };

  const formatFeedback = (text) => {
    if (!text) return '';
    return text.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--crear-gold);">$1</strong>');
  };

  if (isFinished) {
    return (
      <div className="module-container animate-fade-in" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
        <div className="glass-panel p-6" style={{marginTop: '4rem', borderLeft: `4px solid ${passed ? 'var(--color-success)' : 'var(--color-error)'}`}}>
          <h1 style={{fontSize: '3rem', color: passed ? 'var(--color-success)' : 'var(--color-error)'}}>
            {passed ? '¡Aprobado por el Master Coach!' : 'Requiere Refinamiento'}
          </h1>
          
          <div style={{ textAlign: 'left', marginTop: '2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
            <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🤖 Feedback de la IA
            </h3>
            <div 
              style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}
              dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(formatFeedback(aiFeedback))}}
            />
          </div>

          <div className="alert-info" style={{marginTop: '2rem', marginBottom: '2rem', padding: '1rem', background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)'}}>
            <strong>Nota sobre la IA:</strong> El feedback de nuestro Master Coach IA tiene un propósito estrictamente formativo preliminar. La IA evaluará tu capacidad para identificar el problema central, tu no-directividad y la claridad de tu intervención práctica. Las decisiones de certificación importantes están sujetas a revisión humana.
          </div>

          <p className="text-muted" style={{marginTop: '2rem', marginBottom: '3rem'}}>
            {passed 
              ? 'Has demostrado una aplicación profunda de la metodología. Tu avance ha sido registrado en tu expediente.' 
              : 'La maestría toma tiempo. Revisa el feedback, vuelve a estudiar el módulo y perfecciona tu respuesta.'}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {!passed && (
              <button className="btn-secondary" onClick={() => { setIsFinished(false); setAiFeedback(null); }}>
                Intentar de nuevo
              </button>
            )}
            <button className="btn-primary" onClick={() => navigate('/dashboard')}>
              Volver al Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="module-container animate-fade-in" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0', fontWeight: 'bold'}}>{evalData.title}</p>
          
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px'}}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        
        <h1 style={{fontSize: '2.2rem', margin: 0}}>Evaluación Práctica (IA)</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>{evalData.description}</p>
      </header>

      <div className="glass-panel p-6" style={{marginBottom: '2rem', borderLeft: '4px solid var(--crear-gold)'}}>
        <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '1rem' }}>Caso de Estudio</h3>
        <p style={{fontSize: '1.25rem', lineHeight: '1.8', whiteSpace: 'pre-wrap'}}>{evalData.caseStudy}</p>
      </div>

      <div className="glass-panel p-6" style={{marginBottom: '2rem', borderLeft: '4px solid var(--crear-blue)', background: 'rgba(52, 168, 83, 0.05)'}}>
        <h4 className="text-blue" style={{ marginTop: 0, marginBottom: '1rem' }}>📋 Rúbrica de Evaluación IA</h4>
        <ul className="icon-list blue-bullets" style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          <li><strong>Identificación del problema:</strong> ¿Reconoces el desvío central (ej. parálisis por análisis, victimización)?</li>
          <li><strong>Calidad de Intervención:</strong> ¿Tu propuesta es coherente con el modelo (grounding, reencuadre, confrontación compasiva)?</li>
          <li><strong>No-directividad:</strong> ¿Usas preguntas e indagación en lugar de dar consejos técnicos?</li>
          <li><strong>Acción y Límites:</strong> ¿Llevas al cliente a una acción concreta y verificable, respetando los límites profesionales?</li>
        </ul>
      </div>

      <div className="glass-panel p-6" style={{marginBottom: '2rem'}}>
        <label htmlFor="studentAnswer" style={{ display: 'block', marginBottom: '1rem', color: 'var(--crear-gold)', fontWeight: 'bold' }}>
          Tu Intervención (Respuesta):
        </label>
        <textarea
          id="studentAnswer"
          value={studentAnswer}
          onChange={(e) => setStudentAnswer(e.target.value)}
          placeholder="Escribe tu razonamiento aquí. Demuestra que puedes aplicar la distinción en el mundo real..."
          style={{
            width: '100%',
            minHeight: '200px',
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            padding: '1rem',
            color: 'white',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            resize: 'vertical',
            fontFamily: 'inherit'
          }}
        />
      </div>

      <footer style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button 
          className="btn-primary" 
          onClick={handleEvaluate}
          disabled={!studentAnswer.trim() || isEvaluating}
          style={{
            opacity: (!studentAnswer.trim() || isEvaluating) ? 0.5 : 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {isEvaluating ? '🧠 IA Evaluando...' : 'Enviar para Evaluación Mestra'}
        </button>
      </footer>
    </div>
  )
}
