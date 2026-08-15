import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RutaFormacion() {
  const { user } = useAuth();
  
  const modulos = [
    {
      id: 'modulo1',
      titulo: 'Módulo 1: Fundamentos Teóricos',
      descripcion: 'Bases conceptuales del Coaching de Alto Rendimiento y Transformación Cuántica.',
      estado: 'disponible',
      duracion: '2 horas'
    },
    {
      id: 'modulo2',
      titulo: 'Módulo 2: Arquitectura de Intervención Clínica',
      descripcion: 'Estructura estándar de sesión y repertorio de técnicas conversacionales.',
      estado: 'disponible',
      duracion: '3 horas'
    },
    {
      id: 'modulo3',
      titulo: 'Módulo 3: Maestría en Groundings',
      descripcion: 'Metodología para el diseño y aplicación de protocolos somáticos.',
      estado: 'disponible',
      duracion: '2 horas'
    },
    {
      id: 'modulo4',
      titulo: 'Módulo 4: Diseño de Programas y Prevención',
      descripcion: 'Arquitectura de entrenamiento de 6 semanas y protocolos de mitigación de desvíos.',
      estado: 'disponible',
      duracion: '3 horas'
    },
    {
      id: 'modulo5',
      titulo: 'Módulo 5: Fundamentos Filosóficos del Ser',
      descripcion: 'Raíces existenciales (Heidegger, Sartre, Kierkegaard) aplicadas al Liderazgo Auténtico.',
      estado: 'disponible',
      duracion: '3 Semanas'
    },
    {
      id: 'modulo6',
      titulo: 'Módulo 6: Ontología del Lenguaje y Realidad',
      descripcion: 'El lenguaje como creador. Ontología, Logoterapia y la Búsqueda de Sentido.',
      estado: 'disponible',
      duracion: '2 Semanas'
    },
    {
      id: 'modulo7',
      titulo: 'Módulo 7: Liderazgo de Transformación Cuántica',
      descripcion: 'Salto cuántico del líder, quiebres ontológicos y el mapa de enrolamiento.',
      estado: 'disponible',
      duracion: '6 Semanas'
    },
    {
      id: 'modulo8',
      titulo: 'Módulo 8: Integración y Legado Existencial',
      descripcion: 'El Manifiesto del Líder Cuántico-Existencial y el Plan de Expansión.',
      estado: 'disponible',
      duracion: '1 Semana'
    },
    {
      id: 'modulo9',
      titulo: 'Módulo 9: Guía Clínica: Parálisis y Sobreanálisis',
      descripcion: 'Especialización en desbloqueo cognitivo, interrupción de parálisis y acción masiva.',
      estado: 'disponible',
      duracion: '6 Semanas'
    }
  ];

  return (
    <div className="fade-in">
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
        <h1 style={{fontSize: '2.5rem', margin: 0}}>Ruta de Formación</h1>
      </div>
      
      <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '3rem'}}>
        Este es el mapa de tu viaje de aprendizaje. Completa cada módulo para desbloquear el siguiente.
      </p>

      <div className="timeline" style={{position: 'relative', paddingLeft: '2rem'}}>
        {/* Línea vertical conectora */}
        <div style={{position: 'absolute', left: '0', top: '10px', bottom: '0', width: '4px', background: 'rgba(255,183,3,0.2)', borderRadius: '2px'}}></div>

        {modulos.map((mod, index) => (
          <div key={mod.id} style={{position: 'relative', marginBottom: '3rem'}}>
            {/* Punto en la línea */}
            <div style={{
              position: 'absolute',
              left: '-2.55rem',
              top: '5px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: mod.estado === 'bloqueado' ? 'var(--bg-card)' : 'var(--crear-gold)',
              border: `4px solid ${mod.estado === 'bloqueado' ? 'rgba(255,255,255,0.2)' : 'var(--bg-dark)'}`,
              boxShadow: mod.estado === 'bloqueado' ? 'none' : '0 0 10px rgba(255,183,3,0.5)',
              zIndex: 2
            }}></div>

            <div className={`glass-panel p-6 ${mod.estado === 'bloqueado' ? 'opacity-50' : ''}`} style={{
              opacity: mod.estado === 'bloqueado' ? 0.6 : 1,
              transition: 'all 0.3s ease',
              borderLeft: mod.estado === 'disponible' ? '4px solid var(--crear-gold)' : ''
            }}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem'}}>
                    <h2 style={{margin: 0}} className={mod.estado === 'bloqueado' ? 'text-muted' : 'text-gold'}>
                      {mod.titulo}
                    </h2>
                    {mod.estado === 'bloqueado' && (
                      <span style={{background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem'}}>Bloqueado</span>
                    )}
                  </div>
                  <p className="text-muted" style={{marginBottom: '1.5rem'}}>{mod.descripcion}</p>
                  
                  <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <span style={{fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)'}}>⏱️ {mod.duracion}</span>
                  </div>
                </div>

                {mod.estado === 'disponible' ? (
                  <Link to={`/modulo/${mod.id}`} className="btn-primary" style={{textDecoration: 'none'}}>
                    Iniciar Módulo
                  </Link>
                ) : mod.estado === 'bloqueado' ? (
                  <button className="btn-secondary" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>
                    Bloqueado
                  </button>
                ) : (
                  <button className="btn-secondary" style={{color: '#34A853', borderColor: '#34A853'}}>
                    Completado ✓
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
