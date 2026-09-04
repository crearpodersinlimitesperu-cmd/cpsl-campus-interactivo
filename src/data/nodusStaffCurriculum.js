// ESPECIFICACIÓN TÉCNICA Y BLUEPRINT: MÓDULO DE MICRO-LEARNING Y GAMIFICACIÓN
// PLATAFORMA NODUS STAFF (V1.0) — CREAR PODER SIN LÍMITES 2026

export const nodusStaffBadges = [
  {
    id: 'sombra_impecable',
    code: 'MED-SOMBRA-IMPECABLE',
    name: 'Sombra Impecable',
    icon: '👤',
    xpReward: 500,
    requirement: 'Completar de forma perfecta las simulaciones de la Guía de Conversaciones Difíciles y Fisonomía.',
    color: '#38bdf8'
  },
  {
    id: 'guardian_rigor',
    code: 'MED-GUARDIAN-RIGOR',
    name: 'Guardián del Rigor',
    icon: '🛡️',
    xpReward: 600,
    requirement: 'Resolver correctamente los casos prácticos de administración de Palabra Rota y gestión de sala en Nodus.',
    color: '#f59e0b'
  },
  {
    id: 'racha_honor',
    code: 'MED-RACHA-HONOR',
    name: 'Racha de Honor',
    icon: '🔥',
    xpReward: 300,
    requirement: 'Ingresar y completar al menos una micro-lección diaria durante 7 días consecutivos en Nodus.',
    color: '#ef4444'
  },
  {
    id: 'lider_imo',
    code: 'MED-LIDER-IMO',
    name: 'Líder IMO',
    icon: '⚡',
    xpReward: 1000,
    requirement: 'Aprobar con calificación del 100% la simulación y examen teórico-práctico de Crear Poder Sin Límites.',
    color: '#8b5cf6'
  }
];

export const nodusStaffRoleCertifications = [
  {
    role: 'Aliado en Mesa de Registro',
    minFisonomia: 2,
    requiredBadge: 'sombra_impecable',
    badgeName: 'Sombra Impecable',
    description: 'Acreditado para recepción, escaneo QR de participantes y custodia de cartas de exoneración física.'
  },
  {
    role: 'Mánager de Sede',
    minFisonomia: 4,
    requiredModule: 'modulo_staff_2',
    moduleName: 'Coaching Ético y No Violento',
    description: 'Acreditado para llamadas de Palabra Rota, contención de participantes y gestión de quiebres sin coerción.'
  },
  {
    role: 'Quantum Team (QT)',
    minFisonomia: 6,
    requiredBadge: 'guardian_rigor',
    badgeName: 'Guardián del Rigor',
    description: 'Acreditado para auditorías predictivas de Futuros Imposibles, seguimiento inter-FDS y sincronización comercial.'
  },
  {
    role: 'Capitán / Liderazgo Operativo',
    minFisonomia: 8,
    requiredBadge: 'lider_imo',
    badgeName: 'Líder IMO',
    description: 'Acreditado para supervisión de montajes, Caída de Confianza, groundings de sala y cierres contables POS.'
  }
];

