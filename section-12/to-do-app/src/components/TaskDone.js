import React from 'react';

const Task = ({task, remove}) => {
  const {id, name, enddate} = task;
  const date = new Date().toLocaleString();
  return ( 
    <li className="task">
      <strong>{name}</strong>- do {enddate} - potwiedzenie wykonania: {date} <button onClick={() => remove(id)}>X</button>
    </li>
   );
  }
 
export default Task;