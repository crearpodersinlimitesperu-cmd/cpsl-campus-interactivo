// =========================================================================================
// BLUEPRINT CURRICULAR & SISTEMA DE GAMIFICACIÓN: RUTA DE MAESTRÍA EN COMUNICACIÓN Y RETOS
// MODO INVISIBLE (STEALTH MODE) — POLÍTICA DE CERO FILTRACIONES
// =========================================================================================

// INSIGNIAS Y MEDALLAS DE MAESTRÍA EN COMUNICACIÓN Y RETOS
export const nodusStaffBadges = [
  {
    id: 'compliance_master',
    code: 'MED-COMPLIANCE-MASTER',
    name: 'Compliance Master (Aprobación Total)',
    icon: '🛡️',
    xpReward: 600,
    requirement: 'Mantener un Rigor Score superior a 80 y un Empathy Score superior a 80 en el cuadrante de Liderazgo Adaptativo.',
    color: '#10b981'
  },
  {
    id: 'arquitecto_vision',
    code: 'MED-ARQUITECTO-VISION',
    name: 'Arquitecto de Visión Cuántica',
    icon: '🌌',
    xpReward: 500,
    requirement: 'Dominar el Esqueleto de la Orientación y el principio de Construir desde la Nada en 8 pasos.',
    color: '#ec4899'
  },
  {
    id: 'mente_aprendiz',
    code: 'MED-MENTE-APRENDIZ',
    name: 'Mente de Aprendiz',
    icon: '📝',
    xpReward: 150,
    requirement: 'Comprender la biología decisional de los Tres Cerebros y dominar las 3 estrategias para calmar al Perro Guardián.',
    color: '#10b981'
  },
  {
    id: 'arquitecto_valor',
    code: 'MED-ARQUITECTO-VALOR',
    name: 'Arquitecto de Valor',
    icon: '⚖️',
    xpReward: 250,
    requirement: 'Dominar la Ecuación de Alex Hormozi, las 4 palancas analógicas y el Método Grand Slam en 5 pasos.',
    color: '#f59e0b'
  },
  {
    id: 'sombra_impecable',
    code: 'MED-SOMBRA-IMPECABLE',
    name: 'Sombra Impecable (Presencia Neutral)',
    icon: '👤',
    xpReward: 400,
    requirement: 'Resolver con maestría las simulaciones de fisonomía, presencia neutral y escucha empática de vasija vacía.',
    color: '#38bdf8'
  },
  {
    id: 'guardian_rigor',
    code: 'MED-GUARDIAN-RIGOR',
    name: 'Guardián de la Integridad (Causa OS)',
    icon: '🛡️',
    xpReward: 500,
    requirement: 'Distinguir hechos objetivos de interpretaciones y sostener acuerdos firmes desde la responsabilidad radical (Causa OS).',
    color: '#8b5cf6'
  },
  {
    id: 'lider_imo',
    code: 'MED-LIDER-IMO',
    name: 'Maestro de la Comunicación Ética',
    icon: '⚡',
    xpReward: 750,
    requirement: 'Superar al 100% todos los retos y simulaciones situacionales sin manipulación, coerción ni atajos engañosos.',
    color: '#ec4899'
  }
];

// MATRIZ DE COMPETENCIAS Y RETOS DE MAESTRÍA (STEALTH MODE: SIN CARGOS NI JERARQUÍAS DE SALA)
export const nodusStaffRoleCertifications = [
  {
    role: 'Nivel 1: Escucha Activa & Vasija Vacía (Phase 1: Discovery)',
    minFisonomia: 1,
    requiredBadge: 'mente_aprendiz',
    badgeName: 'Mente de Aprendiz',
    moduleName: 'Biología de la Decisión y Neuromarketing Ético',
    description: 'Capacidad para silenciar la agenda propia, generar seguridad psicológica y desactivar la alarma del cerebro reptiliano.'
  },
  {
    role: 'Nivel 2: Arquitectura de la Ecuación de Valor (Phase 2: Core Breakthrough)',
    minFisonomia: 3,
    requiredBadge: 'arquitecto_valor',
    badgeName: 'Arquitecto de Valor',
    moduleName: 'La Ecuación de Valor y Ofertas Irresistibles',
    description: 'Capacidad para transformar obstáculos en soluciones de alto valor, reduciendo el esfuerzo a cero y acelerando victorias rápidas.'
  },
  {
    role: 'Nivel 3: Calibración de Estado & Contenedor Ético (State Calibration)',
    minFisonomia: 5,
    requiredBadge: 'sombra_impecable',
    badgeName: 'Sombra Impecable',
    moduleName: 'El Plan Maestro de Enrolamiento en 3 Pasos',
    description: 'Capacidad para estructurar conversaciones bajo el marco del Viaje del Héroe (SB7) y sostener la neutralidad visual y conductual.'
  },
  {
    role: 'Nivel 4: Liderazgo Adaptativo & Causa OS (The 90-Day Performance Cycle)',
    minFisonomia: 7,
    requiredBadge: 'guardian_rigor',
    badgeName: 'Guardián de la Integridad',
    moduleName: 'Responsabilidad Radical y Kit de Acción',
    description: 'Capacidad para sostenerse en el cuadrante de Alto Rigor y Alta Empatía, sostener acuerdos en integridad y eliminar justificaciones dramáticas.'
  }
];

