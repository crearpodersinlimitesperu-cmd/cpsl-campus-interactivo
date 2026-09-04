import React from 'react';

/**
 * Avatar Reactivo para el Simulador Táctico de Liderazgo (Stealth Mode)
 * Cambia dinámicamente de expresión facial, postura y aura según la respuesta táctica del usuario.
 * Estados: 'neutral' | 'tenso' | 'receptivo' | 'defensivo_molesto' | 'aliviado_pero_descomprometido' | 'humillado' | 'alineado_y_agradecido'
 */
export default function ReactiveAvatar({ state = 'neutral', size = 180, showLabel = true }) {
  const configs = {
    neutral: {
      color: '#38bdf8',
      label: 'Estado: Calibrado / Neutral',
      sublabel: 'Sistema nervioso en equilibrio baseline',
      glow: 'rgba(56, 189, 248, 0.4)',
      bgGrad: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(7, 13, 31, 0.9) 100%)',
      eyebrows: 'M 35 48 Q 50 48 65 48',
      eyebrowsR: 'M 85 48 Q 100 48 115 48',
      eyes: 'M 40 58 Q 50 56 60 58',
      eyesR: 'M 90 58 Q 100 56 110 58',
      pupilY: 58,
      mouth: 'M 60 85 Q 75 87 90 85'
    },
    tenso: {
      color: '#f59e0b',
      label: 'Estado: Tenso / Alerta Biológica',
      sublabel: 'Perro Guardián (Cerebro Reptil) en guardia',
      glow: 'rgba(245, 158, 11, 0.5)',
      bgGrad: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(7, 13, 31, 0.95) 100%)',
      eyebrows: 'M 35 44 Q 50 50 65 52',
      eyebrowsR: 'M 85 52 Q 100 50 115 44',
      eyes: 'M 42 57 A 6 6 0 1 0 58 57 A 6 6 0 1 0 42 57',
      eyesR: 'M 92 57 A 6 6 0 1 0 108 57 A 6 6 0 1 0 92 57',
      pupilY: 57,
      mouth: 'M 62 88 L 88 88'
    },
    receptivo: {
      color: '#10b981',
      label: 'Estado: Receptivo / Vasija Abierta',
      sublabel: 'Neocórtex conectado • Seguridad psicológica',
      glow: 'rgba(16, 185, 129, 0.5)',
      bgGrad: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(7, 13, 31, 0.9) 100%)',
      eyebrows: 'M 35 44 Q 50 40 65 44',
      eyebrowsR: 'M 85 44 Q 100 40 115 44',
      eyes: 'M 42 58 Q 50 50 58 58',
      eyesR: 'M 92 58 Q 100 50 108 58',
      pupilY: 57,
      mouth: 'M 58 82 Q 75 96 92 82'
    },
    defensivo_molesto: {
      color: '#ef4444',
      label: 'Estado: Defensivo / Amenaza Percibida',
      sublabel: 'Ataque límbico activado • Alta reactividad',
      glow: 'rgba(239, 68, 68, 0.6)',
      bgGrad: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(7, 13, 31, 0.95) 100%)',
      eyebrows: 'M 33 42 L 67 52',
      eyebrowsR: 'M 83 52 L 117 42',
      eyes: 'M 40 59 L 60 59',
      eyesR: 'M 90 59 L 110 59',
      pupilY: 59,
      mouth: 'M 60 92 Q 75 80 90 92'
    },
    aliviado_pero_descomprometido: {
      color: '#a855f7',
      label: 'Estado: Complacencia / Descompromiso',
      sublabel: 'Alivio superficial • Pérdida de tracción',
      glow: 'rgba(168, 85, 247, 0.4)',
      bgGrad: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(7, 13, 31, 0.9) 100%)',
      eyebrows: 'M 35 48 Q 50 46 65 50',
      eyebrowsR: 'M 85 50 Q 100 46 115 48',
      eyes: 'M 42 58 Q 50 63 58 58',
      eyesR: 'M 92 58 Q 100 63 108 58',
      pupilY: 60,
      mouth: 'M 64 85 Q 75 90 86 85'
    },
    humillado: {
      color: '#64748b',
      label: 'Estado: Retracción / Vulnerabilidad Afectada',
      sublabel: 'Cierre cognitivo por corrección punitiva',
      glow: 'rgba(100, 116, 139, 0.4)',
      bgGrad: 'linear-gradient(135deg, rgba(100, 116, 139, 0.15) 0%, rgba(7, 13, 31, 0.95) 100%)',
      eyebrows: 'M 35 50 Q 50 46 65 44',
      eyebrowsR: 'M 85 44 Q 100 46 115 50',
      eyes: 'M 40 60 Q 50 65 60 60',
      eyesR: 'M 90 60 Q 100 65 110 60',
      pupilY: 62,
      mouth: 'M 65 90 Q 75 84 85 90'
    },
    alineado_y_agradecido: {
      color: '#ffb703',
      label: 'Estado: Alineado & Agradecido (Liderazgo Adaptativo)',
      sublabel: 'Rigor sostenido + Máxima empatía y respeto',
      glow: 'rgba(255, 183, 3, 0.6)',
      bgGrad: 'linear-gradient(135deg, rgba(255, 183, 3, 0.25) 0%, rgba(7, 13, 31, 0.95) 100%)',
      eyebrows: 'M 34 43 Q 50 38 66 42',
      eyebrowsR: 'M 84 42 Q 100 38 116 43',
      eyes: 'M 40 56 Q 50 48 60 56',
      eyesR: 'M 90 56 Q 100 48 110 56',
      pupilY: 55,
      mouth: 'M 56 80 Q 75 98 94 80'
    }
  };

  const current = configs[state] || configs.neutral;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
      <div 
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: '50%',
          background: current.bgGrad,
          border: `2px solid ${current.color}`,
          boxShadow: `0 0 25px ${current.glow}, inset 0 0 15px ${current.glow}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          transition: 'all 0.4s ease'
        }}
      >
        <svg 
          viewBox="0 0 150 150" 
          width={size * 0.88} 
          height={size * 0.88}
          style={{ transition: 'all 0.3s ease' }}
        >
          <circle cx="75" cy="75" r="68" fill="none" stroke={current.color} strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <ellipse cx="75" cy="65" rx="42" ry="46" fill="#0b1329" stroke={current.color} strokeWidth="2.5" />
          <path d="M 52 105 Q 75 116 98 105 L 115 145 L 35 145 Z" fill="#0f172a" stroke={current.color} strokeWidth="2" />
          <path d={current.eyebrows} fill="none" stroke={current.color} strokeWidth="3" strokeLinecap="round" />
          <path d={current.eyebrowsR} fill="none" stroke={current.color} strokeWidth="3" strokeLinecap="round" />
          <path d={current.eyes} fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <path d={current.eyesR} fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy={current.pupilY} r="3" fill={current.color} />
          <circle cx="100" cy={current.pupilY} r="3" fill={current.color} />
          <path d="M 75 62 L 72 73 L 78 73" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round" />
          <path d={current.mouth} fill="none" stroke={current.color} strokeWidth="3.2" strokeLinecap="round" />
        </svg>

        <div style={{
          position: 'absolute',
          bottom: '4px',
          right: '8px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: current.color,
          boxShadow: `0 0 10px ${current.color}`,
          border: '2px solid #070d1f'
        }} />
      </div>

      {showLabel && (
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '0.82rem',
            fontWeight: 800,
            color: current.color,
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {current.label}
          </div>
          <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '2px' }}>
            {current.sublabel}
          </div>
        </div>
      )}
    </div>
  );
}
