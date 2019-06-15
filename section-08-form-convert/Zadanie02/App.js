class App extends React.Component {
  state = {
    personArray: [
      {id: 1, name: "Zbigniew Z."},
      {id: 2, name: "Katarzyna B."},
      {id: 3, name: "Kesnofon S."},
      {id: 4, name: "Eulidia P"},
      {id: 5, name: "Bartłomiej M."}
    ]
  };

  handleRemove = name => {
    const personArray = this.state.personArray.filter(person => person.name !== name);
    this.setState({ personArray });
  };
  
  render() {
    return (
      <div>
        <List list={this.state.personArray} click={this.handleRemove} />
      </div>
    );
  }
}
const List = ({ list, click }) => {
  const listOfPersons = list.map(person => (
    <Person key={person.id} name={person.name} click={click} />
  ));
  return <ul>{listOfPersons}</ul>;
};
const Person = ({ name, click }) => {
  return (
    <li>
      {name}
      <button onClick={() => click(name)}>Usuń</button>
    </li>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
