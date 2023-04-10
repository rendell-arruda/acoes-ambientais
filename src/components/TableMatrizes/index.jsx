import React from 'react';
// import { TrMatrizes } from '../../screens/Flora';
import cadastroMatrizes from '../../screens/Flora/Matrizes/cadastroMatrizes';

export default function TableMatrizes({ col1, col2, col3, col4 }) {
  return (
    <table className="table table-hover table-md table-light ">
      <thead className="table-primary">
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
            <tr>
              <th scope="row">{item.nome}</th>
              <td>{item.classe}</td>
              <td>{item.coleta}</td>
              <td>
                <a href={item.link}>Link</a>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
