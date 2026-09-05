import React, { useState } from 'react';

export const GLOSSARY_TERMS = {
  'interrupcion': {
    title: 'Interrupción Consciente (Interruption Pattern)',
    body: 'Quiebre deliberado del automatismo reactivo (Sistema 1, Kahneman) que reactiva la capacidad analítica del neocórtex prefrontal y restaura la libertad de elección.',
    example: 'Ante una conversación de conflicto, aplicar una interrupción somática de 30 segundos evita el desborde reactivo.'
  },
  'efecto mandela': {
    title: 'Efecto Mandela (Falso Recuerdo Colectivo)',
    body: 'Fenómeno de memoria reconstructiva (Elizabeth Loftus) donde un equipo o comité directivo recuerda con certeza acuerdos o datos que nunca existieron o sucedieron de modo distinto. Se mitiga con trazabilidad escrita inmutable.',
    example: 'Para neutralizar el Efecto Mandela corporativo, todo acuerdo de directorio queda asentado con responsable y fecha inmutable.'
  },
  'quiebre': {
    title: 'Quiebre Ontológico (Breakdown)',
    body: 'Juicio declarativo (Heidegger, Echeverría) que interrumpe la transparencia cotidiana ante una discrepancia con el estándar deseado, abriendo un espacio generativo de diseño de nuevas acciones.',
    example: 'Declarar un quiebre no es quejarse del problema, sino abrir la conversación para crear un nuevo futuro.'
  },
  'causa os': {
    title: 'Causa OS (Operating System of Radical Agency)',
    body: 'Postura ontológica y de economía conductual donde el líder se asume como origen generativo de sus circunstancias y resultados, desmantelando la inercia del victimismo.',
    example: 'Al instalar Causa OS, sustituimos "¿por qué el equipo no responde?" por "¿qué acuerdo ambiguo toleré aquí?".'
  },
  'secuestro amigdalino': {
    title: 'Secuestro Amigdalino (Amygdala Hijack)',
    body: 'Respuesta neurobiológica automática de alarma (Joseph LeDoux) ante una amenaza percibida de estatus o certidumbre, que inhibe el pensamiento racional prefrontal.',
    example: 'Validar la perspectiva del directivo amansa el secuestro amigdalino antes de plantear la solución.'
  },
  'calibracion de estado': {
    title: 'Calibración de Estado (State Calibration)',
    body: 'Intervención breve (1 a 3 min) basada en la Teoría Polivagal y neurofisiología somática para transicionar del estrés simpático a la presencia ejecutiva parasimpática.',
    example: 'Realizamos una calibración de 2 minutos de respiración y presencia antes de entrar a la junta estratégica.'
  },
  'sesgo de confirmacion': {
    title: 'Sesgo de Confirmación (Confirmation Bias)',
    body: 'Tendencia cognitiva (Kahneman & Tversky) a buscar, favorecer y recordar únicamente la información que ratifica las hipótesis previas del observador.',
    example: 'Para contrarrestar el sesgo de confirmación, el comité somete el plan a una prueba de premisas contrarias.'
  },
  'heuristica de disponibilidad': {
    title: 'Heurística de Disponibilidad (Availability Heuristic)',
    body: 'Atajo mental que sobrestima la probabilidad de eventos basada en la facilidad con la que vienen ejemplos a la mente por su impacto emocional o recencia.',
    example: 'No tomemos decisiones de inversión por la última mala noticia; auditemos la serie temporal de datos.'
  },
  'disonancia cognitiva': {
    title: 'Disonancia Cognitiva (Cognitive Dissonance)',
    body: 'Tensión psicológica (Festinger) generada al sostener simultáneamente dos ideas contradictorias o cuando la conducta choca con el estándar declarado.',
    example: 'La disonancia entre la meta prometida y la falta de disciplina operativa obliga a rediseñar los acuerdos.'
  },
  'seguridad psicologica': {
    title: 'Seguridad Psicológica (Psychological Safety)',
    body: 'Condición del entorno de equipo (Amy Edmondson) donde ningún miembro teme represalias, ridículo o castigo por admitir errores o desafiar el statu quo.',
    example: 'La seguridad psicológica es el predictor número uno de innovación y velocidad operativa en equipos de alto rendimiento.'
  },
  'modelo scarf': {
    title: 'Modelo SCARF (Neurociencia del Liderazgo)',
    body: 'Marco de David Rock sobre los 5 activadores sociales primarios del cerebro: Estatus, Certeza, Autonomía, Relación y Equidad (Fairness).',
    example: 'Una reestructuración no comunicada ataca la Certeza y la Autonomía en el modelo SCARF de la plantilla.'
  },
  'compliance clearance': {
    title: 'Compliance Clearance (Luz Verde / Estatus Verificado)',
    body: 'Validación algorítmica y documental de que el líder ha cumplido con la totalidad de acuerdos inmutables y estándares operativos en el sistema.',
    example: 'La división obtuvo Compliance Clearance tras validar el 100% de los entregables del ciclo.'
  },
  'action required': {
    title: 'Action Required (Alerta de Fricción Operativa)',
    body: 'Señal en tiempo real ante una desviación de acuerdos, inactividad crítica o quiebre sin plan de resolución asignado.',
    example: 'Estado en Action Required: Es indispensable validar las métricas semanales antes del cierre de auditoría.'
  },
  'ecuacion de valor': {
    title: 'Ecuación de Valor (The Value Equation)',
    body: 'Modelo de impacto de Alex Hormozi: (Resultado Soñado × Certeza Percibida) / (Tiempo de Entrega × Fricción de Equipo). Reducir fricción multiplica el valor percibido.',
    example: 'Optimizamos la propuesta corporativa reduciendo a cero el tiempo de adopción técnica de la herramienta.'
  },
  'antifragilidad': {
    title: 'Antifragilidad (Antifragility)',
    body: 'Propiedad sistémica formulada por Nassim Nicholas Taleb: cualidad de beneficiarse, aprender y crecer a partir del choque, el desorden y los quiebres.',
    example: 'Diseñamos una cultura antifrágil donde cada desviación operativa genera una mejora inmutable en el proceso.'
  },
  'teoria sintergica': {
    title: 'Teoría Sintérgica (Dr. Jacobo Grinberg)',
    body: 'Marco científico (UNAM/INPEC) que demuestra que la percepción de la realidad es la interacción congruente entre el Campo Neuronal y la Lattice fundamental del espacio-tiempo.',
    example: 'Bajo la Teoría Sintérgica, comprendemos que el entorno responde y resuena con la coherencia electrofisiológica del observador.'
  },
  'lattice': {
    title: 'Lattice (Estructura Fundamental del Espacio-Tiempo)',
    body: 'Matriz energética hipercompleja de absoluta coherencia y total simetría que sostiene el universo. Posee estructura holográfica (cada punto contiene el todo).',
    example: 'El líder no toma decisiones en el vacío; su estado somático genera microdistorsiones directas en la lattice de su organización.'
  },
  'campo neuronal': {
    title: 'Campo Neuronal (Neuronal Field)',
    body: 'Macrodistorsión hipercompleja de la Lattice resultante de los micropotenciales dendríticos y de acción de las 12 mil millones de neuronas cerebrales.',
    example: 'El desborde emocional o estrés de un líder distorsiona negativamente su campo neuronal, irradiando tensión a su equipo.'
  },
  'sintergia': {
    title: 'Sintergia (Síntesis + Energía)',
    body: 'Métrica psicofisiológica que integra coherencia, densidad informacional y frecuencia. A mayor sintergia, mayor integración cognitiva y menor sesgo perceptual.',
    example: 'Un comité en alta sintergia decodifica información crítica en minutos, evitando fricciones estériles.'
  },
  'hipercampo': {
    title: 'Hipercampo (Collective Hyperfield)',
    body: 'La matriz global de la Lattice que unifica e interconecta todos los campos neuronales. Explica la resonancia no verbal y el clima decisional colectivo.',
    example: 'La seguridad psicológica limpia el hipercampo del equipo, disparando la innovación y la franqueza operativa.'
  },
  'factor de direccionalidad': {
    title: 'Factor de Direccionalidad (Neuromarketing & Enfoque)',
    body: 'Mecanismo cerebral que focaliza la atención consciente hacia un punto específico de la Lattice, reduciendo el ruido perceptual.',
    example: 'En neuromarketing, orientar el factor de direccionalidad del cliente hacia una sola propuesta de valor multiplica la conversión.'
  },
  'potencial transferido': {
    title: 'Potencial Transferido (Transferred Potential - EEG)',
    body: 'Fenómeno verificado por Grinberg donde un estímulo en un sujeto genera potenciales evocados simultáneos en otro sujeto en cámara de Faraday sin contacto físico.',
    example: 'El control somático del negociador sintoniza el sistema nervioso del interlocutor antes de iniciar la discusión de cifras.'
  },
  'conciencia de unidad': {
    title: 'Conciencia de Unidad (Unity Consciousness)',
    body: 'Estado de alta coherencia donde el campo neuronal mimetiza la simetría de la Lattice. Desaparece la reactividad del ego y se opera desde la Causa radical.',
    example: 'Operar desde la conciencia de unidad transforma rivalidades departamentales en sinergias de alto rendimiento.'
  },
  'meditacion autoalusiva': {
    title: 'Meditación Autoalusiva (Autoalusive Meditation)',
    body: 'Técnica de autoobservación desarrollada por Grinberg que incrementa la coherencia interhemisférica en EEG al integrar todos los estímulos simultáneamente.',
    example: 'Una calibración autoalusiva de 3 minutos disuelve el secuestro amigdalino antes de una asamblea corporativa.'
  }
};

