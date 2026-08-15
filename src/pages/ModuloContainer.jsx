import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { modulesRegistry } from '../data/modulesRegistry';
import { updateLastVisited, markLessonCompleted, getUserProgress } from '../services/db';

export default function ModuloContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();
  
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    if (user) {
      updateLastVisited(user.uid, `/modulo/${id}`);
      getUserProgress(user.uid).then(progress => {
        if (progress && progress.completedLessons) {
          setCompletedLessons(progress.completedLessons);
        }
      });
    }
  }, [user, id]);

  const currentModuleData = modulesRegistry[id] || modulesRegistry['modulo1'];
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
      // Modulo terminado, ir a evaluación
      navigate(`/evaluacion/${id}`);
    }
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="module-container" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0', fontWeight: 'bold'}}>
            Módulo {id.replace('modulo', '')} • Lección {currentLessonIndex + 1} de {currentModuleData.length}
          </p>
          
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
        
        <h1 style={{fontSize: '2.5rem', margin: 0}}>{currentLesson.title}</h1>
        
        <div className="progress-bar-container" style={{height: '4px', marginTop: '0.5rem'}}>
          <div className="progress-bar-fill" style={{width: `${((currentLessonIndex) / currentModuleData.length) * 100}%`}}></div>
        </div>
      </header>

      <article className="glass-panel p-6 content-reader" style={{lineHeight: '1.8', fontSize: '1.1rem'}} dangerouslySetInnerHTML={{__html: currentLesson.content}}>
      </article>

      <footer style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
        <button 
          className="btn-secondary" 
          onClick={handlePrevious}
          disabled={currentLessonIndex === 0}
          style={{opacity: currentLessonIndex === 0 ? 0.5 : 1}}
        >
          Anterior
        </button>
        <button 
          className="btn-primary" 
          onClick={handleNext}
        >
          {currentLessonIndex === currentModuleData.length - 1 ? 'Ir a la Evaluación' : 'Completar y Siguiente'}
        </button>
      </footer>
    </div>
  )
}
