import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import workoutTypes from '../utils/workoutTypes';
import { capitalize } from '../utils/stringUtils';
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
    <form onSubmit={handleSubmit} target="#">
      <fieldset className="insert-workout-fieldset">
        <legend>Insert an item</legend>
        <input type="number" min="1" name="hours" onChange={handleChange} />
        <select name="type" onChange={handleChange} defaultValue="">
          <option value="">Please select...</option>
          {workoutTypes.map((workoutType, index) => (
            <option key={index} value={workoutType}>
              {capitalize(workoutType)}
            </option>
          ))}
        </select>
        <input type="date" name="date" onChange={handleChange} />
        <input type="submit" value="Add" />
      </fieldset>
    </form>
  );
};

export default WorkoutForm;
