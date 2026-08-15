import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, getDocs, increment, arrayUnion, query, orderBy } from 'firebase/firestore';
import { getTotalLessonsCount, getTotalEvaluationsCount } from '../data/curriculum';

export const initializeUser = async (user) => {
  if (!user) return;
  const userRef = doc(db, 'users', user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
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
};

export const getUserProgress = async (uid) => {
  let progress = null;
  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);
    if (snap.exists()) {
      progress = snap.data().progress;
    }
  } catch (error) {
    console.warn("Firebase falló, recuperando de localStorage", error);
  }

  // Fallback a localStorage
  const localProgress = localStorage.getItem(`progress_${uid}`);
  if (localProgress) {
    const parsedLocal = JSON.parse(localProgress);
    // Merge preferenciando localStorage si tiene más avance
    if (!progress || (parsedLocal.globalPercentage > (progress.globalPercentage || 0))) {
      progress = parsedLocal;
    }
  }

  return progress;
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

export const updateTimeSpent = async (uid, additionalMinutes) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      'progress.totalTimeSpent': increment(additionalMinutes)
    });
  } catch (error) {
    console.warn("Firebase falló al actualizar tiempo de sesión", error);
  }
};

// --- AUDITORÍA DE SESIONES ---

export const startSession = async (uid, deviceInfo) => {
  try {
    const sessionsCol = collection(db, 'users', uid, 'sessions');
    const sessionRef = doc(sessionsCol);
    const now = new Date().toISOString();
    await setDoc(sessionRef, {
      sessionId: sessionRef.id,
      startedAt: now,
      lastActiveAt: now,
      device: deviceInfo || navigator.userAgent,
      durationMinutes: 0,
      history: []
    });
    return sessionRef.id;
  } catch (error) {
    console.warn("Error al iniciar sesión de auditoría", error);
    return null;
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
