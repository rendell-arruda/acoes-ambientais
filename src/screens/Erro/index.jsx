import React from 'react';
import { Link } from 'react-router-dom';
import './Erro.css';

export default function Erro() {
  return (
    <div className="container">
      <h2 className="py-4">Página não encontrada</h2>
      <Link to="/">Ir para a página Inicial</Link>
    </div>
  );
}
