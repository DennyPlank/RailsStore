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
    </div>
  )
}

export default Stores;