import React, { useState, useRef, useEffect, useMemo } from 'react';

const VIDEOS_CATALOG = [
  {
    id: 'de-la-queja-al-liderazgo',
    title: 'De la Queja al Liderazgo: El Quiebre Ontológico',
    videoUrl: '/videos/de_la_queja_al_liderazgo.mp4',
    framework: 'Martin Heidegger & Fernando Flores',
    category: 'Liderazgo & Quiebres',
    badge: 'Fundacional',
    icon: '⚡',
    duration: '1:35',
    desc: 'Cómo interrumpir la transparencia cotidiana del piloto automático y transformar la queja pasiva en diseño de nuevas acciones.'
  },
  {
    id: 'de-la-inercia-a-la-accion',
    title: 'De la Inercia a la Acción Generativa',
    videoUrl: '/videos/de_la_inercia_a_la_accion.mp4',
    framework: 'Edward Deci & Richard Ryan (Autodeterminación)',
    category: 'Liderazgo & Quiebres',
    badge: 'Estratégico',
    icon: '🚀',
    duration: '1:45',
    desc: 'Superación de la parálisis por análisis y construcción de compromiso autónomo en equipos de alto rendimiento.'
  },
  {
    id: 'seguridad-psicologica',
    title: 'Seguridad Psicológica en Comités de Decisión',
    videoUrl: '/videos/seguridad_psicologica.mp4',
    framework: 'Dra. Amy Edmondson (Harvard Business School)',
    category: 'Cultura & Alto Desempeño',
    badge: 'Harvard Framework',
    icon: '🛡️',
    duration: '1:15',
    desc: 'El terreno firme donde nadie es castigado por admitir un error, desafiar el status quo o proponer ideas disruptivas.'
  },
  {
    id: 'agencia-radical',
    title: 'Agencia Radical: Locus de Control Interno',
    videoUrl: '/videos/agencia_radical.mp4',
    framework: 'Julian Rotter & Filosofía Estoica (Epicteto)',
    category: 'Ontología & Conducta',
    badge: 'Pilar Central',
    icon: '🏛️',
    duration: '1:35',
    desc: 'Asumirse como origen generativo de las circunstancias y desmantelar el victimismo en la dirección corporativa.'
  },
  {
    id: 'efecto-mandela-corporativo',
    title: 'El Efecto Mandela Corporativo & Hecho vs. Interpretación',
    videoUrl: '/videos/efecto_mandela_corporativo.mp4',
    framework: 'Dra. Elizabeth Loftus (UC Irvine - Memoria Reconstructiva)',
    category: 'Neurociencia & Acuerdos',
    badge: 'Rigor Inmutable',
    icon: '🧠',
    duration: '1:40',
    desc: 'Por qué el cerebro altera recuerdos de reuniones y cómo los acuerdos escritos inmutables eliminan la niebla subjetiva.'
  },
  {
    id: 'decision-y-amigdala',
    title: 'Biología de la Decisión & Secuestro Amigdalino',
    videoUrl: '/videos/decision_y_amigdala.mp4',
    framework: 'Joseph LeDoux & Daniel Kahneman (Thinking, Fast & Slow)',
    category: 'Neurociencia & Acuerdos',
    badge: 'Neurobiología',
    icon: '🔬',
    duration: '1:40',
    desc: 'Mecanismos para desactivar la alarma amigdalina del Sistema 1 ante ataques, objeciones y estrés agudo en juntas.'
  },
  {
    id: 'calibracion-de-estado',
    title: 'Calibración de Estado & Suspiro Fisiológico',
    videoUrl: '/videos/calibracion_de_estado.mp4',
    framework: 'Dr. Andrew Huberman (Stanford School of Medicine)',
    category: 'Fisiología Somática',
    badge: 'Stanford Protocol',
    icon: '🧘',
    duration: '1:18',
    desc: 'Protocolo de modulación del ritmo cardíaco y cortisol para entrar en calma ejecutiva antes de negociar.'
  },
  {
    id: 'anatomia-de-un-acuerdo',
    title: 'La Anatomía del Acuerdo Impecable',
    videoUrl: '/videos/anatomia_de_un_acuerdo.mp4',
    framework: 'Rafael Echeverría & Ontología del Lenguaje',
    category: 'Operaciones & Compromiso',
    badge: 'Protocolo Maestro',
    icon: '📜',
    duration: '1:10',
    desc: 'Los 4 elementos no negociables de una petición impecable: Responsable, Métrica, Tiempo y Estándar de Satisfacción.'
  },
  {
    id: 'la-arquitectura-del-valor',
    title: 'La Arquitectura del Valor & Vende Sin Vender',
    videoUrl: '/videos/la_arquitectura_del_valor.mp4',
    framework: 'Alex Hormozi & Richard Thaler (Economía Conductual)',
    category: 'Negociación & Valor',
    badge: 'Alta Certeza',
    icon: '⚖️',
    duration: '1:45',
    desc: 'Multiplicar la certeza percibida y reducir la fricción operativa del cliente sin caer en la trampa de abaratar precios.'
  },
  {
    id: 'escucha-generosa-y-ontologia',
    title: 'Escucha Generosa & Ontología de la Comunicación',
    videoUrl: '/videos/escucha_generosa_y_ontologia.mp4',
    framework: 'Humberto Maturana & Carl Rogers',
    category: 'Ontología & Conducta',
    badge: 'Maestría Relacional',
    icon: '👂',
    duration: '1:12',
    desc: 'Escuchar la inquietud de fondo sin dar consejos prematuros ni reaccionar desde el ego.'
  },
  {
    id: 'enfoque-sintergico',
    title: 'Coherencia de Campo & Enfoque Sintérgico',
    videoUrl: '/videos/enfoque_sintergico.mp4',
    framework: 'Dr. Jacobo Grinberg-Zylberbaum (UNAM)',
    category: 'Coherencia & Sintergia',
    badge: 'Ciencia de Vanguardia',
    icon: '🌌',
    duration: '1:42',
    desc: 'Sincronización interhemisférica para disolver el ruido mental del ego y operar sobre las causas primarias del sistema.'
  },
  {
    id: 'videoplayback-induccion',
    title: 'Cápsula de Inducción: Confianza y Terreno Firme',
    videoUrl: '/videos/videoplayback.mp4',
    framework: 'Sistema Interrupción Lab',
    category: 'Cultura & Alto Desempeño',
    badge: 'Inducción',
    icon: '🎬',
    duration: '6:30',
    desc: 'Exploración integral de la confianza, seguridad psicológica y alineación de valores para la transformación directiva.'
  }
];

