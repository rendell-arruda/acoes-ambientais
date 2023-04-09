import React, { useState } from 'react';
import './signin.css';
import logo from '../../assets/images/logos/favicon-rmb.png';
// import logo from '../../assets/images/logos/logo5s.png';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div
      className="containerCenter bg-green d-flex
 justify-content-center align-items-center "
    >
      <div
        className="login text-center bg-gray d-flex
 justify-content-center align-items-center flex-column "
      >
        <div className="login-area bg-green-light">
          <img src={logo} alt="Logo da Gerência de implatação" />
          <h5>Ações Ambientais RMB</h5>
        </div>
        <form className="d-flex flex-column bg-gray">
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
