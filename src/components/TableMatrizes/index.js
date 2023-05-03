import React from 'react';
import './table.css';
// import { TrMatrizes } from '../../screens/Flora';
import cadastroMatrizes from '../../screens/Flora/Matrizes/cadastroMatrizes';
import { FcInspection } from 'react-icons/fc';

export default function TableMatrizes({ col1, col2, col3, col4 }) {
  return (
    <table className="table table-hover">
      <thead className="font-2-s">
        <tr>
          <th scope="col">{col1}</th>
          <th scope="col">{col2}</th>
          <th scope="col">{col3}</th>
          <th scope="col">{col4}</th>
        </tr>
      </thead>
      <TrMatrizes />
    </table>
  );
}

export function TrMatrizes() {
  return (
    <>
      {cadastroMatrizes.map(item => {
        return (
          <tbody key={item.id}>
            <tr className="font-2-xs">
              <td data-label="Nome" scope="row">
                {item.nome}
              </td>
              <td data-label="Classe">{item.classe}</td>
              <td data-label="Coleta de Sementes">{item.coleta}</td>
              <td data-label="Ficha técnica">
                <a href={item.link}>
                  <FcInspection size={25} />
                </a>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
