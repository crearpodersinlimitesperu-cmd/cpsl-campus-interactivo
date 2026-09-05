import React, { useState } from 'react';
import { useUI } from '../context/UIContext';
import GlossaryTerm, { GLOSSARY_TERMS } from '../components/GlossaryTerm';

export default function Glosario() {
  const { isFocusMode, toggleFocusMode } = useUI();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const terminosOficiales = [
    {
      key: 'interrupcion',
      termino: "Interrupción Consciente (Interruption Pattern)",
      categoria: "Fundamentos & Neurociencia",
      baseCientifica: "Neurobiología Cognitiva (Daniel Kahneman - Pensar Rápido, Pensar Despacio) y Fenomenología (Martin Heidegger).",
      definicion: "Quiebre deliberado del automatismo reactivo del Sistema 1 (procesamiento heurístico rápido) que reactiva la capacidad analítica del Sistema 2 (córtex prefrontal dorsolateral). En la gestión y la toma de decisiones, la interrupción revela las premisas ocultas y restaura el poder de elección consciente.",
      ejemplo: "Ante un comité polarizado, aplicar una pausa de interrupción consciente de 60 segundos desactiva la escalada de conflicto y devuelve el foco a los datos.",
      tags: ["Sistema 1 y 2", "Atención Plena", "Pausa Táctica", "Kahneman"]
    },
    {
      key: 'efecto mandela',
      termino: "Efecto Mandela (Falso Recuerdo Colectivo en la Empresa)",
      categoria: "Sesgos Cognitivos & Decisión",
      baseCientifica: "Psicología Cognitiva de la Memoria Reconstructiva (Dra. Elizabeth Loftus, UC Irvine; Daniel Schacter - Los siete pecados de la memoria). Acuñado culturalmente por Fiona Broome (2009).",
      definicion: "Fenómeno cognitivo y psicosocial donde un directivo o un comité corporativo entero recuerda con absoluta certidumbre acuerdos, instrucciones o métricas que jamás ocurrieron o que sucedieron de manera radicalmente distinta. Es producto de la sugestión colectiva, la confabulación y el sesgo retrospectivo. En la empresa, genera descoordinación masiva.",
      antidoto: "Trazabilidad inmutable de acuerdos: todo compromiso debe quedar registrado con fecha, responsable y entregable medible en la plataforma.",
      ejemplo: "Tres directores juraban que se acordó aplazar el lanzamiento; la telemetría inmutable de Interrupción demostró que el acuerdo formal era sostener la fecha con contingencia.",
      tags: ["Elizabeth Loftus", "Memoria Reconstructiva", "Sesgo de Consenso", "Auditoría"]
    },
    {
      key: 'quiebre',
      termino: "Quiebre Ontológico (Ontological Breakdown)",
      categoria: "Fundamentos & Neurociencia",
      baseCientifica: "Fenomenología Existencial (Martin Heidegger - Ser y Tiempo) y Ontología del Lenguaje (Rafael Echeverría, Fernando Flores).",
      definicion: "Interrupción en el fluir transparente y automático de la actividad cotidiana. Para el observador, un evento no es un quiebre por sí mismo, sino una declaración evaluativa: 'lo que ocurre no satisface mis estándares y amenaza mi objetivo'. Lejos de ser una queja pasiva, el quiebre es la declaración inicial que genera nuevas acciones y abre posibilidades antes invisibles.",
      ejemplo: "Declarar un quiebre ante la caída del margen no es lamentarse; es convocar al equipo para rediseñar el modelo operativo de entrega.",
      tags: ["Heidegger", "Echeverría", "Transparencia", "Acción Generativa"]
    },
    {
      key: 'causa os',
      termino: "Causa OS (Operating System of Radical Agency)",
      categoria: "Liderazgo & Conducta",
      baseCientifica: "Filosofía Estoica (Epicteto, Marco Aurelio - Dicotomía del Control) y Teoría del Locus de Control Interno (Julian Rotter).",
      definicion: "Sistema operativo de responsabilidad incondicional. Postura mental donde el líder se asume como origen generativo de sus circunstancias y resultados, desmantelando la inercia del victimismo, la queja defensiva y la delegación de agencia a factores externos.",
      ejemplo: "Bajo Causa OS, el líder sustituye el reactivo '¿por qué la filial no entrega?' por el generativo '¿qué acuerdo ambiguo o falta de seguimiento toleré aquí?'.",
      tags: ["Estoicismo", "Agencia Radical", "Locus de Control", "Accountability"]
    },
    {
      key: 'secuestro amigdalino',
      termino: "Secuestro Amigdalino (Amygdala Hijack)",
      categoria: "Fundamentos & Neurociencia",
      baseCientifica: "Neurobiología Emocional (Dr. Joseph LeDoux, Daniel Goleman).",
      definicion: "Reacción neuroquímica inmediata y automática de lucha o huida detonada por la amígdala cerebral ante una percepción de amenaza social, pérdida de estatus o ataque a la certidumbre. Inhibe temporalmente el flujo sanguíneo hacia el lóbulo frontal, bloqueando el juicio crítico y la empatía.",
      ejemplo: "Identificar las señales fisiológicas de tensión mandibular o aceleración cardíaca permite al directivo interrumpir el secuestro antes de responder un correo con enojo.",
      tags: ["Joseph LeDoux", "Amígdala", "Lucha o Huida", "Córtex Prefrontal"]
    },
    {
      key: 'calibracion de estado',
      termino: "Calibración de Estado (State Calibration)",
      categoria: "Liderazgo & Conducta",
      baseCientifica: "Teoría Polivagal (Dr. Stephen Porges) y Neurofisiología Somática del Estrés.",
      definicion: "Protocolo somático y neuro-atencional breve (1 a 3 minutos) diseñado para transicionar el sistema nervioso autónomo de la hiperactivación simpática hacia el estado parasimpático ventral (presencia, receptividad y templanza ejecutiva).",
      ejemplo: "Previo a negociar una ampliación contractual, el director ejecuta un protocolo de 2 minutos de respiración diafragmática para entrar con serenidad y claridad mental.",
      tags: ["Stephen Porges", "Polivagal", "Soma", "Presencia Ejecutiva"]
    },
    {
      key: 'sesgo de confirmacion',
      termino: "Sesgo de Confirmación (Confirmation Bias)",
      categoria: "Sesgos Cognitivos & Decisión",
      baseCientifica: "Economía Conductual (Amos Tversky, Daniel Kahneman, Peter Wason).",
      definicion: "Tendencia psicológica sistemática a buscar, interpretar y valorar exclusivamente aquella información que ratifica las hipótesis o convicciones previas, desechando o minimizando datos empíricos que las contradicen.",
      ejemplo: "Un directivo convencido de que su producto triunfará ignorará los reportes de abandono temprano de clientes a menos que se le fuerce a auditar la evidencia disconforme.",
      tags: ["Kahneman", "Tversky", "Sesgos", "Economía Conductual"]
    },
    {
      key: 'heuristica de disponibilidad',
      termino: "Heurística de Disponibilidad (Availability Heuristic)",
      categoria: "Sesgos Cognitivos & Decisión",
      baseCientifica: "Juicio bajo Incertidumbre (Amos Tversky & Daniel Kahneman, 1973).",
      definicion: "Atajo mental involuntario donde una persona evalúa la probabilidad o frecuencia de un riesgo basada en la facilidad y rapidez con la que evoca ejemplos de su memoria reciente o de eventos emocionalmente vívidos.",
      ejemplo: "Tras un fallo logístico reciente, la gerencia sobreestimó el riesgo operativo global y congeló expansiones viables por disponibilidad emocional del error.",
      tags: ["Kahneman", "Heurística", "Probabilidad", "Riesgo"]
    },
    {
      key: 'disonancia cognitiva',
      termino: "Disonancia Cognitiva (Cognitive Dissonance)",
      categoria: "Sesgos Cognitivos & Decisión",
      baseCientifica: "Psicología Social (Leon Festinger, 1957).",
      definicion: "Incomodidad o tensión psicológica profunda que surge cuando un individuo alberga simultáneamente dos convicciones opuestas, o cuando su comportamiento contradice frontalmente su estándar ético declarado.",
      ejemplo: "La disonancia entre predicar puntualidad rigurosa y llegar tarde a las reuniones de equipo obliga al líder a corregir su hábito o perder autoridad moral.",
      tags: ["Festinger", "Alineación", "Integridad", "Coherencia"]
    },
    {
      key: 'seguridad psicologica',
      termino: "Seguridad Psicológica (Psychological Safety)",
      categoria: "Estrategia & Alta Dirección",
      baseCientifica: "Comportamiento Organizacional (Dra. Amy Edmondson, Harvard University; Proyecto Aristóteles de Google).",
      definicion: "Creencia compartida por los integrantes de un equipo de que el entorno es seguro para asumir riesgos interpersonales: proponer ideas audaces, admitir errores operativos de forma inmediata o hacer preguntas difíciles sin temor al escarnio o represalias.",
      ejemplo: "El equipo con alta seguridad psicológica reportó la falla técnica en los primeros 10 minutos, salvando el cronograma de entrega del proyecto corporativo.",
      tags: ["Amy Edmondson", "Google Aristóteles", "Confianza", "Alto Desempeño"]
    },
    {
      key: 'modelo scarf',
      termino: "Modelo SCARF (Neurociencia del Liderazgo)",
      categoria: "Fundamentos & Neurociencia",
      baseCientifica: "Neurociencia Social (Dr. David Rock, NeuroLeadership Institute).",
      definicion: "Marco neurobiológico que describe los 5 detonantes primarios que el cerebro evalúa como amenaza o recompensa: Estatus (Status), Certeza (Certainty), Autonomía (Autonomy), Relación (Relatedness) y Equidad (Fairness).",
      ejemplo: "Para implementar una nueva herramienta digital sin resistencia pasiva, el líder resguarda la Autonomía y el Estatus de los gerentes regionales.",
      tags: ["David Rock", "SCARF", "Estatus", "Certeza", "Autonomía"]
    },
    {
      key: 'ecuacion de valor',
      termino: "Ecuación de Valor Percibido (The Value Equation)",
      categoria: "Estrategia & Alta Dirección",
      baseCientifica: "Economía Conductual y Arquitectura de Negocios (Alex Hormozi).",
      definicion: "Ecuación analítica que define el valor real percibido: (Resultado Soñado × Certeza Percibida) ÷ (Tiempo de Entrega × Esfuerzo & Fricción). En alta dirección, la mayor ganancia proviene de reducir a cero la fricción del usuario.",
      ejemplo: "Hicimos irresistible la propuesta corporativa reduciendo la implementación de 4 semanas a una activación en 1 clic de 15 minutos.",
      tags: ["Hormozi", "Valor", "Fricción", "Certeza"]
    },
    {
      key: 'compliance clearance',
      termino: "Compliance Clearance (Luz Verde / Estatus Verificado)",
      categoria: "Gobernanza & Telemetría",
      baseCientifica: "Sistemas de Control de Calidad y Gobernanza de Datos Operativos.",
      definicion: "Estado algorítmico oficial que certifica que un usuario o división ha cumplido con el 100% de los compromisos inmutables, estándares y sesiones de calibración estipulados en su ciclo.",
      ejemplo: "La división obtuvo Compliance Clearance tras validar el 100% de los entregables del ciclo en el Centro de Mando.",
      tags: ["Luz Verde", "Gobernanza", "Certificación", "Trazabilidad"]
    },
    {
      key: 'action required',
      termino: "Action Required (Alerta de Fricción Operativa)",
      categoria: "Gobernanza & Telemetría",
      baseCientifica: "Gestión de Riesgos Operativos y Control de Procesos (Six Sigma / Lean).",
      definicion: "Estado de alerta roja preventiva generado automáticamente cuando se registra un quiebre de estándares, inactividad prolongada o un acuerdo pendiente de subsanar.",
      ejemplo: "Alerta en Action Required: Es necesario validar el compromiso semanal antes del cierre de auditoría a las 17:00 hrs.",
      tags: ["Alerta Roja", "Riesgo", "Intervención", "Resolución"]
    },
    {
      key: 'antifragilidad',
      termino: "Antifragilidad (Antifragility)",
      categoria: "Estrategia & Alta Dirección",
      baseCientifica: "Teoría de la Complejidad y Gestión del Riesgo (Nassim Nicholas Taleb).",
      definicion: "Cualidad de los sistemas y líderes que van más allá de la resiliencia: no solo resisten el choque o la crisis, sino que prosperan, se robustecen y evolucionan a partir de la volatilidad y los quiebres.",
      ejemplo: "Una unidad de negocio antifrágil no teme las crisis de suministro; las utiliza para optimizar su cadena de valor y aventajar a la competencia.",
      tags: ["Nassim Taleb", "Resiliencia", "Antifrágil", "Complejidad"]
    },
    {
      key: 'teoria sintergica',
      termino: "Teoría Sintérgica (Sinergic Theory)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Psicofisiología Experimental y Neurofisiología (Dr. Jacobo Grinberg-Zylberbaum, UNAM, INPEC; 15 años de investigación documentada en laboratorio).",
      definicion: "Marco científico que postula que la realidad perceptual no existe 'afuera' como la experimentamos, sino que es una construcción cerebral generada por la interacción congruente entre el Campo Neuronal y la Lattice (matriz espacial). Explica el surgimiento de la conciencia y los estados de alta coherencia operativa.",
      antidoto: "Alinear la fisiología del observador para decodificar la realidad con alta fidelidad y mínimo sesgo perceptual.",
      ejemplo: "Bajo la Teoría Sintérgica, el directivo comprende que la 'resistencia del mercado' es la interpretación de su propio campo neuronal interactuando con las variables del entorno.",
      tags: ["Jacobo Grinberg", "UNAM", "INPEC", "Sintergia", "Lattice"]
    },
    {
      key: 'lattice',
      termino: "Lattice (Estructura Fundamental del Espacio-Tiempo)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Física Teórica y Psicofisiología Sintérgica (Dr. Jacobo Grinberg, David Bohm).",
      definicion: "Matriz energética hipercompleja de absoluta coherencia y total simetría que fundamenta el espacio-tiempo. En su estado puro es invisible e indiferenciada; cada punto del espacio contiene la totalidad de la información del universo (propiedad holográfica). Solo se manifiesta cuando una porción altera su estado de coherencia mediante microdistorsiones.",
      antidoto: "Reconocer que el espacio decisional no está vacío, sino interconectado holográficamente.",
      ejemplo: "Al tomar decisiones estratégicas, el líder no actúa en el vacío; su postura somática y mental altera la matriz de relaciones de todo el comité directivo.",
      tags: ["Lattice", "Espacio-Tiempo", "Holográfico", "Matriz", "Coherencia"]
    },
    {
      key: 'campo neuronal',
      termino: "Campo Neuronal (Neuronal Field)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Electrofisiología Cerebral y Dinámica de Redes (Dr. Jacobo Grinberg, UNAM).",
      definicion: "Macrodistorsión hipercompleja de la Lattice resultante de la suma de todos los micropotenciales dendríticos y potenciales de acción generados por las 12 mil millones de neuronas cerebrales. El campo neuronal no existe separado de la lattice; es una modificación dimensional de la misma que interactúa con ella produciendo la experiencia consciente.",
      antidoto: "Monitorear el estado de activación simpática/parasimpática para evitar que el campo neuronal emita ruido al entorno corporativo.",
      ejemplo: "El estrés y la crispación de un director alteran su campo neuronal, proyectando tensión palpable y reduciendo la creatividad de su equipo.",
      tags: ["Campo Neuronal", "Dendritas", "Potenciales de Acción", "Percepción", "Cerebro"]
    },
    {
      key: 'sintergia',
      termino: "Sintergia (Síntesis + Energía)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Terminología y Métricas Psicofisiológicas (Dr. Jacobo Grinberg, UNAM).",
      definicion: "Neologismo cuantitativo que integra tres parámetros físicos: coherencia, densidad informacional y frecuencia. Un campo neuronal o una zona de la Lattice de 'Alta Sintergia' procesa enormes volúmenes de información con mínima fricción y máxima integración; una de 'Baja Sintergia' opera con dispersión, ruido, conflicto y baja capacidad analítica.",
      antidoto: "Elevar la sintergia mediante calibración respiratoria, presencia atenta y síntesis ejecutiva de datos.",
      ejemplo: "Un comité ejecutivo en alta sintergia resuelve en 20 minutos negociaciones multimillonarias que a un equipo en baja sintergia le tomarían meses de fricción.",
      tags: ["Sintergia", "Coherencia", "Frecuencia", "Densidad Informacional", "Grinberg"]
    },
    {
      key: 'hipercampo',
      termino: "Hipercampo (Collective Hyperfield)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Dinámica de Sistemas Complejos y Neurociencia Social (Dr. Jacobo Grinberg, INPEC).",
      definicion: "Matriz global de la Lattice que incorpora e interconecta todos los campos neuronales individuales existentes. Cualquier alteración cualitativa en un campo neuronal resuena en el hipercampo, influyendo en el clima cognitivo, emocional y decisional de los grupos humanos y la conciencia colectiva.",
      antidoto: "Auditar la resonancia emocional del equipo para no permitir que el cinismo o el miedo de un elemento colapse el hipercampo del comité.",
      ejemplo: "Instalar seguridad psicológica y foco en hechos purifica el hipercampo corporativo, permitiendo innovación radical sin temor al juicio.",
      tags: ["Hipercampo", "Conciencia Colectiva", "Interconexión", "Clima de Equipo"]
    },
    {
      key: 'factor de direccionalidad',
      termino: "Factor de Direccionalidad (Directionality Factor & Neuromarketing)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Atención Focalizada y Procesamiento Central (Dr. Jacobo Grinberg, Michael Posner).",
      definicion: "Mecanismo neurocognitivo regulado por el procesador central del cerebro que focaliza la experiencia consciente en coordenadas específicas de la Lattice. En neuromarketing y dirección, determina hacia dónde se colapsa la atención del tomador de decisiones entre el bombardeo constante de estímulos.",
      antidoto: "Eliminar el 40% de información accesoria para guiar el factor de direccionalidad del interlocutor hacia la propuesta nuclear de valor.",
      ejemplo: "Al presentar a la junta directiva, usar una métrica central única orienta el factor de direccionalidad de los inversores hacia el cierre inmediato.",
      tags: ["Direccionalidad", "Neuromarketing", "Atención", "Procesador Central"]
    },
    {
      key: 'potencial transferido',
      termino: "Potencial Transferido (Transferred Potential & Non-Local Correlation)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Evidencia Experimental en Cámaras de Faraday y EEG (Dr. Jacobo Grinberg & Ramos, 1987, UNAM; Journal of Neuroscience).",
      definicion: "Fenómeno neurofisiológico verificado en laboratorio donde un sujeto estimulado sensorialmente dentro de una jaula de Faraday provoca la aparición de potenciales evocados correlacionados en el cerebro de otro sujeto situado en otra cámara aislada sin contacto físico, siempre que hubieran interactuado previamente en estado de sincronía meditativa.",
      antidoto: "Generar sintonización somática y escucha activa profunda previa antes de entrar a negociar discrepancias de fondo.",
      ejemplo: "El director que calibra su sistema nervioso transmite serenidad y firmeza al negociador contrario antes de pronunciar el primer número (sintonización subcortical).",
      tags: ["Potencial Transferido", "EEG", "Jaula de Faraday", "Neurociencia", "Sintonía"]
    },
    {
      key: 'conciencia de unidad',
      termino: "Conciencia de Unidad (Unity Consciousness & Radical Agency)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Neurobiología de Estados No Duales y Máxima Coherencia Transhemisférica (Dr. Jacobo Grinberg).",
      definicion: "Estado cumbre de la mente donde el campo neuronal mimetiza la simetría y coherencia de la Lattice fundamental. El sentido de separación del ego reactivo se desvanece, permitiendo al individuo percibir el sistema completo y operar desde la causa primaria, modificando la realidad con mínimo esfuerzo.",
      antidoto: "Desprenderse de la defensa personal del cargo para priorizar la salud y trascendencia de todo el ecosistema de negocio.",
      ejemplo: "Cuando el director general opera desde la conciencia de unidad, deja de defender feudos departamentales y diseña sinergias operativas globales.",
      tags: ["Conciencia de Unidad", "Ego Cero", "Alta Coherencia", "Liderazgo Trascendente"]
    },
    {
      key: 'meditacion autoalusiva',
      termino: "Meditación Autoalusiva (Autoalusive Meditation)",
      categoria: "Teoría Sintérgica & Grinberg",
      baseCientifica: "Psicofisiología Contemplativa y Biofeedback (Dr. Jacobo Grinberg, libros 1987-1990).",
      definicion: "Técnica neurocognitiva de autoobservación desarrollada por Grinberg donde la atención se enfoca simultáneamente en todos los contenidos perceptuales (corporales, emocionales y del entorno) hasta que el propio acto de observar se vuelve sobre el observador. Eleva rápidamente la coherencia interhemisférica en el EEG y desactiva el secuestro amigdalino.",
      antidoto: "Práctica de 3 a 5 minutos antes de iniciar negociaciones complejas o responder ante crisis operacionales.",
      ejemplo: "Aplicar la meditación autoalusiva antes de la asamblea de accionistas restaura la claridad de juicio y la presencia ejecutiva innegociable.",
      tags: ["Meditación Autoalusiva", "Autoobservación", "Coherencia EEG", "Calibración"]
    }
  ];

  const categorias = [
    'Todas',
    'Teoría Sintérgica & Grinberg',
    'Fundamentos & Neurociencia',
    'Sesgos Cognitivos & Decisión',
    'Liderazgo & Conducta',
    'Estrategia & Alta Dirección',
    'Gobernanza & Telemetría'
  ];

  const terminosFiltrados = terminosOficiales.filter(item => {
    const coincideCat = selectedCategory === 'Todas' || item.categoria === selectedCategory;
    const coincideBusqueda = item.termino.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.definicion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             (item.baseCientifica && item.baseCientifica.toLowerCase().includes(searchTerm.toLowerCase())) ||
                             item.ejemplo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return coincideCat && coincideBusqueda;
  });

  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: '1200px', margin: '0 auto', color: 'var(--text-main, #f8f9fa)' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{
        background: 'linear-gradient(135deg, rgba(13, 21, 45, 0.95), rgba(28, 37, 65, 0.9))',
        border: '1px solid rgba(56, 189, 248, 0.3)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#38bdf8',
                padding: '0.35rem 0.8rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                letterSpacing: '1px'
              }}>
                DICCIONARIO OFICIAL DEL SISTEMA
              </span>
              <span style={{
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#f59e0b',
                padding: '0.35rem 0.8rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                border: '1px solid rgba(245, 158, 11, 0.3)'
              }}>
                BASES CIENTÍFICAS & FILOSÓFICAS
              </span>
            </div>
            <h1 style={{
              fontSize: '2.2rem',
              margin: '0.5rem 0',
              fontWeight: '800',
              background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Glosario Canónico: Interrupción & Decisión Estratégica
            </h1>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '1rem', maxWidth: '850px', lineHeight: '1.6' }}>
              Definiciones rigurosas de los conceptos utilizados en la plataforma. Respaldadas por neurobiología conductual (Kahneman, LeDoux, Loftus), ontología del lenguaje y economía conductual para gerentes y líderes de alta dirección.
            </p>
          </div>

          <button
            onClick={toggleFocusMode}
            className="btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}
          >
            {isFocusMode ? '👁️ Modo Completo' : '🎯 Modo Enfoque'}
          </button>
        </div>

        {/* Buscador y Filtro por Categorías */}
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem', opacity: 0.6 }}>🔍</span>
            <input
              type="text"
              placeholder="Buscar término, autor (Kahneman, Loftus, Heidegger...), concepto o aplicación..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.9rem 1rem 0.9rem 2.8rem',
                borderRadius: '12px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#fff',
                fontSize: '1rem',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                outline: 'none'
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  border: selectedCategory === cat ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
                  background: selectedCategory === cat ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.04)',
                  color: selectedCategory === cat ? '#38bdf8' : '#94a3b8',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contador de Resultados */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '0 0.5rem' }}>
        <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
          Mostrando <strong>{terminosFiltrados.length}</strong> de {terminosOficiales.length} términos canónicos
        </span>
        {searchTerm && (
          <span style={{ fontSize: '0.85rem', color: '#38bdf8' }}>
            Filtro: "{searchTerm}"
          </span>
        )}
      </div>

      {/* Grid de Términos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
        {terminosFiltrados.map((item) => (
          <div
            key={item.key}
            className="glass-panel"
            style={{
              background: 'rgba(28, 37, 65, 0.65)',
              borderRadius: '14px',
              padding: '1.5rem',
              border: item.key === 'efecto mandela' ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
              position: 'relative'
            }}
          >
            {item.key === 'efecto mandela' && (
              <span style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(245, 158, 11, 0.2)',
                color: '#f59e0b',
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                fontSize: '0.7rem',
                fontWeight: '700',
                border: '1px solid rgba(245, 158, 11, 0.4)'
              }}>
                ⭐ NUEVO & CRÍTICO
              </span>
            )}

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: '700',
                  color: '#38bdf8',
                  background: 'rgba(56, 189, 248, 0.1)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px'
                }}>
                  {item.categoria}
                </span>
              </div>

              <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: '#f8fafc', fontWeight: '700', lineHeight: '1.3' }}>
                {item.termino}
              </h3>

              {item.baseCientifica && (
                <div style={{
                  fontSize: '0.8rem',
                  color: '#a78bfa',
                  background: 'rgba(139, 92, 246, 0.1)',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '6px',
                  marginBottom: '0.75rem',
                  borderLeft: '3px solid #8b5cf6'
                }}>
                  🔬 <strong>Base:</strong> {item.baseCientifica}
                </div>
              )}

              <p style={{ margin: '0 0 1rem 0', fontSize: '0.92rem', lineHeight: '1.6', color: '#cbd5e1' }}>
                {item.definicion}
              </p>

              {item.antidoto && (
                <div style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  padding: '0.6rem 0.75rem',
                  borderRadius: '8px',
                  marginBottom: '0.75rem',
                  fontSize: '0.85rem',
                  color: '#6ee7b7'
                }}>
                  🛡️ <strong>Antídoto Operativo:</strong> {item.antidoto}
                </div>
              )}

              {item.ejemplo && (
                <div style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  borderLeft: '3px solid #f59e0b',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#fbbf24', display: 'block', marginBottom: '0.25rem' }}>
                    APLICACIÓN EJECUTIVA:
                  </span>
                  <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: '#f1f5f9', lineHeight: '1.5' }}>
                    "{item.ejemplo}"
                  </span>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.75rem' }}>
              {item.tags.map(t => (
                <span
                  key={t}
                  onClick={() => setSearchTerm(t)}
                  style={{
                    fontSize: '0.75rem',
                    color: '#94a3b8',
                    background: 'rgba(255,255,255,0.04)',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {terminosFiltrados.length === 0 && (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem', marginTop: '2rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔍</div>
          <h3 style={{ margin: '0 0 0.5rem 0', color: '#f8fafc' }}>No se encontraron términos coincidentes</h3>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>
            Prueba buscando con palabras clave como "sesgo", "acuerdo", "amígdala", "decisión" o "Kahneman".
          </p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedCategory('Todas'); }}
            className="btn-secondary"
            style={{ marginTop: '1rem', fontSize: '0.85rem' }}
          >
            Restablecer búsqueda
          </button>
        </div>
      )}

    </div>
  );
}
