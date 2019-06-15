class App extends React.Component {
  state = {
    omenDrawn: "",
    valueOmen: "",
    divination: ["Pierwsza wróżba", "Druga wróżba", "Trzecia wróżba"]
  }

  handleDrawOmen = () => {
    const divCounter = this.state.divination.length;
    const omenIndex = Math.floor(Math.random() * divCounter)
    this.setState({ omenDrawn: this.state.divination[omenIndex] });
  }

  handleAddOmen = () => {
    this.state.valueOmen.trim().length > 0 ? this.state.divination.push(this.state.valueOmen): null;
    this.setState({ valueOmen: "" });
  }

  handleInput = e => {
    this.setState({ valueOmen: e.target.value });
  }
  render() {
    const {omenDrawn, valueOmen } = this.state;
    return (
      <div>
        <button onClick={this.handleDrawOmen}>Zobacz wróżbę</button><br/>
        <input value={valueOmen} type="text" onChange={this.handleInput}/>
        <button onClick={this.handleAddOmen}>Dodaj wróżbę</button>
        <h1>{omenDrawn}</h1>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'))