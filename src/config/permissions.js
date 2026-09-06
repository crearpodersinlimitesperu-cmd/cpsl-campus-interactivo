// src/config/permissions.js
// Sistema de Roles y Permisos Granulares — CREAR PODER SIN LÍMITES

export const ROLES = {
  SUPER_ADMIN: 'superadmin',
  DIRECCION: 'direccion',
  GERENTE: 'gerente',
  COORDINADOR_MAESTRIA: 'coordinador_maestria',
  COORDINADOR: 'coordinador',
  ESTUDIANTE: 'estudiante',
};

export const SEDES = [
  { id: 'lima', label: 'Lima' },
  { id: 'guayaquil', label: 'Guayaquil (GYE)' },
  { id: 'quito', label: 'Quito' },
  { id: 'cuenca', label: 'Cuenca' },
  { id: 'bogota', label: 'Bogotá' },
  { id: 'medellin', label: 'Medellín' },
  { id: 'mexico', label: 'Ciudad de México' },
];

export const PERMISOS = {
  VER_KPIS_GLOBALES:    ['superadmin', 'direccion'],
  VER_KPIS_SEDE:        ['gerente'],
  VER_KPIS_PROPIOS:     ['coordinador', 'coordinador_maestria'],
  VER_PORTAFOLIO_PMO:   ['superadmin', 'direccion'],
  VER_OKRS_CASCADE:     ['superadmin', 'direccion'],
  VER_EMBUDO:           ['superadmin', 'direccion', 'gerente'],
  VER_MONITOR_VUELOS:   ['superadmin', 'direccion', 'gerente'],
  ACCESO_ADMIN:         ['superadmin', 'direccion', 'gerente', 'coordinador_maestria', 'coordinador'],
  CREAR_TAREAS:         ['superadmin', 'direccion', 'gerente', 'coordinador_maestria', 'coordinador'],
  VER_TAREAS_EQUIPO:    ['superadmin', 'direccion', 'gerente', 'coordinador_maestria', 'coordinador'],
};

export const tienePermiso = (role, permiso) =>
  (PERMISOS[permiso] || []).includes(role);

export const esSupervisor = (role) =>
  ['superadmin', 'direccion', 'gerente', 'coordinador_maestria', 'coordinador'].includes(role);

export const LABEL_ROLES = {
  superadmin:             'Super Admin',
  direccion:              'Dirección',
  gerente:                'Gerente de Sede',
  coordinador_maestria:   'Coordinador de Maestría',
  coordinador:            'Coordinador',
  estudiante:             'Estudiante / Líder',
};

export const SUPER_ADMIN_EMAILS = [
  'jose.sanchez@crearpsl.net',
];
