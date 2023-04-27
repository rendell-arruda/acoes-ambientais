import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAqykwvvFm1mcM86kSmqdbABSffilUawbg',
  authDomain: 'acoesambientais-b9e1f.firebaseapp.com',
  projectId: 'acoesambientais-b9e1f',
  storageBucket: 'acoesambientais-b9e1f.appspot.com',
  messagingSenderId: '197061248857',
  appId: '1:197061248857:web:cce5a2885ab1a4e1972e48',
  measurementId: 'G-TQC20GQ3CM'
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth };
