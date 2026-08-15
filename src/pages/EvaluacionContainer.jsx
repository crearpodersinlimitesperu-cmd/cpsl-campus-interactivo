import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { evaluacion1 } from '../data/evaluacion1';
import { saveEvaluationResult, updateLastVisited } from '../services/db';

export default function EvaluacionContainer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // Asumimos que id es 'm1_eval' para cargar la evaluación 1 (simplificación por ahora)
  const evalData = evaluacion1;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (user) {
      updateLastVisited(user.uid, `/evaluacion/${id}`);
    }
  }, [user, id]);

  const currentQuestion = evalData.questions[currentQuestionIndex];

  const handleSelectOption = (index) => {
    if (isAnswered) return; // Prevent changing after answered
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = async () => {
    if (currentQuestionIndex < evalData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (user) {
        // Guardar resultado
        const finalScore = score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0);
        const percentage = Math.round((finalScore / evalData.questions.length) * 100);
        const passed = percentage >= 75; // 75% para aprobar
        try {
          await saveEvaluationResult(user.uid, id, percentage, passed);
        } catch (error) {
          console.error("Error al guardar resultado de evaluación:", error);
        }
      }
    }
  };

  if (isFinished) {
    const finalPercentage = Math.round((score / evalData.questions.length) * 100);
    const passed = finalPercentage >= 75;

    return (
      <div className="module-container" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
        <div className="glass-panel p-6" style={{marginTop: '4rem'}}>
          <h1 style={{fontSize: '3rem', color: passed ? '#34A853' : '#EA4335'}}>
            {passed ? '¡Aprobado!' : 'No Aprobado'}
          </h1>
          <p style={{fontSize: '1.5rem', margin: '2rem 0'}}>Tu puntuación: <strong>{finalPercentage}%</strong></p>
          <p className="text-muted" style={{marginBottom: '3rem'}}>
            {passed 
              ? 'Has demostrado una sólida comprensión de los Fundamentos Teóricos. El progreso se ha guardado en tu expediente.' 
              : 'Te recomendamos repasar el módulo y volver a intentarlo para asegurar la correcta aplicación de la metodología.'}
          </p>
          <button className="btn-primary" onClick={() => navigate('/dashboard')}>
            Volver al Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="module-container" style={{maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem'}}>
        <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold'}}>{evalData.title}</p>
        <h1 style={{fontSize: '2rem'}}>Pregunta {currentQuestionIndex + 1} de {evalData.questions.length}</h1>
        
        <div className="progress-bar-container" style={{height: '4px', marginTop: '1.5rem'}}>
          <div className="progress-bar-fill" style={{width: `${((currentQuestionIndex) / evalData.questions.length) * 100}%`}}></div>
        </div>
      </header>

      <div className="glass-panel p-6" style={{marginBottom: '2rem'}}>
        <p style={{fontSize: '1.25rem', marginBottom: '2rem'}}>{currentQuestion.question}</p>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          {currentQuestion.options.map((option, index) => {
            let bgColor = 'rgba(255, 255, 255, 0.05)';
            let borderColor = 'rgba(255, 255, 255, 0.1)';
            
            if (isAnswered) {
              if (index === currentQuestion.correctAnswer) {
                bgColor = 'rgba(52, 168, 83, 0.2)'; // Green
                borderColor = '#34A853';
              } else if (index === selectedOption && index !== currentQuestion.correctAnswer) {
                bgColor = 'rgba(234, 67, 53, 0.2)'; // Red
                borderColor = '#EA4335';
              }
            } else if (selectedOption === index) {
              bgColor = 'rgba(212, 175, 55, 0.2)'; // Gold
              borderColor = 'var(--crear-gold)';
            }

            return (
              <button 
                key={index}
                onClick={() => handleSelectOption(index)}
                style={{
                  padding: '1rem',
                  textAlign: 'left',
                  borderRadius: '8px',
                  background: bgColor,
                  border: `1px solid ${borderColor}`,
                  color: 'white',
                  cursor: isAnswered ? 'default' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      {isAnswered && (
        <div className="glass-panel p-6" style={{borderLeft: '4px solid var(--crear-gold)', marginBottom: '2rem'}}>
          <h3 style={{color: 'var(--crear-gold)', marginBottom: '0.5rem', fontSize: '1.1rem'}}>Retroalimentación</h3>
          <p>{currentQuestion.feedback}</p>
        </div>
      )}

      <footer style={{display: 'flex', justifyContent: 'flex-end'}}>
        {!isAnswered ? (
          <button 
            className="btn-primary" 
            onClick={handleCheckAnswer}
            disabled={selectedOption === null}
            style={{opacity: selectedOption === null ? 0.5 : 1}}
          >
            Comprobar Respuesta
          </button>
        ) : (
          <button 
            className="btn-primary" 
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex === evalData.questions.length - 1 ? 'Finalizar Evaluación' : 'Siguiente Pregunta'}
          </button>
        )}
      </footer>
    </div>
  )
}
