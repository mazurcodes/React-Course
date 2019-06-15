class App extends React.Component {
  state = {
    clockActive: true
  };
  handleClock = () => {
    this.setState(prevState => {
      return { clockActive: !prevState.clockActive };
    });
  };
  render() {
    return (
      <>
        {this.state.clockActive && <Clock />}
        <SwitchBtn active={this.state.clockActive} click={this.handleClock} />
      </>
    );
  }
}

const SwitchBtn = ({ click, active }) => {
  return <button onClick={click}>{active ? "Wyłącz" : "Włącz"}</button>;
};

class Clock extends React.Component {
  state = {
    time: "",
    intervalIndex: 0
  };
  clock = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    this.setState({ time }); //time : time
  };
  componentDidMount() {
    this.clock();
    const indexInt = setInterval(this.clock, 1000);
    this.state.intervalIndex = indexInt;
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalIndex);
  }
  render() {
    return (
      <>
        <p>{this.state.time}</p>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
