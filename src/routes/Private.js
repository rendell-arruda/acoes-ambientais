import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

export default function Private({ children }) {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
    // return <div></div>;
  }
  if (!signed) {
    return <Navigate to="/" />;
  }
  return children;
}
