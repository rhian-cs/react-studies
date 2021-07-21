import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import workoutTypes from '../utils/workoutTypes';
import { capitalize } from '../utils/stringUtils';
import { validateWorkout } from '../validators/workoutValidator';

const workoutReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

const generateEmptyWorkout = () => ({
  uuid: uuidv4(),
  hours: 1,
  type: '',
  date: '',
});

const alertValidationErrors = (errors) => {
  const errorMessages = errors.map((message) => `• ${message}\n`).join('');

  alert('Please fix the following errors:\n' + errorMessages);
};

const WorkoutForm = ({ onSubmit }) => {
  const [workout, setWorkout] = useReducer(
    workoutReducer,
    generateEmptyWorkout(),
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const workoutValidation = validateWorkout(workout);

    if (!workoutValidation.valid) {
      alertValidationErrors(workoutValidation.validationErrors);
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
    <form onSubmit={handleSubmit} target="#" className="box">
      <h3>Insert an item</h3>
      <div className="columns">
        <div className="column">
          <input
            type="number"
            min="1"
            name="hours"
            value={workout.hours}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="column">
          <div className="select">
            <select name="type" onChange={handleChange} value={workout.type}>
              <option value="">Please select...</option>
              {workoutTypes.map((workoutType, index) => (
                <option key={index} value={workoutType}>
                  {capitalize(workoutType)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="column">
          <input
            type="date"
            name="date"
            value={workout.date}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="column">
          <input className="button is-primary" type="submit" value="Add" />
        </div>
      </div>
    </form>
  );
};

export default WorkoutForm;
