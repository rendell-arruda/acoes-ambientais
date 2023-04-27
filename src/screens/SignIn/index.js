import React, { useState, useContext } from 'react';

import logoamazul from '../../assets/images/banners/amazul248.png';
import logocnen from '../../assets/images/banners/cnen248.png';
import logormb from '../../assets/images/banners/rmb248.png';

import { auth } from '../../firebase/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './signin.css';
import logo from '../../assets/images/logos/favicon-rmb.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import Loader from '../../components/Loader';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loadingAuth } = useContext(AuthContext);

  async function handleSignIn(e) {
    e.preventDefault();
    if (email !== '' && password !== '') {
      await signIn(email, password);
    } else {
      alert('Preencha todos os campos');
    }
  }

  return (
    <div className="containerCenter  d-flex justify-content-center align-items-center ">
      <div
        className="login text-center bg-gray d-flex
 justify-content-center align-items-center flex-column "
      >
        <div className="login-area bg-green-light">
          <img src={logo} alt="Logo da Gerência de implatação" />
          <h5>Ações Ambientais RMB</h5>
        </div>
        <form className="d-flex flex-column bg-gray" onSubmit={handleSignIn}>
          <h6>Login</h6>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">{loadingAuth ? <Loader /> : 'Acessar'}</button>
          {/* <Link>Cadastre-se</Link> */}
        </form>
        <div className="container-logos d-flex gap-4 pt-3">
          <img className="logo-cnen" src={logocnen} alt="logo cnen" />
          <img className="logo-amazul" src={logoamazul} alt="logo amazul" />
          <img className="logo-rmb" src={logormb} alt="logo rbm" />
        </div>
      </div>
    </div>
  );
}
