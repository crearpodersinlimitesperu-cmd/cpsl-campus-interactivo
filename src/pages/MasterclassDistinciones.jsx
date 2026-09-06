import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

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
    desc: 'Cómo interrumpir la transparencia cotidiana del piloto automático y transformar la queja pasiva en diseño de nuevas acciones.',
    docUrl: '/docs/playbook_de_la_inercia_a_la_accion_generativa.pdf',
    docLabel: 'Playbook Inercia a la Acción (PDF)',
    blueprintSlide: 3
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
    desc: 'Superación de la parálisis por análisis y construcción de compromiso autónomo en equipos de alto rendimiento.',
    docUrl: '/docs/playbook_de_la_inercia_a_la_accion_generativa.pdf',
    docLabel: 'Playbook Inercia a la Acción (PDF)',
    blueprintSlide: 5
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
    desc: 'El terreno firme donde nadie es castigado por admitir un error, desafiar el status quo o proponer ideas disruptivas.',
    docUrl: '/docs/seguridad_psicologica_amy_edmondson.pdf',
    docLabel: 'Manual Dra. Amy Edmondson (PDF)',
    blueprintSlide: 11
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
    desc: 'Asumirse como origen generativo de las circunstancias y desmantelar el victimismo en la dirección corporativa.',
    docUrl: '/docs/agencia_radical_julian_rotter_epicteto.pdf',
    docLabel: 'Tratado Rotter & Epicteto (PDF)',
    blueprintSlide: 7
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
    desc: 'Por qué el cerebro altera recuerdos de reuniones y cómo los acuerdos escritos inmutables eliminan la niebla subjetiva.',
    docUrl: '/docs/elizabeth_loftus_memoria_reconstructiva_efecto_mandela.docx',
    docLabel: 'Manual Dra. Elizabeth Loftus (DOCX)',
    blueprintSlide: 9
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
    desc: 'Mecanismos para desactivar la alarma amigdalina del Sistema 1 ante ataques, objeciones y estrés agudo en juntas.',
    docUrl: '/docs/the_generative_os_blueprint.pptx',
    docLabel: 'The Generative OS Blueprint (PPTX)',
    blueprintSlide: 14
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
    desc: 'Protocolo de modulación del ritmo cardíaco y cortisol para entrar en calma ejecutiva antes de negociar.',
    docUrl: '/docs/the_generative_os_blueprint.pptx',
    docLabel: 'The Generative OS Blueprint (PPTX)',
    blueprintSlide: 15
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
    desc: 'Los 4 elementos no negociables de una petición impecable: Responsable, Métrica, Tiempo y Estándar de Satisfacción.',
    docUrl: '/docs/the_generative_os_blueprint.pptx',
    docLabel: 'Ciclo de Promesas (Blueprint)',
    blueprintSlide: 15
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
    desc: 'Multiplicar la certeza percibida y reducir la fricción operativa del cliente sin caer en la trampa de abaratar precios.',
    docUrl: '/docs/the_generative_os_blueprint.pptx',
    docLabel: 'La Ecuación del Valor (Blueprint)',
    blueprintSlide: 18
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
    desc: 'Escuchar la inquietud de fondo sin dar consejos prematuros ni reaccionar desde el ego.',
    docUrl: '/docs/the_generative_os_blueprint.pptx',
    docLabel: 'The Generative OS Blueprint (PPTX)',
    blueprintSlide: 19
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
    desc: 'Sincronización interhemisférica para disolver el ruido mental del ego y operar sobre las causas primarias del sistema.',
    docUrl: '/docs/the_generative_os_blueprint.pptx',
    docLabel: 'The Generative OS Blueprint (PPTX)',
    blueprintSlide: 19
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
    desc: 'Exploración integral de la confianza, seguridad psicológica y alineación de valores para la transformación directiva.',
    docUrl: '/docs/the_generative_os_blueprint.pptx',
    docLabel: 'The Generative OS Blueprint (PPTX)',
    blueprintSlide: 1
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
    <div className="masterclass-container animate-fade-in">
      
      {/* HEADER DE LA SECCIÓN */}
      <header className="masterclass-header">
        <div className="masterclass-header-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
            <span className="masterclass-badge-pill masterclass-badge-cyan">
              SISTEMA INTERRUPCIÓN • VIDEOTECA MASTERCLASS
            </span>
            <span className="masterclass-badge-pill masterclass-badge-emerald">
              12 Cápsulas Disponibles
            </span>
          </div>

          <h1 className="masterclass-title">
            Masterclass Canónica & Video-Cápsulas de Rigor
          </h1>

          <p className="masterclass-subtitle">
            Fundamentos ontológicos, neurobiológicos y decisionales para directores y líderes de alto rendimiento.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
            <Link 
              to="/recursos?tab=blueprint" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#fcd34d',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
            >
              <span>📐</span> Visor Blueprint (20 Láminas)
            </Link>
            <Link 
              to="/recursos?tab=documentos" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.15)',
                color: '#7dd3fc',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                fontSize: '0.78rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
            >
              <span>📄</span> Manuales Canónicos (PDF & DOCX)
            </Link>
          </div>
        </div>

        {/* Buscador Rápido */}
        <div className="masterclass-search-box">
          <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.85rem', pointerEvents: 'none' }}>
            🔍
          </span>
          <input 
            type="text"
            placeholder="Buscar por tema o científico..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="masterclass-search-input"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                cursor: 'pointer',
                fontSize: '0.85rem',
                padding: '2px'
              }}
            >
              ✕
            </button>
          )}
        </div>
      </header>

      {/* FILTRO DE CATEGORÍAS */}
      <div className="masterclass-categories-bar">
        {categories.map((cat) => {
          const isActive = filterCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`masterclass-cat-btn ${isActive ? 'active' : ''}`}
            >
              {cat === 'all' ? '✨ Todas las Cápsulas' : cat}
            </button>
          );
        })}
      </div>

      {/* ÁREA PRINCIPAL: REPRODUCTOR + PLAYLIST */}
      <div className="masterclass-main-grid">
        
        {/* REPRODUCTOR EN VIVO (Lado Izquierdo) */}
        <div className="masterclass-player-card">
          
          {/* Topbar del reproductor */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', paddingBottom: '0.75rem', marginBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0, flex: 1 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8', flexShrink: 0 }}></span>
              <span style={{ color: '#38bdf8', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px', flexShrink: 0 }}>
                {selectedVideo.badge}
              </span>
              <span style={{ color: '#64748b' }}>•</span>
              <span style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.88rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {selectedVideo.title}
              </span>
            </div>
            
            {/* Selector de velocidad */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.2rem 0.4rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.75rem', padding: '0 0.2rem' }}>Vel:</span>
              {[1, 1.25, 1.5].map((speed) => (
                <button
                  key={speed}
                  onClick={() => handleSpeedChange(speed)}
                  className={`masterclass-speed-btn ${playbackSpeed === speed ? 'active' : ''}`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Video Player */}
          <div className="masterclass-video-wrapper">
            <video 
              ref={videoRef}
              controls 
              preload="metadata" 
              key={selectedVideo.videoUrl}
            >
              <source src={selectedVideo.videoUrl} type="video/mp4" />
              Tu navegador no soporta la reproducción de video HTML5.
            </video>
          </div>

          {/* Info inferior del video seleccionado */}
          <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{selectedVideo.icon}</span>
                <span>{selectedVideo.title}</span>
              </h3>
              <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.12)', color: '#cbd5e1', fontFamily: 'monospace' }}>
                ⏱️ {selectedVideo.duration}
              </span>
            </div>

            <p style={{ color: '#cbd5e1', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
              {selectedVideo.desc}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.5rem', fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>🛡️</span> 
                <strong>Marco Científico / Ontológico:</strong> 
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>{selectedVideo.framework}</span>
              </span>
              <span style={{ color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <span>✓</span> Video Verificado en Servidor
              </span>
            </div>

            {/* Acciones de Soporte: Documentos y Blueprint */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginTop: '0.25rem' }}>
              {selectedVideo.docUrl && (
                <a 
                  href={selectedVideo.docUrl} 
                  download 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    color: '#34d399',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>📥</span> {selectedVideo.docLabel}
                </a>
              )}
              {selectedVideo.blueprintSlide && (
                <Link 
                  to={`/recursos?tab=blueprint&slide=${selectedVideo.blueprintSlide}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: '#a5b4fc',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  <span>📐</span> Ver Lámina #{selectedVideo.blueprintSlide} en Blueprint
                </Link>
              )}
              <Link 
                to="/recursos"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  marginLeft: 'auto',
                  transition: 'all 0.2s'
                }}
              >
                <span>📚</span> Biblioteca Completa
              </Link>
            </div>
          </div>

        </div>

        {/* PLAYLIST / LISTA LATERAL (Lado Derecho) */}
        <div className="masterclass-playlist-container">
          <div style={{ padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', color: '#f1f5f9', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>📋</span> Lista de Cápsulas ({filteredVideos.length})
            </span>
            <span style={{ fontSize: '0.72rem', color: '#38bdf8', fontFamily: 'monospace' }}>
              Clic para reproducir
            </span>
          </div>

          <div className="masterclass-playlist-scroll">
            {filteredVideos.map((video) => {
              const isCurrent = video.id === selectedVideo.id;
              return (
                <div
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className={`masterclass-playlist-item ${isCurrent ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      <span>{video.icon}</span>
                      <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{video.title}</span>
                    </span>
                    <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.4rem', borderRadius: '4px', background: 'var(--bg-card)', color: '#cbd5e1', fontFamily: 'monospace', flexShrink: 0 }}>
                      {video.duration}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.35, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {video.desc}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.35rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.72rem' }}>
                    <span style={{ color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '170px' }}>
                      {video.framework}
                    </span>
                    {isCurrent ? (
                      <span style={{ color: '#38bdf8', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8' }}></span>
                        Reproduciendo
                      </span>
                    ) : (
                      <span style={{ color: '#64748b' }}>
                        Ver cápsula ▶
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {filteredVideos.length === 0 && (
              <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#64748b', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>🔍</span>
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
