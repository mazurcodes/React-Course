const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male"
    },
    {
      id: 2,
      age: 37,
      name: "Bartek",
      sex: "male"
    },
    {
      id: 3,
      age: 19,
      name: "Róża",
      sex: "female"
    },
    {
      id: 4,
      age: 49,
      name: "Basia",
      sex: "female"
    }
  ]
};
const Item = props => (
  <div className="userInfo">
    <h1>Użytkownik: {props.content.name}</h1>
    <p>Informacje o użytkowniku</p>
    <p>
      Wiek użytkownika: <strong>{props.content.age} </strong>lat
    </p>
    <p>Płeć użytkownika: {props.content.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {
    usersFound: this.props.data.users.map(user => (
      <Item key={user.id} content={user} />
    ))
  };
  handleFemale = () => {
    this.setState({
      usersFound: this.props.data.users
        .filter(user => user.sex === "female")
        .map(user => <Item key={user.id} content={user} />)
    });
  };
  handleMale = () => {
    this.setState({
      usersFound: this.props.data.users
        .filter(user => user.sex === "male")
        .map(user => <Item key={user.id} content={user} />)
    });
  };
  handleAll = () => {
    this.setState({
      usersFound: this.props.data.users.map(user => (
        <Item key={user.id} content={user} />
      ))
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleMale}>Mężczyźni</button>
        <button onClick={this.handleFemale}>Kobiety</button>
        <button onClick={this.handleAll}>Wszyscy</button>
        {this.state.usersFound}
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
