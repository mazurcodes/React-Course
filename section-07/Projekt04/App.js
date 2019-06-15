class Form extends React.Component {
  state = {
    city: "London",
    text: "dfdf",
    isLoved: false,
    visitValue: 0
  };

  handleChange = e => {
    const id = e.target.name;
    if (id === "isLoved") {
      this.setState({ [id]: e.target.checked });
    } else {
      this.setState({ [id]: e.target.value });
    }
  };
  // handleCityChange = e => {
  //   this.setState({ city: e.target.value });
  // }
  // handleTextChange = e => {
  //   this.setState({ text: e.target.value });
  // }
  // handleCheckboxChange = e => {
  //   this.setState({ isLoved: e.target.checked });
  // }
  // handleVisitChange = e => {
  //   this.setState({ visitValue: e.target.value });
  // }
  render() {
    return (
      <div>
        <label> Podaj miasto: </label>
        <input
          name="city"
          value={this.state.city}
          onChange={this.handleChange}
          type="text"
        />
        ,<br />
        <label>Napisz coś o swoim mieście: </label>
        <textarea
          name="text"
          cols="30"
          rows="10"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <br />
        <label>Czy lubisz to miasto?</label>
        <input
          name="isLoved"
          type="checkbox"
          checked={this.state.isLoved}
          onChange={this.handleChange}
        />
        <br />
        <label>Ile razy byliście w tym mieście?</label>
        <select
          name="visitValue"
          value={this.state.visitValue}
          onChange={this.handleChange.bind(this)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="more">więcej</option>
        </select>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
