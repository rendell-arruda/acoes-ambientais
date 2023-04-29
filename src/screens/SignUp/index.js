import React, { useState, useContext } from 'react';
import { auth } from '../../firebase/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

import logo from '../../assets/images/logos/favicon-rmb.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import Loader from '../../components/Loader';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, loadingAuth } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (email !== '' && password !== '') {
      await signUp(name, email, password);
    } else {
      alert('Preencha todos os campos');
    }
    setEmail('');
    setPassword('');
    setName('');
  }

  return (
    <div className="containerCenter bg-green d-flex justify-content-center align-items-center">
      <div
        className="login text-center bg-gray d-flex
 justify-content-center align-items-center flex-column "
      >
        <div className="login-area bg-green-light">
          <img src={logo} alt="Logo da Gerência de implatação" />
          <h3>Ações Ambientais RMB</h3>
        </div>
        <form className="d-flex flex-column bg-gray" onSubmit={handleSubmit}>
          <h4>Cadastre-se</h4>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
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
          <button type="submit">
            {loadingAuth ? <Loader /> : 'Cadastrar'}
          </button>
          <Link className="pt-2" to="/">
            Já possui Cadastro? Faça seu login.
          </Link>
        </form>
      </div>
    </div>
  );
}