// SIMULADOR INTERACTIVO DE RETOS SITUACIONALES DE COMUNICACIÓN (STEALTH MODE)
// INCORPORA ESC-001 Y ESC-002 SEGÚN EL MANUAL MAESTRO CON EVALUACIÓN RIGOR/EMPATÍA Y AVATAR REACTIVO
export const nodusStaffSimulations = [
  {
    id: 'ESC-001',
    category: 'Ecuación de Valor & Neurociencia',
    modulo: 'Ecuación de Valor y Calibración de Objeciones',
    title: 'ESC-001: Ecuación de Valor y Calibración de Objeciones',
    badgeEligible: 'arquitecto_valor',
    scenario: 'Es el día previo al inicio del programa de 90 días (The 90-Day Performance Cycle). Un participante te llama muy angustiado porque se enteró de que el entrenamiento exige subir reportes digitales diarios y teme no tener tiempo suficiente debido a su trabajo corporativo.',
    avatar_estado_inicial: 'tenso',
    options: [
      {
        id: 'OPT-A',
        text: '«No te preocupes por los reportes, lo importante es que asistas. El sistema de registro digital es solo una formalidad y no pasa nada si te saltas algunos días si estás muy ocupado.»',
        isCorrect: false,
        classification: 'Error de Rigor (Complacencia / Sympathy)',
        puntos_rigor: -50,
        puntos_empatia: 40,
        avatar_reaccion: 'aliviado_pero_descomprometido',
        xpDelta: -50,
        feedback: 'ERROR DE RIGOR: Caíste en complicidad (Sympathy). Al devaluar la importancia de la estructura digital de la app, redujiste su probabilidad percibida de logro y debilitaste el contenedor de rendición de cuentas que asegura su transformación.'
      },
      {
        id: 'OPT-B',
        text: '«Si no estás dispuesto a cumplir con los reportes diarios de 5 minutos, significa que no estás comprometido con tu meta y estás buscando excusas cómodas para no estirar tu mente.»',
        isCorrect: false,
        classification: 'Error de Empatía (Autoritarismo / Agresión)',
        puntos_rigor: 50,
        puntos_empatia: -100,
        avatar_reaccion: 'defensivo_molesto',
        xpDelta: -80,
        feedback: 'ERROR DE EMPATÍA: Activaste al "perro guardián" (Cerebro Reptiliano) de su mente mediante un ataque directo a su identidad. Al juzgarlo en lugar de couchear la objeción, aumentaste de forma drástica su resistencia cognitiva y emocional.'
      },
      {
        id: 'OPT-C',
        text: '«Comprendo perfectamente que tu agenda sea demandante. Justamente porque tu tiempo es escaso, necesitas una estructura que automatice tu enfoque. El sistema de registro digital toma menos de 3 minutos diarios y actúa como un andamiaje para que no dependas de tu fuerza de voluntad. ¿Te hace sentido usar la tecnología para simplificar tu avance en lugar de cargarte con más tareas?»',
        isCorrect: true,
        classification: 'Liderazgo Adaptativo (Alto Rigor + Alta Empatía)',
        puntos_rigor: 80,
        puntos_empatia: 80,
        avatar_reaccion: 'receptivo',
        xpDelta: 160,
        feedback: '¡EXCELENTE TOMA DE DECISIÓN! Calmaste al cerebro reptil mostrando empatía, aplicaste la Ecuación de Valor reduciendo el esfuerzo percibido y presentaste la plataforma tecnológica como una herramienta de apoyo, no de vigilancia.'
      }
    ]
  },
  {
    id: 'ESC-002',
    category: 'Rigor & Calibración de Estado',
    modulo: 'Gestión de Desviaciones de Compromiso (Rigor en Sala)',
    title: 'ESC-002: Gestión de Desviaciones de Compromiso (Rigor en Sala)',
    badgeEligible: 'guardian_rigor',
    scenario: 'Un colaborador de tu equipo de soporte llega a la sesión de State Calibration (calibración matutina) con una sudadera deportiva negra que tiene un gran logotipo comercial impreso en el pecho, lo cual rompe el estándar visual de neutralidad corporativa.',
    avatar_estado_inicial: 'neutral',
    options: [
      {
        id: 'OPT-A',
        text: '«Como la sudadera es negra, no hay problema por el logotipo. Comencemos la jornada para no retrasar la agenda.»',
        isCorrect: false,
        classification: 'Error de Control (Complacencia Pasiva)',
        puntos_rigor: -80,
        puntos_empatia: 20,
        avatar_reaccion: 'aliviado_pero_descomprometido',
        xpDelta: -60,
        feedback: 'ERROR DE CONTROL: Permitir pequeñas desviaciones del código de honor en el staff degrada de forma silenciosa el estándar y la autoridad moral del equipo de control frente a los participantes de la sala.'
      },
      {
        id: 'OPT-B',
        text: '«Te pido que te quites esa prenda de inmediato. Rompe el código de vestimenta y das un mal ejemplo frente a toda la sede.»',
        isCorrect: false,
        classification: 'Error de Comunicación (Juicio Público Destructivo)',
        puntos_rigor: 40,
        puntos_empatia: -80,
        avatar_reaccion: 'humillado',
        xpDelta: -70,
        feedback: 'ERROR DE COMUNICACIÓN: Corregir en público y de forma autoritaria ataca la identidad de tu colaborador, rompe la seguridad psicológica de tu propio equipo y genera resentimiento interno en lugar de fisonomía de alineación.'
      },
      {
        id: 'OPT-C',
        text: '«Reconozco que el clima de hoy es frío. Sostener nuestra neutralidad visual impecable es lo que nos da la autoridad moral para guiar la fisionomía de la sala. Vamos a reemplazar esa prenda por una casaca negra lisa del baúl de soporte antes de que abramos las puertas de registro. ¿Te parece bien?»',
        isCorrect: true,
        classification: 'Liderazgo Adaptativo (Alto Rigor + Alta Empatía)',
        puntos_rigor: 100,
        puntos_empatia: 90,
        avatar_reaccion: 'alineado_y_agradecido',
        xpDelta: 180,
        feedback: '¡PERFECTO! Sostuviste el rigor visual innegociable de la fisonomía del staff de soporte sin atacar la identidad del colaborador, ofreciendo una alternativa viable de inmediato con total empatía.'
      }
    ]
  },
  {
    id: 'sim_caso_1',
    category: 'Neuromarketing Ético',
    modulo: 'Biología de la Decisión y Calibración',
    title: 'Reto 1: Calmar al Perro Guardián ante el Miedo al Esfuerzo',
    badgeEligible: 'mente_aprendiz',
    scenario: 'Durante una conversación de acompañamiento, una persona interesada en un proceso de transformación te dice con tono defensivo y los brazos cruzados: «Todo suena muy bonito, pero ya sé cómo son estas cosas. Seguro me van a pedir horas de tareas absurdas, despertarme de madrugada y pagar un dineral que no tengo. No tengo tiempo para agotarme más de lo que ya estoy».',
    avatar_estado_inicial: 'tenso',
    options: [
      {
        id: 'opt_a',
        text: '«Si de verdad quisieras cambiar tu vida encontrarías el tiempo. Quien quiere busca motivos y quien no busca excusas. Si no te inscribes hoy perderás el beneficio del descuento especial.»',
        isCorrect: false,
        classification: 'Discurso que Altera (Agresión y Falsa Escasez)',
        puntos_rigor: 40,
        puntos_empatia: -90,
        avatar_reaccion: 'defensivo_molesto',
        xpDelta: -80,
        feedback: 'El Perro Guardián detecta una amenaza directa a su estatus, peligro biológico y manipulación. Se activará la respuesta de huida o ataque, cerrando completamente la puerta a la confianza.'
      },
      {
        id: 'opt_b',
        text: '«Tienes toda la razón, la verdad es que sí es agotador y difícil. Si quieres no hagamos nada ahora y descansa, luego vemos el próximo mes si te animas.»',
        isCorrect: false,
        classification: 'Complacencia Pasiva (Validación del Miedo)',
        puntos_rigor: -60,
        puntos_empatia: 40,
        avatar_reaccion: 'aliviado_pero_descomprometido',
        xpDelta: -40,
        feedback: 'Validas la resignación sin ofrecer ninguna estructura de apoyo. Abandonas el rol de guía y dejas a la persona atrapada en la misma inercia de dolor.'
      },
      {
        id: 'opt_c',
        text: '«Reconozco profundamente el valor de tu energía y es completamente natural que cuides tu tiempo. No se trata de sobrecargarte ni de que tomes una decisión apresurada hoy. ¿Te abrirías a que conversemos solo 15 minutos para mapear cuál es tu verdadero sueño y ver si un plan simplificado de 10 minutos al día te daría más tiempo y paz, sin ningún compromiso de continuar si sientes que no es para ti?»',
        isCorrect: true,
        classification: 'Liderazgo Adaptativo (Neuromarketing Ético)',
        puntos_rigor: 85,
        puntos_empatia: 95,
        avatar_reaccion: 'receptivo',
        xpDelta: 150,
        feedback: '¡Impecable! Aplicas las 3 estrategias: 1) Vacías la vasija reconociendo su cansancio, 2) Hablas al «Para Qué» (más tiempo y paz) ocultando el esfuerzo abrumador, y 3) Ofreces una rampa de bajo compromiso (15 minutos) que neutraliza la alarma biológica.'
      }
    ]
  },
  {
    id: 'sim_caso_2',
    category: 'Rigor & Integridad',
    modulo: 'Responsabilidad Radical y Hechos Objetivos',
    title: 'Reto 2: Compromiso Pendiente: Hechos Objetivos vs. Juicios y Drama',
    badgeEligible: 'guardian_rigor',
    scenario: 'Un participante acordó entregar un informe clave antes de las 14:00 horas como parte de su compromiso de integridad (Moonshot KPI). Son las 14:30 horas y no hay registro del documento. Al llamarlo para calibrar la situación, te dice alterado: «¡Es que el sistema falló, la red estuvo pésima y ustedes son muy intransigentes, no es mi culpa!»',
    avatar_estado_inicial: 'tenso',
    options: [
      {
        id: 'opt_a',
        text: '«No te preocupes en absoluto, comprendo perfectamente lo de la red. Tómate el tiempo que necesites y entrégalo cuando puedas a lo largo del día.»',
        isCorrect: false,
        classification: 'Simpatía Complaciente (Quiebre del Contenedor)',
        puntos_rigor: -70,
        puntos_empatia: 30,
        avatar_reaccion: 'aliviado_pero_descomprometido',
        xpDelta: -60,
        feedback: 'Rompes el rigor del acuerdo. Alimentas la narrativa del espectador en la arena, debilitando la fuerza de la palabra del participante.'
      },
      {
        id: 'opt_b',
        text: '«El plazo venció a las 14:00 en punto. No hay excusas que valgan: si no puedes cumplir un horario tan simple, estás saboteando todo tu proceso y no podrás continuar.»',
        isCorrect: false,
        classification: 'Ataque y Confrontación Destructiva',
        puntos_rigor: 60,
        puntos_empatia: -90,
        avatar_reaccion: 'defensivo_molesto',
        xpDelta: -100,
        feedback: 'Atacas la identidad de la persona en lugar de examinar el hecho objetivo. Provocas reactividad defensiva y destruyes el espacio de aprendizaje.'
      },
      {
        id: 'opt_c',
        text: '«Reconozco la frustración técnica que me describes. Distingamos el hecho del evento: el hecho objetivo es que son las 14:30 y el informe no está en el registro. Tu palabra fue entregarlo a las 14:00. Desde el modo Causa: ¿qué acción concreta en tus manos puedes ejecutar en los próximos 10 minutos para restaurar la integridad de tu acuerdo?»',
        isCorrect: true,
        classification: 'Liderazgo Adaptativo (Responsabilidad Radical Causa OS)',
        puntos_rigor: 95,
        puntos_empatia: 85,
        avatar_reaccion: 'alineado_y_agradecido',
        xpDelta: 150,
        feedback: 'Extraordinario. Separas el hecho medible de la queja emocional, no compras la justificación del «efecto» y colocas al interlocutor como el protagonista capaz de restaurar su palabra.'
      }
    ]
  },
  {
    id: 'sim_caso_3',
    category: 'Ecuación de Valor',
    modulo: 'Alquimia de Valor y Estructuración',
    title: 'Reto 3: Desarmar la Objeción de «No Tengo Tiempo ni Dinero»',
    badgeEligible: 'arquitecto_valor',
    scenario: 'Al presentarle un programa de alto rendimiento e ingeniería conductual, la persona te responde: «Me parece valiosísimo, de verdad lo quiero. Pero honestamente no me alcanza el dinero para pagarlo completo y llego a mi casa a las 9 de la noche sin tiempo para nada».',
    avatar_estado_inicial: 'tenso',
    options: [
      {
        id: 'opt_a',
        text: '«Si no inviertes en ti nunca vas a tener dinero ni tiempo. Pídele prestado a un amigo o tarjetéalo todo hoy mismo porque el que no arriesga no gana.»',
        isCorrect: false,
        classification: 'Presión Coercitiva e Invasiva',
        puntos_rigor: 30,
        puntos_empatia: -85,
        avatar_reaccion: 'defensivo_molesto',
        xpDelta: -90,
        feedback: 'Transfiere un riesgo desmedido al participante sin modificar la ecuación de valor. El neocórtex se alarma y el reptil rechaza la propuesta.'
      },
      {
        id: 'opt_b',
        text: '«Te entiendo, el dinero es un obstáculo para todos. El valor de este programa es darte herramientas para multiplicar tus ingresos y gobernar tu agenda. Miremos la ecuación: desfragmentemos el programa en micro-cápsulas de 10 minutos de consumo flexible y diseñemos un plan de pagos escalonado en 3 cuotas sin intereses para que el esfuerzo financiero sea nulo mes a mes. ¿Te permitiría eso avanzar con certeza y tranquilidad?»',
        isCorrect: true,
        classification: 'Liderazgo Adaptativo (Alquimia de Valor Hormozi)',
        puntos_rigor: 85,
        puntos_empatia: 90,
        avatar_reaccion: 'receptivo',
        xpDelta: 160,
        feedback: '¡Brillante! Redujiste el esfuerzo y sacrificio a cero (10 minutos diarios) y disminuiste el riesgo financiero (pagos escalonados), haciendo que el valor percibido supere con creces el costo percibido.'
      },
      {
        id: 'opt_c',
        text: '«Por ser tú, te voy a dar un 60% de descuento si firmas ahora mismo.»',
        isCorrect: false,
        classification: 'Devaluación de la Oferta',
        puntos_rigor: -60,
        puntos_empatia: 20,
        avatar_reaccion: 'aliviado_pero_descomprometido',
        xpDelta: -70,
        feedback: 'Regalar descuentos indiscriminados devalúa el proceso y destruye la percepción de calidad. No resuelve la causa raíz de la objeción (el tiempo y la certeza).'
      }
    ]
  },
  {
    id: 'sim_caso_4',
    category: 'Coaching No Violento',
    modulo: 'Consentimiento y Libre Albedrío',
    title: 'Reto 4: Preservación del Libre Albedrío y Consentimiento Radical',
    badgeEligible: 'sombra_impecable',
    scenario: 'A mitad de una sesión de entrenamiento, una persona se muestra desbordada emocionalmente y manifiesta: «Esto es demasiado para mí. Me siento abrumado por mis propias limitaciones y quiero abandonar el proceso ahora mismo».',
    avatar_estado_inicial: 'tenso',
    options: [
      {
        id: 'opt_a',
        text: '«Si renuncias ahora estarás repitiendo el patrón de huida de toda tu vida. ¿Quieres volver a ser alguien que se rinde en el primer obstáculo?»',
        isCorrect: false,
        classification: 'Manipulación por Culpa (Coaching Coercitivo)',
        puntos_rigor: 40,
        puntos_empatia: -100,
        avatar_reaccion: 'humillado',
        xpDelta: -120,
        feedback: 'Infracción ética absoluta. Usar la culpa y las etiquetas para retener a alguien es manipulación psicológica y vulnera el principio de dignidad.'
      },
      {
        id: 'opt_b',
        text: '«De acuerdo, si te quieres ir nadie te detiene. Firma tu retiro voluntario y que te vaya bien.»',
        isCorrect: false,
        classification: 'Abandono del Contenedor',
        puntos_rigor: 20,
        puntos_empatia: -60,
        avatar_reaccion: 'defensivo_molesto',
        xpDelta: -50,
        feedback: 'Falta de empatía y contención. Desaprovecha la oportunidad de ofrecer una pausa reflexiva y un acompañamiento compasivo.'
      },
      {
        id: 'opt_c',
        text: '«Honro y respeto profundamente tu libre elección; tu bienestar y tu ritmo están por encima de todo. Antes de que tomes una decisión definitiva, ¿me permites que respiremos 5 minutos en calma y miremos qué emoción se está moviendo en ti, con la certeza total de que si decides pausar o marcharte, contarás con mi apoyo incondicional?»',
        isCorrect: true,
        classification: 'Liderazgo Adaptativo (Consentimiento Radical)',
        puntos_rigor: 90,
        puntos_empatia: 95,
        avatar_reaccion: 'receptivo',
        xpDelta: 150,
        feedback: 'Maestría pura. Respeta la autonomía del ser, desactiva el estado de alerta del sistema nervioso, valida la emoción y sostiene el contenedor desde la seguridad psicológica.'
      }
    ]
  }
];


