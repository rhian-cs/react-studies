import React from 'react';

import { capitalize } from '../utils/stringUtils';

const WorkoutTableItem = ({ uuid, hours, type, date, onDestroy }) => (
  <tr>
    <td>{hours}h</td>
    <td>{capitalize(type)}</td>
    <td>{date}</td>
    <td>
      <button className="delete-button" onClick={() => onDestroy(uuid)}>
        &ndash;
      </button>
    </td>
  </tr>
);

export default WorkoutTableItem;
