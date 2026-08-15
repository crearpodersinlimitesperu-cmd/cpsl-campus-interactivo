import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="fade-in p-8 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
      <h1 className="text-gold" style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>No encontramos esta página</h2>
      <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '400px' }}>
        Parece que te has desviado de tu ruta de entrenamiento. La página que buscas no existe o ha sido movida.
      </p>
      <Link to="/dashboard" className="btn-primary" style={{ textDecoration: 'none' }}>
        Volver al Dashboard
      </Link>
    </div>
  );
}
