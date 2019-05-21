class Counter extends React.Component {
  state = {
    count: 0,
    result: 0
  };
  handleMathClick = (type, number) => {
    // debugger;
    if (type === "substraction") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - Number(number)
      }));
    } else if (type === "reset") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: 0
      }));
    } else if (type === "addition") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + Number(number)
      }));
    }
  }
  render() {
    return (
      <>
        <MathButton
          name="-10"
          number="10"
          type="substraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="Reset"
          type="reset"
          click={this.handleMathClick}
        />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <ResultComponent 
          counter={this.state.count}
          result={this.state.result}
        />
      </>
    );
  }
}

const MathButton = props => {
  console.log(props);
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

// Komponent for results

const ResultComponent = props => {
  return (
    <>
      <h1>Liczba kliknięć: {props.counter}</h1>
        <h1>Wynik: {props.result}</h1>
    </>
  )
}

ReactDOM.render(<Counter />, document.getElementById("root"));
