import React from 'react';
import { Link } from 'react-router-dom';

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
      <tbody>
        <tr>
          <th scope="row">Açoita Cavalo</th>
          <td>Secundária</td>
          <td>MAI - AGO</td>
          <td>
            <a href="/acoita">Here</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
