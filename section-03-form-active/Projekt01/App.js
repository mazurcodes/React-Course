class App extends React.Component {
  state = {
    value: "",
    h1value: ""
  };
  handleInputChange(e) {
    this.setState({
      value: e.target.value
    });
  }
  handleClick = () => {
    this.setState({
      h1value: this.state.value
    });
  };
  handle;

  render() {
    return (
      <>
        <input
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
          type="text"
        />
        <button onClick={this.handleClick}>Reset</button>
        <h1 className="title">{this.state.h1value}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
