import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { modulo1 } from '../data/modulo1';
import { updateLastVisited, markLessonCompleted, getUserProgress } from '../services/db';

export default function ModuloContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
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

  const currentLesson = modulo1[currentLessonIndex];

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
    
    if (currentLessonIndex < modulo1.length - 1) {
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
      <header style={{marginBottom: '2rem'}}>
        <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold'}}>Módulo 01 • Lección {currentLessonIndex + 1} de {modulo1.length}</p>
        <h1 style={{fontSize: '2.5rem'}}>{currentLesson.title}</h1>
        
        <div className="progress-bar-container" style={{height: '4px', marginTop: '1.5rem'}}>
          <div className="progress-bar-fill" style={{width: `${((currentLessonIndex) / modulo1.length) * 100}%`}}></div>
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
          {currentLessonIndex === modulo1.length - 1 ? 'Ir a la Evaluación' : 'Completar y Siguiente'}
        </button>
      </footer>
    </div>
  )
}
