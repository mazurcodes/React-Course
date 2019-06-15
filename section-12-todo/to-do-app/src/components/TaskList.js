import React from 'react';
import Task from "./Task"

const TaskList = ({tasks, done, remove}) => {
  const listTasks = tasks.filter(task => task.active)
  const list = listTasks.map(task => (
    <Task task={task} key={task.id} done={done} remove={remove}></Task>
  ))
  return ( 
    <div className="taskform">
      <h2>Zadania do zrobienia ({listTasks.length})</h2>
      {list.length === 0 ? "Brak zadań do zrobienia, ale jesteś szczęśliwym człowiekiem :)" : list}
    </div>
   );
}
 
export default TaskList;