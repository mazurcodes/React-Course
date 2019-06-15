import React from 'react';

const Task = ({task, done, remove}) => {
  const {id, name, enddate, priority, active} = task;
  if (active) return ( 
    <li className="task">
      <strong className={priority ? "red" : null}>{name}</strong>- do {enddate} <button onClick={() => done(id)}>Zostało zrobione</button><button onClick={() => remove(id)}>X</button>
    </li>
   );
   return null
  }
 
export default Task;