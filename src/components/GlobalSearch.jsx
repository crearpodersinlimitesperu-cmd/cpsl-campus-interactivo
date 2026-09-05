import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { GLOSSARY_TERMS } from './GlossaryTerm';

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  // Atajo de teclado global: Ctrl + K o Cmd + K y evento personalizado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-global-search', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-global-search', handleCustomOpen);
    };
  }, [isOpen]);

  // Enfocar input al abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Base de datos de búsqueda global
  const searchIndex = useMemo(() => {
    const items = [
      // Páginas Principales
      {
        id: 'p-dashboard',
        title: 'Centro de Mando & Dashboard',
        desc: 'Métricas de rendimiento, racha, horas activas y estatus de compliance.',
        category: 'Páginas',
        icon: '📊',
        path: '/dashboard'
      },
      {
        id: 'p-ruta',
        title: 'Ruta Estratégica de Formación',
        desc: 'Mapa interactivo con las fases de maestría y lecciones estructuradas.',
        category: 'Páginas',
        icon: '🧭',
        path: '/ruta'
      },
      {
        id: 'p-glosario',
        title: 'Glosario Canónico de Interrupción',
        desc: 'Diccionario con bases científicas (Kahneman, Loftus, Heidegger, Damasio).',
        category: 'Páginas',
        icon: '📖',
        path: '/glosario'
      },
      {
        id: 'p-simulador',
        title: 'Simulador de Alta Dirección & Toma de Decisiones',
        desc: 'El Crisol del Día: resolución de dilemas éticos y de gobernanza corporativa.',
        category: 'Herramientas & Simuladores',
        icon: '⚡',
        path: '/gamificacion?tab=simulador'
      },
      {
        id: 'p-liderazgo',
        title: 'Matriz de Liderazgo Adaptativo (2 Ejes)',
        desc: 'Evaluación de Rigor vs Empatía en el plano cartesiano de alta dirección.',
        category: 'Herramientas & Simuladores',
        icon: '🛡️',
        path: '/gamificacion?tab=perfil'
      },
      {
        id: 'p-guiones',
        title: 'Manual de Comunicación Estratégica & SB7',
        desc: 'StoryBrand para directivos, guiones de objeción y plantillas ejecutivas.',
        category: 'Páginas',
        icon: '📜',
        path: '/guiones-mj'
      },
      {
        id: 'p-masterclass',
        title: 'Masterclass Canónica de Distinciones (Video MP4)',
        desc: 'Video de alta resolución: Seguridad Psicológica (Amy Edmondson), Hechos vs Opiniones y Rigor Directivo.',
        category: 'Páginas & Video',
        icon: '🎬',
        path: '/masterclass'
      },
      {
        id: 'p-vende',
        title: 'Vende Sin Vender & Ecuación de Valor',
        desc: 'Metodología ética de negociación y arquitectura de ofertas de bajo riesgo.',
        category: 'Páginas',
        icon: '💼',
        path: '/vende-sin-vender'
      },
      {
        id: 'p-groundings',
        title: 'Calibración de Estado & Neuro-Atención (Groundings)',
        desc: 'Ejercicios de respiración fisiológica 4x4 y presencia somática ejecutiva.',
        category: 'Herramientas & Simuladores',
        icon: '🧘',
        path: '/groundings'
      },
      {
        id: 'p-sintergia',
        title: 'Laboratorio Sintérgico (Dr. Jacobo Grinberg)',
        desc: 'Calibrador de Coherencia EEG, Meditación Autoalusiva, Lattice, Hipercampo y Neuromarketing.',
        category: 'Herramientas & Simuladores',
        icon: '🌌',
        path: '/laboratorio-sintergico'
      },
      {
        id: 'p-quiebres',
        title: 'Máquina de Quiebres Ontológicos',
        desc: 'Declaración y resolución generativa de fricciones y cuellos de botella.',
        category: 'Herramientas & Simuladores',
        icon: '⚡',
        path: '/quiebres'
      },
      {
        id: 'p-autoevaluacion',
        title: 'Autoevaluación de Liderazgo & Competencias',
        desc: 'Diagnóstico de 10 dimensiones de efectividad directiva.',
        category: 'Herramientas & Simuladores',
        icon: '🧭',
        path: '/autoevaluacion'
      },
      {
        id: 'p-admin',
        title: 'Centro de Mando & Auditoría de Desempeño (Admin)',
        desc: 'Telemetría de usuarios, ordenamiento por última conexión y filtros de compliance.',
        category: 'Páginas',
        icon: '⚙️',
        path: '/admin'
      },

      // Módulos Clave
      {
        id: 'm-mod1',
        title: 'Módulo 1: Biología de la Decisión & Tres Cerebros',
        desc: 'Neurobiología del Sistema 1 y 2, desactivación de la amígdala y confianza.',
        category: 'Módulos & Lecciones',
        icon: '🧠',
        path: '/modulo/modulo1'
      },
      {
        id: 'm-mod2',
        title: 'Módulo 2: La Ecuación de Valor (Alex Hormozi)',
        desc: 'Cómo eliminar la fricción operativa y multiplicar la certeza percibida.',
        category: 'Módulos & Lecciones',
        icon: '⚖️',
        path: '/modulo/modulo2'
      },
      {
        id: 'm-mod3',
        title: 'Módulo 3: El Plan Maestro de Enrolamiento en 3 Pasos',
        desc: 'Estructuración de acuerdos voluntarios bajo el marco del Viaje del Héroe.',
        category: 'Módulos & Lecciones',
        icon: '🎯',
        path: '/modulo/modulo3'
      },
      {
        id: 'm-mod4',
        title: 'Módulo 4: Liderazgo Adaptativo & Agencia Radical',
        desc: 'Responsabilidad incondicional, acuerdos inmutables y trazabilidad de desempeño.',
        category: 'Módulos & Lecciones',
        icon: '🏆',
        path: '/modulo/modulo4'
      }
    ];

    // Integrar términos del Glosario canónico automáticamente
    Object.entries(GLOSSARY_TERMS).forEach(([key, term]) => {
      items.push({
        id: `g-${key}`,
        title: term.title,
        desc: term.body,
        category: 'Glosario & Neurociencia',
        icon: key === 'efecto mandela' ? '⭐' : '🔬',
        path: `/glosario`
      });
    });

    return items;
  }, []);

  // Filtrado de resultados
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return searchIndex.slice(0, 8); // Sugerencias iniciales
    }
    const cleanQuery = query.toLowerCase().trim();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(cleanQuery) ||
      item.desc.toLowerCase().includes(cleanQuery) ||
      item.category.toLowerCase().includes(cleanQuery)
    );
  }, [searchIndex, query]);

  // Manejo de teclado dentro del buscador
  const handleKeyDownList = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredResults.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % (filteredResults.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults[selectedIndex]) {
        handleSelect(filteredResults[selectedIndex]);
      }
    }
  };

  const handleSelect = (item) => {
    setIsOpen(false);
    navigate(item.path);
  };

  return (
    <>
      {/* Botón flotante / disparador en barra para abrir el buscador */}
      <button
        onClick={() => setIsOpen(true)}
        className="global-search-trigger"
        aria-label="Abrir buscador global (Ctrl + K)"
        title="Buscador Global (Ctrl + K)"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(15, 23, 42, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '10px',
          padding: '0.45rem 0.85rem',
          color: '#cbd5e1',
          cursor: 'pointer',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s',
          fontSize: '0.85rem'
        }}
      >
        <span style={{ fontSize: '1rem' }}>🔍</span>
        <span style={{ display: 'none', md: 'inline' }} className="search-label">Buscar...</span>
        <kbd style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '0.15rem 0.4rem',
          borderRadius: '4px',
          fontSize: '0.72rem',
          color: '#94a3b8',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          Ctrl K
        </kbd>
      </button>

      {/* Modal Palette */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(3, 7, 18, 0.75)',
            backdropFilter: 'blur(10px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '4rem 1rem 1rem'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              background: '#0b1329',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '16px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.85), 0 0 30px rgba(56, 189, 248, 0.15)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: '80vh'
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDownList}
          >
            {/* Input Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem 1.25rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              gap: '0.75rem'
            }}>
              <span style={{ fontSize: '1.2rem', color: '#38bdf8' }}>🔍</span>
              <input
                ref={inputRef}
                type="text"
                placeholder="Buscar en Interrupción (módulos, Efecto Mandela, lecciones, glosario, simuladores)..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  fontSize: '1.05rem',
                  fontFamily: 'inherit'
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '1rem'
                  }}
                >
                  ✕
                </button>
              )}
              <kbd style={{
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                color: '#94a3b8',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '0.75rem'
              }}
            >
              {filteredResults.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#94a3b8' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔎</div>
                  <div style={{ fontWeight: '600', color: '#f1f5f9' }}>No se encontraron coincidencias para "{query}"</div>
                  <div style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
                    Prueba buscando "Efecto Mandela", "Agencia Radical", "Simulador", "Kahneman" o "Valor".
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {filteredResults.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={item.id}
                        onClick={() => handleSelect(item)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.85rem',
                          padding: '0.75rem 1rem',
                          borderRadius: '10px',
                          background: isSelected ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                          border: isSelected ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid transparent',
                          cursor: 'pointer',
                          transition: 'all 0.15s'
                        }}
                      >
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          background: isSelected ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.2rem',
                          flexShrink: 0
                        }}>
                          {item.icon}
                        </div>

                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.15rem' }}>
                            <span style={{
                              fontWeight: isSelected ? '700' : '600',
                              color: isSelected ? '#38bdf8' : '#f8fafc',
                              fontSize: '0.95rem',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {item.title}
                            </span>
                            <span style={{
                              fontSize: '0.7rem',
                              padding: '0.1rem 0.45rem',
                              borderRadius: '4px',
                              background: 'rgba(255, 255, 255, 0.08)',
                              color: '#94a3b8',
                              flexShrink: 0
                            }}>
                              {item.category}
                            </span>
                          </div>
                          <div style={{
                            fontSize: '0.82rem',
                            color: '#94a3b8',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            {item.desc}
                          </div>
                        </div>

                        {isSelected && (
                          <span style={{ fontSize: '0.8rem', color: '#38bdf8', flexShrink: 0 }}>
                            ↵ Abrir
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer / Shortcuts Info */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.65rem 1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(0,0,0,0.2)',
              fontSize: '0.78rem',
              color: '#64748b'
            }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span><kbd style={{ background: 'rgba(255,255,255,0.06)', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>↑↓</kbd> Navegar</span>
                <span><kbd style={{ background: 'rgba(255,255,255,0.06)', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>↵</kbd> Seleccionar</span>
                <span><kbd style={{ background: 'rgba(255,255,255,0.06)', padding: '0.1rem 0.3rem', borderRadius: '3px' }}>ESC</kbd> Cerrar</span>
              </div>
              <span style={{ color: '#f59e0b', fontWeight: '600' }}>Sistema Interrupción</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
