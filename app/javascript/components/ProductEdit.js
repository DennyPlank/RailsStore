import React from 'react'

const ProductEdit = (props) => {
  let product = props.product
  
  return (
    <div>
       <h2> What would you like the new name to be?</h2>
       <p> Current Name: {product.name} </p>
    
     <form action={`/stores/${props.store.id}/products/${product.id}`} method="post"> 
      <input type='hidden' name='_method' value="patch"/>
      <input name="store[name]"/>
      <button type="submit">Edit Product</button>
    </form>
    <div>
     <a href={`/stores/${props.store.id}/products`}> Cancel </a>
     <a href='/'>Home</a>
      </div> 
   </div>
  )
}

export default ProductEdit;