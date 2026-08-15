import React from 'react';
import { useUI } from '../context/UIContext';

export default function Glosario() {
  const { isFocusMode, toggleFocusMode } = useUI();

  const terminos = [
    {
      termino: "Grounding",
      definicion: "Intervención psico-fisiológica breve (30-180 segundos) diseñada para modular la reactividad del sistema nervioso autónomo y restablecer la homeostasis. Ayuda a recuperar la claridad cognitiva, pero no sustituye el proceso analítico ni constituye una intervención psicoterapéutica profunda."
    },
    {
      termino: "Quiebre (Ontológico)",
      definicion: "Declaración consciente de que el flujo de transparencia (la rutina automática) se ha interrumpido. No es algo negativo per se, sino un espacio de diseño donde una nueva posibilidad puede ser declarada. Un quiebre siempre vive en la interpretación del observador, no en el hecho biológico o físico."
    },
    {
      termino: "Futuro Imposible",
      definicion: "Visión inspiradora que proyecta una aspiración que hoy parece inalcanzable. Funciona como un faro de dirección y un habilitador de saltos discontinuos, no como un KPI rígido o una métrica operativa de éxito."
    },
    {
      termino: "El Observador",
      definicion: "La manera particular en la que una persona (o sistema) percibe el mundo, condicionada por sus creencias, biología, historia y lenguaje. Alterar al observador significa cambiar el rango de acciones posibles que esa persona puede ver y ejecutar."
    },
    {
      termino: "Responsabilidad Radical",
      definicion: "Postura de liderazgo donde se asume agencia total sobre las propias respuestas, interpretaciones y acciones. NO significa que la persona sea culpable de lo que le ocurre, ni ignora la existencia de barreras sistémicas o clínicas; significa adueñarse de la capacidad de respuesta (habilidad para responder)."
    },
    {
      termino: "Enrolamiento",
      definicion: "El proceso de invitar a otros a participar en un futuro imposible de manera libre y comprometida. No es persuadir, convencer ni manipular desde la carencia, sino crear un contexto de posibilidad compartida donde el otro elige expandirse."
    },
    {
      termino: "Coaching de Alto Rendimiento",
      definicion: "Marco heurístico del programa que utiliza los Principios de Posibilidad (salto discontinuo, observador generativo) para explicar cambios no-lineales en el comportamiento humano."
    }
  ];

  return (
    <div className="module-container animate-fade-in" style={{maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem'}}>
      <header style={{marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <p className="text-gold uppercase" style={{fontSize: '0.9rem', marginBottom: '0', fontWeight: 'bold'}}>
            Referencia
          </p>
          
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
        
        <h1 style={{fontSize: '2.5rem', margin: 0}}>Glosario de Conceptos Centrales</h1>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          Definiciones estandarizadas para mantener la coherencia ontológica y la precisión ética a lo largo de todo el programa de formación.
        </p>
      </header>

      <div className="grid-1-col" style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
        {terminos.map((item, index) => (
          <div key={index} className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--crear-gold)' }}>
            <h3 className="text-gold" style={{ marginTop: 0, marginBottom: '0.8rem', fontSize: '1.3rem' }}>
              {item.termino}
            </h3>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
              {item.definicion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