export const moduloStaff1 = [
  {
    id: 'staff_1_1',
    title: '1.1 Los Tres Cerebros y el «Perro Guardián» (Naturaleza Biológica)',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0ea5e9; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #38bdf8;">La Biología Decisional del Ser Humano</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          Toda decisión humana responde a un orden biológico evolutivo estricto. No decidimos por lógica matemática pura; decidimos a través de tres directores biológicos que operan en nuestro sistema nervioso central.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #f87171;">
          <h4 style="margin: 0 0 0.5rem; color: #f87171;">🐶 1. El Perro Guardián (Cerebro Reptiliano)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.5rem;">
            Es el cerebro más antiguo de la evolución humana. Su misión innegociable es garantizar la <strong>supervivencia</strong> mediante dos reglas:
          </p>
          <ul style="font-size: 0.85rem; color: #fff; margin: 0; padding-left: 1.2rem; line-height: 1.5;">
            <li><strong>Ahorrar energía metabólica:</strong> Odia el esfuerzo innecesario y las explicaciones complejas.</li>
            <li><strong>Evitar el peligro y el dolor:</strong> Reacciona de inmediato ante cualquier amenaza de pérdida (dinero, estatus o tiempo).</li>
          </ul>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #ec4899;">
          <h4 style="margin: 0 0 0.5rem; color: #ec4899;">❤️ 2. El Corazón (Cerebro Límbico)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.5rem;">
            Es el centro de las <strong>emociones, la pertenencia y los vínculos</strong>. Siente antes de pensar.
          </p>
          <ul style="font-size: 0.85rem; color: #fff; margin: 0; padding-left: 1.2rem; line-height: 1.5;">
            <li>No procesa palabras técnicas ni números fríos; procesa <strong>significado e imágenes</strong>.</li>
            <li>Se moviliza por el <strong>«Para Qué»</strong> (el propósito, el honor, la familia, la trascendencia).</li>
          </ul>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #38bdf8;">
          <h4 style="margin: 0 0 0.5rem; color: #38bdf8;">🔬 3. El Científico (Neocórtex)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.5rem;">
            Es el cerebro racional y analítico. Es sumamente lento y consume una enorme cantidad de glucosa.
          </p>
          <ul style="font-size: 0.85rem; color: #fff; margin: 0; padding-left: 1.2rem; line-height: 1.5;">
            <li><strong>No toma la decisión:</strong> su función es <strong>justificar lógicamente</strong> lo que el corazón y el reptil ya eligieron.</li>
            <li>Requiere datos claros, números transparentes y comparativas sencillas para sentirse seguro.</li>
          </ul>
        </div>
      </div>

      <div class="glass-panel" style="padding: 1.2rem; background: rgba(255, 183, 3, 0.05); border: 1px solid rgba(255, 183, 3, 0.3); border-radius: 8px;">
        <h4 style="margin: 0 0 0.5rem; color: var(--crear-gold);">🚇 La Lección del Metro de Londres: Certeza vs. Rapidez</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          En el metro de Londres, las quejas de los usuarios no disminuyeron cuando los trenes se hicieron más rápidos, sino cuando se instalaron <strong>pantallas con el tiempo exacto de llegada</strong> («Próximo tren en 3 minutos»). 
          El cerebro humano tolera el esfuerzo si tiene <strong>certeza absoluta del proceso</strong>. La incertidumbre despierta al Perro Guardián; la claridad y la previsibilidad lo calman de inmediato.
        </p>
      </div>
    `
  },
  {
    id: 'staff_1_2',
    title: '1.2 Las Tres Estrategias Fundamentales para Calmar al Perro Guardián',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #34d399;">Cómo Desactivar la Alarma Biológica</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          Cuando abordas a una persona con un discurso agresivo, demandante o técnico, el Perro Guardián detecta una amenaza de gasto (dinero/tiempo) y de dolor (esfuerzo abrumador). Para que la conversación fluya hacia el entendimiento, debes aplicar estas tres estrategias:
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #10b981;">
          <h4 style="margin: 0 0 0.5rem; color: #34d399;">1. Vaciar la Vasija (Mente de Principiante y Escucha Empática)</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.6rem;">
            El perro guardián huele el interés propio y la urgencia por imponer una idea. Si entras con la soberbia de tener la razón o con prisa por convencer, el interlocutor se cerrará en banda.
          </p>
          <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 6px; font-size: 0.88rem; color: #a7f3d0;">
            <strong>La Acción:</strong> Silencia tu ego. Conviértete en un espejo limpio que escucha sin juzgar, creando un contenedor de <strong>Seguridad Psicológica</strong> donde la persona se sienta a salvo de ser presionada o manipulada. Quien más comprende adquiere la autoridad silenciosa.
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #f59e0b;">
          <h4 style="margin: 0 0 0.5rem; color: #fbbf24;">2. Hablar al «Para Qué» (El Sueño) y Esconder el «Qué» (El Esfuerzo)</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.6rem;">
            El cerebro reptil odia el consumo innecesario de energía. Si le hablas de «hacer 30 tareas complejas, madrugar todos los días y soportar presiones», el guardián calculará un costo biológico insoportable y huirá.
          </p>
          <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 6px; font-size: 0.88rem; color: #fde68a;">
            <strong>La Acción:</strong> Conecta directamente con su anhelo profundo (su Futuro Deseado). Presenta el proceso no como un cúmulo de cargas pesadas, sino como el vehículo que <strong>reduce la fricción</strong> mediante acompañamiento estructurado.
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #38bdf8;">
          <h4 style="margin: 0 0 0.5rem; color: #38bdf8;">3. Ofrecer una Rampa de Bajo Compromiso (Reducir el Riesgo)</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.6rem;">
            Pedirle a una persona indecisa que firme un compromiso a largo plazo o haga un desembolso inmediato es el equivalente a intentar acariciar a un perro desconocido de golpe: te va a morder.
          </p>
          <div style="background: rgba(0,0,0,0.3); padding: 0.8rem; border-radius: 6px; font-size: 0.88rem; color: #bae6fd;">
            <strong>La Acción:</strong> Presenta pasos intermedios de bajo esfuerzo y cero riesgo: <em>«Tengamos una breve conversación de 15 minutos para mapear tus metas con calma, sin ningún compromiso de continuar si sientes que no es tu momento»</em>.
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'staff_1_3',
    title: '1.3 La Fisonomía de la Comunicación en Acción (Altera vs. Calma)',
    durationMinutes: 4,
    content: `
      <div class="alert-info" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">Contraste Directo de Modelos de Comunicación</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          Las palabras exactas y la postura corporal determinan si el sistema nervioso del otro se abre a la colaboración o se atrinchera en la resistencia.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.2rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border: 1px solid rgba(239, 68, 68, 0.4); background: rgba(239, 68, 68, 0.05);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 0.8rem;">
            <span style="font-size: 1.4rem;">❌</span>
            <h4 style="margin: 0; color: #f87171;">Discurso que Altera al Perro Guardián</h4>
          </div>
          <blockquote style="margin: 0 0 0.8rem; padding: 0.8rem; background: rgba(0,0,0,0.4); border-left: 3px solid #ef4444; font-size: 0.9rem; color: #fecaca; line-height: 1.6; font-style: italic;">
            «Tienes que decidirte ahora mismo. Este proceso es extremadamente exigente, vas a tener que levantarte temprano todos los días para cumplir los retos y si no firmas hoy perderás la oportunidad para siempre.»
          </blockquote>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0; line-height: 1.5;">
            <strong>Lo que escucha el cerebro reptil:</strong> <em>«¡Peligro inminente! Voy a perder dinero, voy a quedarme sin dormir, es un esfuerzo agotador. ¡Huye o ataca!»</em>.
          </p>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border: 1px solid rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.05);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 0.8rem;">
            <span style="font-size: 1.4rem;">✅</span>
            <h4 style="margin: 0; color: #34d399;">Discurso que Calma al Perro Guardián</h4>
          </div>
          <blockquote style="margin: 0 0 0.8rem; padding: 0.8rem; background: rgba(0,0,0,0.4); border-left: 3px solid #10b981; font-size: 0.9rem; color: #a7f3d0; line-height: 1.6; font-style: italic;">
            «Reconozco el valor de la meta que tienes en mente. Volver a la rutina sin una estructura que te acompañe suele ser el mayor obstáculo. No te pido que decidas nada ahora; solo te invito a abrir un espacio de 15 minutos para escuchar tu visión y mostrarte un método paso a paso que simplifica tu avance. ¿Te hace sentido explorar esa opción?»
          </blockquote>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0; line-height: 1.5;">
            <strong>Lo que escucha el cerebro reptil:</strong> <em>«Me reconoce, me cuida, solo son 15 minutos y no hay peligro de perder nada. Puedo bajar la guardia con total seguridad.»</em>.
          </p>
        </div>
      </div>
    `
  }
];

// =========================================================================================
// MÓDULO II: LA ECUACIÓN DE VALOR Y OFERTAS IRRESISTIBLES (ALEX HORMOZI)
// =========================================================================================
export const moduloStaff2 = [
  {
    id: 'staff_2_1',
    title: '2.1 La Ecuación Científica de Valor y la Regla de la Discrepancia',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">La Fracción Matemática del Valor Percibido</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          Alex Hormozi demostró que el valor de cualquier propuesta no depende de lo que cuesta producirla, sino de cómo el cerebro humano pondera sus variables en una fracción matemática.
        </p>
      </div>

      <div style="background: rgba(0,0,0,0.5); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255, 183, 3, 0.3); text-align: center; margin: 1.5rem 0;">
        <div style="font-size: 0.85rem; text-transform: uppercase; color: var(--crear-gold); font-weight: 700; margin-bottom: 0.5rem;">
          Fórmula Universal de Valor (Alex Hormozi)
        </div>
        <div style="font-family: monospace; font-size: 1.15rem; color: #fde047; font-weight: bold; padding: 0.8rem; background: rgba(0,0,0,0.4); border-radius: 8px;">
          Valor = (Resultado Anhelado [El Sueño] × Probabilidad Percibida de Logro) / (Retraso Temporal [Tiempo] × Esfuerzo y Sacrificio)
        </div>
      </div>

      <h4 style="color: var(--crear-gold); margin-top: 1.5rem;">La Regla de la Discrepancia de Valor</h4>
      <p style="color: var(--text-muted); line-height: 1.6;">
        El ser humano nunca decide por el precio de etiqueta; decide por la <strong>discrepancia</strong> entre el valor percibido y el esfuerzo solicitado:
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1rem 0;">
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #10b981;">
          <strong style="color: #34d399;">Discrepancia Gigantesca (Oferta Irresistible):</strong>
          <p style="margin: 0.4rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            Si percibo que recibiré $10,000 en valor de transformación y solo se me pide un esfuerzo equivalente a $1,000, la decisión es automática. Siento que estoy ganando de inmediato.
          </p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #ef4444;">
          <strong style="color: #f87171;">Discrepancia Nula o Negativa (Resistencia):</strong>
          <p style="margin: 0.4rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            Si el esfuerzo y el sacrificio percibidos son mayores que la promesa, surgen objeciones de inmediato: <em>«no tengo dinero»</em> o <em>«no tengo tiempo»</em>. Reducir el precio no soluciona el problema; optimizar la fracción sí.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 'staff_2_2',
    title: '2.2 Las Cuatro Palancas en Plastilina (Analogías Prácticas)',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0ea5e9; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #38bdf8;">Las 4 Palancas del Valor Explicadas en Plastilina</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          Para maximizar el numerador y reducir el denominador a casi cero, utilizamos cuatro analogías sencillas y universales:
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-top: 3px solid #10b981;">
          <h4 style="margin: 0 0 0.4rem; color: #34d399;">🍲 Palanca 1: El Resultado Anhelado (La Sopa)</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 0.5rem;">
            Nadie compra una sopa por la marca de la olla ni por las horas que tomó cortar las verduras. Compran el sabor reconfortante, el aroma y la nutrición de sentirse saciados.
          </p>
          <div style="font-size: 0.82rem; color: #a7f3d0; background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
            <strong>Principio:</strong> Vende siempre el destino final, nunca el vehículo técnico.
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-top: 3px solid #38bdf8;">
          <h4 style="margin: 0 0 0.4rem; color: #38bdf8;">🌉 Palanca 2: Probabilidad de Logro (El Puente de Acero)</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 0.5rem;">
            Cruzar un cañón profundo sobre cuerdas viejas da pánico. Cruzar por un puente de acero sólido con barandillas firmes y guías expertos da total tranquilidad.
          </p>
          <div style="font-size: 0.82rem; color: #bae6fd; background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
            <strong>Principio:</strong> Eleva la certeza mediante acompañamiento guiado y testimonios reales.
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-top: 3px solid #f59e0b;">
          <h4 style="margin: 0 0 0.4rem; color: #fbbf24;">🍎 Palanca 3: Retraso Temporal (La Semilla y el Árbol)</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 0.5rem;">
            Esperar cinco años a que un árbol dé manzanas agota a cualquiera. Pero si te entregan una canasta de manzanas el primer día mientras riegas la semilla, el tiempo vuela.
          </p>
          <div style="font-size: 0.82rem; color: #fde68a; background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
            <strong>Principio:</strong> Diseña «Victorias Rápidas» (Fast Wins) en las primeras 48 horas.
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-top: 3px solid #8b5cf6;">
          <h4 style="margin: 0 0 0.4rem; color: #a78bfa;">💊 Palanca 4: Esfuerzo y Sacrificio (Pastilla vs. Gimnasio)</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 0 0 0.5rem;">
            La gente pagaría fortunas por una píldora que dé salud instantánea antes que pagar un gimnasio donde deba madrugar con frío y sudar dos horas diarias.
          </p>
          <div style="font-size: 0.82rem; color: #ddd6fe; background: rgba(0,0,0,0.3); padding: 0.5rem; border-radius: 6px;">
            <strong>Principio:</strong> Reduce la fricción con herramientas listas para usar y hábitos de 5 minutos.
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'staff_2_3',
    title: '2.3 El Método Grand Slam en 5 Pasos para Transformar Obstáculos en Valor',
    durationMinutes: 6,
    content: `
      <div class="alert-info" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #34d399;">Metodología de 5 Pasos para Construir Soluciones Irresistibles</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          En lugar de inventar contenidos al azar, el Método Grand Slam toma cada dolor u obstáculo del usuario y lo transforma sistemáticamente en un componente de alto valor.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.9rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #3b82f6;">
          <strong style="color: #60a5fa;">Paso 1: Identificar el Dolor Crónico y el Futuro Deseado</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            Escuchar con vasija vacía cuál es el punto A (dolor, estancamiento, soledad) y cuál es el punto B (libertad, impacto, paz mental).
          </p>
        </div>

        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #ef4444;">
          <strong style="color: #f87171;">Paso 2: Mapear Todos los Obstáculos Exhaustivamente</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            Anotar cada barrera real o imaginaria: «no sé cómo empezar», «no tengo tiempo», «me distraigo con facilidad», «mi entorno no me apoya».
          </p>
        </div>

        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #10b981;">
          <strong style="color: #34d399;">Paso 3: Convertir Cada Obstáculo en una Solución de Alto Valor</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            Para «no sé cómo empezar» ➔ Plantilla paso a paso prediseñada. Para «me distraigo» ➔ Compañero de compromiso diario de 3 minutos.
          </p>
        </div>

        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #f59e0b;">
          <strong style="color: #fbbf24;">Paso 4: Vehículo de Entrega con Apalancamiento («Uno a Muchos»)</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            Crear activos digitales (guías, grabaciones, herramientas interactivas) que ayuden a miles de personas sin requerir tu presencia física 24/7.
          </p>
        </div>

        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #ec4899;">
          <strong style="color: #f472b6;">Paso 5: Filtrar y Apilar (Trim & Stack)</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            Eliminar lo costoso y difícil de mantener. Conservar únicamente los elementos de <strong>bajo costo de entrega y altísimo impacto percibido</strong>.
          </p>
        </div>
      </div>
    `
  }
];

// =========================================================================================
// MÓDULO III: EL PLAN MAESTRO DE ENROLAMIENTO EN 3 PASOS Y STORYBRAND (SB7)
// =========================================================================================
export const moduloStaff3 = [
  {
    id: 'staff_3_1',
    title: '3.1 Filosofía del Enrolamiento Ético y el Marco StoryBrand (SB7)',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #a78bfa;">El Interlocutor es el Héroe, Tú eres el Guía</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          El modelo tradicional de ventas sitúa al vendedor como la estrella que convence. En el StoryBrand Framework (SB7) y el Enrolamiento Humano, el interlocutor es siempre el Héroe; tú eres el Guía empático que le ofrece un camino probado.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 0.9rem; border-left: 4px solid #3b82f6;">
          <strong style="color: #60a5fa;">1. Un Personaje (El Héroe):</strong> Una persona con un sueño que anhela transformar su realidad cotidiana.
        </div>
        <div class="glass-panel" style="padding: 0.9rem; border-left: 4px solid #ef4444;">
          <strong style="color: #f87171;">2. Tiene un Problema:</strong> Externo (falta de tiempo/sistema), Interno (miedo a fallar, soledad) y Filosófico (injusticia de no desplegar su potencial).
        </div>
        <div class="glass-panel" style="padding: 0.9rem; border-left: 4px solid #8b5cf6;">
          <strong style="color: #a78bfa;">3. Encuentra un Guía:</strong> Un facilitador que combina <strong>empatía genuina</strong> («comprendo tu dolor») con <strong>autoridad técnica</strong> («hemos trazado este camino con éxito»).
        </div>
        <div class="glass-panel" style="padding: 0.9rem; border-left: 4px solid #10b981;">
          <strong style="color: #34d399;">4. Que le da un Plan Claro:</strong> Un mapa desfragmentado de 3 pasos que disuelve la confusión.
        </div>
        <div class="glass-panel" style="padding: 0.9rem; border-left: 4px solid #f59e0b;">
          <strong style="color: #fbbf24;">5. Lo llama a la Acción:</strong> Llamado Directo (acuerdo firme) o Llamado Transicional (sesión de calibración de 15 minutos).
        </div>
        <div class="glass-panel" style="padding: 0.9rem; border-left: 4px solid #ec4899;">
          <strong style="color: #f472b6;">6. Que le ayuda a evitar el Fracaso:</strong> Romper el ciclo de auto-sabotaje, la desidia y la frustración.
        </div>
        <div class="glass-panel" style="padding: 0.9rem; border-left: 4px solid #eab308;">
          <strong style="color: #facc15;">7. Y culmina en el Éxito:</strong> Vivir en coherencia, maestría personal y plenitud.
        </div>
      </div>
    `
  },
  {
    id: 'staff_3_2',
    title: '3.2 Los Tres Pasos del Plan Maestro de Enrolamiento',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #34d399;">El Andamiaje de Conversión Ética en 3 Fases</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          Todo acuerdo auténtico sigue una secuencia natural que honra la libertad y la madurez de la persona:
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-top: 3px solid #38bdf8;">
          <h4 style="margin: 0 0 0.5rem; color: #38bdf8;">Paso 1: Descubre tu «Para Qué» (Calibración del Sueño)</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.6rem;">
            Calmar al reptil y escuchar con vasija vacía. Conectar con el dolor real y la visión profunda del interlocutor.
          </p>
          <div style="font-size: 0.82rem; color: #bae6fd; background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
            <strong>Pregunta Clave:</strong> «¿Qué tendría que ocurrir en los próximos 90 días para que sientas que tu tiempo y tu vida valieron cada segundo?»
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-top: 3px solid #f59e0b;">
          <h4 style="margin: 0 0 0.5rem; color: #fbbf24;">Paso 2: Diseña tu Estructura de Apoyo (Apalancamiento)</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.6rem;">
            Disolver el miedo al esfuerzo abrumador. Presentar el andamiaje, el compañero de compromiso y las herramientas que reducen el tiempo requerido a minutos.
          </p>
          <div style="font-size: 0.82rem; color: #fde68a; background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
            <strong>Pregunta Clave:</strong> «Si tuvieras un sistema que te toma solo 10 minutos al día y un mentor que te acompaña, ¿te abrirías a avanzar?»
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-top: 3px solid #10b981;">
          <h4 style="margin: 0 0 0.5rem; color: #34d399;">Paso 3: Sellar la Palabra (Integridad y Libre Elección)</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.6rem;">
            El principio de consistencia: una decisión verbal o escrita voluntaria alinea la identidad del ser humano con sus actos futuros.
          </p>
          <div style="font-size: 0.82rem; color: #a7f3d0; background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px;">
            <strong>Pregunta Clave:</strong> «¿Es esta una elección genuina para ti o sientes alguna presión de mi parte? Tu palabra es tu poder.»
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'staff_3_3',
    title: '3.3 Los Siete Atajos de Cialdini y sus Límites Éticos Inquebrantables',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #f87171;">La Regla de Oro del Neuromarketing Ético</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          Los atajos cognitivos descubiertos por Robert Cialdini facilitan la toma de decisiones, pero su uso ético exige una frontera infranqueable: <strong>jamás fabricar escasez falsa ni simular empatía para forzar una venta</strong>.
        </p>
      </div>

      <div style="overflow-x: auto; margin: 1.5rem 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem;">
          <thead>
            <tr style="border-bottom: 2px solid rgba(255,255,255,0.15); text-align: left; color: var(--crear-gold);">
              <th style="padding: 0.6rem;">Atajo Cognitivo</th>
              <th style="padding: 0.6rem; color: #34d399;">Aplicación Ética y Legítima</th>
              <th style="padding: 0.6rem; color: #f87171;">Límite Ético / Infracción Inaceptable</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 0.6rem; font-weight: bold;">1. Reciprocidad</td>
              <td style="padding: 0.6rem;">Entregar valor y herramientas útiles sin esperar nada a cambio.</td>
              <td style="padding: 0.6rem;">Dar algo para luego hacer sentir culpable o endeudada a la persona.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 0.6rem; font-weight: bold;">2. Prueba Social</td>
              <td style="padding: 0.6rem;">Compartir testimonios auténticos de personas con desafíos similares.</td>
              <td style="padding: 0.6rem;">Exagerar resultados o inventar casos de éxito ficticios.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 0.6rem; font-weight: bold;">3. Autoridad</td>
              <td style="padding: 0.6rem;">Mostrar el rigor del método, certificaciones y datos comprobables.</td>
              <td style="padding: 0.6rem;">Presumir títulos vacíos o actuar desde la soberbia y el desprecio.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 0.6rem; font-weight: bold;">4. Simpatía / Afinidad</td>
              <td style="padding: 0.6rem;">Encontrar puntos en común y escuchar con calidez genuina.</td>
              <td style="padding: 0.6rem;">Halagos falsos y manipulación emocional fingida.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 0.6rem; font-weight: bold;">5. Escasez Real</td>
              <td style="padding: 0.6rem;">Informar con transparencia cupos físicos o límites reales de cupo.</td>
              <td style="padding: 0.6rem;">Contadores regresivos falsos o amenazar con «último día» inventado.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 0.6rem; font-weight: bold;">6. Consistencia</td>
              <td style="padding: 0.6rem;">Recordar compromisos voluntarios declarados por la propia persona.</td>
              <td style="padding: 0.6rem;">Atrapar a la persona en contradicciones lógicas para humillarla.</td>
            </tr>
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
              <td style="padding: 0.6rem; font-weight: bold;">7. Unidad</td>
              <td style="padding: 0.6rem;">Hacerla sentir parte de una comunidad que cuida su crecimiento.</td>
              <td style="padding: 0.6rem;">Generar sectarismo, hostilidad hacia el exterior o aislamiento.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
];

