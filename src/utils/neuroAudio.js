/**
 * neuroAudio.js - Neurofeedback & Dopamine Engineering for Interrupción
 * CREAR PODER SIN LÍMITES
 * 
 * Implementa estímulos sensoriales nativos (Web Audio API armónico + partículas Canvas)
 * para generar refuerzo positivo inmediato en evaluaciones, retos y superación de quiebres.
 */

class AudioNeuroFeedback {
  constructor() {
    this.ctx = null;
  }

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
   * Reproduce acorde armónico triunfal (C5, E5, G5, C6) en frecuencias doradas
   */
  playSuccessChime() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // Frecuencias: Do5 (523.25 Hz), Mi5 (659.25 Hz), Sol5 (783.99 Hz), Do6 (1046.50 Hz)
      const freqs = [523.25, 659.25, 783.99, 1046.50];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        // Curva envolvente suave (ADSR) de alta fidelidad
        const startTime = now + idx * 0.08;
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.22 / (idx + 1), startTime + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.65);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.7);
      });
    } catch (e) {
      console.warn("Neuro feedback audio synthesis skipped:", e);
    }
  }

  /**
   * Dispara micro-celebración con confeti Canvas dinámico
   */
  triggerConfetti() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    try {
      const canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '999999';
      document.body.appendChild(canvas);

      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Colores corporativos CREAR PODER SIN LÍMITES
      const colors = ['#ffb703', '#00d4ff', '#34A853', '#ffffff', '#ff9e00'];
      const particles = [];
      const count = 65;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: canvas.width * (0.35 + Math.random() * 0.3),
          y: canvas.height * 0.45,
          vx: (Math.random() - 0.5) * 14,
          vy: (Math.random() - 0.8) * 16,
          size: Math.random() * 6 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 12,
          alpha: 1,
          decay: Math.random() * 0.015 + 0.015
        });
      }

      let animationFrame;
      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = 0;

        particles.forEach(p => {
          if (p.alpha <= 0) return;
          alive++;
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.38; // Gravedad
          p.rotation += p.rotationSpeed;
          p.alpha -= p.decay;

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          ctx.restore();
        });

        if (alive > 0) {
          animationFrame = requestAnimationFrame(render);
        } else {
          cancelAnimationFrame(animationFrame);
          if (canvas.parentNode) {
            canvas.parentNode.removeChild(canvas);
          }
        }
      };

      animationFrame = requestAnimationFrame(render);
    } catch (e) {
      console.warn("Confetti celebration skipped:", e);
    }
  }

  /**
   * Orquestación completa de recompensa de dopamina
   */
  celebrate() {
    this.playSuccessChime();
    this.triggerConfetti();
  }
}

export const neuroAudio = new AudioNeuroFeedback();
export const celebrateBreakthrough = () => neuroAudio.celebrate();
export const playSuccessChime = () => neuroAudio.playSuccessChime();
export const triggerConfetti = () => neuroAudio.triggerConfetti();
