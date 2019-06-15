class App extends React.Component {
  state = {
    counter: 1,
    ratio: 2
  };
  handleClick = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter * prevState.ratio
      };
    });
  };
  componentDidUpdate() {
    const {counter, ratio} = this.state;
    if (counter > 1000 && ratio === 2) {
      this.setState({ ratio: 0.5 });
    } else if (counter < 1 && ratio === 0.5) {
      this.setState({ ratio: 2 });
    }
  }
  render() {
    const { counter, ratio } = this.state;
    return (
      <>
        <button onClick={this.handleClick}>Pomnóż przez {ratio}</button>
        <p>Aktualna wartość to: {counter}</p>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