// =========================================================================================
// MÓDULO IV: RESPONSABILIDAD RADICAL (CAUSA VS. EFECTO) Y KIT DE ACCIÓN
// =========================================================================================
export const moduloStaff4 = [
  {
    id: 'staff_4_1',
    title: '4.1 Modo Causa vs. Modo Efecto (La Burocracia Emocional de la Queja)',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #34d399;">El Axioma Fundamental de la Responsabilidad</h4>
        <p style="margin: 0; font-size: 1.1rem; color: #fff; font-weight: bold; text-align: center; letter-spacing: 0.5px;">
          «Tú eres la CAUSA de tus resultados, no el EFECTO de tus circunstancias.»
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.2rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #f59e0b;">
          <h4 style="margin: 0 0 0.5rem; color: #fbbf24;">🏟️ El Espectador en la Arena (Efecto)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.5rem;">
            Se enfoca en justificar por qué las cosas salieron mal: el tráfico, la economía, el banco, el clima o la falta de interés del cliente.
          </p>
          <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-size: 0.85rem; color: #fca5a5;">
            Consume hasta un <strong>28% de su energía en burocracia emocional</strong> (quejarse, buscar culpables). Es cómodo porque no asume culpa, pero tiene <strong>cero poder</strong> para cambiar la realidad.
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #8b5cf6;">
          <h4 style="margin: 0 0 0.5rem; color: #a78bfa;">⚡ El Creador de Contexto (Causa OS)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0 0 0.5rem;">
            Asume la autoría del 100% de lo que ocurre en su espacio de influencia y en sus conversaciones.
          </p>
          <div style="background: rgba(0,0,0,0.3); padding: 0.6rem; border-radius: 6px; font-size: 0.85rem; color: #c4b5fd;">
            Ante un quiebre se pregunta: <em>«¿Quién estoy siendo yo para que este resultado ocurra y qué acción responsable puedo tomar en los próximos 5 minutos para transformar esta situación?»</em>.
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'staff_4_2',
    title: '4.2 El Rigor de los Hechos Duros y la Separación del Drama',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0ea5e9; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #38bdf8;">Distinguiendo Hechos de Interpretaciones</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          La mayoría de las conversaciones difíciles se empantanan porque mezclamos lo que efectivamente ocurrió (los hechos duros) con lo que sentimos o suponemos sobre lo que ocurrió (las interpretaciones).
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #10b981;">
          <strong style="color: #34d399;">Hecho Duro (Objetivo, Medible):</strong>
          <p style="margin: 0.4rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            «El reloj marca las 14:30. El documento no ha ingresado al buzón acordado.» No hay emoción ni juicio; es simplemente la realidad observable.
          </p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #ef4444;">
          <strong style="color: #f87171;">Interpretación / Drama (Subjetivo):</strong>
          <p style="margin: 0.4rem 0 0; font-size: 0.88rem; color: var(--text-muted);">
            «No le importa el proceso», «siempre es un irresponsable», «me está faltando el respeto». Son historias mentales que desatan reactividad y conflicto estéril.
          </p>
        </div>
      </div>

      <h4 style="color: var(--crear-gold); margin-top: 1.5rem;">El Ciclo de 4 Pasos para la Calibración Ética</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem; margin-top: 1rem;">
        <div class="glass-panel" style="padding: 0.8rem; border-top: 3px solid #38bdf8;">
          <strong style="color: #38bdf8;">1. Validación</strong>
          <p style="font-size: 0.82rem; margin: 0.3rem 0 0; color: var(--text-muted);">Reconocer su emoción sin juzgarla: «Escucho que te sientes abrumado».</p>
        </div>
        <div class="glass-panel" style="padding: 0.8rem; border-top: 3px solid #f59e0b;">
          <strong style="color: #f59e0b;">2. Consentimiento</strong>
          <p style="font-size: 0.82rem; margin: 0.3rem 0 0; color: var(--text-muted);">Pedir permiso: «¿Me permites hacerte una pregunta sobre tu meta?».</p>
        </div>
        <div class="glass-panel" style="padding: 0.8rem; border-top: 3px solid #8b5cf6;">
          <strong style="color: #8b5cf6;">3. Contexto</strong>
          <p style="font-size: 0.82rem; margin: 0.3rem 0 0; color: var(--text-muted);">Mostrar el hecho duro separándolo del juicio personal.</p>
        </div>
        <div class="glass-panel" style="padding: 0.8rem; border-top: 3px solid #10b981;">
          <strong style="color: #10b981;">4. Elección Libre</strong>
          <p style="font-size: 0.82rem; margin: 0.3rem 0 0; color: var(--text-muted);">«La decisión es 100% tuya y honraremos lo que elijas para ti».</p>
        </div>
      </div>
    `
  },
  {
    id: 'staff_4_3',
    title: '4.3 El Kit de Acción: Método M-A-G-I-C y Checklist de Impecabilidad',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">Estructuración de Invitaciones Magnéticas (M-A-G-I-C)</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
          Para invitar a una persona a un proceso formativo sin generar fricción cognitiva, estructura tu comunicación bajo las cinco dimensiones del Método M-A-G-I-C:
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 0.8rem; border-left: 4px solid #38bdf8;">
          <strong style="color: #38bdf8;">M — Magnetic (Razón Magnética):</strong> El motivo irresistible que conecta con su anhelo existencial.
        </div>
        <div class="glass-panel" style="padding: 0.8rem; border-left: 4px solid #8b5cf6;">
          <strong style="color: #a78bfa;">A — Avatar (Identificación Precisa):</strong> Especificar a quién va dirigido (ej. «para quienes quieren gobernar su tiempo»).
        </div>
        <div class="glass-panel" style="padding: 0.8rem; border-left: 4px solid #10b981;">
          <strong style="color: #34d399;">G — Goal (Resultado Concreto):</strong> La victoria tangible que alcanzará al finalizar el ciclo.
        </div>
        <div class="glass-panel" style="padding: 0.8rem; border-left: 4px solid #f59e0b;">
          <strong style="color: #fbbf24;">I — Interval (Marco Temporal):</strong> El plazo definido (ej. «15 minutos iniciales», «90 días de maestría»).
        </div>
        <div class="glass-panel" style="padding: 0.8rem; border-left: 4px solid #ec4899;">
          <strong style="color: #f472b6;">C — Container (Contenedor Seguro):</strong> El entorno de acompañamiento respetuoso y libre de coerción.
        </div>
      </div>

      <h4 style="color: var(--crear-gold); margin-top: 1.5rem;">Checklist de Impecabilidad del Facilitador (5 Filtros)</h4>
      <ul style="color: var(--text-muted); line-height: 1.8; margin: 0.5rem 0 0; padding-left: 1.2rem;">
        <li><strong style="color: #fff;">1. Vasija Vacía:</strong> ¿He silenciado mi ego y mis metas comerciales para escuchar 100% al otro?</li>
        <li><strong style="color: #fff;">2. Dolor Interno Identificado:</strong> ¿Entiendo la emoción detrás de su obstáculo o solo el síntoma superficial?</li>
        <li><strong style="color: #fff;">3. Ecuación Equilibrada:</strong> ¿He reducido el esfuerzo y el sacrificio percibidos a casi cero?</li>
        <li><strong style="color: #fff;">4. Modo Causa Activo:</strong> ¿Asumo el 100% de la responsabilidad de la conexión sin culpar al participante?</li>
        <li><strong style="color: #fff;">5. Libre Elección Respetada:</strong> ¿Respeto con amor su derecho a decir que «No» sin juzgarlo?</li>
      </ul>
    `
  }
];

