import React from 'react';
import { TrMatrizes } from '../../screens/Flora';

export default function Table({ col1, col2, col3, col4 }) {
  return (
    <table className="table">
      <thead className="thead-dark">
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
