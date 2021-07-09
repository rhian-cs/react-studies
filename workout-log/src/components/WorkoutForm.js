import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  const [item, setItem] = useReducer(workoutReducer, generateEmptyWorkout());

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item);
    setItem({ name: 'uuid', value: uuidv4() });
  };

  const handleChange = (event) => {
    setItem({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} target="#" className="insert-item-form">
      <input type="number" name="hours" onChange={handleChange} />
      <select name="type" onChange={handleChange}>
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
