import React, { Component } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskListDone from "./TaskListDone";

class App extends Component {
  counter = 0;
  state = {
    tasks: []
  };
  // Tu został przkazany cały obiekt state z TaskForm i rozbity od razu na zmienne
  addTask = ({ name, date, enddate, priority, active, finishdate }) => {
    const id = this.counter;
    const task = { id, name, date, enddate, priority, active, finishdate };
    const tasks = this.state.tasks.concat(task);
    this.setState({ tasks });
    this.counter++;
  };

  doneTask = id => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.active = false;
        task.finishdate = new Date().getTime();
        return task;
      } else return task;
    });
    this.setState({ tasks });
  };

  removeTask = id => {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };
  render() {
    return (
      <div className="App">
        <TaskForm click={this.addTask} />
        <div className="spacer" />
        <TaskList
          tasks={this.state.tasks}
          done={this.doneTask}
          remove={this.removeTask}
        />
        <div className="spacer" />
        <TaskListDone tasks={this.state.tasks} remove={this.removeTask} />
      </div>
    );
  }
}

export default App;
