import { evaluacion1 } from './evaluacion1';

const generateGenericEval = (id, title, description, focusTerm) => ({
  id,
  title: `Evaluación: ${title}`,
  description: description + " Resuelve este caso práctico y recibe feedback de nuestra IA actuando como Master Coach.",
  type: 'open_ai',
  caseStudy: `Un cliente llega a ti sintiéndose estancado y frustrado. Sabes que el núcleo de su problema puede abordarse mediante ${focusTerm}. \n\nDescribe paso a paso cómo estructurarías la sesión, qué distinciones le aportarías y qué acción concreta le pedirías al final para garantizar una alteración en su realidad.`
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