export const nodusStaffSimulations = [
  {
    id: 'sim_caso_1',
    category: 'Mánagers',
    title: 'Caso Práctico 1: Objeción en Llamada de Palabra Rota (Mánagers)',
    badgeEligible: 'guardian_rigor',
    scenario: 'Es viernes a las 14:15 PM. El sistema Nodus detecta que el participante "Juan Torres" declaró Breakthrough el jueves pero no registra su ticket verde. Lo llamas y te dice: "Mi transferencia ya salió de mi banco, pero está retenida por el sistema de seguridad. No es mi culpa. Déjenme entrar al bloque de la tarde y les muestro el comprobante de mi celular."',
    options: [
      {
        id: 'opt_a',
        text: '«Comprendo, Juan, tranquilo. Pasa al salón y cuando se libere la transferencia la registramos en Nodus. Lo importante es que estés en el entrenamiento.»',
        isCorrect: false,
        classification: 'Error de Contenedor (Sympathy)',
        xpDelta: -50,
        feedback: 'Rompe el rigor financiero de la sede y debilita la integridad de la palabra del participante, dejando una transacción abierta sin garantía real en Nodus.'
      },
      {
        id: 'opt_b',
        text: '«Juan, si la transferencia no está cobrada a las 14:00 PM, tu código QR está bloqueado. Es tu responsabilidad haberlo hecho antes. Si no pagas en efectivo en la mesa ahora mismo, no entras.»',
        isCorrect: false,
        classification: 'Error de Coaching Ético (Agresión)',
        xpDelta: -100,
        feedback: 'Ataca al participante y genera un ambiente de hostilidad y miedo en lugar de un contenedor de aprendizaje, dignidad y responsabilidad radical.'
      },
      {
        id: 'opt_c',
        text: '«Juan, reconozco la acción que tomaste al realizar la transferencia. El hecho objetivo en la plataforma es que el dinero no ha ingresado aún a la cuenta de la sede. Estamos aquí para cuidar tu palabra declarada. ¿Qué opciones de bajo riesgo ves para asegurar que tu palabra quede intacta antes de abrir las puertas, como realizar un abono temporal con tarjeta o efectivo en caja que se te reembolsará al conciliarse la transferencia?»',
        isCorrect: true,
        classification: 'Excelente (Rigor, Hechos y Coaching Ético)',
        xpDelta: 150,
        feedback: 'Impecable. Distingue el hecho de la suposición, valida la acción ejecutada, sostiene el rigor de la palabra sin agresión y guía al participante a una solución de bajo riesgo y voluntaria.'
      }
    ]
  },
  {
    id: 'sim_caso_2',
    category: 'Capitanes',
    title: 'Caso Práctico 2: Corrección de Vestimenta en Sede (Capitanes)',
    badgeEligible: 'sombra_impecable',
    scenario: 'Sábado a las 08:15 AM. Un Aliado de tu equipo se presenta al salón de entrenamiento vistiendo una sudadera negra con un logotipo blanco muy grande y llamativo de una marca deportiva comercial en el pecho.',
    options: [
      {
        id: 'opt_a',
        text: '«No pasa nada, como la sudadera es negra, combina bien con el salón y no distrae tanto.»',
        isCorrect: false,
        classification: 'Negligencia Visual',
        xpDelta: -50,
        feedback: 'Incumple el estándar de neutralidad visual. El logotipo comercial rompe la fisonomía del staff y distrae la energía del salón.'
      },
      {
        id: 'opt_b',
        text: '«Quítate la sudadera inmediatamente. Estás rompiendo el código de vestimenta frente a los participantes.»',
        isCorrect: false,
        classification: 'Agresión Jerárquica',
        xpDelta: -100,
        feedback: 'Humilla al colaborador y quiebra el contexto de seguridad psicológica del equipo de soporte.'
      },
      {
        id: 'opt_c',
        text: '«Sostener nuestra fisonomía de impecabilidad visual es lo que nos da la autoridad moral para couchear al participante hoy. Reconozco que hace frío, por lo que te pido que reemplacemos esa prenda por una chompa negra lisa sin estampados del baúl de staff antes de que iniciemos el grounding de apertura.»',
        isCorrect: true,
        classification: 'Autoridad Moral & Cuidado del Equipo',
        xpDelta: 150,
        feedback: 'Excelente. Conecta la norma con el propósito ontológico, valida la necesidad humana (frío) y provee de inmediato una solución operativa desde el baúl de insumos.'
      }
    ]
  },
  {
    id: 'sim_caso_3',
    category: 'Aliados & Mánagers',
    title: 'Caso Práctico 3: Gestión Ética ante Intención de Abandono (Coaching No Violento)',
    badgeEligible: 'lider_imo',
    scenario: 'Sábado a las 16:30 PM. Durante el break de la tarde de C2, un participante se acerca visiblemente abrumado y te dice: "Esto es demasiado intenso para mí. No me siento cómodo con las dinámicas y he decidido retirarme ahora mismo a mi casa."',
    options: [
      {
        id: 'opt_a',
        text: '«Si te vas ahora vas a demostrar que huyes de tus compromisos como en el resto de tu vida. ¿Quieres seguir siendo una persona que abandona a mitad de camino?»',
        isCorrect: false,
        classification: 'Manipulación por Culpa (Coaching Coercitivo Violatorio)',
        xpDelta: -100,
        feedback: 'Infracción grave de Coaching Ético. La manipulación mediante etiquetas personales y culpa está expresamente prohibida en CREAR PODER SIN LÍMITES.'
      },
      {
        id: 'opt_b',
        text: '«Está bien, si quieres irte no te detengo. Firma aquí tu carta de retiro voluntario y que te vaya bien.»',
        isCorrect: false,
        classification: 'Abandono de Contenedor',
        xpDelta: -50,
        feedback: 'Desidia operativa. No indaga en la distinción ontológica del quiebre ni ofrece contención humana antes de formalizar la salida.'
      },
      {
        id: 'opt_c',
        text: '«Respeto completamente tu libre elección y tu bienestar emocional es lo primero. Antes de que tomes una decisión definitiva, ¿te abrirías a respirar 5 minutos juntos afuera del salón y explorar qué es lo que se está mostrando para ti en este momento, sin ninguna presión de quedarte si decides no hacerlo?»',
        isCorrect: true,
        classification: 'Coaching No Violento y Consentimiento Radical',
        xpDelta: 150,
        feedback: 'Sobresaliente. Prioriza la dignidad y el consentimiento del ser humano, desactiva la reactividad y crea un espacio seguro libre de coerción.'
      }
    ]
  }
];