export default function GlossaryTerm({ term, children, customTitle, customBody, customExample }) {
  const [showMobileModal, setShowMobileModal] = useState(false);
  const key = term ? term.toLowerCase().trim() : '';
  const termData = GLOSSARY_TERMS[key] || {
    title: customTitle || term,
    body: customBody || 'Concepto de Neurociencia Decisional y Alto Rendimiento.',
    example: customExample || ''
  };

  return (
    <>
      <span 
        className="glossary-anchor" 
        onClick={() => setShowMobileModal(true)}
        role="button"
        tabIndex={0}
        title={termData.title}
      >
        {children || termData.title}
        <span className="glossary-tooltip">
          <strong className="glossary-tooltip-title">{termData.title}</strong>
          <span className="glossary-tooltip-body">{termData.body}</span>
          {termData.example && (
            <span className="glossary-tooltip-example">Ej: "{termData.example}"</span>
          )}
        </span>
      </span>

      {showMobileModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowMobileModal(false)}
        >
          <div 
            style={{
              width: '100%',
              maxWidth: '480px',
              background: 'var(--bg-card, #0f172a)',
              color: 'var(--text-main, #f8f9fa)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--crear-blue, #00d4ff)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Glosario del Sistema Interrupción
              </span>
              <button 
                onClick={() => setShowMobileModal(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted, #9ca3af)', fontSize: '1.2rem', cursor: 'pointer', padding: '4px' }}
              >
                ✕
              </button>
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: 'var(--text-main, #ffffff)' }}>
              {termData.title}
            </h3>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text-muted, #cbd5e1)' }}>
              {termData.body}
            </p>
            {termData.example && (
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 12px', borderRadius: '8px', borderLeft: '3px solid var(--crear-gold, #ffb703)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--crear-gold, #ffb703)', display: 'block', marginBottom: '2px' }}>
                  EJEMPLO DE APLICACIÓN:
                </span>
                <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-main, #f1f5f9)' }}>
                  "{termData.example}"
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
