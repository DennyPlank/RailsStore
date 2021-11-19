import React from "react";
const Store = (props) => {
  return (
    <div>
      <a href='/'>
        <p>Home</p>
        </a>
      <a href='/stores'>Back</a>
      <h4> Store Name: {props.store.name} </h4>
      <p>Store ID: {props.store.id} </p>
    </div>
  )
}

export default Store;