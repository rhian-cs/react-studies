import React from 'react';

const WorkoutTableItem = ({ uuid, hours, type, date, onDestroy }) => (
  <tr>
    <td>{hours}h</td>
    <td>{type}</td>
    <td>{date}</td>
    <td>
      <button onClick={() => onDestroy(uuid)}>Delete</button>
    </td>
  </tr>
);

export default WorkoutTableItem;
