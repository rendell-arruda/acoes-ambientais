import React from 'react';
import './matrizesArboreas.css';
import Sidebar from '../../../components/Sidebar';
import TitleRegis from '../../../components/Texts/TitleRegis';
import { FcInspection } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { FiPlus, FiSearch, FiEdit2 } from 'react-icons/fi';

export default function MatrizesArboreas() {
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
              <tr className="font-2-xs">
                <td data-label="Nome" scope="row">
                  Acoita Cav
                </td>
                <td data-label="Classe" scope="row">
                  Secundária
                </td>

                <td data-label="Classe" scope="row">
                  Secundária
                </td>
                <td data-label="Ficha Técnica" scope="row">
                  <Link to="/acoita">
                    <FcInspection size={25} />
                  </Link>
                </td>
                <td data-label="#" scope="row">
                  <button className="action">
                    <FiSearch
                      size={17}
                      color="#fff"
                      style={{ backgroundColor: '#3583f6' }}
                    />
                  </button>
                  <button className="action">
                    <FiEdit2
                      size={17}
                      color="#fff"
                      style={{ backgroundColor: '#f6a935' }}
                    />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}
