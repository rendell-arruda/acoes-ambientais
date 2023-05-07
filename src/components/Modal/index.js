import React from 'react';
import './modal.css';
import { FiX } from 'react-icons/fi';

export default function Modal({ conteudo, close }) {
  return (
    <div className="modalRegis">
      <div className="containerRegis">
        <button className="close" onClick={close}>
          <FiX size={25} color="#fff" />
          Fechar
        </button>
        <main>
          <div>
            <h3>Detalhes da Matriz</h3>
            <div className="row">
              <p>
                Nome: <span>{conteudo.nome}</span>
              </p>
            </div>

            <div className="row">
              <p>
                Nome Científico:
                <span>
                  <i>{conteudo.nomeCientifico}</i>
                </span>
              </p>
            </div>

            <div className="row">
              <p>
                Matriz N°: <span>{conteudo.numero}</span>
              </p>
            </div>
            <div className="row">
              <p>
                Cadastrado em: <span>{conteudo.cadastradoEm}</span>
              </p>
            </div>

            <div className="row">
              <p>
                Bioma: <span>{conteudo.bioma}</span>
              </p>
            </div>

            <div className="row">
              <p>
                Estado de Convervação:<span>{conteudo.conservacao}</span>
              </p>
            </div>

            <div className="row">
              <p>
                Classe Sucessional: <span>{conteudo.classe}</span>
              </p>
            </div>

            <div className="row">
              <p>
                Coleta de Semente: <span>{conteudo.coleta}</span>
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
          <img
            className="img-perfil"
            src={conteudo.image}
            width={170}
            height={210}
            alt="imagem"
          />
        </main>
      </div>
    </div>
  );
}
