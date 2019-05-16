class App extends React.Component {
  state = {
    text: '',
  }
  handleClick() {
    console.log(this);
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
        <h1>{this.state.text}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
