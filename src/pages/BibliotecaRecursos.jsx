import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BLUEPRINT_SLIDES = [
  {
    num: 1,
    title: 'De la Inercia a la Acción Generativa',
    subtitle: 'El Sistema Operativo Organizacional. Manual de estrategias y protocolos directivos.',
    img: '/blueprints/slide_1.png',
    category: 'Fundacional',
    framework: 'Sistema Interrupción Lab'
  },
  {
    num: 2,
    title: 'El Diagnóstico Ejecutivo: Por qué fallan las organizaciones brillantes',
    subtitle: 'La inercia es un bug en el Sistema Operativo (OS): Percepción reactiva, lenguaje descriptivo y acuerdos frágiles.',
    img: '/blueprints/slide_2.png',
    category: 'Diagnóstico',
    framework: 'Arquitectura de Sistemas'
  },
  {
    num: 3,
    title: 'El Quiebre Ontológico: Heidegger y la Transparencia',
    subtitle: 'Interrupción del piloto automático (Zuhandenheit vs Vorhandenheit) para pasar de la queja pasiva a la acción.',
    img: '/blueprints/slide_3.png',
    category: 'Liderazgo & Quiebres',
    framework: 'Martin Heidegger & Fernando Flores'
  },
  {
    num: 4,
    title: 'Protocolo de Acción 1: Detección y Declaración de Quiebres',
    subtitle: 'Matriz ejecutiva para distinguir quiebres operativos y canalizar la energía hacia el diseño de soluciones.',
    img: '/blueprints/slide_4.png',
    category: 'Protocolo Táctico',
    framework: 'Fernando Flores'
  },
  {
    num: 5,
    title: 'Dinámica de la Inercia: Teoría de la Autodeterminación',
    subtitle: 'Cómo pasar del mandato coercitivo a la motivación autónoma y competencia percibida.',
    img: '/blueprints/slide_5.png',
    category: 'Motivación & Cultura',
    framework: 'Deci & Ryan (Rochester University)'
  },
  {
    num: 6,
    title: 'Vectores de Motivación: Del Deber Ser a la Autonomía',
    subtitle: 'Estructuración de entornos de trabajo que eliminan el micro-management y fomentan la maestría.',
    img: '/blueprints/slide_6.png',
    category: 'Gestión Humana',
    framework: 'Deci & Ryan'
  },
  {
    num: 7,
    title: 'La Postura del Sistema: Agencia Radical',
    subtitle: 'Locus Externo (Modo Víctima) vs Locus Interno (Agencia Radical). Asumirse como causa generativa.',
    img: '/blueprints/slide_7.png',
    category: 'Ontología Directiva',
    framework: 'Julian Rotter & Epicteto'
  },
  {
    num: 8,
    title: 'La Dicotomía del Control en el Comité Ejecutivo',
    subtitle: 'Foco exclusivo en lo controlable: rediseño de sistemas, límites y comunicación directa.',
    img: '/blueprints/slide_8.png',
    category: 'Filosofía Aplicada',
    framework: 'Epicteto & Estoicismo'
  },
  {
    num: 9,
    title: 'El Sesgo de la Memoria: Memoria Reconstructiva',
    subtitle: 'Por qué el cerebro no es una grabadora y cómo altera los recuerdos en entornos corporativos.',
    img: '/blueprints/slide_9.png',
    category: 'Ciencia Cognitiva',
    framework: 'Dra. Elizabeth Loftus (UC Irvine)'
  },
  {
    num: 10,
    title: 'El Efecto Mandela Corporativo',
    subtitle: 'Consecuencias de usar la memoria biológica como sistema de registro en juntas directivas.',
    img: '/blueprints/slide_10.png',
    category: 'Operaciones',
    framework: 'Dra. Elizabeth Loftus'
  },
  {
    num: 11,
    title: 'Arquitectura del Alto Rendimiento: Seguridad Psicológica',
    subtitle: 'La matriz 2x2 de Amy Edmondson: Zonas de Apatía, Confort, Ansiedad y Aprendizaje.',
    img: '/blueprints/slide_11.png',
    category: 'Cultura de Equipo',
    framework: 'Dra. Amy Edmondson (Harvard Business School)'
  },
  {
    num: 12,
    title: 'Las 4 Zonas de Rendimiento y Fricción Positiva',
    subtitle: 'El permiso estructural para la honestidad radical, desafío de premisas y aprendizaje ágil.',
    img: '/blueprints/slide_12.png',
    category: 'Gobernanza',
    framework: 'Amy Edmondson'
  },
  {
    num: 13,
    title: 'Protocolo de Acción 2: Diseño Cultural',
    subtitle: 'Auditoría de declaraciones, legitimación directiva y recompensa a la fricción constructiva.',
    img: '/blueprints/slide_13.png',
    category: 'Protocolo Táctico',
    framework: 'Diseño Organizacional'
  },
  {
    num: 14,
    title: 'Neurobiología de la Decisión: El Secuestro Amigdalino',
    subtitle: 'Por qué el estrés colapsa la corteza prefrontal y cómo calibrar el sistema nervioso en tiempo real.',
    img: '/blueprints/slide_14.png',
    category: 'Neurociencia',
    framework: 'Joseph LeDoux & Daniel Kahneman'
  },
  {
    num: 15,
    title: 'Trazabilidad Inmutable: El Ciclo de Promesas',
    subtitle: 'La organización entendida como una red de compromisos inmutables y no como tareas sueltas.',
    img: '/blueprints/slide_15.png',
    category: 'Ontología del Lenguaje',
    framework: 'Rafael Echeverría & Fernando Flores'
  },
  {
    num: 16,
    title: 'Las 4 Fases de Coordinación de Acciones',
    subtitle: 'Petición -> Negociación -> Ejecución -> Declaración formal de satisfacción y cierre.',
    img: '/blueprints/slide_16.png',
    category: 'Procesos',
    framework: 'Fernando Flores'
  },
  {
    num: 17,
    title: 'Protocolo de Acción 3: Ejecución y Trazabilidad',
    subtitle: 'Erradicación del Mandela, prohibición de ambigüedades y auditoría semanal de cierres de ciclos.',
    img: '/blueprints/slide_17.png',
    category: 'Protocolo Táctico',
    framework: 'Sistema Interrupción'
  },
  {
    num: 18,
    title: 'La Ecuación del Valor: La Balanza de Alex Hormozi',
    subtitle: 'Cálculo de valor directivo: (Certeza x Resultado Soñado) / (Tiempo x Esfuerzo & Fricción).',
    img: '/blueprints/slide_18.png',
    category: 'Negociación & Valor',
    framework: 'Alex Hormozi & Richard Thaler'
  },
  {
    num: 19,
    title: 'Síntesis: El Sistema del Líder Generativo',
    subtitle: 'Mente (Hardware) -> Cultura (Código Fuente) -> Operación (La Red) -> Sincronización (Resultado).',
    img: '/blueprints/slide_19.png',
    category: 'Arquitectura Holística',
    framework: 'Framework Interrupción'
  },
  {
    num: 20,
    title: 'Manifiesto de Ejecución y Rigor Sistémico',
    subtitle: 'Del piloto automático a la coherencia de campo: reglas innegociables para comités de alto impacto.',
    img: '/blueprints/slide_20.png',
    category: 'Cierre Estratégico',
    framework: 'Sistema Interrupción'
  }
];

