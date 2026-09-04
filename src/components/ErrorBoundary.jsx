import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary atrapó un error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#fff', background: '#0a0a0a', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="text-gold" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Algo salió mal</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>La plataforma ha encontrado un error inesperado.</p>
          <button 
            className="btn-primary" 
            onClick={() => window.location.replace('/')}
          >
            Volver al inicio
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
