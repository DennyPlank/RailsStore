import React from 'react'

const newStore = () => {
  return (
    <div>
      <p> Thanks for choosing StoreDepot for you business!</p>
        <p>Whats the name of your new store??</p>
      
      <form action='/stores/' data-method="post"> 
        <input name="store[name]"/>
        <button type="submit">Add Store</button>
      </form>
      
      <a href='/stores'> Cancel </a>
      <a href='/'>Home</a>
    </div>
  )
}

export default newStore