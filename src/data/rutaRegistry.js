import { curriculum } from './curriculum';

export const rutaModulos = curriculum.map(m => ({
  id: m.id,
  titulo: m.titulo,
  descripcion: m.descripcion,
  estado: m.estado,
  duracion: `${m.duracionSemanas} Semana${m.duracionSemanas > 1 ? 's' : ''}`
}));
