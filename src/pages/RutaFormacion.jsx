import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { curriculum } from '../data/curriculum';
import { 
  orientacionData,
  nodusStaffModules, 
  nodusStaffBadges, 
  nodusStaffRoleCertifications, 
  nodusStaffSimulations, 
  nodusStaffTechnicalSpec,
  rolesDesbloqueadosFisonomia
} from '../data/nodusStaffCurriculum';
import { getUserProgress } from '../services/db';
import DOMPurify from 'dompurify';

export default function RutaFormacion() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('staff'); // 'staff' | 'academic'
  const [progress, setProgress] = useState({ completedLessons: [], evaluationsPassed: [] });

  // Estado persistente de Gamificación y Maestría
  const storageKey = user ? `nodus_maestria_state_${user.uid}` : 'nodus_maestria_state_guest';
  const [staffState, setStaffState] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
      // Fallback a clave previa
      const legacy = localStorage.getItem(user ? `nodus_staff_state_${user.uid}` : 'nodus_staff_state_guest');
      if (legacy) return JSON.parse(legacy);
    } catch (e) {
      console.warn("Error leyendo estado de maestría de localStorage", e);
    }
    return {
      xp: 850,
      streak: 5,
      currentTrack: 'Arquitectura de Valor',
      nivelMaestria: 3,
      completedLessons: ['staff_1_1'],
      unlockedBadges: ['mente_aprendiz'],
      simulationAnswers: {}
    };
  });

  const [activeSimulationId, setActiveSimulationId] = useState('sim_caso_1');
  
  // Estados para el Protocolo de Orientación: Construir desde la Nada
  const [orientacionStep, setOrientacionStep] = useState(1);
  const [trainerName, setTrainerName] = useState(user?.displayName || 'Tu Nombre');
  const [copiedAnchor, setCopiedAnchor] = useState(null);
  const [peleleCount, setPeleleCount] = useState(0);
  const [customVision, setCustomVision] = useState('');
  const [visionSaved, setVisionSaved] = useState(false);

  const [activeLessonModal, setActiveLessonModal] = useState(null);
  const [showTechnicalBlueprint, setShowTechnicalBlueprint] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Estados interactivos para el Simulador de la Ecuación de Valor (Alex Hormozi)
  const [valResultado, setValResultado] = useState(9);
  const [valProbabilidad, setValProbabilidad] = useState(8);
  const [valTiempo, setValTiempo] = useState(2);
  const [valEsfuerzo, setValEsfuerzo] = useState(2);

  // Estados interactivos para el Checklist de Impecabilidad (5 Filtros)
  const [checklist, setChecklist] = useState({
    vasijaVacia: true,
    dolorIdentificado: true,
    ecuacionEquilibrada: true,
    modoCausa: false,
    libreEleccion: false
  });

  // Guardar estado en localStorage al cambiar
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(staffState));
    } catch (e) {
      console.warn("Error guardando estado de maestría", e);
    }
  }, [staffState, storageKey]);

  useEffect(() => {
    if (user) {
      getUserProgress(user.uid).then(p => setProgress(p || { completedLessons: [], evaluationsPassed: [] }));
    }
  }, [user]);

  const showToast = (msg, type = 'gold') => {
    setToastMessage({ msg, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Cálculo del nivel de maestría según XP acumulado
  const calculateMaestriaLevel = (xp) => {
    for (let i = rolesDesbloqueadosFisonomia.length - 1; i >= 0; i--) {
      if (xp >= rolesDesbloqueadosFisonomia[i].minXp) {
        return rolesDesbloqueadosFisonomia[i].nivel;
      }
    }
    return 1;
  };

  const getMaestriaData = (lvl) => {
    return rolesDesbloqueadosFisonomia.find(r => r.nivel === lvl) || rolesDesbloqueadosFisonomia[0];
  };

  // Manejador de respuestas en la simulación interactiva
  const handleAnswerSimulation = (simId, option) => {
    const currentAns = staffState.simulationAnswers[simId];
    if (currentAns?.isCorrect) return; // Ya resuelto correctamente

    const newXp = Math.max(0, staffState.xp + option.xpDelta);
    const newLvl = calculateMaestriaLevel(newXp);
    let updatedBadges = [...staffState.unlockedBadges];

    // Desbloquear medalla si es correcta y elegible
    const currentSim = nodusStaffSimulations.find(s => s.id === simId);
    if (option.isCorrect && currentSim?.badgeEligible && !updatedBadges.includes(currentSim.badgeEligible)) {
      updatedBadges.push(currentSim.badgeEligible);
      showToast(`🏅 ¡Medalla Desbloqueada: ${currentSim.badgeEligible.toUpperCase()}!`, 'success');
    }

    setStaffState(prev => ({
      ...prev,
      xp: newXp,
      nivelMaestria: newLvl,
      unlockedBadges: updatedBadges,
      simulationAnswers: {
        ...prev.simulationAnswers,
        [simId]: {
          selectedOptionId: option.id,
          isCorrect: option.isCorrect,
          feedback: option.feedback,
          classification: option.classification,
          xpDelta: option.xpDelta
        }
      }
    }));

    if (option.isCorrect) {
      showToast(`+${option.xpDelta} XP • Decisión Impecable`, 'success');
    } else {
      showToast(`${option.xpDelta} XP • ${option.classification}`, 'error');
    }
  };

  // Manejador para marcar lección completada desde vista rápida
  const handleCompleteStaffLesson = (lessonId, xpAward = 150) => {
    if (staffState.completedLessons.includes(lessonId)) return;
    const newXp = staffState.xp + xpAward;
    const newLvl = calculateMaestriaLevel(newXp);
    setStaffState(prev => ({
      ...prev,
      xp: newXp,
      nivelMaestria: newLvl,
      completedLessons: [...prev.completedLessons, lessonId]
    }));
    showToast(`✓ Lección completada (+${xpAward} XP)`, 'gold');
  };

  // Helper para copiar SQL
  // Helper para copiar frases ancla de la orientación
  const handleCopyAnchor = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedAnchor(id);
    showToast(`✓ Frase ancla copiada: "${text}"`, 'success');
    setTimeout(() => setCopiedAnchor(null), 2500);
  };

  // Helper para completar el protocolo de orientación (+500 XP)
  const handleCompleteOrientation = () => {
    if (staffState.completedLessons.includes('orientacion_completa')) {
      showToast('Ya has integrado este protocolo en tu bitácora de maestría.', 'gold');
      return;
    }
    const newXp = staffState.xp + 500;
    const newLvl = calculateMaestriaLevel(newXp);
    let badges = [...staffState.unlockedBadges];
    if (!badges.includes('arquitecto_vision')) {
      badges.push('arquitecto_vision');
    }
    setStaffState(prev => ({
      ...prev,
      xp: newXp,
      nivelMaestria: newLvl,
      unlockedBadges: badges,
      completedLessons: [...prev.completedLessons, 'orientacion_completa', 'staff_5_1', 'staff_5_2', 'staff_5_3', 'staff_5_4']
    }));
    showToast('🌌 ¡Protocolo de Orientación Integrado! (+500 XP y Medalla Desbloqueada)', 'success');
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(nodusStaffTechnicalSpec.dbSchemaSql);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  // Presets para el Simulador de la Ecuación de Valor
  const applyPreset = (preset) => {
    if (preset === 'tradicional') {
      setValResultado(6);
      setValProbabilidad(4);
      setValTiempo(8);
      setValEsfuerzo(9);
      showToast('Cargado: Oferta Tradicional con Alta Fricción');
    } else if (preset === 'optimizada') {
      setValResultado(8);
      setValProbabilidad(7);
      setValTiempo(4);
      setValEsfuerzo(4);
      showToast('Cargado: Oferta Optimizada');
    } else if (preset === 'grand_slam') {
      setValResultado(10);
      setValProbabilidad(10);
      setValTiempo(1);
      setValEsfuerzo(1);
      showToast('Cargado: Oferta Grand Slam (Hormozi)', 'success');
    }
  };

  // Cálculo del valor de la ecuación
  const valorCalculado = ((valResultado * valProbabilidad) / Math.max(0.5, (valTiempo * valEsfuerzo) / 2)).toFixed(1);

  // Progreso del checklist de impecabilidad
  const checklistCount = Object.values(checklist).filter(Boolean).length;
  const checklistPercent = Math.round((checklistCount / 5) * 100);

  // Funciones auxiliares de la Ruta Académica existente
  const isAcademicModuleCompleted = (mod) => {
    if (mod.tieneEvaluacion) {
      return progress.evaluationsPassed?.includes(mod.id);
    }
    return mod.lecciones.every(l => progress.completedLessons?.includes(l.id));
  };

  const getAcademicModuleStatus = (mod, index) => {
    if (isAcademicModuleCompleted(mod)) return 'completado';
    if (index === 0) return 'disponible';
    const prevMod = curriculum[index - 1];
    if (isAcademicModuleCompleted(prevMod)) return 'disponible';
    return 'bloqueado';
  };

  const currentLevel = calculateMaestriaLevel(staffState.xp);
  const currentMaestria = getMaestriaData(currentLevel);
  const nextMaestria = currentLevel < 10 ? getMaestriaData(currentLevel + 1) : null;
  const xpCurrentLevelMin = currentMaestria.minXp;
  const xpNextLevelMin = nextMaestria ? nextMaestria.minXp : xpCurrentLevelMin + 1000;
  const xpIntoCurrentLevel = Math.max(0, staffState.xp - xpCurrentLevelMin);
  const xpNeededForNext = Math.max(1, xpNextLevelMin - xpCurrentLevelMin);
  const levelProgressPercent = Math.min(100, Math.round((xpIntoCurrentLevel / xpNeededForNext) * 100));

  const activeSim = nodusStaffSimulations.find(s => s.id === activeSimulationId) || nodusStaffSimulations[0];
  const simResult = staffState.simulationAnswers[activeSim.id];

  return (
    <div className="fade-in" style={{maxWidth: '1100px', margin: '0 auto', paddingBottom: '5rem'}}>
      {/* Toast Alert Flotante */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 9999,
          padding: '12px 24px',
          borderRadius: '30px',
          background: toastMessage.type === 'success' ? '#10b981' : toastMessage.type === 'error' ? '#ef4444' : 'var(--crear-gold)',
          color: toastMessage.type === 'gold' ? '#000' : '#fff',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <span>{toastMessage.msg}</span>
        </div>
      )}

      {/* Header Principal con Marca Oficial */}
      <div style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem'}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span style={{
                background: 'rgba(255, 183, 3, 0.15)',
                color: 'var(--crear-gold)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                letterSpacing: '0.05em'
              }}>
                CREAR PODER SIN LÍMITES
              </span>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                MAESTRÍA EN COMUNICACIÓN Y RETOS
              </span>
            </div>
            <h1 style={{fontSize: '2.6rem', margin: '0.5rem 0 0.2rem', fontWeight: 800}}>Ruta de Formación y Retos</h1>
            <p className="text-muted" style={{fontSize: '1.05rem', margin: 0, maxWidth: '850px'}}>
              Entrenamiento riguroso en Neuromarketing Ético, la Ecuación de Alex Hormozi, Enrolamiento en 3 Pasos y Responsabilidad Radical.
            </p>
          </div>

          <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
            <Link
              to="/guiones-mj"
              className="btn-secondary"
              style={{fontSize: '0.85rem', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', borderColor: '#f59e0b', color: '#f59e0b'}}
            >
              <span>📜 BrandScript & Guiones</span>
            </Link>

            <Link
              to="/gamificacion"
              className="btn-primary"
              style={{fontSize: '0.85rem', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none'}}
            >
              <span>🎮 Simulador & Modo Aprendiz</span>
            </Link>

            {/* Botón de Blueprint Técnico ocultado por solicitud */}
          </div>
        </div>

        {/* Conmutador de Pistas (Track Switcher) */}
        <div style={{
          display: 'flex',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '6px',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.08)',
          marginTop: '1rem'
        }}>
          <button
            onClick={() => setActiveTab('staff')}
            style={{
              flex: 1,
              padding: '12px 20px',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === 'staff' ? 'linear-gradient(135deg, rgba(255,183,3,0.2) 0%, rgba(255,183,3,0.05) 100%)' : 'transparent',
              color: activeTab === 'staff' ? 'var(--crear-gold)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              borderBottom: activeTab === 'staff' ? '2px solid var(--crear-gold)' : '2px solid transparent'
            }}
          >
            <span>⚡</span>
            <span>Maestría en Comunicación, Valor y Retos</span>
            <span style={{
              background: 'var(--crear-gold)',
              color: '#000',
              padding: '2px 8px',
              borderRadius: '10px',
              fontSize: '0.75rem',
              fontWeight: 800
            }}>
              4 Módulos & Retos
            </span>
          </button>

          <button
            onClick={() => setActiveTab('orientacion')}
            style={{
              flex: 1.2,
              padding: '12px 18px',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === 'orientacion' ? 'linear-gradient(135deg, rgba(236,72,153,0.25) 0%, rgba(139,92,246,0.15) 100%)' : 'transparent',
              color: activeTab === 'orientacion' ? '#f472b6' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              borderBottom: activeTab === 'orientacion' ? '2px solid #ec4899' : '2px solid transparent'
            }}
          >
            <span>🧭</span>
            <span>Orientación: Construir desde la Nada</span>
            <span style={{
              background: '#ec4899',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: '10px',
              fontSize: '0.75rem',
              fontWeight: 800
            }}>
              8 Pasos & Visión
            </span>
          </button>

          <button
            onClick={() => setActiveTab('academic')}
            style={{
              flex: 1,
              padding: '12px 18px',
              borderRadius: '12px',
              border: 'none',
              background: activeTab === 'academic' ? 'linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(0,212,255,0.05) 100%)' : 'transparent',
              color: activeTab === 'academic' ? 'var(--crear-blue)' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              transition: 'all 0.3s ease',
              borderBottom: activeTab === 'academic' ? '2px solid var(--crear-blue)' : '2px solid transparent'
            }}
          >
            <span>🎓</span>
            <span>Ruta Académica de Coaching & Transformación</span>
            <span style={{
              background: 'rgba(255,255,255,0.1)',
              color: '#fff',
              padding: '2px 8px',
              borderRadius: '10px',
              fontSize: '0.75rem'
            }}>
              11 Módulos
            </span>
          </button>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PESTAÑA 1: MAESTRÍA EN COMUNICACIÓN, VALOR Y RETOS             */}
      {/* ============================================================== */}
      {activeTab === 'staff' && (
        <div className="fade-in" style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
          
          {/* HUD de Maestría y Competencias (Completamente Neutral) */}
          <section className="glass-panel" style={{
            padding: '1.8rem',
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(7, 13, 31, 0.95) 100%)',
            border: '1px solid rgba(14, 165, 233, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255,183,3,0.15) 0%, rgba(0,0,0,0) 70%)',
              borderRadius: '50%',
              pointerEvents: 'none'
            }}></div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '1.2rem'}}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: 'linear-gradient(135deg, var(--crear-gold) 0%, #b45309 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  boxShadow: '0 8px 20px rgba(255, 183, 3, 0.3)'
                }}>
                  ⚖️
                </div>
                <div>
                  <div style={{fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--crear-gold)', fontWeight: 800, letterSpacing: '0.05em'}}>
                    Nivel de Maestría en Comunicación y Retos
                  </div>
                  <h2 style={{margin: '0.1rem 0', fontSize: '1.6rem', color: '#fff'}}>
                    Nivel {currentLevel}: {currentMaestria.rol}
                  </h2>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>
                    {currentMaestria.desc}
                  </div>
                </div>
              </div>

              {/* Contadores XP, Racha y Enfoque */}
              <div style={{display: 'flex', gap: '1.2rem', flexWrap: 'wrap'}}>
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase'}}>XP Acumulado</div>
                  <div style={{fontSize: '1.6rem', fontWeight: 900, color: 'var(--crear-gold)'}}>
                    {staffState.xp.toLocaleString()} <span style={{fontSize: '0.8rem', fontWeight: 'normal'}}>XP</span>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase'}}>Racha Activa</div>
                  <div style={{fontSize: '1.6rem', fontWeight: 900, color: '#f87171'}}>
                    {staffState.streak} 🔥 <span style={{fontSize: '0.75rem', color: '#fbbf24', fontWeight: 600}}>x1.2 XP</span>
                  </div>
                </div>

                {/* Enfoque de Práctica Activo */}
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <label htmlFor="maestria-track-select" style={{fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase'}}>
                    Enfoque Activo
                  </label>
                  <select
                    id="maestria-track-select"
                    value={staffState.currentTrack}
                    onChange={(e) => setStaffState(prev => ({ ...prev, currentTrack: e.target.value }))}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff',
                      borderRadius: '8px',
                      padding: '4px 8px',
                      fontSize: '0.85rem',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Neuromarketing Ético" style={{background: '#070d1f'}}>Neuromarketing Ético</option>
                    <option value="Arquitectura de Valor" style={{background: '#070d1f'}}>Arquitectura de Valor</option>
                    <option value="Narrativa y StoryBrand" style={{background: '#070d1f'}}>Narrativa y StoryBrand</option>
                    <option value="Responsabilidad Radical" style={{background: '#070d1f'}}>Responsabilidad Radical</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Barra de progreso de Maestría */}
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px', color: 'var(--text-muted)'}}>
                <span>
                  {nextMaestria 
                    ? `Progreso hacia Nivel ${nextMaestria.nivel}: ${nextMaestria.rol}` 
                    : 'NIVEL MÁXIMO DE MAESTRÍA ALCANZADO'}
                </span>
                <span style={{color: 'var(--crear-gold)', fontWeight: 'bold'}}>
                  {nextMaestria ? `${xpIntoCurrentLevel} / ${xpNeededForNext} XP (${levelProgressPercent}%)` : 'MAESTRÍA COMPLETA'}
                </span>
              </div>
              <div className="progress-bar-container" style={{height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px'}}>
                <div 
                  className="progress-bar-fill" 
                  style={{
                    width: `${levelProgressPercent}%`,
                    background: 'linear-gradient(90deg, var(--crear-gold) 0%, #38bdf8 100%)',
                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)'
                  }}
                ></div>
              </div>
            </div>
          </section>

          {/* SIMULADOR INTERACTIVO DE LA ECUACIÓN DE VALOR (ALEX HORMOZI) */}
          <section className="glass-panel" style={{
            padding: '2rem',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(7, 13, 31, 0.98) 100%)'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem'}}>
              <div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.3rem'}}>
                  <span style={{
                    background: 'rgba(245, 158, 11, 0.2)',
                    color: '#fbbf24',
                    padding: '3px 10px',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    fontWeight: 800
                  }}>
                    CALCULADORA & SIMULADOR EN VIVO
                  </span>
                  <span style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>
                    Marco Teórico: Alex Hormozi ($100M Offers)
                  </span>
                </div>
                <h3 style={{fontSize: '1.6rem', margin: '0.2rem 0', color: '#fff'}}>
                  Simulador de la Ecuación de Valor
                </h3>
                <p style={{fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, maxWidth: '720px'}}>
                  Ajusta las 4 palancas en tiempo real para observar cómo el cerebro humano calcula el valor percibido y cómo se desactiva el Perro Guardián.
                </p>
              </div>

              {/* Presets Rápidos */}
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                <button 
                  onClick={() => applyPreset('tradicional')}
                  className="btn-secondary"
                  style={{fontSize: '0.75rem', padding: '6px 12px'}}
                >
                  Oferta Tradicional
                </button>
                <button 
                  onClick={() => applyPreset('optimizada')}
                  className="btn-secondary"
                  style={{fontSize: '0.75rem', padding: '6px 12px'}}
                >
                  Oferta Optimizada
                </button>
                <button 
                  onClick={() => applyPreset('grand_slam')}
                  className="btn-primary"
                  style={{fontSize: '0.75rem', padding: '6px 12px'}}
                >
                  ⚡ Grand Slam
                </button>
              </div>
            </div>

            {/* Display de la Fórmula y Resultado */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.4)',
              padding: '1.5rem',
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: '1.5rem'
            }}>
              <div>
                <div style={{fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--crear-gold)', fontWeight: 800, marginBottom: '6px'}}>
                  Fórmula Matemática
                </div>
                <div style={{fontFamily: 'monospace', fontSize: '1rem', color: '#fde047', background: 'rgba(0,0,0,0.5)', padding: '0.8rem', borderRadius: '8px'}}>
                  Valor = (Resultado [{valResultado}] × Probabilidad [{valProbabilidad}]) / (Retraso [{valTiempo}] × Esfuerzo [{valEsfuerzo}])
                </div>
              </div>

              <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase'}}>Índice de Valor Percibido</div>
                <div style={{
                  fontSize: '2.8rem',
                  fontWeight: 900,
                  color: valorCalculado >= 20 ? '#34d399' : valorCalculado >= 8 ? 'var(--crear-gold)' : '#f87171'
                }}>
                  {valorCalculado}x
                </div>
                <span style={{
                  fontSize: '0.8rem',
                  padding: '3px 12px',
                  borderRadius: '12px',
                  background: valorCalculado >= 20 ? 'rgba(16, 185, 129, 0.2)' : valorCalculado >= 8 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  color: valorCalculado >= 20 ? '#34d399' : valorCalculado >= 8 ? '#fbbf24' : '#f87171',
                  fontWeight: 'bold'
                }}>
                  {valorCalculado >= 20 ? '🏆 OFERTA IRRESISTIBLE (GRAND SLAM)' : valorCalculado >= 8 ? '⚖️ PROPUESTA EQUILIBRADA' : '⚠️ RESISTENCIA ELEVADA (PERRO GUARDiÁN EN ALERTA)'}
                </span>
              </div>
            </div>

            {/* Sliders Interactivos de las 4 Palancas */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem'}}>
              
              {/* Palanca 1 */}
              <div className="glass-panel" style={{padding: '1rem', borderLeft: '3px solid #10b981'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem'}}>
                  <strong style={{color: '#34d399', fontSize: '0.88rem'}}>🍲 1. Resultado Anhelado</strong>
                  <span style={{color: '#fff', fontWeight: 'bold'}}>{valResultado}/10</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={valResultado} 
                  onChange={(e) => setValResultado(Number(e.target.value))}
                  style={{width: '100%', accentColor: '#10b981', cursor: 'pointer'}}
                />
                <p style={{fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.3rem 0 0'}}>
                  La magnitud del sueño. «La sopa aromática y nutritiva».
                </p>
              </div>

              {/* Palanca 2 */}
              <div className="glass-panel" style={{padding: '1rem', borderLeft: '3px solid #38bdf8'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem'}}>
                  <strong style={{color: '#38bdf8', fontSize: '0.88rem'}}>🌉 2. Probabilidad de Logro</strong>
                  <span style={{color: '#fff', fontWeight: 'bold'}}>{valProbabilidad}/10</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={valProbabilidad} 
                  onChange={(e) => setValProbabilidad(Number(e.target.value))}
                  style={{width: '100%', accentColor: '#38bdf8', cursor: 'pointer'}}
                />
                <p style={{fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.3rem 0 0'}}>
                  Certeza transmitida. «El puente de acero con barandillas».
                </p>
              </div>

              {/* Palanca 3 */}
              <div className="glass-panel" style={{padding: '1rem', borderLeft: '3px solid #f59e0b'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem'}}>
                  <strong style={{color: '#fbbf24', fontSize: '0.88rem'}}>🍎 3. Retraso Temporal</strong>
                  <span style={{color: '#fff', fontWeight: 'bold'}}>{valTiempo}/10</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={valTiempo} 
                  onChange={(e) => setValTiempo(Number(e.target.value))}
                  style={{width: '100%', accentColor: '#f59e0b', cursor: 'pointer'}}
                />
                <p style={{fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.3rem 0 0'}}>
                  Tiempo para ver la primera victoria (1 = Inmediato, 10 = Años).
                </p>
              </div>

              {/* Palanca 4 */}
              <div className="glass-panel" style={{padding: '1rem', borderLeft: '3px solid #ec4899'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem'}}>
                  <strong style={{color: '#f472b6', fontSize: '0.88rem'}}>💊 4. Esfuerzo & Sacrificio</strong>
                  <span style={{color: '#fff', fontWeight: 'bold'}}>{valEsfuerzo}/10</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={valEsfuerzo} 
                  onChange={(e) => setValEsfuerzo(Number(e.target.value))}
                  style={{width: '100%', accentColor: '#ec4899', cursor: 'pointer'}}
                />
                <p style={{fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.3rem 0 0'}}>
                  Carga y fricción percibida (1 = Píldora lista, 10 = Gimnasio agotador).
                </p>
              </div>
            </div>

            {/* Diagnóstico Ontológico Dinámico */}
            <div style={{
              marginTop: '1.2rem',
              padding: '1rem',
              borderRadius: '10px',
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.08)',
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
              lineHeight: '1.6'
            }}>
              <strong style={{color: '#fff'}}>Diagnóstico de la Conversación:</strong>{' '}
              {valEsfuerzo >= 7 || valTiempo >= 7 ? (
                <span style={{color: '#fca5a5'}}>
                  El denominador está sobrecargado. El Perro Guardián levantará objeciones inmediatas como «no tengo tiempo» o «no tengo dinero». Desfragmenta el proceso en hábitos de 5 minutos y entrega una plantilla prediseñada para acelerar su primer resultado en 48 horas.
                </span>
              ) : valResultado >= 8 && valProbabilidad >= 8 ? (
                <span style={{color: '#a7f3d0'}}>
                  La discrepancia de valor es contundente. El participante percibe un acompañamiento probado donde el costo de no avanzar supera con creces el esfuerzo requerido. Es el momento de ofrecer un acuerdo firme y sellar su palabra.
                </span>
              ) : (
                <span>
                  La propuesta tiene tracción moderada. Incrementa la prueba social con testimonios y ofrece una rampa de bajo compromiso (sesión de calibración de 15 minutos) para elevar la probabilidad de logro sin generar fricción.
                </span>
              )}
            </div>
          </section>

          {/* SIMULADOR INTERACTIVO DE RETOS SITUACIONALES */}
          <section className="glass-panel" style={{
            padding: '2rem',
            border: '1px solid rgba(255, 183, 3, 0.3)',
            background: 'linear-gradient(135deg, rgba(255, 183, 3, 0.04) 0%, rgba(7, 13, 31, 0.98) 100%)'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem'}}>
              <div>
                <span style={{
                  background: 'rgba(255,183,3,0.15)',
                  color: 'var(--crear-gold)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}>
                  ENTRENAMIENTO SITUACIONAL DE TOMA DE DECISIONES
                </span>
                <h3 style={{fontSize: '1.5rem', margin: '0.4rem 0 0'}}>6 Retos Prácticos de Comunicación</h3>
              </div>

              {/* Selector de Casos */}
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                {nodusStaffSimulations.map((sim, i) => {
                  const isAnswered = staffState.simulationAnswers[sim.id]?.isCorrect;
                  return (
                    <button
                      key={sim.id}
                      onClick={() => setActiveSimulationId(sim.id)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: activeSimulationId === sim.id ? 'var(--crear-gold)' : 'rgba(255,255,255,0.1)',
                        background: activeSimulationId === sim.id ? 'rgba(255,183,3,0.2)' : 'rgba(0,0,0,0.3)',
                        color: activeSimulationId === sim.id ? 'var(--crear-gold)' : 'var(--text-muted)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Reto {i + 1}</span>
                      {isAnswered && <span style={{color: '#10b981'}}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Escenario del Caso Activo */}
            <div style={{
              background: 'rgba(0,0,0,0.5)',
              borderLeft: '4px solid var(--crear-gold)',
              padding: '1.2rem',
              borderRadius: '8px',
              marginBottom: '1.5rem'
            }}>
              <div style={{fontSize: '0.8rem', color: 'var(--crear-gold)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.3rem'}}>
                {activeSim.category} • {activeSim.title}
              </div>
              <p style={{fontSize: '1.05rem', color: '#fff', margin: 0, lineHeight: '1.7'}}>
                {activeSim.scenario}
              </p>
            </div>

            {/* Opciones Interactivas */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
              {activeSim.options.map((opt, optIndex) => {
                const isSelected = simResult?.selectedOptionId === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswerSimulation(activeSim.id, opt)}
                    style={{
                      padding: '1rem 1.2rem',
                      borderRadius: '12px',
                      border: '1px solid',
                      borderColor: isSelected 
                        ? (opt.isCorrect ? '#10b981' : '#ef4444') 
                        : 'rgba(255,255,255,0.1)',
                      background: isSelected 
                        ? (opt.isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)') 
                        : 'rgba(255,255,255,0.02)',
                      textAlign: 'left',
                      color: '#fff',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      cursor: simResult?.isCorrect ? 'default' : 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{
                      fontWeight: 800,
                      color: opt.isCorrect && isSelected ? '#34d399' : 'var(--crear-gold)',
                      background: 'rgba(255,255,255,0.05)',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontSize: '0.85rem'
                    }}>
                      Opción {String.fromCharCode(65 + optIndex)}
                    </span>
                    <span style={{flex: 1}}>{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Retroalimentación Ontológica Inmediata */}
            {simResult && (
              <div style={{
                marginTop: '1.5rem',
                padding: '1.2rem',
                borderRadius: '12px',
                background: simResult.isCorrect ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                border: `1px solid ${simResult.isCorrect ? '#10b981' : '#ef4444'}`
              }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <strong style={{color: simResult.isCorrect ? '#34d399' : '#f87171', fontSize: '1rem'}}>
                    {simResult.isCorrect ? '✓ DECISIÓN IMPECABLE' : '✗ EVALUACIÓN ONTOLÓGICA'} — {simResult.classification}
                  </strong>
                  <span style={{
                    fontWeight: 800,
                    color: simResult.xpDelta > 0 ? '#34d399' : '#f87171',
                    fontSize: '0.9rem'
                  }}>
                    {simResult.xpDelta > 0 ? `+${simResult.xpDelta} XP` : `${simResult.xpDelta} XP`}
                  </span>
                </div>
                <p style={{margin: 0, fontSize: '0.95rem', color: '#e5e7eb', lineHeight: '1.6'}}>
                  {simResult.feedback}
                </p>
              </div>
            )}
          </section>

          {/* CHECKLIST INTERACTIVO DE IMPECABILIDAD (5 FILTROS) */}
          <section className="glass-panel" style={{
            padding: '1.8rem',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.04) 0%, rgba(7, 13, 31, 0.98) 100%)'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem'}}>
              <div>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}>
                  CALIBRACIÓN DE INTEGRIDAD
                </span>
                <h3 style={{fontSize: '1.4rem', margin: '0.3rem 0 0'}}>
                  Checklist de Impecabilidad del Comunicador (5 Filtros)
                </h3>
              </div>
              <div style={{textAlign: 'right'}}>
                <span style={{fontSize: '1.4rem', fontWeight: 900, color: checklistPercent === 100 ? '#34d399' : 'var(--crear-gold)'}}>
                  {checklistPercent}%
                </span>
                <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>
                  {checklistCount} de 5 filtros validados
                </div>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
              {[
                { key: 'vasijaVacia', title: '1. Vasija Vacía', desc: 'Silencié mi ego, mi necesidad de convencer y mis metas numéricas para escuchar al 100% al otro.' },
                { key: 'dolorIdentificado', title: '2. Dolor Interno Identificado', desc: 'Comprendo la emoción profunda detrás de su resistencia en lugar de quedarme en la queja superficial.' },
                { key: 'ecuacionEquilibrada', title: '3. Ecuación Equilibrada', desc: 'Diseñé una rampa de bajo compromiso (15 min) que reduce el esfuerzo y el riesgo a cero.' },
                { key: 'modoCausa', title: '4. Modo Causa Activo', desc: 'Asumo el 100% de la responsabilidad de la conexión sin culpar a las circunstancias ni al participante.' },
                { key: 'libreEleccion', title: '5. Libre Elección Respetada', desc: 'Honro incondicionalmente su libertad de decir que «No» sin ejercer ninguna forma de coerción o juicio.' }
              ].map(item => (
                <label 
                  key={item.key}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '0.8rem 1rem',
                    borderRadius: '10px',
                    background: checklist[item.key] ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${checklist[item.key] ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <input 
                    type="checkbox" 
                    checked={checklist[item.key]} 
                    onChange={(e) => {
                      setChecklist(prev => ({ ...prev, [item.key]: e.target.checked }));
                      if (e.target.checked) showToast(`✓ Filtro validado: ${item.title}`);
                    }}
                    style={{marginTop: '4px', accentColor: '#10b981', cursor: 'pointer'}}
                  />
                  <div>
                    <strong style={{color: checklist[item.key] ? '#34d399' : '#fff', fontSize: '0.92rem'}}>
                      {item.title}
                    </strong>
                    <p style={{margin: '0.2rem 0 0', fontSize: '0.82rem', color: 'var(--text-muted)'}}>
                      {item.desc}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* MATRIZ DE COMPETENCIAS Y RETOS DE MAESTRÍA */}
          <section className="glass-panel" style={{padding: '1.5rem'}}>
            <h3 style={{fontSize: '1.3rem', margin: '0 0 0.5rem'}}>Matriz de Competencias y Retos de Maestría</h3>
            <p className="text-muted" style={{fontSize: '0.9rem', marginBottom: '1.2rem'}}>
              Niveles de acreditación basados exclusivamente en dominio conceptual, rigor ético y superación de retos prácticos.
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem'}}>
              {nodusStaffRoleCertifications.map((cert, idx) => {
                const fisonomiaMet = currentLevel >= cert.minFisonomia;
                const badgeMet = !cert.requiredBadge || staffState.unlockedBadges.includes(cert.requiredBadge);
                const isCertified = fisonomiaMet && badgeMet;

                return (
                  <div 
                    key={idx}
                    style={{
                      background: isCertified ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isCertified ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: '12px',
                      padding: '1rem'
                    }}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                      <strong style={{color: isCertified ? '#34d399' : '#fff', fontSize: '0.95rem'}}>
                        {cert.role}
                      </strong>
                      <span style={{
                        fontSize: '0.7rem',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        background: isCertified ? '#10b981' : 'rgba(255,255,255,0.1)',
                        color: isCertified ? '#000' : 'var(--text-muted)',
                        fontWeight: 'bold'
                      }}>
                        {isCertified ? 'DOMINADO' : 'EN DESARROLLO'}
                      </span>
                    </div>

                    <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 0.8rem', lineHeight: '1.4'}}>
                      {cert.description}
                    </p>

                    <div style={{fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.6rem'}}>
                      <div style={{color: fisonomiaMet ? '#34d399' : '#f87171'}}>
                        {fisonomiaMet ? '✓' : '✗'} Nivel de Maestría ≥ {cert.minFisonomia} (Actual: {currentLevel})
                      </div>
                      {cert.badgeName && (
                        <div style={{color: badgeMet ? '#34d399' : '#f87171'}}>
                          {badgeMet ? '✓' : '✗'} Insignia «{cert.badgeName}»
                        </div>
                      )}
                      {cert.moduleName && (
                        <div style={{color: '#34d399'}}>
                          ✓ Módulo «{cert.moduleName}»
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* VITRINA DE INSIGNIAS DE MAESTRÍA */}
          <section>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem'}}>
              <div>
                <h3 style={{fontSize: '1.4rem', margin: 0}}>Vitrina de Insignias de Maestría</h3>
                <p className="text-muted" style={{fontSize: '0.9rem', margin: 0}}>
                  Distintivos que validan el dominio de las herramientas de comunicación y facilitación ontológica.
                </p>
              </div>
              <span style={{fontSize: '0.85rem', color: 'var(--crear-gold)', fontWeight: 600}}>
                {staffState.unlockedBadges.length} de {nodusStaffBadges.length} desbloqueadas
              </span>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem'}}>
              {nodusStaffBadges.map(badge => {
                const isUnlocked = staffState.unlockedBadges.includes(badge.id);
                return (
                  <div 
                    key={badge.id}
                    className="glass-panel"
                    style={{
                      padding: '1.2rem',
                      borderTop: `3px solid ${isUnlocked ? badge.color : 'rgba(255,255,255,0.1)'}`,
                      opacity: isUnlocked ? 1 : 0.6,
                      background: isUnlocked ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem'}}>
                      <div style={{
                        fontSize: '1.8rem',
                        filter: isUnlocked ? 'none' : 'grayscale(100%)',
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {badge.icon}
                      </div>
                      <div>
                        <h4 style={{margin: 0, fontSize: '1rem', color: isUnlocked ? '#fff' : 'var(--text-muted)'}}>
                          {badge.name}
                        </h4>
                        <span style={{fontSize: '0.75rem', color: badge.color, fontWeight: 700}}>
                          +{badge.xpReward} XP
                        </span>
                      </div>
                    </div>

                    <p style={{fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5', minHeight: '48px', margin: '0 0 0.8rem'}}>
                      {badge.requirement}
                    </p>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem'}}>
                      <span style={{fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)'}}>
                        {badge.code}
                      </span>
                      {isUnlocked ? (
                        <span style={{color: '#10b981', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px'}}>
                          ✓ Desbloqueada
                        </span>
                      ) : (
                        <span style={{color: 'rgba(255,255,255,0.4)'}}>
                          🔒 Bloqueada
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* PLAN DE ESTUDIOS: 4 MÓDULOS DE CONOCIMIENTO */}
          <section>
            <div style={{marginBottom: '1.5rem'}}>
              <h3 style={{fontSize: '1.5rem', margin: '0 0 0.3rem'}}>Plan de Conocimiento: Módulos I al IV</h3>
              <p className="text-muted" style={{fontSize: '0.95rem', margin: 0}}>
                Síntesis rigurosa y no redundante de los principios fundamentales de la comunicación y el enrolamiento ético.
              </p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {nodusStaffModules.map((modulo) => {
                const completedCount = modulo.lecciones.filter(l => staffState.completedLessons.includes(l.id)).length;
                const isModComplete = completedCount === modulo.lecciones.length;

                return (
                  <article 
                    key={modulo.id} 
                    className="glass-panel" 
                    style={{
                      padding: '1.8rem',
                      borderLeft: `4px solid ${isModComplete ? '#10b981' : 'var(--crear-gold)'}`,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem'}}>
                      <div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.3rem'}}>
                          <span style={{
                            background: 'rgba(255,183,3,0.15)',
                            color: 'var(--crear-gold)',
                            padding: '2px 8px',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 700
                          }}>
                            {modulo.numero}
                          </span>
                          <span style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>
                            ⏱️ {modulo.duracionMinutos}
                          </span>
                          <span style={{fontSize: '0.8rem', color: '#38bdf8'}}>
                            🎯 {modulo.rolObjetivo}
                          </span>
                        </div>
                        <h4 style={{fontSize: '1.3rem', margin: '0.2rem 0 0.4rem', color: '#fff'}}>
                          {modulo.titulo}
                        </h4>
                        <p className="text-muted" style={{fontSize: '0.92rem', margin: 0, maxWidth: '750px'}}>
                          {modulo.descripcion}
                        </p>
                      </div>

                      <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                        <Link 
                          to={`/modulo/${modulo.id}`} 
                          className="btn-primary" 
                          style={{
                            textDecoration: 'none', 
                            fontSize: '0.85rem', 
                            padding: '10px 20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <span>Iniciar en Lector</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Lecciones Desplegadas */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '0.8rem',
                      marginTop: '1.2rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255,255,255,0.06)'
                    }}>
                      {modulo.lecciones.map((leccion) => {
                        const isLessonDone = staffState.completedLessons.includes(leccion.id);
                        return (
                          <div 
                            key={leccion.id}
                            style={{
                              background: 'rgba(255,255,255,0.02)',
                              border: '1px solid rgba(255,255,255,0.06)',
                              borderRadius: '10px',
                              padding: '10px 14px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              gap: '10px'
                            }}
                          >
                            <div>
                              <div style={{fontSize: '0.85rem', fontWeight: 600, color: '#fff', marginBottom: '2px'}}>
                                {leccion.title}
                              </div>
                              <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>
                                {leccion.durationMinutes} min de lectura • +150 XP
                              </div>
                            </div>

                            <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                              <button
                                onClick={() => setActiveLessonModal({ modulo, leccion })}
                                className="btn-secondary"
                                style={{fontSize: '0.75rem', padding: '4px 8px'}}
                              >
                                Ver
                              </button>
                              {isLessonDone ? (
                                <span style={{color: '#10b981', fontSize: '0.85rem', fontWeight: 'bold'}}>✓</span>
                              ) : (
                                <button
                                  onClick={() => handleCompleteStaffLesson(leccion.id, 150)}
                                  style={{
                                    background: 'rgba(255,183,3,0.15)',
                                    color: 'var(--crear-gold)',
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '4px 8px',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                  }}
                                >
                                  +XP
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

        </div>
      )}


      {/* ============================================================== */}
      {/* PESTAÑA 3: ESQUELETO DE LA ORIENTACIÓN: CONSTRUIR DESDE LA NADA */}
      {/* ============================================================== */}
      {activeTab === 'orientacion' && (
        <div className="fade-in" style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
          
          {/* HEADER DEL PROTOCOLO */}
          <section className="glass-panel" style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(236,72,153,0.1) 0%, rgba(139,92,246,0.05) 50%, rgba(7,13,31,0.95) 100%)',
            border: '1px solid rgba(236,72,153,0.3)',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem'}}>
              <div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.6rem'}}>
                  <span style={{background: 'rgba(236,72,153,0.2)', color: '#f472b6', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800}}>
                    CAUSA OS • PROTOCOLO MAESTRO
                  </span>
                  <span style={{background: 'rgba(255,183,3,0.15)', color: 'var(--crear-gold)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 800}}>
                    CREAR PODER SIN LÍMITES
                  </span>
                </div>
                <h2 style={{fontSize: '2.2rem', margin: '0 0 0.5rem', fontWeight: 800, color: '#fff'}}>
                  Esqueleto de la Orientación: “Construir desde la Nada”
                </h2>
                <p style={{fontSize: '1.05rem', color: 'var(--text-muted)', margin: 0, maxWidth: '850px', lineHeight: 1.6}}>
                  Punto cero de creación ontológica. La orientación no viene a parchar tu identidad pasada: viene a romper el contexto viejo, abrazar la incertidumbre creativa y forjar una <strong>visión colectiva inquebrantable</strong>.
                </p>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px'}}>
                <button
                  onClick={handleCompleteOrientation}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '14px',
                    border: 'none',
                    background: staffState.completedLessons.includes('orientacion_completa') ? 'rgba(16,185,129,0.2)' : 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                    color: staffState.completedLessons.includes('orientacion_completa') ? '#34d399' : '#fff',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(236,72,153,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <span>{staffState.completedLessons.includes('orientacion_completa') ? '✓ Protocolo Integrado' : '⚡ Integrar en Bitácora (+500 XP)'}</span>
                </button>
                <span style={{fontSize: '0.78rem', color: 'var(--text-muted)'}}>
                  {staffState.completedLessons.includes('orientacion_completa') ? 'Insignia Arquitecto de Visión Cuántica activa' : 'Supera los 8 pasos y consolida tu visión'}
                </span>
              </div>
            </div>

            {/* CITA MANIFIESTO DE APERTURA */}
            <div style={{
              marginTop: '1.8rem',
              padding: '1.2rem 1.6rem',
              background: 'rgba(0,0,0,0.5)',
              borderLeft: '4px solid #ec4899',
              borderRadius: '10px'
            }}>
              <div style={{fontSize: '0.82rem', textTransform: 'uppercase', color: '#f472b6', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '0.3rem'}}>
                Frase Clave de Apertura
              </div>
              <div style={{fontSize: '1.2rem', color: '#fff', fontStyle: 'italic', fontWeight: 600}}>
                «Construir no está mal… pero está jodido si vienes de creerte libre siendo quien crees que eres.»
              </div>
              <div style={{fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.4rem'}}>
                Hoy no venimos a mejorar lo que ya eres. Venimos a <strong>inventar quiénes somos</strong> desde una hoja en blanco.
              </div>
            </div>
          </section>

          {/* 6 FRASES ANCLA INTERACTIVAS */}
          <section className="glass-panel" style={{padding: '1.8rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.5rem'}}>
              <div>
                <h3 style={{margin: 0, fontSize: '1.3rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <span>⚓</span> Frases Ancla para Repetir durante la Orientación
                </h3>
                <p style={{margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)'}}>
                  Mántricas, contundentes e innegociables. Haz clic en cualquier frase para copiarla instantáneamente.
                </p>
              </div>
              <span style={{fontSize: '0.8rem', background: 'rgba(255,255,255,0.06)', padding: '4px 12px', borderRadius: '12px', color: 'var(--text-muted)'}}>
                6 Pilares Mántricos
              </span>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem'}}>
              {orientacionData.frasesAncla.map((fa) => {
                const isCopied = copiedAnchor === fa.id;
                return (
                  <div
                    key={fa.id}
                    onClick={() => handleCopyAnchor(fa.texto, fa.id)}
                    style={{
                      background: isCopied ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.02)',
                      border: isCopied ? '1px solid #10b981' : '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '14px',
                      padding: '1.2rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '0.8rem'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ec4899'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = isCopied ? '#10b981' : 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <div>
                      <div style={{fontSize: '0.75rem', color: '#f472b6', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '0.3rem'}}>
                        {fa.contexto}
                      </div>
                      <div style={{fontSize: '1.1rem', fontWeight: 800, color: '#fff', fontStyle: 'italic', lineHeight: 1.4}}>
                        «{fa.texto}»
                      </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                      <span style={{
                        fontSize: '0.78rem',
                        padding: '4px 10px',
                        borderRadius: '8px',
                        background: isCopied ? '#10b981' : 'rgba(255,255,255,0.08)',
                        color: isCopied ? '#000' : 'var(--text-muted)',
                        fontWeight: 700
                      }}>
                        {isCopied ? '✓ Copiado' : '📋 Copiar'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* NAVEGADOR DE LOS 8 PASOS DE LA ORIENTACIÓN */}
          <section className="glass-panel" style={{padding: '1.8rem'}}>
            <div style={{marginBottom: '1.5rem'}}>
              <div style={{fontSize: '0.85rem', color: '#f472b6', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                Ruta Paso a Paso de Transformación
              </div>
              <h3 style={{fontSize: '1.6rem', margin: '0.2rem 0', color: '#fff'}}>
                Los 8 Pasos del Esqueleto de Orientación
              </h3>
              <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0}}>
                Selecciona cualquier paso para profundizar en su metodología, dinámicas vivenciales y herramientas de facilitación.
              </p>
            </div>

            {/* BOTONERA HORIZONTAL DE 8 PASOS */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
              gap: '8px',
              marginBottom: '2rem'
            }}>
              {orientacionData.pasos.map((p) => {
                const isSelected = orientacionStep === p.paso;
                return (
                  <button
                    key={p.paso}
                    onClick={() => setOrientacionStep(p.paso)}
                    style={{
                      padding: '12px 8px',
                      borderRadius: '12px',
                      border: isSelected ? '2px solid #ec4899' : '1px solid rgba(255,255,255,0.08)',
                      background: isSelected ? 'linear-gradient(135deg, rgba(236,72,153,0.25) 0%, rgba(139,92,246,0.15) 100%)' : 'rgba(255,255,255,0.02)',
                      color: isSelected ? '#fff' : 'var(--text-muted)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span style={{fontSize: '1.4rem'}}>{p.icono}</span>
                    <span style={{fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: isSelected ? '#f472b6' : 'var(--text-muted)'}}>
                      Paso {p.paso}
                    </span>
                    <span style={{fontSize: '0.75rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.2, color: isSelected ? '#fff' : 'rgba(255,255,255,0.7)'}}>
                      {p.titulo.split(':')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* DETALLE PROFUNDO DEL PASO SELECCIONADO */}
            {(() => {
              const currentPaso = orientacionData.pasos.find(p => p.paso === orientacionStep) || orientacionData.pasos[0];
              return (
                <div className="fade-in" style={{
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(236,72,153,0.3)',
                  borderRadius: '18px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.8rem'
                }}>
                  {/* Encabezado del paso */}
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                      <div style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem'
                      }}>
                        {currentPaso.icono}
                      </div>
                      <div>
                        <span style={{fontSize: '0.8rem', color: '#f472b6', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                          Paso {currentPaso.paso} de 8
                        </span>
                        <h4 style={{fontSize: '1.6rem', margin: '0.2rem 0', color: '#fff'}}>
                          {currentPaso.titulo}
                        </h4>
                      </div>
                    </div>

                    <div style={{display: 'flex', gap: '8px'}}>
                      <button
                        disabled={orientacionStep <= 1}
                        onClick={() => setOrientacionStep(prev => Math.max(1, prev - 1))}
                        className="btn-secondary"
                        style={{padding: '8px 14px', fontSize: '0.82rem', opacity: orientacionStep <= 1 ? 0.4 : 1}}
                      >
                        ← Anterior
                      </button>
                      <button
                        disabled={orientacionStep >= 8}
                        onClick={() => setOrientacionStep(prev => Math.min(8, prev + 1))}
                        className="btn-secondary"
                        style={{padding: '8px 14px', fontSize: '0.82rem', opacity: orientacionStep >= 8 ? 0.4 : 1, borderColor: '#ec4899', color: '#f472b6'}}
                      >
                        Siguiente →
                      </button>
                    </div>
                  </div>

                  {/* Frase Clave Destacada */}
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(139,92,246,0.1) 100%)',
                    borderLeft: '4px solid #ec4899',
                    padding: '1.2rem 1.6rem',
                    borderRadius: '10px'
                  }}>
                    <div style={{fontSize: '0.78rem', color: '#f472b6', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem'}}>
                      {currentPaso.paso === 2 ? 'Pregunta Disruptiva' : 'Frase Clave Ontológica'}
                    </div>
                    <div style={{fontSize: '1.25rem', fontWeight: 800, color: '#fff', fontStyle: 'italic', lineHeight: 1.4}}>
                      {currentPaso.fraseClave}
                    </div>
                  </div>

                  {/* Mensaje Central */}
                  <div>
                    <h5 style={{fontSize: '1rem', color: 'var(--crear-gold)', margin: '0 0 0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em'}}>
                      💡 Mensaje Central & Propósito Ontológico
                    </h5>
                    <p style={{fontSize: '1.05rem', color: '#fff', lineHeight: 1.7, margin: 0}}>
                      {currentPaso.mensajeCentral}
                    </p>
                  </div>

                  {/* Grid: Metáfora / Imagen Potente vs Advertencia */}
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem'}}>
                    <div style={{
                      background: 'rgba(56,189,248,0.06)',
                      border: '1px solid rgba(56,189,248,0.2)',
                      borderRadius: '12px',
                      padding: '1.2rem'
                    }}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem'}}>
                        <span style={{fontSize: '1.2rem'}}>🌌</span>
                        <h6 style={{margin: 0, fontSize: '0.92rem', color: '#38bdf8', textTransform: 'uppercase', fontWeight: 800}}>
                          Imagen Potente / Metáfora
                        </h6>
                      </div>
                      <p style={{margin: 0, fontSize: '0.92rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6}}>
                        {currentPaso.imagenPotente}
                      </p>
                    </div>

                    <div style={{
                      background: 'rgba(239,68,68,0.06)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      borderRadius: '12px',
                      padding: '1.2rem'
                    }}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem'}}>
                        <span style={{fontSize: '1.2rem'}}>⚠️</span>
                        <h6 style={{margin: 0, fontSize: '0.92rem', color: '#f87171', textTransform: 'uppercase', fontWeight: 800}}>
                          Advertencia / Riesgo del Ego
                        </h6>
                      </div>
                      <p style={{margin: 0, fontSize: '0.92rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6}}>
                        {currentPaso.advertencia}
                      </p>
                    </div>
                  </div>

                  {/* Mantra Rector */}
                  <div style={{
                    padding: '1rem 1.4rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{fontSize: '1.6rem'}}>🧭</span>
                    <div>
                      <span style={{fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700}}>Mantra Rector del Paso</span>
                      <div style={{fontSize: '1.05rem', color: 'var(--crear-gold)', fontWeight: 700, fontStyle: 'italic'}}>
                        {currentPaso.citaMantra}
                      </div>
                    </div>
                  </div>

                  {/* HERRAMIENTAS INTERACTIVAS SEGÚN EL PASO */}
                  {/* CASO PASO 3: EJEMPLOS HISTÓRICOS */}
                  {currentPaso.paso === 3 && currentPaso.ejemplos && (
                    <div style={{background: 'rgba(255,183,3,0.05)', border: '1px solid rgba(255,183,3,0.25)', borderRadius: '14px', padding: '1.4rem'}}>
                      <h5 style={{margin: '0 0 1rem', fontSize: '1rem', color: 'var(--crear-gold)', textTransform: 'uppercase'}}>
                        🇲🇽 Casos Históricos de Visión Colectiva en Acción
                      </h5>
                      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem'}}>
                        {currentPaso.ejemplos.map((ej, idx) => (
                          <div key={idx} style={{background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)'}}>
                            <div style={{fontWeight: 800, color: '#fff', fontSize: '1rem', marginBottom: '0.4rem'}}>
                              {ej.figura}
                            </div>
                            <div style={{fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5}}>
                              {ej.leccion}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CASO PASO 4: UBUNTU Y FÍSICA CUÁNTICA */}
                  {currentPaso.paso === 4 && (
                    <div style={{background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.25)', borderRadius: '14px', padding: '1.4rem'}}>
                      <h5 style={{margin: '0 0 0.8rem', fontSize: '1rem', color: '#a78bfa', textTransform: 'uppercase'}}>
                        ⚛️ Resonancia Cuántica en Sala
                      </h5>
                      <p style={{fontSize: '0.92rem', color: '#fff', lineHeight: 1.6, margin: '0 0 1rem'}}>
                        En física cuántica, dos partículas entrelazadas comparten el mismo estado sin importar la distancia física. En la orientación, los participantes dejan de ser islas desconectadas y se transforman en un único organismo coherente.
                      </p>
                      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                        <div style={{flex: 1, background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px'}}>
                          <div style={{color: '#10b981', fontWeight: 800, marginBottom: '0.3rem'}}>🌍 Ubuntu</div>
                          <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>«Yo soy porque nosotros somos». La victoria solo es real cuando es del equipo entero.</div>
                        </div>
                        <div style={{flex: 1, background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '10px'}}>
                          <div style={{color: '#38bdf8', fontWeight: 800, marginBottom: '0.3rem'}}>⚡ Instinto & Juego</div>
                          <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>No hace falta hablar todo el tiempo: el equipo se mueve por mirada, por presencia y por foco inquebrantable.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CASO PASO 5: PELELE Y HÁBITOS DE JAMES CLEAR */}
                  {currentPaso.paso === 5 && (
                    <div style={{background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: '14px', padding: '1.4rem'}}>
                      <h5 style={{margin: '0 0 0.5rem', fontSize: '1rem', color: '#fbbf24', textTransform: 'uppercase'}}>
                        ⚽ El Gimnasio de Sinapsis: Práctica Constante
                      </h5>
                      <p style={{fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 1rem'}}>
                        James Clear demuestra en <em>Hábitos Atómicos</em> que la maestría no nace de la inspiración esporádica, sino del volumen de repeticiones de baja fricción que cablean nuevas rutas neuronales.
                      </p>
                      <div style={{display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap'}}>
                        <button
                          onClick={() => {
                            setPeleleCount(prev => prev + 1);
                            showToast(`⚽ ¡Pelele #${peleleCount + 1}! Nueva sinapsis forjada en acción.`);
                          }}
                          style={{
                            padding: '10px 20px',
                            borderRadius: '10px',
                            background: '#fbbf24',
                            color: '#000',
                            fontWeight: 800,
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                          }}
                        >
                          <span>⚽ Patear la Pelota una vez más</span>
                        </button>
                        <span style={{fontSize: '0.95rem', color: '#fff'}}>
                          Repeticiones acumuladas en sala: <strong style={{color: '#fbbf24', fontSize: '1.2rem'}}>{peleleCount}</strong>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CASO PASO 6: SIMULADOR DEL GUION DEL ENTRENADOR */}
                  {currentPaso.paso === 6 && (
                    <div style={{background: 'rgba(236,72,153,0.08)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '14px', padding: '1.6rem'}}>
                      <h5 style={{margin: '0 0 0.8rem', fontSize: '1rem', color: '#f472b6', textTransform: 'uppercase'}}>
                        🎙️ Simulador del Guion del Entrenador (Personalizado)
                      </h5>
                      <div style={{marginBottom: '1rem'}}>
                        <label style={{display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem'}}>
                          Ingresa tu nombre para calibrar tu declaración:
                        </label>
                        <input
                          type="text"
                          value={trainerName}
                          onChange={(e) => setTrainerName(e.target.value)}
                          placeholder="Tu Nombre"
                          style={{
                            width: '100%',
                            maxWidth: '300px',
                            padding: '8px 14px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: '#070d1f',
                            color: '#fff',
                            fontSize: '0.95rem'
                          }}
                        />
                      </div>

                      <div style={{
                        background: '#040714',
                        borderLeft: '4px solid #ec4899',
                        padding: '1.2rem',
                        borderRadius: '10px',
                        marginBottom: '1rem'
                      }}>
                        <div style={{fontSize: '1.1rem', color: '#fff', fontStyle: 'italic', lineHeight: 1.6}}>
                          «Mi nombre es <span style={{color: 'var(--crear-gold)', fontWeight: 800}}>{trainerName || '[tu nombre]'}</span>. Les pido permiso de ser su entrenador este fin de semana. Aunque no me elijan, yo soy el entrenador. A partir de ahora, lo que queda es alinear la letra con la música.»
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopyAnchor(`Mi nombre es ${trainerName || '[tu nombre]'}. Les pido permiso de ser su entrenador este fin de semana. Aunque no me elijan, yo soy el entrenador. A partir de ahora, lo que queda es alinear la letra con la música.`, 'guion_entrenador')}
                        className="btn-secondary"
                        style={{fontSize: '0.85rem', padding: '6px 14px', borderColor: '#ec4899', color: '#f472b6'}}
                      >
                        📋 Copiar Guion del Entrenador
                      </button>
                    </div>
                  )}

                  {/* CASO PASO 7: DECLARACIÓN DE COMPROMISO */}
                  {currentPaso.paso === 7 && (
                    <div style={{background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '14px', padding: '1.4rem'}}>
                      <h5 style={{margin: '0 0 0.8rem', fontSize: '1rem', color: '#34d399', textTransform: 'uppercase'}}>
                        🎯 Laboratorio de Declaración de Visión Colectiva
                      </h5>
                      <div style={{display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.2rem'}}>
                        {currentPaso.ejemplosDeclaraciones?.map((dec, idx) => (
                          <div key={idx} style={{
                            background: 'rgba(0,0,0,0.3)',
                            padding: '0.8rem 1.2rem',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '0.95rem',
                            fontStyle: 'italic',
                            borderLeft: '3px solid #10b981'
                          }}>
                            {dec}
                          </div>
                        ))}
                      </div>

                      <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                        <input
                          type="text"
                          value={customVision}
                          onChange={(e) => setCustomVision(e.target.value)}
                          placeholder="Escribe tu declaración: «Estoy comprometido a crear...»"
                          style={{
                            flex: 1,
                            minWidth: '260px',
                            padding: '10px 14px',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: '#070d1f',
                            color: '#fff',
                            fontSize: '0.92rem'
                          }}
                        />
                        <button
                          onClick={() => {
                            if (!customVision.trim()) return;
                            setVisionSaved(true);
                            showToast('✓ Declaración anclada en la cancha de juego.', 'success');
                          }}
                          style={{
                            padding: '10px 20px',
                            borderRadius: '8px',
                            background: '#10b981',
                            color: '#000',
                            fontWeight: 800,
                            border: 'none',
                            cursor: 'pointer'
                          }}
                        >
                          Anclar Visión
                        </button>
                      </div>
                      {visionSaved && (
                        <div style={{marginTop: '0.8rem', color: '#34d399', fontSize: '0.9rem'}}>
                          ⚽ ¡Bienvenido a la cancha donde se meten los goles llamada: <strong>«{customVision}»</strong>!
                        </div>
                      )}
                    </div>
                  )}

                  {/* CASO PASO 8: LA PREGUNTA FINAL */}
                  {currentPaso.paso === 8 && (
                    <div style={{
                      background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(0,0,0,0.7) 100%)',
                      border: '2px solid var(--crear-gold)',
                      borderRadius: '16px',
                      padding: '2rem',
                      textAlign: 'center'
                    }}>
                      <span style={{fontSize: '2.5rem'}}>🚀</span>
                      <h4 style={{fontSize: '1.8rem', color: 'var(--crear-gold)', margin: '0.5rem 0', fontWeight: 900}}>
                        ¿PARA QUÉ VIVES?
                      </h4>
                      <p style={{fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 1.5rem', lineHeight: 1.6}}>
                        La plataforma de visión se aterriza el sábado, antes del llamado a la acción. Si tienes claro tu <em>Para Qué</em>, cualquier obstáculo en la arena se vuelve irrelevante.
                      </p>
                      <div style={{fontSize: '0.95rem', color: '#fff', fontStyle: 'italic'}}>
                        «La orientación es lo más importante. Aquí los preparo para todo lo que viene. Lo demás son manejos.»
                      </div>
                    </div>
                  )}

                </div>
              );
            })()}
          </section>

        </div>
      )}

      {/* ============================================================== */}
      {/* PESTAÑA 2: RUTA ACADÉMICA DE COACHING (11 MÓDULOS)             */}
      {/* ============================================================== */}
      {activeTab === 'academic' && (
        <div className="fade-in">
          <p className="text-muted" style={{fontSize: '1.05rem', marginBottom: '2.5rem'}}>
            Mapa curricular formativo de coaching ontológico y maestría en facilitación. Completa cada módulo y su evaluación para desbloquear el siguiente nivel.
          </p>

          <div className="timeline" style={{position: 'relative', paddingLeft: '2rem'}}>
            <div style={{position: 'absolute', left: '0', top: '10px', bottom: '0', width: '4px', background: 'rgba(0, 212, 255, 0.2)', borderRadius: '2px'}}></div>

            {curriculum.map((mod, index) => {
              const status = getAcademicModuleStatus(mod, index);
              return (
                <article key={mod.id} style={{position: 'relative', marginBottom: '2.5rem'}} aria-labelledby={`title-${mod.id}`}>
                  <div style={{
                    position: 'absolute',
                    left: '-2.55rem',
                    top: '5px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: status === 'bloqueado' ? 'var(--bg-card)' : 'var(--crear-blue)',
                    border: `4px solid ${status === 'bloqueado' ? 'rgba(255,255,255,0.2)' : 'var(--bg-dark)'}`,
                    boxShadow: status === 'bloqueado' ? 'none' : '0 0 10px rgba(0, 212, 255, 0.5)',
                    zIndex: 2
                  }}></div>

                  <div className={`glass-panel p-6 ${status === 'bloqueado' ? 'opacity-50' : ''}`} style={{
                    opacity: status === 'bloqueado' ? 0.6 : 1,
                    transition: 'all 0.3s ease',
                    borderLeft: status === 'disponible' ? '4px solid var(--crear-blue)' : ''
                  }}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem'}}>
                      <div>
                        <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem'}}>
                          <h3 id={`title-${mod.id}`} style={{margin: 0}} className={status === 'bloqueado' ? 'text-muted' : 'text-blue'}>
                            {mod.titulo}
                          </h3>
                          {status === 'bloqueado' && (
                            <span aria-label="Módulo Bloqueado" style={{background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem'}}>Bloqueado</span>
                          )}
                        </div>
                        <p className="text-muted" style={{marginBottom: '1rem', maxWidth: '700px'}}>{mod.descripcion}</p>
                      </div>

                      {status === 'disponible' ? (
                        <Link to={`/modulo/${mod.id}`} className="btn-primary" style={{textDecoration: 'none', background: 'linear-gradient(135deg, var(--crear-blue) 0%, #0088aa 100%)', color: '#000'}} aria-label={`Iniciar ${mod.titulo}`}>
                          Iniciar Módulo
                        </Link>
                      ) : status === 'bloqueado' ? (
                        <button className="btn-secondary" disabled aria-disabled="true" style={{opacity: 0.5, cursor: 'not-allowed'}} aria-label={`${mod.titulo} está bloqueado`}>
                          Bloqueado
                        </button>
                      ) : (
                        <Link to={`/modulo/${mod.id}`} className="btn-secondary" style={{color: 'var(--color-success)', borderColor: 'var(--color-success)', textDecoration: 'none'}} aria-label={`${mod.titulo} completado. Repasar.`}>
                          Completado ✓
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: VISTA RÁPIDA DE MICRO-LECCIÓN                           */}
      {/* ============================================================== */}
      {activeLessonModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '1rem'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '750px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(255,183,3,0.3)'
          }}>
            <div style={{
              padding: '1.2rem 1.8rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{fontSize: '0.8rem', color: 'var(--crear-gold)', fontWeight: 800, textTransform: 'uppercase'}}>
                  {activeLessonModal.modulo.numero} • LECCIÓN DE MAESTRÍA
                </span>
                <h3 style={{margin: '0.2rem 0 0', fontSize: '1.3rem'}}>
                  {activeLessonModal.leccion.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveLessonModal(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>

            <div 
              style={{
                padding: '1.8rem',
                overflowY: 'auto',
                lineHeight: '1.7',
                fontSize: '1rem'
              }}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(activeLessonModal.leccion.content) }}
            />

            <div style={{
              padding: '1rem 1.8rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.3)'
            }}>
              <Link
                to={`/modulo/${activeLessonModal.modulo.id}`}
                className="btn-secondary"
                style={{fontSize: '0.85rem'}}
              >
                Abrir en Modo Lector Completo
              </Link>
              <button
                onClick={() => {
                  handleCompleteStaffLesson(activeLessonModal.leccion.id, 150);
                  setActiveLessonModal(null);
                }}
                className="btn-primary"
                style={{fontSize: '0.85rem', padding: '10px 24px'}}
              >
                Completar y Reclamar +150 XP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* MODAL: BLUEPRINT TÉCNICO & ARQUITECTURA API                    */}
      {/* ============================================================== */}
      {showTechnicalBlueprint && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.88)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '1rem'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '880px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(14, 165, 233, 0.4)'
          }}>
            <div style={{
              padding: '1.2rem 1.8rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{fontSize: '0.8rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase'}}>
                  ARQUITECTURA DE DATOS & ENDPOINTS
                </span>
                <h3 style={{margin: '0.2rem 0 0', fontSize: '1.3rem'}}>
                  Blueprint Técnico de Gamificación & Retos
                </h3>
              </div>
              <button 
                onClick={() => setShowTechnicalBlueprint(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{padding: '1.8rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              
              {/* Sección SQL */}
              <div>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <h4 style={{margin: 0, color: 'var(--crear-gold)'}}>Esquema de Base de Datos Relacional (PostgreSQL DDL)</h4>
                  <button 
                    onClick={handleCopySql}
                    className="btn-secondary"
                    style={{fontSize: '0.75rem', padding: '4px 10px'}}
                  >
                    {copiedSql ? '✓ Copiado' : 'Copiar DDL'}
                  </button>
                </div>
                <pre style={{
                  background: '#040714',
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '0.8rem',
                  overflowX: 'auto',
                  color: '#93c5fd',
                  fontFamily: 'monospace'
                }}>
                  {nodusStaffTechnicalSpec.dbSchemaSql}
                </pre>
              </div>

              {/* Endpoints API */}
              <div>
                <h4 style={{margin: '0 0 0.8rem', color: 'var(--crear-blue)'}}>Endpoints de la API de Gamificación</h4>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  {nodusStaffTechnicalSpec.apiEndpoints.map((ep, idx) => (
                    <div key={idx} style={{background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '1rem'}}>
                      <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem'}}>
                        <span style={{
                          background: ep.method === 'POST' ? '#10b981' : '#38bdf8',
                          color: '#000',
                          padding: '2px 8px',
                          borderRadius: '6px',
                          fontSize: '0.75rem',
                          fontWeight: 800
                        }}>
                          {ep.method}
                        </span>
                        <code style={{color: '#fff', fontSize: '0.9rem'}}>{ep.endpoint}</code>
                      </div>
                      <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.5rem'}}>
                        {ep.description}
                      </p>
                      <pre style={{
                        background: '#040714',
                        padding: '0.8rem',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        color: '#fcd34d',
                        margin: 0,
                        overflowX: 'auto'
                      }}>
                        {JSON.stringify(ep.payload, null, 2)}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div style={{
              padding: '1rem 1.8rem',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              justifyContent: 'flex-end',
              background: 'rgba(0,0,0,0.3)'
            }}>
              <button 
                onClick={() => setShowTechnicalBlueprint(false)} 
                className="btn-secondary"
                style={{fontSize: '0.85rem'}}
              >
                Cerrar Blueprint
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
