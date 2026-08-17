/**
 * REPOSITORIO MAESTRO DE TAREAS OPERATIVAS DEL QUANTUM TEAM (CAPÍTULO 1)
 * Extraído del Sistema Operativo de Alto Rendimiento - CREAR Poder Sin Límites
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
    titulo: "Alineación y Asignación de Roles en Sala QT",
    descripcion: "Asignar y confirmar a los líderes en cada puesto clave: Capitán QT, Audio/Luces, Registro/Puerta, Guardianes de Pasillo, Soporte Emocional, Cronometrador y Logística/Abastecimiento.",
    rol: "Capitán QT / Coordinador",
    prioridad: "ALTA",
    offsetDays: -7,
    time: "10:00",
    entregable: "Matriz de roles confirmada y publicada en grupo oficial.",
    origenManual: "Módulo 4: Desarrollo de Aliados y Matriz de Cancha"
  },
  {
    id: "pre-02",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Auditoría de Lista de Participantes y Casos Especiales",
    descripcion: "Revisar la nómina oficial de participantes inscritos. Identificar casos médicos, condiciones físicas, mujeres embarazadas o situaciones emocionales delicadas para asignación de guardián dedicado.",
    rol: "Registro & Soporte Emocional",
    prioridad: "CRÍTICA",
    offsetDays: -5,
    time: "15:00",
    entregable: "Ficha de alertas médicas/emocionales entregada al Entrenador.",
    origenManual: "Módulo 5: Protocolo de Seguridad y Casos Especiales"
  },
  {
    id: "pre-03",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Validación de Uniformes e Imagen Oficial del Staff",
    descripcion: "Garantizar que todo el Quantum Team cuente con el polo oficial de la empresa en perfecto estado, pantalón formal oscuro (sin roturas) y calzado pulcro. Cero uso de logos o accesorios no autorizados.",
    rol: "Todos los QT",
    prioridad: "MEDIA",
    offsetDays: -3,
    time: "12:00",
    entregable: "Checklist de uniforme y credenciales al 100%.",
    origenManual: "Módulo 1: Identidad, ADN & Estándar Impecable"
  },
  {
    id: "pre-04",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Confección de Kits, Gafetes y Bitácoras de Participante",
    descripcion: "Impresión de credenciales con nombres oficiales, armado de carpetas de trabajo, entrega de bolígrafos y preparación de sobres confidenciales para las dinámicas vivenciales.",
    rol: "Logística & Materiales",
    prioridad: "ALTA",
    offsetDays: -2,
    time: "18:00",
    entregable: "Cajas de material ordenadas alfabéticamente.",
    origenManual: "Módulo 5: Flujos de Trabajo Temporales"
  },
  {
    id: "pre-05",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Montaje de Sala: Alineación Milimétrica y Ergonomía",
    descripcion: "Disposición de sillas en arco/herradura con separación exacta, pasillos despejados para tránsito de staff, eliminación de puntos ciegos hacia el podio del entrenador.",
    rol: "Guardianes de Sala & Logística",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "16:00",
    entregable: "Alineación de sala verificada con cinta métrica y libre de obstáculos.",
    origenManual: "Checklist Maestro Pre-Apertura (20 Puntos Críticos)"
  },
  {
    id: "pre-06",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Calibración Acústica, Microfonía y Climatización (AC a 21°C)",
    descripcion: "Prueba de sonido (micrófono diadema y mano), ajuste de ecualización para evitar feedback, carga de playlists emocionales y ajuste del aire acondicionado entre 20°C y 22°C para mantener el estado de alerta.",
    rol: "Audio & Luces",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "18:00",
    entregable: "Sonido impecable probado y termostato fijado en 21°C.",
    origenManual: "Checklist Maestro Pre-Apertura"
  },
  {
    id: "pre-07",
    fase: "ANTES",
    faseTitulo: "Fase 1: Preparación & Convocatoria Pre-Sala",
    titulo: "Círculo Sagrado de Staff & Alineación con el Entrenador",
    descripcion: "Reunión general del Quantum Team con el Entrenador Principal (Jueves por la noche). Grounding de equipo, mente en cero, repaso del mapa de quiebres y entrega del corazón al servicio.",
    rol: "Todos los QT",
    prioridad: "CRÍTICA",
    offsetDays: -1,
    time: "20:00",
    entregable: "Pacto de impecabilidad y energía unificada.",
    origenManual: "Módulo 2: Cultura Crear & 12 Principios del QT"
  },

  // ==========================================
  // FASE 2: DURANTE CAPÍTULO 1 (SALA ACTIVA)
  // ==========================================
  {
    id: "dur-01",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 07:30 AM — Llegada de Staff y Grounding Matutino",
    descripcion: "Llegada puntual del 100% del staff, verificación final de baterías de micrófonos, pañuelos en puntos estratégicos y último ajuste de temperatura antes de abrir puertas.",
    rol: "Todos los QT",
    prioridad: "CRÍTICA",
    offsetDays: 0,
    time: "07:30",
    entregable: "Staff en posición y sala blindada.",
    origenManual: "Módulo 3: Mapa de Transformación Día 1"
  },
  {
    id: "dur-02",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 08:00 AM — Registro Impecable y Custodia de Distractores",
    descripcion: "Recepción cálida y firme, verificación de documento de identidad, entrega de gafete oficial y recolección segura de celulares / relojes inteligentes en sobres numerados.",
    rol: "Puerta & Registro",
    prioridad: "ALTA",
    offsetDays: 0,
    time: "08:00",
    entregable: "100% de participantes registrados sin celulares en sala.",
    origenManual: "Módulo 5: Protocolo de Puerta y Custodia"
  },
  {
    id: "dur-03",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes 09:00 AM — Apertura Oficial & Postura de Guardia en Sala",
    descripcion: "Cierre hermético de puertas, postura corporal de poder y servicio en los perímetros de sala. Monitoreo visual de participantes para sostener el contexto del entrenador sin cruzar miradas distractoras.",
    rol: "Guardianes de Sala",
    prioridad: "CRÍTICA",
    offsetDays: 0,
    time: "09:00",
    entregable: "Sala en silencio absoluto y contexto sostenido.",
    origenManual: "Módulo 1: Postura del Guardián del Contexto"
  },
  {
    id: "dur-04",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes Tarde/Noche — Contención en Procesos de Quiebre Profundo",
    descripcion: "Suministro silencioso de pañuelos y agua cuando sea estrictamente requerido, sin interrumpir el proceso emocional del participante ni quitarle su quiebre. Custodia de baños y pasillos.",
    rol: "Soporte Emocional",
    prioridad: "ALTA",
    offsetDays: 0,
    time: "19:00",
    entregable: "Participantes contenidos con dignidad y respeto.",
    origenManual: "Módulo 3: Día 1 - El Quiebre"
  },
  {
    id: "dur-05",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Viernes Cierre (23:00) — Debriefing Nocturno de Staff (Máx 20 min)",
    descripcion: "Revisión rápida con el Entrenador sobre la jornada del viernes: participantes en riesgo de abandono, ajustes de logística para el sábado, descanso inmediato.",
    rol: "Todos los QT",
    prioridad: "MEDIA",
    offsetDays: 0,
    time: "23:00",
    entregable: "Minuta de ajustes y retiro a descanso reparador.",
    origenManual: "Módulo 5: Rituales de Cierre Diario"
  },
  {
    id: "dur-06",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Sábado 07:30 AM — Puerta Estricta y Montaje de Dinámica de Espejo",
    descripcion: "Verificación de puntualidad de participantes al segundo día. Preparación de sala para los procesos vivenciales de reconstrucción y auto-observación.",
    rol: "Puerta & Logística",
    prioridad: "CRÍTICA",
    offsetDays: 1,
    time: "07:30",
    entregable: "Sala lista y participantes ingresados sin retrasos.",
    origenManual: "Módulo 3: Día 2 - El Espejo y la Reconstrucción"
  },
  {
    id: "dur-07",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Sábado Noche — El Gran Traspaso & Procesos de Perdón",
    descripcion: "Control de iluminación tenue, música ambiental envolvente, custodia perimetral absoluta durante la dinámica central del perdón y cartas.",
    rol: "Audio, Luces & Guardianes",
    prioridad: "CRÍTICA",
    offsetDays: 1,
    time: "20:00",
    entregable: "Atmósfera sagrada y proceso completado al 100%.",
    origenManual: "Módulo 3: Dinámica Central del Sábado"
  },
  {
    id: "dur-08",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Domingo 08:00 AM — Declaración de Visión & Enrolamiento al Ser",
    descripcion: "Apertura del último día con energía máxima. Preparación de mesas de información de Capítulo 2 y registro de testimonios.",
    rol: "Todos los QT",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "08:00",
    entregable: "Mesas de C2 preparadas y material listo.",
    origenManual: "Módulo 3: Día 3 - El Enrolamiento al Ser"
  },
  {
    id: "dur-09",
    fase: "DURANTE",
    faseTitulo: "Fase 2: Ejecución de Alto Rendimiento en Sala",
    titulo: "Domingo 16:00 PM — Protocolo de Ceremonia de Graduación & Familias",
    descripcion: "Recepción ordenada de familiares e invitados de graduación, control de aforo, entrega de pines oficiales y rosas, música triunfal sincronizada al segundo.",
    rol: "Puerta, Audio & Guardianes",
    prioridad: "CRÍTICA",
    offsetDays: 2,
    time: "16:00",
    entregable: "Ceremonia impecable y entrega de credenciales de graduado.",
    origenManual: "Módulo 5: Protocolo de Graduación y Familias"
  },

  // ==========================================
  // FASE 3: DESPUÉS DE CAPÍTULO 1 (POST-SALA)
  // ==========================================
  {
    id: "post-01",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Domingo 20:30 PM — Desmontaje Total y Devolución del Local",
    descripcion: "Recolección completa de equipos, señalética, cables, banderas y basura. Dejar el salón del hotel en estado impecable (mejor de como fue recibido).",
    rol: "Logística & Todos los QT",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "20:30",
    entregable: "Acta de entrega de local firmada sin observaciones.",
    origenManual: "Módulo 5: Protocolo de Cierre y Desmontaje"
  },
  {
    id: "post-02",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Domingo 22:00 PM — Círculo de Cierre QT & Entrega de Aprendizajes",
    descripcion: "Reunión íntima del staff con el Entrenador: agradecimiento mutuo, reconocimiento a la excelencia, retroalimentación ontológica personal y cierre formal del servicio.",
    rol: "Todos los QT",
    prioridad: "ALTA",
    offsetDays: 2,
    time: "22:00",
    entregable: "Cierre energético y celebración del equipo.",
    origenManual: "Módulo 2: El Ritual de Agradecimiento del Staff"
  },
  {
    id: "post-03",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Lunes T+1 — Autopsia Operativa y Cálculo de Conversión (PP%)",
    descripcion: "Reunión de gerencia y capitanes: auditar métricas de graduación, porcentaje de pase a Capítulo 2 (PP%), quiebres logísticos presentados y plan de acción preventivo para la siguiente edición.",
    rol: "Capitán QT & Gerencia de Sede",
    prioridad: "CRÍTICA",
    offsetDays: 3,
    time: "18:00",
    entregable: "Informe de Autopsia Post-C1 cargado al sistema con métricas reales.",
    origenManual: "portal-content-gerencia: Calculadora de Conversión PP% y Autopsia"
  },
  {
    id: "post-04",
    fase: "DESPUÉS",
    faseTitulo: "Fase 3: Cierre, Métricas & Continuidad Post-C1",
    titulo: "Miércoles T+3 — Acompañamiento a Noche de Reencuentro e Inicio C2",
    descripcion: "Seguimiento y confirmación de asistencia de los graduados a su primera sesión de seguimiento / enrolamiento activo hacia su Capítulo Dos.",
    rol: "Capitán QT & Líderes de Enrolamiento",
    prioridad: "ALTA",
    offsetDays: 5,
    time: "19:00",
    entregable: "Lista de asistencia al Reencuentro con más del 85% de presencia.",
    origenManual: "Módulo 3: La Cadena de Continuidad Transformacional"
  }
];
