import React, { Component } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    title: "Wiadomość numer 1",
    body: "Zawartość wiadomości numer 1 ..."
  }
];

setInterval(() => {
  const idIndex = data.length + 1;
  data.unshift({
    id: idIndex,
    title: `Wiadomość numer ${idIndex}`,
    body: `Zawartość wiadomości numer ${idIndex} ...`
  });
}, 4000);

class App extends Component {
  state = {
    comments: [...data]
  };

  componentDidMount() {
    this.updateInterval = setInterval(() => {
      this.setState({ comments: [...data] });
    }, 4000);
  }
  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }
  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h2>{comment.title}</h2>
        <p>{comment.body}</p>
      </div>
    ));
    return <div className="App">{comments}</div>;
  }
}

export default App;
