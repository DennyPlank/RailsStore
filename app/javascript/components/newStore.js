import React from 'react'

const newStore = () => {
  return (
    <div id='new_store'>
      <p> Thanks for choosing StoreDepot for you business!</p>
        <p>Whats the name of your new store?</p>
      
      <form action='/stores/' method="post"> 
        <input name="store[name]"/>
        <button type="submit">Add Store</button>
      </form>
      
      <div id='new_store_nav'>
      <a href='/stores'> Cancel </a>
      <a href='/'>Home</a>
      </div>
    </div>
  )
}

export default newStore