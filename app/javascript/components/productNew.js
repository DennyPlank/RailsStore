import React from 'react'

const productNew = (props) => {
  return (
    
    <div>
       <h2> What is the name of the new Product? </h2>
      
      <form action= {`/stores/${props.store.id}/products/new`} method="post">
      <input name="product[name]"/>
      <button type="submit"> Create Product </button>
      </form> 
    
    <div>
      <a href='/stores'> Cancel </a>
      <a href='/'>Home</a>
    </div> 
   </div>
  );
};

export default productNew;