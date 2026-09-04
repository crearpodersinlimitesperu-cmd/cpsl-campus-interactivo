/**
 * REPOSITORIO DE RETOS Y PRÁCTICAS FORMATIVAS DE AUTOENTRENAMIENTO (CAPÍTULO 1)
 * Diseñado para toda persona en Modo Aprendiz - CREAR PODER SIN LÍMITES
 * 
 * Reglas de cálculo de fechas relativas al inicio del C1 (Viernes 09:00 AM):
 * - offsetDays: días relativos al viernes de inicio (negativo = antes, 0 = viernes, 1 = sábado, 2 = domingo, positivo = después)
 * - hour: hora exacta (formato 24h)
 * - minute: minuto
 */

export const TAREAS_QT_C1 = [
  // ==========================================
  // FASE 1: ANTES DE CAPÍTULO 1 (PRE-SALA)
  // ==========================================
  {
    id: "pre-01",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Alineación y Práctica de Presencia Consciente",
    descripcion: "Alinear el compromiso personal, foco de servicio y presencia: atención plena, calibración de fisonomía y disponibilidad para aportar valor.",
    rol: "Modo Aprendiz",
    prioridad: "ALTA",
    offsetDays: -7,
    time: "10:00",
    entregable: "Compromiso de presencia confirmado y registrado en la bitácora.",
    origenManual: "Autoentrenamiento: Presencia y Foco"
  },
  {
    id: "pre-02",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Sensibilidad Empática y Casos Especiales",
    descripcion: "Reconocer las necesidades de acompañamiento respetuoso y condiciones de cada persona para brindar un espacio de seguridad psicológica y empatía.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: -5,
    time: "15:00",
    entregable: "Ficha de empatía y alertas de salud verificada.",
    origenManual: "Autoentrenamiento: Empatía y Escucha Activa"
  },
  {
    id: "pre-03",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Validación de Imagen y Presencia Pulcra",
    descripcion: "Cuidar la presentación personal, sobriedad y profesionalismo impecable con la indumentaria oficial de la empresa para proyectar congruencia.",
    rol: "Modo Aprendiz",
    prioridad: "MEDIA",
    offsetDays: -3,
    time: "12:00",
    entregable: "Checklist de presencia y congruencia al 100%.",
    origenManual: "Autoentrenamiento: Congruencia e Identidad"
  },
  {
    id: "pre-04",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Preparación de Materiales y Bitácoras de Trabajo",
    descripcion: "Revisión meticulosa de credenciales oficiales, guías de trabajo y cuadernos de autoobservación para una experiencia impecable.",
    rol: "Modo Aprendiz",
    prioridad: "ALTA",
    offsetDays: -2,
    time: "18:00",
    entregable: "Materiales organizados y listos para su uso.",
    origenManual: "Autoentrenamiento: Orden y Excelencia Operativa"
  },
  {
    id: "pre-05",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Armonización del Entorno: Alineación y Ergonomía",
    descripcion: "Disposición armónica del espacio, asientos cómodos con visibilidad total, libre tránsito y eliminación de obstáculos para una inmersión profunda.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "16:00",
    entregable: "Entorno alineado y verificado para la experiencia.",
    origenManual: "Autoentrenamiento: Creación del Contenedor"
  },
  {
    id: "pre-06",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Calibración Acústica, Microfonía y Confort Térmico",
    descripcion: "Prueba técnica de sonido, música envolvente y climatización equilibrada para asegurar concentración y bienestar.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "18:00",
    entregable: "Sonido impecable y confort ambiental verificado.",
    origenManual: "Autoentrenamiento: Entorno y Bienestar"
  },
  {
    id: "pre-07",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Círculo de Enfoque & Alineación con el Entrenador",
    descripcion: "Espacio de preparación vivencial: mente en calma, alineación con el propósito y disposición de servir desde la humildad del aprendizaje.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "20:00",
    entregable: "Pacto de impecabilidad y energía unificada.",
    origenManual: "Autoentrenamiento: Estado del Ser"
  },

  // ==========================================
  // FASE 2: DURANTE CAPÍTULO 1 (SALA ACTIVA)
  // ==========================================
  {
    id: "dur-01",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 07:30 AM — Llegada Temprana y Grounding Matutino",
    descripcion: "Llegada con puntualidad impecable, centramiento de respiración y verificación final de los puntos de confort antes de iniciar.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: 0,
    time: "07:30",
    entregable: "Presencia activa y entorno en impecabilidad.",
    origenManual: "Autoentrenamiento: Puntualidad y Foco"
  },
  {
    id: "dur-02",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 08:00 AM — Bienvenida Cálida y Desconexión Digital",
    descripcion: "Recepción consciente, validación de credenciales y resguardo de celulares para favorecer la introspección y la presencia plena.",
    rol: "Modo Aprendiz",
    prioridad: "ALTA",
    offsetDays: 0,
    time: "08:00",
    entregable: "100% de enfoque sin distractores digitales en sala.",
    origenManual: "Autoentrenamiento: Desconexión Digital"
  },
  {
    id: "dur-03",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 09:00 AM — Apertura Oficial & Fisonomía de Atención",
    descripcion: "Postura corporal de escucha activa y apertura. Monitoreo del propio estado interno para sostener un ambiente de calma y enfoque continuo.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: 0,
    time: "09:00",
    entregable: "Silencio consciente y atención plena sostenida.",
    origenManual: "Autoentrenamiento: Fisonomía y Autogestión"
  },
  {
    id: "dur-04",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes Tarde/Noche — Contención y Respeto a los Procesos",
    descripcion: "Acompañamiento silencioso y respetuoso, sin invadir ni dramatizar, honrando los momentos de catarsis y auto-descubrimiento.",
    rol: "Modo Aprendiz",
    prioridad: "ALTA",
    offsetDays: 0,
    time: "19:00",
    entregable: "Acompañamiento digno, respetuoso y empático.",
    origenManual: "Autoentrenamiento: Respeto al Espacio del Otro"
  },
  {
    id: "dur-05",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes Cierre (23:00) — Reflexión y Aprendizajes del Día (Máx 20 min)",
    descripcion: "Espacio de síntesis y autoevaluación: reconocer los retos superados del viernes, organizar el descanso y preparar la jornada del sábado.",
    rol: "Modo Aprendiz",
    prioridad: "MEDIA",
    offsetDays: 0,
    time: "23:00",
    entregable: "Bitácora personal de aprendizajes registrada.",
    origenManual: "Autoentrenamiento: Cierre Reflexivo"
  },
  {
    id: "dur-06",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Sábado 07:30 AM — Puntualidad y Autoobservación en Sala",
    descripcion: "Apertura del segundo día con disciplina y puntualidad rigurosa para las dinámicas vivenciales de reconstrucción y auto-observación.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: 1,
    time: "07:30",
    entregable: "Presencia puntual y actitud receptiva.",
    origenManual: "Autoentrenamiento: Disciplina y Autodisciplina"
  },
  {
    id: "dur-07",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Sábado Noche — Procesos de Cierre y Aceptación",
    descripcion: "Acompañamiento en el proceso vivencial de perdón, reconciliación y aceptación radical con música y ambiente introspectivo.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: 1,
    time: "20:00",
    entregable: "Atmósfera de respeto y proceso completado en armonía.",
    origenManual: "Autoentrenamiento: Reconciliación y Perdón"
  },
  {
    id: "dur-08",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Domingo 08:00 AM — Declaración de Visión y Futuro Posible",
    descripcion: "Inicio del día de proyección futura con energía alta, claridad de propósito y definición de metas transformadoras.",
    rol: "Modo Aprendiz",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "08:00",
    entregable: "Visión personal de futuro redactada con claridad.",
    origenManual: "Autoentrenamiento: Visión y Posibilidad"
  },
  {
    id: "dur-09",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Domingo 16:00 PM — Celebración de Cierre y Reconocimiento",
    descripcion: "Momento culmen de reconocimiento mutuo, gratitud compartida y culminación vivencial del ciclo.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: 2,
    time: "16:00",
    entregable: "Celebración consciente y culminación del ciclo.",
    origenManual: "Autoentrenamiento: Gratitud y Reconocimiento"
  },

  // ==========================================
  // FASE 3: DESPUÉS DE CAPÍTULO 1 (POST-SALA)
  // ==========================================
  {
    id: "post-01",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Domingo 20:30 PM — Orden Integral y Cuidado del Espacio",
    descripcion: "Dejar el espacio físico impecable, ordenado y en perfecto estado como reflejo de la congruencia y el respeto al entorno.",
    rol: "Modo Aprendiz",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "20:30",
    entregable: "Espacio verificado en impecabilidad total.",
    origenManual: "Autoentrenamiento: Cuidado del Entorno"
  },
  {
    id: "post-02",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Domingo 22:00 PM — Círculo de Cierre & Cosecha de Aprendizajes",
    descripcion: "Espacio reflexivo final: gratitud, reconocimiento personal a los logros alcanzados y consolidación de lecciones aprendidas.",
    rol: "Modo Aprendiz",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "22:00",
    entregable: "Cierre consciente y cosecha de aprendizajes.",
    origenManual: "Autoentrenamiento: Cosecha de Aprendizajes"
  },
  {
    id: "post-03",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Lunes T+1 — Integración de Aprendizajes y Métricas de Consciencia",
    descripcion: "Auditar la propia experiencia, reflexionar sobre las áreas de estiramiento y definir el plan de acción para el día a día.",
    rol: "Modo Aprendiz",
    prioridad: "CRÍTICA",
    offsetDays: 3,
    time: "18:00",
    entregable: "Plan de integración personal completado.",
    origenManual: "Autoentrenamiento: Integración Cotidiana"
  },
  {
    id: "post-04",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Miércoles T+3 — Acompañamiento y Siguiente Nivel de Formación",
    descripcion: "Dar continuidad a las declaraciones personales, sostener los hábitos adquiridos y dar el paso al siguiente nivel de maestría.",
    rol: "Modo Aprendiz",
    prioridad: "ALTA",
    offsetDays: 5,
    time: "19:00",
    entregable: "Seguimiento y consolidación del compromiso.",
    origenManual: "Autoentrenamiento: Continuidad y Constancia"
  }
];
