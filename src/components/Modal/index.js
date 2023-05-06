import React from 'react';
import './modal.css';
import { FiX } from 'react-icons/fi';
import Img from '../../assets/images/flora/matrizes/acoita/acoitaArvore.jpg';

export default function Modal({ image }) {
  return (
    <div className="modalRegis">
      <div className="containerRegis">
        <button className="close">
          <FiX size={25} color="#fff" />
          Fechar
        </button>
        <main>
          <div>
            <h2>Detalhes da Matriz</h2>
            <div className="row">
              <p>
                Nome: <span>Peroba</span>
              </p>
            </div>

            <div className="row">
              <p>
                Nome Científico:
                <span>
                  <i>Larala alaalatumn</i>
                </span>
              </p>
            </div>

            <div className="row">
              <p>
                Matriz N°: <span>M 2088</span>
              </p>
            </div>

            <div className="row">
              <p>
                Bioma: <span>Cerrado</span>
              </p>
            </div>

            <div className="row">
              <p>
                Estado de Convervação:<span>Preocupante</span>
              </p>
            </div>

            <div className="row">
              <p>
                Classe Sucessional: <span>Pioneira</span>
              </p>
            </div>

            <div className="row">
              <p>
                Coleta de Semente: <span>Jun - Ago</span>
              </p>
            </div>
            <>
              {/* <div className="row">
              <p>
                Descrição da Muda: <span> a muda pode não sei que la</span>
              </p>
            </div> */}

              {/* <div className="row">
              <p>
                Descrição da Semente:
                <span> a semente pode ter não sei que la</span>
              </p>
            </div>
            <div className="row">
              <p>
                Descrição da Árvore:
                <span> a arvore pode ter ate tantos m não sei que la</span>
              </p>
            </div>

            <div className="row">
              <p>
                Descrição da Flor:
                <span> a especie florece entre tal ter não sei que la</span>
              </p>
            </div> */}
            </>
          </div>
          <img className="img-perfil" src={Img} width={170} height={210} />
        </main>
      </div>
    </div>
  );
}
