import React from "react";
const Product = (props) => {
  return (
    <div>
      <h4> Store Name: {props.store.name}  </h4>
      <p>  {props.product.name} </p>
      <p>  {props.product.body} </p>
      <a href ={`/stores/${props.store.id}/products`}>Back</a>
    </div>
  );
};

export default Product;