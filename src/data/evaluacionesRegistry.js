import { evaluacion1 } from './evaluacion1';

// Plantilla base para generar evaluaciones genéricas rápidamente si no existe un archivo específico
const generateGenericEval = (id, title, description, focusTerm) => ({
  id,
  title: `Evaluación: ${title}`,
  description: description,
  questions: [
    {
      id: `${id}_q1`,
      question: `En el contexto de ${title}, ¿cuál es el principio operativo fundamental?`,
      options: [
        `La integración de ${focusTerm} de manera teórica sin aplicación práctica.`,
        `La aplicación directa de ${focusTerm} para producir una alteración cuántica en la realidad del sujeto.`,
        `Memorizar los postulados históricos relacionados con ${focusTerm}.`,
        `Evitar por completo cualquier referencia a ${focusTerm}.`
      ],
      correctAnswer: 1,
      feedback: `Todo el entrenamiento está diseñado hacia la aplicación pragmática y la alteración de la realidad del cliente a través de ${focusTerm}.`
    },
    {
      id: `${id}_q2`,
      question: `¿Cuál es el indicador principal de que el conocimiento de este módulo ha sido interiorizado?`,
      options: [
        `Cuando se experimenta una fricción cognitiva seguida de un cambio de conducta observable (toma de acción masiva).`,
        `Cuando el individuo puede recitar de memoria el manual del módulo.`,
        `Cuando el sujeto se siente completamente cómodo y sin ningún tipo de resistencia.`,
        `Cuando se logra convencer a otros usando terminología compleja.`
      ],
      correctAnswer: 0,
      feedback: 'El aprendizaje real en Alto Rendimiento siempre se manifiesta a través de un cambio conductual y la toma de acción, no solo comprensión intelectual.'
    }
  ]
});

export const evaluacionesRegistry = {
  fundamentos: evaluacion1,
  modulo1: evaluacion1,
  modulo2: generateGenericEval('modulo2', 'Arquitectura de Intervención Clínica', 'Estructura estándar de sesión y repertorio de técnicas.', 'la estructura conversacional'),
  modulo3: generateGenericEval('modulo3', 'Maestría en Groundings', 'Diseño y aplicación de protocolos somáticos.', 'la regulación somática y anclajes'),
  modulo4: generateGenericEval('modulo4', 'Diseño de Programas', 'Arquitectura de entrenamiento de 6 semanas.', 'el diseño de rutas de transformación'),
  modulo5: generateGenericEval('modulo5', 'Fundamentos Filosóficos', 'Raíces existenciales aplicadas al Liderazgo.', 'la autenticidad y libertad radical'),
  modulo6: generateGenericEval('modulo6', 'Ontología del Lenguaje', 'El lenguaje como creador y la Búsqueda de Sentido.', 'las declaraciones y el lenguaje generativo'),
  modulo7: generateGenericEval('modulo7', 'Liderazgo de Transformación', 'Salto cuántico del líder y quiebres ontológicos.', 'la inmersión cuántica y liderazgo'),
  modulo8: generateGenericEval('modulo8', 'Integración y Legado', 'El Manifiesto del Líder Cuántico-Existencial.', 'el diseño del legado existencial'),
  modulo9: generateGenericEval('modulo9', 'Guía Clínica: Parálisis y Sobreanálisis', 'Interrupción de parálisis y acción masiva.', 'la interrupción de la parálisis analítica')
};