// ESTRUCTURA PRINCIPAL DE LOS 4 MÓDULOS DE CONOCIMIENTO Y RETOS

// =========================================================================================
// MÓDULO V: PROTOCOLO DE ORIENTACIÓN — «CONSTRUIR DESDE LA NADA»
// =========================================================================================
export const moduloStaff5 = [
  {
    id: 'staff_5_1',
    title: '5.1 Romper el Contexto Viejo y la Nada como Incertidumbre Creativa',
    durationMinutes: 6,
    content: `
      <div class="alert-info" style="background: rgba(236, 72, 153, 0.1); border-left: 4px solid #ec4899; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #f472b6;">Punto Cero: La Nada como Espacio de Invención</h4>
        <p style="margin: 0; font-size: 1.05rem; color: #fff; font-style: italic;">
          «Construir no está mal… pero está jodido si vienes de creerte libre siendo quien crees que eres.»
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #f87171;">
          <h4 style="margin: 0 0 0.5rem; color: #f87171;">⚠️ La Trampa de la Identidad Antigua</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            Hoy no venimos a mejorar lo que ya eres. Venimos a <strong>inventar quiénes somos</strong>. Si montas una visión desde quien crees que eres, esa visión nace limitada por tus viejas heridas, miedos y paradigmas.
          </p>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #38bdf8;">
          <h4 style="margin: 0 0 0.5rem; color: #38bdf8;">🛸 Certeza en la Incertidumbre</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            ¿Cómo te relacionas con lo que no sabes que no sabes? En ese vacío ya no hay expectativa, ni miedo, ni afán neurótico de ganar. Estás en la nave: no hay mapa previo, hay pura creación consciente.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 'staff_5_2',
    title: '5.2 Visión Colectiva, Ubuntu y la Conversación del Equipo Cuántico',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #a78bfa;">De lo Individual a lo Colectivo</h4>
        <p style="margin: 0; font-size: 0.95rem; color: #fff; line-height: 1.6;">
          «Esto no es un club vacacional. Esto es la Legión Extranjera.» Los cimientos del edificio no son individuales; son <strong>columnas colectivas</strong>.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #10b981;">
          <h4 style="margin: 0 0 0.5rem; color: #34d399;">🌍 Filosofía Ubuntu</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            <em>«Yo soy porque nosotros somos.»</em> No es un individuo yendo solo a encestar para inflar su ego; es el equipo entero jugando sincronizado para ganar el juego grande de la vida.
          </p>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #fbbf24;">
          <h4 style="margin: 0 0 0.5rem; color: #fbbf24;">⚛️ Metáfora Cuántica</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            Las partículas entrelazadas operan en resonancia sin necesidad de hablarse. El equipo de alto rendimiento opera conectado por instinto, por visión y por compromiso mutuo.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 'staff_5_3',
    title: '5.3 Pelele: Práctica Constante como Estilo de Vida (James Clear)',
    durationMinutes: 4,
    content: `
      <div class="alert-info" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">Pelele = Patear la Pelota una y otra vez</h4>
        <p style="margin: 0; font-size: 0.95rem; color: #fff; line-height: 1.6;">
          «Esto no es teoría. Esto es entrenamiento en la vida real.»
        </p>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">
        Basado en la ciencia de los hábitos de James Clear: la repetición deliberada y desprovista de drama forja nuevas conexiones sinápticas. En la sala no vienes a memorizar conceptos abstractos, vienes a <strong>practicar, sostener y automatizar</strong> nuevas conductas de liderazgo.
      </p>
    `
  },
  {
    id: 'staff_5_4',
    title: '5.4 Enrolamiento Radical, Construcción y Cierre: ¿Para Qué Vives?',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #34d399;">Enrolar Soldados, no Espectadores</h4>
        <p style="margin: 0; font-size: 0.95rem; color: #fff; line-height: 1.6;">
          «Aquí no hay jugadores en la banca. O eres protagonista o eres espectador.» Si estás dudando, después del break no vuelvas. Si regresas, es para jugar en las Grandes Ligas.
        </p>
      </div>

      <div class="glass-panel" style="padding: 1.2rem; border: 1px solid rgba(255, 183, 3, 0.3); background: rgba(0,0,0,0.4); margin: 1rem 0;">
        <h4 style="margin: 0 0 0.5rem; color: var(--crear-gold);">🎙️ Guion Maestro del Entrenador</h4>
        <blockquote style="margin: 0; font-size: 0.95rem; color: #fff; font-style: italic; border-left: 3px solid var(--crear-gold); padding-left: 1rem;">
          «Mi nombre es [tu nombre]. Les pido permiso de ser su entrenador este fin de semana. Aunque no me elijan, yo soy el entrenador. A partir de ahora, lo que queda es alinear la letra con la música.»
        </blockquote>
      </div>

      <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">
        La orientación concluye con la pregunta existencial que ancla todo el proceso: <strong>«¿Para qué vives?»</strong>.
      </p>
    `
  }
];

