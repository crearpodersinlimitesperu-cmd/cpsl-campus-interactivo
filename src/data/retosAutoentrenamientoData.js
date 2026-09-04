/**
 * REPOSITORIO DIDÁCTICO DE RETOS DE AUTOENTRENAMIENTO
 * Tono: Neutro, didáctico, profesional y con leves tonos de fino humor/sarcasmo.
 * Diseñado para personas en Modo Aprendiz — Sin roles ni jerarquías.
 */

export const CATEGORIAS_RETOS = [
  { id: 'TODAS', label: 'Todos los Retos', icon: '📋' },
  { id: 'ACCION', label: 'Antiprocrastinación', icon: '⚡' },
  { id: 'INTEGRIDAD', label: 'Integridad & Palabra', icon: '🛡️' },
  { id: 'EMOCIONES', label: 'Gestión Emocional (Cero Drama)', icon: '🧘' },
  { id: 'DIGITAL', label: 'Soberanía Digital', icon: '📱' },
  { id: 'CLARIDAD', label: 'Hechos vs. Interpretaciones', icon: '🧠' },
  { id: 'FISIOLOGIA', label: 'Fisiología Básica', icon: '💪' }
];

export const TRADUCTOR_EXCUSAS = [
  {
    excusa: "Estoy esperando el momento ideal para empezar.",
    traduccion: "El momento ideal no existe en el calendario gregoriano; llevas 3 semanas posponiendo una llamada de 4 minutos.",
    principio: "La acción precede a la motivación, no al revés."
  },
  {
    excusa: "Es que mi entorno no comprende mi proceso de transformación.",
    traduccion: "Sigues esperando que tu familia cambie para que tú puedas tender tu cama y levantarte temprano.",
    principio: "La coherencia personal no requiere el aplauso ni el permiso de la audiencia."
  },
  {
    excusa: "Hoy el universo me está pidiendo fluir y soltar el control.",
    traduccion: "Tienes pereza biológica y estás usando la metafísica para no responder correos pendientes.",
    principio: "Fluir con la realidad no es abandonar los compromisos que tú mismo adquiriste."
  },
  {
    excusa: "Estoy en un análisis estratégico profundo antes de ejecutar.",
    traduccion: "Parálisis por análisis: ver 14 tutoriales en YouTube sobre cómo correr un maratón mientras sigues sentado comiendo galletas.",
    principio: "Un gramo de ejecución imperfecta vale más que una tonelada de planes teóricos en un cajón."
  },
  {
    excusa: "Es que yo soy una persona muy perfeccionista.",
    traduccion: "Tienes un miedo paralizante a ser juzgado, así que prefieres no entregar nada y culpar al estándar de calidad.",
    principio: "El perfeccionismo crónico es la forma más cobarde de la procrastinación."
  },
  {
    excusa: "Ya voy saliendo, estoy a 5 minutitos.",
    traduccion: "Sigues en toalla buscando las llaves debajo de los cojines del sillón.",
    principio: "La puntualidad es la primera manifestación tangible del respeto hacia el tiempo del otro."
  }
];

