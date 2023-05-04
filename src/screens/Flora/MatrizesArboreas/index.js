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

const listRef = collection(db, 'matrizes');

export default function MatrizesArboreas() {
  //lista de matrizes
  const [matrizList, setMatrizList] = useState([]);
  //carregando
  const [loading, setLoading] = useState(true);

  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    //carregando a lista de matrizes
    async function loadMatriz() {
      const q = query(listRef, orderBy('nome', 'asc'), limit(10));
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
      console.log(lista);
      //pega o ultimo documento e adiciona mais um chamado
      setMatrizList(matrizList => [...matrizList, ...lista]);
    } else {
      //se a lista estiver vazia
      setIsEmpty(true);
    }
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
                      <tr className="font-2-xs" key={index}>
                        <td data-label="Nome" scope="row">
                          {item.nome}
                        </td>
                        <td data-label="Classe" scope="row">
                          {item.classe}
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
                          <button
                            className="action"
                            style={{ backgroundColor: '#f6a935' }}
                          >
                            <FiEdit2 size={17} color="#fff" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </>
        </>
      </div>
    </div>
  );
}
