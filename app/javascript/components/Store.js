import React from "react";
const Store = (props) => {
  return (
    <div>
      <a href='/'>Home</a>
      <a href='/stores'>Back</a>
      <p> Store Name: {props.store.name} </p>
      <p>Store ID: {props.store.id} </p>
    </div>
  )
}

export default Store;