import React from 'react';
import WorkoutTableItem from './WorkoutTableItem';

const WorkoutsTable = ({ workouts, onDestroy }) => (
  <div style={{ 'overflow-x': 'auto' }}>
    <table className="items-table">
      <thead>
        <tr>
          <th>Tempo</th>
          <th>Tipo</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => {
          return (
            <WorkoutTableItem
              key={workout.uuid}
              {...workout}
              onDestroy={onDestroy}
            />
          );
        })}
      </tbody>
    </table>
  </div>
);

export default WorkoutsTable;
