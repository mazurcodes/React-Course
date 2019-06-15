class App extends React.Component {
  state = {
    avaiable: 10,
    amount: 0
  };
  handleAmountButton = type => {
    if (type === "-") {
      this.setState(prevState => {
        return { amount: prevState.amount - 1 };
      });
    } else if (type === "+") {
      this.setState(prevState => {
        return { amount: prevState.amount + 1 };
      });
    }
  };
  handleBuy = () => {
    this.setState(prevState => {
      return { 
        avaiable: prevState.avaiable - prevState.amount,
        amount: 0
      };
    });
  };

  render() {
    const {amount, avaiable} = this.state;
    const {handleAmountButton, handleBuy} = this;
    
    return (
      <>
        <MinusButton
          status={amount == 0 ? true : false}
          click={handleAmountButton}
        />
        <AmountSpan amount={amount} />
        <PlusButton
          status={amount == avaiable ? true : false}
          click={handleAmountButton}
        />
        <BuyButton status={amount} click={handleBuy} />
        <NotAvaiable status={avaiable}/>
      </>
    );
  }
}

const MinusButton = props => {
  return (
    <button disabled={props.status} onClick={() => props.click("-")}>
      -
    </button>
  );
};

const PlusButton = props => {
  return (
    <button disabled={props.status} onClick={() => props.click("+")}>
      +
    </button>
  );
};

const AmountSpan = props => {
  return <span style={props.amount ? null : {opacity: 0.3}}>{props.amount}</span>;
};

const BuyButton = props => {
  if (props.status) {
    return (
      <button className="btnBuy" onClick={props.click}>
        Kupuj
      </button>
    );
  } else return null;
};
const NotAvaiable = props => {
  return ( props.status ? null : <span>Towar niedostępny</span> );
}

ReactDOM.render(<App />, document.getElementById("root"));
