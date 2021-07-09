import React, { useState } from 'react';

import WorkoutsTable from './WorkoutsTable';
import WorkoutForm from './WorkoutForm';

export function App({ initialData }) {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts((previousWorkouts) => [...previousWorkouts, newWorkout]);
  };

  const removeWorkout = (uuid) => {
    setWorkouts((previousWorkouts) =>
      previousWorkouts.filter((workout) => workout.uuid !== uuid),
    );
  };

  return (
    <div className="container">
      <h1 className="centered-heading">{initialData.appName}</h1>
      <WorkoutForm onSubmit={addWorkout} />
      <hr />
      <WorkoutsTable workouts={workouts} onDestroy={removeWorkout} />
      <h1 className="centered-heading">10 hours of exercises</h1>
    </div>
  );
}