export const moduloStaff1 = [
  {
    id: 'staff_1_1',
    title: '1.1 El Estándar de Excelencia Negra (Neutralidad Visual)',
    durationMinutes: 4,
    content: `
      <div class="alert-info" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0ea5e9; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #38bdf8;">Propósito Ontológico de la Fisonomía Negra</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          En <strong>CREAR PODER SIN LÍMITES</strong>, el staff no asiste a la sala para ser admirado ni para expresar su individualidad estética. El uso del negro absoluto tiene como único fin sostener la <strong>neutralidad visual y la autoridad de contexto</strong>: el participante es el único foco de luz en el salón.
        </p>
      </div>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">1. Criterios de Impecabilidad vs. Incumplimiento</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; margin: 1rem 0;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(255,255,255,0.15); text-align: left; color: var(--text-muted);">
            <th style="padding: 0.6rem;">Elemento</th>
            <th style="padding: 0.6rem; color: #34d399;">✓ Impecabilidad (Estándar 2026)</th>
            <th style="padding: 0.6rem; color: #f87171;">✗ Incumplimiento (Observación)</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
            <td style="padding: 0.6rem; font-weight: bold;">Parte Superior</td>
            <td style="padding: 0.6rem;">Polo negro liso, camisa de botones o chompa sin estampados, costuras negras invisibles.</td>
            <td style="padding: 0.6rem;">Costuras blancas visibles, logotipos comerciales, estampados o prendas decoloradas.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
            <td style="padding: 0.6rem; font-weight: bold;">Pantalón</td>
            <td style="padding: 0.6rem;">Pantalón de vestir negro formal o Jean azul índigo/oscuro pulcro (Viernes Aliados).</td>
            <td style="padding: 0.6rem;">Jeans rotos, desgastados, con aplicaciones o tiro excesivamente informal.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);">
            <td style="padding: 0.6rem; font-weight: bold;">Calzado Staff</td>
            <td style="padding: 0.6rem;">Zapatos de vestir negros o calzado negro pulcro 100% monocromático.</td>
            <td style="padding: 0.6rem;">Suela blanca visible, cordones de colores o calzado empolvado.</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); background: rgba(245, 158, 11, 0.05);">
            <td style="padding: 0.6rem; font-weight: bold; color: #fbbf24;">Calzado Entrenador (2026)</td>
            <td style="padding: 0.6rem; color: #fbbf24;"><strong>Autorización Oficial 2026:</strong> El Coach/Entrenador principal puede utilizar zapatillas deportivas negras para sostener el dinamismo físico prolongado.</td>
            <td style="padding: 0.6rem;">El resto del staff no puede usar zapatillas salvo autorización médica explícita.</td>
          </tr>
        </tbody>
      </table>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">2. Uniformidad del Viernes de Apertura</h3>
      <p>
        Para los <strong>Aliados en mesas de registro</strong>, el uniforme obligatorio comprende:
      </p>
      <ul style="color: var(--text-muted); line-height: 1.8;">
        <li>Camisa negra de manga larga o corta con cuello y botones.</li>
        <li>Jean azul índigo oscuro sin roturas ni deslavados.</li>
        <li>Calzado negro impecable.</li>
        <li>Gafete oficial de CREAR PODER SIN LÍMITES visible en el pectoral izquierdo.</li>
      </ul>
    `
  },
  {
    id: 'staff_1_2',
    title: '1.2 El Guardián del Tiempo (La Fisionomía del Reloj)',
    durationMinutes: 3,
    content: `
      <div class="alert-info" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">Regla Inquebrantable del Contenedor de Tiempo</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          Queda <strong>estrictamente prohibido</strong> consultar la hora en el teléfono móvil dentro del salón o frente a los participantes. El staff de CREAR PODER SIN LÍMITES porta un reloj de muñeca físico en todo momento.
        </p>
      </div>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">1. Por qué el teléfono celular destruye el contexto</h3>
      <p>
        Cuando un participante ve a un Aliado o Mánager mirando su teléfono, la mente del participante asume de forma inconsciente: <em>«Está distraído con mensajes personales o redes sociales»</em>. La autoridad moral del staff como guardián del presente se disuelve al instante.
      </p>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">2. Protocolo de Sincronización de Tiempo</h3>
      <ul style="color: var(--text-muted); line-height: 1.8;">
        <li><strong>Grounding de las 07:45 AM:</strong> El Coordinador de Sala (CC1Y2 / CMJ) sincroniza los relojes de todos los miembros del staff al segundo exacto con la hora oficial de la sede.</li>
        <li><strong>Señalética Silenciosa:</strong> El Capitán de Tiempo marca los minutos restantes al Entrenador mediante tarjetas visuales estándar (15 min, 10 min, 5 min, Tiempo Cumplido), sin interrumpir verbalmente el flujo de sala.</li>
      </ul>
    `
  }
];

