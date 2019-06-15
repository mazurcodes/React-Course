import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    checkbox: false,
    sentMsg: "",
    errors: {
      username: false,
      email: false,
      password: false,
      checkbox: false
    }
  };
  msgs = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: "Email musi zawierać @",
    password_incorrect: "Hasło musi zawierać 10 znaków",
    checkbox_incorrect: "Proszę wyraź zgodę na przetwarzanie danych"
  };
  handleChange = e => {
    const name = e.target.name;
    const value = name === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [name]: value });
  };
  resetForm = () => {
    this.setState({
      username: "",
      email: "",
      password: "",
      checkbox: false,
      sentMsg: "",
      errors: {
        username: false,
        email: false,
        password: false,
        checkbox: false
      }
    });
  };
  validateForm = () => {
    //Pre-setting object errors with true (if true - there is an error in field)
    const errors = {
      username: true,
      email: true,
      password: true,
      checkbox: true
    };
    const { username, email, password, checkbox } = this.state;

    //Valid conditions. If filed is valid then change error to false

    if (username.length > 9 && username.indexOf(" ") === -1) {
      errors.username = false;
    }
    if (email.indexOf("@") > 0) {
      errors.email = false;
    }
    if (password.length === 10) {
      errors.password = false;
    }
    if (checkbox) {
      errors.checkbox = false;
  }
    // Sending object errors to state

    this.setState({ errors });

    // If fields of form are valid then reset

    if (!errors.username && !errors.email && !errors.password && !errors.checkbox) {
      return true
    } else return false;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ sentMsg: "Formularz wysłany" });
      setTimeout(this.resetForm, 2000);
    };
    
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">
            Twoję imię:
            <input
              type="username"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {this.state.errors.username && (
              <span>{this.msgs.username_incorrect}</span>
            )}
          </label>

          <label htmlFor="email">
            Twój email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email && (
              <span>{this.msgs.email_incorrect}</span>
            )}
          </label>

          <label htmlFor="password">
            Twoję hasło:
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.errors.password && (
              <span>{this.msgs.password_incorrect}</span>
            )}
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              id="accept"
              name="checkbox"
              checked={this.state.checkbox}
              onChange={this.handleChange}
            />
            Wyrażam zgodę na zapisanie się :)
            {this.state.errors.checkbox && (
              <span>{this.msgs.checkbox_incorrect}</span>
            )}
          </label>

          <button>Zapisz się</button>
          <span>{this.state.sentMsg}</span>
        </form>
      </div>
    );
  }
}

export default App;
