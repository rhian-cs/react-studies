import React, { useState } from 'react';

import WorkoutsTable from './WorkoutsTable';
import WorkoutForm from './WorkoutForm';

const sumReducer = (acc, cur) => acc + cur;

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

  const totalWorkoutHours = () => {
    if (!workouts.length) {
      return 0;
    }

    return workouts.map((workout) => Number(workout.hours)).reduce(sumReducer);
  };

  return (
    <div className="content has-text-centered">
      <h1>{initialData.appName}</h1>
      <WorkoutForm onSubmit={addWorkout} />
      <WorkoutsTable workouts={workouts} onDestroy={removeWorkout} />
      <h1>{totalWorkoutHours()} hours of exercises</h1>
    </div>
  );
}
