import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, getDocs, increment, arrayUnion, query, orderBy } from 'firebase/firestore';
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
