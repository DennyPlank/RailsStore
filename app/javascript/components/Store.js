import React from "react";
const Store = (props) => {
  return (
    <div id="view_store">
      <div id='view_store_nav'>
      <a href='/'>Home </a>
      <a href='/stores'>Back</a>
      </div>
      <h1> Store Name: {props.store.name} </h1>
    </div>
  )
}

export default Store;