class App extends React.Component {
  state = {
    items: [
      {id:1, name: "herbata", active: true},
      {id:2, name: "ziemniaki", active: false},
      {id:3, name: "kasza", active: true},
      {id:4, name: "zupa wodzianka", active: false},
      {id:5, name: "wrzątek", active: false},
      {id:6, name: "chleb", active: true},
    ],
  }
  handleClick = id => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.active = !item.active;
      }
      return item
    })
    this.setState({
      items
    });
  }
  render() {
    return (
      <div>
        <Header items={this.state.items}/>
        <ListItems items={this.state.items} click={this.handleClick}/>
      </div>
    );
  }
}