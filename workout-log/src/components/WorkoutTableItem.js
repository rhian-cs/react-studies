import React from 'react';

const WorkoutTableItem = ({ uuid, hours, type, date, onDestroy }) => (
  <tr>
    <td>{hours}h</td>
    <td>{type}</td>
    <td>{date}</td>
    <td>
      <button className="delete-button" onClick={() => onDestroy(uuid)}>
        &ndash;
      </button>
    </td>
  </tr>
);

export default WorkoutTableItem;
