class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cos: "Hello"
    };
    console.log("Metoda w constructor");
  }
  handleChange = () => {
    this.setState({ cos: "Heeeeeeellllloooooo" });
  };
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    console.log("Component Will Mount");
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Component Update");
  }
  render() {
    console.log("Metoda w render");
    return (
      <div>
        <h2>Lifecycle - cykl życia komponentów w React - {this.state.cos}</h2>
        <button onClick={this.handleChange}>Zmiana</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
