import React from "react";
const Stores = (props) => {
  const renderStores = () => {
  return props.stores.map((store)=>{
    return(
      <div>
        <p> Store Name: {store.name} </p>
        <p>Store ID: {store.id} </p>
        <a href ={`/stores/${store.id}`}> View </a>
        <a href ={`/stores/${store.id}/edit`}> Edit </a>
        <a href ={`/stores/${store.id}`} data-method="delete"> Delete </a>
      </div>
    );
  })
}
  return (
    <div>
      <p>View All Stores Here</p>
      <a href ='/stores/new'> New Store </a>
      <a href='/'>Home</a>
      {renderStores()}
    </div>
  )
}

export default Stores;