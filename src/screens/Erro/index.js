import React from 'react';
import { Link } from 'react-router-dom';
import './Erro.css';

export default function Erro() {
  return (
    <div className="container d-flex flex-column align-items-center ">
      <h2>Página não encontrada</h2>
      <Link to="/">Ir para a página Inicial</Link>
    </div>
  );
}
