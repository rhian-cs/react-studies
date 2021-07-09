import React from 'react';

const WorkoutTableItem = ({ hours, type, date }) => (
  <tr>
    <td>{hours}h</td>
    <td>{type}</td>
    <td>{date}</td>
    <td>
      <button>Delete</button>
    </td>
  </tr>
);

export default WorkoutTableItem;
