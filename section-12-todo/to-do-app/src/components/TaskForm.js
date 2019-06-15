import React, { Component } from "react";

class TaskForm extends Component {
  state = {
    name: "",
    date: new Date().toISOString().substring(0, 10),
    enddate: new Date().toISOString().substring(0, 10),
    priority: false,
    active: true,
    finishdate: "",
    errors: {
      inputName: false,
      inputDate: false
    }
  };

  resetState = () => {
    this.setState({
      name: "",
      date: new Date().toISOString().substring(0, 10),
      enddate: new Date().toISOString().substring(0, 10),
      priority: false,
      active: true
    });
  };

  validateForm = () => {
    const errors = {
      inputName: true,
      inputDate: true
    };
    if (this.state.name.trim().length > 0) {
      errors.inputName = false;
      console.log("no errors name");
    }
    if (
      this.state.enddate.substring(0, 4) >= this.state.date.substring(0, 4) &&
      this.state.enddate.substring(5, 7) >= this.state.date.substring(5, 7) &&
      this.state.enddate.substring(8, 10) >= this.state.date.substring(8, 10)
    ) {
      errors.inputDate = false;
      console.log("no errors date");
    }
    this.setState({ errors });
    if (!errors.inputName && !errors.inputDate) return true;
  };

  handleAdd = e => {
    e.preventDefault();
    if (this.validateForm()) {
      // Uruchomienie funkcji przekazanej w propsach i przekazanie w niej obiektu state
      this.props.click(this.state);
      this.resetState();
    }
  };

  handleChangeName = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleChangePriority = e => {
    const priority = e.target.checked;
    this.setState({ priority });
  };

  handleChangeDate = e => {
    const enddate = e.target.value;
    this.setState({ enddate });
  };

  render() {
    return (
      <div className="taskform">
        <form>
          {this.state.errors.inputName && (
            <span>Proszę wprowadź poprawną nazwę zadania!</span>
          )}
          <input
            type="text"
            placeholder="dodaj zadanie..."
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <input
            type="checkbox"
            name="priority"
            id="priority"
            checked={this.state.priority}
            onChange={this.handleChangePriority}
          />
          <label htmlFor="priority">Priorytet</label>
          <br />
          <label htmlFor="date">
            Podaj datę zakończenia:{" "}
            <input
              type="date"
              name="date"
              id="date"
              min={this.state.date}
              value={this.state.enddate}
              onChange={this.handleChangeDate}
            />
            {this.state.errors.inputDate && (
              <span>Proszę wprowadź poprawną datę!</span>
            )}
          </label>
        </form>
        <button onClick={this.handleAdd}>Dodaj</button>
      </div>
    );
  }
}

export default TaskForm;
