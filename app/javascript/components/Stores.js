import React from "react";
const Stores = (props) => {
  const renderStores = () => {
   return props.stores.map((store)=>{
    return (
      <div id="stores">
        <h4> Store Name: {store.name} </h4>
        <p>Store ID: {store.id} </p>
        <a href ={`/stores/${store.id}`}> View </a>
        <a href ={`/stores/${store.id}/edit`}> Edit </a>
        <a href ={`/stores/${store.id}`} data-method="delete"> Delete </a>
        <p> View the catalog for {`${store.name}`}</p>
      </div>
    );
  });
};
  return (
    <div>
      <h3 id='store_title'>{`View our collection of stores here:`}</h3>
      <div id='store_nav'>
      <a href ='/stores/new'> New Store </a>
      <a href='/'>Home</a>
      </div>
      {renderStores()}
    </div>
  );
};

export default Stores;