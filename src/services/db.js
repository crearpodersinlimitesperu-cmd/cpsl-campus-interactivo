import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, getDocs, increment, arrayUnion, query, orderBy, addDoc, where, serverTimestamp } from 'firebase/firestore';
import { getTotalLessonsCount, getTotalEvaluationsCount } from '../data/curriculum';

export const initializeUser = async (user) => {
  if (!user) return;
  try {
    const userRef = doc(db, 'users', user.uid);
    const snap = await getDoc(userRef);

    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName || 'Usuario CPSL',
        email: user.email || '',
        photoURL: user.photoURL || '',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        role: 'student',
        progress: {
          globalPercentage: 0,
          lastVisitedModule: '/modulo/modulo1',
          completedModules: [],
          completedLessons: [],
          evaluationsPassed: []
        }
      });
    } else {
      // Update last login
      await updateDoc(userRef, {
        lastLogin: new Date().toISOString()
      });
    }
  } catch (error) {
    console.warn("Aviso: No se pudo sincronizar usuario en Firestore (continuando con almacenamiento local):", error);
    // Asegurar estructura base en localStorage
    const localKey = `progress_${user.uid}`;
    if (!localStorage.getItem(localKey)) {
      localStorage.setItem(localKey, JSON.stringify({
        globalPercentage: 0,
        lastVisitedModule: '/modulo/modulo1',
        completedModules: [],
        completedLessons: [],
        evaluationsPassed: []
      }));
    }
  }
};

export const getUserProgress = async (uid) => {
  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);
    if (snap.exists() && snap.data()?.progress) {
      return snap.data().progress;
    }
  } catch (error) {
    console.warn("Aviso: Firestore falló al obtener progreso, recuperando de respaldo local:", error);
  }

  // Respaldo resiliente en localStorage
  try {
    const local = localStorage.getItem(`progress_${uid}`);
    if (local) {
      return JSON.parse(local);
    }
  } catch (e) {
    console.warn("Error leyendo progreso de localStorage:", e);
  }

  return {
    globalPercentage: 0,
    lastVisitedModule: '/modulo/modulo1',
    completedModules: [],
    completedLessons: [],
    evaluationsPassed: []
  };
};

export const updateLastVisited = async (uid, route) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.lastVisitedModule': route
    });
  } catch (error) {
    console.warn("Firebase falló, guardando ruta en localStorage", error);
  }
  
  // Guardar en localStorage
  const localData = JSON.parse(localStorage.getItem(`progress_${uid}`) || '{}');
  localData.lastVisitedModule = route;
  localStorage.setItem(`progress_${uid}`, JSON.stringify(localData));
};

const calculateGlobalPercentage = (completedLessons, evaluationsPassed) => {
  const totalMilestones = getTotalLessonsCount() + getTotalEvaluationsCount(); 
  const currentMilestones = (completedLessons?.length || 0) + (evaluationsPassed?.length || 0);
  let globalPercentage = Math.round((currentMilestones / totalMilestones) * 100);
  return globalPercentage > 100 ? 100 : globalPercentage;
};

export const markLessonCompleted = async (uid, lessonId) => {
  const progress = await getUserProgress(uid) || {};
  let completedLessons = progress.completedLessons || [];
  let evaluationsPassed = progress.evaluationsPassed || [];
  
  if (completedLessons.includes(lessonId)) return;
  completedLessons.push(lessonId);
  
  const globalPercentage = calculateGlobalPercentage(completedLessons, evaluationsPassed);

  // Intentar guardar en Firebase
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.completedLessons': completedLessons,
      'progress.globalPercentage': globalPercentage
    });
  } catch (error) {
    console.warn("Firebase falló al guardar, progreso seguro en localStorage", error);
  }

  // Backup Inquebrantable en LocalStorage
  const newProgress = { completedLessons, evaluationsPassed, globalPercentage };
  const existingLocal = JSON.parse(localStorage.getItem(`progress_${uid}`) || '{}');
  localStorage.setItem(`progress_${uid}`, JSON.stringify({ ...existingLocal, ...newProgress }));
};

export const saveEvaluationResult = async (uid, moduleId, score, passed) => {
  const progress = await getUserProgress(uid) || {};
  let evaluationsPassed = progress.evaluationsPassed || [];
  let completedLessons = progress.completedLessons || [];

  if (passed && !evaluationsPassed.includes(moduleId)) {
    evaluationsPassed.push(moduleId);
  }
  
  const globalPercentage = calculateGlobalPercentage(completedLessons, evaluationsPassed);

  // Intentar guardar en Firebase
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.evaluationsPassed': evaluationsPassed,
      'progress.globalPercentage': globalPercentage
    });
  } catch (error) {
    console.warn("Firebase falló al guardar evaluación, guardando en localStorage", error);
  }

  // Backup Inquebrantable en LocalStorage
  const newProgress = { completedLessons, evaluationsPassed, globalPercentage };
  const existingLocal = JSON.parse(localStorage.getItem(`progress_${uid}`) || '{}');
  localStorage.setItem(`progress_${uid}`, JSON.stringify({ ...existingLocal, ...newProgress }));
};