const CANONICAL_DOCS = [
  {
    id: 'generative-blueprint',
    title: 'The Generative OS Blueprint (20 Láminas)',
    author: 'Sistema Interrupción / Gemini Notebook Lab',
    type: 'PPTX / Diapositivas Visuales',
    size: '28.2 MB',
    fileUrl: '/docs/the_generative_os_blueprint.pptx',
    icon: '📐',
    badge: 'Arquitectura Visual',
    color: '#3b82f6',
    desc: 'Presentación ejecutiva completa en 20 láminas tipo blueprint de alta resolución. Contiene diagnósticos, matrices de decisión, diagramas de flujo y protocolos de acción directiva.',
    highlights: ['20 Blueprints de Alta Resolución', 'Matriz de Seguridad Psicológica', 'Ciclo de Promesas Inmutables', 'Síntesis del Líder Generativo'],
    relatedVideoId: 'de-la-inercia-a-la-accion',
    isBlueprintDirect: true
  },
  {
    id: 'playbook-inercia-accion',
    title: 'Playbook: De la Inercia a la Acción Generativa',
    author: 'Equipo Metodológico Interrupción',
    type: 'PDF Document',
    size: '223 KB (9 Páginas)',
    fileUrl: '/docs/playbook_de_la_inercia_a_la_accion_generativa.pdf',
    icon: '🚀',
    badge: 'Playbook Maestro',
    color: '#10b981',
    desc: 'Manual exhaustivo de 10 cápsulas prácticas que desglosa el marco teórico, fórmulas directivas, storyboards de 4 láminas y hojas de acción ejecutiva para cada distinción.',
    highlights: ['Storyboards de las 10 Masterclasses', 'KPI: Índice de Lenguaje Proactivo', 'Hojas de Acción (Worksheets) Directivas', 'Protocolos Fisiológicos y Lingüísticos'],
    relatedVideoId: 'de-la-inercia-a-la-accion'
  },
  {
    id: 'seguridad-psicologica-edmondson',
    title: 'Seguridad Psicológica: Estudio & Protocolo Completo',
    author: 'Dra. Amy Edmondson (Harvard Business School)',
    type: 'PDF Document',
    size: '801 KB (10 Páginas)',
    fileUrl: '/docs/seguridad_psicologica_amy_edmondson.pdf',
    icon: '🛡️',
    badge: 'Harvard Framework',
    color: '#8b5cf6',
    desc: 'Compendio científico que documenta los 5 pilares de la seguridad psicológica, la matriz de 4 zonas de rendimiento y las pautas para erradicar el miedo en comités de alta dirección.',
    highlights: ['Definición rigurosa de Honestidad Radical', 'Matriz Ansiedad vs Aprendizaje', 'Guía para Líderes: Errores sin Castigo', 'Casos de Estudio de Alto Desempeño'],
    relatedVideoId: 'seguridad-psicologica'
  },
  {
    id: 'agencia-radical-rotter-epicteto',
    title: 'Agencia Radical: Julian Rotter & Epicteto',
    author: 'Julian B. Rotter & Epicteto de Frigia',
    type: 'PDF Document',
    size: '1.0 MB (17 Páginas)',
    fileUrl: '/docs/agencia_radical_julian_rotter_epicteto.pdf',
    icon: '🏛️',
    badge: 'Pilar Ontológico',
    color: '#f59e0b',
    desc: 'Tratado de 17 páginas que une la psicología experimental del Locus de Control con el estoicismo antiguo. La base ontológica para erradicar el rol de víctima y asumir responsabilidad generativa.',
    highlights: ['Escala I-E de Locus de Control', 'Enquiridión y Dicotomía del Control', 'Transformación de Quejas en Declaraciones', 'Conducta Direccional y Expectativas'],
    relatedVideoId: 'agencia-radical'
  },
  {
    id: 'elizabeth-loftus-mandela',
    title: 'Memoria Reconstructiva & Efecto Mandela Corporativo',
    author: 'Dra. Elizabeth Loftus (UC Irvine)',
    type: 'DOCX / Manual Canónico',
    size: '50.4 KB (220 Párrafos)',
    fileUrl: '/docs/elizabeth_loftus_memoria_reconstructiva_efecto_mandela.docx',
    icon: '🧠',
    badge: 'Neuro-Rigor',
    color: '#ef4444',
    desc: 'Documento directivo sobre cómo la memoria humana distorsiona acuerdos orales con el tiempo, y cómo blindar las decisiones de comités mediante acuerdos escritos inmutables.',
    highlights: ['Los 4 Sesgos de la Memoria en Juntas', 'El Fenómeno Mandela en Organizaciones', 'Protocolo de Acuerdo Inmutable (3 Variables)', 'Checklist de Cierre de Compromisos'],
    relatedVideoId: 'efecto-mandela-corporativo'
  }
];

