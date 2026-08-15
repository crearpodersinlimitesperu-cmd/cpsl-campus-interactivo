import { modulo1 } from './modulo1';
import { modulo2 } from './modulo2';
import { modulo3 } from './modulo3';
import { modulo4 } from './modulo4';
import { modulo5 } from './modulo5';
import { modulo6 } from './modulo6';
import { modulo7 } from './modulo7';
import { modulo8 } from './modulo8';
import { modulo9 } from './modulo9';
import { modulo10 } from './modulo10';
import { modulo11 } from './modulo11';

// Fila única de verdad curricular
export const curriculum = [
  {
    id: 'modulo1',
    titulo: 'Módulo 1: Fundamentos Teóricos',
    descripcion: 'Bases conceptuales del Coaching de Alto Rendimiento y Transformación Profunda.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo1,
    tieneEvaluacion: true
  },
  {
    id: 'modulo2',
    titulo: 'Módulo 2: Arquitectura de Intervención Clínica',
    descripcion: 'Estructura estándar de sesión y repertorio de técnicas conversacionales.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo2,
    tieneEvaluacion: true
  },
  {
    id: 'modulo3',
    titulo: 'Módulo 3: Maestría en Groundings',
    descripcion: 'Metodología para el diseño y aplicación de protocolos somáticos.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo3,
    tieneEvaluacion: true
  },
  {
    id: 'modulo4',
    titulo: 'Módulo 4: Diseño de Programas y Prevención',
    descripcion: 'Arquitectura de entrenamiento de 6 semanas y protocolos de mitigación de desvíos.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo4,
    tieneEvaluacion: true
  },
  {
    id: 'modulo5',
    titulo: 'Módulo 5: Fundamentos Filosóficos del Ser',
    descripcion: 'Raíces existenciales (Heidegger, Sartre, Kierkegaard) aplicadas al Liderazgo Auténtico.',
    estado: 'disponible',
    duracionSemanas: 2,
    lecciones: modulo5,
    tieneEvaluacion: true
  },
  {
    id: 'modulo6',
    titulo: 'Módulo 6: Ontología del Lenguaje y Realidad',
    descripcion: 'El lenguaje como creador. Ontología, Logoterapia y la Búsqueda de Sentido.',
    estado: 'disponible',
    duracionSemanas: 2,
    lecciones: modulo6,
    tieneEvaluacion: true
  },
  {
    id: 'modulo7',
    titulo: 'Módulo 7: Liderazgo de Transformación Profunda',
    descripcion: 'Salto de posibilidad del líder, quiebres ontológicos y el mapa de enrolamiento.',
    estado: 'disponible',
    duracionSemanas: 3,
    lecciones: modulo7,
    tieneEvaluacion: true
  },
  {
    id: 'modulo8',
    titulo: 'Módulo 8: Integración y Legado Existencial',
    descripcion: 'El Manifiesto del Líder de Alto Rendimiento y el Plan de Expansión.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo8,
    tieneEvaluacion: false // Asumimos que el 8 no tiene evaluación práctica de Groq
  },
  {
    id: 'modulo9',
    titulo: 'Módulo 9: Guía Clínica: Parálisis y Sobreanálisis',
    descripcion: 'Especialización en desbloqueo cognitivo, interrupción de parálisis y acción masiva.',
    estado: 'disponible',
    duracionSemanas: 2,
    lecciones: modulo9,
    tieneEvaluacion: true
  },
  {
    id: 'modulo10',
    titulo: 'Módulo 10: Alcance, Límites y Ética',
    descripcion: 'Responsabilidad profesional, límites del modelo y cuándo derivar a psicoterapia.',
    estado: 'disponible',
    duracionSemanas: 1,
    lecciones: modulo10,
    tieneEvaluacion: false
  },
  {
    id: 'modulo11',
    titulo: 'Módulo 11: Desbloquear la Propia Creatividad',
    descripcion: 'Ejercicios, protocolos y rituales para romper la rigidez mental del coach.',
    estado: 'disponible',
    duracionSemanas: 2,
    lecciones: modulo11,
    tieneEvaluacion: false
  }
];

export const getModuleById = (id) => curriculum.find(m => m.id === id);

// Suma total de lecciones de todos los módulos
export const getTotalLessonsCount = () => {
  return curriculum.reduce((total, modulo) => total + modulo.lecciones.length, 0);
};

// Suma total de evaluaciones (las que tienen tieneEvaluacion === true)
export const getTotalEvaluationsCount = () => {
  return curriculum.filter(m => m.tieneEvaluacion).length;
};
