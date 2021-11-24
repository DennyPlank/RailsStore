import React from 'react';
const Products = (props) => {
  const renderProducts = () => {
    return props.products.map((p) => {
      return (
        <div> 
          <p> Product Name: {p.name} </p>
           <a href={`/stores/${props.store.id}/products/${p.id}`}> View </a> 
           <a> Edit </a>
           <a href={`/stores/${props.store.id}/products/${p.id}`} data-method="delete"> Delete </a>  
        </div>
      )
    });
  };
  return (
    <div>
      <h4> Store Name: {props.store.name}  </h4>
      <a href={`/stores/${props.store.id}/products/new`}> Add a Product! </a>
      <a href={`/stores`}> Back </a>
      <a href={`/`}> Home </a>
      {renderProducts()} 
    </div>
  )
}


export default Products;