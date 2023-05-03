import React, { useState } from 'react';
import './registerTree.css';
import Sidebar from '../../../components/Sidebar';
import TitleRegis from '../../../components/Texts/TitleRegis';
import { FcPlus } from 'react-icons/fc';
import { db, storage } from '../../../firebase/firebaseConnection';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; //referencia do storage, upload da imagem, pega url da imagem
import { toast } from 'react-toastify';

export default function RegisterTree() {
  const [nome, setNome] = useState('');
  const [nomeCientifico, setNomeCientifico] = useState('');
  const [numero, setNumero] = useState('');

  const [bioma, setBioma] = useState('');

  const [conservacao, setConservacao] = useState('Preocupante');
  const [classe, setClasse] = useState('Pioneira');

  const [coleta, setColeta] = useState('');

  const [link, setLink] = useState('');
  const [gps, setGps] = useState('');

  const [descMuda, setDescMuda] = useState('');
  const [imageMuda, setImageMuda] = useState(null);
  const [descSemente, setDescSemente] = useState('');
  const [imageSemente, setImageSemente] = useState(null);
  const [descArvore, setDescArvore] = useState('');
  const [imageArvore, setImageArvore] = useState(null);
  const [descFlor, setDescFlor] = useState('');
  const [imageFlor, setImageFlor] = useState(null);

  async function handleRegister(e) {
    e.preventDefault();
    if (
      nome !== '' &&
      nomeCientifico !== '' &&
      numero !== '' &&
      bioma !== '' &&
      conservacao !== '' &&
      classe !== '' &&
      coleta !== '' &&
      link !== '' &&
      gps !== '' &&
      descMuda !== '' &&
      // imageMuda !== null &&
      descSemente !== '' &&
      // imageSemente !== null &&
      descArvore !== '' &&
      // imageArvore !== null &&
      descFlor !== ''
      // imageFlor !== null
    ) {
      //primeiro passo é add um novo documento na coleção
      await addDoc(collection(db, 'matrizes'), {
        //dados que serão salvos no banco
        nome: nome,
        nomeCientifico: nomeCientifico,
        numero: numero,
        bioma: bioma,
        conservacao: conservacao,
        classe: classe,
        coleta: coleta,
        link: link,
        gps: gps,
        descMuda: descMuda,
        imageMuda: imageMuda,
        descSemente: descSemente,
        imageSemente: imageSemente,
        descArvore: descArvore,
        imageArvore: imageArvore,
        descFlor: descFlor,
        imageFlor: imageFlor
      })
        .then(() => {
          setNome('');
          setNomeCientifico('');
          setNumero('');
          setBioma('');
          setConservacao('');
          setClasse('');
          setColeta('');
          setLink('');
          setGps('');
          setDescMuda('');
          // setImageMuda(null);
          setDescSemente('');
          // setImageSemente(null);
          setDescArvore('');
          // setImageArvore(null);
          setDescFlor('');
          // setImageFlor(null);
          toast.success('Matriz cadastrada com sucesso!');
        })
        .catch(error => {
          console.log(error);
          toast.error('Erro ao cadastrar a matriz!');
        });
    } else {
      toast.error('Preencha todos os campos!');
    }
  }

  function handleOptionChangeConvervacao(e) {
    setConservacao(e.target.value);
  }
  function handleOptionChangeClasse(e) {
    setClasse(e.target.value);
  }

  return (
    <div>
      <Sidebar />
      <div className="content">
        <TitleRegis name="Cadastrar Matriz">
          <FcPlus size={25} />
        </TitleRegis>

        <div className="containerRegis">
          <form className="form-profile" onSubmit={handleRegister}>
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
              placeholder="Exemplo: M 20XX"
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
            {/* <input
              type="text"
              placeholder="Informe o estado de conservação"
              value={conservacao}
              onChange={e => setConservacao(e.target.value)}
            /> */}
            <div className="conservacao">
              <input
                type="radio"
                name="conservacao"
                value="Pouco-Preocupante"
                onChange={handleOptionChangeConvervacao}
                checked={conservacao === 'Pouco-Preocupante'}
              />
              <span>Pouco Preocupante</span>
              <input
                type="radio"
                name="conservacao"
                value="QuaseAmeaçada"
                onChange={handleOptionChangeConvervacao}
                checked={conservacao === 'QuaseAmeaçada'}
              />
              <span>Quase Ameaçada</span>
              <input
                type="radio"
                name="conservacao"
                value="Emperigo"
                onChange={handleOptionChangeConvervacao}
                checked={conservacao === 'Emperigo'}
              />
              <span>Em perigo</span>
              <input
                type="radio"
                name="conservacao"
                value="CríticamentePerigo"
                onChange={handleOptionChangeConvervacao}
                checked={conservacao === 'CríticamentePerigo'}
              />
              <span>Críticamente em Perigo</span>
              <input
                type="radio"
                name="conservacao"
                value=" NaoAvaliado "
                onChange={handleOptionChangeConvervacao}
                checked={conservacao === 'NaoAvaliado'}
              />
              <span> Não avaliado </span>
            </div>
            <label>Classe Sucessional</label>
            <div className="classe">
              {/* <input
                type="text"
                placeholder="Informe a classe sucessional"
                value={classe}
                onChange={e => setClasse(e.target.value)}
              /> */}
              <input
                type="radio"
                name="classe"
                value="Pioneira"
                onChange={handleOptionChangeClasse}
                checked={classe === 'Pioneira'}
              />
              <span>Pioneira </span>
              <input
                type="radio"
                name="classe"
                value="PioneiraFrutifera"
                onChange={handleOptionChangeClasse}
                checked={classe === 'PioneiraFrutifera'}
              />
              <span>Pioneira-Frutífera </span>
              <input
                type="radio"
                name="classe"
                value="Secundaria"
                onChange={handleOptionChangeClasse}
              />
              <span>Secundária </span>
              <input
                type="radio"
                name="classe"
                value="Climax"
                onChange={handleOptionChangeClasse}
              />
              <span>Climáx </span>
              <input
                type="radio"
                name="classe"
                value="Frutifera"
                onChange={handleOptionChangeClasse}
              />
              <span>Frutífera </span>
            </div>

            <label>Coleta de Germoplasma</label>
            <input
              type="text"
              placeholder="Exemplo: Mai-Ago"
              value={coleta}
              onChange={e => setColeta(e.target.value)}
            />
            <label>Link interno</label>
            <input
              type="text"
              placeholder={`Exemplo: /${nome.toLowerCase().substring(0, 6)}`}
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
            {/* <label>Registro fotográfico da Muda</label> */}
            {/* <input
              type="file"
              accept="image/*"
              //   value={descMuda}
              //   onChange={handleFile}
            /> */}
            <label>Descrição da Semente</label>
            <input
              type="text"
              placeholder="A semente poderá ser plantada em 1 ano"
              value={descSemente}
              onChange={e => setDescSemente(e.target.value)}
            />
            {/* <label>Registro fotográfico da Semente</label> */}
            {/* <input
              type="file"
              accept="image/*"
              //   value={descMuda}
              //   onChange={handleFile}
            /> */}
            <label>Descrição da Árvore</label>
            <input
              type="text"
              placeholder="A árvore pode chegar a 30 metros de altura."
              value={descArvore}
              onChange={e => setDescArvore(e.target.value)}
            />
            {/* <label>Registro fotográfico da Árvore</label> */}
            {/* <input
              type="file"
              accept="image/*"
              //   value={descMuda}
              //   onChange={handleFile}
            /> */}
            <label>Descrição da Flor</label>
            <input
              type="text"
              placeholder="A espécie floresce em setembro."
              value={descFlor}
              onChange={e => setDescFlor(e.target.value)}
            />
            {/* <label>Registro fotográfico da flor</label> */}
            {/* <input
              type="file"
              accept="image/*"
              //   value={descMuda}
              //   onChange={handleFile}
            /> */}
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
