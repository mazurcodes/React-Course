import React, { Component } from "react";
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: [] //Żądanie Ajax
  };

  componentDidMount() {
    setTimeout(this.fetchData, 5000);
  }

  fetchData = () => {
    fetch("data/words.json")
      .then(response => response.json())
      .then(data => {
        this.setState({ words: data.words });
      });
  };

  render() {
    const words =
      this.state.words.length !== 0
        ? this.state.words.map((word, index) => (
            <Word key={word.id} index={index} word={word} />
          ))
        : "Fetching data...";

    return <div className="App">{words}</div>;
  }
}

export default App;
