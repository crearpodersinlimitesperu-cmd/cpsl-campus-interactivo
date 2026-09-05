import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import { useNavigate } from 'react-router-dom';

export default function LaboratorioSintergico() {
  const { user } = useAuth();
  const { isFocusMode, toggleFocusMode } = useUI();
  const navigate = useNavigate();

  // Pestaña activa: 'calibrador' | 'dinamicas' | 'academico' | 'bitacora'
  const [activeTab, setActiveTab] = useState('calibrador');

  // Estados de Gamificación & Persistencia
  const storageKey = user ? `interrupcion_sintergia_${user.uid}` : 'interrupcion_sintergia_guest';
  const [sintergiaData, setSintergiaData] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Error al leer datos de sintergia:', e);
    }
    return {
      totalXp: 450,
      sesionesCompletadas: 2,
      nivelCoherenciaMax: 92,
      evidenciasRegistradas: [
        {
          id: 'ev-demo-1',
          fecha: '2026-09-04',
          dinamica: 'Factor de Direccionalidad en Neuromarketing',
          nota: 'Se eliminaron 4 diapositivas redundantes en la propuesta regional. La conversión subió un 25% al enfocar el procesador central.',
          xpGanada: 200
        }
      ],
      insignias: ['lattice_iniciado']
    };
  });

  // Guardar en localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(sintergiaData));
    } catch (e) {
      console.warn('Error guardando sintergiaData:', e);
    }
  }, [sintergiaData, storageKey]);

  // Estados del Calibrador Biofeedback (Meditación Autoalusiva)
  const [isRunning, setIsRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(180); // 3 min por defecto
  const [selectedDuration, setSelectedDuration] = useState(180);
  const [coherenciaScore, setCoherenciaScore] = useState(72);
  const [frecuenciaOnda, setFrecuenciaOnda] = useState('Alfa (10.5 Hz)');
  const [autoalusionFase, setAutoalusionFase] = useState('Fase 1: Reducción de Microdistorsiones');
  const [sesionFinalizada, setSesionFinalizada] = useState(false);

  // Formulario de Evidencia
  const [dinamicaSeleccionada, setDinamicaSeleccionada] = useState('Hipercampo en Comités');
  const [textoEvidencia, setTextoEvidencia] = useState('');
  const [feedbackToast, setFeedbackToast] = useState(null);

  const showToast = (msg, tipo = 'success') => {
    setFeedbackToast({ msg, tipo });
    setTimeout(() => setFeedbackToast(null), 4000);
  };

  // Temporizador interactivo de Meditación Autoalusiva
  useEffect(() => {
    let interval = null;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => {
          const nuevo = prev - 1;
          const progreso = (selectedDuration - nuevo) / selectedDuration;

          // Modulación dinámica de coherencia interhemisférica
          const variacion = Math.floor(Math.sin(progreso * Math.PI) * 20) + 75;
          setCoherenciaScore(Math.min(99, variacion));

          // Fases de Meditación Autoalusiva (Dr. Grinberg)
          if (progreso < 0.33) {
            setAutoalusionFase('Fase 1: Observación Somática (Disolución de Microdistorsiones de Estrés)');
            setFrecuenciaOnda('Alfa Rápido (12 Hz) — Desaceleración Neocortical');
          } else if (progreso < 0.7) {
            setAutoalusionFase('Fase 2: Integración Simultánea (Percepción del Campo Neuronal Unificado)');
            setFrecuenciaOnda('Alfa Puro (10 Hz) — Coherencia Interhemisférica Elevada');
          } else {
            setAutoalusionFase('Fase 3: Autoalusión Pura (El Observador mimetizando la Lattice)');
            setFrecuenciaOnda('Theta Sincronizado (7.5 Hz) — Alta Sintergia Directiva');
          }

          if (nuevo <= 0) {
            setIsRunning(false);
            setSesionFinalizada(true);
            return 0;
          }
          return nuevo;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timerSeconds, selectedDuration]);

  // Manejo de duración
  const handleSelectDuration = (segundos) => {
    if (isRunning) return;
    setSelectedDuration(segundos);
    setTimerSeconds(segundos);
    setSesionFinalizada(false);
  };

  // Reclamar recompensa de la sesión
  const reclamarRecompensaSesion = () => {
    const xpAñadida = 250;
    const nuevasInsignias = [...sintergiaData.insignias];
    if (!nuevasInsignias.includes('coherencia_eeg')) {
      nuevasInsignias.push('coherencia_eeg');
    }

    setSintergiaData(prev => ({
      ...prev,
      totalXp: prev.totalXp + xpAñadida,
      sesionesCompletadas: prev.sesionesCompletadas + 1,
      nivelCoherenciaMax: Math.max(prev.nivelCoherenciaMax, coherenciaScore),
      insignias: nuevasInsignias
    }));

    setSesionFinalizada(false);
    showToast(`¡Sesión de Autoalusión Verificada! +${xpAñadida} XP y Coherencia Registrada.`);
  };

  // Registrar nueva evidencia práctica
  const handleGuardarEvidencia = (e) => {
    e.preventDefault();
    if (!textoEvidencia.trim()) return;

    const nuevaEvidencia = {
      id: `ev-${Date.now()}`,
      fecha: new Date().toISOString().split('T')[0],
      dinamica: dinamicaSeleccionada,
      nota: textoEvidencia.trim(),
      xpGanada: 300
    };

    const nuevasInsignias = [...sintergiaData.insignias];
    if (sintergiaData.evidenciasRegistradas.length >= 2 && !nuevasInsignias.includes('lider_sintergico')) {
      nuevasInsignias.push('lider_sintergico');
    }

    setSintergiaData(prev => ({
      ...prev,
      totalXp: prev.totalXp + 300,
      evidenciasRegistradas: [nuevaEvidencia, ...prev.evidenciasRegistradas],
      insignias: nuevasInsignias
    }));

    setTextoEvidencia('');
    showToast('¡Evidencia Operativa Acreditada con Éxito! +300 XP.');
  };

  const formatearTiempo = (segundos) => {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="dinamicas-container animate-fade-in" style={{ paddingBottom: '3rem', maxWidth: '1150px', margin: '0 auto' }}>
      
      {/* TOAST DE FEEDBACK */}
      {feedbackToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: feedbackToast.tipo === 'success' ? '#065f46' : '#1e1b4b',
          color: '#ffffff',
          padding: '0.85rem 1.4rem',
          borderRadius: '12px',
          border: '1px solid #10b981',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: 600,
          fontSize: '0.92rem'
        }}>
          <span>✨</span>
          <span>{feedbackToast.msg}</span>
        </div>
      )}

      {/* HEADER DE CABECERA CIENTÍFICA & EJECUTIVA */}
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <button 
            onClick={() => navigate('/dashboard')}
            className="btn-secondary"
            style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
          >
            ← Volver al Dashboard
          </button>
          
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid #38bdf8',
              color: '#38bdf8',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px'
            }}>
              SINTERGIA XP: {sintergiaData.totalXp}
            </span>
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
            >
              {isFocusMode ? 'Salir Modo Enfoque' : 'Modo Enfoque'}
            </button>
          </div>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.4)', padding: '0.3rem 0.9rem', borderRadius: '9999px', marginBottom: '0.75rem' }}>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span style={{ fontSize: '0.78rem', color: '#c4b5fd', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
            PSICOFISIOLOGÍA UNAM & INPEC • TEORÍA SINTÉRGICA
          </span>
        </div>

        <h1 className="text-gold" style={{ fontSize: '2.5rem', margin: '0 0 0.5rem 0', fontWeight: 900 }}>
          Laboratorio Sintérgico & Coherencia Interhemisférica
        </h1>
        <p className="text-muted" style={{ maxWidth: '850px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Entrenamiento psicofisiológico de alta fidelidad basado en las investigaciones del <strong>Dr. Jacobo Grinberg-Zylberbaum</strong>. La excelencia operativa no es teoría pasiva: es la interacción congruente entre el <strong>Campo Neuronal</strong> del líder y la <strong>Lattice</strong>, calibrando la sintonía colectiva, el neuromarketing y la toma de decisiones sin distorsión reactiva.
        </p>
      </header>

      {/* PESTAÑAS DE NAVEGACIÓN DEL LABORATORIO */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {[
          { id: 'calibrador', label: '⚡ Calibrador Biofeedback (Meditación Autoalusiva)', icon: '🧠' },
          { id: 'dinamicas', label: '🎯 4 Dinámicas de Alto Rendimiento & Neuromarketing', icon: '🚀' },
          { id: 'bitacora', label: '📋 Bitácora de Evidencias & Insignias', icon: '🛡️' },
          { id: 'academico', label: '🔬 Fundamento Académico (Grinberg & UNAM)', icon: '📖' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.65rem 1.25rem',
              borderRadius: '12px',
              border: activeTab === tab.id ? '2px solid #38bdf8' : '1px solid rgba(255,255,255,0.1)',
              background: activeTab === tab.id ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.03)',
              color: activeTab === tab.id ? '#ffffff' : '#94a3b8',
              fontWeight: activeTab === tab.id ? 800 : 500,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* ============================================================ */}
      {/* PESTAÑA 1: CALIBRADOR BIOFEEDBACK (MEDITACIÓN AUTOALUSIVA) */}
      {/* ============================================================ */}
      {activeTab === 'calibrador' && (
        <section className="glass-panel p-8 animate-fade-in" style={{ borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.3)', background: 'linear-gradient(145deg, rgba(15,23,42,0.85) 0%, rgba(2,6,23,0.95) 100%)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                PROTOCOLO ELECTROFISIOLÓGICO • INPEC 1987
              </span>
              <h2 style={{ fontSize: '1.8rem', margin: '0.3rem 0', color: '#f8fafc' }}>
                Entrenador de Sincronía Interhemisférica
              </h2>
              <p className="text-muted" style={{ margin: 0, fontSize: '0.92rem', maxWidth: '650px' }}>
                La <strong>Meditación Autoalusiva</strong> sintetiza los micropotenciales dendríticos de los 12 mil millones de neuronas en un patrón coherente, elevando la sintergia del cerebro para disolver el ruido antes de juntas de comité y decisiones críticas.
              </p>
            </div>

            {/* Selector de Duración */}
            <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.35rem', borderRadius: '10px' }}>
              {[
                { sec: 120, label: '2 min (Reset Rápido)' },
                { sec: 180, label: '3 min (Estándar)' },
                { sec: 300, label: '5 min (Inmersión Alta Sintergia)' }
              ].map(d => (
                <button
                  key={d.sec}
                  disabled={isRunning}
                  onClick={() => handleSelectDuration(d.sec)}
                  style={{
                    padding: '0.4rem 0.75rem',
                    borderRadius: '8px',
                    border: selectedDuration === d.sec ? '1px solid #ffb703' : 'none',
                    background: selectedDuration === d.sec ? 'rgba(255, 183, 3, 0.2)' : 'transparent',
                    color: selectedDuration === d.sec ? '#ffb703' : '#94a3b8',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: isRunning ? 'not-allowed' : 'pointer'
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* MONITOR HUD INTERACTIVO DE ONDAS & COHERENCIA */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            
            {/* Medidor de Coherencia */}
            <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(56, 189, 248, 0.2)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                Coherencia Interhemisférica (EEG)
              </span>
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: coherenciaScore > 85 ? '#34d399' : '#38bdf8', margin: '0.5rem 0' }}>
                {isRunning ? coherenciaScore : (sesionFinalizada ? coherenciaScore : '--')}%
              </div>
              <div className="progress-bar-container" style={{ height: '8px', background: 'rgba(255,255,255,0.1)' }}>
                <div 
                  className="progress-bar-fill" 
                  style={{ 
                    width: `${isRunning ? coherenciaScore : (sesionFinalizada ? coherenciaScore : 20)}%`,
                    background: coherenciaScore > 85 ? '#10b981' : '#38bdf8',
                    transition: 'width 0.8s ease'
                  }}
                ></div>
              </div>
              <p style={{ margin: '0.75rem 0 0', fontSize: '0.8rem', color: '#cbd5e1' }}>
                {coherenciaScore > 85 ? 'Sincronía Transhemisférica Óptima' : 'Microdistorsiones en Proceso de Desaceleración'}
              </p>
            </div>

            {/* Medidor de Espectro de Ondas */}
            <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.2)', textAlign: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                Patrón de Banda Sintérgica
              </span>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#c4b5fd', margin: '1rem 0' }}>
                {isRunning ? frecuenciaOnda : 'Reposo Cognitivo'}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.4' }}>
                {isRunning ? autoalusionFase : 'Inicia el temporizador para calibrar el Campo Neuronal con la Lattice.'}
              </div>
            </div>

            {/* Cronómetro Central */}
            <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255, 183, 3, 0.2)', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>
                Tiempo de Inmersión Autoalusiva
              </span>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#ffb703', fontFamily: 'monospace', margin: '0.5rem 0' }}>
                {formatearTiempo(timerSeconds)}
              </div>
              
              {!isRunning && !sesionFinalizada && (
                <button
                  onClick={() => setIsRunning(true)}
                  className="btn-primary"
                  style={{ width: '100%', maxWidth: '200px', padding: '0.65rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 800 }}
                >
                  ▶ Iniciar Calibración
                </button>
              )}

              {isRunning && (
                <button
                  onClick={() => setIsRunning(false)}
                  className="btn-secondary"
                  style={{ width: '100%', maxWidth: '200px', padding: '0.65rem', borderRadius: '9999px', fontSize: '0.9rem', color: '#f87171', borderColor: '#f87171' }}
                >
                  ⏸ Pausar Sesión
                </button>
              )}

              {sesionFinalizada && (
                <button
                  onClick={reclamarRecompensaSesion}
                  className="btn-primary"
                  style={{ width: '100%', maxWidth: '220px', padding: '0.65rem', borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 800, background: '#10b981', borderColor: '#10b981' }}
                >
                  🏆 Validar & Reclamar +250 XP
                </button>
              )}
            </div>

          </div>

          {/* GUÍA PASO A PASO DE AUTOALUSIÓN */}
          <div style={{ background: 'rgba(15,23,42,0.6)', borderRadius: '14px', padding: '1.25rem', borderLeft: '4px solid #38bdf8' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#38bdf8', fontSize: '1rem' }}>
              Instrucciones de la Meditación Autoalusiva (Dr. Jacobo Grinberg, 1987):
            </h4>
            <ol style={{ margin: 0, paddingLeft: '1.2rem', color: '#cbd5e1', fontSize: '0.88rem', lineHeight: '1.6' }}>
              <li><strong>Cierra los ojos y atiende tu postura:</strong> Inhala profundamente por la nariz y exhala largo por la boca. No luches con los pensamientos.</li>
              <li><strong>Observa el pensamiento como una microdistorsión:</strong> Cada preocupación por metas o comités es un cambio electroquímico transitorio en la lattice cerebral. Solo obsérvalo sin juzgarlo ni continuarlo.</li>
              <li><strong>Expansión perceptiva simultánea:</strong> Percibe al mismo tiempo los sonidos ambientales, la temperatura corporal y el espacio físico. Cuando todos los estímulos se integran a la vez, el campo neuronal alcanza alta sintergia.</li>
              <li><strong>La Autoalusión:</strong> Pregúntate en silencio: <em>"¿Quién está observando todo esto?"</em>. En ese instante, el observador colapsa en la Lattice y se restaura la coherencia ejecutiva.</li>
            </ol>
          </div>

        </section>
      )}

      {/* ============================================================ */}
      {/* PESTAÑA 2: 4 DINÁMICAS DE ALTO RENDIMIENTO & NEUROMARKETING */}
      {/* ============================================================ */}
      {activeTab === 'dinamicas' && (
        <section className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          
          {/* DINÁMICA 1: HIPERCAMPO EN COMITÉS */}
          <article className="glass-panel p-6" style={{ borderRadius: '16px', border: '1px solid rgba(56, 189, 248, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🌐</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', padding: '2px 8px', borderRadius: '9999px' }}>
                  DINÁMICA 1 • COMITÉS
                </span>
              </div>
              <h3 style={{ margin: '0 0 0.5rem', color: '#ffffff', fontSize: '1.2rem' }}>
                Sintonización de Hipercampo en Comités
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                <strong>Base Científica:</strong> El Hipercampo es la lattice que incorpora todos los campos neuronales del equipo. El desborde emocional de un solo gerente contamina la coherencia decisional de toda la mesa.
              </p>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #ef4444', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '0.75rem', fontSize: '0.8rem', color: '#fca5a5' }}>
                <strong>Síntoma de Baja Sintergia:</strong> Reuniones donde se habla encima del otro, egos a la defensiva y reuniones interminables sin acuerdos verificables.
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '3px solid #10b981', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.8rem', color: '#6ee7b7' }}>
                <strong>Llamado a la Acción (CTA):</strong> Aplica la "Pausa Táctica de Interrupción de 90 segundos" al inicio del comité. Cada participante respira en 5-5 y declara en una sola frase su objetivo auditable del día.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                <strong>Evidencia Requerida:</strong> Minuta de acuerdos con responsable único y cero quejas abstractas.
              </div>
              <button 
                onClick={() => { setDinamicaSeleccionada('Hipercampo en Comités'); setActiveTab('bitacora'); }}
                className="btn-secondary" 
                style={{ width: '100%', fontSize: '0.82rem' }}
              >
                Registrar Evidencia de esta Dinámica (+300 XP)
              </button>
            </div>
          </article>

          {/* DINÁMICA 2: NEUROMARKETING & FACTOR DE DIRECCIONALIDAD */}
          <article className="glass-panel p-6" style={{ borderRadius: '16px', border: '1px solid rgba(255, 183, 3, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>🎯</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'rgba(255, 183, 3, 0.2)', color: '#ffb703', padding: '2px 8px', borderRadius: '9999px' }}>
                  DINÁMICA 2 • NEUROMARKETING
                </span>
              </div>
              <h3 style={{ margin: '0 0 0.5rem', color: '#ffffff', fontSize: '1.2rem' }}>
                El Factor de Direccionalidad en Propuestas de Valor
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                <strong>Base Científica:</strong> El Factor de Direccionalidad hace emerger la percepción consciente mediante un procesador central. El cerebro humano descarta el 99% de la información por sobrecarga de baja sintergia.
              </p>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #ef4444', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '0.75rem', fontSize: '0.8rem', color: '#fca5a5' }}>
                <strong>Síntoma de Baja Sintergia:</strong> Pitches o propuestas comerciales atiborradas de tecnicismos, viñetas interminables y ambigüedad que provocan parálisis en el comprador.
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '3px solid #10b981', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.8rem', color: '#6ee7b7' }}>
                <strong>Llamado a la Acción (CTA):</strong> Aplica la "Ecuación de Alta Densidad Informacional": Reduce cualquier propuesta a 1 dolor crítico, 1 solución innegociable y 1 métrica de tiempo (&lt; 24h).
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                <strong>Evidencia Requerida:</strong> Comparativa antes/después de un documento o pitch comercial simplificado en un 40%.
              </div>
              <button 
                onClick={() => { setDinamicaSeleccionada('Factor de Direccionalidad en Neuromarketing'); setActiveTab('bitacora'); }}
                className="btn-secondary" 
                style={{ width: '100%', fontSize: '0.82rem' }}
              >
                Registrar Evidencia de esta Dinámica (+300 XP)
              </button>
            </div>
          </article>

          {/* DINÁMICA 3: POTENCIAL TRANSFERIDO EN NEGOCIACIONES */}
          <article className="glass-panel p-6" style={{ borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>⚡</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '2px 8px', borderRadius: '9999px' }}>
                  DINÁMICA 3 • NEGOCIACIÓN TÁCTICA
                </span>
              </div>
              <h3 style={{ margin: '0 0 0.5rem', color: '#ffffff', fontSize: '1.2rem' }}>
                Potencial Transferido en Negociaciones de Tensión
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                <strong>Base Científica:</strong> En los experimentos de Grinberg, dos cerebros sintonizados previamente mostraron potenciales evocados simultáneos sin contacto físico directo (transmisión electrofisiológica no local).
              </p>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #ef4444', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '0.75rem', fontSize: '0.8rem', color: '#fca5a5' }}>
                <strong>Síntoma de Baja Sintergia:</strong> Entrar a una negociación con taquicardia y enojo no expresado; el interlocutor detecta la amenaza subcortical y endurece su postura.
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '3px solid #10b981', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.8rem', color: '#6ee7b7' }}>
                <strong>Llamado a la Acción (CTA):</strong> Antes de responder a una objeción agresiva, aplica 3 segundos de silencio absoluto y desactiva tu amígdala con empatía táctica (Chris Voss): "Parece que sientes que las condiciones no te garantizan el cumplimiento".
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                <strong>Evidencia Requerida:</strong> Registro de un conflicto desactivado mediante sintonización no verbal y calibración somática.
              </div>
              <button 
                onClick={() => { setDinamicaSeleccionada('Potencial Transferido en Negociaciones'); setActiveTab('bitacora'); }}
                className="btn-secondary" 
                style={{ width: '100%', fontSize: '0.82rem' }}
              >
                Registrar Evidencia de esta Dinámica (+300 XP)
              </button>
            </div>
          </article>

          {/* DINÁMICA 4: CONCIENCIA DE UNIDAD & CAUSA RADICAL */}
          <article className="glass-panel p-6" style={{ borderRadius: '16px', border: '1px solid rgba(139, 92, 246, 0.3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.8rem' }}>👑</span>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'rgba(139, 92, 246, 0.2)', color: '#c4b5fd', padding: '2px 8px', borderRadius: '9999px' }}>
                  DINÁMICA 4 • LIDERAZGO
                </span>
              </div>
              <h3 style={{ margin: '0 0 0.5rem', color: '#ffffff', fontSize: '1.2rem' }}>
                Conciencia de Unidad & Operación en Causa Radical
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                <strong>Base Científica:</strong> La Conciencia de Unidad ocurre cuando el campo neuronal mimetiza la simetría absoluta de la lattice; desaparece la defensa del ego y el observador puede incidir en las causas primarias.
              </p>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '3px solid #ef4444', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '0.75rem', fontSize: '0.8rem', color: '#fca5a5' }}>
                <strong>Síntoma de Baja Sintergia:</strong> Silos entre departamentos, defender el propio feudo corporativo y culpar a la otra área del fracaso global.
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', borderLeft: '3px solid #10b981', padding: '0.5rem 0.75rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.8rem', color: '#6ee7b7' }}>
                <strong>Llamado a la Acción (CTA):</strong> Renuncia a defender tu departamento en la próxima junta interfuncional. Ofrece resolver el cuello de botella del área colindante asumiendo Causa total del resultado compartido.
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                <strong>Evidencia Requerida:</strong> Acta de acuerdo interdepartamental firmado resolviendo una fricción histórica.
              </div>
              <button 
                onClick={() => { setDinamicaSeleccionada('Conciencia de Unidad & Causa Radical'); setActiveTab('bitacora'); }}
                className="btn-secondary" 
                style={{ width: '100%', fontSize: '0.82rem' }}
              >
                Registrar Evidencia de esta Dinámica (+300 XP)
              </button>
            </div>
          </article>

        </section>
      )}

      {/* ============================================================ */}
      {/* PESTAÑA 3: BITÁCORA DE EVIDENCIAS & RECOMPENSAS */}
      {/* ============================================================ */}
      {activeTab === 'bitacora' && (
        <section className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Formulario para registrar nueva evidencia */}
          <div className="glass-panel p-6" style={{ borderRadius: '16px', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#38bdf8', fontSize: '1.3rem' }}>
              Subir Evidencia de Aplicación Real
            </h3>
            <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>
              Para que el aprendizaje sea inmutable, registra qué dinámica ejecutaste, en qué escenario empresarial y cuál fue la evidencia objetiva obtenida.
            </p>

            <form onSubmit={handleGuardarEvidencia}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                  Seleccionar Dinámica Sintérgica:
                </label>
                <select 
                  value={dinamicaSeleccionada}
                  onChange={e => setDinamicaSeleccionada(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.8rem',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.85rem'
                  }}
                >
                  <option value="Hipercampo en Comités">Dinámica 1: Sintonización de Hipercampo en Comités</option>
                  <option value="Factor de Direccionalidad en Neuromarketing">Dinámica 2: Factor de Direccionalidad en Neuromarketing</option>
                  <option value="Potencial Transferido en Negociaciones">Dinámica 3: Potencial Transferido en Negociaciones Tácticas</option>
                  <option value="Conciencia de Unidad & Causa Radical">Dinámica 4: Conciencia de Unidad & Liderazgo en Causa Radical</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '0.35rem' }}>
                  Detalle de la Evidencia (Resultados Cuantificables):
                </label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Ej: Apliqué el protocolo de silencio de 3 segundos en la negociación con el proveedor regional. Logramos acordar el plazo de entrega a 48h sin tensión..."
                  value={textoEvidencia}
                  onChange={e => setTextoEvidencia(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button 
                type="submit"
                className="btn-primary"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '10px', fontWeight: 800 }}
              >
                💾 Guardar Evidencia y Acreditar +300 XP
              </button>
            </form>

            {/* Medallero de Insignias */}
            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
              <h4 style={{ margin: '0 0 0.75rem 0', color: '#ffb703', fontSize: '0.95rem' }}>
                Insignias Sintérgicas Desbloqueables
              </h4>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '10px',
                  background: sintergiaData.insignias.includes('lattice_iniciado') ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${sintergiaData.insignias.includes('lattice_iniciado') ? '#38bdf8' : 'rgba(255,255,255,0.1)'}`,
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>🌌</span>
                  <span style={{ color: sintergiaData.insignias.includes('lattice_iniciado') ? '#ffffff' : '#64748b' }}>
                    Arquitecto de la Lattice
                  </span>
                </div>

                <div style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '10px',
                  background: sintergiaData.insignias.includes('coherencia_eeg') ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${sintergiaData.insignias.includes('coherencia_eeg') ? '#10b981' : 'rgba(255,255,255,0.1)'}`,
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>⚡</span>
                  <span style={{ color: sintergiaData.insignias.includes('coherencia_eeg') ? '#ffffff' : '#64748b' }}>
                    Coherencia EEG Activa
                  </span>
                </div>

                <div style={{
                  padding: '0.5rem 0.75rem',
                  borderRadius: '10px',
                  background: sintergiaData.insignias.includes('lider_sintergico') ? 'rgba(255, 183, 3, 0.2)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${sintergiaData.insignias.includes('lider_sintergico') ? '#ffb703' : 'rgba(255,255,255,0.1)'}`,
                  fontSize: '0.78rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>👑</span>
                  <span style={{ color: sintergiaData.insignias.includes('lider_sintergico') ? '#ffffff' : '#64748b' }}>
                    Líder Sintérgico de Alto Rendimiento
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Historial de Evidencias */}
          <div className="glass-panel p-6" style={{ borderRadius: '16px' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#f8fafc', fontSize: '1.3rem' }}>
              Historial de Evidencias Acreditadas ({sintergiaData.evidenciasRegistradas.length})
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '500px', overflowY: 'auto' }}>
              {sintergiaData.evidenciasRegistradas.map(ev => (
                <div key={ev.id} style={{
                  background: 'rgba(15,23,42,0.6)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '1rem',
                  borderRadius: '12px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8' }}>
                      {ev.dinamica}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                      {ev.fecha} • +{ev.xpGanada} XP
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                    "{ev.nota}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* ============================================================ */}
      {/* PESTAÑA 4: FUNDAMENTO ACADÉMICO & TEORÍA SINTÉRGICA */}
      {/* ============================================================ */}
      {activeTab === 'academico' && (
        <section className="glass-panel p-8 animate-fade-in" style={{ borderRadius: '20px' }}>
          
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#a78bfa', fontWeight: 800, textTransform: 'uppercase' }}>
              DOCUMENTO OFICIAL DE INVESTIGACIÓN PSICOFISIOLÓGICA
            </span>
            <h2 style={{ fontSize: '1.8rem', color: '#ffffff', margin: '0.3rem 0' }}>
              Teoría Sintérgica del Dr. Jacobo Grinberg-Zylberbaum (UNAM, INPEC)
            </h2>
            <p className="text-muted" style={{ margin: 0, fontSize: '0.92rem' }}>
              Compendio académico basado en más de 50 artículos científicos, 54 libros y 15 años de investigación de laboratorio en psicofisiología y neurociencias.
            </p>
          </div>

          {/* VIDEO EXPLICATIVO OFICIAL: ENFOQUE SINTÉRGICO */}
          <div style={{ marginBottom: '2rem', padding: '1.25rem', borderRadius: '16px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span style={{ fontSize: '0.78rem', color: '#38bdf8', fontWeight: 800, textTransform: 'uppercase' }}>
                  Videocápsula de Rigor • Teoría Sintérgica & Coherencia Interhemisférica
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)' }}>
                ⏱️ 1:42 • Dr. Jacobo Grinberg
              </span>
            </div>
            <div style={{ position: 'relative', width: '100%', maxHeight: '420px', borderRadius: '12px', overflow: 'hidden', background: '#000', display: 'flex', justifyContent: 'center' }}>
              <video 
                controls 
                preload="metadata" 
                style={{ width: '100%', maxHeight: '420px', objectFit: 'contain' }}
              >
                <source src="/videos/enfoque_sintergico.mp4" type="video/mp4" />
                Tu navegador no soporta video HTML5.
              </video>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #38bdf8' }}>
              <h4 style={{ margin: '0 0 0.5rem', color: '#38bdf8' }}>1. La Lattice</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                Estructura fundamental del espacio-tiempo descrita como una matriz energética hipercompleja de absoluta coherencia y total simetría. Cada punto contiene la información holográfica total del universo.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #a78bfa' }}>
              <h4 style={{ margin: '0 0 0.5rem', color: '#a78bfa' }}>2. El Campo Neuronal</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                Macrodistorsión hipercompleja de la lattice resultante de los potenciales de acción y micropotenciales dendríticos de las 12 mil millones de neuronas activas. La percepción surge de la interacción congruente entre ambos.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #10b981' }}>
              <h4 style={{ margin: '0 0 0.5rem', color: '#10b981' }}>3. Sintergia (Síntesis + Energía)</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                Parámetro físico que integra coherencia, densidad informacional y frecuencia. A mayor sintergia cerebral, mayor capacidad de procesamiento y menor distorsión o sesgo en la toma de decisiones.
              </p>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.25rem', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}>
              <h4 style={{ margin: '0 0 0.5rem', color: '#f59e0b' }}>4. El Hipercampo & Potencial Transferido</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                La lattice incorpora todos los campos neuronales interconectados. Los estudios con EEG en cámaras de Faraday demostraron transferencia electrofisiológica no local entre sujetos en alta coherencia previa.
              </p>
            </div>

          </div>

          <div style={{ background: 'rgba(15,23,42,0.7)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h4 style={{ margin: '0 0 0.5rem', color: '#f8fafc', fontSize: '0.95rem' }}>
              📚 Fuentes Académicas Primarias Verificables:
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#94a3b8', fontSize: '0.82rem', lineHeight: '1.6' }}>
              <li>Grinberg-Zylberbaum, J. (1987). <em>La Teoría Sintérgica</em>. Instituto Nacional para el Estudio de la Conciencia (INPEC), México.</li>
              <li>Grinberg-Zylberbaum, J., & Ramos, J. (1987). "Patterns of interhemispheric correlation during human communication". <em>International Journal of Neuroscience</em>.</li>
              <li>Laboratorio de Psicofisiología, Facultad de Psicología & Ciencias, Universidad Nacional Autónoma de México (UNAM).</li>
            </ul>
          </div>

        </section>
      )}

    </div>
  );
}
