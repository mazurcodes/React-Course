import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1";
class App extends Component {
  state = {
    users: [],
    msg: "Kliknij aby pobrać użytkowników"
  };

  handleFetch = () => {
    this.setState({ msg: "Fetching data...." });
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(response => response.json())
      .then(data => {
        const users = this.state.users.concat(data.results);
        this.setState({ users });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div className="App">
        <ButtonFetchUsers click={this.handleFetch} />
        {this.state.users.length === 0 ? (
          <p>{this.state.msg}</p>
        ) : (
          <UsersList users={this.state.users} />
        )}
      </div>
    );
  }
}

export default App;
