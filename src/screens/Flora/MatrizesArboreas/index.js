import { useEffect, useState } from 'react';
import './matrizesArboreas.css';
import Sidebar from '../../../components/Sidebar';
import TitleRegis from '../../../components/Texts/TitleRegis';
import { FcInspection } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';
import {
  collection,
  getDocs,
  orderBy,
  limit,
  startAfter,
  query
} from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConnection';
import Loader from '../../../components/Loader';

import Modal from '../../../components/Modal';

const listRef = collection(db, 'matrizes');

export default function MatrizesArboreas() {
  //lista de matrizes
  const [matrizList, setMatrizList] = useState([]);
  //carregando
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  const [lastDocs, setLastDocs] = useState();
  const [loadingMore, setLoadingMore] = useState(false);

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
    loadMatriz();
    return () => {};
  }, []);

  //
  async function updateState(querySnapshot) {
    const isCollectionEmpty = querySnapshot.size === 0;
    //se a coleção não estiver vazia
    if (!isCollectionEmpty) {
      let lista = [];

      querySnapshot.forEach(doc => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          classe: doc.data().classe,
          coleta: doc.data().coleta,
          link: doc.data().link
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

  async function handleMore() {
    setLoadingMore(true);
    const q = query(
      listRef,
      orderBy('nome', 'asc'),
      startAfter(lastDocs),
      limit(3)
    );
    const querySnapshot = await getDocs(q);
    //atualizar o estado e montar a lista
    await updateState(querySnapshot);
  }

  if (loading) {
    return (
      <div>
        <Sidebar />
        <div className="content">
          <TitleRegis name="Matrizes Arbóreas Cadastradas">
            <FcInspection size={25} />
          </TitleRegis>
          <div className="containerRegis">
            <span className="font-2-m-b"> Buscando Chamados...</span>
            <Loader />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Sidebar />
      <div className="content">
        <TitleRegis name="Matrizes Arbóreas Cadastradas">
          <FcInspection size={25} />
        </TitleRegis>
        <>
          <Link className="btnNew" to="/registerTree">
            <FiPlus size={25} color="#fff" />
            Nova matriz
          </Link>
          <>
            {matrizList.length === 0 ? (
              <div className="containerRegis dashboard">
                <span className="titleRegis">Nenhuma matriz cadastrada</span>
                <Link className="btnNew" to="/registerTree">
                  <FiPlus size={25} color="#fff" />
                  Nova matriz
                </Link>
              </div>
            ) : (
              <>
                <table className="table table-hover">
                  <thead className="font-2-s">
                    <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Classe</th>
                      <th scope="col">Coleta</th>
                      <th scope="col">Ficha Técnica</th>
                      <th scope="col">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrizList.map((item, index) => {
                      return (
                        <tr className="font-2-s" key={index}>
                          <td data-label="Nome" scope="row">
                            {`${item.nome[0].toUpperCase()}${item.nome
                              .substring(1)
                              .toLowerCase()}`}
                          </td>
                          <td data-label="Classe" scope="row">
                            {`${item.classe[0].toUpperCase()}${item.classe
                              .substring(1)
                              .toLowerCase()}`}
                          </td>

                          <td data-label="Coleta" scope="row">
                            {item.coleta}
                          </td>
                          <td data-label="Ficha Técnica" scope="row">
                            <Link to={`${item.link}`}>
                              <FcInspection size={25} />
                            </Link>
                          </td>
                          <td data-label="#" scope="row">
                            <button
                              className="action"
                              style={{ backgroundColor: '#3583f6' }}
                            >
                              <FiSearch size={17} color="#fff" />
                            </button>
                            <Link
                              to={`/registerTree/${item.id}`}
                              className="action"
                              style={{ backgroundColor: '#f6a935' }}
                            >
                              <FiEdit2 size={17} color="#fff" />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {loadingMore && <h4>Buscando dados...</h4>}
                {!loadingMore && !isEmpty && (
                  <button onClick={handleMore} className="btnMore">
                    Buscar mais
                  </button>
                )}
              </>
            )}
          </>
        </>
      </div>
      <Modal />
    </div>
  );
}
