import React, { createContext, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth, db } from '../firebase/firebaseConnection';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  //coloca um loading
  const [loadingAuth, setLoandingAuth] = useState(false);
  const navigate = useNavigate();

  async function signIn(email, password) {
    setLoandingAuth(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async value => {
        let uid = value.user.uid;
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);

        let data = {
          uid: uid,
          nome: docSnap.data().nome,
          email: value.user.email,
          avatarUrl: docSnap.data().avatarUrl
        };
        setUser(data);
        storageUser(data);
        setLoandingAuth(false);

        //nagevagar para home
        toast.success('Bem vindo(a) de volta');
        navigate('/home');
      })
      .catch(error => {
        console.log('Erro ao fazer o login ' + error);
        setLoandingAuth(false);
        toast.error('Ops...Confira seus dados');
      });
  }

  //cadastrar um novo user
  async function signUp(name, email, password) {
    setLoandingAuth(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async value => {
        let uid = value.user.uid;

        await setDoc(doc(db, 'users', uid), {
          nome: name,
          avatarUrl: null
        }).then(() => {
          let data = {
            uid: uid,
            nome: name,
            email: value.user.email,
            avatarUrl: null
          };
          setUser(data);
          storageUser(data);
          setLoandingAuth(false);
          toast.success('Bem vindo ao Sistema');
          navigate('/home');
        });
      })
      .catch(error => {
        console.log(error);
        setLoandingAuth(false);
      });
  }

  function storageUser(data) {
    localStorage.setItem('@detailUser', JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user, //false
        user,
        signIn,
        signUp,
        loadingAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
