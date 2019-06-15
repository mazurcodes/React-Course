import React from "react";
import "../styles/ProductListPage.css";
import { Link } from "react-router-dom";

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

const ProductListPage = () => {
  const list = products.map(product => (
    <li key={product.name}>
      <Link to={`/product/${product.name}`}>{product.name}</Link>
    </li>
  ));

  return (
    <div className="products-list">
      <h2>List produktow</h2>
      <ul>{list}</ul>
    </div>
  );
};

export default ProductListPage;
