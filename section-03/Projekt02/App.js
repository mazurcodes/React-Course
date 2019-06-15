class Message extends React.Component {
  state = {
    flagShow: false,
  };
  showHide = () => {
    if (this.state.flagShow) {
      this.setState({
        flagShow: !this.state.flagShow,
      });
    } else {
      this.setState({
        flagShow: !this.state.flagShow,
      });
    }
  };
  render() {
    const text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sunt at magnam et impedit sint ipsum ad illo minus molestiae quod culpa, repudiandae omnis dolores quam dolorem eos, inventore facere quae praesentium nostrum debitis quia. Inventore praesentium provident sit unde et mollitia libero tempora temporibus ab recusandae, fugit veniam deleniti magni repellendus sunt explicabo nobis placeat, ut earum sequi exercitationem incidunt modi rem. Perspiciatis, velit officia dolor assumenda eaque repellat quo autem esse quia error accusamus atque iure eum similique, beatae praesentium explicabo quidem eveniet? Odio atque voluptatibus ad quasi eaque, minus labore quam deserunt modi impedit. Esse nobis, mollitia dolores obcaecati tempora reprehenderit deserunt quasi delectus illo. Sint cum nemo voluptas quia sapiente sunt tempore, unde excepturi libero? Aut, consequatur cum dolore similique libero iure hic voluptas illo officiis maiores, quasi laudantium necessitatibus neque eaque. Voluptatum asperiores nesciunt suscipit unde. Obcaecati expedita mollitia dicta sunt. Velit quis beatae delectus nesciunt. Labore laboriosam consectetur laborum recusandae quos. Laudantium tempora assumenda aspernatur minima, soluta necessitatibus fugit animi sequi voluptatibus? Architecto nihil doloribus earum accusamus neque optio consectetur, consequuntur impedit iusto libero tempora qui, ducimus molestias voluptas quidem distinctio explicabo nemo eligendi sed odit odio adipisci. Soluta aut modi distinctio sequi pariatur?';

    return (
      <>
        <button onClick={this.showHide}>{this.state.flagShow ? "Ukryj" : "Pokaż"}</button>
        {this.state.flagShow && <p className="title">{text}</p>}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
