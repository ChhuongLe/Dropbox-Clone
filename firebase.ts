import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBs-VCiLM3sSgO3ED4PkPib5FDx-CLGPrE",
  authDomain: "dropbox-clone-42e32.firebaseapp.com",
  projectId: "dropbox-clone-42e32",
  storageBucket: "dropbox-clone-42e32.appspot.com",
  messagingSenderId: "932107410772",
  appId: "1:932107410772:web:e6877a1242a03a9c58fcc1"
};

// nextJS will double render at times so we perform a check
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db , storage }