export const RETOS_AUTOENTRENAMIENTO_DEFAULT = [
  // ==========================================
  // CATEGORÍA: ACCIÓN & ANTIPROCRASTINACIÓN
  // ==========================================
  {
    id: "reto-acc-01",
    categoria: "ACCION",
    categoriaLabel: "Antiprocrastinación",
    icono: "⚡",
    titulo: "La Regla de los 2 Minutos (Cero Discusiones Internas)",
    dificultad: "Leve",
    tiempoEstimado: "2 a 5 min",
    puntosXP: 150,
    sintomaComico: "Dedicar 45 minutos de rumiación existencial y debate sobre el libre albedrío para evitar colgar una chaqueta o botar una caja de cartón.",
    principioDidactico: "La fricción de inicio es puramente mental. Reducir la barrera de entrada a menos de 120 segundos desactiva la resistencia de los ganglios basales.",
    practicaConcreta: "Identifica 3 tareas microscópicas pendientes (responder un mensaje con un 'sí/no', archivar un papel, recoger un objeto) y ejecútalas en este instante sin negociar.",
    criterioExito: "Completar las 3 microtareas sin abrir pestañas secundarias en el proceso."
  },
  {
    id: "reto-acc-02",
    categoria: "ACCION",
    categoriaLabel: "Antiprocrastinación",
    icono: "🚀",
    titulo: "La Versión 1.0 Fea pero Viva (Romper el Perfeccionismo)",
    dificultad: "Moderada",
    tiempoEstimado: "15 min",
    puntosXP: 250,
    sintomaComico: "Pasar 2 semanas eligiendo la tipografía y los márgenes de un documento que todavía no tiene una sola línea de contenido real.",
    principioDidactico: "Cualquier borrador imperfecto que existe en el mundo real supera en un 100% a la obra maestra que solo existe en tu imaginación.",
    practicaConcreta: "Elige un proyecto estancado. Abre un documento en blanco y redacta durante 15 minutos exactos sin corregir ortografía, estilo ni borrar nada. Solo volcar ideas.",
    criterioExito: "Generar un borrador crudo y funcional de al menos una página o boceto."
  },
  {
    id: "reto-acc-03",
    categoria: "ACCION",
    categoriaLabel: "Antiprocrastinación",
    icono: "⏳",
    titulo: "Desactivar la Limpieza Súbita de Escritorio",
    dificultad: "Moderada",
    tiempoEstimado: "25 min",
    puntosXP: 200,
    sintomaComico: "Sentir un impulso casi místico de organizar los cajones por orden alfabético justo en el segundo en que ibas a empezar tu informe financiero.",
    principioDidactico: "El cerebro inventa tareas secundarias 'útiles' para calmar la culpa de no hacer la tarea principal que genera incomodidad cognitiva.",
    practicaConcreta: "Pon un cronómetro de 25 minutos (Pomodoro). Ignora el polvo de la repisa y concéntrate únicamente en la tarea prioritaria hasta que suene la alarma.",
    criterioExito: "Sostener 25 minutos seguidos de trabajo sin ceder a la urgencia ficticia de ordenar nada."
  },

  // ==========================================
  // CATEGORÍA: INTEGRIDAD & LA PALABRA
  // ==========================================
  {
    id: "reto-int-01",
    categoria: "INTEGRIDAD",
    categoriaLabel: "Integridad & Palabra",
    icono: "⏱️",
    titulo: "Puntualidad Quirúrgica (Desterrar el 'En 5 Llego')",
    dificultad: "Moderada",
    tiempoEstimado: "Todo el día",
    puntosXP: 300,
    sintomaComico: "Asumir que el tráfico de la ciudad debe abrirse como el Mar Rojo para compensar que saliste 20 minutos tarde de tu casa.",
    principioDidactico: "La puntualidad no mide tu velocidad de desplazamiento; mide tu capacidad de anticipación y el valor que le otorgas a la palabra dada.",
    practicaConcreta: "En todas tus citas, reuniones o llamadas de hoy, preséntate 3 minutos antes. Si prometiste llamar a las 16:00, timbra a las 15:59.",
    criterioExito: "Cero llegadas tardías en el día y cero excusas basadas en el clima o el tráfico."
  },
  {
    id: "reto-int-02",
    categoria: "INTEGRIDAD",
    categoriaLabel: "Integridad & Palabra",
    icono: "🛑",
    titulo: "El Milagro del 'No' a Tiempo",
    dificultad: "Avanzada",
    tiempoEstimado: "10 min",
    puntosXP: 350,
    sintomaComico: "Decir 'sí, cuenta conmigo' a un compromiso que detestas, para luego pasar 4 días deseando enfermarte convenientemente el día del evento.",
    principioDidactico: "Un 'no' sereno y transparente protege la relación. Un 'sí' forzado engendra resentimiento, informalidad y cancelaciones deshonestas de último minuto.",
    practicaConcreta: "Identifica una solicitud pendiente que no deseas o no puedes asumir. Comunica hoy mismo tu negativa de forma amable, directa y sin inventar una tragedia griega.",
    criterioExito: "Emitir una declinación cordial sin justificaciones teatrales ni falsas esperanzas."
  },
  {
    id: "reto-int-03",
    categoria: "INTEGRIDAD",
    categoriaLabel: "Integridad & Palabra",
    icono: "📜",
    titulo: "Auditoría de Deudas de Palabra (Cierre de Bucles)",
    dificultad: "Moderada",
    tiempoEstimado: "20 min",
    puntosXP: 300,
    sintomaComico: "Tener 8 promesas informales flotando en el limbo ('luego te paso el contacto', 'te aviso mañana') creyendo que nadie lo recuerda.",
    principioDidactico: "El efecto Zeigarnik demuestra que los compromisos inconclusos consumen memoria de trabajo y socavan la confianza en uno mismo.",
    practicaConcreta: "Haz una lista de 2 promesas pendientes. O las cumples hoy (enviar el dato, compartir el archivo) o escribes con honestidad para cancelar el acuerdo.",
    criterioExito: "Cerrar 2 acuerdos abiertos de forma definitiva."
  },

  // ==========================================
  // CATEGORÍA: GESTIÓN EMOCIONAL (CERO DRAMA)
  // ==========================================
  {
    id: "reto-emo-01",
    categoria: "EMOCIONES",
    categoriaLabel: "Gestión Emocional (Cero Drama)",
    icono: "❄️",
    titulo: "Cuarentena de Mensajes en Caliente",
    dificultad: "Avanzada",
    tiempoEstimado: "2 horas de espera",
    puntosXP: 350,
    sintomaComico: "Sentir el sagrado fuego de la indignación en tus dedos y redactar un testamento de WhatsApp con 14 párrafos para demostrar que tienes la razón moral.",
    principioDidactico: "Durante un secuestro amigdalar, la capacidad de evaluar consecuencias a mediano plazo se apaga. Responder en caliente siempre es alimentar el ego.",
    practicaConcreta: "Si recibes una notificación o mensaje que te provoque ira o ganas de defenderte: prohíbete responder antes de 120 minutos. Respira y camina.",
    criterioExito: "Esperar 2 horas completas antes de responder, o comprobar que ya no valía la pena responder."
  },
  {
    id: "reto-emo-02",
    categoria: "EMOCIONES",
    categoriaLabel: "Gestión Emocional (Cero Drama)",
    icono: "🤝",
    titulo: "Disculpa Limpia sin el Veneno del 'Pero...'",
    dificultad: "Avanzada",
    tiempoEstimado: "5 min",
    puntosXP: 400,
    sintomaComico: "Decir 'Te pido perdón si te sentiste mal, PERO es que tú empezaste y además yo estaba muy estresado'.",
    principioDidactico: "Cualquier disculpa que contenga la conjunción adversativa 'pero' no es una asunción de responsabilidad; es un contraataque con saco y corbata.",
    practicaConcreta: "Si cometes una falta o error, formula tu disculpa en tres partes: 1) Reconocimiento del hecho. 2) Impacto causado. 3) Enmienda concreta. Cero 'peros'.",
    criterioExito: "Formular una disculpa 100% limpia sin descargar culpas en terceros ni en las circunstancias."
  },
  {
    id: "reto-emo-03",
    categoria: "EMOCIONES",
    categoriaLabel: "Gestión Emocional (Cero Drama)",
    icono: "🛡️",
    titulo: "No Ser el Fiscal General de las Redes Sociales",
    dificultad: "Leve",
    tiempoEstimado: "Todo el día",
    puntosXP: 200,
    sintomaComico: "Sentir la imperiosa necesidad de escribir un comentario educando a un perfil anónimo con foto de anime en Twitter o TikTok.",
    principioDidactico: "En la historia de la humanidad, ninguna discusión en una sección de comentarios ha cambiado jamás la postura de un fanático. Tu energía biológica es finita.",
    practicaConcreta: "Ante cualquier publicación o video absurdo que te den ganas de corregir hoy: no escribas nada. Aplica el botón de 'seguir de largo' con absoluta paz mental.",
    criterioExito: "Cero batallas dialécticas inútiles en internet durante 24 horas."
  },

  // ==========================================
  // CATEGORÍA: SOBERANÍA DIGITAL & ATENCIÓN
  // ==========================================
  {
    id: "reto-dig-01",
    categoria: "DIGITAL",
    categoriaLabel: "Soberanía Digital",
    icono: "🍽️",
    titulo: "Comer sin Pantallas (El Experimento Sensorial)",
    dificultad: "Leve",
    tiempoEstimado: "20 min",
    puntosXP: 250,
    sintomaComico: "Tener la comida servida enfriándose durante 10 minutos porque no encuentras el video de YouTube con la duración exacta de tu almuerzo.",
    principioDidactico: "El consumo de dopamina digital durante la ingesta disocia al cerebro de las señales de saciedad y entrena la incapacidad de tolerar el silencio.",
    practicaConcreta: "Realiza una de tus comidas principales de hoy con el teléfono en otra habitación y la televisión apagada. Solo mastica, siente la textura y respira.",
    criterioExito: "Completar la comida de principio a fin sin interacción con ningún dispositivo."
  },
  {
    id: "reto-dig-02",
    categoria: "DIGITAL",
    categoriaLabel: "Soberanía Digital",
    icono: "📵",
    titulo: "El Dormitorio Analógico (Desintoxicación Nocturna)",
    dificultad: "Moderada",
    tiempoEstimado: "Noche completa",
    puntosXP: 300,
    sintomaComico: "Dar las buenas noches para luego pasar 70 minutos en la oscuridad mirando videos de personas limpiando alfombras en Instagram.",
    principioDidactico: "La luz azul y la microalerta de las redes retrasan la fase REM del sueño e inducen fatiga crónica matutina.",
    practicaConcreta: "Hoy, coloca el teléfono a cargar a una distancia que te obligue a ponerte de pie para tocarlo, o déjalo fuera del dormitorio al irte a dormir.",
    criterioExito: "Cero pantallas en la cama antes de dormir y al despertar."
  },
  {
    id: "reto-dig-03",
    categoria: "DIGITAL",
    categoriaLabel: "Soberanía Digital",
    icono: "🎯",
    titulo: "Monotarea de 60 Minutos (Cero Pestañas Fantasma)",
    dificultad: "Moderada",
    tiempoEstimado: "60 min",
    puntosXP: 300,
    sintomaComico: "Tener 38 pestañas abiertas en el navegador y saltar entre ellas cada 90 segundos convenciéndote de que eres un prodigio del multitasking.",
    principioDidactico: "El costo de conmutación de atención (residuos de atención) reduce el CI funcional temporalmente en hasta 10 puntos.",
    practicaConcreta: "Elige una única tarea intelectual o de trabajo. Cierra o minimiza todo lo demás. Pon el teléfono boca abajo y trabaja 60 minutos ininterrumpidos en eso.",
    criterioExito: "Una hora completa dedicada exclusivamente a un solo entregable."
  },

  // ==========================================
  // CATEGORÍA: HECHOS VS. INTERPRETACIONES
  // ==========================================
  {
    id: "reto-cla-01",
    categoria: "CLARIDAD",
    categoriaLabel: "Hechos vs. Interpretaciones",
    icono: "🔮",
    titulo: "Apagar la Telepatía Negativa",
    dificultad: "Moderada",
    tiempoEstimado: "15 min",
    puntosXP: 250,
    sintomaComico: "Notar que alguien te respondió con un simple 'Ok' y pasar 4 horas deduciendo que está tramando tu despido o que te odia en secreto.",
    principioDidactico: "La mente humana odia el vacío y proyecta sus mayores inseguridades sobre la falta de datos. Hecho: escribió 'Ok'. Interpretación: tu telenovela mental.",
    practicaConcreta: "Identifica un pensamiento donde estés asumiendo la intención o emoción de otra persona sin haberle preguntado. Pregunta con calma o descarta la suposición.",
    criterioExito: "Reemplazar una suposición angustiante por una pregunta objetiva o por la aceptación del hecho frío."
  },
  {
    id: "reto-cla-02",
    categoria: "CLARIDAD",
    categoriaLabel: "Hechos vs. Interpretaciones",
    icono: "👂",
    titulo: "Escuchar sin Preparar el Ataque en la Cabeza",
    dificultad: "Moderada",
    tiempoEstimado: "1 conversación",
    puntosXP: 300,
    sintomaComico: "Asentir con la cabeza mientras la otra persona habla, cuando en realidad solo estás esperando que tome aire para clavarle tu brillante argumento.",
    principioDidactico: "Si estás preparando tu respuesta mientras el otro habla, no estás comunicándote; estás haciendo fila para desahogar tu monólogo interior.",
    practicaConcreta: "En una conversación relevante hoy, escucha durante 3 minutos sin planear tu réplica. Cuando termine, haz una pregunta de clarificación en vez de opinar.",
    criterioExito: "Hacer una pregunta genuina sobre lo que el otro dijo antes de emitir tu propio juicio."
  },

  // ==========================================
  // CATEGORÍA: FISIOLOGÍA BÁSICA
  // ==========================================
  {
    id: "reto-fis-01",
    categoria: "FISIOLOGIA",
    categoriaLabel: "Fisiología Básica",
    icono: "💧",
    titulo: "Agua Antes de Bombear Cafeína",
    dificultad: "Leve",
    tiempoEstimado: "2 min",
    puntosXP: 150,
    sintomaComico: "Despertarte deshidratado como una pasa de uva e inyectarte 3 espressos creyendo que es 'fatiga espiritual' lo que sientes.",
    principioDidactico: "Tras 8 horas de sueño, la viscosidad sanguínea aumenta y la corteza cerebral está levemente deshidratada, lo cual mimetiza los síntomas de ansiedad y niebla mental.",
    practicaConcreta: "Bebe un vaso grande de agua (400-500 ml) nada más salir de la cama, antes de tocar la cafetera o el azúcar.",
    criterioExito: "Tomar el agua antes del café por la mañana."
  },
  {
    id: "reto-fis-02",
    categoria: "FISIOLOGIA",
    categoriaLabel: "Fisiología Básica",
    icono: "🚶",
    titulo: "Romper la Postura de Camarón de Oficina",
    dificultad: "Leve",
    tiempoEstimado: "5 min",
    puntosXP: 150,
    sintomaComico: "Dar las 6:00 PM y darte cuenta de que tu columna vertebral adoptó la forma exacta de un signo de interrogación por estar encorvado mirando la pantalla.",
    principioDidactico: "La propiocepción corporal modula la química cerebral. La postura colapsada eleva la sensación subjetiva de agotamiento y reduce la oxigenación.",
    practicaConcreta: "Ponte de pie, abre el pecho, haz 5 respiraciones diafragmáticas lentas y camina 3 minutos mirando al horizonte.",
    criterioExito: "Realizar al menos dos pausas activas de reinicio postural durante tu jornada."
  }
];
