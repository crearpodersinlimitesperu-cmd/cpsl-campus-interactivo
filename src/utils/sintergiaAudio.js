/**
 * sintergiaAudio.js - Motor Neuroacústico de Sincronía Interhemisférica
 * SISTEMA INTERRUPCIÓN • LABORATORIO SINTÉRGICO (Protocolo INPEC 1987)
 * 
 * Diseñado con Web Audio API para alta audibilidad y relajación profunda:
 * - Portadora áurea 432 Hz y armónicos audibles en cualquier altavoz (laptops/móviles/auriculares).
 * - Pulsos binaurales estéreo con desplazamiento de fase (12 Hz Alfa -> 10 Hz Alfa -> 7.5 Hz Theta).
 * - Cuencos tibetanos y campana zen de cuarzo modelados con física acústica.
 * - Respiración coherente 0.1 Hz (6 respiraciones/min) guiada con sintetizador analógico cálido.
 */

class SintergiaAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.activeNodes = [];
    this.leftOsc = null;
    this.rightOsc = null;
    this.ambientGain = null;
    this.binauralGain = null;
    this.lfoInterval = null;
    this.bowlInterval = null;

    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.75;
    this.currentPreset = 'binaural'; // 'binaural' | 'cuencos' | 'respiracion'
    this.currentPhase = 1;

    // Frecuencias base en afinación áurea (432 Hz)
    this.carrierFreq = 432.0; // Hz (Sweet spot de audición humana y laptops)
    this.subFreq = 216.0;     // Hz (Cuerpo cálido)
    this.airFreq = 864.0;     // Hz (Brillo sutil)
    
    this.phaseBeatFreqs = {
      1: 12.0,  // Fase 1: Alfa Rápido (12 Hz) - Desaceleración Neocortical
      2: 10.0,  // Fase 2: Alfa Puro (10 Hz) - Coherencia Interhemisférica
      3: 7.5    // Fase 3: Theta Sincronizado (7.5 Hz) - Alta Sintergia Directiva
    };
  }

  /**
   * Obtiene y asegura que el AudioContext esté inicializado y activo (resumed)
   */
  async ensureContext() {
    try {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }
      return this.ctx;
    } catch (e) {
      console.warn('Error inicializando AudioContext:', e);
      return null;
    }
  }

  /**
   * Inicia o actualiza la reproducción de audio
   */
  async startSession({ volume = 0.75, preset = 'binaural', isMuted = false } = {}) {
    const ctx = await this.ensureContext();
    if (!ctx) return;

    this.stopSession(); // Detener cualquier sonido previo

    this.volume = volume;
    this.currentPreset = preset;
    this.isMuted = isMuted;
    this.isPlaying = true;

    // Master Gain
    this.masterGain = ctx.createGain();
    const targetVol = this.isMuted ? 0.0001 : this.volume;
    this.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(targetVol, ctx.currentTime + 0.3);
    this.masterGain.connect(ctx.destination);

    // Tocar campanazo / cuenco tibetano inicial para feedback auditivo inmediato
    this.playSingingBowl(432, 3.5, 0.6);

    // Iniciar generador continuo según preset
    this.startPresetAudio();
    console.log('[SintergiaAudio] Sesión iniciada:', { preset: this.currentPreset, volume: this.volume });
  }

  startPresetAudio() {
    if (!this.ctx || !this.masterGain) return;

    if (this.currentPreset === 'binaural') {
      this.startBinauralPreset();
    } else if (this.currentPreset === 'cuencos') {
      this.startCuencosPreset();
    } else if (this.currentPreset === 'respiracion') {
      this.startRespiracionPreset();
    }
  }

  /**
   * PRESET 1: Sincronía Binaural Áurea (432 Hz)
   */
  startBinauralPreset() {
    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Sub-ganancia binaural
    this.binauralGain = ctx.createGain();
    this.binauralGain.gain.setValueAtTime(0.40, now);
    this.binauralGain.connect(this.masterGain);

    const base = this.carrierFreq; // 432 Hz
    const beat = this.phaseBeatFreqs[this.currentPhase] || 12.0;

    // Oído Izquierdo: 432 Hz
    this.leftOsc = ctx.createOscillator();
    this.leftOsc.type = 'sine';
    this.leftOsc.frequency.setValueAtTime(base, now);

    const leftGain = ctx.createGain();
    leftGain.gain.setValueAtTime(0.5, now);

    if (ctx.createStereoPanner) {
      const leftPan = ctx.createStereoPanner();
      leftPan.pan.setValueAtTime(-0.8, now);
      this.leftOsc.connect(leftGain);
      leftGain.connect(leftPan);
      leftPan.connect(this.binauralGain);
      this.activeNodes.push(leftPan);
    } else {
      this.leftOsc.connect(leftGain);
      leftGain.connect(this.binauralGain);
    }

    // Oído Derecho: 432 + beat
    this.rightOsc = ctx.createOscillator();
    this.rightOsc.type = 'sine';
    this.rightOsc.frequency.setValueAtTime(base + beat, now);

    const rightGain = ctx.createGain();
    rightGain.gain.setValueAtTime(0.5, now);

    if (ctx.createStereoPanner) {
      const rightPan = ctx.createStereoPanner();
      rightPan.pan.setValueAtTime(0.8, now);
      this.rightOsc.connect(rightGain);
      rightGain.connect(rightPan);
      rightPan.connect(this.binauralGain);
      this.activeNodes.push(rightPan);
    } else {
      this.rightOsc.connect(rightGain);
      rightGain.connect(this.binauralGain);
    }

    // Armónico cálido de acompañamiento (216 Hz Pad)
    const warmOsc = ctx.createOscillator();
    warmOsc.type = 'triangle';
    warmOsc.frequency.setValueAtTime(this.subFreq, now);

    const warmGain = ctx.createGain();
    warmGain.gain.setValueAtTime(0.25, now);

    const warmFilter = ctx.createBiquadFilter();
    warmFilter.type = 'lowpass';
    warmFilter.frequency.setValueAtTime(500, now);

    warmOsc.connect(warmFilter);
    warmFilter.connect(warmGain);
    warmGain.connect(this.masterGain);

    this.leftOsc.start(now);
    this.rightOsc.start(now);
    warmOsc.start(now);

    this.activeNodes.push(this.leftOsc, this.rightOsc, warmOsc, leftGain, rightGain, warmGain, warmFilter, this.binauralGain);
  }

  /**
   * PRESET 2: Cuencos Tibetanos Periódicos & Campanas de Cuarzo
   */
  startCuencosPreset() {
    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Drone tibetano suave y armónico de fondo (216 Hz + 432 Hz)
    const droneOsc = ctx.createOscillator();
    droneOsc.type = 'sine';
    droneOsc.frequency.setValueAtTime(216, now);

    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.3, now);
    droneOsc.connect(droneGain);
    droneGain.connect(this.masterGain);
    droneOsc.start(now);
    this.activeNodes.push(droneOsc, droneGain);

    // Tocar cuencos periódicamente cada 6-7 segundos
    const bowlNotes = [432, 540, 648, 528];
    let noteIdx = 0;
    this.bowlInterval = setInterval(() => {
      if (!this.isPlaying || this.isMuted) return;
      const freq = bowlNotes[noteIdx % bowlNotes.length];
      noteIdx++;
      this.playSingingBowl(freq, 4.0, 0.6);
    }, 6500);
  }

  /**
   * PRESET 3: Respiración Coherente (0.1 Hz / Olas Lattice)
   */
  startRespiracionPreset() {
    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Filtro modulado para efecto de respiración / olas
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(380, now);
    filter.Q.setValueAtTime(1.8, now);

    // LFO a 0.1 Hz (6 ciclos por minuto: inhalación 5s, exhalación 5s)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.1, now);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(220, now); // Modula el centro del filtro entre 160 Hz y 600 Hz
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start(now);

    // Generador de sonido continuo (Acorde áureo 216 Hz, 432 Hz, 648 Hz)
    [216, 432, 648].forEach((f, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(f, now);

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.25 / (idx + 1), now);

      osc.connect(g);
      g.connect(filter);
      osc.start(now);
      this.activeNodes.push(osc, g);
    });

    const breathMasterGain = ctx.createGain();
    breathMasterGain.gain.setValueAtTime(0.55, now);
    filter.connect(breathMasterGain);
    breathMasterGain.connect(this.masterGain);

    this.activeNodes.push(lfo, lfoGain, filter, breathMasterGain);
  }

  /**
   * Modula la fase binaural suavemente durante el avance del cronómetro
   */
  updateProgress(progreso, phaseNumber) {
    if (!this.isPlaying || !this.ctx) return;

    if (phaseNumber !== this.currentPhase) {
      const oldPhase = this.currentPhase;
      this.currentPhase = phaseNumber;

      // Campana zen de cambio de fase
      if (oldPhase < phaseNumber) {
        const chimeFreq = phaseNumber === 2 ? 528 : 648;
        this.playSingingBowl(chimeFreq, 3.2, 0.55);
      }

      // Modulación binaural suave
      if (this.rightOsc && this.currentPreset === 'binaural') {
        const newBeat = this.phaseBeatFreqs[phaseNumber] || 10.0;
        const now = this.ctx.currentTime;
        this.rightOsc.frequency.cancelScheduledValues(now);
        this.rightOsc.frequency.setValueAtTime(this.rightOsc.frequency.value, now);
        this.rightOsc.frequency.linearRampToValueAtTime(this.carrierFreq + newBeat, now + 3.0);
      }
    }
  }

  /**
   * Síntesis de Cuenco Tibetano / Campana Zen con armónicos audibles
   */
  playSingingBowl(baseFreq = 432, decay = 3.5, volume = 0.6) {
    try {
      if (!this.ctx || this.isMuted) return;
      const ctx = this.ctx;
      const now = ctx.currentTime;

      // Armónicos naturales de cuenco metálico
      const partials = [
        { mult: 1.0, gain: 0.50, dec: decay },
        { mult: 2.76, gain: 0.28, dec: decay * 0.7 },
        { mult: 4.75, gain: 0.16, dec: decay * 0.5 },
        { mult: 5.40, gain: 0.10, dec: decay * 0.4 }
      ];

      partials.forEach(p => {
        [-0.5, 0.5].forEach(detune => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseFreq * p.mult + detune, now);

          const peakGain = Math.max(0.001, (volume * p.gain * 0.5) * (this.isMuted ? 0 : this.volume));
          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.linearRampToValueAtTime(peakGain, now + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + p.dec);

          osc.connect(gain);
          gain.connect(this.masterGain || ctx.destination);

          osc.start(now);
          osc.stop(now + p.dec + 0.08);
        });
      });
    } catch (e) {
      console.warn('Error tocando cuenco tibetano:', e);
    }
  }

  /**
   * Finalización de sesión (0:00)
   */
  finishSession() {
    this.pauseSession();
    setTimeout(() => {
      // Tríada triunfal de cuencos
      [432, 540, 648].forEach((f, i) => {
        setTimeout(() => {
          this.playSingingBowl(f, 5.0, 0.65);
        }, i * 350);
      });
    }, 200);
  }

  pauseSession() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.3);
    }
    setTimeout(() => {
      this.cleanupNodes();
    }, 350);
  }

  resumeSession() {
    this.startSession({
      volume: this.volume,
      preset: this.currentPreset,
      isMuted: this.isMuted
    });
  }

  stopSession() {
    this.isPlaying = false;
    this.cleanupNodes();
  }

  cleanupNodes() {
    if (this.bowlInterval) {
      clearInterval(this.bowlInterval);
      this.bowlInterval = null;
    }
    this.activeNodes.forEach(node => {
      try {
        if (typeof node.stop === 'function') node.stop();
        if (typeof node.disconnect === 'function') node.disconnect();
      } catch (e) {}
    });
    this.activeNodes = [];
    this.leftOsc = null;
    this.rightOsc = null;
    this.ambientGain = null;
    this.binauralGain = null;
    this.masterGain = null;
  }

  setVolume(newVol) {
    this.volume = Math.max(0, Math.min(1, newVol));
    if (this.masterGain && this.ctx && !this.isMuted) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(this.volume, now + 0.05);
    }
  }

  setMuted(muteState) {
    this.isMuted = muteState;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      const target = this.isMuted ? 0.0001 : this.volume;
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(target, now + 0.1);
    }
  }

  setPreset(preset) {
    this.currentPreset = preset;
    if (this.isPlaying) {
      this.cleanupNodes();
      // Re-crear master gain y arrancar preset
      if (this.ctx) {
        this.masterGain = this.ctx.createGain();
        const targetVol = this.isMuted ? 0.0001 : this.volume;
        this.masterGain.gain.setValueAtTime(targetVol, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
      this.playSingingBowl(432, 2.5, 0.55);
      this.startPresetAudio();
    }
  }
}

export const sintergiaAudio = new SintergiaAudioEngine();