export const moduloStaff2 = [
  {
    id: 'staff_2_1',
    title: '2.1 El Guía de la Historia (StoryBrand en el Servicio)',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #a78bfa;">El Modelo StoryBrand del Liderazgo de Servicio</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          En toda gran narrativa humana, el protagonista no es el guía: <strong>Luke Skywalker es el héroe, Yoda es el guía. Katniss es el héroe, Haymitch es el guía.</strong> En nuestras salas de entrenamiento, el participante es el Héroe; el Staff es únicamente el Guía facilitador.
        </p>
      </div>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">1. Desmantelamiento del Ego en el Staff</h3>
      <p>
        El mayor riesgo operativo en un equipo de transformación es la <em>«arrogancia del graduado»</em>: creer que por haber vivido los procesos de C1, C2 y Maestría, el staff tiene respuestas para la vida de otra persona o el derecho de aleccionar.
      </p>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">2. Las 3 Preguntas de Limpieza del Ego</h3>
      <p>Antes de ingresar a cada bloque de sala, todo Aliado y Mánager debe responderse en silencio:</p>
      <ol style="color: var(--text-muted); line-height: 1.8;">
        <li>¿Estoy haciendo esta intervención para que el participante se transforme o para sentirme sabio e importante?</li>
        <li>¿Puedo sostener la mirada de este ser humano sin juzgar su historia ni su ritmo de aprendizaje?</li>
        <li>¿Estoy dispuesto a que el participante se lleve el crédito del 100% de su victoria?</li>
      </ol>
    `
  },
  {
    id: 'staff_2_2',
    title: '2.2 Conversaciones Libres de Presión (Coaching No Violento)',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #34d399;">Dignidad y Consentimiento Radical</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          En <strong>CREAR PODER SIN LÍMITES</strong> está formalmente erradicada cualquier forma de manipulación emocional, coerción psicológica, chantaje moral o presión grupal. El crecimiento solo es real cuando es <strong>elegido voluntariamente</strong> desde la dignidad del ser.
        </p>
      </div>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">1. Lo que NUNCA hace un Staff Certificado</h3>
      <ul style="color: #f87171; line-height: 1.8;">
        <li>✗ Decirle al participante: «Si te vas, le fallas a tu familia / a tu equipo».</li>
        <li>✗ Cuestionar su hombría, valentía o carácter moral por querer retirarse o por tener dudas financieras.</li>
        <li>✗ Impedir físicamente la salida de una persona de la sala de conferencias.</li>
        <li>✗ Diagnosticar patologías clínicas, trastornos mentales o emitir juicios médicos.</li>
      </ul>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">2. El Protocolo de Devolución No Violenta</h3>
      <p style="color: var(--text-muted);">
        Cuando un participante experimenta angustia o resistencia, el Mánager aplica el ciclo de 4 pasos:
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
        <div class="glass-panel" style="padding: 1rem; border-top: 3px solid #38bdf8;">
          <h5 style="margin: 0 0 0.3rem 0; color: #38bdf8;">1. Validación</h5>
          <p style="font-size: 0.85rem; margin: 0; color: var(--text-muted);">Reconocer su emoción como legítima: «Escucho que te sientes abrumado y tiene sentido».</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-top: 3px solid #f59e0b;">
          <h5 style="margin: 0 0 0.3rem 0; color: #f59e0b;">2. Consentimiento</h5>
          <p style="font-size: 0.85rem; margin: 0; color: var(--text-muted);">«¿Me permites hacerte una pregunta sobre lo que declaraste ayer?»</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-top: 3px solid #8b5cf6;">
          <h5 style="margin: 0 0 0.3rem 0; color: #8b5cf6;">3. Contexto</h5>
          <p style="font-size: 0.85rem; margin: 0; color: var(--text-muted);">Separar el hecho objetivo (la incomodidad) de la interpretación («no puedo»).</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-top: 3px solid #10b981;">
          <h5 style="margin: 0 0 0.3rem 0; color: #10b981;">4. Elección Libre</h5>
          <p style="font-size: 0.85rem; margin: 0; color: var(--text-muted);">«La decisión es 100% tuya y nosotros honraremos lo que elijas para ti».</p>
        </div>
      </div>
    `
  }
];

