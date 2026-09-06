/**
 * sintergiaAudio.js - Motor Neuroacústico de Sincronía Interhemisférica
 * SISTEMA INTERRUPCIÓN • LABORATORIO SINTÉRGICO (Protocolo INPEC 1987)
 * 
 * Especialmente optimizado para AUDÍFONOS (Experiencia Inmersiva 8D) y Altavoces:
 * - Separación Estéreo Real (-1.0 Izq / +1.0 Der) para estimulación binaural pura del complejo olivar superior.
 * - Portadora áurea 432.0 Hz + Sub-grave craneal 108.0 Hz (vibración física relajante en audífonos).
 * - Batimiento variable en tiempo real según la fase (12 Hz Alfa -> 10 Hz Alfa Puro -> 7.5 Hz Theta Sintergia).
 * - Modo 8D Holofónico: Órbita espacial 360° tridimensional que rota suavemente alrededor de la cabeza.
 * - Cuencos Tibetanos Estéreo 3D: Pares micro-desafinados (±0.75 Hz) con paneo estéreo opuesto para batimiento físico.
 * - Respiración Coherente a 0.1 Hz (6 respiraciones/min) con filtro analógico cálido e hinchazón de aire.
 * - Red de Ambiencia Espacial (Stereo Crossfeed & Soft Reverb) que elimina la fatiga auditiva.
 */

class SintergiaAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.spaceNetwork = null;
    this.activeNodes = [];
    this.leftOsc = null;
    this.rightOsc = null;
    this.subOsc = null;
    this.orbitLfo = null;
    this.bowlInterval = null;
    this.noiseBuffer = null;

    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.75;
    this.currentPreset = 'binaural'; // 'binaural' | 'holofonico' | 'cuencos' | 'respiracion'
    this.currentPhase = 1;

    // Frecuencias base en afinación áurea (432 Hz)
    this.carrierFreq = 432.0; // Portadora áurea
    this.subFreq = 108.0;     // Sub-grave craneal (resonancia corporal en audífonos)
    this.deepFreq = 54.0;     // Fundamento sub-graves
    
    // Frecuencias binaurales diferenciales según fase
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
   * Crea una red de ambiencia espacial para audífonos (espacio 3D sin fatiga)
   */
  createSpatialNetwork(ctx) {
    const input = ctx.createGain();
    const output = ctx.createGain();

    // Señal seca
    input.connect(output);

    // Red de retardo estéreo espacial (efecto sala de meditación)
    const delayL = ctx.createDelay();
    const delayR = ctx.createDelay();
    delayL.delayTime.value = 0.038; // 38ms
    delayR.delayTime.value = 0.057; // 57ms

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 2200; // amortiguación cálida

    const feedback = ctx.createGain();
    feedback.gain.value = 0.22;

    const wetGain = ctx.createGain();
    wetGain.gain.value = 0.28;

    input.connect(delayL);
    input.connect(delayR);

    delayL.connect(filter);
    delayR.connect(filter);

    filter.connect(feedback);
    feedback.connect(delayL);
    feedback.connect(delayR);

    if (ctx.createStereoPanner) {
      const panL = ctx.createStereoPanner();
      const panR = ctx.createStereoPanner();
      panL.pan.value = -0.65;
      panR.pan.value = 0.65;
      delayL.connect(panL);
      panL.connect(wetGain);
      delayR.connect(panR);
      panR.connect(wetGain);
      this.activeNodes.push(panL, panR);
    } else {
      filter.connect(wetGain);
    }

    wetGain.connect(output);
    this.activeNodes.push(input, output, delayL, delayR, filter, feedback, wetGain);

    return { input, output };
  }

  /**
   * Inicia o actualiza la sesión neuroacústica
   */
  async startSession({ volume = 0.75, preset = 'binaural', isMuted = false } = {}) {
    const ctx = await this.ensureContext();
    if (!ctx) return;

    this.stopSession(); // Detener previo limpiamente

    this.volume = volume;
    this.currentPreset = preset;
    this.isMuted = isMuted;
    this.isPlaying = true;

    // Master Gain
    this.masterGain = ctx.createGain();
    const targetVol = this.isMuted ? 0.0001 : this.volume;
    this.masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(targetVol, ctx.currentTime + 0.35);
    this.masterGain.connect(ctx.destination);

    // Ambiencia espacial
    this.spaceNetwork = this.createSpatialNetwork(ctx);
    this.spaceNetwork.output.connect(this.masterGain);

    // Cuenco tibetano estéreo de bienvenida
    this.playSingingBowl(432, 4.0, 0.65);

    // Arrancar preset
    this.startPresetAudio();
    console.log('[SintergiaAudio 8D] Sesión iniciada:', { preset: this.currentPreset, volume: this.volume });
  }

  startPresetAudio() {
    if (!this.ctx || !this.spaceNetwork) return;

    if (this.currentPreset === 'binaural') {
      this.startBinauralPreset();
    } else if (this.currentPreset === 'holofonico') {
      this.startHolofonico8DPreset();
    } else if (this.currentPreset === 'cuencos') {
      this.startCuencosPreset();
    } else if (this.currentPreset === 'respiracion') {
      this.startRespiracionPreset();
    }
  }

  /**
   * PRESET 1: Sincronía Binaural Áurea de Alta Fidelidad
   * Canal Izquierdo: 432 Hz puro (Pan -1.0)
   * Canal Derecho: 432 Hz + Beat (Pan +1.0)
   * Centro Craneal: Sub-grave 108 Hz + 54 Hz para resonancia física en audífonos
   */
  startBinauralPreset() {
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const input = this.spaceNetwork.input;

    const base = this.carrierFreq; // 432 Hz
    const beat = this.phaseBeatFreqs[this.currentPhase] || 12.0;

    // --- CANAL IZQUIERDO: 432 Hz ---
    this.leftOsc = ctx.createOscillator();
    this.leftOsc.type = 'sine';
    this.leftOsc.frequency.setValueAtTime(base, now);

    const leftGain = ctx.createGain();
    leftGain.gain.setValueAtTime(0.42, now);

    if (ctx.createStereoPanner) {
      const leftPan = ctx.createStereoPanner();
      leftPan.pan.setValueAtTime(-0.95, now); // Estéreo casi total para audífonos
      this.leftOsc.connect(leftGain);
      leftGain.connect(leftPan);
      leftPan.connect(input);
      this.activeNodes.push(leftPan);
    } else {
      this.leftOsc.connect(leftGain);
      leftGain.connect(input);
    }

    // --- CANAL DERECHO: 432 Hz + Beat ---
    this.rightOsc = ctx.createOscillator();
    this.rightOsc.type = 'sine';
    this.rightOsc.frequency.setValueAtTime(base + beat, now);

    const rightGain = ctx.createGain();
    rightGain.gain.setValueAtTime(0.42, now);

    if (ctx.createStereoPanner) {
      const rightPan = ctx.createStereoPanner();
      rightPan.pan.setValueAtTime(0.95, now);
      this.rightOsc.connect(rightGain);
      rightGain.connect(rightPan);
      rightPan.connect(input);
      this.activeNodes.push(rightPan);
    } else {
      this.rightOsc.connect(rightGain);
      rightGain.connect(input);
    }

    // --- SUB-GRAVE CRANEAL (108 Hz & 54 Hz): SENSACIÓN FÍSICA EN AURICULARES ---
    this.subOsc = ctx.createOscillator();
    this.subOsc.type = 'triangle';
    this.subOsc.frequency.setValueAtTime(this.subFreq, now);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.24, now);

    const subFilter = ctx.createBiquadFilter();
    subFilter.type = 'lowpass';
    subFilter.frequency.setValueAtTime(180, now);

    this.subOsc.connect(subFilter);
    subFilter.connect(subGain);
    subGain.connect(input);

    // --- ALMOHADILLA ARMÓNICA ÁUREA SUAVE (216 Hz) ---
    const padOsc = ctx.createOscillator();
    padOsc.type = 'sine';
    padOsc.frequency.setValueAtTime(216.0, now);

    const padGain = ctx.createGain();
    padGain.gain.setValueAtTime(0.18, now);
    padOsc.connect(padGain);
    padGain.connect(input);

    this.leftOsc.start(now);
    this.rightOsc.start(now);
    this.subOsc.start(now);
    padOsc.start(now);

    this.activeNodes.push(
      this.leftOsc, this.rightOsc, this.subOsc, padOsc,
      leftGain, rightGain, subGain, padGain, subFilter
    );
  }

  /**
   * PRESET 2: Modo 8D Holofónico Lattice (Órbita Espacial 360° en Audífonos)
   * Los armónicos y cuencos se mueven lentamente alrededor de la cabeza del usuario
   */
  startHolofonico8DPreset() {
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const input = this.spaceNetwork.input;

    // Portadora binaural estéreo fija en los extremos
    this.startBinauralPreset();

    // Capa 8D Orbitante: Sintetizador que gira lentamente (0.045 Hz = vuelta cada 22 segundos)
    if (ctx.createStereoPanner) {
      const orbitPan = ctx.createStereoPanner();
      orbitPan.pan.setValueAtTime(0, now);

      // LFO oscilador para la órbita espacial
      const orbitLfo = ctx.createOscillator();
      orbitLfo.frequency.setValueAtTime(0.045, now); // Giro suave
      orbitLfo.connect(orbitPan.pan);
      orbitLfo.start(now);

      // Sonido de fondo cósmico orbitante (Acorde áureo 432 Hz y 648 Hz)
      [432, 648].forEach((f, i) => {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f + (i === 0 ? 0.3 : -0.3), now);

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.12, now);

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(f, now);
        filter.Q.setValueAtTime(4.0, now);

        osc.connect(filter);
        filter.connect(g);
        g.connect(orbitPan);
        osc.start(now);

        this.activeNodes.push(osc, g, filter);
      });

      orbitPan.connect(input);
      this.activeNodes.push(orbitPan, orbitLfo);
    }

    // Tañidos de cuenco periódicos con alternancia espacial
    let bowlPan = -0.7;
    this.bowlInterval = setInterval(() => {
      if (!this.isPlaying || this.isMuted) return;
      bowlPan = -bowlPan; // Alterna izquierda y derecha
      this.playSingingBowl(528, 4.5, 0.58, bowlPan);
    }, 7000);
  }

  /**
   * PRESET 3: Cuencos Tibetanos Estéreo 3D & Campanas Zen de Cuarzo
   */
  startCuencosPreset() {
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const input = this.spaceNetwork.input;

    // Drone armónico cálido en 216 Hz y 108 Hz
    const droneOsc = ctx.createOscillator();
    droneOsc.type = 'sine';
    droneOsc.frequency.setValueAtTime(216, now);

    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.28, now);
    droneOsc.connect(droneGain);
    droneGain.connect(input);
    droneOsc.start(now);

    const subDrone = ctx.createOscillator();
    subDrone.type = 'triangle';
    subDrone.frequency.setValueAtTime(108, now);
    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.20, now);
    subDrone.connect(subGain);
    subGain.connect(input);
    subDrone.start(now);

    this.activeNodes.push(droneOsc, droneGain, subDrone, subGain);

    // Tañidos de cuencos periódicos en armonía áurea (432, 540, 648, 528 Hz)
    const bowlNotes = [432, 540, 648, 528];
    let noteIdx = 0;
    let panDir = -0.6;

    this.bowlInterval = setInterval(() => {
      if (!this.isPlaying || this.isMuted) return;
      const freq = bowlNotes[noteIdx % bowlNotes.length];
      noteIdx++;
      panDir = -panDir;
      this.playSingingBowl(freq, 4.5, 0.62, panDir);
    }, 6200);
  }

  /**
   * PRESET 4: Respiración Coherente (0.1 Hz / Olas Lattice)
   * 6 respiraciones por minuto (5s inhalación, 5s exhalación) con paneo oscilante
   */
  startRespiracionPreset() {
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const input = this.spaceNetwork.input;

    // Filtro modulado para el flujo de aire / olas
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(360, now);
    filter.Q.setValueAtTime(2.0, now);

    // LFO de frecuencia de filtro (0.1 Hz: ciclo de 10s)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.1, now);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(240, now); // Modula entre 120 Hz y 600 Hz
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start(now);

    // Generador armónico (216 Hz, 432 Hz, 648 Hz)
    [216, 432, 648].forEach((f, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx === 0 ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(f, now);

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.24 / (idx + 1), now);

      osc.connect(g);
      g.connect(filter);
      osc.start(now);
      this.activeNodes.push(osc, g);
    });

    // Paneo oscilante suave para audífonos (la respiración se siente pasar de un hemisferio al otro)
    if (ctx.createStereoPanner) {
      const breathPan = ctx.createStereoPanner();
      const panLfo = ctx.createOscillator();
      panLfo.type = 'sine';
      panLfo.frequency.setValueAtTime(0.1, now); // Coincide con la respiración
      panLfo.connect(breathPan.pan);
      panLfo.start(now);

      const breathGain = ctx.createGain();
      breathGain.gain.setValueAtTime(0.55, now);
      filter.connect(breathGain);
      breathGain.connect(breathPan);
      breathPan.connect(input);

      this.activeNodes.push(breathPan, panLfo, breathGain);
    } else {
      const breathGain = ctx.createGain();
      breathGain.gain.setValueAtTime(0.55, now);
      filter.connect(breathGain);
      breathGain.connect(input);
      this.activeNodes.push(breathGain);
    }

    this.activeNodes.push(lfo, lfoGain, filter);
  }

  /**
   * Modula la fase binaural y toca campana armónica en cambios de fase
   */
  updateProgress(progreso, phaseNumber) {
    if (!this.isPlaying || !this.ctx) return;

    if (phaseNumber !== this.currentPhase) {
      const oldPhase = this.currentPhase;
      this.currentPhase = phaseNumber;

      // Campana zen estéreo al subir de fase
      if (oldPhase < phaseNumber) {
        const chimeFreq = phaseNumber === 2 ? 528 : 648;
        this.playSingingBowl(chimeFreq, 3.8, 0.60, 0.0);
      }

      // Modulación suave de frecuencia en el canal derecho
      if (this.rightOsc && (this.currentPreset === 'binaural' || this.currentPreset === 'holofonico')) {
        const newBeat = this.phaseBeatFreqs[phaseNumber] || 10.0;
        const now = this.ctx.currentTime;
        this.rightOsc.frequency.cancelScheduledValues(now);
        this.rightOsc.frequency.setValueAtTime(this.rightOsc.frequency.value, now);
        this.rightOsc.frequency.linearRampToValueAtTime(this.carrierFreq + newBeat, now + 3.0);
      }
    }
  }

  /**
   * Síntesis de Cuenco Tibetano / Campana de Cuarzo con Par Estéreo Micro-desafinado (Efecto 3D Real)
   */
  playSingingBowl(baseFreq = 432, decay = 4.0, volume = 0.65, panPosition = 0.0) {
    try {
      if (!this.ctx || this.isMuted) return;
      const ctx = this.ctx;
      const now = ctx.currentTime;
      const dest = this.spaceNetwork ? this.spaceNetwork.input : (this.masterGain || ctx.destination);

      // Armónicos naturales de cuenco de bronce y cuarzo
      const partials = [
        { mult: 1.0,  gain: 0.52, dec: decay },
        { mult: 2.76, gain: 0.30, dec: decay * 0.72 },
        { mult: 4.75, gain: 0.18, dec: decay * 0.50 },
        { mult: 5.40, gain: 0.12, dec: decay * 0.40 }
      ];

      partials.forEach(p => {
        // Par estéreo micro-desafinado (genera batimiento acústico real en auriculares)
        [-0.75, 0.75].forEach((detune, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseFreq * p.mult + detune, now);

          const peakGain = Math.max(0.001, (volume * p.gain * 0.5) * (this.isMuted ? 0 : this.volume));
          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.linearRampToValueAtTime(peakGain, now + 0.035);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + p.dec);

          if (ctx.createStereoPanner) {
            const panner = ctx.createStereoPanner();
            // Desplazar ligeramente a izq/der según el detune + la posición general
            const panVal = Math.max(-1, Math.min(1, panPosition + (idx === 0 ? -0.45 : 0.45)));
            panner.pan.setValueAtTime(panVal, now);

            osc.connect(gain);
            gain.connect(panner);
            panner.connect(dest);
          } else {
            osc.connect(gain);
            gain.connect(dest);
          }

          osc.start(now);
          osc.stop(now + p.dec + 0.1);
        });
      });
    } catch (e) {
      console.warn('Error tocando cuenco tibetano estéreo:', e);
    }
  }

  /**
   * Finalización de sesión (0:00)
   */
  finishSession() {
    this.pauseSession();
    setTimeout(() => {
      // Tríada estéreo triunfal de cuencos
      const notes = [
        { freq: 432, pan: -0.6 },
        { freq: 540, pan: 0.6 },
        { freq: 648, pan: 0.0 }
      ];
      notes.forEach((item, i) => {
        setTimeout(() => {
          this.playSingingBowl(item.freq, 5.5, 0.70, item.pan);
        }, i * 380);
      });
    }, 200);
  }

  pauseSession() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.35);
    }
    setTimeout(() => {
      this.cleanupNodes();
    }, 400);
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
    this.subOsc = null;
    this.spaceNetwork = null;
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
      if (this.ctx) {
        this.masterGain = this.ctx.createGain();
        const targetVol = this.isMuted ? 0.0001 : this.volume;
        this.masterGain.gain.setValueAtTime(targetVol, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
        this.spaceNetwork = this.createSpatialNetwork(this.ctx);
        this.spaceNetwork.output.connect(this.masterGain);
      }
      this.playSingingBowl(432, 2.8, 0.58);
      this.startPresetAudio();
    }
  }
}

export const sintergiaAudio = new SintergiaAudioEngine();
