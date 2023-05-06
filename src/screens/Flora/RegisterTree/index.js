import React, { useState, useContext, useEffect } from 'react';
import './registerTree.css';
import { AuthContext } from '../../../context/auth';
import Sidebar from '../../../components/Sidebar';
import TitleRegis from '../../../components/Texts/TitleRegis';
import { FcPlus } from 'react-icons/fc';
import { db, storage } from '../../../firebase/firebaseConnection';
import {
  addDoc,
  getDoc,
  doc,
  updateDoc,
  collection,
  getDocs,
  orderBy,
  limit,
  query
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; //referencia do storage, upload da imagem, pega url da imagem
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

const listRef = collection(db, 'matrizes');

export default function RegisterTree() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [matrizList, setMatrizList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastDocs, setLastDocs] = useState();
  const [loadingMore, setLoadingMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const [idMatrizCustomer, setIdMatrizCustomer] = useState(false);

  const [nome, setNome] = useState('');
  const [nomeCientifico, setNomeCientifico] = useState('');
  const [numero, setNumero] = useState('');
  const [cadastradoEm, setCadastradoEm] = useState('');

  const [bioma, setBioma] = useState('');

  const [conservacao, setConservacao] = useState('#');
  const [classe, setClasse] = useState('#');

  const [coleta, setColeta] = useState('');

  // const [link, setLink] = useState('');
  const [gps, setGps] = useState('');

  // const [descMuda, setDescMuda] = useState('');
  // const [imageMuda, setImageMuda] = useState(null);
  // const [urlMuda, setUrlMuda] = useState('');

  // const [descSemente, setDescSemente] = useState('');
  // const [imageSemente, setImageSemente] = useState(null);
  // const [urlSemente, setUrlSemente] = useState('');

  // const [descArvore, setDescArvore] = useState('');
  // const [imageArvore, setImageArvore] = useState(null);
  // const [urlArvore, setUrlArvore] = useState('');

  // const [descFlor, setDescFlor] = useState('');
  // const [imageFlor, setImageFlor] = useState(null);
  // const [urlFlor, setUrlFlor] = useState('');

  async function handleRegister(e) {
    e.preventDefault();

    //atualizar os dados no firebase
    if (idMatrizCustomer) {
      const docRef = doc(db, 'matrizes', id);
      await updateDoc(docRef, {
        nome: nome,
        nomeCientifico: nomeCientifico,
        numero: numero,
        cadastradoEm: cadastradoEm,
        bioma: bioma,
        conservacao: conservacao,
        classe: classe,
        coleta: coleta,
        // link: link,
        gps: gps,
        // descMuda: descMuda,
        // // imageMuda: urlMuda,
        // descSemente: descSemente,
        // // imageSemente: urlSemente,
        // descArvore: descArvore,
        // // imageArvore: urlArvore,
        // descFlor: descFlor,
        // // imageFlor: urlFlor,
        userId: user.uid
      })
        .then(() => {
          toast.info('Matriz atualizada com sucesso!');
          setIdMatrizCustomer(false);
          navigate('/matrizesArboreas');
        })
        .catch(error => {
          toast.error('Erro ao atualizar a matriz!');
          console.log(error);
        });

      return;
    }

    if (
      nome !== '' &&
      nomeCientifico !== '' &&
      numero !== '' &&
      cadastradoEm !== '' &&
      bioma !== '' &&
      conservacao !== '' &&
      classe !== '' &&
      coleta !== '' &&
      gps !== ''
      // descMuda !== '' &&
      // // imageMuda !== null &&
      // descSemente !== '' &&
      // // imageSemente !== null &&
      // descArvore !== '' &&
      // // imageArvore !== null &&
      // descFlor !== ''
      // // imageFlor !== null
    ) {
      //primeiro passo é add um novo documento na coleção
      await addDoc(collection(db, 'matrizes'), {
        //dados que serão salvos no banco
        nome: nome,
        nomeCientifico: nomeCientifico,
        numero: numero,
        cadastradoEm: cadastradoEm,
        bioma: bioma,
        conservacao: conservacao,
        classe: classe,
        coleta: coleta,
        // link: link,
        gps: gps,

        // descMuda: descMuda,
        // // imageMuda: urlMuda,

        // descSemente: descSemente,
        // // imageSemente: urlSemente,

        // descArvore: descArvore,
        // // imageArvore: urlArvore,

        // descFlor: descFlor,
        // // imageFlor: urlFlor,

        userId: user.uid
      })
        .then(() => {
          setNome('');
          setNomeCientifico('');
          setNumero('');
          setCadastradoEm('');
          setBioma('');
          setConservacao('');
          setClasse('');
          setColeta('');
          // setLink('');
          setGps('');
          // setDescMuda('');
          // // setImageMuda(null);
          // setDescSemente('');
          // // setImageSemente(null);
          // setDescArvore('');
          // // setImageArvore(null);
          // setDescFlor('');
          // // setImageFlor(null);
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

  useEffect(() => {
    //carregando a lista de matrizes
    async function loadMatriz() {
      const q = query(listRef, orderBy('nome', 'asc'), limit(3));
      //buscar os dados no firebase
      const querySnapshot = await getDocs(q);
      //atualizar o estado e montar a lista
      setMatrizList([]);
      await updateState(querySnapshot);
      setLoading(false);
    }

    //carregar id da matriz
    if (id) {
      loadId(matrizList);
      return () => {};
    }
    loadMatriz();
  }, [id]);

  //buscar matriz por id pra editar as states
  async function loadId(matrizList) {
    //carregando uma matriz com o doc e o id
    const docRef = doc(db, 'matrizes', id);
    await getDoc(docRef)
      //snapshot pega os items do doc
      .then(snapshot => {
        setNome(snapshot.data().nome);
        setNomeCientifico(snapshot.data().nomeCientifico);
        setNumero(snapshot.data().numero);
        setCadastradoEm(snapshot.data().cadastradoEm);
        setBioma(snapshot.data().bioma);
        setConservacao(snapshot.data().conservacao);
        setClasse(snapshot.data().classe);
        setColeta(snapshot.data().coleta);
        // setLink(snapshot.data().link);
        setGps(snapshot.data().gps);
        // setDescMuda(snapshot.data().descMuda);
        // setDescSemente(snapshot.data().descSemente);
        // setDescArvore(snapshot.data().descArvore);
        // setDescFlor(snapshot.data().descFlor);

        setIdMatrizCustomer(true);
      })
      .catch(error => {
        console.log(error);
        setIdMatrizCustomer(false);
      });
  }

  async function updateState(querySnapshot) {
    const isCollectionEmpty = querySnapshot.size === 0;
    //se a coleção não estiver vazia
    if (!isCollectionEmpty) {
      let lista = [];

      querySnapshot.forEach(doc => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          nomeCientifico: doc.data().nomeCientifico,
          numero: doc.data().numero,
          cadastradoEm: doc.data().cadastradoEm,
          bioma: doc.data().bioma,
          conservacao: doc.data().conservacao,
          classe: doc.data().classe,
          coleta: doc.data().coleta
          // link: doc.data().link
        });
      });

      //pega o ultimo documento/item da lista
      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      //pega o ultimo documento e adiciona mais um chamado
      setMatrizList(matrizList => [...matrizList, ...lista]);
      //seta o ultimo documento
      setLastDocs(lastDoc);
    } else {
      //se a lista estiver vazia
      setIsEmpty(true);
    }
    setLoadingMore(false);
  }

  // function handleFile(e) {
  //   if (e.target.files.length > 0) {
  //     const imageMuda = e.target.files[0];
  //     const imageSemente = e.target.files[1];
  //     const imageArvore = e.target.files[2];
  //     const imageFlor = e.target.files[3];
  //     if (
  //       (imageMuda.type &&
  //         imageSemente.type &&
  //         imageArvore.type &&
  //         imageFlor.type === 'image/jpeg') ||
  //       (imageMuda.type &&
  //         imageSemente.type &&
  //         imageArvore.type &&
  //         imageFlor.type === 'image/png')
  //     ) {
  //       setImageMuda(imageMuda);
  //       setUrlMuda(URL.createObjectURL(e.target.files[0]));
  //       setImageSemente(imageSemente);
  //       setUrlSemente(URL.createObjectURL(e.target.files[1]));
  //       setImageArvore(imageArvore);
  //       setUrlArvore(URL.createObjectURL(e.target.files[2]));
  //       setImageFlor(imageFlor);
  //       setUrlFlor(URL.createObjectURL(e.target.files[3]));
  //     } else {
  //       alert('Envie imagens nos formatos PNG ou JPEG');
  //       setImageMuda(null);
  //       setImageSemente(null);
  //       setImageArvore(null);
  //       setImageFlor(null);
  //       return;
  //     }
  //   }
  // }
  return (
    <div>
      <Sidebar />
      <div className="content">
        <TitleRegis name={id ? 'Editando matriz' : 'Cadastrar nova matriz'}>
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
            <label>Cadastrado em</label>
            <input
              type="date"
              placeholder="dd/mm/aaaa"
              value={cadastradoEm}
              onChange={e => setCadastradoEm(e.target.value)}
            />
            <label>Bioma</label>
            <input
              type="text"
              placeholder="Informe o bioma"
              value={bioma}
              onChange={e => setBioma(e.target.value)}
            />
            <label>Estado de Conservação</label>
            <div className="conservacao">
              <select
                value={conservacao}
                onChange={e => setConservacao(e.target.value)}
              >
                <option value="#" disabled>
                  Escolha uma opção
                </option>
                <option value="Pouco-Preocupante">Pouco Preocupante</option>
                <option value="Preocupante">Preocupante</option>
                <option value="Quase-ameaçada">Quase Ameaçada</option>
                <option value="Em-perigo">Em Perigo</option>
                <option value="Criticamente-em-perigo">
                  Criticamente em perigo
                </option>
                <option value="Extinta">Extinta na natureza</option>
                <option value="nao-Avaliado">Não Avaliado</option>
              </select>
            </div>

            <label>Classe Sucessional</label>
            <div className="classe">
              <select value={classe} onChange={e => setClasse(e.target.value)}>
                <option value="#" disabled>
                  Escolha uma opção
                </option>
                <option value="Pioneira">Pioneira</option>
                <option value="Pioneira-Frutifera">Pioneira Frutífera</option>
                <option value="Secundaria">Secundária</option>
                <option value="Secundaria-Tardia">Secundária Tardia</option>
                <option value="Climax">Clímax</option>
                <option value="Frutifera">Frutífera</option>
                <option value="nao-Avaliado">Não Avaliado</option>
              </select>
            </div>

            <label>Coleta de Germoplasma</label>
            <input
              type="text"
              placeholder="Exemplo: Mai-Ago"
              value={coleta}
              onChange={e => setColeta(e.target.value)}
            />
            {/* <label>Link interno</label>
            <input
              type="text"
              placeholder={`Exemplo: /${nome.toLowerCase().substring(0, 6)}`}
              value={link}
              onChange={e => setLink(e.target.value)}
            /> */}
            <label>Coordenadas de GPS</label>
            <input
              type="text"
              placeholder="Exemplo: https://www.google.com.br/maps/place/23%C2%B023'17.5%22S+47%C2%B037'43.3%22W/@-23.3881951,-47.631274"
              value={gps}
              onChange={e => setGps(e.target.value)}
            />
            {/* <label>Descrição da Muda</label>
            <input
              type="text"
              placeholder="A muda estará pronta para plantio em 1 ano."
              value={descMuda}
              onChange={e => setDescMuda(e.target.value)}
            /> */}
            {/* <label>Registro fotográfico da Muda</label>
            <input
              type="file"
              accept="image/*"
              // value={imageMuda}
              onChange={handleFile}
            /> */}
            {/* <label>Descrição da Semente</label>
            <input
              type="text"
              placeholder="A semente poderá ser plantada em 1 ano"
              value={descSemente}
              onChange={e => setDescSemente(e.target.value)}
            /> */}
            {/* <label>Registro fotográfico da Semente</label>
            <input
              type="file"
              accept="image/*"
              // value={imageSemente}
              onChange={handleFile}
            /> */}
            {/* <label>Descrição da Árvore</label>
            <input
              type="text"
              placeholder="A árvore pode chegar a 30 metros de altura."
              value={descArvore}
              onChange={e => setDescArvore(e.target.value)}
            /> */}
            {/* <label>Registro fotográfico da Árvore</label>
            <input
              type="file"
              accept="image/*"
              // value={imageArvore}
              onChange={handleFile}
            /> */}
            {/* <label>Descrição da Flor</label>
            <input
              type="text"
              placeholder="A espécie floresce em setembro."
              value={descFlor}
              onChange={e => setDescFlor(e.target.value)}
            /> */}
            {/* <label>Registro fotográfico da flor</label>
            <input
              type="file"
              accept="image/*"
              // value={imageFlor}
              onChange={handleFile}
            /> */}
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