export const moduloStaff3 = [
  {
    id: 'staff_3_1',
    title: '3.1 El Rigor de la Palabra (Viernes 14:01 PM)',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #f87171;">El Trigger Tecnológico de Palabra Rota en Nodus</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          A las <strong>14:01 PM en punto del viernes</strong>, el servidor central de Nodus ejecuta un cron job automatizado que cambia el estado de todo participante con saldo no liquidado a <strong>«Palabra Rota»</strong>, inhabilitando su código QR en los lectores de puerta de la sede.
        </p>
      </div>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">1. Por qué la rigidez tecnológica protege al ser</h3>
      <p>
        Si el staff de puerta relaja la regla y permite el ingreso bajo promesas informales, le envía al cerebro del participante el mensaje de que <em>«su palabra no tiene consecuencias reales»</em>. El rigor no es castigo; es el espejo que le muestra al participante dónde se rinde ante sus compromisos.
      </p>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">2. Flujo Operativo de Mesas de Regularización</h3>
      <ul style="color: var(--text-muted); line-height: 1.8;">
        <li><strong>14:01 PM:</strong> Nodus emite la alerta roja al Dashboard del Gerente de Sede con el listado de participantes pendientes.</li>
        <li><strong>14:05 PM:</strong> El equipo de Mánagers inicia las llamadas de reactivación siguiendo estrictamente el guión de 5 pasos.</li>
        <li><strong>15:30 PM:</strong> Apertura de la mesa especial de caja de regularización en el foyer del salón.</li>
      </ul>
    `
  },
  {
    id: 'staff_3_2',
    title: '3.2 Estructura de la Conversación de Reactivación',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">Los 5 Pasos de la Llamada de Rigor y Amor</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          Una llamada de Palabra Rota no busca «cobrar dinero»; busca que el participante restablezca la integridad de su palabra consigo mismo antes del inicio del bloque vespertino.
        </p>
      </div>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">Guión Estructurado Paso a Paso</h3>
      <div style="display: flex; flexDirection: column; gap: 0.8rem; margin-top: 1rem;">
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #38bdf8;">
          <strong style="color: #38bdf8;">Paso 1: Saludo y Declaración de Contexto</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">«Hola Juan, te habla Carlos, Mánager de tu sede. Te llamo con relación a tu compromiso declarado de Breakthrough».</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #8b5cf6;">
          <strong style="color: #a78bfa;">Paso 2: Presentación del Hecho Objetivo</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">«Son las 14:15 PM y la plataforma Nodus registra que tu código verde aún no ha sido conciliado en el sistema».</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #fbbf24;">
          <strong style="color: #fbbf24;">Paso 3: Pregunta de Indagación de Palabra</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">«¿Qué ocurrió entre lo que declaraste ayer con tanta fuerza y lo que vemos en el sistema hoy?»</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #ef4444;">
          <strong style="color: #f87171;">Paso 4: Distinguir la Excusa de la Realidad</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">«Escucho que el banco tuvo una demora. Ese es el evento. Ahora: ¿tu palabra sigue en pie para estar en sala a las 16:00 PM?»</p>
        </div>
        <div class="glass-panel" style="padding: 1rem; border-left: 4px solid #34d399;">
          <strong style="color: #34d399;">Paso 5: Solución de Bajo Riesgo Inmediata</strong>
          <p style="margin: 0.3rem 0 0; font-size: 0.88rem; color: var(--text-muted);">«¿Qué acción concreta puedes tomar ahora mismo en la mesa de caja para asegurar que tu lugar esté intacto antes del cierre de puertas?»</p>
        </div>
      </div>
    `
  }
];

