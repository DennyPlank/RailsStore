import React from "react";
const Stores = (props) => {
  const renderStores = () => {
  return props.stores.map((store)=>{
    return(
      <div>
        <p> Store Name: {store.name} </p>
        <p>Store ID: {store.id} </p>
      </div>
    );
  })
}
  return (
    <div>
      <p>View All Stores Here</p>
      <a href='/'>Home</a>
      {renderStores()}
      <a href ='/stores/:id'> View One </a>
      <a href ='/stores/new'> New Store </a>
      <a> Delete </a>
    </div>
  )
}

export default Stores;