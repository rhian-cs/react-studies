import * as React from 'react';

import ItemsTable from './ItemsTable';
import InsertItemForm from './InsertItemForm';

export function App({ initialData }) {
  return (
    <div className="container">
      <h1 className="centered-heading">{initialData.appName}</h1>
      <InsertItemForm />
      <hr />
      <ItemsTable />
      <h1 className="centered-heading">10 hours of exercises</h1>
    </div>
  );
}