export const orientacionData = {
  titulo: 'Esqueleto de la Orientación: «Construir desde la Nada»',
  subtitulo: 'Protocolo Maestro de Alineación, Ruptura de Contexto y Visión Colectiva (Causa OS)',
  frasesAncla: [
    { id: 'fa1', texto: 'Construir desde la nada.', contexto: 'Punto cero de creación ontológica' },
    { id: 'fa2', texto: 'Esto no es un club vacacional. Esto es la Legión Extranjera.', contexto: 'Estándar innegociable de compromiso y juego grande' },
    { id: 'fa3', texto: 'No hay jugadores en la banca.', contexto: 'Protagonismo radical o espectador pasivo en la arena' },
    { id: 'fa4', texto: 'Pelele: práctica constante.', contexto: 'Repetición deliberada y neuroplasticidad sin drama' },
    { id: 'fa5', texto: 'Yo soy porque nosotros somos.', contexto: 'Filosofía Ubuntu y entrelazamiento de visión colectiva' },
    { id: 'fa6', texto: '¿Para qué vives?', contexto: 'La pregunta existencial que enciende el propósito y la acción' }
  ],
  pasos: [
    {
      paso: 1,
      titulo: 'Apertura: Romper el Contexto Viejo',
      fraseClave: '«Construir no está mal… pero está jodido si vienes de creerte libre siendo quien crees que eres.»',
      mensajeCentral: 'Hoy no venimos a parchar ni a mejorar lo que ya eres. Venimos a inventar quiénes somos como seres humanos.',
      imagenPotente: 'La nada como espacio de creación pura: una hoja en blanco, una tabla rasa libre de pasado.',
      advertencia: 'Si montas una visión desde quien crees que eres, esa visión nace viciada y limitada por tus viejos paradigmas y heridas.',
      citaMantra: '«La nada es la oportunidad perfecta para preguntarte: ¿quién soy ahora?»',
      icono: '⚡'
    },
    {
      paso: 2,
      titulo: 'La Nada como Espacio de Incertidumbre Creativa',
      fraseClave: '«¿Cómo te relacionas con lo desconocido, con lo que no sabes que no sabes?»',
      mensajeCentral: 'En ese «no sé que no sé» desaparece la expectativa, el miedo paralizante y la necesidad de quedar bien. Solo hay certeza en la incertidumbre.',
      imagenPotente: 'Estás en la nave. No hay mapa previo de navegación. Hay pura creación consciente en tiempo real.',
      advertencia: 'Buscar certezas lógicas antes de dar el paso reactiva al Perro Guardián y bloquea la posibilidad de transformación.',
      citaMantra: '«No necesitas un mapa cuando tienes la brújula del compromiso y la visión.»',
      icono: '🛸'
    },
    {
      paso: 3,
      titulo: 'Visión: De lo Individual a lo Colectivo',
      fraseClave: '«Esto no es un club vacacional. Esto es la Legión Extranjera.»',
      mensajeCentral: 'El gran escollo al inicio es querer construir una visión egoica desde la identidad antigua. Hoy la visión es colectiva: nos trasciende a todos.',
      imagenPotente: 'Columnas de un templo que soportan una causa común, no estatuas individuales compitiendo por brillo.',
      advertencia: 'Quien busca figurar o tener la razón destruye el tejido del equipo y degrada el espacio a un club de amigos.',
      citaMantra: '«Hidalgo no se quedó en quien creía que era: dejó de ser el cura del pueblo y se construyó desde la nada.»',
      ejemplos: [
        { figura: 'Los Niños Héroes (México)', leccion: 'Un grupo de cadetes que amaban tanto su patria que dieron su vida por una visión superior a su propia supervivencia biológica.' },
        { figura: 'Miguel Hidalgo', leccion: 'Rompió el molde del cura rural y declaró un antes y un después en la historia. Su visión fue acción pura.' }
      ],
      icono: '🏛️'
    },
    {
      paso: 4,
      titulo: 'Ubuntu y Física Cuántica: La Conversación del Equipo',
      fraseClave: '«Yo soy porque nosotros somos.»',
      mensajeCentral: 'No es un jugador solitario corriendo a la canasta para que lo aplaudan; es el equipo jugando al unísono para ganar el juego.',
      imagenPotente: 'Partículas cuánticas entrelazadas: conectadas instantáneamente sin necesidad de cables ni palabras.',
      advertencia: 'El individualismo es una ilusión óptica del ego. En la sala, los cimientos son columnas colectivas.',
      citaMantra: '«Conectados por instinto, por visión y por juego.»',
      icono: '⚛️'
    },
    {
      paso: 5,
      titulo: 'Pelele: Práctica Constante como Estilo de Vida',
      fraseClave: '«Pelele: patear la pelota una y otra vez contra la pared.»',
      mensajeCentral: 'En este espacio no vienes a coleccionar teoría ni a tomar apuntes estériles. Vienes a practicar, a encarnar y a sostener.',
      imagenPotente: 'El futbolista pateando 10,000 veces el mismo balón hasta que la maestría sea un reflejo biológico.',
      advertencia: 'El ego cree que entender un concepto equivale a dominarlo. Sin repetición no hay nuevas sinapsis.',
      citaMantra: '«Esto no es teoría. Esto es entrenamiento en la vida real.»',
      referenciaCientifica: 'James Clear y la neurobiología de los hábitos: la repetición deliberada automatiza la excelencia.',
      icono: '⚽'
    },
    {
      paso: 6,
      titulo: 'Enrolamiento: Elegir a los Soldados, no a los Espectadores',
      fraseClave: '«Aquí no hay jugadores en la banca. O eres protagonista o eres espectador.»',
      mensajeCentral: 'Filtro radical: distinguimos a los que operan desde la sobrevivencia de los que eligen el juego grande con compromiso inquebrantable.',
      imagenPotente: 'La puerta del vestidor de las Grandes Ligas: solo cruzan quienes están dispuestos a darlo todo en la cancha.',
      advertencia: '«Si estás dudando, después de este break no vuelvas. Si regresas, es para jugar en las Grandes Ligas.»',
      citaMantra: '«Alinear la letra con la música.»',
      guionEntrenador: '«Mi nombre es [tu nombre]. Les pido permiso de ser su entrenador este fin de semana. Aunque no me elijan, yo soy el entrenador. A partir de ahora, lo que queda es alinear la letra con la música.»',
      icono: '⚔️'
    },
    {
      paso: 7,
      titulo: 'Construcción: Quiénes Elegimos Ser como Equipo',
      fraseClave: '«¿Quiénes elegimos ser como equipo?»',
      mensajeCentral: 'No es una lista de expectativas pasivas ni buenas intenciones. Es una declaración de compromiso puro en acción.',
      imagenPotente: '«Bienvenido a la cancha donde se meten los goles llamada [Visión del Participante].»',
      advertencia: 'Confundir una declaración ontológica con un deseo cósmico sin fechas ni acciones verificables.',
      citaMantra: '«El compromiso no negocia con el estado de ánimo.»',
      ejemplosDeclaraciones: [
        '«Estoy comprometido a crear poder y liderazgo en mi vida y entorno.»',
        '«Estoy comprometido a crear familias unidas y trascendentes.»'
      ],
      icono: '🎯'
    },
    {
      paso: 8,
      titulo: 'Cierre: La Visión como Plataforma de Acción',
      fraseClave: '«La orientación es lo más importante. Aquí los preparo para todo lo que viene. Lo demás son manejos.»',
      mensajeCentral: 'La plataforma de visión se aterriza el sábado, antes del llamado a la acción. Es el ancla que sostendrá cada desafío posterior.',
      imagenPotente: 'El cohete apoyado en su plataforma antes del despegue irreversible hacia lo desconocido.',
      advertencia: 'Subestimar la orientación creyendo que «lo bueno viene después». La orientación es el cimiento de todo.',
      citaMantra: '«¿Para qué vives?»',
      icono: '🚀'
    }
  ]
};

