import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function BrandscriptGuionesMJ() {
  const [activeTab, setActiveTab] = useState('sb7'); // 'sb7' | 'guiones' | 'whatsapp' | 'checklist' | 'manual'
  const [copiedKey, setCopiedKey] = useState(null);

  // Variables dinámicas para el generador de WhatsApp
  const [waName, setWaName] = useState('Carlos');
  const [waSede, setWaSede] = useState('Lima');
  const [waManager, setWaManager] = useState('Equipo de Mentoría Empática');
  const [waLink, setWaLink] = useState('https://calendly.com/crearpsl-mj/calibracion-fi');

  // Estado del Checklist de Impecabilidad
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  // Selector de Escenario en Guiones
  const [selectedEscenario, setSelectedEscenario] = useState('A'); // 'A' | 'B'

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleToggleCheck = (key) => {
    setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecks = Object.values(checkedItems).filter(Boolean).length;
  const auditScore = (completedChecks / 5) * 100;

  // Plantillas formateadas de WhatsApp
  const mensaje1Text = `¡Felicidades, Creador! 🦅✨

Aún resuena en la sede la fisionomía y la fuerza de tu palabra declarada este fin de semana en Capítulo Dos. Has salido de "la arena" y hoy tienes en tus manos la posibilidad de diseñar tu propio destino.

El lunes ha llegado, y con él, la oportunidad de elegir: ¿volver a la inercia cotidiana o entrenar para consolidar tu Breakthrough?

La comunidad de personas en modo aprendiz y Maestría del Juego ya está lista para recibirte en el contenedor de los 90 días. Tu espacio de estiramiento está guardado.

Paso 1: Ingresa a tu App Nodus 📱
Paso 2: Agenda tu sesión de calibración de Futuro Imposible (FI) de 15 minutos aquí: ${waLink}
Paso 3: Sostiene tu palabra.

Sostener la fisionomía del Ser es el juego de los grandes. Nos vemos en la cancha. 

Atentamente,
Equipo de Mentoría Empática de ${waSede}
CREAR PODER SIN LÍMITES 2026.`;

  const mensaje2Text = `Hola, ${waName} 👋

Te saludamos desde la sede ${waSede}. Hoy es viernes de Capítulo Dos, un día clave para cuidar el contenedor de integridad que declaraste el jueves por la noche.

Para asegurar que tu ingreso al bloque vivencial de las 15:00 PM sea fluido y libre de distracciones logísticas:

📌 Tu estado actual en Nodus requiere conciliación de caja.
⏰ El cierre automático de registros de la plataforma se ejecutará a las 14:00 PM.

Queremos cuidar tu experiencia y tu palabra. Por favor, acércate a la mesa externa de registro antes de la hora límite o envíanos tu comprobante digital por esta vía para validar tu "Ticket Verde" en el sistema.

Si tienes algún quiebre técnico o financiero de última hora, avísanos de inmediato para diseñar juntos una solución oportuna antes del cierre.

¡Sostener tu palabra es tu mayor poder! Nos vemos en sala. 🛡️
CREAR PODER SIN LÍMITES`;

  // Matriz SB7 Oficial
  const sb7Elements = [
    {
      num: 1,
      titulo: '1. Un Personaje (El Héroe)',
      definicion: 'Graduado de Capítulo Dos (C2).',
      lenguajeCpsl: 'Un líder que ha despertado su poder en sala y busca materializarlo en la fisionomía de su vida diaria.',
      color: '#3b82f6',
      icon: '👤'
    },
    {
      num: 2,
      titulo: '2. Tiene un Problema',
      definicion: 'El "Efecto Lunes" y el entorno inercial.',
      lenguajeCpsl: '• Externo: Volver a un entorno que no comprende su transformación.\n• Interno: Miedo al auto-sabotaje y a quedarse solo.\n• Filosófico: Es inaceptable regresar a vivir una vida promedio tras haber conocido su grandeza.',
      color: '#ef4444',
      icon: '⚡'
    },
    {
      num: 3,
      titulo: '3. Encuentra un Guía',
      definicion: 'El equipo de Accountability Coaches y la Plataforma Nodus.',
      lenguajeCpsl: 'Un mentor empático (que ya recorrió los 90 días) y con autoridad técnica (respaldado por la telemetría de Nodus).',
      color: '#8b5cf6',
      icon: '🧭'
    },
    {
      num: 4,
      titulo: '4. Que le da un Plan',
      definicion: 'La estructura de los 90 días de MJ.',
      lenguajeCpsl: 'Paso 1: Declara tu Futuro Imposible (FI).\nPaso 2: Entrena en Integridad (28 Entrenamientos Sustentables).\nPaso 3: Conquista "El Viaje" y gradúate en Gratitud.',
      color: '#10b981',
      icon: '📋'
    },
    {
      num: 5,
      titulo: '5. Y lo llama a la Acción',
      definicion: 'El registro y la inscripción voluntaria.',
      lenguajeCpsl: '• CTA Directo: Registrarse en Nodus en la mesa de conversión del domingo.\n• CTA Transicional: Agendar sesión de calibración de FI de 15 minutos.',
      color: '#f59e0b',
      icon: '🎯'
    },
    {
      num: 6,
      titulo: '6. Que evita el Fracaso',
      definicion: 'Evitar el marchitamiento de la palabra.',
      lenguajeCpsl: 'Caer de vuelta en la anestesia de la víctima ("la arena"), perdiendo el impulso de su Breakthrough de jueves.',
      color: '#ec4899',
      icon: '🛡️'
    },
    {
      num: 7,
      titulo: '7. Y termina en Éxito',
      definicion: 'Convertirse en un Líder IMO.',
      lenguajeCpsl: 'Vivir en coherencia, manifestando abundancia física, emocional y financiera como una consecuencia natural de su Ser.',
      color: '#eab308',
      icon: '🏆'
    }
  ];

  return (
    <div style={{ padding: '1.5rem', maxWidth: '1280px', margin: '0 auto', color: '#f8fafc' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{
        background: 'linear-gradient(135deg, rgba(13, 21, 45, 0.95), rgba(28, 37, 65, 0.9))',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#f59e0b',
                padding: '0.35rem 0.8rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                letterSpacing: '1px'
              }}>
                EDICIÓN OFICIAL V1.0 — 2026
              </span>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                padding: '0.35rem 0.8rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                border: '1px solid rgba(16, 185, 129, 0.3)'
              }}>
                AUTOENTRENAMIENTO: COMUNICACIÓN & MENTORÍA EMPÁTICA
              </span>
            </div>
            <h1 style={{
              fontSize: '2rem',
              margin: '0.5rem 0',
              fontWeight: '800',
              background: 'linear-gradient(90deg, #f59e0b, #fef08a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px'
            }}>
              Manual de Enrolamiento Narrativo: BrandScript & Guiones MJ
            </h1>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '1rem', maxWidth: '850px', lineHeight: '1.6' }}>
              Herramienta oficial de <strong>CREAR PODER SIN LÍMITES</strong> para personas en modo aprendiz que desarrollan habilidades de comunicación empática y mentoría bajo el <strong>StoryBrand Framework (SB7)</strong> y el <strong>Neuromarketing Ético</strong> para la Maestría del Juego (MJ) de 90 días.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <NavLink to="/ruta" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              🧭 Volver a Ruta
            </NavLink>
            <NavLink to="/gamificacion" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', borderColor: '#10b981' }}>
              🎮 Modo Aprendiz (Nodus)
            </NavLink>
          </div>
        </div>

        {/* Mini stats bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              🦸
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>El Héroe</div>
              <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '0.95rem' }}>Graduado C2</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              🧭
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>El Guía</div>
              <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '0.95rem' }}>Accountability Coach + Nodus</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              🕊️
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>El Combustible</div>
              <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '0.95rem' }}>Elección Voluntaria</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              🎯
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Destino Final</div>
              <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '0.95rem' }}>Líder IMO (90 Días)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        overflowX: 'auto',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {[
          { id: 'sb7', label: '🗺️ BrandScript SB7-MJ', badge: '7 Elementos' },
          { id: 'guiones', label: '📞 Guiones Telefónicos', badge: 'Escenarios A & B' },
          { id: 'whatsapp', label: '💬 Generador WhatsApp', badge: '2 Plantillas' },
          { id: 'checklist', label: '🛡️ Checklist de Impecabilidad', badge: `${auditScore}%` },
          { id: 'manual', label: '📄 Documento Oficial Completo', badge: 'Markdown' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 1.25rem',
              borderRadius: '10px',
              border: activeTab === tab.id ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.1)',
              background: activeTab === tab.id ? 'rgba(245, 158, 11, 0.15)' : 'rgba(28, 37, 65, 0.6)',
              color: activeTab === tab.id ? '#f59e0b' : '#94a3b8',
              fontWeight: activeTab === tab.id ? '700' : '500',
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
          >
            <span>{tab.label}</span>
            <span style={{
              fontSize: '0.75rem',
              padding: '0.15rem 0.5rem',
              borderRadius: '6px',
              background: activeTab === tab.id ? '#f59e0b' : 'rgba(255, 255, 255, 0.1)',
              color: activeTab === tab.id ? '#0d152d' : '#94a3b8',
              fontWeight: '700'
            }}>
              {tab.badge}
            </span>
          </button>
        ))}
      </div>

      {/* TAB 1: BRANDSCRIPT SB7-MJ */}
      {activeTab === 'sb7' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Card Ontológico */}
          <div className="glass-panel" style={{
            background: 'rgba(28, 37, 65, 0.7)',
            padding: '1.75rem',
            borderRadius: '14px',
            borderLeft: '5px solid #f59e0b'
          }}>
            <h3 style={{ margin: '0 0 0.75rem 0', color: '#f59e0b', fontSize: '1.3rem' }}>
              1. El Marco Ontológico: El Viaje del Héroe en la Maestría
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: '0 0 1rem 0' }}>
              En la cultura de alto rendimiento de <strong>CREAR PODER SIN LÍMITES (CPSL)</strong>, no operamos desde la venta tradicional ni desde el empuje comercial invasivo. Operamos desde la <strong>creación de contexto</strong>:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <strong style={{ color: '#60a5fa', display: 'block', marginBottom: '0.35rem' }}>🦸 El Participante es el Héroe</strong>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  El graduado de Capítulo Dos (C2) es el único protagonista de su propia película. Él es quien debe enfrentar a sus «dragones cotidianos» (la inercia, la zona de confort, el escepticismo de su entorno).
                </span>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <strong style={{ color: '#c084fc', display: 'block', marginBottom: '0.35rem' }}>🧭 La Organización es el Guía</strong>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  En modo aprendiz no buscamos protagonismo. Nuestro propósito es encarnar el arquetipo del Mentor empático (el Guía), proveyendo escucha activa, presencia ontológica, un plan simplificado y un llamado consciente a la acción.
                </span>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <strong style={{ color: '#34d399', display: 'block', marginBottom: '0.35rem' }}>🕊️ Elección Voluntaria</strong>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  El enrolamiento es un acto de amor y estiramiento. Todo acuerdo financiero o de asistencia debe nacer de la libre elección del participante, erradicando cualquier forma de coacción, manipulación o culpa.
                </span>
              </div>
            </div>
          </div>

          {/* Matriz 7 Elementos SB7 */}
          <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#f8fafc', fontSize: '1.3rem' }}>
              2. Matriz del BrandScript Oficial (SB7-MJ)
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Estructura del viaje cognitivo y emocional de un graduado al transicionar de C2 al ciclo avanzado de 90 días:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
              {sb7Elements.map(elem => (
                <div
                  key={elem.num}
                  style={{
                    background: 'rgba(15, 23, 42, 0.8)',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    borderLeft: `4px solid ${elem.color}`,
                    border: `1px solid rgba(255,255,255,0.06)`,
                    borderLeftWidth: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.3rem' }}>{elem.icon}</span>
                      <h4 style={{ margin: 0, color: elem.color, fontSize: '1.05rem', fontWeight: '700' }}>
                        {elem.titulo}
                      </h4>
                    </div>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      color: '#cbd5e1',
                      background: 'rgba(255,255,255,0.05)',
                      padding: '0.4rem 0.6rem',
                      borderRadius: '6px',
                      marginBottom: '0.75rem'
                    }}>
                      {elem.definicion}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#94a3b8',
                      lineHeight: '1.6',
                      whiteSpace: 'pre-line'
                    }}>
                      {elem.lenguajeCpsl}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: GUIONES TELEFÓNICOS */}
      {activeTab === 'guiones' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Banner de Neuromarketing */}
          <div className="glass-panel" style={{
            background: 'rgba(28, 37, 65, 0.7)',
            padding: '1.25rem 1.75rem',
            borderRadius: '12px',
            borderLeft: '4px solid #8b5cf6',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ fontSize: '2rem' }}>🧠</div>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <strong style={{ color: '#a78bfa', fontSize: '1rem', display: 'block', marginBottom: '0.2rem' }}>
                Premisa de Neuromarketing Ético: «Calmar al Perro Guardián» (Reptil)
              </strong>
              <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                En los primeros 15 segundos de llamada, el cerebro reptil está en modo defensa. Desactiva la alerta mediante simpatía genuina, tono pausado y respetando estrictamente su tiempo (pedir permiso de 3 minutos).
              </span>
            </div>
          </div>

          {/* Selector de Escenarios */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => setSelectedEscenario('A')}
              style={{
                flex: 1,
                padding: '1rem',
                borderRadius: '10px',
                border: selectedEscenario === 'A' ? '2px solid #3b82f6' : '1px solid rgba(255, 255, 255, 0.1)',
                background: selectedEscenario === 'A' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(28, 37, 65, 0.5)',
                color: selectedEscenario === 'A' ? '#60a5fa' : '#94a3b8',
                fontWeight: '700',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.8 }}>Escenario A</div>
              <div style={{ fontSize: '1.05rem', color: '#f8fafc', marginTop: '0.2rem' }}>
                Graduado Indeciso / Miedo al «Efecto Lunes»
              </div>
            </button>

            <button
              onClick={() => setSelectedEscenario('B')}
              style={{
                flex: 1,
                padding: '1rem',
                borderRadius: '10px',
                border: selectedEscenario === 'B' ? '2px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                background: selectedEscenario === 'B' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(28, 37, 65, 0.5)',
                color: selectedEscenario === 'B' ? '#34d399' : '#94a3b8',
                fontWeight: '700',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.8 }}>Escenario B</div>
              <div style={{ fontSize: '1.05rem', color: '#f8fafc', marginTop: '0.2rem' }}>
                Tratamiento Ético ante Objeción «No tengo dinero»
              </div>
            </button>
          </div>

          {/* Contenido Escenario A */}
          {selectedEscenario === 'A' && (
            <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ margin: 0, color: '#60a5fa', fontSize: '1.3rem' }}>
                    Escenario A: Reactivación de Visión y Desmantelamiento del «Efecto Lunes»
                  </h3>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                    Estructura secuencial en 5 pasos para sostener la palabra de jueves y el Breakthrough.
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(`Paso 1: "Hola [Nombre], te saluda [Accountability Coach], tu Accountability Coach de soporte. Qué gusto saludarte. Te llamo brevemente, ¿estás en un espacio cómodo de 3 minutos para conversar?"
Paso 2: "Aún vibra en mí el espacio del domingo de Capítulo Dos. Quiero reconocer la fisonomía y la entrega que mostraste en tu Breakthrough. Vi a un creador absoluto en la sala. ¿Cómo se ha sentido apagar el micrófono y regresar a la rutina estos dos días?"
Paso 3: "Es completamente natural, [Nombre]. La inercia del día a día es fuerte y volver al 'mundo real' sin una estructura puede sentirse como tratar de nadar contracorriente en la arena. Sabes que tienes el potencial, pero sostener la autodisciplina solo es sumamente retador."
Paso 4: "Por eso creamos la Maestría del Juego de 90 días. No es más teoría; es la pista de entrenamiento física para consolidar tu resultado. El plan es muy sencillo: primero, declaramos un Futuro Imposible en salud, finanzas o relaciones; segundo, entrenamos diariamente en integridad con el soporte de tu mánager y la Plataforma Nodus; y tercero, nos graduamos juntos en Gratitud. Tú pones la visión, nosotros la estructura de bajo riesgo."
Paso 5: "[Nombre], tu palabra de jueves sigue viva. ¿Eliges sostener tu estiramiento y dar el paso a tu Maestría este fin de semana, o vas a permitir que la inercia del lunes tome las decisiones por ti?"`, 'guionA')}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  {copiedKey === 'guionA' ? '✅ ¡Copiado!' : '📋 Copiar Guión Completo A'}
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Paso 1 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #3b82f6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#60a5fa' }}>Paso 1: Apertura y Conexión (Calmar al Reptil)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>0 - 15 seg</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #3b82f6' }}>
                    «Hola [Nombre del Participante], te saluda [Nombre del Accountability Coach], tu Accountability Coach de soporte. Qué gusto saludarte. Te llamo brevemente, ¿estás en un espacio cómodo de 3 minutos para conversar?»
                  </blockquote>
                </div>

                {/* Paso 2 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #8b5cf6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#a78bfa' }}>Paso 2: Validación de Fisionomía</strong>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Reconocimiento</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #8b5cf6' }}>
                    «Aún vibra en mí el espacio del domingo de Capítulo Dos. Quiero reconocer la fisonomía y la entrega que mostraste en tu Breakthrough. Vi a un creador absoluto en la sala. ¿Cómo se ha sentido apagar el micrófono y regresar a la rutina estos dos días?»
                  </blockquote>
                </div>

                {/* Paso 3 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #ef4444' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#f87171' }}>Paso 3: Identificación del Problema Interno (StoryBrand)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#f87171', background: 'rgba(239, 68, 68, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Escucha Activa</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 0.5rem 0' }}>
                    [Escuchar activamente sin interrumpir; dejar que exprese la fricción del entorno]
                  </p>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #ef4444' }}>
                    «Es completamente natural, [Nombre]. La inercia del día a día es fuerte y volver al 'mundo real' sin una estructura puede sentirse como tratar de nadar contracorriente en la arena. Sabes que tienes el potencial, pero sostener la autodisciplina solo es sumamente retador.»
                  </blockquote>
                </div>

                {/* Paso 4 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #10b981' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#34d399' }}>Paso 4: Presentación del Plan de 3 Pasos</strong>
                    <span style={{ fontSize: '0.75rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Bajo Riesgo</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #10b981' }}>
                    «Por eso creamos la Maestría del Juego de 90 días. No es más teoría; es la pista de entrenamiento física para consolidar tu resultado. El plan es muy sencillo: primero, declaramos un Futuro Imposible en salud, finanzas o relaciones; segundo, entrenamos diariamente en integridad con el soporte de tu mánager y la Plataforma Nodus; y tercero, nos graduamos juntos en Gratitud. Tú pones la visión, nosotros la estructura de bajo riesgo.»
                  </blockquote>
                </div>

                {/* Paso 5 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #f59e0b' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#fbbf24' }}>Paso 5: Llamado a la Acción Directo (CTA)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Elección</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #f59e0b' }}>
                    «[Nombre], tu palabra de jueves sigue viva. ¿Eliges sostener tu estiramiento y dar el paso a tu Maestría este fin de semana, o vas a permitir que la inercia del lunes tome las decisiones por ti?»
                  </blockquote>
                </div>

              </div>
            </div>
          )}

          {/* Contenido Escenario B */}
          {selectedEscenario === 'B' && (
            <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ margin: 0, color: '#34d399', fontSize: '1.3rem' }}>
                    Escenario B: Tratamiento Ético ante la Objeción «No tengo dinero»
                  </h3>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                    Rigor de Causa OS y Ecuación de Valor (Hormozi): elevar el valor percibido y reencuadrar la inversión en el Ser.
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(`Participante: "De verdad quiero hacer la Maestría, pero el dinero es mi límite en este momento. No tengo cómo cubrir la inversión."

Coach (Guía): "Reconozco tu honestidad, [Nombre]. El dinero es un factor real. Si dejamos la inversión a un lado por un instante... en tu corazón, ¿la Maestría representa un 'sí' rotundo para tu vida, o tienes alguna duda sobre el valor que este entrenamiento aportará a tus metas?"

Participante: "No, el entrenamiento sé que es increíble y me sirve, es solo que físicamente no tengo el dinero hoy."

Coach (Causa OS): "Perfecto. Gracias por aclarar que la fisionomía del entrenamiento es un 'sí' para ti. En la cultura de Crear, operamos desde la Causa: si tú eres el creador de tu realidad, el dinero es una circunstancia a diseñar, no un límite inamovible. Si la Plataforma Nodus nos permite estructurar un plan de abono de bajo riesgo y pasos progresivos que se adapte a tus flujos actuales, ¿qué opciones ves viables para generar tu primer aporte de reserva antes de que cerremos el registro este viernes?"

Participante: "Podría dar una parte este viernes y el saldo en dos cuotas los fines de semana de módulo."

Coach: "Excelente. Eso es un creador en acción. Vamos a registrar ese plan de pago en Nodus bajo aprobación de la Gerencia para activar tu 'Ticket Verde' de inmediato. Bienvenido al juego de los 90 días."`, 'guionB')}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  {copiedKey === 'guionB' ? '✅ ¡Copiado!' : '📋 Copiar Diálogo B'}
                </button>
              </div>

              {/* Comparativa Ética: Manipulación vs Coaching */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', padding: '1rem' }}>
                  <strong style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    ⛔ Acción Incorrecta (Manipulación / Prohibida)
                  </strong>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#fca5a5', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <li>«Si no entras, es porque no te amas a ti mismo».</li>
                    <li>«Consíguete una tarjeta prestada si de verdad te importa tu familia».</li>
                    <li><em>Efecto:</em> Genera rechazo, quiebra la seguridad psicológica y desacredita la empresa.</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', padding: '1rem' }}>
                  <strong style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    ✅ Acción Correcta (Coaching Ético CPSL)
                  </strong>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#a7f3d0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <li>Separar el hecho objetivo («dinero en cuenta») de la interpretación.</li>
                    <li>Verificar si el deseo ontológico es un «SÍ» rotundo.</li>
                    <li>Tratar el dinero como una circunstancia a diseñar desde Causa OS con planes de bajo riesgo.</li>
                  </ul>
                </div>
              </div>

              {/* Diálogo Paso a Paso */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #94a3b8' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>1. Objeción del Participante</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0', fontStyle: 'italic' }}>
                    «De verdad quiero hacer la Maestría, pero el dinero es mi límite en este momento. No tengo cómo cubrir la inversión.»
                  </p>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #8b5cf6' }}>
                  <div style={{ fontSize: '0.8rem', color: '#c084fc', fontWeight: '700', textTransform: 'uppercase' }}>2. Respuesta Mánager (Guía - Aislar la Objeción)</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0' }}>
                    «Reconozco tu honestidad, [Nombre]. El dinero es un factor real. Si dejamos la inversión a un lado por un instante... en tu corazón, ¿la Maestría representa un 'sí' rotundo para tu vida, o tienes alguna duda sobre el valor que este entrenamiento aportará a tus metas?»
                  </p>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #94a3b8' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>3. Respuesta del Participante</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0', fontStyle: 'italic' }}>
                    «No, el entrenamiento sé que es increíble y me sirve, es solo que físicamente no tengo el dinero hoy.»
                  </p>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                  <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: '700', textTransform: 'uppercase' }}>4. Respuesta Mánager (Causa OS - Propuesta de Bajo Riesgo)</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0' }}>
                    «Perfecto. Gracias por aclarar que la fisionomía del entrenamiento es un 'sí' para ti. En la cultura de Crear, operamos desde la Causa: si tú eres el creador de tu realidad, el dinero es una circunstancia a diseñar, no un límite inamovible. Si la Plataforma Nodus nos permite estructurar un plan de abono de bajo riesgo y pasos progresivos que se adapte a tus flujos actuales, ¿qué opciones ves viables para generar tu primer aporte de reserva antes de que cerremos el registro este viernes?»
                  </p>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #f59e0b' }}>
                  <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase' }}>5. Cierre con Ticket Verde en Nodus</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0' }}>
                    «Excelente. Eso es un creador en acción. Vamos a registrar ese plan de pago en Nodus bajo aprobación de la Gerencia para activar tu 'Ticket Verde' de inmediato. Bienvenido al juego de los 90 días.»
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* TAB 3: GENERADOR WHATSAPP */}
      {activeTab === 'whatsapp' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Panel de Personalización de Variables */}
          <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.5rem', borderRadius: '14px' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#f59e0b', fontSize: '1.15rem' }}>
              ⚙️ Personalizar Variables del Mensaje en Vivo
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>
                  Nombre del Participante:
                </label>
                <input
                  type="text"
                  value={waName}
                  onChange={(e) => setWaName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>
                  Sede Oficial:
                </label>
                <select
                  value={waSede}
                  onChange={(e) => setWaSede(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    fontSize: '0.9rem'
                  }}
                >
                  <option value="Lima">Lima</option>
                  <option value="Quito">Quito</option>
                  <option value="Cuenca">Cuenca</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Guayaquil">Guayaquil</option>
                  <option value="México">México</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>
                  Enlace de Calibración FI (Calendly / Form):
                </label>
                <input
                  type="text"
                  value={waLink}
                  onChange={(e) => setWaLink(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Plantilla 1: Bienvenida e Invitación */}
          <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px', borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>🦅</span>
                  <h4 style={{ margin: 0, color: '#34d399', fontSize: '1.15rem' }}>
                    Plantilla 1: Bienvenida e Invitación Inmediata (Post-Graduación C2)
                  </h4>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Principio de «Unidad» de Cialdini para pertenencia instantánea. Enviar lunes por la mañana.
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => copyToClipboard(mensaje1Text, 'wa1')}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  {copiedKey === 'wa1' ? '✅ ¡Copiado!' : '📋 Copiar Mensaje'}
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(mensaje1Text)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: '#25D366',
                    color: '#0d152d',
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    textDecoration: 'none'
                  }}
                >
                  💬 Abrir WhatsApp
                </a>
              </div>
            </div>

            <pre style={{
              background: 'rgba(15, 23, 42, 0.8)',
              padding: '1.25rem',
              borderRadius: '10px',
              color: '#e2e8f0',
              fontSize: '0.9rem',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
              fontFamily: 'inherit',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              {mensaje1Text}
            </pre>
          </div>

          {/* Plantilla 2: Recordatorio Preventivo de Integridad */}
          <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px', borderLeft: '4px solid #f59e0b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>⏰</span>
                  <h4 style={{ margin: 0, color: '#fbbf24', fontSize: '1.15rem' }}>
                    Plantilla 2: Recordatorio Preventivo de Integridad (Viernes de C2 — 12:00 PM)
                  </h4>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Neuromarketing Ético: Sustituye el estrés de la penalización de «Palabra Rota» por un llamado preventivo al orden y cuidado de su palabra.
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={() => copyToClipboard(mensaje2Text, 'wa2')}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  {copiedKey === 'wa2' ? '✅ ¡Copiado!' : '📋 Copiar Mensaje'}
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(mensaje2Text)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: '#25D366',
                    color: '#0d152d',
                    padding: '0.5rem 0.9rem',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '0.85rem',
                    textDecoration: 'none'
                  }}
                >
                  💬 Abrir WhatsApp
                </a>
              </div>
            </div>

            <pre style={{
              background: 'rgba(15, 23, 42, 0.8)',
              padding: '1.25rem',
              borderRadius: '10px',
              color: '#e2e8f0',
              fontSize: '0.9rem',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
              fontFamily: 'inherit',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              {mensaje2Text}
            </pre>
          </div>

        </div>
      )}

      {/* TAB 4: CHECKLIST DE IMPECABILIDAD */}
      {activeTab === 'checklist' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Barra de Auditoría de Impecabilidad */}
          <div className="glass-panel" style={{
            background: 'rgba(28, 37, 65, 0.7)',
            padding: '1.75rem',
            borderRadius: '14px',
            borderLeft: auditScore === 100 ? '5px solid #10b981' : '5px solid #f59e0b'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: 0, color: '#f8fafc', fontSize: '1.3rem' }}>
                  Checklist de Impecabilidad del Enrolador Narrativo
                </h3>
                <p style={{ margin: '0.3rem 0 0 0', color: '#94a3b8', fontSize: '0.95rem' }}>
                  Antes de realizar una llamada o entablar una conversación, toda persona en modo aprendiz debe auditar su propia fisionomía frente a esta rúbrica de integridad.
                </p>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase' }}>Nivel de Calibración</div>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: auditScore === 100 ? '#10b981' : auditScore >= 60 ? '#f59e0b' : '#ef4444'
                }}>
                  {auditScore}%
                </div>
              </div>
            </div>

            {/* Barra de progreso */}
            <div style={{ height: '8px', background: 'rgba(0,0,0,0.3)', borderRadius: '4px', overflow: 'hidden', marginBottom: '1rem' }}>
              <div style={{
                height: '100%',
                width: `${auditScore}%`,
                background: auditScore === 100 ? 'linear-gradient(90deg, #10b981, #34d399)' : 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                transition: 'width 0.4s ease'
              }} />
            </div>

            {auditScore === 100 ? (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '0.75rem 1rem', borderRadius: '8px', color: '#34d399', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🛡️</span>
                <span><strong>¡Fisionomía de Alto Rendimiento Impecable!</strong> Tu presencia ontológica está limpia de ego, libre de simpatía al drama y lista para sostener al creador en la llamada.</span>
              </div>
            ) : (
              <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '0.75rem 1rem', borderRadius: '8px', color: '#fbbf24', fontSize: '0.85rem' }}>
                Audita cada uno de los 5 puntos antes de iniciar la gestión telefónica para garantizar que no haya coacción ni culpa.
              </div>
            )}
          </div>

          {/* Rúbrica de 5 Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            {[
              {
                id: 'item1',
                title: '1. Cero Simpatía al Drama',
                pregunta: '¿Estoy escuchando la justificación del participante con lástima, o lo estoy sosteniendo en su grandeza y capacidad de resolver?',
                rigor: 'La simpatía debilita al participante; la compasión y el rigor lo empoderan.',
                icon: '🦅'
              },
              {
                id: 'item2',
                title: '2. Datos vs. Interpretaciones',
                pregunta: '¿La objeción del participante es un hecho duro comprobable o es una interpretación basada en el miedo?',
                rigor: 'Hecho duro: «no tengo saldo disponible en esta tarjeta». Interpretación: «es que nunca voy a poder pagar eso». No compres historias.',
                icon: '📊'
              },
              {
                id: 'item3',
                title: '3. Respeto Absoluto a la Autonomía',
                pregunta: '¿Estoy permitiendo que la decisión final y el plan de abono nazcan de la elección voluntaria del participante?',
                rigor: 'Erradicación total de argumentos de culpa, chantaje o escasez falsa. El estiramiento es voluntario.',
                icon: '🕊️'
              },
              {
                id: 'item4',
                title: '4. Fisionomía de Voz y Corporalidad',
                pregunta: 'Aunque la conversación sea telefónica o por chat, ¿mi postura física refleja la fisionomía de un líder cuántico?',
                rigor: 'Espalda erguida, sonrisa telefónica, tono firme y amoroso. La vibración corporal se transmite a través del auricular.',
                icon: '🧘'
              },
              {
                id: 'item5',
                title: '5. Trazabilidad en Nodus',
                pregunta: '¿He registrado de manera limpia y sin suposiciones cada acuerdo de pago, fecha límite y avance de Futuro Imposible?',
                rigor: 'Garantizar que la Gerencia de Sede cuente con datos de control impecables en Causa OS.',
                icon: '💾'
              }
            ].map(item => (
              <div
                key={item.id}
                onClick={() => handleToggleCheck(item.id)}
                style={{
                  background: checkedItems[item.id] ? 'rgba(16, 185, 129, 0.12)' : 'rgba(28, 37, 65, 0.6)',
                  border: checkedItems[item.id] ? '1px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <input
                  type="checkbox"
                  checked={checkedItems[item.id]}
                  onChange={() => {}} // controlado por onClick del padre
                  style={{
                    width: '20px',
                    height: '20px',
                    accentColor: '#10b981',
                    marginTop: '0.2rem',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                    <strong style={{ color: checkedItems[item.id] ? '#34d399' : '#f8fafc', fontSize: '1rem' }}>
                      {item.title}
                    </strong>
                  </div>
                  <p style={{ margin: '0 0 0.4rem 0', color: '#cbd5e1', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {item.pregunta}
                  </p>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic', display: 'block' }}>
                    Rigor: {item.rigor}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button
              onClick={() => setCheckedItems({ item1: false, item2: false, item3: false, item4: false, item5: false })}
              className="btn-secondary"
              style={{ fontSize: '0.85rem' }}
            >
              🔄 Resetear Auditoría
            </button>
            <button
              onClick={() => setCheckedItems({ item1: true, item2: true, item3: true, item4: true, item5: true })}
              className="btn-primary"
              style={{ fontSize: '0.85rem' }}
            >
              ✅ Marcar Todo Calibrado
            </button>
          </div>
        </div>
      )}

      {/* TAB 5: MANUAL OFICIAL COMPLETO */}
      {activeTab === 'manual' && (
        <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '2rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ margin: 0, color: '#f59e0b', fontSize: '1.3rem' }}>
                Documento Oficial Fuente: brandscript-y-guiones-mj-v1.md
              </h3>
              <p style={{ margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                Versión íntegra e inmutable cargada desde el repositorio de CREAR PODER SIN LÍMITES 2026.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(`# MANUAL DE AUTOENTRENAMIENTO NARRATIVO: BRANDSCRIPT Y GUIONES DE COMUNICACIÓN EMPÁTICA
## EDICIÓN V1.0 — CREAR PODER SIN LÍMITES 2026

Este manual constituye la herramienta de autoentrenamiento para que las personas en modo aprendiz desarrollen su capacidad de comunicación empática y mentoría bajo el **StoryBrand Framework (SB7)** y el **Neuromarketing Ético**. Su propósito es estructurar mensajes de alto impacto y conversaciones conscientes que reduzcan el esfuerzo y sacrificio percibidos por los graduados de Capítulo Dos (C2), guiándolos hacia un compromiso voluntario y de alta integridad con la **Maestría del Juego (MJ)** de 90 días.

---

## 1. EL MARCO ONTOLÓGICO: EL VIAJE DEL HÉROE EN LA MAESTRÍA
En la cultura de alto rendimiento de **Crear Poder Sin Límites (CPSL)**, no operamos desde la venta tradicional ni desde el empuje comercial invasivo. Operamos desde la **creación de contexto**. 

*   **El Participante es el Héroe:** El graduado de Capítulo Dos (C2) es el único protagonista de su propia película. Él es quien debe enfrentar a sus "dragones cotidianos" (la inercia, la zona de confort, el escepticismo de su entorno).
*   **La Organización es el Guía:** En modo aprendiz no buscamos protagonismo. Nuestro propósito es encarnar el arquetipo del Mentor empático (el Guía), proveyendo escucha activa, presencia ontológica, un plan simplificado y un llamado consciente a la acción.
*   **El Combustible es la Elección Voluntaria:** El enrolamiento es un acto de amor y estiramiento. Todo acuerdo financiero o de asistencia debe nacer de la libre elección del participante, erradicando cualquier forma de coacción, manipulación o culpa.

---

## 2. EL BRANDSCRIPT OFICIAL DE MAESTRÍA DEL JUEGO (SB7-MJ)

| Elemento SB7 | Definición Narrativa en MJ | Traducción en Lenguaje CPSL |
| :--- | :--- | :--- |
| **1. Un Personaje (El Héroe)** | Graduado de Capítulo Dos (C2). | Un líder que ha despertado su poder en sala y busca materializarlo en la fisionomía de su vida diaria. |
| **2. Tiene un Problema** | El "Efecto Lunes" y el entorno inercial. | **Externo:** Volver a un entorno que no comprende su transformación.<br>**Interno:** Miedo al auto-sabotaje y a quedarse solo.<br>**Filosófico:** Es inaceptable regresar a vivir una vida promedio tras haber conocido su grandeza. |
| **3. Encuentra un Guía** | La comunidad en modo aprendiz y la Plataforma Nodus. | Un mentor empático (que ya recorrió los 90 días) y con autoridad ética (respaldado por la telemetría de Nodus). |
| **4. Que le da un Plan** | La estructura de los 90 días de MJ. | **Paso 1:** Declara tu Futuro Imposible (FI).<br>**Paso 2:** Entrena en Integridad (28 Entrenamientos Sustentables).<br>**Paso 3:** Conquista "El Viaje" y gradúate en Gratitud. |
| **5. Y lo llama a la Acción** | El registro y la inscripción voluntaria. | **CTA Directo:** Registrarse en Nodus en la mesa de conversión del domingo.<br>**CTA Transicional:** Agendar sesión de calibración de FI de 15 minutos. |
| **6. Que evita el Fracaso** | Evitar el marchitamiento de la palabra. | Caer de vuelta en la anestesia de la víctima ("la arena"), perdiendo el impulso de su Breakthrough de jueves. |
| **7. Y termina en Éxito** | Convertirse en un Líder IMO. | Vivir en coherencia, manifestando abundancia física, emocional y financiera como una consecuencia natural de su Ser. |

---

## 3. GUIONES DE CONVERSACIÓN EMPÁTICA
*Nota técnica: Aplica la premisa de Neuromarketing de "Calmar al Perro Guardián" (Reptil) en los primeros 15 segundos mediante la empatía y el respeto a su tiempo.*

### Escenario A: El graduado de C2 indeciso o con miedo al "efecto lunes"
*   **Paso 1: Apertura y Conexión (Calmar al Reptil):**
    > *"Hola [Nombre del Participante], te saluda [Tu Nombre], en modo aprendiz y acompañamiento. Qué gusto saludarte. Te llamo brevemente, ¿estás en un espacio cómodo de 3 minutos para conversar?"*
*   **Paso 2: Validación de fisionomía:**
    > *"Aún vibra en mí el espacio del domingo de Capítulo Dos. Quiero reconocer la fisonomía y la entrega que mostraste en tu Breakthrough. Vi a un creador absoluto en la sala. ¿Cómo se ha sentido apagar el micrófono y regresar a la rutina estos dos días?"*
*   **Paso 3: Identificación del Problema Interno (StoryBrand):**
    > *[Escuchar activamente sin interrumpir]. "Es completamente natural, [Nombre]. La inercia del día a día es fuerte y volver al 'mundo real' sin una estructura puede sentirse como tratar de nadar contracorriente en la arena. Sabes que tienes el potencial, pero sostener la autodisciplina solo es sumamente retador."*
*   **Paso 4: Presentación del Plan de 3 Pasos:**
    > *"Por eso creamos la Maestría del Juego de 90 días. No es más teoría; es la pista de entrenamiento física para consolidar tu resultado. El plan es muy sencillo: primero, declaramos un Futuro Imposible en salud, finanzas o relaciones; segundo, entrenamos diariamente en integridad con el soporte del contenedor y la Plataforma Nodus; y tercero, nos graduamos juntos en Gratitud. Tú pones la visión, nosotros la estructura de bajo riesgo."*
*   **Paso 5: Llamado a la Acción Directo (CTA):**
    > *"[Nombre], tu palabra de jueves sigue viva. ¿Eliges sostener tu estiramiento y dar el paso a tu Maestría este fin de semana, o vas a permitir que la inercia del lunes tome las decisiones por ti?"*

---

### Escenario B: Tratamiento ético ante la objeción "No tengo dinero"
*Rigor de Causa OS: No debatir el dinero como un problema absoluto; elevar el valor percibido usando la Ecuación de Valor (Hormozi) para reencuadrar la inversión en el Ser.*

*   **El Enfoque Ontológico:**
    *   **Hecho objetivo:** El dinero es una variable de prioridades.
    *   **Acción incorrecta (Manipulación):** *"Si no entras, es porque no te amas"* o *"Consíguete una tarjeta prestada si de verdad te importa tu familia"*. (Esto genera rechazo y quiebra la seguridad psicológica).
    *   **Acción correcta (Coaching Ético):** Separar el hecho de la interpretación y explorar soluciones de bajo riesgo.
*   **Guión de Aplicación:**
    > **Participante:** *"De verdad quiero hacer la Maestría, pero el dinero es mi límite en este momento. No tengo cómo cubrir la inversión."*
    >
    > **Mentor (Guía):** *"Reconozco tu honestidad, [Nombre]. El dinero es un factor real. Si dejamos la inversión a un lado por un instante... en tu corazón, ¿la Maestría representa un 'sí' rotundo para tu vida, o tienes alguna duda sobre el valor que este entrenamiento aportará a tus metas?"*
    >
    > **Participante:** *"No, el entrenamiento sé que es increíble y me sirve, es solo que físicamente no tengo el dinero hoy."*
    >
    > **Mentor (Causa OS):** *"Perfecto. Gracias por aclarar que la fisonomía del entrenamiento es un 'sí' para ti. En la cultura de Crear, operamos desde la Causa: si tú eres el creador de tu realidad, el dinero es una circunstancia a diseñar, no un límite inamovible. Si la Plataforma Nodus nos permite estructurar un plan de abono de bajo riesgo y pasos progresivos que se adapte a tus flujos actuales, ¿qué opciones ves viables para generar tu primer aporte de reserva antes de que cerremos el registro este viernes?"*
    >
    > **Participante:** *"Podría dar una parte este viernes y el saldo en dos cuotas los fines de semana de módulo."*
    >
    > **Mentor:** *"Excelente. Eso es un creador en acción. Vamos a registrar ese plan de pago en Nodus para activar tu 'Ticket Verde' de inmediato. Bienvenido al juego de los 90 días."*

---

## 4. PLANTILLAS DE MENSAJES DE WHATSAPP DE ALTO IMPACTO

### Mensaje 1: Bienvenida e Invitación Inmediata (Post-Graduación C2)
*Diseñado bajo el principio de "Unidad" de Cialdini para generar sentido de pertenencia instantáneo.*

\`\`\`text
¡Felicidades, Creador! 🦅✨

Aún resuena en la sede la fisonomía y la fuerza de tu palabra declarada este fin de semana en Capítulo Dos. Has salido de "la arena" y hoy tienes en tus manos la posibilidad de diseñar tu propio destino.

El lunes ha llegado, y con él, la oportunidad de elegir: ¿volver a la inercia cotidiana o entrenar para consolidar tu Breakthrough?

La comunidad de personas en modo aprendiz y Maestría del Juego ya está lista para recibirte en el contenedor de los 90 días. Tu espacio de estiramiento está guardado.

Paso 1: Ingresa a tu App Nodus 📱
Paso 2: Agenda tu sesión de calibración de Futuro Imposible (FI) de 15 minutos aquí: [Enlace_Calendly]
Paso 3: Sostiene tu palabra.

Sostener la fisionomía del Ser es el juego de los grandes. Nos vemos en la cancha. 

Atentamente,
Equipo de Mentoría Empática de [Sede]
CREAR PODER SIN LÍMITES 2026.
\`\`\`

---

### Mensaje 2: Recordatorio Preventivo de Integridad (Viernes de C2 — 12:00 PM)
*Neuromarketing Ético: Sustituye el estrés de la penalización de "Palabra Rota" por un llamado preventivo al orden y cuidado de su palabra.*

\`\`\`text
Hola, [Nombre] 👋

Te saludamos desde la sede. Hoy es viernes de Capítulo Dos, un día clave para cuidar el contenedor de integridad que declaraste el jueves por la noche.

Para asegurar que tu ingreso al bloque vivencial de las 15:00 PM sea fluido y libre de distracciones logísticas:

📌 Tu estado actual en Nodus requiere conciliación de caja.
⏰ El cierre automático de registros de la plataforma se ejecutará a las 14:00 PM.

Queremos cuidar tu experiencia y tu palabra. Por favor, acércate a la mesa externa de registro antes de la hora límite o envíanos tu comprobante digital por esta vía para validar tu "Ticket Verde" en el sistema.

Si tienes algún quiebre técnico o financiero de última hora, avísanos de inmediato para diseñar juntos una solución oportuna antes del cierre.

¡Sostener tu palabra es tu mayor poder! Nos vemos en sala. 🛡️
CREAR PODER SIN LÍMITES
\`\`\`

---

## 5. CHECKLIST DE IMPECABILIDAD DEL ENROLADOR NARRATIVO

Antes de realizar una llamada o entablar una conversación, toda persona en modo aprendiz debe auditar su propia fisonomía frente a esta rúbrica de integridad:

*   [ ] **Cero Simpatía al Drama:** ¿Estoy escuchando la justificación del participante con lástima, o lo estoy sosteniendo en su grandeza y capacidad de resolver? (La simpatía debilita al participante; la compasión y el rigor lo empoderan).
*   [ ] **Datos vs. Interpretaciones:** ¿La objeción del participante es un hecho duro comprobable (ej. "no tengo saldo disponible en esta tarjeta") o es una interpretación basada en el miedo (ej. "es que nunca voy a poder pagar eso")?
*   [ ] **Respeto Absoluto a la Autonomía:** ¿Estoy permitiendo que la decisión final y el plan de abono nazcan de la elección voluntaria del participante, o lo estoy presionando usando argumentos de culpa o escasez falsa?
*   [ ] **Fisonomía de Voz y Corporalidad:** Aunque la conversación sea telefónica o por chat, ¿mi postura física refleja la fisonomía de un creador (espalda erguida, sonrisa telefónica, tono firme y amoroso)?
*   [ ] **Trazabilidad en Nodus:** ¿He registrado de manera limpia y sin suposiciones cada acuerdo de pago, fecha límite y avance de Futuro Imposible en la plataforma para contar con datos de control impecables?

---
*Este manual constituye el estándar oficial de comunicación empática y autoentrenamiento de CREAR PODER SIN LÍMITES.*
*Edición 2026 | Autoentrenamiento para Personas en Modo Aprendiz.*
`, 'markdownFull')}
              className="btn-primary"
              style={{ fontSize: '0.85rem' }}
            >
              {copiedKey === 'markdownFull' ? '✅ ¡Markdown Copiado!' : '📥 Copiar Markdown Completo'}
            </button>
          </div>

          <div style={{
            background: 'rgba(15, 23, 42, 0.8)',
            padding: '1.5rem',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            lineHeight: '1.8',
            color: '#cbd5e1'
          }}>
            <h2 style={{ color: '#f59e0b', fontSize: '1.4rem', borderBottom: '1px solid rgba(245, 158, 11, 0.3)', paddingBottom: '0.5rem' }}>
              MANUAL DE AUTOENTRENAMIENTO: BRANDSCRIPT Y GUIONES DE COMUNICACIÓN EMPÁTICA
            </h2>
            <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
              EDICIÓN V1.0 — CREAR PODER SIN LÍMITES 2026
            </p>
            <p>
              Este manual constituye la herramienta definitiva para que las personas en modo aprendiz desarrollen una comunicación consciente bajo el <strong>StoryBrand Framework (SB7)</strong> y el <strong>Neuromarketing Ético</strong>. Su propósito es estructurar mensajes de alto impacto y guiones formativos que reduzcan el esfuerzo y sacrificio percibidos por los graduados de Capítulo Dos (C2), guiándolos hacia un compromiso voluntario y de alta integridad con la <strong>Maestría del Juego (MJ)</strong> de 90 días.
            </p>

            <h3 style={{ color: '#60a5fa', marginTop: '1.5rem' }}>1. EL MARCO ONTOLÓGICO: EL VIAJE DEL HÉROE EN LA MAESTRÍA</h3>
            <p>
              En la cultura de alto rendimiento de <strong>CREAR PODER SIN LÍMITES (CPSL)</strong>, no operamos desde la venta tradicional ni desde el empuje comercial invasivo. Operamos desde la <strong>creación de contexto</strong>:
            </p>
            <ul>
              <li><strong>El Participante es el Héroe:</strong> El graduado de Capítulo Dos (C2) es el único protagonista de su propia película. Él es quien debe enfrentar a sus «dragones cotidianos» (la inercia, la zona de confort, el escepticismo de su entorno).</li>
              <li><strong>La Organización es el Guía:</strong> En modo aprendiz no buscamos protagonismo. Nuestro propósito es encarnar el arquetipo del Mentor empático (el Guía), proveyendo empatía, autoridad ética, un plan simplificado y un llamado consciente a la acción.</li>
              <li><strong>El Combustible es la Elección Voluntaria:</strong> El enrolamiento es un acto de amor y estiramiento. Todo acuerdo financiero o de asistencia debe nacer de la libre elección del participante, erradicando cualquier forma de coacción, manipulación o culpa.</li>
            </ul>

            <h3 style={{ color: '#a78bfa', marginTop: '1.5rem' }}>2. EL BRANDSCRIPT OFICIAL DE MAESTRÍA DEL JUEGO (SB7-MJ)</h3>
            <p>
              Estructura el mapa de 7 puntos que guía al participante en su tránsito hacia el ciclo avanzado de 90 días, erradicando el miedo al «efecto lunes».
            </p>

            <h3 style={{ color: '#34d399', marginTop: '1.5rem' }}>3. ESTÁNDAR DE RIGOR</h3>
            <p>
              Toda comunicación telefónica o digital debe cumplir estrictamente con el principio ontológico de no manipulación y respeto irrestricto a la autonomía del ser.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
