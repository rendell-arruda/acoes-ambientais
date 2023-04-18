import React, { createContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/firebaseConnection';
import { useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  // const [user, setUser] = useState(null);
  //coloca um loading
  const [loadingAuth, setLoandingAuth] = useState(false);
  const navigate = useNavigate();

  async function signIn(email, password) {
    setLoandingAuth(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        //nagevagar para home
        setLoandingAuth(false);
        navigate('/home', { replace: true });
        toast.success('Seja bem vindo ao Sistema');
      })
      .catch(error => {
        console.log('Erro ao fazer o login ' + error);
        setLoandingAuth(false);
      });
  }

  return (
    <AuthContext.Provider value={{ signIn, loadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