export const nodusStaffModules = [
  {
    id: 'modulo_staff_1',
    numero: 'Módulo I',
    titulo: 'Módulo I: Biología de la Decisión y Neuromarketing Ético',
    descripcion: 'Los Tres Cerebros, el Perro Guardián (ahorrar energía y evitar peligro), las 3 estrategias para calmarlo y la fisonomía de la comunicación.',
    rolObjetivo: 'Comunicación Asertiva',
    duracionMinutos: '14 min • 3 lecciones',
    xpReward: 300,
    badgeAward: 'mente_aprendiz',
    lecciones: moduloStaff1,
    tieneEvaluacion: true
  },
  {
    id: 'modulo_staff_2',
    numero: 'Módulo II',
    titulo: 'Módulo II: La Ecuación de Valor y Ofertas Irresistibles (Alex Hormozi)',
    descripcion: 'La fórmula matemática de valor, la regla de la discrepancia, las 4 palancas en plastilina y el Método Grand Slam en 5 pasos.',
    rolObjetivo: 'Arquitectura de Valor',
    duracionMinutos: '16 min • 3 lecciones',
    xpReward: 350,
    badgeAward: 'arquitecto_valor',
    lecciones: moduloStaff2,
    tieneEvaluacion: true
  },
  {
    id: 'modulo_staff_3',
    numero: 'Módulo III',
    titulo: 'Módulo III: El Plan Maestro de Enrolamiento en 3 Pasos y StoryBrand (SB7)',
    descripcion: 'El interlocutor como héroe, los 3 pasos de conversión humana, los 7 atajos éticos de Cialdini y manejo responsable de objeciones.',
    rolObjetivo: 'Narrativa y Acuerdos',
    duracionMinutos: '15 min • 3 lecciones',
    xpReward: 400,
    badgeAward: 'sombra_impecable',
    lecciones: moduloStaff3,
    tieneEvaluacion: true
  },
  {
    id: 'modulo_staff_5',
    numero: 'Módulo V',
    titulo: 'Módulo V: Protocolo de Orientación — «Construir desde la Nada»',
    descripcion: 'Ruptura del contexto viejo, incertidumbre creativa, física cuántica y Ubuntu, la disciplina del Pelele, enrolamiento radical y visión colectiva.',
    rolObjetivo: 'Alineación y Visión Colectiva',
    duracionMinutos: '20 min • 4 lecciones',
    xpReward: 500,
    badgeAward: 'arquitecto_vision',
    lecciones: moduloStaff5,
    tieneEvaluacion: false
  },
  {
    id: 'modulo_staff_4',
    numero: 'Módulo IV',
    titulo: 'Módulo IV: Responsabilidad Radical (Causa vs. Efecto) y Kit de Acción',
    descripcion: 'El observador fuente vs el espectador en la queja, hechos duros vs drama, método M-A-G-I-C y checklist de impecabilidad.',
    rolObjetivo: 'Integridad Operativa',
    duracionMinutos: '15 min • 3 lecciones',
    xpReward: 450,
    badgeAward: 'guardian_rigor',
    lecciones: moduloStaff4,
    tieneEvaluacion: true
  }
];

// NIVELES DE MAESTRÍA EN COMPETENCIAS (NEUTRAL, SIN CARGOS NI RANGOS)
export const rolesDesbloqueadosFisonomia = [
  { nivel: 1, rol: 'Observador Consciente', minXp: 0, desc: 'Dominio de la escucha empática y contención del juicio personal.' },
  { nivel: 2, rol: 'Calibrador del Perro Guardián', minXp: 300, desc: 'Capacidad para calmar el cerebro reptiliano y generar seguridad psicológica.' },
  { nivel: 3, rol: 'Arquitecto de Valor', minXp: 700, desc: 'Aplicación de la Ecuación de Alex Hormozi para estructurar soluciones de bajo esfuerzo.' },
  { nivel: 4, rol: 'Comunicador Límbico', minXp: 1200, desc: 'Conexión con el «Para Qué» profundo y alineación narrativa bajo el modelo SB7.' },
  { nivel: 5, rol: 'Facilitador de Acuerdos', minXp: 1800, desc: 'Manejo de objeciones éticas y diseño de rampas de bajo compromiso de 15 minutos.' },
  { nivel: 6, rol: 'Transformador de Obstáculos', minXp: 2500, desc: 'Aplicación del Método Grand Slam para convertir barreras en soluciones apalancadas.' },
  { nivel: 7, rol: 'Integrador de Modo Causa', minXp: 3300, desc: 'Separación impecable de hechos objetivos y juicios dramáticos ante compromisos pendientes.' },
  { nivel: 8, rol: 'Maestro de Fisonomía y Presencia', minXp: 4200, desc: 'Sostenimiento del estándar colectivo con autoridad moral y empatía libre de agresión.' },
  { nivel: 9, rol: 'Guardián de la Integridad', minXp: 5200, desc: 'Estructuración de invitaciones con el Método M-A-G-I-C y verificación de los 5 filtros.' },
  { nivel: 10, rol: 'Maestro en Transformación Humana', minXp: 6500, desc: 'Máxima coherencia: acompañamiento respetuoso, libre albedrío incondicional y maestría.' }
];

// MÓDULO APRENDIZ COMPLETO Y EXPANDIDO (PRESERVADO PARA ACCESO RÁPIDO)
export const moduloAprendiz = [
  {
    id: 'lec_3c',
    code: 'LEC_3C',
    title: 'Lección 1: Los Tres Cerebros y el Perro Guardián',
    durationMinutes: 4,
    xpReward: 50,
    subtitle: 'Neuromarketing Ético aplicado a la biología de la decisión',
    summary: 'Para conectar con un ser humano, no hables de números abstractos. Nuestra mente decide a través de tres directores biológicos.',
    content: `
      <div class="alert-info" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0ea5e9; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #38bdf8;">Neuromarketing Ético: Los Tres Directores de la Mente</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          El enrolamiento ético no es convencer ni forzar. Es hablarle con respeto y precisión a la biología decisional de cada ser humano.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #f87171;">
          <h4 style="margin: 0 0 0.5rem; color: #f87171;">🐶 1. El Perro Guardián (Cerebro Reptiliano)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
            Solo le importa sobrevivir, ahorrar energía y evitar peligros. Si le das explicaciones complejas o lo presionas, te muerde o huye. <strong>¡Háblale con seguridad, sencillez y transparencia!</strong>
          </p>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #ec4899;">
          <h4 style="margin: 0 0 0.5rem; color: #ec4899;">❤️ 2. El Corazón (Cerebro Límbico - Emociones)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
            Siente antes de pensar. Se conecta con historias, el valor de pertenecer, la gratitud y la emoción del logro. <strong>¡Es el verdadero motor que nos mueve a actuar!</strong>
          </p>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #38bdf8;">
          <h4 style="margin: 0 0 0.5rem; color: #38bdf8;">🔬 3. El Científico (Neocórtex - Lógica)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin: 0;">
            Es analítico, lento y consume mucha energía metabólica. Solo sirve para <strong>JUSTIFICAR lógicamente</strong> lo que el perro y el corazón ya decidieron previamente.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 'lec_eq',
    code: 'LEC_EQ',
    title: 'Lección 2: La Ecuación de Valor (Alex Hormozi)',
    durationMinutes: 4,
    xpReward: 50,
    subtitle: 'Cómo crear valor irresistible reduciendo el esfuerzo y sacrificio a cero',
    summary: 'Alex Hormozi descubrió que el valor percibido es como una fracción matemática.',
    content: `
      <div class="alert-info" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">La Ecuación Científica de Valor</h4>
        <div style="background: rgba(0,0,0,0.4); padding: 1rem; border-radius: 8px; font-family: monospace; font-size: 1.05rem; color: #fde047; text-align: center; margin: 0.8rem 0;">
          Valor = (Resultado Anhelado [El Sueño] × Probabilidad Percibida de Logro) / (Retraso Temporal [Espera] × Esfuerzo y Sacrificio)
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #10b981;">
          <h4 style="margin: 0 0 0.5rem; color: #34d399;">⬆️ Numerador (Multiplica el Valor)</h4>
          <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            <li><strong>El Sueño:</strong> El resultado anhelado y la visión cumplida.</li>
            <li><strong>Probabilidad de Logro:</strong> La certeza total transmitida por el andamiaje y los testimonios.</li>
          </ul>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #ef4444;">
          <h4 style="margin: 0 0 0.5rem; color: #f87171;">⬇️ Denominador (Destruye el Valor)</h4>
          <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            <li><strong>Retraso Temporal:</strong> Cuánto tarda en verse la primera victoria.</li>
            <li><strong>Esfuerzo y Sacrificio:</strong> La fricción y dificultad que el usuario debe soportar solo.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 'lec_co',
    code: 'LEC_CO',
    title: 'Lección 3: El Observador Causa vs. El Espectador en la Arena',
    durationMinutes: 4,
    xpReward: 50,
    subtitle: 'El principio ontológico maestro de la Responsabilidad Radical',
    summary: '«Tú eres la CAUSA de tus resultados, no el EFECTO de tus circunstancias.»',
    content: `
      <div class="alert-info" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #34d399;">El Secreto Ontológico Primordial</h4>
        <p style="margin: 0; font-size: 1.1rem; color: #fff; font-weight: bold; text-align: center; letter-spacing: 0.5px;">
          «Tú eres la CAUSA de tus resultados, no el EFECTO de tus circunstancias.»
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #f59e0b;">
          <h4 style="margin: 0 0 0.5rem; color: #fbbf24;">🏟️ El Espectador en la Arena (Efecto)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            Se queja del entorno, de que el otro no colabora, del sistema o de la falta de dinero. Es cómodo porque no asume culpa, pero no tiene ningún poder de cambio.
          </p>
        </div>

        <div class="glass-panel" style="padding: 1.2rem; border-left: 4px solid #8b5cf6;">
          <h4 style="margin: 0 0 0.5rem; color: #a78bfa;">⚡ El Creador de Contexto (Causa OS)</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
            Asume la autoría del 100% de lo que ocurre en sus acuerdos. Ante un quiebre se pregunta: <em>«¿Qué acción responsable puedo tomar yo para transformar esta situación ahora mismo?»</em>.
          </p>
        </div>
      </div>
    `
  }
];

// ESPECIFICACIÓN TÉCNICA DEL SISTEMA DE GAMIFICACIÓN
export const nodusStaffTechnicalSpec = {
  dbSchemaSql: `-- Tabla para registrar el progreso de maestría y gamificación
CREATE TABLE nodus_maestria_gamificacion (
    usuario_id UUID PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    nivel_maestria INT DEFAULT 1 CHECK (nivel_maestria BETWEEN 1 AND 10),
    xp_acumulado INT DEFAULT 0,
    racha_dias_activos INT DEFAULT 0,
    ultima_sesion_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE nodus_retos_completados (
    registro_id SERIAL PRIMARY KEY,
    usuario_id UUID REFERENCES nodus_maestria_gamificacion(usuario_id),
    reto_id VARCHAR(50) NOT NULL,
    calificacion INT CHECK (calificacion BETWEEN 0 AND 100),
    fecha_completado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
  apiEndpoints: [
    {
      endpoint: '/api/v1/gamificacion/progreso/reto',
      method: 'POST',
      description: 'Envío de Resultado de Reto de Comunicación',
      payload: {
        reto_id: "sim_caso_1",
        opcion_seleccionada: "opt_c",
        es_impecable: true,
        xp_ganado: 150
      }
    }
  ]
};
