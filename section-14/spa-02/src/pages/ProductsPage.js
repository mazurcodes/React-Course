import React from 'react';
import {Link } from "react-router-dom";
import Product from "../components/Product"

const ProductsPage = (props) => {
  return (
    <div className="product">
      <Product {...props}/>
      <Link to="/products">powrot do listy produktow</Link>
    </div>
  )
}

export default ProductsPage