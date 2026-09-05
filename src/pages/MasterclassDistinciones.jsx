import React from 'react';

export default function MasterclassDistinciones() {
  return (
    <div className="p-8 max-w-5xl mx-auto text-slate-300">
      
      {/* REPRODUCTOR DE VIDEO MASTERCLASS OFICIAL */}
      <div className="mb-8 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950/90 shadow-2xl p-5">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">
              Video Masterclass • Sistema Interrupción & Liderazgo de Alto Rendimiento
            </span>
          </div>
          <span className="text-xs text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            Formato MP4 • Trazabilidad & Rigor Directivo
          </span>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-white/5">
          <video 
            controls 
            preload="metadata" 
            className="w-full h-full object-contain"
          >
            <source src="/videos/videoplayback.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video HTML5.
          </video>
        </div>

        <div className="mt-4 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-400 pt-2 border-t border-white/5">
          <span className="flex items-center gap-1">
            <span>🛡️</span> <strong>Marco Científico:</strong> Seguridad Psicológica (Amy Edmondson) & Causa OS.
          </span>
          <span className="font-semibold text-cyan-300">
            Telemetría Activa en Sistema Interrupción
          </span>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-2xl shadow-xl">
        <div dangerouslySetInnerHTML={{ __html: `<h1 className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">MASTERCLASS: LAS 5 DISTINCIONES DEL LIDERAZGO DIRECTIVO</h1>
<h2 className="text-2xl font-bold mt-2 mb-6 border-b border-gray-700 pb-2 text-indigo-400">De la Inercia Reactiva al Alto Rendimiento Operativo & Estratégico</h2>

<p className="mb-4 text-gray-300 leading-relaxed">Bienvenido a la <strong>Masterclass Canónica de Distinciones Decisionales del Sistema Interrupción</strong>. En la dirección corporativa y la gestión de comités ejecutivos, los equipos suelen estancarse en una niebla conceptual: se confunden los hechos con las opiniones, la empatía con la complacencia pasiva, y la rendición de cuentas con la imposición agresiva. Esta falta de precisión analítica es la causa raíz de la fricción operativa y el desgaste de capital.</p>

<p className="mb-4 text-gray-300 leading-relaxed">Una <strong>Distinción</strong> es una lente cognitiva de alta resolución. Distinguir no es clasificar teóricamente; es aprender a percibir lo que antes resultaba invisible en la conducta y en los datos para intervenir con precisión quirúrgica.</p>

<p className="mb-6 text-gray-300 leading-relaxed">A continuación se detallan las <strong>5 Distinciones Fundamentales</strong> para gerentes regionales y directores, respaldadas por neurobiología conductual (Kahneman, LeDoux, Loftus), teoría de la autodeterminación (Deci & Ryan) y economía de la decisión.</p>

<hr className="my-8 border-gray-800" />

<h2 className="text-2xl font-black mt-8 mb-4 border-b border-gray-700 pb-2 text-indigo-400">MATRIZ COMPARATIVA DE CALIBRACIÓN DIRECTIVA</h2>

<div className="overflow-x-auto my-6"><table className="w-full text-sm border-collapse">
<thead>
  <tr className="bg-gray-800 text-left">
    <th className="p-3 text-cyan-400">Distinción</th>
    <th className="p-3 text-rose-400">Inercia Reactiva (Bajo Rendimiento)</th>
    <th className="p-3 text-emerald-400">Liderazgo Estratégico (Sistema Interrupción)</th>
    <th className="p-3 text-indigo-400">Base Científica / Impacto</th>
  </tr>
</thead>
<tbody>
  <tr className="border-t border-gray-800">
    <td className="p-3 font-bold text-white">1. Empatía Radical vs. Complacencia Pasiva</td>
    <td className="p-3 text-gray-300"><strong>Complacencia (Sympathy):</strong> Validar la excusa, diluir el estándar operativo para evitar la tensión interpersonal y convertirse en cómplice de la ineficiencia.</td>
    <td className="p-3 text-gray-300"><strong>Empatía Radical:</strong> Validar profundamente la experiencia y la emoción del interlocutor sin ceder un milímetro del estándar pactado.</td>
    <td className="p-3 text-gray-400">Chris Voss & Daniel Goleman. Desactiva la amígdala sin sacrificar el KPI.</td>
  </tr>
  <tr className="border-t border-gray-800">
    <td className="p-3 font-bold text-white">2. Causa vs. Efecto (Locus de Control)</td>
    <td className="p-3 text-gray-300"><strong>Efecto (Victimismo Operativo):</strong> Justificar el incumplimiento de metas responsabilizando a variables externas (el mercado, la inflación, la filial remota).</td>
    <td className="p-3 text-gray-300"><strong>Causa (Agencia Radical):</strong> El directivo se asume como origen generativo de la respuesta y diseña contingencias proactivas ante cualquier quiebre.</td>
    <td className="p-3 text-gray-400">Julian Rotter & Epicteto (Dicotomía del Control). Cero tolerancia a la queja pasiva.</td>
  </tr>
  <tr className="border-t border-gray-800">
    <td className="p-3 font-bold text-white">3. Hecho vs. Interpretación</td>
    <td className="p-3 text-gray-300"><strong>Interpretación (Sesgo Narrativo):</strong> Elaborar hipótesis emocionales, lecturas de intenciones ajenas y telenovelas corporativas que queman energía.</td>
    <td className="p-3 text-gray-300"><strong>Hecho (Dato Objetivo):</strong> Información auditable, medible en series temporales, libre de adjetivos calificativos o juicios apresurados.</td>
    <td className="p-3 text-gray-400">Elizabeth Loftus (Efecto Mandela) & Wittgenstein. Prevención de falsos recuerdos de comités.</td>
  </tr>
  <tr className="border-t border-gray-800">
    <td className="p-3 font-bold text-white">4. Rigor vs. Agresión Reactiva</td>
    <td className="p-3 text-gray-300"><strong>Agresión (Desborde Amigdalino):</strong> Imponer control mediante intimidación, humillación pública, sarcasmo o ataque a la identidad profesional.</td>
    <td className="p-3 text-gray-300"><strong>Rigor (Contenedor Impecable):</strong> Sostener las reglas del juego y los acuerdos con neutralidad emocional, firmeza e innegociabilidad.</td>
    <td className="p-3 text-gray-400">Amy Edmondson (Harvard). Protege la seguridad psicológica y la calidad de ejecución.</td>
  </tr>
  <tr className="border-t border-gray-800">
    <td className="p-3 font-bold text-white">5. Compromiso Autónomo vs. Cumplimentación Forzada</td>
    <td className="p-3 text-gray-300"><strong>Cumplimentación (Obligación / Resentimiento):</strong> Trabajar bajo la amenaza de sanción o presión coercitiva. Detona reactancia psicológica y sabotaje pasivo.</td>
    <td className="p-3 text-gray-300"><strong>Compromiso (Autodeterminación):</strong> El líder alinea el objetivo corporativo con el sentido de maestría y propósito del colaborador (Elección interna).</td>
    <td className="p-3 text-gray-400">Deci & Ryan (Self-Determination Theory). Sostenibilidad del desempeño a largo plazo.</td>
  </tr>
</tbody>
</table></div>

<hr className="my-8 border-gray-800" />

<h2 className="text-2xl font-black mt-8 mb-4 border-b border-gray-700 pb-2 text-indigo-400">MÓDULO 1: EMPATÍA RADICAL vs. COMPLACENCIA PASIVA</h2>
<p className="mb-4 text-gray-300 leading-relaxed">En la gestión directiva, la complacencia es el veneno silencioso del estándar. Un gerente complaciente confunde ser empático con ser permisivo: cuando un líder regional reporta un retraso en la entrega de suministros, el directivo complaciente dice: <em>"Entiendo, descansa y lo vemos la próxima semana"</em>. El resultado es el colapso de la cadena de suministro y la erosión de la cultura de excelencia.</p>
<p className="mb-4 text-gray-300 leading-relaxed"><strong>El Protocolo de Empatía Radical:</strong></p>
<ul className="mb-6 space-y-2 list-disc list-inside text-gray-300">
  <li><strong>Paso 1 (Calibración Somática & Validación Emocional):</strong> "Entiendo la presión logística que supuso la huelga portuaria y reconozco la tensión que esto ha puesto sobre tu unidad de negocio."</li>
  <li><strong>Paso 2 (Separación Quirúrgica del Estándar):</strong> "Dicho esto, nuestro compromiso de abastecimiento con el cliente corporativo vence mañana a las 10:00 hrs de manera inmutable."</li>
  <li><strong>Paso 3 (Apertura de Acción Generativa):</strong> "¿Qué ruta alternativa de transporte de contingencia activamos en los próximos 45 minutos para resolver el cuello de botella?"</li>
</ul>

<hr className="my-8 border-gray-800" />

<h2 className="text-2xl font-black mt-8 mb-4 border-b border-gray-700 pb-2 text-indigo-400">MÓDULO 2: CAUSA vs. EFECTO (El Marco de Agencia Radical)</h2>
<p className="mb-4 text-gray-300 leading-relaxed">El victimismo corporativo se disfraza frecuentemente de análisis sofisticado. Los comités que operan en <em>Efecto</em> dedican el 80% de sus reuniones a elaborar diagnósticos floridos de por qué el entorno macroeconómico impidió alcanzar los resultados.</p>
<p className="mb-4 text-gray-300 leading-relaxed">Bajo el marco de <strong>Causa OS</strong>, el líder directivo no pierde tiempo en el lamento. Asume que toda omisión de seguimiento, falta de contingencia o ambigüedad contractual fue tolerada por él mismo. La pregunta generativa del líder en Causa no es <em>"¿Por qué nos pasa esto?"</em>, sino <strong>"¿Qué acuerdo no especificado toleré y qué nueva acción voy a detonar ahora?"</strong>.</p>

<hr className="my-8 border-gray-800" />

<h2 className="text-2xl font-black mt-8 mb-4 border-b border-gray-700 pb-2 text-indigo-400">MÓDULO 3: HECHO vs. INTERPRETACIÓN & EL EFECTO MANDELA CORPORATIVO</h2>
<p className="mb-4 text-gray-300 leading-relaxed">Las investigaciones de la Dra. Elizabeth Loftus (UC Irvine) sobre memoria reconstructiva demuestran que el cerebro humano no graba la realidad como una cámara de video, sino que la reconstruye en cada recuerdo, contaminándola con emociones presentes y sesgo de confirmación.</p>
<p className="mb-4 text-gray-300 leading-relaxed">En las empresas, esto genera el peligroso <strong>Efecto Mandela Corporativo</strong>: múltiples miembros de una junta directiva aseguran con vehemencia recordar una decisión o instrucción que jamás se formalizó por escrito. Para erradicar la niebla de las interpretaciones, el Sistema Interrupción exige <strong>telemetría y trazabilidad inmutable</strong>: cada acuerdo directivo debe contener responsable unívoco, métrica de éxito cuantificable y fecha de entrega verificable.</p>

<hr className="my-8 border-gray-800" />

<h2 className="text-2xl font-black mt-8 mb-4 border-b border-gray-700 pb-2 text-indigo-400">MÓDULO 4: RIGOR vs. AGRESIÓN REACTIVA (Neurobiología del Límite)</h2>
<p className="mb-4 text-gray-300 leading-relaxed">El directivo que grita, humilla o amenaza no está ejerciendo rigor: está sufriendo un <strong>secuestro amigdalino</strong> y externalizando su pánico o impotencia. La agresión destruye la seguridad psicológica estudiada por Amy Edmondson en Harvard, paralizando la innovación y fomentando que los colaboradores oculten los errores críticos hasta que sea demasiado tarde.</p>
<p className="mb-4 text-gray-300 leading-relaxed">El <strong>Rigor Auténtico</strong> es frío, limpio y profundamente respetuoso. Funciona como las líneas de cal de una cancha de tenis: el árbitro no agrede al tenista cuando la pelota sale; simplemente declara "fuera" con neutralidad total y exige reanudar el juego bajo el reglamento pactado.</p>

<hr className="my-8 border-gray-800" />

<h2 className="text-2xl font-black mt-8 mb-4 border-b border-gray-700 pb-2 text-indigo-400">MÓDULO 5: COMPROMISO AUTÓNOMO vs. CUMPLIMENTACIÓN FORZADA</h2>
<p className="mb-4 text-gray-300 leading-relaxed">Cuando la dirección impone metas mediante coerción pura, la respuesta biológica del ser humano es la reactancia psicológica (resistencia pasiva, apatía o cinismo laboral). El colaborador opera desde el "tengo que", haciendo el mínimo esfuerzo necesario para no ser despedido.</p>
<p className="mb-4 text-gray-300 leading-relaxed">El liderazgo de alto rendimiento construye <strong>Compromiso Autónomo</strong> (Deci & Ryan): conecta la meta estratégica con la autonomía, la competencia y el impacto profesional del líder regional. Cuando el directivo elige el objetivo por convicción y visión propia, el rendimiento se sostiene sin necesidad de supervisión policíaca constante.</p>

<hr className="my-8 border-gray-800" />

<div className="bg-slate-900/80 p-6 rounded-xl border border-cyan-500/30">
  <h3 className="text-xl font-bold text-cyan-400 mb-2">CHECKLIST DE AUDITORÍA DECISIONAL PARA REUNIONES DE COMITÉ</h3>
  <p className="text-sm text-gray-400 mb-4">Antes de dar por concluida una junta o negociación estratégica, audita estos 4 criterios:</p>
  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
    <li><strong>¿El acuerdo se basa en datos duros o en interpretaciones subjetivas?</strong> (Inmunidad al Efecto Mandela).</li>
    <li><strong>¿Hay un único responsable con nombre y apellido para cada entregable?</strong> (Causa OS instalada).</li>
    <li><strong>¿Se ha preservado la seguridad psicológica del equipo durante la confrontación del problema?</strong> (Rigor sin agresión).</li>
    <li><strong>¿La fecha y métrica de éxito están registradas en el sistema de trazabilidad operativa?</strong> (Compliance inmutable).</li>
  </ol>
</div>
` }} />
      </div>
    </div>
  );
}