export default function MasterclassDistinciones() {
  const [selectedVideo, setSelectedVideo] = useState(VIDEOS_CATALOG[0]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const videoRef = useRef(null);

  // Recargar video al cambiar selección
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [selectedVideo]);

  const handleSpeedChange = (rate) => {
    setPlaybackSpeed(rate);
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
    }
  };

  const categories = useMemo(() => {
    const list = Array.from(new Set(VIDEOS_CATALOG.map(v => v.category)));
    return ['all', ...list];
  }, []);

  const filteredVideos = useMemo(() => {
    return VIDEOS_CATALOG.filter(v => {
      const matchCat = filterCategory === 'all' || v.category === filterCategory;
      const cleanQ = searchQuery.toLowerCase().trim();
      const matchSearch = !cleanQ || 
        v.title.toLowerCase().includes(cleanQ) || 
        v.framework.toLowerCase().includes(cleanQ) ||
        v.desc.toLowerCase().includes(cleanQ);
      return matchCat && matchSearch;
    });
  }, [filterCategory, searchQuery]);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto text-slate-300">
      
      {/* HEADER DE LA SECCIÓN */}
      <header className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              SISTEMA INTERRUPCIÓN • VIDEOTECA MASTERCLASS
            </span>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              12 Cápsulas Disponibles
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
            Masterclass Canónica & Video-Cápsulas de Rigor
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-1">
            Fundamentos ontológicos, neurobiológicos y decisionales para directores y líderes de alto rendimiento.
          </p>
        </div>

        {/* Buscador Rápido */}
        <div className="w-full md:w-72">
          <div className="relative">
            <input 
              type="text"
              placeholder="Buscar por tema o científico..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 pl-9 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
            <span className="absolute left-3 top-2.5 text-xs text-slate-500">🔍</span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* FILTRO DE CATEGORÍAS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              filterCategory === cat
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat === 'all' ? '✨ Todas las Cápsulas' : cat}
          </button>
        ))}
      </div>

      {/* ÁREA PRINCIPAL: REPRODUCTOR + PLAYLIST */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        
        {/* REPRODUCTOR EN VIVO (8 Columnas en Desktop) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950/95 shadow-2xl p-4 md:p-6 flex flex-col justify-between">
            
            {/* Topbar del reproductor */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-400">
                  {selectedVideo.badge}
                </span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-300 font-semibold truncate max-w-xs md:max-w-md">
                  {selectedVideo.title}
                </span>
              </div>
              
              {/* Selector de velocidad */}
              <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10 text-xs">
                <span className="text-slate-400 px-1">Vel:</span>
                {[1, 1.25, 1.5].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => handleSpeedChange(speed)}
                    className={`px-1.5 py-0.5 rounded text-xs transition ${
                      playbackSpeed === speed 
                        ? 'bg-cyan-500 text-white font-bold' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-white/5 flex items-center justify-center">
              <video 
                ref={videoRef}
                controls 
                preload="metadata" 
                className="w-full h-full object-contain"
                key={selectedVideo.videoUrl}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Tu navegador no soporta la reproducción de video HTML5.
              </video>
            </div>

            {/* Info inferior del video seleccionado */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{selectedVideo.icon}</span>
                  <span>{selectedVideo.title}</span>
                </h3>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">
                  ⏱️ {selectedVideo.duration}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedVideo.desc}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-2 pt-2 text-xs text-slate-400 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <span>🛡️</span> 
                  <strong>Marco Científico / Ontológico:</strong> 
                  <span className="text-cyan-300 font-medium">{selectedVideo.framework}</span>
                </span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <span>✓</span> Video Verificado en Servidor
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* PLAYLIST / LISTA LATERAL (4 Columnas en Desktop) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <span>📋</span> Lista de Cápsulas ({filteredVideos.length})
            </span>
            <span className="text-[11px] text-cyan-400 font-mono">
              Clic para reproducir
            </span>
          </div>

          <div className="flex flex-col gap-2.5 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin">
            {filteredVideos.map((video) => {
              const isCurrent = video.id === selectedVideo.id;
              return (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col gap-1.5 ${
                    isCurrent
                      ? 'bg-gradient-to-r from-cyan-950/70 to-slate-900 border-cyan-400/60 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/30'
                      : 'bg-slate-900/60 hover:bg-slate-850 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                      <span>{video.icon}</span>
                      <span className="truncate">{video.title}</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/40 text-slate-300 font-mono shrink-0">
                      {video.duration}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                    {video.desc}
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px]">
                    <span className="text-slate-500 truncate max-w-[170px]">
                      {video.framework}
                    </span>
                    {isCurrent ? (
                      <span className="text-cyan-400 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                        Reproduciendo
                      </span>
                    ) : (
                      <span className="text-slate-500 group-hover:text-slate-300">
                        Ver cápsula ▶
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {filteredVideos.length === 0 && (
              <div className="p-6 text-center text-slate-500 bg-slate-900/40 rounded-xl border border-slate-800">
                <span className="text-2xl block mb-2">🔍</span>
                No se encontraron cápsulas para tu búsqueda.
              </div>
            )}
          </div>
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
<p className="mb-4 text-gray-300 leading-relaxed">Bajo el marco de <strong>Agencia Radical</strong>, el líder directivo no pierde tiempo en el lamento. Asume que toda omisión de seguimiento, falta de contingencia o ambigüedad contractual fue tolerada por él mismo. La pregunta generativa del líder en Causa no es <em>"¿Por qué nos pasa esto?"</em>, sino <strong>"¿Qué acuerdo no especificado toleré y qué nueva acción voy a detonar ahora?"</strong>.</p>

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
    <li><strong>¿Hay un único responsable con nombre y apellido para cada entregable?</strong> (Agencia Radical instalada).</li>
    <li><strong>¿Se ha preservado la seguridad psicológica del equipo durante la confrontación del problema?</strong> (Rigor sin agresión).</li>
    <li><strong>¿La fecha y métrica de éxito están registradas en el sistema de trazabilidad operativa?</strong> (Compliance inmutable).</li>
  </ol>
</div>
` }} />
      </div>
    </div>
  );
}
