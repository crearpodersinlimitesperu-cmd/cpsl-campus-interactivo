import React from 'react';

/**
 * Plano Cartesiano de Liderazgo Adaptativo (Stealth Mode)
 * Evalúa de manera continua dos variables operativas:
 * - Eje Y: Rigor Score (Sostenimiento de acuerdos sin drama)
 * - Eje X: Empathy Score (Escucha activa y comunicación no violenta)
 * Cuadrante meta: Liderazgo Adaptativo (Alto Rigor + Alta Empatía)
 */
export default function CartesianLeadershipPlane({ 
  rigorScore = 88, 
  empathyScore = 92, 
  compact = false,
  showDetails = true 
}) {
  // Clamping 0-100
  const x = Math.max(5, Math.min(95, empathyScore));
  const y = Math.max(5, Math.min(95, rigorScore));

  const isAdaptive = x >= 50 && y >= 50;
  const isAuthoritarian = x < 50 && y >= 50;
  const isComplacent = x >= 50 && y < 50;
  const isDisconnected = x < 50 && y < 50;

  let currentQuadrantName = 'Liderazgo Adaptativo';
  let badgeColor = '#10b981';
  let statusText = '✓ ACREDITADO: LIDERAZGO ADAPTATIVO (Compliance Clearance)';

  if (isAuthoritarian) {
    currentQuadrantName = 'Autoritarismo (Baja Empatía)';
    badgeColor = '#f59e0b';
    statusText = '⚠️ ALERTA: Desviación hacia Rigidez / Activa Perro Guardián';
  } else if (isComplacent) {
    currentQuadrantName = 'Complacencia (Bajo Rigor)';
    badgeColor = '#38bdf8';
    statusText = '⚠️ ALERTA: Desviación hacia Sympathy / Debilita el Contenedor';
  } else if (isDisconnected) {
    currentQuadrantName = 'Desconexión (Inacción)';
    badgeColor = '#ef4444';
    statusText = '⛔ CRÍTICO: Fuera de Estándar Operativo';
  }

  // Dimensiones SVG
  const width = compact ? 280 : 380;
  const height = compact ? 240 : 300;
  const padding = compact ? 30 : 40;

  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  // Coordenadas en SVG (Y invertido)
  const dotSvgX = padding + (x / 100) * innerWidth;
  const dotSvgY = height - padding - (y / 100) * innerHeight;
  const midX = padding + innerWidth / 2;
  const midY = padding + innerHeight / 2;

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(7, 13, 31, 0.95) 100%)',
      borderRadius: '1rem',
      padding: compact ? '1rem' : '1.5rem',
      border: `1px solid ${isAdaptive ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
    }}>
      {/* Cabecera del Plano */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--crear-gold, #ffb703)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            METROLOGÍA DE DESEMPEÑO
          </span>
          <h4 style={{ margin: '2px 0 0', fontSize: compact ? '1rem' : '1.15rem', color: '#ffffff', fontWeight: 800 }}>
            Plano Cartesiano de Liderazgo
          </h4>
        </div>
        <div style={{
          background: isAdaptive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
          border: `1px solid ${badgeColor}`,
          padding: '0.3rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: 800,
          color: badgeColor
        }}>
          {currentQuadrantName}
        </div>
      </div>

      {/* SVG del Gráfico Cartesiano */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible' }}>
          {/* Fondo Cuadrante I: Liderazgo Adaptativo (Alto Rigor + Alta Empatía) */}
          <rect 
            x={midX} 
            y={padding} 
            width={innerWidth / 2} 
            height={innerHeight / 2} 
            fill="rgba(16, 185, 129, 0.12)" 
            stroke="rgba(16, 185, 129, 0.3)" 
            strokeWidth="0.8" 
          />
          {/* Fondo Cuadrante II: Autoritarismo (Alto Rigor + Baja Empatía) */}
          <rect 
            x={padding} 
            y={padding} 
            width={innerWidth / 2} 
            height={innerHeight / 2} 
            fill="rgba(245, 158, 11, 0.05)" 
            stroke="rgba(245, 158, 11, 0.15)" 
            strokeWidth="0.8" 
          />
          {/* Fondo Cuadrante III: Complacencia (Bajo Rigor + Alta Empatía) */}
          <rect 
            x={midX} 
            y={midY} 
            width={innerWidth / 2} 
            height={innerHeight / 2} 
            fill="rgba(56, 189, 248, 0.05)" 
            stroke="rgba(56, 189, 248, 0.15)" 
            strokeWidth="0.8" 
          />
          {/* Fondo Cuadrante IV: Desconexión */}
          <rect 
            x={padding} 
            y={midY} 
            width={innerWidth / 2} 
            height={innerHeight / 2} 
            fill="rgba(239, 68, 68, 0.05)" 
            stroke="rgba(239, 68, 68, 0.15)" 
            strokeWidth="0.8" 
          />

          {/* Ejes Principales X e Y */}
          <line x1={midX} y1={padding - 10} x2={midX} y2={height - padding + 10} stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1={padding - 10} y1={midY} x2={width - padding + 10} y2={midY} stroke="#475569" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Etiquetas de Cuadrantes */}
          <text x={midX + 8} y={padding + 16} fill="#10b981" fontSize={compact ? "9" : "11"} fontWeight="800">
            ★ LIDERAZGO ADAPTATIVO
          </text>
          <text x={midX + 8} y={padding + 28} fill="rgba(16, 185, 129, 0.7)" fontSize={compact ? "8" : "9"}>
            (Alto Rigor + Alta Empatía)
          </text>

          <text x={padding + 8} y={padding + 16} fill="#f59e0b" fontSize={compact ? "9" : "10"} fontWeight="700">
            AUTORITARISMO
          </text>
          <text x={padding + 8} y={padding + 28} fill="#94a3b8" fontSize={compact ? "8" : "9"}>
            (Alto Rigor + Baja Empatía)
          </text>

          <text x={midX + 8} y={midY + 18} fill="#38bdf8" fontSize={compact ? "9" : "10"} fontWeight="700">
            COMPLACENCIA
          </text>
          <text x={midX + 8} y={midY + 30} fill="#94a3b8" fontSize={compact ? "8" : "9"}>
            (Bajo Rigor + Alta Empatía)
          </text>

          <text x={padding + 8} y={midY + 18} fill="#ef4444" fontSize={compact ? "9" : "10"} fontWeight="700">
            DESCONEXIÓN
          </text>

          {/* Flechas y Nombres de Ejes */}
          <text x={midX} y={padding - 14} fill="#e2e8f0" fontSize="10" fontWeight="800" textAnchor="middle">
            ▲ RIGOR SCORE (Eje Y)
          </text>
          <text x={width - padding + 12} y={midY + 4} fill="#e2e8f0" fontSize="10" fontWeight="800">
            EMPATÍA ▶
          </text>

          {/* Coordenadas Guía hacia el Punto */}
          <line x1={midX} y1={dotSvgY} x2={dotSvgX} y2={dotSvgY} stroke={badgeColor} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
          <line x1={dotSvgX} y1={midY} x2={dotSvgX} y2={dotSvgY} stroke={badgeColor} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />

          {/* Halo de Pulso del Usuario */}
          <circle cx={dotSvgX} cy={dotSvgY} r="14" fill={badgeColor} opacity="0.25">
            <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Punto de Posición Actual */}
          <circle cx={dotSvgX} cy={dotSvgY} r="7" fill={badgeColor} stroke="#ffffff" strokeWidth="2" />

          {/* Etiqueta del Punto */}
          <text x={dotSvgX + 10} y={dotSvgY - 6} fill="#ffffff" fontSize="10" fontWeight="900" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.8))">
            TÚ ({empathyScore}, {rigorScore})
          </text>
        </svg>
      </div>

      {/* Métricas Numéricas y Regla de Oro */}
      {showDetails && (
        <div style={{ marginTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', borderLeft: '3px solid #ffb703' }}>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>EJE Y: RIGOR OPERATIVO</span>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                {rigorScore} <span style={{ fontSize: '0.75rem', color: '#10b981' }}>/ 100</span>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>Sostener acuerdos sin complicidad ni drama</span>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: '0.5rem', borderLeft: '3px solid #10b981' }}>
              <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>EJE X: EMPATÍA & ESCUCHA</span>
              <div style={{ fontSize: '1.15rem', fontWeight: 900, color: '#ffffff' }}>
                {empathyScore} <span style={{ fontSize: '0.75rem', color: '#10b981' }}>/ 100</span>
              </div>
              <span style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>Respeto a la libertad y comunicación ética</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            fontSize: '0.74rem',
            color: '#e2e8f0',
            lineHeight: 1.4
          }}>
            <strong>Regla de Oro Metodológica:</strong> {statusText}
          </div>
        </div>
      )}
    </div>
  );
}
