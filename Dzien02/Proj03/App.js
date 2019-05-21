class App extends React.Component {
  state = {
    text: '',
  }
  handleClick = () => {
    this.setState(
      {
        text: this.state.text + 'A'
      }
    );
  }
  handleClick2() {
    this.setState(
      {
        text: this.state.text + 'A'
      }
    );
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Dodaj A</button>
        <button onClick={this.handleClick2.bind(this)}>Dodaj A</button>

        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