export const getAllUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    console.error("Error fetching all users:", error);
    return [];
  }
};



// --- AUDITORÍA DE SESIONES Y RASTREO DE CONEXIÓN ---

export const fetchNetworkInfo = async () => {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      const data = await res.json();
      return {
        ip: data.ip || 'Desconocida',
        location: data.city && data.country_name ? `${data.city}, ${data.country_name}` : (data.country_name || 'Ubicación Segura')
      };
    }
  } catch (e) {
    try {
      const res2 = await fetch('https://api.ipify.org?format=json', { signal: AbortSignal.timeout(2000) });
      const data2 = await res2.json();
      return { ip: data2.ip || '127.0.0.1', location: 'Acceso Conectado' };
    } catch (e2) {}
  }
  return { ip: 'IP Directa', location: 'Conexión Segura' };
};

export const startSession = async (uid, deviceInfo) => {
  const fallbackId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  try {
    let netInfo = { ip: 'IP Directa', location: 'Conexión Segura' };
    try {
      netInfo = await fetchNetworkInfo();
    } catch (netErr) {
      console.warn("Aviso obteniendo IP:", netErr);
    }

    const sessionsCol = collection(db, 'users', uid, 'sessions');
    const sessionRef = doc(sessionsCol);
    const now = new Date().toISOString();
    await setDoc(sessionRef, {
      sessionId: sessionRef.id,
      startedAt: now,
      lastActiveAt: now,
      device: deviceInfo || navigator.userAgent,
      ip: netInfo.ip,
      location: netInfo.location,
      durationMinutes: 0,
      history: []
    });

    // Actualizar también en el perfil del usuario para acceso rápido
    try {
      const userRef = doc(db, 'users', uid);
      await updateDoc(userRef, {
        lastIp: netInfo.ip,
        lastLocation: netInfo.location,
        lastDevice: deviceInfo || navigator.userAgent
      });
    } catch (uErr) {}

    return sessionRef.id;
  } catch (error) {
    console.warn("Aviso: No se pudo registrar sesión en Firestore, utilizando sesión resiliente:", error);
    return fallbackId;
  }
};

export const logSessionRoute = async (uid, sessionId, currentRoute) => {
  if (!sessionId) return;
  try {
    const sessionRef = doc(db, 'users', uid, 'sessions', sessionId);
    const now = new Date().toISOString();
    const historyEntry = { type: 'route', path: currentRoute, timestamp: now };
    
    await updateDoc(sessionRef, {
      lastActiveAt: now,
      history: arrayUnion(historyEntry)
    });
  } catch (error) {
    console.warn("Error logueando ruta de sesión", error);
  }
};

export const logUserAction = async (uid, sessionId, action, details = "") => {
  if (!sessionId) return;
  try {
    const sessionRef = doc(db, 'users', uid, 'sessions', sessionId);
    const now = new Date().toISOString();
    const historyEntry = { type: 'action', action, details, timestamp: now };
    
    await updateDoc(sessionRef, {
      lastActiveAt: now,
      history: arrayUnion(historyEntry)
    });
  } catch (error) {
    console.warn("Error logueando acción del usuario", error);
  }
};

export const updateSessionHeartbeat = async (uid, sessionId) => {
  if (!sessionId) return;
  try {
    const sessionRef = doc(db, 'users', uid, 'sessions', sessionId);
    const now = new Date().toISOString();
    
    await updateDoc(sessionRef, {
      lastActiveAt: now,
      durationMinutes: increment(5)
    });
    
    // Mantenemos el acumulado global funcionando
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.totalTimeSpent': increment(5)
    });
  } catch (error) {
    console.warn("Error actualizando latido de sesión", error);
  }
};

export const getUserSessions = async (uid) => {
  try {
    const q = query(collection(db, 'users', uid, 'sessions'), orderBy('startedAt', 'desc'));
    const snap = await getDocs(q);
    const sessions = [];
    snap.forEach(docSnap => sessions.push(docSnap.data()));
    return sessions;
  } catch (error) {
    console.error("Error obteniendo el historial de sesiones:", error);
    return [];
  }
};

// =====================================
// PERFIL DE USUARIO — ROLES Y PERMISOS
// =====================================

export const getUserProfile = async (uid) => {
  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      const data = snap.data();
      return {
        role: data.role || 'estudiante',
        sede: data.sede || null,
        isSuperAdmin: data.isSuperAdmin || false,
        displayName: data.displayName,
        email: data.email,
        photoURL: data.photoURL,
      };
    }
  } catch (e) {
    console.warn('Error obteniendo perfil de usuario:', e);
  }
  return { role: 'estudiante', sede: null, isSuperAdmin: false };
};

export const updateUserRole = async (uid, role, sede = null) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, { role, sede: sede || null });
    return true;
  } catch (e) {
    console.error('Error actualizando rol:', e);
    return false;
  }
};


// =====================================
// SISTEMA DE TAREAS CON ASIGNACIÓN
// =====================================

