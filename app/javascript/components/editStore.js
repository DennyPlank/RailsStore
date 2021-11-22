import React from 'react'

const editStore = (props) => {
  let store = props.store
  return (
    <div id="edit_store">
       <h2> What would you like the new name to be?</h2>
       <p> Current Name: {props.store.name} </p>
    
    <form action={`/stores/${store.id}`} method="post"> 
      <input type='hidden' name='_method' value="patch"/>
      <input name="store[name]"/>
      <button type="submit">Edit Store</button>
    </form>
    <div id="edit_store_nav">
     <a href='/stores'> Cancel </a>
     <a href='/'>Home</a>
      </div>
   </div>
  )
}

export default editStore;