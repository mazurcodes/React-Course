import React, { Component } from "react";

class App extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  };
  render() {
    const styles = {
      padding: "5px 20px",
      color: "white",
      border: "3px solid red",
      backgroundColor: "#333"
    };
    if (this.state.isClicked) {
      styles.color = "red";
      styles.padding = "50px";
    }

    return (
      <div>
        <button style={styles} onClick={this.handleClick}>
          {this.state.isClicked ? "Wyłacz" : "Włącz"}
        </button>
      </div>
    );
  }
}

export default App;
