import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCR_aIWndGrK_olWIOISgBX31ImEO0hxgU',
  authDomain: 'acoes-ambientais.firebaseapp.com',
  projectId: 'acoes-ambientais',
  storageBucket: 'acoes-ambientais.appspot.com',
  messagingSenderId: '791287066830',
  appId: '1:791287066830:web:8bfeb592bc98a0a3a3a09f',
  measurementId: 'G-52F25L9VGL'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
