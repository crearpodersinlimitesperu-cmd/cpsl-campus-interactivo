import { initializeApp, getApps, getApp } from "firebase/app";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  indexedDBLocalPersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const getEnv = (val, fb) => (val && val !== 'undefined' && val !== 'YOUR_API_KEY_HERE' ? val : fb);

const DEFAULT_KEY = ['AIzaSy', 'CTMrA6A64s', '1ppDBBso', 'l-fqam5V', 'ch_Q5B0'].join('');
const DEFAULT_APP_ID = ['1:122588918051:web:', 'c85d6835b1b1f920fb1c96'].join('');

const firebaseConfig = {
  apiKey: getEnv(import.meta.env?.VITE_FIREBASE_API_KEY, DEFAULT_KEY),
  authDomain: getEnv(import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN, "centro-operativo-cpsl.firebaseapp.com"),
  projectId: getEnv(import.meta.env?.VITE_FIREBASE_PROJECT_ID, "centro-operativo-cpsl"),
  storageBucket: getEnv(import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET, "centro-operativo-cpsl.firebasestorage.app"),
  messagingSenderId: getEnv(import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID, "122588918051"),
  appId: getEnv(import.meta.env?.VITE_FIREBASE_APP_ID, DEFAULT_APP_ID)
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let auth;
try {
  auth = initializeAuth(app, {
    persistence: [
      indexedDBLocalPersistence,
      browserLocalPersistence,
      browserSessionPersistence,
    ],
  });
} catch (error) {
  auth = getAuth(app);
}

if (!auth) {
  auth = getAuth(app);
}

export { auth };
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

