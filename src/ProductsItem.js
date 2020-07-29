import React from "react";
import "./App.css";

function ProductsItem(props) {
  let product = props.products.filter((product) => product.id == props.id)[0];

  return (
    <div >
      <p> {product.item}</p> 
      <p> {product.description}</p> 
      <hr/>
      <p> {product.available}</p> 
    </div>
  );
}

export default ProductsItem;
