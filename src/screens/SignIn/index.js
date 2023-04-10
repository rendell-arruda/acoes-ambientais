import React, { useState } from 'react';
import { auth } from '../../firebase/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './signin.css';
import logo from '../../assets/images/logos/favicon-rmb.png';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (email !== '' && password !== '') {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/home', { replace: true });
          //navegar para home
        })
        .catch(error => {
          console.log('Erroo ao fazer o login ' + error);
        });
    } else {
      alert('Preencha todos os campos');
    }
  }

  return (
    <div className="containerCenter bg-green d-flex justify-content-center align-items-center">
      <div
        className="login text-center bg-gray d-flex
 justify-content-center align-items-center flex-column "
      >
        <div className="login-area bg-green-light">
          <img src={logo} alt="Logo da Gerência de implatação" />
          <h5>Ações Ambientais RMB</h5>
        </div>
        <form className="d-flex flex-column bg-gray" onSubmit={handleLogin}>
          <h5>Login</h5>
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
          <button type="submit">Acessar</button>
          {/* <Link>Cadastre-se</Link> */}
        </form>
      </div>
    </div>
  );
}