export const moduloStaff4 = [
  {
    id: 'staff_4_1',
    title: '4.1 Los 9 Niveles de Excelencia y Estructura Organizacional',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(14, 165, 233, 0.1); border-left: 4px solid #0ea5e9; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #38bdf8;">Unificación de Mando CPSL 2026</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          Queda <strong>formalmente eliminado el cargo de «Subdirector»</strong> en todas las sedes nacionales e internacionales. Todas las responsabilidades comerciales, operativas y contables quedan unificadas en el <strong>Gerente de Sede (Nivel 8)</strong> para erradicar la duplicidad de mandos y la fricción burocrática.
        </p>
      </div>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">Escalafón Oficial de 9 Niveles</h3>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; margin: 1rem 0;">
        <thead>
          <tr style="border-bottom: 2px solid rgba(255,255,255,0.15); text-align: left; color: var(--text-muted);">
            <th style="padding: 0.5rem;">Nivel</th>
            <th style="padding: 0.5rem;">Rol</th>
            <th style="padding: 0.5rem;">Enfoque Principal</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: var(--crear-gold);">Nivel 1</td><td>Participante en Sala</td><td>Vivencia del entrenamiento y aprendizaje personal.</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: var(--crear-gold);">Nivel 2</td><td>Egresado / Comunidad</td><td>Embajador de la visión y testimonio vivo.</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: #38bdf8;">Nivel 3</td><td>Aliado</td><td>Soporte logístico, registro de asistencia y mesas.</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: #38bdf8;">Nivel 4</td><td>Mánager de Sede</td><td>Contención de alumnos, llamadas de seguimiento y Palabra Rota.</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: #8b5cf6;">Nivel 5</td><td>Coordinador C1 / C2 (CC1Y2)</td><td>Liderazgo operativo del salón C1/C2 y montaje de herradura.</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: #8b5cf6;">Nivel 6</td><td>Coordinador de Maestría (CMJ)</td><td>Supervisión de Futuros Imposibles, retención y logística MJ.</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: #f59e0b;">Nivel 7</td><td>Quantum Team (QT)</td><td>Auditoría predictiva, enlace comercial e inteligencia de datos.</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: #f59e0b;">Nivel 8</td><td>Gerente de Sede</td><td>Máxima autoridad local: P&L de sede, supervisión Nodus y cierre de sala.</td></tr>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.06);"><td style="padding: 0.5rem; color: #ef4444;">Nivel 9</td><td>Equipo de Oficina & Dirección General</td><td>Gobernanza corporativa, facturación, conciliación contable y plataforma.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: 'staff_4_2',
    title: '4.2 La Rutina Semanal del CC1Y2 y CMJ',
    durationMinutes: 5,
    content: `
      <div class="alert-info" style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <h4 style="margin: 0 0 0.5rem 0; color: #fbbf24;">Deadlines Críticos e Impecabilidad de Entrega</h4>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-main);">
          La excelencia en sala durante el fin de semana se construye estrictamente en la disciplina de los deadlines administrativos de lunes a jueves.
        </p>
      </div>

      <h3 style="color: var(--crear-gold); margin-top: 1.5rem;">Calendario de Deadlines Operativos</h3>
      <ul style="color: var(--text-muted); line-height: 1.8;">
        <li><strong style="color: #f87171;">Lunes 12:00 PM:</strong> Trigger de Impecabilidad Contable. Conciliación de caja de sede del fin de semana previo.</li>
        <li><strong style="color: #fbbf24;">Martes 12:00 PM:</strong> Envío de reportes de gastos autorizados y solicitud de viáticos.</li>
        <li><strong style="color: #f87171;">Miércoles 19:00 PM:</strong> Carga del 100% de las Fichas de Inscripción (FI) de Maestría en Nodus. A las 19:01 PM se activa el trigger de Alerta de Deserción si la meta no está cargada.</li>
        <li><strong style="color: #38bdf8;">Miércoles 20:00 PM:</strong> Grounding Virtual de Aliados de C2 (hora exacta, cero tolerancia de retraso).</li>
        <li><strong style="color: #a78bfa;">Jueves 15:00 PM:</strong> Montaje de sala y prueba de sonido (altura mínima de techo 4.5 metros obligatoria).</li>
        <li><strong style="color: #a78bfa;">Jueves 18:00 PM:</strong> Grounding presencial de Aliados C1 con puertas cerradas.</li>
        <li><strong style="color: #34d399;">Domingo 21:00 PM:</strong> Cierre Contable POS obligatorio y envío de PDF consolidado de fichas físicas a Elizabeth Escobar.</li>
      </ul>
    `
  }
];

