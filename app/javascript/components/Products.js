import React from 'react';
const Products = (props) => {
  const renderProducts = () => {
    return props.products.map((p) => {
      return (
        <div> 
          <p> Show me the money </p>
          <p> Product Name: {p.name} </p>
           <a href={`/stores/${props.store.id}/products/${p.id}`}> View </a> 
           <a> Edit </a>
           <a href={`/stores/${props.store.id}/products/${p.id}`} data-method="delete"> Delete </a>  
           <a href={`/stores`}> Back </a>
        </div>
      )
    });
  };
  return (
    <div>
      <h4> Store Name: {props.store.name}  </h4>
      <a href={`/stores/${props.store.id}/products/new`}> Add a Product! </a>
      {renderProducts()} 
    </div>
  )
}


export default Products;