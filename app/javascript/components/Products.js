import React from 'react';

const Products = (props) => {
  const renderProducts = () => {
    console.log('hit products')
    return props.products.map((p) => {
      return (
        <div> 
          <p> product name: {p.name} </p>
        </div>
      )
    })
  }
  return (
    <div>
      {renderProducts()}
    </div>
  )
}


export default Products;