import React, { useState } from 'react';
import { useUI } from '../context/UIContext';
import GlossaryTerm, { GLOSSARY_TERMS } from '../components/GlossaryTerm';

export default function Glosario() {
  const { isFocusMode, toggleFocusMode } = useUI();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const terminosOficiales = [
    {
      key: 'nodus',
      termino: "Plataforma Nodus (Nodus System)",
      categoria: "Sistemas & Arquitectura",
      definicion: "Infraestructura tecnológica y base de datos relacional de la Academia. Registra la trazabilidad de interacciones, estados de rigor, telemetría de sesiones y rendición de cuentas operativa en tiempo real.",
      ejemplo: "Consulta el centro de comando de Nodus para auditar la tasa de cumplimiento del líder.",
      tags: ["Trazabilidad", "Métricas", "Base de Datos"]
    },
    {
      key: 'imo',
      termino: "IMO (Interventor de Máximo Óptimo / Human Enroller)",
      categoria: "Conducta & Rigor",
      definicion: "Líder o facilitador que entrena la postura ontológica y la responsabilidad radical. Opera desde la empatía quirúrgica y el rigor innegociable, sin involucrarse en el drama ni validar justificaciones del participante.",
      ejemplo: "El IMO sostiene el acuerdo sin caer en la simpatía cómplice del observador.",
      tags: ["Liderazgo", "Facilitación", "Rigor"]
    },
    {
      key: 'causa os',
      termino: "Causa OS (Operating System of Ultimate Responsibility)",
      categoria: "Conducta & Rigor",
      definicion: "Sistema Operativo Ontológico de Responsabilidad Radical. Marco donde el líder se asume como causa generativa absoluta de sus resultados, erradicando el victimismo, la queja reactiva y la delegación de agencia.",
      ejemplo: "Al activar Causa OS, el líder sustituye el '¿por qué me pasa esto?' por '¿qué creé o toleré aquí?'.",
      tags: ["Ontología", "Agencia", "Responsabilidad"]
    },
    {
      key: 'compliance clearance',
      termino: "Compliance Clearance (Luz Verde / Estado Aprobado)",
      categoria: "Sistemas & Arquitectura",
      definicion: "Estado oficial de cumplimiento de acuerdos, lecciones y estándares operativos que valida la integridad de la cuenta y habilita el acceso total a las siguientes fases y privilegios.",
      ejemplo: "Tu perfil cuenta con Compliance Clearance tras superar la auditoría de rigor.",
      tags: ["Integridad", "Aprobado", "Estatus"]
    },
    {
      key: 'action required',
      termino: "Action Required (Alerta Roja / Acceso Restringido)",
      categoria: "Sistemas & Arquitectura",
      definicion: "Estado de bloqueo preventivo o alerta operativa ante un quiebre de estándares o acuerdo pendiente de subsanar en la plataforma.",
      ejemplo: "Estado en Action Required: Es indispensable completar la sesión de calibración para continuar.",
      tags: ["Alerta", "Bloqueo", "Intervención"]
    },
    {
      key: 'integrity deviation',
      termino: "Integrity Deviation (Desviación de Integridad)",
      categoria: "Conducta & Rigor",
      definicion: "Desalineación consciente o inconsciente entre la palabra empeñada y lo ejecutado en la realidad. Se subsana mediante declaración inmediata y diseño de nuevas acciones correctivas.",
      ejemplo: "Se registró una Integrity Deviation por no entregar el reporte a las 08:00; toca restaurar el acuerdo.",
      tags: ["Acuerdos", "Compromiso", "Restauración"]
    },
    {
      key: 'state calibration',
      termino: "State Calibration (Calibración de Estado)",
      categoria: "Conducta & Rigor",
      definicion: "Intervención breve de neuro-atención y presencia somática (1 a 3 minutos) diseñada para regular la activación del sistema nervioso y enfocar el neocórtex antes de una conversación o ejecución crítica.",
      ejemplo: "Realizamos una State Calibration de 2 minutos para reducir la activación de estrés antes de la llamada.",
      tags: ["Neurociencia", "Enfoque", "Somática"]
    },
    {
      key: 'moonshot kpi',
      termino: "Moonshot KPI (Objetivo de Estiramiento Extraordinario)",
      categoria: "Neuromarketing & Valor",
      definicion: "Métrica de estiramiento audaz que rompe la inercia del observador y demanda una nueva capacidad de respuesta, eliminando el conformismo operativo.",
      ejemplo: "Nuestro Moonshot KPI es incrementar la tasa de retención un 40% este trimestre.",
      tags: ["Métricas", "Visión", "Objetivos"]
    },
    {
      key: 'ecuacion de valor',
      termino: "Ecuación de Valor (The Value Equation - Alex Hormozi)",
      categoria: "Neuromarketing & Valor",
      definicion: "Fórmula de percepción de valor: (Resultado Soñado × Certeza Percibida) / (Retraso de Tiempo × Esfuerzo y Sacrificio). El liderazgo efectivo minimiza la fricción y el tiempo para maximizar el impacto.",
      ejemplo: "Para maximizar el valor de la sesión, reduce la fricción y el tiempo hacia la primera victoria tangible del cliente.",
      tags: ["Estrategia", "Economía Conductual", "Hormozi"]
    },
    {
      key: 'perro guardian',
      termino: "Amansar al Perro Guardián (Calming the Reptilian Brain)",
      categoria: "Neuromarketing & Valor",
      definicion: "Principio de neuro-comunicación para desactivar la reactividad defensiva de la amígdala (cerebro reptiliano) mediante escucha limpia, validación no complaciente y seguridad psicológica.",
      ejemplo: "No discutas con su reactividad inicial; valida su experiencia para amansar al perro guardián antes de reencuadrar.",
      tags: ["Neuromarketing", "Escucha Activa", "Amígdala"]
    }
  ];

  const categorias = ['Todas', 'Conducta & Rigor', 'Sistemas & Arquitectura', 'Neuromarketing & Valor'];

  const terminosFiltrados = terminosOficiales.filter(item => {
    const coincideCat = selectedCategory === 'Todas' || item.categoria === selectedCategory;
    const coincideBusqueda = item.termino.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.definicion.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.ejemplo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return coincideCat && coincideBusqueda;
  });

  return (
    <div className="module-container animate-fade-in" style={{maxWidth: '960px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <span style={{
              background: 'rgba(14, 165, 233, 0.15)',
              color: '#38bdf8',
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '4px 10px',
              borderRadius: '20px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Estándar de Marca Blanca V2.0
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Diccionario Operativo de Alto Rendimiento
            </span>
          </div>
          
          {!isFocusMode && (
            <button 
              onClick={toggleFocusMode}
              className="btn-secondary"
              aria-label="Activar Modo Enfoque"
              style={{fontSize: '0.8rem', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '6px'}}
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
              Modo Enfoque
            </button>
          )}
        </div>
        
        <h1 style={{fontSize: '2.5rem', margin: 0, letterSpacing: '-0.02em'}}>
          Glosario de Alto Rendimiento e Ingeniería Conductual
        </h1>
        <p className="text-muted" style={{ fontSize: '1.05rem', margin: 0, lineHeight: 1.5 }}>
          Vocabulario de precisión ontológica, Causa OS y Neuromarketing Ético. Diseñado para eliminar la ambigüedad, evitar el sesgo de autoayuda y sostener un estándar innegociable de rigor y rendición de cuentas.
        </p>

        {/* Barra de Búsqueda y Filtros de Categoría */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <input 
              type="text"
              placeholder="Buscar distinción, concepto, tag o ejemplo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'var(--text-main)',
                fontSize: '0.95rem',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--crear-blue, #00d4ff)' : 'rgba(255,255,255,0.1)',
                  background: selectedCategory === cat ? 'rgba(0, 212, 255, 0.15)' : 'transparent',
                  color: selectedCategory === cat ? 'var(--crear-blue, #00d4ff)' : 'var(--text-muted)',
                  fontSize: '0.8rem',
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Listado de Distinciones */}
      <div style={{ display: 'grid', gap: '1.25rem', marginTop: '1rem' }}>
        {terminosFiltrados.length === 0 ? (
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <p className="text-muted">No se encontraron términos que coincidan con la búsqueda.</p>
          </div>
        ) : (
          terminosFiltrados.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel" 
              style={{ 
                padding: '1.5rem', 
                borderLeft: '4px solid #0ea5e9',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                transition: 'transform 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-main)' }}>
                  <GlossaryTerm term={item.key}>
                    {item.termino}
                  </GlossaryTerm>
                </h3>
                <span style={{
                  fontSize: '0.72rem',
                  color: '#94a3b8',
                  background: 'rgba(255,255,255,0.05)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                  {item.categoria}
                </span>
              </div>

              <p style={{ color: 'var(--text-main)', fontSize: '0.98rem', lineHeight: '1.6', margin: 0 }}>
                {item.definicion}
              </p>

              {item.ejemplo && (
                <div style={{ 
                  background: 'rgba(14, 165, 233, 0.06)', 
                  padding: '10px 14px', 
                  borderRadius: '8px', 
                  borderLeft: '3px solid #38bdf8',
                  marginTop: '0.25rem'
                }}>
                  <strong style={{ fontSize: '0.75rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '2px' }}>
                    Aplicación Operativa en Simulación:
                  </strong>
                  <span style={{ fontSize: '0.88rem', fontStyle: 'italic', color: 'var(--text-main)' }}>
                    "{item.ejemplo}"
                  </span>
                </div>
              )}

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                {item.tags.map((t, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    background: 'rgba(255,255,255,0.03)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}>
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
