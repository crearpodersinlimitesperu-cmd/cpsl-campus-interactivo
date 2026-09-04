import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { modulesRegistry } from '../data/modulesRegistry';
import { updateLastVisited, markLessonCompleted, getUserProgress } from '../services/db';
import DOMPurify from 'dompurify';
import { curriculum } from '../data/curriculum';

export default function ModuloContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();
  
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    setCurrentLessonIndex(0);
    if (user) {
      updateLastVisited(user.uid, `/modulo/${id}`);
      getUserProgress(user.uid).then(progress => {
        const prog = progress || {};
        setCompletedLessons(prog.completedLessons || []);
        
        // Verificación de bloqueo secuencial
        if (id.startsWith('modulo_staff_')) {
          // Módulos de Nodus Staff son micro-learning accesibles directamente
          setIsVerifying(false);
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
            return;
          }
        }
        setIsVerifying(false);
      });
    } else {
      setIsVerifying(false);
    }
  }, [user, id, navigate]);

  const currentModuleData = modulesRegistry[id];
  if (!currentModuleData) {
    // Módulo no encontrado — redirigir a ruta en vez de cargar modulo1 en silencio
    navigate('/ruta', { replace: true });
    return null;
  }
  const currentLesson = currentModuleData[currentLessonIndex];

  const handleNext = async () => {
    if (user) {
      try {
        await markLessonCompleted(user.uid, currentLesson.id);
        if (!completedLessons.includes(currentLesson.id)) {
          setCompletedLessons([...completedLessons, currentLesson.id]);
        }
      } catch (error) {
        console.error("Error al guardar progreso (posible error de permisos Firestore):", error);
        // Continuamos de todos modos para que la plataforma no se trabe
      }
    }
    
    if (currentLessonIndex < currentModuleData.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      window.scrollTo(0, 0);
    } else {
      // Modulo terminado, ir a evaluación o ruta
      if (id.startsWith('modulo_staff_')) {
        navigate('/ruta');
      } else {
        const currentModInfo = curriculum.find(m => m.id === id);
        if (currentModInfo && !currentModInfo.tieneEvaluacion) {
          navigate('/ruta');
        } else {
          navigate(`/evaluacion/${id}`);
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  if (isVerifying) {
    return (
      <div className="module-container" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem', paddingTop: '4rem', textAlign: 'center'}}>
        <div className="text-gold" style={{fontSize: '1.2rem', opacity: 0.8}}>Verificando acceso...</div>
      </div>
    );
  }

  return (
    <div className="module-container" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0', fontWeight: 'bold'}}>
            {id.startsWith('modulo_staff_')
              ? `Nodus Staff • Módulo ${id.replace('modulo_staff_', '')}`
              : `Módulo ${id.replace('modulo', '')}`} • Lección {currentLessonIndex + 1} de {currentModuleData.length}
          </p>
          
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              aria-label="Activar Modo Enfoque para lectura sin distracciones"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px'}}
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        
        <h1 style={{fontSize: '2.5rem', margin: 0}}>{currentLesson.title}</h1>
        
        <div className="progress-bar-container" style={{height: '4px', marginTop: '0.5rem'}}>
          <div className="progress-bar-fill" style={{width: `${((currentLessonIndex) / currentModuleData.length) * 100}%`}}></div>
        </div>
      </header>

      <article className="glass-panel p-6 content-reader" style={{lineHeight: '1.8', fontSize: '1.1rem'}} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(currentLesson.content)}}>
      </article>

      <footer style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
        <button 
          className="btn-secondary" 
          onClick={handlePrevious}
          disabled={currentLessonIndex === 0}
          aria-disabled={currentLessonIndex === 0 ? "true" : "false"}
          aria-label="Ir a la lección anterior"
          style={{opacity: currentLessonIndex === 0 ? 0.5 : 1}}
        >
          Anterior
        </button>
        <button 
          className="btn-primary" 
          onClick={handleNext}
          aria-label={currentLessonIndex === currentModuleData.length - 1 ? 'Ir a la Evaluación del módulo' : 'Completar esta lección y continuar a la siguiente'}
        >
          {currentLessonIndex === currentModuleData.length - 1 ? 'Ir a la Evaluación' : 'Completar y Siguiente'}
        </button>
      </footer>
    </div>
  )
}
