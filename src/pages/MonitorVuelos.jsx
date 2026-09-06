import { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';

const VUELOS_EJEMPLO = [
  {
    id: 'vuelo-001',
    numeroVuelo: 'LA 1429',
    aerolinea: 'LATAM Airlines',
    callsign: 'LA1429',
    reserva: 'JYUAGO',
    origen: 'LIM',
    origenNombre: 'Lima',
    destino: 'GYE',
    destinoNombre: 'Guayaquil',
    fechaVuelo: '2026-09-06T12:30:00',
    horaLlegada: '2026-09-06T14:45:00',
    duracion: '2h 15m',
    tipoCabina: 'Directo',
    entrenadores: ['MARIA PATINO GALARRAGA', 'JULIO NARVAEZ MORA', 'JERRY NOLE CONTRERAS', 'DIEGO BRAVO FIGUEROA'],
    estado: 'confirmado',
    verificado: true,
    recojo: 'Puerta de Llegadas Internacionales — Aeropuerto José Joaquín de Olmedo',
    hotel: 'Hotel Jose Antonio Deluxe (Calle Bellavista 133, Miraflores)',
    horaEstimadaChofer: '30 min posteriores al aterrizaje',
    whatsappChofer: '+51999999999',
    sede: 'guayaquil',
    notas: ''
  },
  {
    id: 'vuelo-002',
    numeroVuelo: 'AV 9385',
    aerolinea: 'Avianca',
    callsign: 'AV9385',
    reserva: 'KPQRT7',
    origen: 'BOG',
    origenNombre: 'Bogotá',
    destino: 'LIM',
    destinoNombre: 'Lima',
    fechaVuelo: '2026-09-07T08:15:00',
    horaLlegada: '2026-09-07T11:30:00',
    duracion: '3h 15m',
    tipoCabina: 'Directo',
    entrenadores: ['CARLOS ALDANA FUENTES', 'ANA LUCIA ROJAS'],
    estado: 'confirmado',
    verificado: false,
    recojo: 'Puerta de Llegadas — Aeropuerto Internacional Jorge Chávez',
    hotel: 'Hotel Marriott Lima (Malecón de la Reserva 615, Miraflores)',
    horaEstimadaChofer: '20 min posteriores al aterrizaje',
    whatsappChofer: '+51988888888',
    sede: 'lima',
    notas: 'Verificar con coordinador de Lima'
  },
  {
    id: 'vuelo-003',
    numeroVuelo: 'XL 5522',
    aerolinea: 'LATAM Ecuador',
    callsign: 'XL5522',
    reserva: 'TMNQW2',
    origen: 'GYE',
    origenNombre: 'Guayaquil',
    destino: 'UIO',
    destinoNombre: 'Quito',
    fechaVuelo: '2026-09-01T10:00:00',
    horaLlegada: '2026-09-01T11:05:00',
    duracion: '1h 05m',
    tipoCabina: 'Directo',
    entrenadores: ['ROBERTO SALAZAR MONTOYA', 'PATRICIA VEGA RIOS'],
    estado: 'completado',
    verificado: true,
    recojo: 'Puerta de Llegadas — Aeropuerto Mariscal Sucre',
    hotel: 'Hotel Wyndham Quito Airport',
    horaEstimadaChofer: '25 min posteriores al aterrizaje',
    whatsappChofer: '+593999999999',
    sede: 'quito',
    notas: ''
  }
];

export default function MonitorVuelos() {
  const { user } = useAuth();
  const userRole = user?.role || 'estudiante';
  const isSuper = userRole === 'superadmin' || userRole === 'direccion';

  const [tabEstado, setTabEstado] = useState('activos');
  const [sedeFiltro, setSedeFiltro] = useState(isSuper ? 'todas' : (user?.sede || 'todas'));
  const [busqueda, setBusqueda] = useState('');

  const vuelosFiltrados = useMemo(() => {
    const ahora = new Date();
    return VUELOS_EJEMPLO.filter(v => {
      if (sedeFiltro !== 'todas' && v.sede !== sedeFiltro) return false;
      if (!isSuper && user?.sede && v.sede !== user.sede) return false;

      const fechaLlegada = new Date(v.horaLlegada);
      const esPasado = fechaLlegada < ahora;
      if (tabEstado === 'activos' && esPasado) return false;
      if (tabEstado === 'pasados' && !esPasado) return false;

      if (busqueda) {
        const q = busqueda.toLowerCase();
        const matchNum = v.numeroVuelo.toLowerCase().includes(q);
        const matchAero = v.aerolinea.toLowerCase().includes(q);
        const matchTrainers = v.entrenadores.some(e => e.toLowerCase().includes(q));
        if (!matchNum && !matchAero && !matchTrainers) return false;
      }
      return true;
    });
  }, [tabEstado, sedeFiltro, busqueda, user, isSuper]);

  const SEDES_OPCIONES = [
    { id: 'todas', label: 'Todas las Sedes' },
    { id: 'lima', label: 'Lima' },
    { id: 'guayaquil', label: 'Guayaquil (GYE)' },
    { id: 'quito', label: 'Quito' },
    { id: 'cuenca', label: 'Cuenca' },
    { id: 'bogota', label: 'Bogotá' }
  ];

  return (
    <div className="animate-fade-in p-8" style={{ maxWidth: '1400px', margin: '0 auto', paddingBottom: '6rem' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.25rem' }}>
            <span style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
              SISTEMA DE DESPLIEGUE
            </span>
          </div>
          <h1 className="text-gold" style={{ fontSize: '2.4rem', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
            MONITOR DE VUELOS
          </h1>
          <p className="text-muted" style={{ fontSize: '1.05rem', margin: 0 }}>
            Supervisión logística de entrenadores de alto rendimiento.
          </p>
        </div>
      </header>

      <div className="glass-panel" style={{ padding: '1rem', marginBottom: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '8px', background: 'var(--bg-card)', padding: '4px', borderRadius: '8px' }}>
          {[
            { id: 'activos', label: '🟢 Activos / Próximos' },
            { id: 'pasados', label: '📁 Pasados' },
            { id: 'todos', label: '✈️ Todos' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTabEstado(t.id)}
              style={{ padding: '6px 12px', borderRadius: '6px', border: 'none', background: tabEstado === t.id ? 'rgba(255,255,255,0.1)' : 'transparent', color: tabEstado === t.id ? '#fff' : 'var(--text-muted)', cursor: 'pointer', fontWeight: tabEstado === t.id ? 600 : 400 }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: 1, minWidth: '300px', justifyContent: 'flex-end' }}>
          {isSuper && (
            <select
              value={sedeFiltro}
              onChange={(e) => setSedeFiltro(e.target.value)}
              style={{ padding: '8px 12px', borderRadius: '6px', background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {SEDES_OPCIONES.map(o => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          )}
          <div style={{ position: 'relative', width: '250px' }}>
            <input
              type="text"
              placeholder="Buscar vuelo..."
              value={busqueda}
              onChange={e => setBusqueda(e.target.value)}
              style={{ width: '100%', padding: '8px 12px 8px 32px', borderRadius: '6px', background: 'var(--bg-card)', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
          </div>
        </div>
      </div>

      {vuelosFiltrados.length === 0 ? (
        <div className="glass-panel text-center" style={{ padding: '4rem 2rem' }}>
          <h3 className="text-muted">No hay vuelos que coincidan con los filtros.</h3>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
          {vuelosFiltrados.map(vuelo => {
            const esPasado = new Date(vuelo.horaLlegada) < new Date();
            const colorEstado = esPasado ? '#64748b' : '#22c55e';
            return (
              <div key={vuelo.id} className="glass-panel" style={{ padding: 0, overflow: 'hidden', borderLeft: `4px solid ${colorEstado}` }}>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      ✈️ {vuelo.numeroVuelo}
                      {vuelo.verificado ? (
                        <span style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem' }}>✅ Verificado</span>
                      ) : (
                        <span style={{ background: 'rgba(245,158,11,0.15)', color: '#f59e0b', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem' }}>⏳ Pendiente</span>
                      )}
                    </h3>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{vuelo.aerolinea} • Res: {vuelo.reserva} • CS: {vuelo.callsign}</p>
                  </div>
                  <span style={{ color: colorEstado, fontSize: '0.85rem', fontWeight: 600 }}>
                    {esPasado ? 'Completado' : 'Confirmado'}
                  </span>
                </div>
                <div style={{ padding: '1rem' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '0.75rem', fontWeight: 800, color: 'var(--crear-gold)', letterSpacing: '0.05em' }}>ENTRENADORES A BORDO</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {vuelo.entrenadores.map((e, idx) => (
                        <span key={idx} style={{ background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>👤 {e}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <h2 style={{ margin: 0, color: '#38bdf8', fontSize: '1.8rem' }}>{vuelo.origen}</h2>
                      <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>{new Date(vuelo.fechaVuelo).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    </div>
                    <div style={{ flex: 1, padding: '0 1rem', textAlign: 'center' }}>
                      <p style={{ margin: '0 0 4px 0', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{vuelo.duracion} • {vuelo.tipoCabina}</p>
                      <div style={{ height: '2px', background: 'linear-gradient(90deg, rgba(56,189,248,0.5) 0%, rgba(250,204,21,0.5) 100%)', position: 'relative' }}>
                        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '14px' }}>✈️</span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <h2 style={{ margin: 0, color: '#facc15', fontSize: '1.8rem' }}>{vuelo.destino}</h2>
                      <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>{new Date(vuelo.horaLlegada).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <p style={{ margin: '0 0 8px' }}><strong>🚖 Recojo:</strong> {vuelo.recojo}</p>
                    <p style={{ margin: '0 0 8px' }}><strong>🏨 Hotel:</strong> {vuelo.hotel}</p>
                    <p style={{ margin: '0 0 16px' }}><strong>⏱️ Espera chofer:</strong> {vuelo.horaEstimadaChofer}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <button className="btn-secondary" style={{ padding: '8px', fontSize: '0.8rem', display: 'flex', justifyContent: 'center', gap: '6px' }} onClick={() => window.open(`https://www.flightradar24.com/${vuelo.callsign}`, '_blank')}>
                        <span>🔍</span> Radar
                      </button>
                      <button className="btn-primary" style={{ padding: '8px', fontSize: '0.8rem', display: 'flex', justifyContent: 'center', gap: '6px', background: '#22c55e', color: 'var(--text-main)', border: 'none' }} onClick={() => window.open(`https://wa.me/${vuelo.whatsappChofer.replace('+','')}`, '_blank')}>
                        <span>💬</span> Chofer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
