const currencyData = [
  { id: 0, name: "PLN", ratio: 1 / 1, title: "Wartość w złotówkach: " },
  { id: 1, name: "USD", ratio: 1 / 3.73, title: "Wartość w dolarach: " },
  { id: 2, name: "Euro", ratio: 1 / 4.28, title: "Wartość w euro: " },
  { id: 3, name: "Yen", ratio: 1 / 0.035, title: "Wartość w yenach: " },
  { id: 4, name: "Yuan", ratio: 1 / 0.55, title: "Wartość w yuanach: " },
  { id: 5, name: "AUD", ratio: 1 / 2.65, title: "Wartość w dolarach australiskich: "}
];

const products = [
  { id: 1, name: "prąd", units: "kWh", price: 0.51, title: " Podaj ilość" },
  { id: 2, name: "benzyna", units: "litrów", price: 5.04, title: " Podaj ilość"},
  { id: 3, name: "pomarańcze", units: "kg", price: 2.3, title: " Podaj ilość" },
];
class App extends React.Component {
  state = {
    pricePLN: 0.51,
    amount: "",
    product: "prąd",
    units: "kWh"
  };
  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleSelectChange = e => {
    const productName = e.target.value;
    const productPrice = products.filter(item => item.name === productName)[0].price;
    const productUnits = products.filter(item => item.name === productName)[0].units;

    this.setState({
      pricePLN: productPrice,
      product: productName,
      amount: "",
      units: productUnits
    });
  };

  render() {
    const { product, amount, pricePLN, units } = this.state;
    // debugger
    return (
      <div>
        <Select product={product} click={this.handleSelectChange} /><br/>
        <Input amount={amount} click={this.handleChange} units={units} />
        <ListCurrency amount={amount} price={pricePLN} />
      </div>
    );
  }
}
const Select = ({ product, click }) => {
  const optionList = products.map(item => (
    <option value={item.name}>{item.name}</option>
  ));
  return (
    <>
      <label>Wybież produkt: </label>
      <select value={product} onChange={click}>
        {optionList}
      </select>
    </>
  );
};

const Input = ({ click, amount, units }) => {
  return (
    <>
    <label>Wpisz ilość: </label>
      <input value={amount} onChange={click} />
      <span> {units}</span>
    </>
  );
};

const ListCurrency = ({ amount, price }) => {
  const list = currencyData.map(item => (
    <li>
      {item.title}
      {(amount * price * item.ratio).toFixed(2)} {item.name}
    </li>
  ));
  return <ul>{list}</ul>;
};

ReactDOM.render(<App />, document.getElementById("root"));
