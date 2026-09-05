import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserProgress } from '../services/db';
import ThemeToggle from './ThemeToggle';

export default function GlobalHUDWidget() {
  const { user } = useAuth();
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const savedAvatar = localStorage.getItem('selectedGodAvatar');
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar);
    } else if (user?.photoURL) {
      setSelectedAvatar(user.photoURL);
    }

    if (user) {
      getUserProgress(user.uid).then((data) => {
        if (data) setProgress(data.globalPercentage || 0);
      });
    }
  }, [user]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const selectAvatar = (path) => {
    setSelectedAvatar(path);
    localStorage.setItem('selectedGodAvatar', path);
    setShowAvatarModal(false);
  };

  const gods = [
    { id: 'prometeo', name: 'Prometeo (Robó el fuego)', path: '/avatars/prometeo.jpg' },
    { id: 'wukong', name: 'Sun Wukong (Desafió al cielo)', path: '/avatars/sun_wukong.jpg' },
    { id: 'loki', name: 'Loki (Dios del Caos)', path: '/avatars/loki.jpg' }
  ];

  if (!user) return null;

  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <div className="global-hud-widget animate-fade-in">
        <audio ref={audioRef} src="/Magic.mp3" loop />
        <ThemeToggle />
        
        <button 
          className={`hud-music-btn ${isPlaying ? 'playing' : ''}`}
          onClick={toggleMusic}
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>

        <div className="hud-avatar-container" onClick={() => setShowAvatarModal(true)} title={`${progress}% Completado. Cambiar avatar.`}>
          <svg width="60" height="60" className="hud-progress-ring">
            <circle
              className="hud-progress-ring-bg"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
              fill="transparent"
              r={radius}
              cx="30"
              cy="30"
            />
            <circle
              className="hud-progress-ring-fill"
              stroke="var(--crear-gold)"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              r={radius}
              cx="30"
              cy="30"
            />
          </svg>
          {selectedAvatar ? (
            <img src={selectedAvatar} alt="Avatar" className="hud-avatar-img" />
          ) : (
            <div className="hud-avatar-placeholder">?</div>
          )}
        </div>
      </div>

      {showAvatarModal && (
        <div className="modal-overlay" onClick={() => setShowAvatarModal(false)} style={{ zIndex: 10001 }}>
          <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
            <h3 className="text-gold" style={{ marginTop: 0, fontSize: '1.5rem' }}>Elige tu Avatar Disruptor</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem' }}>Si no tienes una foto de perfil (o quieres cambiarla), puedes elegir a uno de los dioses que interrumpieron la mitología.</p>
            
            <div className="gods-grid">
              {gods.map(god => (
                <div key={god.id} className="god-card" onClick={() => selectAvatar(god.path)}>
                  <img src={god.path} alt={god.name} />
                  <p>{god.name}</p>
                </div>
              ))}
            </div>

            <button className="btn-secondary" style={{ marginTop: '2rem', width: '100%' }} onClick={() => setShowAvatarModal(false)}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
