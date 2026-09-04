import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DOMPurify from 'dompurify';
import { 
  nodusStaffBadges, 
  nodusStaffSimulations, 
  moduloAprendiz, 
  rolesDesbloqueadosFisonomia 
} from '../data/nodusStaffCurriculum';

export default function GamificacionStaff() {
  const { user } = useAuth();
  const storageKey = useMemo(() => `nodus_staff_state_${user?.uid || 'guest'}`, [user?.uid]);
  const auditKey = useMemo(() => `causa_os_traceability_${user?.uid || 'guest'}`, [user?.uid]);

  // Pestaña activa: 'aprendiz' | 'simulador' | 'perfil' | 'trazabilidad'
  const [activeTab, setActiveTab] = useState('aprendiz');

  // Estado unificado del Staff (persistente)
  const [staffState, setStaffState] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
      // Fallback a clave genérica si existe progreso previo
      const generic = localStorage.getItem('nodus_staff_state');
      if (generic) return JSON.parse(generic);
    } catch (e) {
      console.warn('Error al leer staffState:', e);
    }
    return {
      xp: 0,
      streak: 1,
      currentRole: 'Persona en Modo Aprendiz',
      completedLessons: [],
      unlockedBadges: [],
      simulationAnswers: {}
    };
  });

  // Historial de auditoría Causa OS (persistente)
  const [auditLogs, setAuditLogs] = useState(() => {
    try {
      const saved = localStorage.getItem(auditKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error al leer auditLogs:', e);
    }
    return [
      {
        id: 'init-1',
        timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'medium' }),
        responsable: user?.displayName || user?.email?.split('@')[0] || 'Persona en Modo Aprendiz',
        rol: 'Modo Aprendiz',
        accion: 'Inicialización de Terminal Nodus Causa OS',
        resultado: 'Sesión activa y sincronizada',
        xpDelta: 0,
        origen: 'Campus Interactivo Interruption'
      }
    ];
  });

  // Guardar estado automáticamente y sincronizar con clave global
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(staffState));
      localStorage.setItem('nodus_staff_state', JSON.stringify(staffState));
    } catch (e) {
      console.error('Error guardando staffState:', e);
    }
  }, [staffState, storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(auditKey, JSON.stringify(auditLogs));
    } catch (e) {
      console.error('Error guardando auditLogs:', e);
    }
  }, [auditLogs, auditKey]);

  // Notificación toast visual
  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (msg, type = 'gold') => {
    setToastMessage({ msg, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Función para registrar auditoría Causa OS
  const logAudit = (accion, resultado, xpDelta = 0) => {
    const newEntry = {
      id: 'log-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'medium' }),
      responsable: user?.displayName || user?.email?.split('@')[0] || 'Persona en Modo Aprendiz',
      rol: 'Modo Aprendiz',
      accion,
      resultado,
      xpDelta,
      origen: 'Plataforma Nodus — Causa OS'
    };
    setAuditLogs(prev => [newEntry, ...prev.slice(0, 99)]); // Limitar a últimos 100 logs
  };

  // Nivel de Fisonomía (1 a 10) calculado por tramos de 300 XP
  const currentFisonomiaLevel = Math.min(10, Math.max(1, 1 + Math.floor(staffState.xp / 300)));
  const xpCurrentLevelBase = (currentFisonomiaLevel - 1) * 300;
  const xpInCurrentLevel = currentFisonomiaLevel === 10 ? 300 : staffState.xp - xpCurrentLevelBase;
  const levelProgressPercent = currentFisonomiaLevel === 10 ? 100 : Math.min(100, Math.round((xpInCurrentLevel / 300) * 100));

  // Título de progresión en Autoentrenamiento
  const getFisonomiaTitle = (lvl) => {
    const titles = {
      1: 'Aprendiz Inicial (Escucha Activa)',
      2: 'Observador Consciente (Presencia)',
      3: 'Calibrador de Fisonomía (Calma)',
      4: 'Arquitecto de Valor y Posibilidad',
      5: 'Comunicador Empático y Límbico',
      6: 'Facilitador de Transformación',
      7: 'Integrador del Modo Causa',
      8: 'Practicante de Impecabilidad',
      9: 'Guardián de la Integridad Personal',
      10: 'Maestro en Autoconocimiento y Causa'
    };
    return titles[lvl] || 'Persona en Modo Aprendiz';
  };

  // Otorgar medalla si no la tiene
  const awardBadge = (badgeId, badgeName, xpBonus = 0) => {
    setStaffState(prev => {
      if (prev.unlockedBadges.includes(badgeId)) return prev;
      const newBadges = [...prev.unlockedBadges, badgeId];
      const newXp = prev.xp + xpBonus;
      showToast(`🏆 ¡MEDALLA DESBLOQUEADA! «${badgeName}» (+${xpBonus} XP)`, 'gold');
      logAudit(`Medalla otorgada: «${badgeName}»`, `Insignia oficial desbloqueada para rol ${prev.currentRole}`, xpBonus);
      return {
        ...prev,
        xp: newXp,
        unlockedBadges: newBadges
      };
    });
  };

  // ==============================================================
  // ESTADOS DEL MODO APRENDIZ
  // ==============================================================
  const [selectedAprendizLesson, setSelectedAprendizLesson] = useState(moduloAprendiz[0]);

  const handleCompleteAprendizLesson = (lesson) => {
    if (staffState.completedLessons.includes(lesson.id)) {
      showToast(`Ya habías completado la lección «${lesson.title}».`, 'blue');
      return;
    }

    const newCompleted = [...staffState.completedLessons, lesson.id];
    const newXp = staffState.xp + lesson.xpReward;
    
    setStaffState(prev => ({
      ...prev,
      xp: newXp,
      completedLessons: newCompleted
    }));

    showToast(`✓ Lección «${lesson.title}» completada (+${lesson.xpReward} XP)`, 'green');
    logAudit(`Modo Aprendiz: ${lesson.title}`, 'Lectura y comprensión completada', lesson.xpReward);

    // Verificar si completó las 3 lecciones del Modo Aprendiz para otorgar la medalla Mente de Aprendiz
    const allAprendizDone = moduloAprendiz.every(l => newCompleted.includes(l.id));
    if (allAprendizDone && !staffState.unlockedBadges.includes('mente_aprendiz')) {
      setTimeout(() => {
        awardBadge('mente_aprendiz', 'Mente de Aprendiz', 100);
      }, 600);
    }
  };

  // ==============================================================
  // ESTADOS DEL SIMULADOR DE CASOS
  // ==============================================================
  const [activeSimIndex, setActiveSimIndex] = useState(0);
  const activeSim = nodusStaffSimulations[activeSimIndex] || nodusStaffSimulations[0];
  const simResult = staffState.simulationAnswers[activeSim.id];

  const handleAnswerSimulation = (simId, option) => {
    const isAlreadyAnsweredCorrect = staffState.simulationAnswers[simId]?.isCorrect;
    if (isAlreadyAnsweredCorrect) {
      showToast('Este caso ya fue resuelto con éxito. Puedes repasar las respuestas.', 'blue');
      return;
    }

    const xpDelta = option.xpDelta;
    const newXp = Math.max(0, staffState.xp + xpDelta);

    const updatedAnswers = {
      ...staffState.simulationAnswers,
      [simId]: {
        selectedOptionId: option.id,
        isCorrect: option.isCorrect,
        classification: option.classification,
        feedback: option.feedback,
        xpDelta: option.xpDelta,
        answeredAt: new Date().toISOString()
      }
    };

    setStaffState(prev => ({
      ...prev,
      xp: newXp,
      simulationAnswers: updatedAnswers
    }));

    if (option.isCorrect) {
      showToast(`✓ ¡DECISIÓN IMPECABLE! +${xpDelta} XP (${option.classification})`, 'green');
      logAudit(`Simulador: ${activeSim.title}`, `Decisión Impecable (${option.classification})`, xpDelta);

      // Evaluar medallas de simulador
      const correctSimsCount = Object.values(updatedAnswers).filter(a => a.isCorrect).length;
      if (correctSimsCount >= 2 && !staffState.unlockedBadges.includes('sombra_impecable')) {
        setTimeout(() => awardBadge('sombra_impecable', 'Sombra Impecable', 500), 500);
      }
      if (correctSimsCount >= 3 && !staffState.unlockedBadges.includes('guardian_rigor')) {
        setTimeout(() => awardBadge('guardian_rigor', 'Guardián del Rigor', 600), 1000);
      }
    } else {
      showToast(`✗ ${option.classification} (${xpDelta} XP). Revisa la retroalimentación ontológica.`, 'red');
      logAudit(`Simulador: ${activeSim.title}`, `Error ontológico: ${option.classification}`, xpDelta);
    }
  };

  const handleResetSimulation = (simId) => {
    setStaffState(prev => {
      const nextAnswers = { ...prev.simulationAnswers };
      delete nextAnswers[simId];
      return {
        ...prev,
        simulationAnswers: nextAnswers
      };
    });
    showToast('Caso reiniciado para nuevo intento.', 'blue');
  };

  // Copiar log de auditoría Causa OS en JSON
  const [copiedLog, setCopiedLog] = useState(false);
  const handleCopyLog = () => {
    const payload = JSON.stringify({
      plataforma: 'INTERRUPTION — CREAR PODER SIN LÍMITES',
      sistema: 'Causa OS & Nodus Staff Gamification',
      usuario: user?.email || 'anonimo@nodus.net',
      fisonomia_nivel: currentFisonomiaLevel,
      xp_total: staffState.xp,
      racha_dias: staffState.streak,
      medallas: staffState.unlockedBadges,
      historial_auditoria: auditLogs
    }, null, 2);
    navigator.clipboard.writeText(payload);
    setCopiedLog(true);
    setTimeout(() => setCopiedLog(false), 2500);
  };

  return (
    <div className="gamificacion-page" style={{padding: '1.5rem', maxWidth: '1300px', margin: '0 auto', color: '#fff'}}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          background: toastMessage.type === 'green' ? 'rgba(16, 185, 129, 0.95)' :
                      toastMessage.type === 'red' ? 'rgba(239, 68, 68, 0.95)' :
                      toastMessage.type === 'blue' ? 'rgba(14, 165, 233, 0.95)' :
                      'linear-gradient(135deg, rgba(255,183,3,0.95) 0%, rgba(180,83,9,0.95) 100%)',
          color: toastMessage.type === 'gold' ? '#000' : '#fff',
          fontWeight: 700,
          padding: '14px 22px',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.92rem',
          border: '1px solid rgba(255,255,255,0.2)',
          animation: 'fadeInUp 0.3s ease-out'
        }}>
          <span>{toastMessage.msg}</span>
        </div>
      )}

      {/* Header Principal de la Plataforma */}
      <header className="glass-panel" style={{
        padding: '1.8rem 2.2rem',
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
        border: '1px solid rgba(255, 183, 3, 0.3)',
        background: 'linear-gradient(135deg, rgba(7, 13, 31, 0.92) 0%, rgba(14, 165, 233, 0.08) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '1.4rem'}}>
          <img 
            src="/interrupcion_logo.jpg" 
            alt="Logo Interrupción - CREAR PODER SIN LÍMITES" 
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '16px',
              objectFit: 'cover',
              border: '2px solid var(--crear-gold)',
              boxShadow: '0 0 20px rgba(255, 183, 3, 0.35)'
            }}
          />
          <div>
            <div style={{
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(255,183,3,0.15)', 
              padding: '3px 10px', 
              borderRadius: '8px', 
              marginBottom: '6px'
            }}>
              <span style={{fontSize: '0.75rem', fontWeight: 800, color: 'var(--crear-gold)', letterSpacing: '0.05em'}}>
                CREAR PODER SIN LÍMITES
              </span>
              <span style={{color: 'rgba(255,255,255,0.4)'}}>•</span>
              <span style={{fontSize: '0.72rem', color: '#38bdf8', fontWeight: 600}}>
                CAUSA OS & NODUS
              </span>
            </div>
            <h1 style={{margin: '0 0 4px', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff'}}>
              Autoentrenamiento en Modo Aprendiz
            </h1>
            <p style={{margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)'}}>
              Neuromarketing Ético, Autoconsciencia y Práctica de Fisonomía Nodus (Plataforma para toda persona sin roles ni jerarquías).
            </p>
          </div>
        </div>

        {/* Quick Stats Pill */}
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <div style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255, 183, 3, 0.25)',
            padding: '10px 18px',
            borderRadius: '14px',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700}}>
              Fisonomía
            </div>
            <div style={{fontSize: '1.3rem', fontWeight: 900, color: 'var(--crear-gold)'}}>
              Nivel {currentFisonomiaLevel}
            </div>
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            padding: '10px 18px',
            borderRadius: '14px',
            textAlign: 'center'
          }}>
            <div style={{fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700}}>
              XP Acumulado
            </div>
            <div style={{fontSize: '1.3rem', fontWeight: 900, color: '#38bdf8'}}>
              {staffState.xp.toLocaleString()} <span style={{fontSize: '0.75rem', fontWeight: 500}}>XP</span>
            </div>
          </div>

          <Link to="/ruta" className="btn-secondary" style={{textDecoration: 'none', fontSize: '0.82rem', padding: '10px 14px'}}>
            ← Ruta Completa
          </Link>
        </div>
      </header>

      {/* Barra de Pestañas de Navegación */}
      <nav style={{
        display: 'flex',
        gap: '0.6rem',
        marginBottom: '2rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        paddingBottom: '0.8rem',
        overflowX: 'auto'
      }}>
        <button
          onClick={() => setActiveTab('aprendiz')}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: activeTab === 'aprendiz' ? 'linear-gradient(135deg, var(--crear-gold) 0%, #b45309 100%)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'aprendiz' ? '#000' : 'var(--text-muted)',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}
        >
          <span>📖 Modo Aprendiz</span>
          <span style={{
            background: activeTab === 'aprendiz' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)',
            padding: '2px 7px',
            borderRadius: '10px',
            fontSize: '0.75rem'
          }}>
            {moduloAprendiz.filter(l => staffState.completedLessons.includes(l.id)).length}/3
          </span>
        </button>

        <button
          onClick={() => setActiveTab('simulador')}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: activeTab === 'simulador' ? 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'simulador' ? '#fff' : 'var(--text-muted)',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}
        >
          <span>🎮 Simulador de Casos</span>
          <span style={{
            background: activeTab === 'simulador' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)',
            padding: '2px 7px',
            borderRadius: '10px',
            fontSize: '0.75rem'
          }}>
            {Object.values(staffState.simulationAnswers).filter(a => a.isCorrect).length}/{nodusStaffSimulations.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('perfil')}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: activeTab === 'perfil' ? 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'perfil' ? '#fff' : 'var(--text-muted)',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}
        >
          <span>👤 Mi Perfil & Fisonomía</span>
          <span style={{
            background: activeTab === 'perfil' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)',
            padding: '2px 7px',
            borderRadius: '10px',
            fontSize: '0.75rem'
          }}>
            Nivel {currentFisonomiaLevel}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('trazabilidad')}
          style={{
            padding: '10px 20px',
            borderRadius: '10px',
            border: 'none',
            background: activeTab === 'trazabilidad' ? 'linear-gradient(135deg, #10b981 0%, #047857 100%)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'trazabilidad' ? '#000' : 'var(--text-muted)',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}
        >
          <span>🗃️ Trazabilidad Causa OS</span>
          <span style={{
            background: activeTab === 'trazabilidad' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)',
            padding: '2px 7px',
            borderRadius: '10px',
            fontSize: '0.75rem'
          }}>
            {auditLogs.length} logs
          </span>
        </button>
      </nav>

      {/* ============================================================== */}
      {/* PESTAÑA 1: MODO APRENDIZ (MICRO-LEARNING CON ANALOGÍAS CLARAS) */}
      {/* ============================================================== */}
      {activeTab === 'aprendiz' && (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          
          {/* Banner de Bienvenida Modo Aprendiz */}
          <div className="glass-panel" style={{
            padding: '1.5rem 2rem',
            borderLeft: '4px solid var(--crear-gold)',
            background: 'linear-gradient(90deg, rgba(255,183,3,0.07) 0%, rgba(0,0,0,0.3) 100%)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px'}}>
                <span style={{background: 'var(--crear-gold)', color: '#000', fontWeight: 900, padding: '2px 8px', borderRadius: '6px', fontSize: '0.75rem'}}>
                  AUTOENTRENAMIENTO Y CRECIMIENTO PERSONAL
                </span>
                <span style={{color: '#34d399', fontSize: '0.85rem', fontWeight: 700}}>
                  v1.0 Oficial
                </span>
              </div>
              <h3 style={{margin: '0 0 6px', fontSize: '1.35rem', color: '#fff'}}>
                Modo Aprendiz: Neuromarketing Ético y Causa OS
              </h3>
              <p style={{margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: '780px', lineHeight: '1.5'}}>
                Micro-lecciones con lenguaje sencillo, analogías pedagógicas y principios de neurociencia aplicados al autoentrenamiento consciente en <strong>CREAR PODER SIN LÍMITES</strong>.
              </p>
            </div>

            {/* Medalla Mente de Aprendiz Status */}
            <div style={{
              background: staffState.unlockedBadges.includes('mente_aprendiz') ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${staffState.unlockedBadges.includes('mente_aprendiz') ? '#10b981' : 'rgba(255,255,255,0.1)'}`,
              padding: '12px 18px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{fontSize: '2rem'}}>📝</div>
              <div>
                <div style={{fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700}}>
                  Insignia Oficial
                </div>
                <div style={{fontSize: '0.95rem', fontWeight: 800, color: staffState.unlockedBadges.includes('mente_aprendiz') ? '#34d399' : '#fff'}}>
                  Mente de Aprendiz
                </div>
                <div style={{fontSize: '0.75rem', color: staffState.unlockedBadges.includes('mente_aprendiz') ? '#10b981' : 'var(--text-muted)'}}>
                  {staffState.unlockedBadges.includes('mente_aprendiz') ? '✓ Desbloqueada (+100 XP)' : 'Completa las 3 lecciones'}
                </div>
              </div>
            </div>
          </div>

          {/* Selector de Lecciones en Grid */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.2rem'}}>
            {moduloAprendiz.map((lesson, idx) => {
              const isSelected = selectedAprendizLesson.id === lesson.id;
              const isCompleted = staffState.completedLessons.includes(lesson.id);

              return (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedAprendizLesson(lesson)}
                  className="glass-panel"
                  style={{
                    padding: '1.3rem',
                    cursor: 'pointer',
                    border: isSelected ? '2px solid var(--crear-gold)' : '1px solid rgba(255,255,255,0.08)',
                    background: isSelected ? 'rgba(255, 183, 3, 0.08)' : 'rgba(255,255,255,0.02)',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                >
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px'}}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--crear-gold)',
                      background: 'rgba(255,183,3,0.15)',
                      padding: '2px 8px',
                      borderRadius: '6px'
                    }}>
                      LECCIÓN {idx + 1}
                    </span>
                    {isCompleted ? (
                      <span style={{color: '#10b981', fontWeight: 800, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px'}}>
                        ✓ Completada (+50 XP)
                      </span>
                    ) : (
                      <span style={{color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600}}>
                        +{lesson.xpReward} XP
                      </span>
                    )}
                  </div>

                  <h4 style={{margin: '0 0 6px', fontSize: '1.05rem', color: isSelected ? 'var(--crear-gold)' : '#fff', lineHeight: '1.4'}}>
                    {lesson.title}
                  </h4>
                  <p style={{margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5'}}>
                    {lesson.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Lector Expandido de la Lección Seleccionada */}
          <div className="glass-panel" style={{
            padding: '2.2rem',
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'linear-gradient(180deg, rgba(7, 13, 31, 0.98) 0%, rgba(4, 7, 20, 0.98) 100%)'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1.2rem'}}>
              <div>
                <span style={{fontSize: '0.8rem', color: 'var(--crear-gold)', fontWeight: 800, textTransform: 'uppercase'}}>
                  {selectedAprendizLesson.code} • {selectedAprendizLesson.durationMinutes} MINUTOS DE LECTURA
                </span>
                <h2 style={{margin: '0.3rem 0', fontSize: '1.6rem', color: '#fff'}}>
                  {selectedAprendizLesson.title}
                </h2>
                <div style={{fontSize: '0.95rem', color: '#38bdf8'}}>
                  {selectedAprendizLesson.subtitle}
                </div>
              </div>

              <div>
                {staffState.completedLessons.includes(selectedAprendizLesson.id) ? (
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid #10b981',
                    color: '#34d399',
                    fontWeight: 800,
                    padding: '8px 18px',
                    borderRadius: '10px',
                    fontSize: '0.85rem'
                  }}>
                    ✓ LECCIÓN SUPERADA (+{selectedAprendizLesson.xpReward} XP)
                  </div>
                ) : (
                  <button
                    onClick={() => handleCompleteAprendizLesson(selectedAprendizLesson)}
                    className="btn-primary"
                    style={{padding: '10px 22px', fontSize: '0.9rem'}}
                  >
                    Marcar como Leída & Reclamar +{selectedAprendizLesson.xpReward} XP
                  </button>
                )}
              </div>
            </div>

            {/* Contenido HTML de la lección */}
            <div 
              style={{lineHeight: '1.8', fontSize: '1.02rem', color: '#e2e8f0'}}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedAprendizLesson.content) }}
            />
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* PESTAÑA 2: SIMULADOR DE CASOS PRÁCTICOS EN SALA (DECISIONES)   */}
      {/* ============================================================== */}
      {activeTab === 'simulador' && (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          
          <div className="glass-panel" style={{
            padding: '2rem',
            border: '1px solid rgba(14, 165, 233, 0.35)',
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05) 0%, rgba(7, 13, 31, 0.98) 100%)'
          }}>
            
            {/* Header del Simulador con Selector de Casos */}
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.8rem'}}>
              <div>
                <span style={{
                  background: 'rgba(14, 165, 233, 0.15)',
                  color: '#38bdf8',
                  padding: '3px 10px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}>
                  ENTRENAMIENTO SITUACIONAL NODUS
                </span>
                <h2 style={{margin: '0.4rem 0 0', fontSize: '1.6rem'}}>
                  Simulador de Conversaciones y Rigor Operativo
                </h2>
                <p style={{margin: '0.2rem 0 0', fontSize: '0.88rem', color: 'var(--text-muted)'}}>
                  Pon a prueba tu distinción ontológica: Rigor sin violencia y coaching libre de manipulación.
                </p>
              </div>

              {/* Selector de Casos Botones */}
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
                {nodusStaffSimulations.map((sim, i) => {
                  const isDone = staffState.simulationAnswers[sim.id]?.isCorrect;
                  const isActive = activeSimIndex === i;

                  return (
                    <button
                      key={sim.id}
                      onClick={() => setActiveSimIndex(i)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--crear-gold)' : 'rgba(255,255,255,0.1)',
                        background: isActive ? 'rgba(255,183,3,0.2)' : 'rgba(0,0,0,0.4)',
                        color: isActive ? 'var(--crear-gold)' : 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Caso {i + 1}</span>
                      {isDone && <span style={{color: '#10b981'}}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Escenario del Caso Activo */}
            <div style={{
              background: 'rgba(0,0,0,0.6)',
              borderLeft: '4px solid var(--crear-gold)',
              padding: '1.4rem',
              borderRadius: '10px',
              marginBottom: '1.8rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                <span style={{fontSize: '0.8rem', color: 'var(--crear-gold)', fontWeight: 800, textTransform: 'uppercase'}}>
                  ROL: {activeSim.category} • {activeSim.title}
                </span>
                {simResult?.isCorrect && (
                  <span style={{color: '#10b981', fontSize: '0.8rem', fontWeight: 800}}>
                    ✓ CASO RESUELTO CON ÉXITO
                  </span>
                )}
              </div>
              <p style={{fontSize: '1.1rem', color: '#fff', margin: 0, lineHeight: '1.7', fontWeight: 500}}>
                {activeSim.scenario}
              </p>
            </div>

            {/* Opciones Interactivas A, B, C */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.9rem'}}>
              {activeSim.options.map((opt, optIdx) => {
                const isSelected = simResult?.selectedOptionId === opt.id;
                const answeredCorrect = simResult?.isCorrect;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleAnswerSimulation(activeSim.id, opt)}
                    style={{
                      padding: '1.1rem 1.4rem',
                      borderRadius: '12px',
                      border: '1px solid',
                      borderColor: isSelected 
                        ? (opt.isCorrect ? '#10b981' : '#ef4444') 
                        : 'rgba(255,255,255,0.12)',
                      background: isSelected 
                        ? (opt.isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)') 
                        : 'rgba(255,255,255,0.02)',
                      textAlign: 'left',
                      color: '#fff',
                      fontSize: '0.95rem',
                      lineHeight: '1.5',
                      cursor: answeredCorrect ? 'default' : 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <span style={{
                      fontWeight: 900,
                      color: isSelected && opt.isCorrect ? '#34d399' : 'var(--crear-gold)',
                      background: 'rgba(255,255,255,0.06)',
                      padding: '3px 10px',
                      borderRadius: '8px',
                      fontSize: '0.85rem'
                    }}>
                      Opción {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span style={{flex: 1, color: isSelected && !opt.isCorrect ? '#fca5a5' : '#fff'}}>
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Retroalimentación Inmediata */}
            {simResult && (
              <div style={{
                marginTop: '1.8rem',
                padding: '1.4rem',
                borderRadius: '12px',
                background: simResult.isCorrect ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                border: `1px solid ${simResult.isCorrect ? '#10b981' : '#ef4444'}`
              }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem'}}>
                  <strong style={{color: simResult.isCorrect ? '#34d399' : '#f87171', fontSize: '1.05rem'}}>
                    {simResult.isCorrect ? '✓ DECISIÓN IMPECABLE (CAUSA OS)' : '✗ EVALUACIÓN ONTOLÓGICA'} — {simResult.classification}
                  </strong>
                  <span style={{
                    fontWeight: 900,
                    color: simResult.xpDelta > 0 ? '#34d399' : '#f87171',
                    fontSize: '1rem'
                  }}>
                    {simResult.xpDelta > 0 ? `+${simResult.xpDelta} XP` : `${simResult.xpDelta} XP`}
                  </span>
                </div>
                <p style={{margin: 0, fontSize: '0.96rem', color: '#e5e7eb', lineHeight: '1.6'}}>
                  {simResult.feedback}
                </p>

                {!simResult.isCorrect && (
                  <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'flex-end'}}>
                    <button
                      onClick={() => handleResetSimulation(activeSim.id)}
                      className="btn-secondary"
                      style={{fontSize: '0.82rem', padding: '6px 14px'}}
                    >
                      Intentar de nuevo
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* PESTAÑA 3: MI PERFIL, MEDALLAS Y ROLES DESBLOQUEADOS EN SALA   */}
      {/* ============================================================== */}
      {activeTab === 'perfil' && (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          
          {/* Card Principal de Fisonomía y Escalafón */}
          <div className="glass-panel" style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(7, 13, 31, 0.98) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.8rem'}}>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '1.4rem'}}>
                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, var(--crear-gold) 0%, #b45309 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.4rem',
                  boxShadow: '0 8px 25px rgba(255, 183, 3, 0.4)'
                }}>
                  🛡️
                </div>
                <div>
                  <div style={{fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--crear-gold)', fontWeight: 800, letterSpacing: '0.05em'}}>
                    Autoentrenamiento & Fisonomía Nodus
                  </div>
                  <h2 style={{margin: '0.2rem 0', fontSize: '1.8rem', color: '#fff'}}>
                    Nivel {currentFisonomiaLevel}: {getFisonomiaTitle(currentFisonomiaLevel)}
                  </h2>
                  <div style={{fontSize: '0.88rem', color: 'var(--text-muted)'}}>
                    Persona: <span style={{color: '#fff', fontWeight: 600}}>{user?.displayName || user?.email || 'Persona en Modo Aprendiz'}</span>
                  </div>
                </div>
              </div>

              {/* Contadores */}
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <div style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '12px 20px',
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
                  background: 'rgba(0,0,0,0.5)',
                  padding: '12px 20px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center'
                }}>
                  <div style={{fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase'}}>Medallas</div>
                  <div style={{fontSize: '1.6rem', fontWeight: 900, color: '#38bdf8'}}>
                    {staffState.unlockedBadges.length} <span style={{fontSize: '0.8rem', fontWeight: 'normal'}}>/ {nodusStaffBadges.length}</span>
                  </div>
                </div>

                {/* Estado Ontológico Sin Roles */}
                <div style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{fontSize: '0.7rem', color: '#10b981', fontWeight: 800, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                    Estado en la Plataforma
                  </div>
                  <div style={{fontSize: '0.92rem', fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <span>🌱 Modo Aprendiz</span>
                  </div>
                  <div style={{fontSize: '0.7rem', color: 'var(--text-muted)'}}>
                    Sin roles ni jerarquías
                  </div>
                </div>
              </div>

            </div>

            {/* Barra de progreso de Fisonomía */}
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-muted)'}}>
                <span>
                  {currentFisonomiaLevel === 10 ? '¡Has alcanzado la maestría máxima de Fisonomía!' : `Progreso hacia Nivel ${currentFisonomiaLevel + 1} (${getFisonomiaTitle(currentFisonomiaLevel + 1)})`}
                </span>
                <span style={{color: 'var(--crear-gold)', fontWeight: 800}}>
                  {currentFisonomiaLevel === 10 ? '300 / 300 XP (Nivel Máximo)' : `${xpInCurrentLevel} / 300 XP (${levelProgressPercent}%)`}
                </span>
              </div>
              <div className="progress-bar-container" style={{height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '5px'}}>
                <div 
                  className="progress-bar-fill" 
                  style={{
                    width: `${levelProgressPercent}%`,
                    background: 'linear-gradient(90deg, var(--crear-gold) 0%, #38bdf8 100%)',
                    boxShadow: '0 0 12px rgba(56, 189, 248, 0.4)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Competencias y Habilidades de Autoentrenamiento */}
          <div className="glass-panel" style={{padding: '1.8rem'}}>
            <h3 style={{fontSize: '1.3rem', margin: '0 0 0.4rem', color: '#fff'}}>
              Competencias de Autoentrenamiento Desbloqueadas
            </h3>
            <p className="text-muted" style={{fontSize: '0.88rem', margin: '0 0 1.4rem'}}>
              Habilidades y niveles de consciencia desbloqueados según tu avance en las lecciones y simuladores.
            </p>

            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem'}}>
              {rolesDesbloqueadosFisonomia.map((r, i) => {
                const isUnlocked = currentFisonomiaLevel >= r.nivel;
                return (
                  <div 
                    key={i}
                    style={{
                      background: isUnlocked ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isUnlocked ? 'rgba(16, 185, 129, 0.35)' : 'rgba(255,255,255,0.06)'}`,
                      borderRadius: '12px',
                      padding: '1.1rem',
                      opacity: isUnlocked ? 1 : 0.6
                    }}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                      <strong style={{color: isUnlocked ? '#34d399' : '#fff', fontSize: '1rem'}}>
                        {r.rol}
                      </strong>
                      <span style={{
                        fontSize: '0.72rem',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        background: isUnlocked ? '#10b981' : 'rgba(255,255,255,0.1)',
                        color: isUnlocked ? '#000' : 'var(--text-muted)',
                        fontWeight: 800
                      }}>
                        {isUnlocked ? '✓ HABILITADO' : `REQ. NIVEL ${r.nivel}`}
                      </span>
                    </div>
                    <p style={{fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5'}}>
                      {r.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vitrina de Medallas Oficiales Nodus */}
          <div className="glass-panel" style={{padding: '1.8rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem'}}>
              <div>
                <h3 style={{fontSize: '1.3rem', margin: 0, color: '#fff'}}>
                  Vitrina de Medallas Oficiales Nodus
                </h3>
                <p className="text-muted" style={{fontSize: '0.88rem', margin: 0}}>
                  Insignias del estándar de excelencia en <strong>CREAR PODER SIN LÍMITES</strong>.
                </p>
              </div>
              <span style={{fontSize: '0.85rem', color: 'var(--crear-gold)', fontWeight: 700}}>
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
                      opacity: isUnlocked ? 1 : 0.65,
                      background: isUnlocked ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.35)',
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

                    <p style={{fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5', minHeight: '45px', margin: '0 0 0.8rem'}}>
                      {badge.requirement}
                    </p>

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem'}}>
                      <span style={{fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)'}}>
                        {badge.code}
                      </span>
                      {isUnlocked ? (
                        <span style={{color: '#10b981', fontWeight: 'bold'}}>
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
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* PESTAÑA 4: TRAZABILIDAD CAUSA OS (AUDITORÍA EN TIEMPO REAL)     */}
      {/* ============================================================== */}
      {activeTab === 'trazabilidad' && (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          
          <div className="glass-panel" style={{
            padding: '1.8rem 2.2rem',
            borderLeft: '4px solid #10b981',
            background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.08) 0%, rgba(7, 13, 31, 0.95) 100%)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                padding: '3px 10px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 800
              }}>
                RIGOR ONTOLÓGICO INMUTABLE
              </span>
              <h2 style={{margin: '0.4rem 0 0.2rem', fontSize: '1.5rem'}}>
                Trazabilidad y Auditoría en Tiempo Real Causa OS
              </h2>
              <p style={{margin: 0, fontSize: '0.92rem', color: '#e2e8f0', fontStyle: 'italic'}}>
                «Causa OS no altera la evidencia. Todo cambio es registrable y auditable.»
              </p>
            </div>

            <div style={{display: 'flex', gap: '10px'}}>
              <button
                onClick={handleCopyLog}
                className="btn-secondary"
                style={{fontSize: '0.85rem', padding: '8px 16px'}}
              >
                {copiedLog ? '✓ Copiado al Portapapeles' : '📋 Copiar Registro JSON'}
              </button>
            </div>
          </div>

          {/* Tabla de Eventos Cronológicos */}
          <div className="glass-panel" style={{padding: '1.5rem', overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem'}}>
              <thead>
                <tr style={{borderBottom: '2px solid rgba(255,255,255,0.12)', textAlign: 'left', color: 'var(--text-muted)'}}>
                  <th style={{padding: '0.7rem 0.5rem'}}>Timestamp</th>
                  <th style={{padding: '0.7rem 0.5rem'}}>Persona en Modo Aprendiz</th>
                  <th style={{padding: '0.7rem 0.5rem'}}>Acción Registrada</th>
                  <th style={{padding: '0.7rem 0.5rem'}}>Resultado Ontológico</th>
                  <th style={{padding: '0.7rem 0.5rem', textAlign: 'right'}}>XP Delta</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} style={{borderBottom: '1px solid rgba(255,255,255,0.06)'}}>
                    <td style={{padding: '0.7rem 0.5rem', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '0.8rem'}}>
                      {log.timestamp}
                    </td>
                    <td style={{padding: '0.7rem 0.5rem'}}>
                      <span style={{color: '#fff', fontWeight: 600}}>{log.responsable}</span>
                      <div style={{fontSize: '0.75rem', color: '#10b981'}}>Modo Aprendiz</div>
                    </td>
                    <td style={{padding: '0.7rem 0.5rem', color: '#fde047', fontWeight: 500}}>
                      {log.accion}
                    </td>
                    <td style={{padding: '0.7rem 0.5rem', color: '#e2e8f0'}}>
                      {log.resultado}
                    </td>
                    <td style={{padding: '0.7rem 0.5rem', textAlign: 'right', fontWeight: 800}}>
                      <span style={{
                        color: log.xpDelta > 0 ? '#34d399' : log.xpDelta < 0 ? '#f87171' : 'var(--text-muted)'
                      }}>
                        {log.xpDelta > 0 ? `+${log.xpDelta} XP` : log.xpDelta < 0 ? `${log.xpDelta} XP` : '—'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )}

    </div>
  );
}