export const nodusStaffModules = [
  {
    id: 'modulo_staff_1',
    numero: 'Módulo I',
    titulo: 'Módulo I: Fisonomía y Presencia (Código de Honor)',
    descripcion: 'El estándar de excelencia negra, neutralidad visual y la fisionomía del guardián del tiempo en sala.',
    rolObjetivo: 'Aliados, Mánagers, Capitanes',
    duracionMinutos: '7 min • 2 lecciones',
    xpReward: 300,
    badgeAward: 'sombra_impecable',
    lecciones: moduloStaff1,
    tieneEvaluacion: true
  },
  {
    id: 'modulo_staff_2',
    numero: 'Módulo II',
    titulo: 'Módulo II: Coaching Ético y No Violento (El Ser en Sala)',
    descripcion: 'El staff como guía de la historia (StoryBrand), desmantelamiento del ego y conversaciones libres de coerción.',
    rolObjetivo: 'Mánagers, Capitanes, QT',
    duracionMinutos: '10 min • 2 lecciones',
    xpReward: 350,
    badgeAward: null,
    lecciones: moduloStaff2,
    tieneEvaluacion: true
  },
  {
    id: 'modulo_staff_3',
    numero: 'Módulo III',
    titulo: 'Módulo III: Gestión de Quiebres (La Guía de Palabra Rota)',
    descripcion: 'Trigger de Palabra Rota a las 14:01 PM del viernes y guión en 5 pasos para reactivación de compromisos.',
    rolObjetivo: 'Mánagers, QT, Gerentes',
    duracionMinutos: '10 min • 2 lecciones',
    xpReward: 400,
    badgeAward: 'guardian_rigor',
    lecciones: moduloStaff3,
    tieneEvaluacion: true
  },
  {
    id: 'modulo_staff_4',
    numero: 'Módulo IV',
    titulo: 'Módulo IV: Estructura de Mando y Operaciones de Sede',
    descripcion: 'Los 9 niveles de fisonomía de CPSL 2026, unificación de Gerente de Sede y rutinas críticas de CC1Y2 y CMJ.',
    rolObjetivo: 'Capitanes, Coordinadores, Gerentes',
    duracionMinutos: '10 min • 2 lecciones',
    xpReward: 450,
    badgeAward: 'lider_imo',
    lecciones: moduloStaff4,
    tieneEvaluacion: true
  }
];

