import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DOMPurify from 'dompurify';
import ReactiveAvatar from '../components/ReactiveAvatar';
import CartesianLeadershipPlane from '../components/CartesianLeadershipPlane';
import { 
  nodusStaffBadges, 
  nodusStaffRoleCertifications,
  nodusStaffSimulations, 
  moduloAprendiz, 
  rolesDesbloqueadosFisonomia 
} from '../data/nodusStaffCurriculum';

export default function GamificacionStaff({ defaultTab = 'aprendiz' }) {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();

  const storageKey = useMemo(() => `nodus_staff_state_${user?.uid || 'guest'}`, [user?.uid]);
  const auditKey = useMemo(() => `causa_os_traceability_${user?.uid || 'guest'}`, [user?.uid]);

  // Pestaña activa: 'aprendiz' | 'simulador' | 'perfil' | 'trazabilidad'
  const urlTab = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(() => {
    if (urlTab && ['aprendiz', 'simulador', 'perfil', 'trazabilidad'].includes(urlTab)) {
      return urlTab;
    }
    return defaultTab;
  });

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && ['aprendiz', 'simulador', 'perfil', 'trazabilidad'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  // Estado unificado del Staff / Liderazgo Adaptativo (persistente)
  const [staffState, setStaffState] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
      const generic = localStorage.getItem('nodus_staff_state');
      if (generic) return JSON.parse(generic);
    } catch (e) {
      console.warn('Error al leer staffState:', e);
    }
    return {
      xp: 1450,
      streak: 3,
      rigorScore: 88,
      empathyScore: 92,
      listeningScore: 92,
      pressureScore: 90,
      ethicsScore: 95,
      completedLessons: ['ap_modulo_1'],
      unlockedBadges: ['mente_aprendiz', 'compliance_master'],
      simulationAnswers: {}
    };
  });

  // Guardar en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(staffState));
      localStorage.setItem('nodus_staff_state', JSON.stringify(staffState));
    } catch (e) {
      console.warn('Error al guardar staffState:', e);
    }
  }, [staffState, storageKey]);

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
        responsable: user?.displayName || user?.email?.split('@')[0] || 'Líder en Aprendizaje',
        accion: 'Calibración de Estado & Terminal Causa OS',
        resultado: 'Compliance Clearance Activado (Alto Rigor + Alta Empatía)',
        xpDelta: 0,
        puntos_rigor: 0,
        puntos_empatia: 0,
        origen: 'Campus Interactivo Interruption'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem(auditKey, JSON.stringify(auditLogs));
    } catch (e) {
      console.warn('Error al guardar auditLogs:', e);
    }
  }, [auditLogs, auditKey]);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (msg, type = 'gold') => {
    setToastMessage({ msg, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Función para registrar auditoría Causa OS
  const logAudit = (accion, resultado, xpDelta = 0, puntos_rigor = 0, puntos_empatia = 0) => {
    const newEntry = {
      id: 'log-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
      timestamp: new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'medium' }),
      responsable: user?.displayName || user?.email?.split('@')[0] || 'Líder en Aprendizaje',
      accion,
      resultado,
      xpDelta,
      puntos_rigor,
      puntos_empatia,
      origen: 'Plataforma Nodus — Causa OS'
    };
    setAuditLogs(prev => [newEntry, ...prev.slice(0, 99)]);
  };

  // Nivel de Fisonomía y Competencia (1 a 10)
  const currentFisonomiaLevel = Math.min(10, Math.max(1, 1 + Math.floor((staffState.xp || 0) / 300)));
  const xpCurrentLevelBase = (currentFisonomiaLevel - 1) * 300;
  const xpInCurrentLevel = currentFisonomiaLevel === 10 ? 300 : (staffState.xp || 0) - xpCurrentLevelBase;
  const levelProgressPercent = currentFisonomiaLevel === 10 ? 100 : Math.min(100, Math.round((xpInCurrentLevel / 300) * 100));

  const getFisonomiaTitle = (lvl) => {
    const titles = {
      1: 'Fase 1: Descubrimiento & Escucha Activa',
      2: 'Calibración de Estado & Vasija Vacía',
      3: 'Arquitectura de Valor & Desempeño',
      4: 'Comunicación Ética & Conexión Límbica',
      5: 'Facilitador de Acuerdos sin Coerción',
      6: 'Alquimia de Obstáculos & Método Grand Slam',
      7: 'Integrador de Modo Causa & Cero Drama',
      8: 'Maestro de Neutralidad & Presencia Sombra',
      9: 'Guardián del Contenedor & Alto Rigor',
      10: 'Liderazgo Adaptativo Integral (Alto Rigor + Alta Empatía)'
    };
    return titles[lvl] || 'Liderazgo Adaptativo';
  };

  // Otorgar medalla
  const awardBadge = (badgeId, badgeName, xpBonus = 0) => {
    setStaffState(prev => {
      if (prev.unlockedBadges.includes(badgeId)) return prev;
      const newBadges = [...prev.unlockedBadges, badgeId];
      const newXp = prev.xp + xpBonus;
      showToast(`🏆 ¡MEDALLA DESBLOQUEADA! «${badgeName}» (+${xpBonus} XP)`, 'gold');
      logAudit(`Medalla otorgada: «${badgeName}»`, `Insignia oficial de Liderazgo Adaptativo`, xpBonus);
      return {
        ...prev,
        xp: newXp,
        unlockedBadges: newBadges
      };
    });
  };

  // ==============================================================
  // ESTADOS DEL MODO APRENDIZ (MICRO-LEARNING)
  // ==============================================================
  const [selectedAprendizLesson, setSelectedAprendizLesson] = useState(moduloAprendiz[0]);

  const handleCompleteAprendizLesson = (lesson) => {
    if (staffState.completedLessons.includes(lesson.id)) {
      showToast(`Ya habías completado la lección «${lesson.title}».`, 'blue');
      return;
    }

    const newCompleted = [...staffState.completedLessons, lesson.id];
    const newXp = (staffState.xp || 0) + lesson.xpReward;
    
    setStaffState(prev => ({
      ...prev,
      xp: newXp,
      completedLessons: newCompleted
    }));

    showToast(`✓ Lección «${lesson.title}» completada (+${lesson.xpReward} XP)`, 'green');
    logAudit(`Modo Aprendiz: ${lesson.title}`, 'Lectura y asimilación completada', lesson.xpReward);

    const allAprendizDone = moduloAprendiz.every(l => newCompleted.includes(l.id));
    if (allAprendizDone && !staffState.unlockedBadges.includes('mente_aprendiz')) {
      setTimeout(() => {
        awardBadge('mente_aprendiz', 'Mente de Aprendiz', 150);
      }, 600);
    }
  };

  // ==============================================================
  // ESTADOS DEL SIMULADOR TÁCTICO (EL CRISOL DEL DÍA)
  // ==============================================================
  const [activeSimIndex, setActiveSimIndex] = useState(0);
  const activeSim = nodusStaffSimulations[activeSimIndex] || nodusStaffSimulations[0];
  const simResult = staffState.simulationAnswers[activeSim.id];

  // Estado del Avatar reactivo para el escenario actual
  const currentAvatarState = simResult?.avatar_reaccion || activeSim.avatar_estado_inicial || 'neutral';

  const handleAnswerSimulation = (simId, option) => {
    const isAlreadyAnsweredCorrect = staffState.simulationAnswers[simId]?.isCorrect;
    if (isAlreadyAnsweredCorrect) {
      showToast('Este caso ya fue resuelto con éxito. Puedes repasar las opciones y retroalimentación.', 'blue');
      return;
    }

    const xpDelta = option.xpDelta || 100;
    const newXp = Math.max(0, (staffState.xp || 0) + xpDelta);

    const puntosRigor = option.puntos_rigor ?? (option.isCorrect ? 80 : -40);
    const puntosEmpatia = option.puntos_empatia ?? (option.isCorrect ? 85 : -60);

    const curRigor = staffState.rigorScore || 88;
    const curEmpatia = staffState.empathyScore || 92;

    const newRigor = Math.min(100, Math.max(10, curRigor + Math.round(puntosRigor * 0.08)));
    const newEmpatia = Math.min(100, Math.max(10, curEmpatia + Math.round(puntosEmpatia * 0.08)));

    const avatarReaction = option.avatar_reaccion || (option.isCorrect ? 'alineado_y_agradecido' : 'defensivo_molesto');

    const updatedAnswers = {
      ...staffState.simulationAnswers,
      [simId]: {
        selectedOptionId: option.id,
        isCorrect: option.isCorrect,
        classification: option.classification,
        feedback: option.feedback,
        xpDelta: xpDelta,
        puntos_rigor: puntosRigor,
        puntos_empatia: puntosEmpatia,
        avatar_reaccion: avatarReaction,
        answeredAt: new Date().toISOString()
      }
    };

    setStaffState(prev => ({
      ...prev,
      xp: newXp,
      rigorScore: newRigor,
      empathyScore: newEmpatia,
      simulationAnswers: updatedAnswers
    }));

    if (option.isCorrect) {
      showToast(`✓ ¡DECISIÓN IMPECABLE! +${xpDelta} XP (Rigor: ${puntosRigor > 0 ? '+' + puntosRigor : puntosRigor} | Empatía: ${puntosEmpatia > 0 ? '+' + puntosEmpatia : puntosEmpatia})`, 'green');
      logAudit(`Simulador: ${activeSim.title}`, `Decisión Impecable (${option.classification})`, xpDelta, puntosRigor, puntosEmpatia);

      if (newRigor >= 80 && newEmpatia >= 80 && !staffState.unlockedBadges.includes('compliance_master')) {
        setTimeout(() => awardBadge('compliance_master', 'Compliance Master (Aprobación Total)', 600), 700);
      }
      const correctSimsCount = Object.values(updatedAnswers).filter(a => a.isCorrect).length;
      if (correctSimsCount >= 2 && !staffState.unlockedBadges.includes('sombra_impecable')) {
        setTimeout(() => awardBadge('sombra_impecable', 'Sombra Impecable', 400), 500);
      }
      if (correctSimsCount >= 3 && !staffState.unlockedBadges.includes('guardian_rigor')) {
        setTimeout(() => awardBadge('guardian_rigor', 'Guardián de la Integridad', 500), 1000);
      }
    } else {
      showToast(`✗ ${option.classification} (${xpDelta} XP) [Rigor: ${puntosRigor} | Empatía: ${puntosEmpatia}]`, 'red');
      logAudit(`Simulador: ${activeSim.title}`, `Desviación: ${option.classification}`, xpDelta, puntosRigor, puntosEmpatia);
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
    showToast('Caso reiniciado para calibración táctica.', 'blue');
  };

  // Copiar log de auditoría
  const [copiedLog, setCopiedLog] = useState(false);
  const handleCopyLog = () => {
    const payload = JSON.stringify({
      plataforma: 'INTERRUPTION — CREAR PODER SIN LÍMITES',
      sistema: 'Causa OS & Liderazgo Adaptativo (Stealth Mode)',
      usuario: user?.email || 'lider@academy.net',
      rigor_score: staffState.rigorScore,
      empathy_score: staffState.empathyScore,
      cuadrante: staffState.rigorScore >= 50 && staffState.empathyScore >= 50 ? 'Liderazgo Adaptativo' : 'Desviación Operativa',
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
    <div className="gamificacion-page" style={{ padding: '1.5rem', maxWidth: '1300px', margin: '0 auto', color: '#fff' }}>
      
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

      {/* Cabecera Principal Institucional (Regla Marca CREAR PODER SIN LÍMITES) */}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
          <img 
            src="/interrupcion_logo.jpg" 
            alt="Logo Interrupción - CREAR PODER SIN LÍMITES" 
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '16px',
              objectFit: 'cover',
              border: '2px solid var(--crear-gold, #ffb703)',
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
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--crear-gold, #ffb703)', letterSpacing: '0.05em' }}>
                CREAR PODER SIN LÍMITES
              </span>
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
              <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700 }}>
                LIDERAZGO ADAPTATIVO (STEALTH MODE)
              </span>
            </div>
            <h1 style={{ margin: '0 0 4px', fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff' }}>
              Simulador Táctico & Centro de Decisión
            </h1>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-muted)' }}>
              Evaluación ontológica continua en dos ejes: <strong>Rigor Score</strong> (sostenimiento de acuerdos) y <strong>Empathy Score</strong> (escucha y respeto a la libertad).
            </p>
          </div>
        </div>

        {/* Quick Stats Pill */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255, 183, 3, 0.25)',
            padding: '10px 18px',
            borderRadius: '14px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--crear-gold, #ffb703)', fontWeight: 800 }}>XP TOTAL</div>
            <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fff' }}>
              {staffState.xp?.toLocaleString()} <span style={{ fontSize: '0.75rem', color: 'var(--crear-gold, #ffb703)' }}>XP</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            padding: '10px 18px',
            borderRadius: '14px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 800 }}>CUADRANTE</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#10b981' }}>
              Adaptativo ({staffState.empathyScore}, {staffState.rigorScore})
            </div>
          </div>
        </div>
      </header>

      {/* Navegación por Pestañas */}
      <nav style={{
        display: 'flex',
        gap: '0.6rem',
        marginBottom: '1.8rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        paddingBottom: '1rem',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => handleTabChange('simulador')}
          style={{
            padding: '12px 24px',
            borderRadius: '12px',
            border: 'none',
            background: activeTab === 'simulador' ? 'linear-gradient(135deg, #ffb703 0%, #fb8500 100%)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'simulador' ? '#070d1f' : 'var(--text-muted)',
            fontWeight: 900,
            fontSize: '0.92rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: activeTab === 'simulador' ? '0 0 25px rgba(255, 183, 3, 0.5)' : 'none',
            transition: 'all 0.2s ease'
          }}
        >
          <span>⚡ El Crisol del Día (Simulador)</span>
          <span style={{
            background: activeTab === 'simulador' ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.1)',
            padding: '2px 8px',
            borderRadius: '10px',
            fontSize: '0.75rem'
          }}>
            {Object.values(staffState.simulationAnswers || {}).filter(a => a.isCorrect).length}/{nodusStaffSimulations.length}
          </span>
        </button>

        <button
          onClick={() => handleTabChange('aprendiz')}
          style={{
            padding: '12px 20px',
            borderRadius: '12px',
            border: 'none',
            background: activeTab === 'aprendiz' ? 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)' : 'rgba(255,255,255,0.04)',
            color: activeTab === 'aprendiz' ? '#fff' : 'var(--text-muted)',
            fontWeight: 800,
            fontSize: '0.9rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}
        >
          <span>📖 Modo Aprendiz (Micro-Learning)</span>
          <span style={{
            background: activeTab === 'aprendiz' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.1)',
            padding: '2px 7px',
            borderRadius: '10px',
            fontSize: '0.75rem'
          }}>
            {(staffState.completedLessons || []).length}/{moduloAprendiz.length}
          </span>
        </button>

        <button
          onClick={() => handleTabChange('perfil')}
          style={{
            padding: '12px 20px',
            borderRadius: '12px',
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
          <span>👤 Perfil & Liderazgo Adaptativo</span>
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
          onClick={() => handleTabChange('trazabilidad')}
          style={{
            padding: '12px 20px',
            borderRadius: '12px',
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
      {/* PESTAÑA 1: EL CRISOL DEL DÍA (SIMULADOR TÁCTICO CON AVATAR)    */}
      {/* ============================================================== */}
      {activeTab === 'simulador' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '1.25rem' }}>
            
            {/* Header del Simulador con Selector de Escenarios */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.8rem' }}>
              <div>
                <span style={{
                  background: 'rgba(255, 183, 3, 0.15)',
                  color: 'var(--crear-gold, #ffb703)',
                  padding: '3px 10px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  letterSpacing: '1px'
                }}>
                  SIMULADOR DE TOMA DE DECISIONES EN TIEMPO REAL
                </span>
                <h2 style={{ margin: '0.4rem 0 0', fontSize: '1.6rem', color: '#ffffff' }}>
                  El Crisol del Día: Calibración Situacional
                </h2>
                <p style={{ margin: '0.2rem 0 0', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  Aprende el comportamiento del cerebro humano (Neuromarketing Ético) y la responsabilidad radical (Causa OS) sin sesgos de complacencia ni violencia.
                </p>
              </div>

              {/* Botones de Selector de Escenarios */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {nodusStaffSimulations.map((sim, i) => {
                  const isDone = staffState.simulationAnswers?.[sim.id]?.isCorrect;
                  const isActive = activeSimIndex === i;

                  return (
                    <button
                      key={sim.id}
                      onClick={() => setActiveSimIndex(i)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '10px',
                        border: '1px solid',
                        borderColor: isActive ? 'var(--crear-gold, #ffb703)' : 'rgba(255,255,255,0.1)',
                        background: isActive ? 'rgba(255,183,3,0.25)' : 'rgba(0,0,0,0.4)',
                        color: isActive ? 'var(--crear-gold, #ffb703)' : 'var(--text-muted)',
                        fontWeight: 800,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>{sim.id}</span>
                      {isDone && <span style={{ color: '#10b981' }}>✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* TABLERO DE SIMULACIÓN TÁCTICA: AVATAR REACTIVO + GLOBO DE DIÁLOGO */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(7, 13, 31, 0.98) 100%)',
              border: '1.5px solid rgba(255, 183, 3, 0.35)',
              borderRadius: '1.25rem',
              padding: '1.8rem',
              marginBottom: '1.8rem',
              boxShadow: '0 10px 35px rgba(0,0,0,0.6)'
            }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'center' }}>
                
                {/* Zona Central: El Avatar Reactivo */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '180px' }}>
                  <ReactiveAvatar state={currentAvatarState} size={150} showLabel={true} />
                </div>

                {/* Globo de Diálogo de la Situación en Terreno */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--crear-gold, #ffb703)', fontWeight: 800, textTransform: 'uppercase' }}>
                      MÓDULO: {activeSim.modulo || activeSim.category} • {activeSim.title}
                    </span>
                    {simResult?.isCorrect && (
                      <span style={{
                        background: 'rgba(16, 185, 129, 0.15)',
                        border: '1px solid #10b981',
                        color: '#10b981',
                        fontSize: '0.75rem',
                        fontWeight: 900,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px'
                      }}>
                        ✓ CASO RESUELTO EN INTEGRIDAD
                      </span>
                    )}
                  </div>

                  <div style={{
                    background: 'rgba(0, 0, 0, 0.45)',
                    borderLeft: '4px solid var(--crear-gold, #ffb703)',
                    borderRadius: '0.75rem',
                    padding: '1.2rem 1.4rem',
                    position: 'relative'
                  }}>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Situación en Terreno:
                    </span>
                    <p style={{ fontSize: '1.05rem', color: '#ffffff', margin: 0, lineHeight: '1.65', fontWeight: 500 }}>
                      «{activeSim.scenario}»
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Opciones Interactivas (A, B, C) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Selecciona tu respuesta táctica:
              </span>

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
                      color: isSelected && opt.isCorrect ? '#34d399' : 'var(--crear-gold, #ffb703)',
                      background: 'rgba(255,255,255,0.06)',
                      padding: '3px 10px',
                      borderRadius: '8px',
                      fontSize: '0.85rem'
                    }}>
                      Opción {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span style={{ flex: 1, color: isSelected && !opt.isCorrect ? '#fca5a5' : '#fff' }}>
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Retroalimentación Inmediata Ontológica y Científica */}
            {simResult && (
              <div style={{
                marginTop: '1.8rem',
                padding: '1.5rem',
                borderRadius: '14px',
                background: simResult.isCorrect ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                border: `1.5px solid ${simResult.isCorrect ? '#10b981' : '#ef4444'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <strong style={{ color: simResult.isCorrect ? '#34d399' : '#f87171', fontSize: '1.05rem' }}>
                    {simResult.isCorrect ? '✓ DECISIÓN IMPECABLE (LIDERAZGO ADAPTATIVO)' : '✗ DESVIACIÓN ONTOLÓGICA'} — {simResult.classification}
                  </strong>
                  
                  {/* Deltas de Rigor y Empatía */}
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(255, 183, 3, 0.15)',
                      color: 'var(--crear-gold, #ffb703)',
                      border: '1px solid rgba(255, 183, 3, 0.3)'
                    }}>
                      Rigor: {simResult.puntos_rigor > 0 ? `+${simResult.puntos_rigor}` : simResult.puntos_rigor}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}>
                      Empatía: {simResult.puntos_empatia > 0 ? `+${simResult.puntos_empatia}` : simResult.puntos_empatia}
                    </span>
                    <span style={{
                      fontWeight: 900,
                      color: simResult.xpDelta > 0 ? '#34d399' : '#f87171',
                      fontSize: '0.95rem'
                    }}>
                      {simResult.xpDelta > 0 ? `+${simResult.xpDelta} XP` : `${simResult.xpDelta} XP`}
                    </span>
                  </div>
                </div>

                <p style={{ margin: 0, fontSize: '0.96rem', color: '#e5e7eb', lineHeight: '1.6' }}>
                  {simResult.feedback}
                </p>

                <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'flex-end', gap: '0.8rem' }}>
                  {!simResult.isCorrect && (
                    <button
                      onClick={() => handleResetSimulation(activeSim.id)}
                      className="btn-secondary"
                      style={{ fontSize: '0.85rem', padding: '8px 16px', borderRadius: '9999px' }}
                    >
                      Intentar de nuevo
                    </button>
                  )}
                  {activeSimIndex < nodusStaffSimulations.length - 1 && (
                    <button
                      onClick={() => setActiveSimIndex(prev => prev + 1)}
                      className="btn-primary"
                      style={{ fontSize: '0.85rem', padding: '8px 18px', borderRadius: '9999px' }}
                    >
                      Siguiente Escenario ➔
                    </button>
                  )}
                </div>
              </div>
            )}

          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* PESTAÑA 2: MODO APRENDIZ (MICRO-LEARNING TEÓRICO Y VIVENCIAL)    */}
      {/* ============================================================== */}
      {activeTab === 'aprendiz' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 320px) 1fr', gap: '1.5rem' }}>
          
          {/* Menú de Lecciones de Modo Aprendiz */}
          <div className="glass-panel" style={{ padding: '1.2rem', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--crear-gold, #ffb703)', margin: '0 0 1rem', textTransform: 'uppercase' }}>
              Módulos de Aprendizaje
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {moduloAprendiz.map((lesson, idx) => {
                const isCompleted = staffState.completedLessons?.includes(lesson.id);
                const isSelected = selectedAprendizLesson.id === lesson.id;

                return (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedAprendizLesson(lesson)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px',
                      border: '1px solid',
                      borderColor: isSelected ? 'var(--crear-gold, #ffb703)' : 'rgba(255,255,255,0.08)',
                      background: isSelected ? 'rgba(255, 183, 3, 0.15)' : 'rgba(0,0,0,0.2)',
                      color: isSelected ? '#fff' : 'var(--text-muted)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.88rem'
                    }}
                  >
                    <span>{idx + 1}. {lesson.title}</span>
                    {isCompleted && <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Visor de Lección */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 800 }}>
                  LECCIÓN TEÓRICA & NEUROCIENCIA
                </span>
                <h2 style={{ margin: '0.2rem 0 0', fontSize: '1.5rem' }}>
                  {selectedAprendizLesson.title}
                </h2>
              </div>
              <span style={{
                background: 'rgba(255,183,3,0.15)',
                color: 'var(--crear-gold, #ffb703)',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.8rem'
              }}>
                +{selectedAprendizLesson.xpReward} XP
              </span>
            </div>

            <div 
              style={{ lineHeight: 1.7, fontSize: '0.95rem', color: '#e2e8f0' }}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedAprendizLesson.contentHtml) }}
            />

            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => handleCompleteAprendizLesson(selectedAprendizLesson)}
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem', borderRadius: '9999px' }}
              >
                {staffState.completedLessons?.includes(selectedAprendizLesson.id) 
                  ? '✓ Lección Completada' 
                  : 'Marcar Lección como Completada'}
              </button>
            </div>
          </div>

        </div>
      )}

      {/* ============================================================== */}
      {/* PESTAÑA 3: PERFIL & LIDERAZGO ADAPTATIVO (CERO ROLES DE SALA)  */}
      {/* ============================================================== */}
      {activeTab === 'perfil' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Card Principal de Acreditación (Sin dropdowns ni cargos) */}
          <div className="glass-panel" style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(7, 13, 31, 0.98) 100%)',
            border: '1.5px solid rgba(16, 185, 129, 0.35)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.8rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
                <div style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.4rem',
                  boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)'
                }}>
                  🛡️
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#10b981', fontWeight: 800, letterSpacing: '0.05em' }}>
                    ACREDITACIÓN OFICIAL STEALTH
                  </div>
                  <h2 style={{ margin: '0.2rem 0', fontSize: '1.8rem', color: '#fff' }}>
                    Nivel {currentFisonomiaLevel}: {getFisonomiaTitle(currentFisonomiaLevel)}
                  </h2>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Colaborador: <span style={{ color: '#fff', fontWeight: 600 }}>{user?.displayName || user?.email || 'Líder en Aprendizaje'}</span>
                  </div>
                </div>
              </div>

              {/* Contadores */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '12px 20px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>XP Total</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--crear-gold, #ffb703)' }}>
                    {staffState.xp?.toLocaleString()} <span style={{ fontSize: '0.75rem' }}>XP</span>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '12px 20px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Medallas</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#38bdf8' }}>
                    {(staffState.unlockedBadges || []).length} <span style={{ fontSize: '0.75rem' }}>/ {nodusStaffBadges.length}</span>
                  </div>
                </div>

                <div style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '10px 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase' }}>
                    Compliance Clearance
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 900, color: '#ffffff' }}>
                    ✓ Aprobado
                  </div>
                </div>
              </div>

            </div>

            {/* Barra de progreso de Fisonomía */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-muted)' }}>
                <span>
                  {currentFisonomiaLevel === 10 ? '¡Has alcanzado la maestría máxima de Liderazgo Adaptativo!' : `Progreso hacia Nivel ${currentFisonomiaLevel + 1} (${getFisonomiaTitle(currentFisonomiaLevel + 1)})`}
                </span>
                <span style={{ color: 'var(--crear-gold, #ffb703)', fontWeight: 800 }}>
                  {currentFisonomiaLevel === 10 ? '300 / 300 XP (Nivel Máximo)' : `${xpInCurrentLevel} / 300 XP (${levelProgressPercent}%)`}
                </span>
              </div>
              <div className="progress-bar-container" style={{ height: '10px', background: 'rgba(255,255,255,0.08)', borderRadius: '5px' }}>
                <div 
                  className="progress-bar-fill" 
                  style={{
                    width: `${levelProgressPercent}%`,
                    background: 'linear-gradient(90deg, #10b981 0%, #38bdf8 100%)',
                    boxShadow: '0 0 12px rgba(16, 185, 129, 0.4)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Plano Cartesiano Interactivo */}
          <CartesianLeadershipPlane 
            rigorScore={staffState.rigorScore || 88} 
            empathyScore={staffState.empathyScore || 92} 
            compact={false}
            showDetails={true}
          />

          {/* Competencias y Acreditaciones de Habilidades (Phase 1, Phase 2, The 90-Day Performance Cycle) */}
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <h3 style={{ fontSize: '1.3rem', margin: '0 0 0.4rem', color: '#fff' }}>
              Acreditaciones de Competencia Metodológica
            </h3>
            <p className="text-muted" style={{ fontSize: '0.88rem', margin: '0 0 1.4rem' }}>
              Validación de habilidades operativas stealth desbloqueadas por rigor ontológico y resolución de simulaciones.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {nodusStaffRoleCertifications.map((r, i) => {
                const isUnlocked = currentFisonomiaLevel >= r.minFisonomia;
                return (
                  <div 
                    key={i}
                    style={{
                      background: isUnlocked ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isUnlocked ? 'rgba(16, 185, 129, 0.35)' : 'rgba(255,255,255,0.06)'}`,
                      borderRadius: '12px',
                      padding: '1.2rem',
                      opacity: isUnlocked ? 1 : 0.65
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <strong style={{ color: isUnlocked ? '#34d399' : '#fff', fontSize: '0.98rem' }}>
                        {r.role}
                      </strong>
                      <span style={{
                        fontSize: '0.72rem',
                        padding: '2px 8px',
                        borderRadius: '10px',
                        background: isUnlocked ? '#10b981' : 'rgba(255,255,255,0.1)',
                        color: isUnlocked ? '#000' : 'var(--text-muted)',
                        fontWeight: 800
                      }}>
                        {isUnlocked ? '✓ HABILITADO' : `REQ. NIVEL ${r.minFisonomia}`}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: '0 0 0.5rem', lineHeight: '1.5' }}>
                      {r.description}
                    </p>
                    <div style={{ fontSize: '0.75rem', color: '#ffb703', fontWeight: 700 }}>
                      Medalla requerida: {r.badgeName}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vitrina de Medallas Oficiales */}
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.4rem' }}>
              <div>
                <h3 style={{ fontSize: '1.3rem', margin: 0, color: '#fff' }}>
                  Vitrina de Medallas Oficiales Nodus
                </h3>
                <p className="text-muted" style={{ fontSize: '0.88rem', margin: 0 }}>
                  Insignias del estándar de excelencia en <strong>CREAR PODER SIN LÍMITES</strong>.
                </p>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--crear-gold, #ffb703)', fontWeight: 700 }}>
                {(staffState.unlockedBadges || []).length} de {nodusStaffBadges.length} desbloqueadas
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {nodusStaffBadges.map(badge => {
                const isUnlocked = staffState.unlockedBadges?.includes(badge.id);
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
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
                        <h4 style={{ margin: 0, fontSize: '0.95rem', color: isUnlocked ? '#fff' : 'var(--text-muted)' }}>
                          {badge.name}
                        </h4>
                        <span style={{ fontSize: '0.75rem', color: badge.color, fontWeight: 700 }}>
                          +{badge.xpReward} XP
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5', minHeight: '45px', margin: '0 0 0.8rem' }}>
                      {badge.requirement}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                      <span style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)' }}>
                        {badge.code}
                      </span>
                      {isUnlocked ? (
                        <span style={{ color: '#10b981', fontWeight: 'bold' }}>
                          ✓ Desbloqueada
                        </span>
                      ) : (
                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
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
              <h2 style={{ margin: '0.4rem 0 0.2rem', fontSize: '1.5rem' }}>
                Trazabilidad y Auditoría en Tiempo Real Causa OS
              </h2>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#e2e8f0', fontStyle: 'italic' }}>
                «Causa OS no altera la evidencia. Todo cambio es registrable y auditable.»
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handleCopyLog}
                className="btn-secondary"
                style={{ fontSize: '0.85rem', padding: '8px 16px', borderRadius: '9999px' }}
              >
                {copiedLog ? '✓ Copiado al Portapapeles' : '📋 Copiar Registro JSON'}
              </button>
            </div>
          </div>

          {/* Tabla de Eventos Cronológicos */}
          <div className="glass-panel" style={{ padding: '1.5rem', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.12)', textAlign: 'left', color: 'var(--text-muted)' }}>
                  <th style={{ padding: '0.7rem 0.5rem' }}>Timestamp</th>
                  <th style={{ padding: '0.7rem 0.5rem' }}>Colaborador</th>
                  <th style={{ padding: '0.7rem 0.5rem' }}>Acción Registrada</th>
                  <th style={{ padding: '0.7rem 0.5rem' }}>Resultado Ontológico</th>
                  <th style={{ padding: '0.7rem 0.5rem', textAlign: 'center' }}>Rigor / Empatía</th>
                  <th style={{ padding: '0.7rem 0.5rem', textAlign: 'right' }}>XP Delta</th>
                </tr>
              </thead>
              <tbody>
                {auditLogs.map((log) => (
                  <tr key={log.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '0.7rem 0.5rem', color: 'var(--text-muted)', fontFamily: 'monospace', fontSize: '0.8rem' }}>
                      {log.timestamp}
                    </td>
                    <td style={{ padding: '0.7rem 0.5rem' }}>
                      <span style={{ color: '#fff', fontWeight: 600 }}>{log.responsable}</span>
                      <div style={{ fontSize: '0.75rem', color: '#10b981' }}>Liderazgo Adaptativo</div>
                    </td>
                    <td style={{ padding: '0.7rem 0.5rem', color: '#fde047', fontWeight: 500 }}>
                      {log.accion}
                    </td>
                    <td style={{ padding: '0.7rem 0.5rem', color: '#e2e8f0' }}>
                      {log.resultado}
                    </td>
                    <td style={{ padding: '0.7rem 0.5rem', textAlign: 'center', fontSize: '0.8rem' }}>
                      <span style={{ color: '#ffb703' }}>{log.puntos_rigor || 0}</span> / <span style={{ color: '#10b981' }}>{log.puntos_empatia || 0}</span>
                    </td>
                    <td style={{ padding: '0.7rem 0.5rem', textAlign: 'right', fontWeight: 800 }}>
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
