import React from 'react';

const InsertItemForm = () => (
  <div className="insert-item-form">
    <input type="number" />
    <select name="type">
      <option value="running">Running</option>
      <option value="swimming">Swimming</option>
      <option value="bicycle">Bicycle</option>
    </select>
    <input type="date" name="date" />
    <input type="submit" value="Add" />
  </div>
);

export default InsertItemForm;
