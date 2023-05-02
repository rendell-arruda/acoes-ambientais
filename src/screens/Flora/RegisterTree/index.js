import React, { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import TitleRegis from '../../../components/Texts/TitleRegis';
import { FcPlus } from 'react-icons/fc';

export default function RegisterTree() {
  const [nome, setNome] = useState('');
  const [nomeCientifico, setNomeCientifico] = useState('');
  const [numero, setNumero] = useState('');
  const [bioma, setBioma] = useState('');
  const [conservacao, setConservacao] = useState('');
  const [classe, setClasse] = useState('');
  const [coleta, setColeta] = useState('');
  const [link, setLink] = useState('');
  const [gps, setGps] = useState('');

  const [descMuda, setDescMuda] = useState('');
  const [descSemente, setDescSemente] = useState('');
  const [descArvore, setDescArvore] = useState('');
  const [descFlor, setDescFlor] = useState('');

  return (
    <div>
      <Sidebar />
      <div className="content">
        <TitleRegis name="Cadastrar Matriz">
          <FcPlus size={25} />
        </TitleRegis>

        <div className="containerRegis">
          <form className="form-profile">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Informe o nome da Matriz"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
            <label>Nome Científico</label>
            <input
              type="text"
              placeholder="Informe o nome científico da Matriz"
              value={nomeCientifico}
              onChange={e => setNomeCientifico(e.target.value)}
            />
            <label>Número</label>
            <input
              type="text"
              placeholder="Informe o nome científico da Matriz"
              value={numero}
              onChange={e => setNumero(e.target.value)}
            />
            <label>Bioma</label>
            <input
              type="text"
              placeholder="Informe o bioma"
              value={bioma}
              onChange={e => setBioma(e.target.value)}
            />
            <label>Estado de Conservação</label>
            <input
              type="text"
              placeholder="Informe o estado de conservação"
              value={conservacao}
              onChange={e => setConservacao(e.target.value)}
            />
            <label>Classe Sucessional</label>
            <input
              type="text"
              placeholder="Informe a classe sucessional"
              value={classe}
              onChange={e => setClasse(e.target.value)}
            />
            <label>Coleta de Germoplasma</label>
            <input
              type="text"
              placeholder="Informe a classe sucessional"
              value={coleta}
              onChange={e => setColeta(e.target.value)}
            />
            <label>Link interno</label>
            <input
              type="text"
              placeholder={`Exemplo: /${nome.toLowerCase()}`}
              value={link}
              onChange={e => setLink(e.target.value)}
            />
            <label>Coordenadas de GPS</label>
            <input
              type="text"
              placeholder="Exemplo: https://www.google.com.br/maps/place/23%C2%B023'17.5%22S+47%C2%B037'43.3%22W/@-23.3881951,-47.631274"
              value={gps}
              onChange={e => setGps(e.target.value)}
            />
            <label>Descrição da Muda</label>
            <input
              type="text"
              placeholder="A muda estará pronta para plantio em 1 ano."
              value={descMuda}
              onChange={e => setDescMuda(e.target.value)}
            />
            <label>Registro fotográfico da Muda</label>
            <input
              type="file"
              accept="image/*"
              //   value={descMuda}
              //   onChange={handleFile}
            />
            <label>Descrição da Semente</label>
            <input
              type="text"
              placeholder="A semente poderá ser plantada em 1 ano"
              value={descSemente}
              onChange={e => setDescSemente(e.target.value)}
            />
            <label>Registro fotográfico da Semente</label>{' '}
            <input
              type="file"
              accept="image/*"
              //   value={descMuda}
              //   onChange={handleFile}
            />
            <label>Descrição da Árvore</label>
            <input
              type="text"
              placeholder="A árvore pode chegar a 30 metros de altura."
              value={descArvore}
              onChange={e => setDescArvore(e.target.value)}
            />
            <label>Registro fotográfico da Árvore</label>
            <input
              type="file"
              accept="image/*"
              //   value={descMuda}
              //   onChange={handleFile}
            />
            <label>Descrição da Flor</label>
            <input
              type="text"
              placeholder="A espécie floresce em setembro."
              value={descFlor}
              onChange={e => setDescFlor(e.target.value)}
            />
            <label>Registro fotográfico da flor</label>
            <input
              type="file"
              accept="image/*"
              //   value={descMuda}
              //   onChange={handleFile}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
