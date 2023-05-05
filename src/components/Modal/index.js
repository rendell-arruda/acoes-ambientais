import React from 'react';
import './modal.css';
import { FiX } from 'react-icons/fi';

export default function Modal() {
  return (
    <div className="modalRegis">
      <div className="containerRegis">
        <button className="close">
          <FiX size={25} color="#fff" />
          Fechar
        </button>
        <main>
          <h2>Detalhes da Matriz</h2>
          <div className="row">
            <span>
              Nome: <i>Peroba</i>
            </span>
          </div>

          <div className="row">
            <span>
              Nome Científico: <i>Larala alaalatumn</i>
            </span>
          </div>

          <div className="row">
            <span>
              Matriz N°: <i>M 2088</i>
            </span>
          </div>

          <div className="row">
            <span>
              Bioma: <i>Cerrado</i>
            </span>
          </div>

          <div className="row">
            <span>
              Estado de Convervação:<i>Preocupante</i>
            </span>
          </div>

          <div className="row">
            <span>
              Classe Sucessional: <i>Pioneira</i>
            </span>
          </div>

          <div className="row">
            <span>
              Coleta de Semente: <i>Jun - Ago</i>
            </span>
          </div>

          <div className="row">
            <span>
              Descrição da Muda: <i> a muda pode não sei que la</i>
            </span>
          </div>

          <div className="row">
            <span>
              Descrição da Semente: <i> a semente pode ter não sei que la</i>
            </span>
          </div>
          <div className="row">
            <span>
              Descrição da Árvore:
              <i> a arvore pode ter ate tantos m não sei que la</i>
            </span>
          </div>

          <div className="row">
            <span>
              Descrição da Flor:
              <i> a especie florece entre tal ter não sei que la</i>
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
