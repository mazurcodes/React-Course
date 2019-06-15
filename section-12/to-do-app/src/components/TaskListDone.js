import React from "react";
import TaskDone from "./TaskDone";

const TaskListDone = ({ tasks, remove }) => {
  const doneTaskList = tasks.filter(task => !task.active);
  doneTaskList.sort((a, b) =>  b.finishdate - a.finishdate)
  const list = doneTaskList.map(task => (
    <TaskDone task={task} key={task.id} remove={remove}></TaskDone>
  ))
  return (
    <div className="taskform">
      <h3>Zadania zrobione ({doneTaskList.length})</h3>
      {list}
    </div>
  );
};

export default TaskListDone;
