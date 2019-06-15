import React from 'react';
import "../styles/Product.css"

const products = [
  {
    name: "Suszarka",
    price: "100zl",
    description: "Suszarka jak to suszarka... suszy i tyle :)"
  },
  {
    name: "Pralka",
    price: "700zl",
    description: "Pralka jak to pralka... pierze i tyle :)"
  },
  {
    name: "Samochod",
    price: "23100zl",
    description: "Wozi dupsko do pracy i z powrotem"
  },
  {
    name: "Ostatni majonez",
    price: "10zl",
    description: "Ostatni wiec drogi"
  }
];



const Product = (props) => {
  const product = products.filter(item => item.name === props.match.params.name);
  return (
    <div className="product">
      <h1 className="prod-name">Nazwa: {product[0].name}</h1>
      <p className="prod-name">Cena: {product[0].price}</p>
      <h3 className="prod-name">Opis: {product[0].description}</h3>
    </div>
  )
}

export default Product
