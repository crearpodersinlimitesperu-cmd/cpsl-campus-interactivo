import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function BrandscriptGuionesMJ() {
  const [activeTab, setActiveTab] = useState('sb7'); // 'sb7' | 'guiones' | 'whatsapp' | 'checklist' | 'manual'
  const [copiedKey, setCopiedKey] = useState(null);

  // Variables dinámicas para el generador de mensajes ejecutivos
  const [waName, setWaName] = useState('Carlos Mendoza');
  const [waCargo, setWaCargo] = useState('Director de Operaciones');
  const [waManager, setWaManager] = useState('Dirección de Estrategia');
  const [waLink, setWaLink] = useState('https://interrupcion.app/calibracion-estrategica');

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

  // Plantillas formateadas de Comunicación Ejecutiva (Teams / Slack / WhatsApp)
  const mensaje1Text = `Estimado(a) ${waName},

Tras la sesión de alineación estratégica, hemos consolidado los compromisos clave para la gestión de este trimestre. 

El mayor desafío no es el diseño del plan, sino superar la inercia operacional y los sesgos de confirmación que suelen desviar la ejecución en los primeros 14 días.

Para asegurar la continuidad del estándar acordado:
1. Accede a tu entorno en el Sistema Interrupción.
2. Agenda tu sesión de Calibración Estratégica (15 min) aquí: ${waLink}
3. Revisa la matriz de acuerdos inmutables de tu unidad de negocio.

La consistencia en la ejecución es la única ventaja competitiva sostenible.

Atentamente,
${waManager}
Sistema Interrupción — Alto Rendimiento y Neurociencia Decisional.`;

  const mensaje2Text = `Estimado(a) ${waName},

Te contactamos desde la Dirección de Seguimiento Operativo. De cara al cierre del ciclo de reporte y evaluación de impacto de esta semana:

📌 Tu registro de compromisos y métricas de fricción cognitiva en la plataforma requiere validación final.
⏰ El cierre de la ventana de auditoría se ejecutará a las 17:00 hrs.

Para garantizar que el reporte consolidado de tu división refleje con exactitud la efectividad del plan y evitar distorsiones retrospectivas (Efecto Mandela en comités):

Por favor, confirma tus métricas en el sistema antes de la hora límite o notifícanos cualquier bloqueo técnico o de recursos para diseñar la contramedida oportuna.

El rigor en los datos sustenta la credibilidad estratégica.

Dirección de Desempeño y Estrategia
Sistema Interrupción`;

  // Matriz SB7 Oficial para Alta Dirección
  const sb7Elements = [
    {
      num: 1,
      titulo: '1. Un Personaje (El Héroe)',
      definicion: 'El Gerente Regional o Tomador de Decisiones.',
      lenguajeCpsl: 'Un líder corporativo responsable de resultados medibles que enfrenta incertidumbre, volatilidad de mercado y resistencia interna al cambio.',
      color: '#3b82f6',
      icon: '👤'
    },
    {
      num: 2,
      titulo: '2. Tiene un Problema',
      definicion: 'Fricción cognitiva e inercia organizacional.',
      lenguajeCpsl: '• Externo: Metas agresivas, presión de directorio y volatilidad económica.\n• Interno: Fatiga decisional, parálisis por análisis y desgaste en alineación de equipos.\n• Filosófico: Es inaceptable operar empresas de alto calibre con modelos mentales reactivos del siglo pasado.',
      color: '#ef4444',
      icon: '⚡'
    },
    {
      num: 3,
      titulo: '3. Encuentra un Guía',
      definicion: 'El Marco Metodológico de Interrupción.',
      lenguajeCpsl: 'Un marco de referencia riguroso sustentado en neurobiología del comportamiento, economía conductual (Kahneman & Tversky) y telemetría inmutable de desempeño.',
      color: '#8b5cf6',
      icon: '🧭'
    },
    {
      num: 4,
      titulo: '4. Que le da un Plan',
      definicion: 'Estructura de 3 Fases de Despliegue.',
      lenguajeCpsl: 'Fase 1: Interrupción del automatismo reactivo y desactivación amigdalina.\nFase 2: Aplicación de la Ecuación de Valor para reducir costos de fricción.\nFase 3: Auditoría inmutable de acuerdos y trazabilidad de ejecución.',
      color: '#10b981',
      icon: '📋'
    },
    {
      num: 5,
      titulo: '5. Y lo llama a la Acción',
      definicion: 'Compromiso explícito y voluntario.',
      lenguajeCpsl: '• Llamado Directo: Implementar el protocolo de acuerdos innegociables en el comité directivo.\n• Llamado Transicional: Realizar un diagnóstico de sesgos cognitivos y calibración de estado.',
      color: '#f59e0b',
      icon: '🎯'
    },
    {
      num: 6,
      titulo: '6. Que evita el Fracaso',
      definicion: 'Mitigar la complacencia y la distorsión colectiva.',
      lenguajeCpsl: 'Evitar la trampa del Efecto Mandela directivo (recordar consensos ilusorios), la erosión del margen operativo y la pérdida de tracción estratégica frente a competidores ágiles.',
      color: '#ec4899',
      icon: '🛡️'
    },
    {
      num: 7,
      titulo: '7. Y culmina en Éxito',
      definicion: 'Organización Antifrágil y Claridad Ejecutiva.',
      lenguajeCpsl: 'Líderes que operan desde la Agencia Radical (autoría incondicional), gobernanza transparente con datos duros y una cultura empresarial capaz de prosperar en entornos de alta presión.',
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
                ESTÁNDAR DE ALTA DIRECCIÓN V1.0
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
                NEUROCIENCIA & NEGOCIACIÓN ESTRATÉGICA
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
              Manual de Comunicación Estratégica, Negociación y Resistencia al Cambio
            </h1>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '1rem', maxWidth: '850px', lineHeight: '1.6' }}>
              Metodología ejecutiva para directores y gerentes regionales diseñada bajo el <strong>StoryBrand Framework (SB7)</strong>, la <strong>Neurobiología de la Negociación</strong> y la <strong>Economía Conductual</strong> para alinear equipos, reducir fricción cognitiva y erradicar la complacencia.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <NavLink to="/ruta" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
              🧭 Ruta Estratégica
            </NavLink>
            <NavLink to="/glosario" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', borderColor: '#38bdf8', color: '#38bdf8' }}>
              📖 Glosario Oficial
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
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>El Protagonista</div>
              <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '0.95rem' }}>Gerente Regional</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(139, 92, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              🧭
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>El Marco Guía</div>
              <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '0.95rem' }}>Sistema Interrupción</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              ⚖️
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>El Principio Clave</div>
              <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '0.95rem' }}>Acuerdo Voluntario</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              🎯
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Objetivo Final</div>
              <div style={{ fontWeight: '700', color: '#f8fafc', fontSize: '0.95rem' }}>Antifragilidad & Tracción</div>
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
          { id: 'sb7', label: '🗺️ BrandScript SB7 Directivo', badge: '7 Elementos' },
          { id: 'guiones', label: '📞 Guiones de Negociación', badge: 'Escenarios A & B' },
          { id: 'whatsapp', label: '💬 Mensajería Ejecutiva', badge: '2 Plantillas' },
          { id: 'checklist', label: '🛡️ Checklist de Rigor', badge: `${auditScore}%` },
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

      {/* TAB 1: BRANDSCRIPT SB7 DIRECTIVO */}
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
              1. El Marco Ontológico: El Viaje del Líder hacia la Antifragilidad
            </h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: '0 0 1rem 0' }}>
              En la cultura de alto rendimiento corporativo, no operamos desde la persuasión superficial ni la coacción burocrática. Operamos desde la <strong>creación de contexto y claridad deliberada</strong>:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <strong style={{ color: '#60a5fa', display: 'block', marginBottom: '0.35rem' }}>🦸 El Directivo es el Protagonista</strong>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  El gerente regional es el único responsable de la ejecución en su territorio. Él enfrenta los sesgos organizacionales, la inercia del mercado y la complacencia de los procesos heredados.
                </span>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <strong style={{ color: '#c084fc', display: 'block', marginBottom: '0.35rem' }}>🧭 La Metodología es el Guía</strong>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  El marco de Interrupción no impone dogmas; provee lentes epistemológicos y herramientas neurocognitivas para desactivar la reactividad y estructurar planes de bajo riesgo y alto retorno.
                </span>
              </div>

              <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <strong style={{ color: '#34d399', display: 'block', marginBottom: '0.35rem' }}>🕊️ Acuerdo Consciente</strong>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.6' }}>
                  La alineación genuina nace del acuerdo voluntario y la responsabilidad incondicional (Agencia Radical). La imposición genera resistencia pasiva; la claridad ontológica genera tracción inquebrantable.
                </span>
              </div>
            </div>
          </div>

          {/* Matriz 7 Elementos SB7 */}
          <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#f8fafc', fontSize: '1.3rem' }}>
              2. Matriz del BrandScript Oficial para Alta Dirección (SB7)
            </h3>
            <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Estructura secuencial del proceso decisional ante transformaciones corporativas:
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

      {/* TAB 2: GUIONES DE NEGOCIACIÓN */}
      {activeTab === 'guiones' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Banner de Neurobiología Decisional */}
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
                Neurobiología de la Negociación: Desactivar la Alarma Amigdalina
              </strong>
              <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                En situaciones de negociación o conversaciones de rendimiento, la amígdala interpreta la crítica o el cambio como una amenaza de estatus (David Rock, SCARF). Desactiva la resistencia validando la perspectiva ajena, modulando la prosodia y haciendo preguntas abiertas reflexivas (Kahneman / Chris Voss).
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
                Alineación Estratégica ante Resistencia al Cambio y Fricción de Equipo
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
                Tratamiento Racional de Objeción «No hay presupuesto / recursos»
              </div>
            </button>
          </div>

          {/* Contenido Escenario A */}
          {selectedEscenario === 'A' && (
            <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ margin: 0, color: '#60a5fa', fontSize: '1.3rem' }}>
                    Escenario A: Desmantelamiento de la Inercia y Reencuadre de Compromisos
                  </h3>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                    Protocolo de 5 pasos para reenfocar directores o gerentes atrapados en la urgencia operativa diaria.
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(`Paso 1: "Hola [Nombre], te agradezco el espacio. Sé que la agenda operativa es densa. ¿Podemos tomarnos 3 minutos para revisar la dirección estratégica sin la urgencia del día a día?"
Paso 2: "Revisando el desempeño del último comité, reconozco el esfuerzo de tu división por mantener los números en un contexto complejo. Sin embargo, observo que la fricción interna está frenando la velocidad de entrega. ¿Cómo percibes el impacto de esta inercia en tus resultados?"
Paso 3: "Es comprensible. La tendencia natural de toda estructura corporativa es volver a los hábitos conocidos cuando la presión aumenta (sesgo de statu quo). Pero tú y yo sabemos que mantener el proceso actual nos costará el cumplimiento del objetivo anual."
Paso 4: "El marco de Interrupción nos ofrece una alternativa ágil: primero, aislamos la fricción crítica; segundo, establecemos acuerdos inmutables de ejecución sin burocracia añadida; y tercero, auditamos el avance semanalmente con datos objetivos. Tú lideras la operación, nosotros aportamos la estructura de gobernanza."
Paso 5: "[Nombre], el objetivo sigue en juego. ¿Optamos por intervenir el proceso ahora de forma proactiva, o dejaremos que la inercia del día a día decida el resultado del trimestre por nosotros?"`, 'guionA')}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  {copiedKey === 'guionA' ? '✅ ¡Copiado!' : '📋 Copiar Protocolo A'}
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Paso 1 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #3b82f6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#60a5fa' }}>Paso 1: Apertura y Contrato de Tiempo (Baja Fricción)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>0 - 20 seg</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #3b82f6' }}>
                    «Hola [Nombre], te agradezco el espacio. Sé que la agenda operativa es densa. ¿Podemos tomarnos 3 minutos para revisar la dirección estratégica sin la urgencia del día a día?»
                  </blockquote>
                </div>

                {/* Paso 2 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #8b5cf6' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#a78bfa' }}>Paso 2: Reconocimiento Objetivo de Hechos (Desactivar Amenaza)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Diagnóstico</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #8b5cf6' }}>
                    «Revisando el desempeño del último comité, reconozco el esfuerzo de tu división por mantener los números en un contexto complejo. Sin embargo, observo que la fricción interna está frenando la velocidad de entrega. ¿Cómo percibes el impacto de esta inercia en tus resultados?»
                  </blockquote>
                </div>

                {/* Paso 3 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #ef4444' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#f87171' }}>Paso 3: Identificación del Costo de la Inacción (Aversión a la Pérdida)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#f87171', background: 'rgba(239, 68, 68, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Economía Conductual</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #ef4444' }}>
                    «Es comprensible. La tendencia natural de toda estructura corporativa es volver a los hábitos conocidos cuando la presión aumenta (sesgo de statu quo). Pero tú y yo sabemos que mantener el proceso actual nos costará el cumplimiento del objetivo anual.»
                  </blockquote>
                </div>

                {/* Paso 4 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #10b981' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#34d399' }}>Paso 4: Presentación del Plan de 3 Fases (Ecuación de Valor)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Bajo Riesgo</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #10b981' }}>
                    «El marco de Interrupción nos ofrece una alternativa ágil: primero, aislamos la fricción crítica; segundo, establecemos acuerdos inmutables de ejecución sin burocracia añadida; y tercero, auditamos el avance semanalmente con datos objetivos. Tú lideras la operación, nosotros aportamos la estructura de gobernanza.»
                  </blockquote>
                </div>

                {/* Paso 5 */}
                <div style={{ background: 'rgba(15, 23, 42, 0.7)', borderRadius: '10px', padding: '1.25rem', borderLeft: '4px solid #f59e0b' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#fbbf24' }}>Paso 5: Llamado a la Decisión Ejecutiva (Elección Consciente)</strong>
                    <span style={{ fontSize: '0.75rem', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Agencia Radical</span>
                  </div>
                  <blockquote style={{ margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.25)', borderRadius: '6px', color: '#e2e8f0', fontStyle: 'italic', borderLeft: '3px solid #f59e0b' }}>
                    «[Nombre], el objetivo sigue en juego. ¿Optamos por intervenir el proceso ahora de forma proactiva, o dejaremos que la inercia del día a día decida el resultado del trimestre por nosotros?»
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
                    Escenario B: Tratamiento Racional de Objeción «No hay presupuesto / recursos»
                  </h3>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                    Aplicación de la Ecuación de Valor (Hormozi) y el Costo de Oportunidad de la Inacción en Finanzas Corporativas.
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(`Directivo: "Entiendo el beneficio del programa de Interrupción, pero en este momento no tenemos presupuesto asignado para nuevas iniciativas."

Estratega (Guía): "Comprendo el celo presupuestal, [Nombre]; en un entorno volátil, proteger el flujo de caja es la primera prioridad. Permíteme hacerte una pregunta honesta: dejando de lado la partida contable por un segundo... ¿la falta de alineación y la lentitud decisional de los mandos medios representan un riesgo crítico para tu meta de este año, o consideras que el modelo actual puede absorber el desafío sin cambios?"

Directivo: "No, claramente el equipo necesita alinearse y elevar el estándar de ejecución; la preocupación es justificar el retorno de inversión ante el comité de finanzas."

Estratega (Agencia Radical & Ecuación de Valor): "Excelente. La discusión entonces no es si se necesita la intervención, sino cómo demostrar certidumbre de retorno. Si calculamos el costo de un retraso de 3 semanas en el lanzamiento de tu iniciativa clave frente a la inversión requerida, la inacción cuesta 5 veces más. Además, podemos estructurar un despliegue por fases enfocado en victorias rápidas cuantificables antes del desembolso integral. ¿Tiene sentido evaluar esta propuesta de bajo riesgo en una sesión de 20 minutos con Finanzas?"

Directivo: "Bajo ese esquema de hitos medibles, sí es viable revisarlo."

Estratega: "Perfecto. Agendemos la sesión técnica para calibrar el caso de negocio."`, 'guionB')}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  {copiedKey === 'guionB' ? '✅ ¡Copiado!' : '📋 Copiar Protocolo B'}
                </button>
              </div>

              {/* Comparativa Ética: Presión Manipulativa vs Negociación Racional */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '10px', padding: '1rem' }}>
                  <strong style={{ color: '#f87171', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    ⛔ Enfoque Inadecuado (Presión Emocional)
                  </strong>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#fca5a5', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <li>«Si no inviertes, estás demostrando falta de visión».</li>
                    <li>Forzar decisiones sin sustento de retorno financiero.</li>
                    <li><em>Efecto:</em> Genera rechazo defensivo, rompe la confianza y desacredita la autoridad profesional.</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', padding: '1rem' }}>
                  <strong style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    ✅ Enfoque Ejecutivo Riguroso (Economía Conductual)
                  </strong>
                  <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#a7f3d0', fontSize: '0.85rem', lineHeight: '1.6' }}>
                    <li>Aislar el hecho objetivo contable de la necesidad estratégica.</li>
                    <li>Comparar el costo del servicio contra el costo oculto de la inacción.</li>
                    <li>Proponer esquemas escalonados de bajo riesgo basados en hitos medibles.</li>
                  </ul>
                </div>
              </div>

              {/* Diálogo Paso a Paso */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #94a3b8' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>1. Planteamiento de la Objeción Presupuestal</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0', fontStyle: 'italic' }}>
                    «Entiendo el beneficio del programa de Interrupción, pero en este momento no tenemos presupuesto asignado para nuevas iniciativas.»
                  </p>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #8b5cf6' }}>
                  <div style={{ fontSize: '0.8rem', color: '#c084fc', fontWeight: '700', textTransform: 'uppercase' }}>2. Aislamiento del Problema Real (Estrategia de Kahneman / Voss)</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0' }}>
                    «Comprendo el celo presupuestal, [Nombre]; en un entorno volátil, proteger el flujo de caja es la primera prioridad. Permíteme hacerte una pregunta honesta: dejando de lado la partida contable por un segundo... ¿la falta de alineación y la lentitud decisional de los mandos medios representan un riesgo crítico para tu meta de este año, o consideras que el modelo actual puede absorber el desafío sin cambios?»
                  </p>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #94a3b8' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase' }}>3. Reconocimiento de la Necesidad por el Interlocutor</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0', fontStyle: 'italic' }}>
                    «No, claramente el equipo necesita alinearse y elevar el estándar de ejecución; la preocupación es justificar el retorno de inversión ante el comité de finanzas.»
                  </p>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
                  <div style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: '700', textTransform: 'uppercase' }}>4. Reencuadre de Valor y Despliegue por Hitos de Bajo Riesgo</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0' }}>
                    «Excelente. La discusión entonces no es si se necesita la intervención, sino cómo demostrar certidumbre de retorno. Si calculamos el costo de un retraso de 3 semanas en el lanzamiento de tu iniciativa clave frente a la inversión requerida, la inacción cuesta 5 veces más. Además, podemos estructurar un despliegue por fases enfocado en victorias rápidas cuantificables antes del desembolso integral. ¿Tiene sentido evaluar esta propuesta de bajo riesgo en una sesión de 20 minutos con Finanzas?»
                  </p>
                </div>

                <div style={{ background: 'rgba(15, 23, 42, 0.6)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid #f59e0b' }}>
                  <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: '700', textTransform: 'uppercase' }}>5. Cierre con Compromiso Concreto</div>
                  <p style={{ margin: '0.4rem 0 0 0', color: '#e2e8f0' }}>
                    «Perfecto. Agendemos la sesión técnica para calibrar el caso de negocio con indicadores clave de desempeño.»
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      )}

      {/* TAB 3: MENSAJERÍA EJECUTIVA */}
      {activeTab === 'whatsapp' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Panel de Personalización de Variables */}
          <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.5rem', borderRadius: '14px' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#f59e0b', fontSize: '1.15rem' }}>
              ⚙️ Personalizar Variables de Comunicación Ejecutiva
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>
                  Nombre del Directivo / Líder:
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
                    color: 'var(--text-main)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>
                  Rol / Cargo Corporativo:
                </label>
                <input
                  type="text"
                  value={waCargo}
                  onChange={(e) => setWaCargo(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--text-main)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.3rem' }}>
                  Enlace de Calibración Estratégica:
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
                    color: 'var(--text-main)',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Plantilla 1: Continuidad y Ejecución */}
          <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px', borderLeft: '4px solid #10b981' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>📈</span>
                  <h4 style={{ margin: 0, color: '#34d399', fontSize: '1.15rem' }}>
                    Plantilla 1: Seguimiento Post-Alineación y Compromiso Operativo
                  </h4>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Enfoque en reducción de inercia en las primeras 48 horas tras una junta directiva.
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(mensaje1Text, 'wa1')}
                className="btn-primary"
                style={{ fontSize: '0.85rem' }}
              >
                {copiedKey === 'wa1' ? '✅ ¡Copiado!' : '📋 Copiar Mensaje 1'}
              </button>
            </div>

            <pre style={{
              background: 'rgba(15, 23, 42, 0.9)',
              padding: '1.25rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0',
              fontFamily: 'monospace',
              fontSize: '0.88rem',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
              margin: 0
            }}>
              {mensaje1Text}
            </pre>
          </div>

          {/* Plantilla 2: Recordatorio Preventivo de Rigor */}
          <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '1.75rem', borderRadius: '14px', borderLeft: '4px solid #f59e0b' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.2rem' }}>⏱️</span>
                  <h4 style={{ margin: 0, color: '#fbbf24', fontSize: '1.15rem' }}>
                    Plantilla 2: Prevención de Distorsión de Reportes y Validación de Datos
                  </h4>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  Evita la confabulación retrospectiva (Efecto Mandela) en comités mediante auditoría de hechos.
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(mensaje2Text, 'wa2')}
                className="btn-primary"
                style={{ fontSize: '0.85rem' }}
              >
                {copiedKey === 'wa2' ? '✅ ¡Copiado!' : '📋 Copiar Mensaje 2'}
              </button>
            </div>

            <pre style={{
              background: 'rgba(15, 23, 42, 0.9)',
              padding: '1.25rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#e2e8f0',
              fontFamily: 'monospace',
              fontSize: '0.88rem',
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
              margin: 0
            }}>
              {mensaje2Text}
            </pre>
          </div>

        </div>
      )}

      {/* TAB 4: CHECKLIST DE RIGOR */}
      {activeTab === 'checklist' && (
        <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '2rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ margin: 0, color: '#f59e0b', fontSize: '1.3rem' }}>
                🛡️ Checklist de Impecabilidad en la Negociación y Alineación
              </h3>
              <p style={{ margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                Criterios innegociables para evaluar la calidad de una conversación estratégica con directivos.
              </p>
            </div>

            <div style={{
              background: auditScore === 100 ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)',
              border: `1px solid ${auditScore === 100 ? '#10b981' : '#f59e0b'}`,
              padding: '0.5rem 1rem',
              borderRadius: '10px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Índice de Rigor</div>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', color: auditScore === 100 ? '#34d399' : '#fbbf24' }}>
                {auditScore}%
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                id: 'item1',
                titulo: '1. Desactivación Amigdalina Inicial',
                desc: '¿Se solicitó permiso explícito de tiempo (2-3 min) y se validó el estatus del interlocutor sin confrontación directa?'
              },
              {
                id: 'item2',
                titulo: '2. Enfoque en el Protagonista (El Héroe)',
                desc: '¿Se mantuvo el foco en las metas y dolores de la operación del gerente, evitando auto-promociones del marco metodológico?'
              },
              {
                id: 'item3',
                titulo: '3. Aislamiento de Hechos vs. Interpretaciones',
                desc: '¿Se separaron los números duros (presupuesto, plazos) de los sesgos y suposiciones subjetivas del equipo?'
              },
              {
                id: 'item4',
                titulo: '4. Presentación de Plan de Bajo Riesgo (Ecuación de Valor)',
                desc: '¿Se estructuró una propuesta de implementación por fases con certidumbre de entregables y métricas de control?'
              },
              {
                id: 'item5',
                titulo: '5. Acuerdo Voluntario e Inmutable (Agencia Radical)',
                desc: '¿El acuerdo final fue elegido explícitamente por el directivo con fecha, responsable y registro inmutable en el sistema?'
              }
            ].map(item => (
              <div
                key={item.id}
                onClick={() => handleToggleCheck(item.id)}
                style={{
                  background: checkedItems[item.id] ? 'rgba(16, 185, 129, 0.1)' : 'rgba(15, 23, 42, 0.6)',
                  border: `1px solid ${checkedItems[item.id] ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.1)'}`,
                  padding: '1.2rem',
                  borderRadius: '10px',
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
                  onChange={() => {}}
                  style={{ marginTop: '0.25rem', width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <div>
                  <h4 style={{ margin: 0, color: checkedItems[item.id] ? '#34d399' : '#f8fafc', fontSize: '1rem' }}>
                    {item.titulo}
                  </h4>
                  <p style={{ margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.88rem', lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: MANUAL OFICIAL COMPLETO */}
      {activeTab === 'manual' && (
        <div className="glass-panel" style={{ background: 'rgba(28, 37, 65, 0.7)', padding: '2rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <div>
              <h3 style={{ margin: 0, color: '#f59e0b', fontSize: '1.3rem' }}>
                Estándar Oficial: Manual de Negociación y Resistencia al Cambio V1.0
              </h3>
              <p style={{ margin: '0.25rem 0 0 0', color: '#94a3b8', fontSize: '0.9rem' }}>
                Documento de consulta ejecutiva basado en StoryBrand, Neurobiología y Agencia Radical.
              </p>
            </div>

            <button
              onClick={() => copyToClipboard(`# MANUAL DE COMUNICACIÓN ESTRATÉGICA Y NEGOCIACIÓN DE ALTO NIVEL
## SISTEMA INTERRUPCIÓN — ESTÁNDAR PARA GERENTES REGIONALES Y DIRECTIVOS

### 1. EL MARCO ONTOLÓGICO: EL LÍDER COMO PROTAGONISTA
En la toma de decisiones de alta dirección, operamos desde la claridad de acuerdos y el rigor científico:
- El Directivo es el Protagonista: Enfrenta la resistencia estructural y los sesgos del mercado.
- La Metodología es el Guía: Provee arquitectura decisional y reducción de fricción cognitiva.
- El Acuerdo es Voluntario: Ninguna transformación perdura por coacción burocrática; la adherencia nace de la convicción fundamentada.

### 2. MATRIZ STORYBRAND DIRECTIVA (SB7)
1. Un Personaje: Gerente Regional responsable de unidades de negocio.
2. Tiene un Problema: Inercia organizacional, sesgo de confirmación y complacencia de procesos.
3. Encuentra un Guía: Marco de Interrupción y telemetría de rendimiento.
4. Que le da un Plan: Interrupción de reactividad -> Ecuación de Valor -> Auditoría de Acuerdos.
5. Y lo llama a la Acción: Decisión informada y despliegue por fases medibles.
6. Que evita el Fracaso: Efecto Mandela en comités, parálisis decisional y pérdida de ventaja competitiva.
7. Y culmina en Éxito: Equipos antifrágiles, trazabilidad operativa y alto retorno de inversión.`, 'manualCompleto')}
              className="btn-secondary"
              style={{ fontSize: '0.85rem' }}
            >
              {copiedKey === 'manualCompleto' ? '✅ ¡Copiado!' : '📋 Copiar Manual Completo'}
            </button>
          </div>

          <div style={{ background: 'rgba(15, 23, 42, 0.85)', padding: '1.5rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', color: '#cbd5e1', lineHeight: '1.7', fontSize: '0.92rem' }}>
            <h4 style={{ color: '#f59e0b', marginTop: 0 }}>1. Principios de Neurobiología Decisional en Comités</h4>
            <p>
              Toda propuesta de transformación activa instintos de defensa en la estructura directiva. Según la teoría de los marcadores somáticos de Antonio Damasio y el modelo SCARF de neurociencia del liderazgo, el cerebro evalúa el cambio como una posible merma de certidumbre y autonomía. El protocolo de Interrupción permite pausar la reacción automática del circuito límbico y devolver el procesamiento analítico al córtex prefrontal dorsolateral.
            </p>

            <h4 style={{ color: '#38bdf8', marginTop: '1.5rem' }}>2. Mitigación de Sesgos Colectivos y Efecto Mandela en la Empresa</h4>
            <p>
              Uno de los mayores drenajes de valor en comités ejecutivos es el Efecto Mandela corporativo: la tendencia de los directivos a recordar acuerdos inexistentes, interpretar métricas pasadas de forma distorsionada o confabular consensos que jamás se formalizaron por escrito. La regla de oro del Sistema Interrupción es: <em>si no está registrado con responsable, plazo inmutable y criterio de cumplimiento verificable, el acuerdo no existe</em>.
            </p>

            <h4 style={{ color: '#34d399', marginTop: '1.5rem' }}>3. La Ecuación de Valor en las Decisiones de Inversión</h4>
            <p>
              Basado en el modelo de Alex Hormozi adaptado a la gestión corporativa:
              <br />
              <strong>Valor Percibido = (Impacto en la Meta × Certidumbre de Ejecución) ÷ (Tiempo de Implementación × Fricción de Equipo)</strong>
              <br />
              Para lograr aprobación y tracción ejecutiva, el líder no aumenta las promesas de impacto; reduce drásticamente el tiempo de primera victoria y minimiza la fricción cognitiva y operativa.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
