import React from 'react';
import TableItem from './TableItem';

const ItemsTable = () => (
  <table className="items-table">
    <thead>
      <tr>
        <th>Tempo</th>
        <th>Tipo</th>
        <th>Data</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <TableItem />
    </tbody>
  </table>
);

export default ItemsTable;