export const getTareasAsignadas = async (uid) => {
  try {
    const { where } = await import('firebase/firestore');
    const q = query(
      collection(db, 'tasks'),
      where('asignadoA', '==', uid),
      orderBy('creadoAt', 'desc')
    );
    const snap = await getDocs(q);
    const tareas = [];
    snap.forEach(d => tareas.push({ id: d.id, ...d.data() }));
    return tareas;
  } catch (e) {
    console.error('Error obteniendo tareas:', e);
    return [];
  }
};

export const getTareasAsignador = async (uid) => {
  try {
    const { where } = await import('firebase/firestore');
    const q = query(
      collection(db, 'tasks'),
      where('asignadoPorUid', '==', uid),
      orderBy('creadoAt', 'desc')
    );
    const snap = await getDocs(q);
    const tareas = [];
    snap.forEach(d => tareas.push({ id: d.id, ...d.data() }));
    return tareas;
  } catch (e) {
    console.error('Error obteniendo tareas asignadas por mí:', e);
    return [];
  }
};


// =====================================
// MONITOR DE VUELOS
// =====================================

export const getVuelos = async () => {
  try {
    const q = query(collection(db, 'vuelos'), orderBy('fechaVuelo', 'desc'));
    const snap = await getDocs(q);
    const vuelos = [];
    snap.forEach(d => vuelos.push({ id: d.id, ...d.data() }));
    return vuelos;
  } catch (e) {
    console.error('Error obteniendo vuelos:', e);
    return [];
  }
};

export const crearVuelo = async (vueloData) => {
  try {
    const { addDoc } = await import('firebase/firestore');
    const vuelosCol = collection(db, 'vuelos');
    const ref = await addDoc(vuelosCol, {
      ...vueloData,
      verificado: false,
      creadoAt: new Date().toISOString(),
    });
    return ref.id;
  } catch (e) {
    console.error('Error creando vuelo:', e);
    return null;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// MÓDULO DE TAREAS ASIGNADAS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Crea una nueva tarea asignada en Firestore.
 * @param {Object} data - { titulo, descripcion, asignadoAEmail, asignadoPorUid, asignadoPorEmail, asignadoPorNombre, deadline, prioridad }
 * @returns {string} ID del documento creado
 */
export const crearTarea = async (data) => {
  try {
    const ref = await addDoc(collection(db, 'tareas'), {
      titulo: data.titulo || '',
      descripcion: data.descripcion || '',
      asignadoAEmail: (data.asignadoAEmail || '').toLowerCase().trim(),
      asignadoPorUid: data.asignadoPorUid || '',
      asignadoPorEmail: data.asignadoPorEmail || '',
      asignadoPorNombre: data.asignadoPorNombre || '',
      deadline: data.deadline || null,
      prioridad: data.prioridad || 'media',
      estado: 'pendiente',
      progreso: 0,
      comentarios: [],
      creadoEn: serverTimestamp(),
      actualizadoEn: serverTimestamp(),
    });
    return ref.id;
  } catch (error) {
    console.error('Error creando tarea en Firestore:', error);
    throw error;
  }
};

/**
 * Obtiene las tareas donde el usuario es el asignado o el asignador.
 * @param {string} userEmail - Email del usuario autenticado
 * @param {string} userUid - UID del usuario autenticado
 * @returns {{ asignadas: Array, asignadas_por_mi: Array }}
 */
export const obtenerTareasUsuario = async (userEmail, userUid) => {
  const result = { asignadas: [], asignadas_por_mi: [] };
  try {
    const emailLower = (userEmail || '').toLowerCase().trim();

    // Tareas donde yo soy el asignado
    const q1 = query(
      collection(db, 'tareas'),
      where('asignadoAEmail', '==', emailLower)
    );
    const snap1 = await getDocs(q1);
    snap1.forEach(docSnap => result.asignadas.push({ id: docSnap.id, ...docSnap.data() }));

    // Tareas que yo asigné
    const q2 = query(
      collection(db, 'tareas'),
      where('asignadoPorUid', '==', userUid)
    );
    const snap2 = await getDocs(q2);
    snap2.forEach(docSnap => result.asignadas_por_mi.push({ id: docSnap.id, ...docSnap.data() }));
  } catch (error) {
    console.warn('Error obteniendo tareas de Firestore:', error);
  }
  return result;
};

/**
 * Actualiza el progreso y estado de una tarea existente.
 * @param {string} taskId - ID del documento en Firestore
 * @param {number} progreso - Valor de 0 a 100
 * @param {string} estado - 'pendiente' | 'en_progreso' | 'completada'
 * @param {string} [comentario] - Texto opcional del asignado
 */
export const actualizarProgresoTarea = async (taskId, progreso, estado, comentario = '') => {
  try {
    const ref = doc(db, 'tareas', taskId);
    const updateData = {
      progreso: Math.min(100, Math.max(0, Number(progreso))),
      estado,
      actualizadoEn: serverTimestamp(),
    };
    if (comentario && comentario.trim()) {
      updateData.comentarios = arrayUnion({
        texto: comentario.trim(),
        timestamp: new Date().toISOString(),
        estado,
        progreso,
      });
    }
    await updateDoc(ref, updateData);
  } catch (error) {
    console.error('Error actualizando progreso de tarea:', error);
    throw error;
  }
};
