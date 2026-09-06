/**
 * sintergiaAudio.js - Motor Neuroacústico de Sincronía Interhemisférica
 * SISTEMA INTERRUPCIÓN • LABORATORIO SINTÉRGICO (Protocolo INPEC 1987)
 * 
 * Genera síntesis sonora binaural en tiempo real para estimulación cerebral electrofisiológica:
 * 1. Pulsos Binaurales Estéreo (12 Hz Alfa Rápido -> 10 Hz Alfa Puro -> 7.5 Hz Theta Sincronizado).
 * 2. Cuencos Tibetanos y Campanas Zen modelados con armónicos no enteros y decaimiento exponencial.
 * 3. Drone Armónico Lattice a 432 Hz con modulación LFO de respiración coherente (0.1 Hz / 6 rpm).
 * 4. Micro-campanas de transición de fase y tañido de finalización de sesión.
 */

class SintergiaAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.ambientGain = null;
    this.binauralGain = null;
    
    // Nodos activos
    this.activeNodes = [];
    this.leftOsc = null;
    this.rightOsc = null;
    this.lfoOsc = null;
    
    // Estado del motor
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.7; // 0.0 a 1.0
    this.currentPreset = 'binaural'; // 'binaural' | 'cuencos' | 'respiracion'
    this.currentPhase = 1; // 1 | 2 | 3
    
    // Frecuencias base
    this.carrierFreq = 144.0; // Hz (Armónico de afinación áurea 432 / 3)
    this.phaseBeatFreqs = {
      1: 12.0,  // Fase 1: Alfa Rápido (12 Hz) - Desaceleración Neocortical
      2: 10.0,  // Fase 2: Alfa Puro (10 Hz) - Coherencia Interhemisférica
      3: 7.5    // Fase 3: Theta Sincronizado (7.5 Hz) - Alta Sintergia Directiva
    };
  }

  /**
   * Obtiene o inicializa el AudioContext del navegador
   */
  getContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  /**
   * Inicia la sesión de calibración sonora
   */
  startSession({ duration = 180, volume = 0.7, preset = 'binaural', isMuted = false } = {}) {
    const ctx = this.getContext();
    if (!ctx) return;

    this.stopSession(); // Limpiar sesión previa si existía

    this.volume = volume;
    this.currentPreset = preset;
    this.isMuted = isMuted;
    this.currentPhase = 1;
    this.isPlaying = true;

    // Configurar Master Gain
    this.masterGain = ctx.createGain();
    const effectiveVol = this.isMuted ? 0.0001 : this.volume;
    this.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(effectiveVol, ctx.currentTime + 1.2);
    this.masterGain.connect(ctx.destination);

    // 1. Tocar tañido de cuenco tibetano al iniciar
    this.playSingingBowl(216, 4.0, 0.45);

    // 2. Iniciar generador continuo según preset
    this.startContinuousAudio();
  }

  /**
   * Inicia los osciladores continuos (Binaural + Lattice Drone)
   */
  startContinuousAudio() {
    const ctx = this.getContext();
    if (!ctx || !this.masterGain) return;

    const now = ctx.currentTime;

    // Sub-ganancia para ambiente
    this.ambientGain = ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.0001, now);
    this.ambientGain.gain.linearRampToValueAtTime(0.25, now + 2.0);
    this.ambientGain.connect(this.masterGain);

    // Sub-ganancia para binaural
    this.binauralGain = ctx.createGain();
    this.binauralGain.gain.setValueAtTime(0.0001, now);
    this.binauralGain.gain.linearRampToValueAtTime(0.20, now + 2.0);
    this.binauralGain.connect(this.masterGain);

    if (this.currentPreset === 'binaural' || this.currentPreset === 'cuencos') {
      this.setupBinauralBeats(now);
    }

    this.setupLatticeDrone(now);
  }

  /**
   * Configura generador de ondas binaurales estéreo con paneo exacto
   */
  setupBinauralBeats(startTime) {
    const ctx = this.getContext();
    if (!ctx) return;

    const base = this.carrierFreq; // 144 Hz
    const beat = this.phaseBeatFreqs[this.currentPhase] || 12.0;

    // Canal Izquierdo (Oído Izquierdo)
    this.leftOsc = ctx.createOscillator();
    this.leftOsc.type = 'sine';
    this.leftOsc.frequency.setValueAtTime(base, startTime);

    const leftGain = ctx.createGain();
    leftGain.gain.setValueAtTime(0.22, startTime);

    if (ctx.createStereoPanner) {
      const leftPanner = ctx.createStereoPanner();
      leftPanner.pan.setValueAtTime(-0.85, startTime);
      this.leftOsc.connect(leftGain);
      leftGain.connect(leftPanner);
      leftPanner.connect(this.binauralGain);
      this.activeNodes.push(leftPanner);
    } else {
      this.leftOsc.connect(leftGain);
      leftGain.connect(this.binauralGain);
    }

    // Canal Derecho (Oído Derecho: base + beat)
    this.rightOsc = ctx.createOscillator();
    this.rightOsc.type = 'sine';
    this.rightOsc.frequency.setValueAtTime(base + beat, startTime);

    const rightGain = ctx.createGain();
    rightGain.gain.setValueAtTime(0.22, startTime);

    if (ctx.createStereoPanner) {
      const rightPanner = ctx.createStereoPanner();
      rightPanner.pan.setValueAtTime(0.85, startTime);
      this.rightOsc.connect(rightGain);
      rightGain.connect(rightPanner);
      rightPanner.connect(this.binauralGain);
      this.activeNodes.push(rightPanner);
    } else {
      this.rightOsc.connect(rightGain);
      rightGain.connect(this.binauralGain);
    }

    this.leftOsc.start(startTime);
    this.rightOsc.start(startTime);

    this.activeNodes.push(this.leftOsc, this.rightOsc, leftGain, rightGain);
  }

  /**
   * Configura el Drone armónico de la Lattice con filtro respiratorio
   */
  setupLatticeDrone(startTime) {
    const ctx = this.getContext();
    if (!ctx) return;

    // Filtro paso-bajo cálido
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(260, startTime);
    filter.Q.setValueAtTime(2.0, startTime);
    filter.connect(this.ambientGain);

    // LFO Respiración Coherente (0.1 Hz = 6 respiraciones por minuto)
    this.lfoOsc = ctx.createOscillator();
    this.lfoOsc.type = 'sine';
    this.lfoOsc.frequency.setValueAtTime(0.1, startTime);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(110, startTime); // Modula frecuencia del filtro entre 150 y 370 Hz
    this.lfoOsc.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    this.lfoOsc.start(startTime);
    this.activeNodes.push(this.lfoOsc, lfoGain, filter);

    // Acorde armónico de alta sintergia: 72 Hz (Sub), 144 Hz (Raíz), 216 Hz (Quinta)
    const droneFreqs = [72.0, 144.0, 216.0];
    droneFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.08 / (idx + 1), startTime);

      osc.connect(g);
      g.connect(filter);
      osc.start(startTime);

      this.activeNodes.push(osc, g);
    });
  }

  /**
   * Actualiza el progreso de la sesión y modula la fase binaural
   */
  updateProgress(progreso, phaseNumber) {
    if (!this.isPlaying || !this.ctx) return;

    if (phaseNumber !== this.currentPhase) {
      const oldPhase = this.currentPhase;
      this.currentPhase = phaseNumber;

      // Toque sutil de campana al cambiar de fase
      if (oldPhase < phaseNumber) {
        const chimeFreq = phaseNumber === 2 ? 528 : 659.25;
        this.playPhaseChime(chimeFreq);
      }

      // Modulación suave de la frecuencia binaural en 3 segundos
      const newBeat = this.phaseBeatFreqs[phaseNumber] || 10.0;
      if (this.rightOsc) {
        const now = this.ctx.currentTime;
        this.rightOsc.frequency.cancelScheduledValues(now);
        this.rightOsc.frequency.setValueAtTime(this.rightOsc.frequency.value, now);
        this.rightOsc.frequency.linearRampToValueAtTime(this.carrierFreq + newBeat, now + 3.0);
      }
    }
  }

  /**
   * Toca un cuenco tibetano modelado físicamente
   */
  playSingingBowl(baseFreq = 216, decay = 4.5, volume = 0.4) {
    try {
      const ctx = this.getContext();
      if (!ctx || this.isMuted) return;

      const now = ctx.currentTime;
      const partials = [
        { mult: 1.0, gain: 0.35, dec: decay },
        { mult: 2.76, gain: 0.16, dec: decay * 0.7 },
        { mult: 4.75, gain: 0.09, dec: decay * 0.5 },
        { mult: 5.40, gain: 0.05, dec: decay * 0.4 }
      ];

      partials.forEach(p => {
        // Dos osciladores ligeramente desafinados para generar warble natural
        [-0.4, 0.4].forEach(detune => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseFreq * p.mult + detune, now);

          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.exponentialRampToValueAtTime(volume * p.gain * 0.5, now + 0.06);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + p.dec);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          osc.stop(now + p.dec + 0.1);
        });
      });
    } catch (e) {
      console.warn('Singing bowl synthesis skipped:', e);
    }
  }

  /**
   * Micro-campana zen para avisar el cambio de fase
   */
  playPhaseChime(freq = 528) {
    try {
      const ctx = this.getContext();
      if (!ctx || this.isMuted) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 2.5);
    } catch (e) {
      console.warn('Phase chime skipped:', e);
    }
  }

  /**
   * Pausa la sesión con desvanecimiento suave (fade out)
   */
  pauseSession() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.4);

    setTimeout(() => {
      this.cleanupNodes();
      this.isPlaying = false;
    }, 450);
  }

  /**
   * Reanuda la sesión con desvanecimiento entrante (fade in)
   */
  resumeSession() {
    const ctx = this.getContext();
    if (!ctx) return;

    this.isPlaying = true;
    this.masterGain = ctx.createGain();
    const effectiveVol = this.isMuted ? 0.0001 : this.volume;
    this.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(effectiveVol, ctx.currentTime + 0.8);
    this.masterGain.connect(ctx.destination);

    this.startContinuousAudio();
  }

  /**
   * Culminación triunfal de la sesión: Tañido triple de cuarzo y finalización
   */
  finishSession() {
    this.pauseSession();

    setTimeout(() => {
      // Acorde tríada de cuarzo celestial (Do - Mi - Sol en afinación 432 Hz)
      const bowls = [216, 270, 324];
      bowls.forEach((f, i) => {
        setTimeout(() => {
          this.playSingingBowl(f, 5.5, 0.45);
        }, i * 280);
      });
    }, 300);
  }

  /**
   * Detiene por completo y resetea todos los nodos
   */
  stopSession() {
    this.isPlaying = false;
    this.cleanupNodes();
  }

  /**
   * Limpia los nodos de audio activos
   */
  cleanupNodes() {
    this.activeNodes.forEach(node => {
      try {
        if (typeof node.stop === 'function') node.stop();
        if (typeof node.disconnect === 'function') node.disconnect();
      } catch (e) {}
    });
    this.activeNodes = [];
    this.leftOsc = null;
    this.rightOsc = null;
    this.lfoOsc = null;
    this.ambientGain = null;
    this.binauralGain = null;
    this.masterGain = null;
  }

  /**
   * Ajusta el volumen maestro en tiempo real
   */
  setVolume(newVol) {
    this.volume = Math.max(0, Math.min(1, newVol));
    if (this.masterGain && this.ctx && !this.isMuted) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(this.volume, now + 0.1);
    }
  }

  /**
   * Alterna silencio / mute
   */
  setMuted(muteState) {
    this.isMuted = muteState;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      const targetVol = this.isMuted ? 0.0001 : this.volume;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(targetVol, now + 0.15);
    }
  }

  /**
   * Cambia el preset sonoro
   */
  setPreset(preset) {
    this.currentPreset = preset;
    if (this.isPlaying) {
      this.cleanupNodes();
      this.startContinuousAudio();
    }
  }
}

export const sintergiaAudio = new SintergiaAudioEngine();