export default function BibliotecaRecursos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'blueprint';
  const [activeTab, setActiveTab] = useState(initialTab);
  
  const slideParam = parseInt(searchParams.get('slide'), 10);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(
    !isNaN(slideParam) && slideParam >= 1 && slideParam <= 20 ? slideParam - 1 : 0
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const currentSlide = BLUEPRINT_SLIDES[currentSlideIdx];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams(prev => {
      const p = new URLSearchParams(prev);
      p.set('tab', tab);
      return p;
    });
  };

  const handleNextSlide = () => {
    setCurrentSlideIdx((prev) => (prev + 1) % BLUEPRINT_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIdx((prev) => (prev - 1 + BLUEPRINT_SLIDES.length) % BLUEPRINT_SLIDES.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeTab !== 'blueprint') return;
      if (e.key === 'ArrowRight') handleNextSlide();
      if (e.key === 'ArrowLeft') handlePrevSlide();
      if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, isFullscreen]);

  const filteredDocs = useMemo(() => {
    if (!searchTerm.trim()) return CANONICAL_DOCS;
    const term = searchTerm.toLowerCase();
    return CANONICAL_DOCS.filter(d => 
      d.title.toLowerCase().includes(term) ||
      d.author.toLowerCase().includes(term) ||
      d.desc.toLowerCase().includes(term) ||
      d.highlights.some(h => h.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      {/* HEADER PRINCIPAL */}
      <div className="card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--crear-gold)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '2rem' }}>📚</span>
              <div>
                <span className="badge" style={{ backgroundColor: 'rgba(217, 119, 6, 0.2)', color: 'var(--crear-gold)' }}>
                  Centro Canónico de Documentación
                </span>
                <h1 style={{ margin: 0, fontSize: '1.8rem', color: 'var(--text-main)' }}>
                  Biblioteca de Recursos & Blueprint Generativo
                </h1>
              </div>
            </div>
            <p style={{ margin: 0, color: 'var(--text-muted)', maxWidth: '800px', fontSize: '0.95rem' }}>
              Accede a los 5 manuales científicos, playbooks de alta dirección y a la arquitectura visual de 20 láminas 
              generadas para el <strong>Sistema Interrupción</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/masterclass" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🎬</span> Ir a Videoteca
            </Link>
            <a 
              href="/docs/the_generative_os_blueprint.pptx" 
              download 
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>📥</span> Descargar PPTX (28 MB)
            </a>
          </div>
        </div>

        {/* TABS DE NAVEGACIÓN */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => handleTabChange('blueprint')}
            style={{
              padding: '0.6rem 1.25rem',
              background: activeTab === 'blueprint' ? 'var(--crear-blue)' : 'transparent',
              color: activeTab === 'blueprint' ? '#ffffff' : 'var(--text-muted)',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <span>📐</span> Visor Blueprint OS (20 Láminas)
          </button>

          <button
            onClick={() => handleTabChange('documentos')}
            style={{
              padding: '0.6rem 1.25rem',
              background: activeTab === 'documentos' ? 'var(--crear-blue)' : 'transparent',
              color: activeTab === 'documentos' ? '#ffffff' : 'var(--text-muted)',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <span>📄</span> Manuales & Playbooks ({CANONICAL_DOCS.length})
          </button>

          <button
            onClick={() => handleTabChange('matriz')}
            style={{
              padding: '0.6rem 1.25rem',
              background: activeTab === 'matriz' ? 'var(--crear-blue)' : 'transparent',
              color: activeTab === 'matriz' ? '#ffffff' : 'var(--text-muted)',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s'
            }}
          >
            <span>🗺️</span> Matriz Video ↔ Documento
          </button>
        </div>
      </div>

      {/* CONTENIDO SEGÚN TAB ACTIVA */}

      {/* TAB 1: VISOR BLUEPRINT INTERACTIVO */}
      {activeTab === 'blueprint' && (
        <div className="animate-fade-in">
          <div className="card" style={{ padding: '1.25rem', marginBottom: '1.5rem', background: '#090d16', border: '1px solid #1e293b' }}>
            {/* BARRA SUPERIOR DEL VISOR */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <span className="badge" style={{ backgroundColor: '#1e3a8a', color: '#60a5fa', marginRight: '0.5rem' }}>
                  Lámina {currentSlide.num} de {BLUEPRINT_SLIDES.length}
                </span>
                <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: '#94a3b8' }}>
                  {currentSlide.category}
                </span>
                <h2 style={{ color: '#f8fafc', margin: '0.5rem 0 0.25rem 0', fontSize: '1.35rem' }}>
                  {currentSlide.title}
                </h2>
                <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>
                  {currentSlide.subtitle}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button 
                  onClick={handlePrevSlide}
                  className="btn-secondary"
                  title="Lámina anterior (Flecha Izquierda)"
                  style={{ padding: '0.5rem 1rem' }}
                >
                  ◀ Anterior
                </button>
                <button 
                  onClick={handleNextSlide}
                  className="btn-primary"
                  title="Siguiente lámina (Flecha Derecha)"
                  style={{ padding: '0.5rem 1.25rem' }}
                >
                  Siguiente ▶
                </button>
                <button 
                  onClick={() => setIsFullscreen(true)}
                  className="btn-secondary"
                  title="Ampliar a pantalla completa"
                  style={{ padding: '0.5rem 0.85rem' }}
                >
                  🔍 Zoom
                </button>
              </div>
            </div>

            {/* VISTA PRINCIPAL DE LA LÁMINA */}
            <div 
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#040711',
                border: '1px solid #1e293b',
                aspectRatio: '16 / 9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img 
                src={currentSlide.img} 
                alt={currentSlide.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            {/* CARRUSEL DE MINIATURAS INFERIOR */}
            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Navegación Rápida por Miniaturas (Usa las flechas del teclado ◀ ▶)
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--crear-gold)' }}>
                  Marco: {currentSlide.framework}
                </span>
              </div>

              <div 
                style={{
                  display: 'flex',
                  gap: '0.75rem',
                  overflowX: 'auto',
                  paddingBottom: '0.75rem',
                  scrollbarWidth: 'thin'
                }}
              >
                {BLUEPRINT_SLIDES.map((slide, idx) => {
                  const isSelected = idx === currentSlideIdx;
                  return (
                    <button
                      key={slide.num}
                      onClick={() => setCurrentSlideIdx(idx)}
                      style={{
                        flex: '0 0 140px',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: isSelected ? '2px solid var(--crear-gold)' : '1px solid rgba(255,255,255,0.1)',
                        background: isSelected ? 'rgba(217, 119, 6, 0.15)' : '#0f172a',
                        padding: '4px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s',
                        opacity: isSelected ? 1 : 0.65
                      }}
                    >
                      <img 
                        src={slide.img} 
                        alt={slide.title} 
                        style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: '4px' }}
                      />
                      <div style={{ fontSize: '0.75rem', color: isSelected ? '#fbbf24' : '#cbd5e1', marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        #{slide.num} {slide.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: MANUALES & PLAYBOOKS CANÓNICOS */}
      {activeTab === 'documentos' && (
        <div className="animate-fade-in">
          {/* BUSCADOR DE DOCUMENTOS */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, position: 'relative' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por título, autor (Edmondson, Rotter, Loftus...) o concepto clave..."
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem 0.85rem 2.75rem',
                  borderRadius: '10px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem'
                }}
              />
              <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>
                🔍
              </span>
            </div>
          </div>

          {/* LISTA DE TARJETAS DE DOCUMENTOS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>
            {filteredDocs.map((doc) => (
              <div 
                key={doc.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: `4px solid ${doc.color}`,
                  background: 'var(--card-bg)',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div 
                        style={{ 
                          width: '44px', 
                          height: '44px', 
                          borderRadius: '10px', 
                          background: `${doc.color}20`, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          fontSize: '1.5rem'
                        }}
                      >
                        {doc.icon}
                      </div>
                      <div>
                        <span className="badge" style={{ backgroundColor: `${doc.color}20`, color: doc.color }}>
                          {doc.badge}
                        </span>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                          {doc.author}
                        </div>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px' }}>
                      {doc.size}
                    </span>
                  </div>

                  <h3 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0', fontSize: '1.15rem', lineHeight: '1.3' }}>
                    {doc.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.45', marginBottom: '1rem' }}>
                    {doc.desc}
                  </p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
                      Puntos Clave:
                    </span>
                    <ul style={{ margin: '0.35rem 0 0 0', paddingLeft: '1.2rem', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                      {doc.highlights.map((h, i) => (
                        <li key={i} style={{ marginBottom: '3px' }}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a
                    href={doc.fileUrl}
                    download
                    className="btn-primary"
                    style={{ flex: 1, minWidth: '130px', textAlign: 'center', fontSize: '0.85rem', padding: '0.6rem 0.75rem' }}
                  >
                    📥 Descargar
                  </a>

                  <a
                    href={doc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ textAlign: 'center', fontSize: '0.85rem', padding: '0.6rem 0.75rem' }}
                    title="Abrir directamente en navegador"
                  >
                    👁️ Ver
                  </a>

                  {doc.relatedVideoId && (
                    <Link
                      to={`/masterclass`}
                      className="btn-secondary"
                      style={{ textAlign: 'center', fontSize: '0.85rem', padding: '0.6rem 0.75rem' }}
                      title="Ver video asociado en Masterclass"
                    >
                      🎬 Video
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: MATRIZ DE INTEGRACIÓN VIDEO ↔ DOCUMENTO */}
      {activeTab === 'matriz' && (
        <div className="animate-fade-in card">
          <h2 style={{ color: 'var(--text-main)', marginTop: 0, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🗺️</span> Matriz de Coherencia: Distinción, Video y Manual de Soporte
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Cada cápsula audiovisual de la plataforma cuenta con su correspondiente respaldo bibliográfico y lámina de blueprint para implementación directa.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Distinción / Módulo</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Marco Científico</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Lámina Blueprint</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Documento Canónico</th>
                  <th style={{ padding: '0.75rem 0.5rem', textAlign: 'right' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    ⚡ Quiebre Ontológico
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Heidegger & Flores</td>
                  <td style={{ padding: '0.85rem 0.5rem' }}>
                    <button onClick={() => { setActiveTab('blueprint'); setCurrentSlideIdx(2); }} style={{ background: 'none', border: 'none', color: 'var(--crear-blue)', cursor: 'pointer', textDecoration: 'underline' }}>
                      Lámina #3
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Playbook Inercia a Acción</td>
                  <td style={{ padding: '0.85rem 0.5rem', textAlign: 'right' }}>
                    <a href="/docs/playbook_de_la_inercia_a_la_accion_generativa.pdf" download className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                      📥 PDF
                    </a>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    🚀 Inercia a la Acción
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Deci & Ryan</td>
                  <td style={{ padding: '0.85rem 0.5rem' }}>
                    <button onClick={() => { setActiveTab('blueprint'); setCurrentSlideIdx(4); }} style={{ background: 'none', border: 'none', color: 'var(--crear-blue)', cursor: 'pointer', textDecoration: 'underline' }}>
                      Lámina #5
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Playbook Inercia a Acción</td>
                  <td style={{ padding: '0.85rem 0.5rem', textAlign: 'right' }}>
                    <a href="/docs/playbook_de_la_inercia_a_la_accion_generativa.pdf" download className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                      📥 PDF
                    </a>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    🛡️ Seguridad Psicológica
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Dra. Amy Edmondson (Harvard)</td>
                  <td style={{ padding: '0.85rem 0.5rem' }}>
                    <button onClick={() => { setActiveTab('blueprint'); setCurrentSlideIdx(10); }} style={{ background: 'none', border: 'none', color: 'var(--crear-blue)', cursor: 'pointer', textDecoration: 'underline' }}>
                      Lámina #11
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Manual Edmondson (10 págs)</td>
                  <td style={{ padding: '0.85rem 0.5rem', textAlign: 'right' }}>
                    <a href="/docs/seguridad_psicologica_amy_edmondson.pdf" download className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                      📥 PDF
                    </a>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    🏛️ Agencia Radical
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Julian Rotter & Epicteto</td>
                  <td style={{ padding: '0.85rem 0.5rem' }}>
                    <button onClick={() => { setActiveTab('blueprint'); setCurrentSlideIdx(6); }} style={{ background: 'none', border: 'none', color: 'var(--crear-blue)', cursor: 'pointer', textDecoration: 'underline' }}>
                      Lámina #7
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Tratado Rotter & Epicteto (17 págs)</td>
                  <td style={{ padding: '0.85rem 0.5rem', textAlign: 'right' }}>
                    <a href="/docs/agencia_radical_julian_rotter_epicteto.pdf" download className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                      📥 PDF
                    </a>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    🧠 Efecto Mandela Corporativo
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Dra. Elizabeth Loftus</td>
                  <td style={{ padding: '0.85rem 0.5rem' }}>
                    <button onClick={() => { setActiveTab('blueprint'); setCurrentSlideIdx(8); }} style={{ background: 'none', border: 'none', color: 'var(--crear-blue)', cursor: 'pointer', textDecoration: 'underline' }}>
                      Lámina #9
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Manual Loftus (DOCX)</td>
                  <td style={{ padding: '0.85rem 0.5rem', textAlign: 'right' }}>
                    <a href="/docs/elizabeth_loftus_memoria_reconstructiva_efecto_mandela.docx" download className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                      📥 DOCX
                    </a>
                  </td>
                </tr>

                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    🤝 Anatomía del Acuerdo
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Rafael Echeverría</td>
                  <td style={{ padding: '0.85rem 0.5rem' }}>
                    <button onClick={() => { setActiveTab('blueprint'); setCurrentSlideIdx(14); }} style={{ background: 'none', border: 'none', color: 'var(--crear-blue)', cursor: 'pointer', textDecoration: 'underline' }}>
                      Lámina #15
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Blueprint Generativo</td>
                  <td style={{ padding: '0.85rem 0.5rem', textAlign: 'right' }}>
                    <a href="/docs/the_generative_os_blueprint.pptx" download className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                      📥 PPTX
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style={{ padding: '0.85rem 0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                    📈 Arquitectura del Valor
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Alex Hormozi</td>
                  <td style={{ padding: '0.85rem 0.5rem' }}>
                    <button onClick={() => { setActiveTab('blueprint'); setCurrentSlideIdx(17); }} style={{ background: 'none', border: 'none', color: 'var(--crear-blue)', cursor: 'pointer', textDecoration: 'underline' }}>
                      Lámina #18
                    </button>
                  </td>
                  <td style={{ padding: '0.85rem 0.5rem', color: 'var(--text-muted)' }}>Blueprint Generativo</td>
                  <td style={{ padding: '0.85rem 0.5rem', textAlign: 'right' }}>
                    <a href="/docs/the_generative_os_blueprint.pptx" download className="btn-secondary" style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem' }}>
                      📥 PPTX
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL FULLSCREEN PARA ZOOM DE LÁMINA */}
      {isFullscreen && (
        <div 
          onClick={() => setIsFullscreen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
        >
          <div style={{ position: 'absolute', top: '20px', right: '30px', display: 'flex', gap: '1rem', zIndex: 10 }}>
            <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', alignSelf: 'center' }}>
              Lámina {currentSlide.num} / 20 (Presiona ESC para salir)
            </span>
            <button 
              onClick={() => setIsFullscreen(false)}
              style={{
                background: 'rgba(255,255,255,0.2)',
                color: 'var(--text-main)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.25rem'
              }}
            >
              ✕
            </button>
          </div>

          <img 
            src={currentSlide.img} 
            alt={currentSlide.title}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '95vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
            }}
          />

          <div 
            onClick={(e) => e.stopPropagation()}
            style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}
          >
            <button onClick={handlePrevSlide} className="btn-secondary">◀ Anterior</button>
            <button onClick={handleNextSlide} className="btn-primary">Siguiente ▶</button>
          </div>
        </div>
      )}
    </div>
  );
}
