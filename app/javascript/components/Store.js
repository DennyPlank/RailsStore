import React from "react";
const Store = (props) => {
  return (
    <div id="view_store">
      <div id='view_store_nav'>
      <a href='/'>Home </a>
      <a href='/stores'>Back</a>
      </div>
      <h4> Store Name: {props.store.name} </h4>
      {/* <p href={`stores/${props.store.id}/products/${props.products.all}`}> *Replace with products* </p> */}
    </div>
  )
}

export default Store;