export const nodusStaffTechnicalSpec = {
  dbSchemaSql: `-- Tabla para registrar el progreso de gamificación del Staff Nodus
CREATE TABLE nodus_staff_gamificacion (
    staff_id UUID PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    rol_actual VARCHAR(30) CHECK (rol_actual IN ('Aliado', 'Manager', 'Capitán', 'Quantum Team', 'CC1Y2', 'CMJ', 'Gerente Sede')),
    xp_acumulado INT DEFAULT 0,
    racha_dias_activos INT DEFAULT 0,
    nivel_fisonomia INT DEFAULT 1, -- Nivel interno de maestría (del 1 al 10)
    ultima_sesion_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Registro de lecciones completadas
CREATE TABLE nodus_staff_lecciones_completadas (
    registro_id SERIAL PRIMARY KEY,
    staff_id UUID REFERENCES nodus_staff_gamificacion(staff_id),
    leccion_id VARCHAR(50) NOT NULL,
    calificacion_obtenida INT CHECK (calificacion_obtenida BETWEEN 0 AND 100),
    fecha_completado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de Medallas y Distintivos
CREATE TABLE nodus_staff_medallas (
    medalla_id VARCHAR(50) PRIMARY KEY,
    nombre_medalla VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    xp_recompensa INT NOT NULL
);

-- Relación de medallas obtenidas por usuario
CREATE TABLE nodus_staff_medallas_usuario (
    usuario_id UUID REFERENCES nodus_staff_gamificacion(staff_id),
    medalla_id VARCHAR(50) REFERENCES nodus_staff_medallas(medalla_id),
    fecha_adquisicion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (usuario_id, medalla_id)
);`,
  apiEndpoints: [
    {
      endpoint: '/api/v1/gamificacion/progreso/leccion',
      method: 'POST',
      description: 'Envío de Resultado de Lección de Micro-Learning',
      payload: {
        staff_id: "8f3b921a-da5c-48c0-82d2-81734bc1a166",
        email: "carlos.aliado@crearpsl.net",
        leccion_id: "LEC-C2-PR-02",
        modulo: "Gestión de Palabra Rota",
        tiempo_invertido_segundos: 245,
        respuestas_correctas: 4,
        respuestas_incorrectas: 1,
        calificacion_final: 80,
        xp_ganado: 150,
        racha_actualizada: 5
      }
    },
    {
      endpoint: '/api/v1/gamificacion/medallas/desbloquear',
      method: 'POST',
      description: 'Desbloqueo de Medallas y Acreditación de Rol',
      payload: {
        staff_id: "8f3b921a-da5c-48c0-82d2-81734bc1a166",
        medalla_desbloqueada: {
          medalla_id: "MED-SOMBRA-IMPECABLE",
          nombre: "Sombra Impecable",
          xp_otorgado: 500
        },
        perfil_actualizado: {
          xp_total: 2350,
          nivel_fisonomia: 3,
          roles_aprobados_sistema: [
            "Aliado Registro",
            "Aliado Mesa de Cierre"
          ]
        }
      }
    }
  ]
};
