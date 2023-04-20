import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';

export default function Private({ children }) {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      const unsub = onAuthStateChanged(auth, user => {
        if (user) {
          //se tem usuario
          const userData = {
            uid: user.uid,
            email: user.email
          };
          localStorage.setItem('@detailUser', JSON.stringify(userData));
          setLoading(false);
          setSigned(true);
        } else {
          //se nao tem usuario
          setLoading(false);
          setSigned(false);
        }
      });
    }
    checkLogin();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (!signed) {
    return <Navigate to="/" />;
  }
  return children;
}
