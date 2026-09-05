import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { themeMode, setThemeMode } = useTheme();

  return (
    <div 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.35rem', 
        background: 'var(--bg-card)', 
        padding: '0.3rem 0.45rem', 
        borderRadius: '24px', 
        border: '1px solid var(--border-subtle, rgba(255, 255, 255, 0.12))',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)'
      }}
      role="group"
      aria-label="Selector de Tema Día, Noche y Auto"
    >
      {/* Botón Día (Sun) */}
      <button
        type="button"
        onClick={() => setThemeMode('light')}
        style={{
          background: themeMode === 'light' ? 'var(--crear-gold, #ffb703)' : 'transparent',
          color: themeMode === 'light' ? '#000000' : 'var(--text-muted, #9ca3af)',
          border: 'none',
          padding: '0.4rem',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: themeMode === 'light' ? 'scale(1.08)' : 'scale(1)'
        }}
        title="Modo Día (Luminoso)"
        aria-label="Activar Modo Día"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </button>

      {/* Botón Noche (Moon) */}
      <button
        type="button"
        onClick={() => setThemeMode('dark')}
        style={{
          background: themeMode === 'dark' ? 'var(--crear-blue, #00d4ff)' : 'transparent',
          color: themeMode === 'dark' ? '#000000' : 'var(--text-muted, #9ca3af)',
          border: 'none',
          padding: '0.4rem',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: themeMode === 'dark' ? 'scale(1.08)' : 'scale(1)'
        }}
        title="Modo Noche (Oscuro)"
        aria-label="Activar Modo Noche"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </button>

      {/* Botón Auto (Monitor) */}
      <button
        type="button"
        onClick={() => setThemeMode('auto')}
        style={{
          background: themeMode === 'auto' ? 'rgba(255, 183, 3, 0.2)' : 'transparent',
          color: themeMode === 'auto' ? 'var(--crear-gold, #ffb703)' : 'var(--text-muted, #9ca3af)',
          border: 'none',
          padding: '0.4rem',
          borderRadius: '50%',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: themeMode === 'auto' ? 'scale(1.08)' : 'scale(1)'
        }}
        title="Modo Automático (Solar y Sistema)"
        aria-label="Activar Modo Automático"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      </button>
    </div>
  );
}
