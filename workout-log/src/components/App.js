import React, { useState } from 'react';

import WorkoutsTable from './WorkoutsTable';
import WorkoutForm from './WorkoutForm';

export function App({ initialData }) {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts((previousWorkouts) => [...previousWorkouts, newWorkout]);
  };

  return (
    <div className="container">
      <h1 className="centered-heading">{initialData.appName}</h1>
      <WorkoutForm onSubmit={addWorkout} />
      <hr />
      <WorkoutsTable workouts={workouts} />
      <h1 className="centered-heading">10 hours of exercises</h1>
    </div>
  );
}
