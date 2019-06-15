const msgChecked = "Możesz kupić bilet i obejżeć film. Zapraszamy!";
const msgNotChecked =
  "Nie możesz obejżeć tego filmu jeżeli masz mniej niż 16 lat!";

class TicketShop extends React.Component {
  state = {
    checkBoxValue: false,
    isFormSubmit: false
  };
  handleChange = e => {
    // debugger;
    console.log(this);
    this.setState(prevState => {
      debugger
      return {
        checkBoxValue: !prevState.checkBoxValue,
        isFormSubmit: false
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmit)
      this.setState(prevState => {
        return {
          isFormSubmit: !prevState.isFormSubmit
        };
      });
  };

  handleMsg = () => {
    if (this.state.isFormSubmit && this.state.checkBoxValue) {
      return msgChecked;
    } else if (this.state.isFormSubmit && !this.state.checkBoxValue) {
      return msgNotChecked;
    }
  };

  render() {
    return (
      <>
        <Title />
        <form onSubmit={this.handleSubmit}>
          <Checkbox
            type="checkbox"
            checked={this.state.checkBoxValue}
            change={this.handleChange}
          />
          <BtnBuy />
        </form>
        <ShowMsg msg={this.handleMsg()} />
      </>
    );
  }
}

const Title = props => {
  return <h1>Kup bilet na horror roku!</h1>;
};

const Checkbox = props => {
  return (
    <>
      <input
        type={props.type}
        // checked={props.checked}
        onChange={props.change}
      />
      <label> Mam co najmniej 16 lat.</label>
    </>
  );
};

const BtnBuy = props => {
  // console.log(props.submit);
  return <button>Kup Bilet</button>;
};

const ShowMsg = props => {
  return <p>{props.msg}</p>;
};

ReactDOM.render(<TicketShop />, document.getElementById("root"));
