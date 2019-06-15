import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => {
    //     this.setState({ users });
    //   });
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        this.setState({ users });
      }
    }
    xhr.send(null)
  }

  render() {
    const users =  this.state.users.map(user => (
      <article key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
        <p>Adres:</p>
        <p>
          Ulica: {user.address.street}, {user.address.suite}
        </p>
        <p>Miasto: {user.address.city}</p>
      </article>
    ));
    return <div className="App">{this.state.users.length === 0 ? 'Fetching data...' : users}</div>;
  }
}

export default App;
