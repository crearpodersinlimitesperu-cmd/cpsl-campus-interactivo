import { curriculum } from './curriculum';

export const modulesRegistry = curriculum.reduce((acc, modulo) => {
  acc[modulo.id] = modulo.lecciones;
  return acc;
}, {});
