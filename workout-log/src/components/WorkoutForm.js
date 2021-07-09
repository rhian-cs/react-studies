import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { validWorkout } from '../validators/workoutValidator';

const workoutReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const generateEmptyWorkout = () => ({
  uuid: uuidv4(),
  hours: 0,
  type: '',
  date: '',
});

const WorkoutForm = ({ onSubmit }) => {
  const [workout, setWorkout] = useReducer(
    workoutReducer,
    generateEmptyWorkout(),
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validWorkout(workout)) {
      return;
    }

    onSubmit(workout);
    setWorkout({ name: 'uuid', value: uuidv4() });
  };

  const handleChange = (event) => {
    setWorkout({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} target="#" className="insert-workout-form">
      <input type="number" name="hours" onChange={handleChange} />
      <select name="type" onChange={handleChange}>
        <option value="" selected="selected">
          Please select...
        </option>
        <option value="running">Running</option>
        <option value="swimming">Swimming</option>
        <option value="bicycle">Bicycle</option>
      </select>
      <input type="date" name="date" onChange={handleChange} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default WorkoutForm;
