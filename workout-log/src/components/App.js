import React, { useState } from 'react';

import ItemsTable from './ItemsTable';
import InsertItemForm from './InsertItemForm';

export function App({ initialData }) {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts((previousWorkouts) => [...previousWorkouts, newWorkout]);
    console.log(workouts);
  };

  return (
    <div className="container">
      <h1 className="centered-heading">{initialData.appName}</h1>
      <InsertItemForm onSubmit={addWorkout} />
      <hr />
      <ItemsTable />
      <h1 className="centered-heading">10 hours of exercises</h1>
    </div>
  );
}
