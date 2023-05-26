import React, { useEffect, useState } from 'react';
import Img1 from '../../assets/images/fauna/Capa1.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ParallaxImage from '../../components/ParallaxImage';
import Container from '../../components/Containes';
import BtnTooltip from '../../components/Buttons/BtnTooltip';
import Mapherpetofauna from '../../assets/images/fauna/capaHerpetofauna.png';
import MapAvifauna from '../../assets/images/fauna/capaAvifauna.png';
import Title from '../../components/Texts/Title';
import './fauna.css';
import { FiSearch } from 'react-icons/fi';
import Modal from '../../components/Modal';
import { db } from '../../firebase/firebaseConnection';
import {
  collection,
  getDocs,
  orderBy,
  limit,
  startAfter,
  query
} from 'firebase/firestore';
const listRef = collection(db, 'avistamentoFauna');

export default function Fauna() {
  const [faunaList, setFaunaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    //percorrer a lista de fauna no banco de dados
    async function loadFauna() {
      //buscar os dados no firebase
      const q = query(listRef, orderBy('nome', 'asc'), limit(3));
      const querySnapshot = await getDocs(q);
      //atualizar o estado e montar a lista
      await updateState(querySnapshot);
      setLoading(false);
    }
    loadFauna();
    return () => {};
  }, []);

  async function updateState(querySnapshot) {
    const isCollectionEmpty = querySnapshot.size === 0;
    //se a coleção não estiver vazia
    if (!isCollectionEmpty) {
      let lista = [];
      querySnapshot.forEach(doc => {
        lista.push({
          id: doc.id,
          nome: doc.data().nome,
          taxon: doc.data().taxon,
          thumbnail: doc.data().thumbnail,
          avistado: doc.data().avistado
        });
      });
      //pegar a lista atual e adicionar a nova lista
      setFaunaList(faunaList => [...faunaList, ...lista]);
    } else {
      setIsEmpty(true);
    }
  }

  return (
    <>
      <Header />
      <div className="bg-gray">
        <ParallaxImage img={Img1}> Fauna RMB</ParallaxImage>
      </div>
      <Container>
        <Title title="Mapas de Amostragem">
          {/* Conheça as áreas de XXX e Rustificação do Viveiro */}
        </Title>
        <div className="cards-maps">
          <div class="row mb-2">
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">
                    Herpetofauna e Mastofauna
                  </strong>
                  {/* <h3 class="mb-0"> Herpetofauna e Mastofauna</h3> */}
                  {/* <div class="mb-1 text-muted">Nov 12</div> */}
                  <p class="card-text mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>

                  <BtnTooltip
                    target="_blank"
                    tip="1.1MB"
                    title="Acessar mapa"
                    link="https://drive.google.com/file/d/1xkDx3eYrX7JRpQQMXtny1TIvLrZQd8OD/view?usp=sharing"
                  />
                </div>
                <div class="col-auto d-none d-lg-block">
                  <img src={Mapherpetofauna} />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">
                    Avifauna
                  </strong>
                  {/* <h3 class="mb-0"> Avifauna </h3> */}
                  {/* <div class="mb-1 text-muted">Nov 11</div> */}
                  <p class="mb-auto">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>

                  <BtnTooltip
                    tip="1.4MB"
                    target="_blank"
                    title="Acessar mapa"
                    link="https://drive.google.com/file/d/11uT2KdOtgB_pfAk-ZfQ2G97u9TXoPBnd/view?usp=sharing"
                  />
                </div>
                <div class="col-auto d-none d-lg-block">
                  <img src={MapAvifauna} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Title title="Matriz de Avistamento"></Title>

        {faunaList.length === 0 ? (
          <div className="text-center">
            <span>Nenhum Animal encontrado no banco de dados</span>
          </div>
        ) : (
          <>
            <table class="table table-hover">
              <thead className="font-2-s">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Nome do táxon</th>
                  <th scope="col">Avistado em </th>
                  <th scope="col">Registro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-2-s td-fauna">
                  <td data-label="Nome" scope="row">
                    Fim fim
                  </td>
                  <td data-label="Nome do táxon" scope="row">
                    Euphonia chlorotica
                  </td>
                  <td data-label="Avistado em" scope="row">
                    12/12/2020
                  </td>
                  <td data-label="Registro" scope="row">
                    <button
                      className="action"
                      style={{ backgroundColor: '#3583f6' }}
                      // onClick={() => toggleModal(item)}
                    >
                      <FiSearch size={20} color="#fff" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </Container>

      <Footer />
    </>
  );
}
