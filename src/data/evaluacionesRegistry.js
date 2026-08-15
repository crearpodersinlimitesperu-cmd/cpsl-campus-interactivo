import { evaluacion1 } from './evaluacion1';

const generateGenericEval = (id, title, description, focusTerm) => ({
  id,
  title: `Evaluación: ${title}`,
  description: description + " Resuelve este caso práctico y recibe feedback de nuestra IA actuando como Master Coach.",
  type: 'open_ai',
  caseStudy: `Un cliente llega a ti sintiéndose estancado y frustrado. Sabes que el núcleo de su problema puede abordarse mediante ${focusTerm}. \n\nDescribe paso a paso cómo estructurarías la sesión, qué distinciones le aportarías y qué acción concreta le pedirías al final para garantizar una alteración en su realidad.`
});

import { curriculum } from './curriculum';

export const evaluacionesRegistry = curriculum.reduce((acc, modulo) => {
  if (modulo.tieneEvaluacion) {
    if (modulo.id === 'modulo1') {
      acc[modulo.id] = evaluacion1;
    } else {
      acc[modulo.id] = generateGenericEval(
        modulo.id, 
        modulo.titulo.replace(/Módulo \d+: /, ''), 
        modulo.descripcion, 
        'los conceptos de este módulo'
      );
    }
  }
  return acc;
}, {});
