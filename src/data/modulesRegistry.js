import { curriculum } from './curriculum';
import { nodusStaffModules } from './nodusStaffCurriculum';

export const modulesRegistry = {
  ...curriculum.reduce((acc, modulo) => {
    acc[modulo.id] = modulo.lecciones;
    return acc;
  }, {}),
  ...nodusStaffModules.reduce((acc, modulo) => {
    acc[modulo.id] = modulo.lecciones;
    return acc;
  }, {})
};

