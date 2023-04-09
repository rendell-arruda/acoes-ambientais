import React, { useState } from 'react';
import './signin.css';
import logo from '../../assets/images/logos/logo5s.png';
import { Link } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="containerCenter">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo da Gerência de implatação" />
        </div>
        <form>
          <h1>Entrar</h1>
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
