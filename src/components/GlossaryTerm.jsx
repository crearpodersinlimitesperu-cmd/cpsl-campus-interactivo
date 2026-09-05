import React, { useState } from 'react';

export const GLOSSARY_TERMS = {
  'nodus': {
    title: 'Plataforma Nodus',
    body: 'Infraestructura tecnológica y base de datos relacional para el seguimiento de interacciones humanas, estados de rigor y rendición de cuentas.',
    example: 'Consulta el dashboard de Nodus para auditar la tasa de cumplimiento del equipo.'
  },
  'imo': {
    title: 'IMO (Interventor de Máximo Óptimo)',
    body: 'Líder o facilitador que entrena la postura ontológica y la responsabilidad radical, operando desde la empatía quirúrgica y el rigor innegociable.',
    example: 'El IMO no se involucra en el drama ni valida justificaciones del participante.'
  },
  'causa os': {
    title: 'Causa OS',
    body: 'Sistema Operativo Conductual de Responsabilidad Radical. Postura donde el individuo se declara la causa generativa de sus resultados, sin culpas ni victimismo.',
    example: 'Al instalar Causa OS, el líder sustituye el "¿por qué me pasa esto?" por "¿qué creé o toleré aquí?".'
  },
  'compliance clearance': {
    title: 'Compliance Clearance (Luz Verde)',
    body: 'Estado oficial de cumplimiento de acuerdos y estándares operativos que habilita el acceso total a las siguientes fases y privilegios.',
    example: 'Tu cuenta ha recibido Compliance Clearance tras superar la auditoría de integridad.'
  },
  'action required': {
    title: 'Action Required (Alerta Roja)',
    body: 'Estado de bloqueo temporal o alerta operativa generado ante un quiebre de estándares o acuerdo pendiente de subsanar.',
    example: 'Estado en Action Required: Es indispensable completar la sesión de calibración para continuar.'
  },
  'integrity deviation': {
    title: 'Integrity Deviation',
    body: 'Desalineación consciente o inconsciente entre lo prometido y lo ejecutado. Se subsana mediante declaración y diseño de nuevas acciones.',
    example: 'Se registró una Integrity Deviation por no entregar el reporte a las 08:00; toca restaurar el acuerdo.'
  },
  'state calibration': {
    title: 'State Calibration',
    body: 'Intervención somática y atencional breve (1 a 3 min) diseñada para regular el sistema nervioso y enfocar el neocórtex antes de la ejecución.',
    example: 'Realizamos una State Calibration de respiración de 2 minutos antes de la simulación ejecutiva.'
  },
  'moonshot kpi': {
    title: 'Moonshot KPI',
    body: 'Métrica de estiramiento extraordinario que desafía la inercia del observador y demanda una nueva capacidad de respuesta y colaboración.',
    example: 'Nuestro Moonshot KPI es incrementar la tasa de retención un 40% este trimestre.'
  },
  'ecuacion de valor': {
    title: 'Ecuación de Valor (Hormozi)',
    body: 'Fórmula de valor percibido: (Resultado Soñado × Certeza Percibida) / (Retraso de Tiempo × Esfuerzo y Sacrificio).',
    example: 'Para maximizar valor, reduce la fricción y el tiempo hacia la primera victoria tangible del usuario.'
  },
  'perro guardian': {
    title: 'Amansar al Perro Guardián',
    body: 'Principio de neuromarketing para desactivar la reactividad de la amígdala (cerebro reptiliano) mediante escucha limpia y seguridad psicológica.',
    example: 'No discutas con su objeción reactiva; valida su experiencia para amansar al perro guardián.'
  }
};

export default function GlossaryTerm({ term, children, customTitle, customBody, customExample }) {
  const [showMobileModal, setShowMobileModal] = useState(false);
  const key = term ? term.toLowerCase().trim() : '';
  const termData = GLOSSARY_TERMS[key] || {
    title: customTitle || term,
    body: customBody || 'Término de Alto Rendimiento y Responsabilidad Ontológica.',
    example: customExample || ''
  };

  return (
    <>
      <span 
        className="glossary-anchor" 
        onClick={() => setShowMobileModal(true)}
        role="button"
        tabIndex={0}
        title={termData.title}
      >
        {children || termData.title}
        <span className="glossary-tooltip">
          <strong className="glossary-tooltip-title">{termData.title}</strong>
          <span className="glossary-tooltip-body">{termData.body}</span>
          {termData.example && (
            <span className="glossary-tooltip-example">Ej: "{termData.example}"</span>
          )}
        </span>
      </span>

      {showMobileModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setShowMobileModal(false)}
        >
          <div 
            style={{
              width: '100%',
              maxWidth: '480px',
              background: 'var(--bg-card, #0f172a)',
              color: 'var(--text-main, #f8f9fa)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.15)',
              padding: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--crear-blue, #00d4ff)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Glosario de Alto Rendimiento
              </span>
              <button 
                onClick={() => setShowMobileModal(false)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted, #9ca3af)', fontSize: '1.2rem', cursor: 'pointer', padding: '4px' }}
              >
                ✕
              </button>
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', color: 'var(--text-main, #ffffff)' }}>
              {termData.title}
            </h3>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--text-muted, #cbd5e1)' }}>
              {termData.body}
            </p>
            {termData.example && (
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 12px', borderRadius: '8px', borderLeft: '3px solid var(--crear-gold, #ffb703)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--crear-gold, #ffb703)', display: 'block', marginBottom: '2px' }}>
                  EJEMPLO DE APLICACIÓN:
                </span>
                <span style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-main, #f1f5f9)' }}>
                  "{termData.example}"
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
