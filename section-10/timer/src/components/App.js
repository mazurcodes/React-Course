import React, { Component } from "react";
import "./App.css";
import SwitchBtn from "./SwitchBtn";

class App extends Component {
  state = {
    seconds: 0,
    miliseconds: 0,
    active: false,
    intervalIndex: 0
  };
  timer = () => {
    if(this.state.miliseconds >= 100) {
      this.setState(prevState => ({ 
        miliseconds: 0,
        seconds: prevState.seconds + 1
      }));
    } else {
      this.setState(prevState => {
        return { miliseconds: prevState.miliseconds + 1 };
      });
    }

  };
  handleTimer = () => {
    if (this.state.active) {
      clearInterval(this.state.intervalIndex);
    } else {
      const intervalIndex = setInterval(this.timer, 10);
      this.setState({ intervalIndex });
    }
    this.setState(prevState => {
      return { active: !prevState.active };
    });
  };
  render() {
    const { seconds, miliseconds, active} = this.state;
    return (
      <div className="timer">
        <p>
          {seconds < 10 ? `0${seconds}`: seconds} : {miliseconds < 10 ? `0${miliseconds}` : miliseconds}
        </p>
        <SwitchBtn active={active} click={this.handleTimer} />
      </div>
    );
  }
}

export default App;