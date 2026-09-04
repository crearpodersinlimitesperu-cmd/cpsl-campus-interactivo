import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { curriculum } from '../data/curriculum';
import { 
  nodusStaffModules, 
  nodusStaffBadges, 
  nodusStaffRoleCertifications, 
  nodusStaffSimulations, 
  nodusStaffTechnicalSpec 
} from '../data/nodusStaffCurriculum';
import { getUserProgress } from '../services/db';
import DOMPurify from 'dompurify';

export default function RutaFormacion() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('staff'); // 'staff' | 'academic'
  const [progress, setProgress] = useState({ completedLessons: [], evaluationsPassed: [] });

  // Estado persistente de Gamificación Staff Nodus
  const storageKey = user ? `nodus_staff_state_${user.uid}` : 'nodus_staff_state_guest';
  const [staffState, setStaffState] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Error leyendo staffState de localStorage", e);
    }
    return {
      xp: 850,
      streak: 5,
      currentRole: 'Aliado',
      nivelFisonomia: 3,
      completedLessons: ['staff_1_1'],
      unlockedBadges: ['sombra_impecable'],
      simulationAnswers: {}
    };
  });

  const [activeSimulationId, setActiveSimulationId] = useState('sim_caso_1');
  const [activeLessonModal, setActiveLessonModal] = useState(null);
  const [showTechnicalBlueprint, setShowTechnicalBlueprint] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Guardar staffState en localStorage al cambiar
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(staffState));
    } catch (e) {
      console.warn("Error guardando staffState", e);
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

  // Cálculo del nivel de Fisonomía según XP acumulado
  const calculateFisonomiaLevel = (xp) => {
    if (xp >= 3500) return 10;
    if (xp >= 2800) return 9;
    if (xp >= 2200) return 8;
    if (xp >= 1700) return 7;
    if (xp >= 1300) return 6;
    if (xp >= 950) return 5;
    if (xp >= 650) return 4;
    if (xp >= 400) return 3;
    if (xp >= 200) return 2;
    return 1;
  };

  const getFisonomiaTitle = (lvl) => {
    switch (lvl) {
      case 1: return 'Postulante / Observador';
      case 2: return 'Aliado en Registro';
      case 3: return 'Aliado Certificado';
      case 4: return 'Mánager Junior';
      case 5: return 'Mánager Senior';
      case 6: return 'Quantum Team (QT) Aspirante';
      case 7: return 'Quantum Team (QT) Operativo';
      case 8: return 'Capitán de Sede';
      case 9: return 'Coordinador de Sala (CC1Y2 / CMJ)';
      case 10: return 'Master Staff / Gerente Operativo';
      default: return 'Staff Nodus';
    }
  };

  // Manejador de respuestas en la simulación interactiva
  const handleAnswerSimulation = (simId, option) => {
    const currentAns = staffState.simulationAnswers[simId];
    if (currentAns?.isCorrect) return; // Ya resuelto correctamente

    const newXp = Math.max(0, staffState.xp + option.xpDelta);
    const newLvl = calculateFisonomiaLevel(newXp);
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
      nivelFisonomia: newLvl,
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
    const newLvl = calculateFisonomiaLevel(newXp);
    setStaffState(prev => ({
      ...prev,
      xp: newXp,
      nivelFisonomia: newLvl,
      completedLessons: [...prev.completedLessons, lessonId]
    }));
    showToast(`✓ Lección completada (+${xpAward} XP)`, 'gold');
  };

  // Helper para copiar SQL
  const handleCopySql = () => {
    navigator.clipboard.writeText(nodusStaffTechnicalSpec.dbSchemaSql);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

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

  const currentFisonomiaLevel = calculateFisonomiaLevel(staffState.xp);
  const currentFisonomiaTitle = getFisonomiaTitle(currentFisonomiaLevel);
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

      {/* Header Principal */}
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
                CREAR PODER SIN LÍMITES 2026
              </span>
              <span style={{
                background: 'rgba(14, 165, 233, 0.15)',
                color: '#38bdf8',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
              }}>
                V1.0 OFICIAL
              </span>
            </div>
            <h1 style={{fontSize: '2.6rem', margin: '0.5rem 0 0.2rem', fontWeight: 800}}>Ruta de Formación</h1>
            <p className="text-muted" style={{fontSize: '1.05rem', margin: 0}}>
              Arquitectura dual: Formación de Liderazgo Operativo Staff Nodus y Escuela Académica de Coaching.
            </p>
          </div>

          <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
            <Link
              to="/guiones-mj"
              className="btn-secondary"
              style={{fontSize: '0.85rem', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', borderColor: '#f59e0b', color: '#f59e0b'}}
            >
              <span>📜 BrandScript MJ</span>
            </Link>

            <Link
              to="/gamificacion"
              className="btn-primary"
              style={{fontSize: '0.85rem', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none'}}
            >
              <span>🎮 Modo Aprendiz & Simulador</span>
            </Link>

            <button 
              onClick={() => setShowTechnicalBlueprint(true)}
              className="btn-secondary"
              style={{fontSize: '0.85rem', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px'}}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Blueprint Técnico & API
            </button>
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
            <span>Ruta Nodus Staff (Micro-Learning & Gamificación)</span>
            <span style={{
              background: 'var(--crear-gold)',
              color: '#000',
              padding: '2px 8px',
              borderRadius: '10px',
              fontSize: '0.75rem',
              fontWeight: 800
            }}>
              4 Módulos
            </span>
          </button>

          <button
            onClick={() => setActiveTab('academic')}
            style={{
              flex: 1,
              padding: '12px 20px',
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
      {/* PESTAÑA 1: RUTA NODUS STAFF & GAMIFICACIÓN 2026                 */}
      {/* ============================================================== */}
      {activeTab === 'staff' && (
        <div className="fade-in" style={{display: 'flex', flexDirection: 'column', gap: '2.5rem'}}>
          
          {/* HUD de Gamificación del Staff Nodus */}
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
                  🛡️
                </div>
                <div>
                  <div style={{fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--crear-gold)', fontWeight: 800, letterSpacing: '0.05em'}}>
                    Fisonomía Operativa Nodus
                  </div>
                  <h2 style={{margin: '0.1rem 0', fontSize: '1.6rem', color: '#fff'}}>
                    Nivel {currentFisonomiaLevel}: {currentFisonomiaTitle}
                  </h2>
                  <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>
                    Rol Activo: <span style={{color: '#38bdf8', fontWeight: 'bold'}}>{staffState.currentRole}</span>
                  </div>
                </div>
              </div>

              {/* Contadores XP y Racha */}
              <div style={{display: 'flex', gap: '1.2rem', flexWrap: 'wrap'}}>
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase'}}>XP Total</div>
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

                {/* Selector de Rol */}
                <div style={{
                  background: 'rgba(0,0,0,0.4)',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <label htmlFor="staff-role-select" style={{fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase'}}>
                    Asignar Rol
                  </label>
                  <select
                    id="staff-role-select"
                    value={staffState.currentRole}
                    onChange={(e) => setStaffState(prev => ({ ...prev, currentRole: e.target.value }))}
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
                    <option value="Aliado" style={{background: '#070d1f'}}>Aliado</option>
                    <option value="Mánager" style={{background: '#070d1f'}}>Mánager</option>
                    <option value="Capitán" style={{background: '#070d1f'}}>Capitán</option>
                    <option value="Quantum Team" style={{background: '#070d1f'}}>Quantum Team (QT)</option>
                    <option value="CC1Y2" style={{background: '#070d1f'}}>CC1Y2</option>
                    <option value="CMJ" style={{background: '#070d1f'}}>CMJ</option>
                    <option value="Gerente Sede" style={{background: '#070d1f'}}>Gerente Sede</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Barra de progreso de Fisonomía */}
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px', color: 'var(--text-muted)'}}>
                <span>Progreso hacia Nivel {Math.min(10, currentFisonomiaLevel + 1)} ({getFisonomiaTitle(Math.min(10, currentFisonomiaLevel + 1))})</span>
                <span style={{color: 'var(--crear-gold)', fontWeight: 'bold'}}>
                  {currentFisonomiaLevel === 10 ? 'NIVEL MÁXIMO ALCANZADO' : `${staffState.xp % 500} / 500 XP`}
                </span>
              </div>
              <div className="progress-bar-container" style={{height: '8px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px'}}>
                <div 
                  className="progress-bar-fill" 
                  style={{
                    width: currentFisonomiaLevel === 10 ? '100%' : `${((staffState.xp % 500) / 500) * 100}%`,
                    background: 'linear-gradient(90deg, var(--crear-gold) 0%, #38bdf8 100%)',
                    boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)'
                  }}
                ></div>
              </div>
            </div>
          </section>

          {/* Vitrina de Medallas y Distintivos Oficiales */}
          <section>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem'}}>
              <div>
                <h3 style={{fontSize: '1.4rem', margin: 0}}>Vitrina de Medallas Oficiales Nodus</h3>
                <p className="text-muted" style={{fontSize: '0.9rem', margin: 0}}>
                  Insignias requeridas para la certificación y habilitación operativa en CREAR PODER SIN LÍMITES.
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

          {/* Matriz de Certificación de Roles */}
          <section className="glass-panel" style={{padding: '1.5rem'}}>
            <h3 style={{fontSize: '1.3rem', margin: '0 0 0.5rem'}}>Requisitos de Acreditación de Roles Operativos</h3>
            <p className="text-muted" style={{fontSize: '0.9rem', marginBottom: '1.2rem'}}>
              Criterios de gobernanza para asumir responsabilidades de sala en CREAR PODER SIN LÍMITES.
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem'}}>
              {nodusStaffRoleCertifications.map((cert, idx) => {
                const fisonomiaMet = currentFisonomiaLevel >= cert.minFisonomia;
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
                        {isCertified ? 'ACREDITADO' : 'PENDIENTE'}
                      </span>
                    </div>

                    <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 0 0.8rem', lineHeight: '1.4'}}>
                      {cert.description}
                    </p>

                    <div style={{fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.6rem'}}>
                      <div style={{color: fisonomiaMet ? '#34d399' : '#f87171'}}>
                        {fisonomiaMet ? '✓' : '✗'} Nivel Fisonomía ≥ {cert.minFisonomia} (Actual: {currentFisonomiaLevel})
                      </div>
                      {cert.badgeName && (
                        <div style={{color: badgeMet ? '#34d399' : '#f87171'}}>
                          {badgeMet ? '✓' : '✗'} Medalla «{cert.badgeName}»
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

          {/* SIMULADOR INTERACTIVO DE CASOS PRÁCTICOS EN VIVO */}
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
                  ENTRENAMIENTO SITUACIONAL EN VIVO
                </span>
                <h3 style={{fontSize: '1.5rem', margin: '0.4rem 0 0'}}>Simulador Interactivo de Toma de Decisiones</h3>
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
                      <span>Caso {i + 1}</span>
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

          {/* PLAN DE ESTUDIOS: 4 MÓDULOS DE MICRO-LEARNING */}
          <section>
            <div style={{marginBottom: '1.5rem'}}>
              <h3 style={{fontSize: '1.5rem', margin: '0 0 0.3rem'}}>Plan de Micro-Learning: Módulos I al IV</h3>
              <p className="text-muted" style={{fontSize: '0.95rem', margin: 0}}>
                Cápsulas formativas de 3 a 5 minutos diseñadas para la excelencia del staff en sala y sedes 2026.
              </p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              {nodusStaffModules.map((modulo, idx) => {
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
      {/* PESTAÑA 2: RUTA ACADÉMICA DE COACHING (11 MÓDULOS EXISTENTES)   */}
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
      {/* MODAL: VISTA RÁPIDA DE MICRO-LECCIÓN STAFF                     */}
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
                  {activeLessonModal.modulo.numero} • MICRO-LECCIÓN
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
                Abrir en Modo Lector
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
      {/* MODAL: BLUEPRINT TÉCNICO & ARQUITECTURA API NODUS              */}
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
                  Blueprint Técnico Nodus Staff V1.0 (2026)
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
