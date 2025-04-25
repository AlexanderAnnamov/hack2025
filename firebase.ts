import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBIRai9wTPFbheHsUVX8fQBKkFXWavgAs4",
  authDomain: "hack2025-b1264.firebaseapp.com",
  projectId: "hack2025-b1264",
  storageBucket: "hack2025-b1264.firebasestorage.app",
  messagingSenderId: "25385050193",
  appId: "1:25385050193:web:a0efcece0c3bfc31a29870",
  measurementId: "G-2MES9B3QXS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);