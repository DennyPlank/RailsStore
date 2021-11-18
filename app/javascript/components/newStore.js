import React from 'react'

const newStore = () => {
  return (
    <div>
      <p> Thanks for choosing StoreDepot for you business!</p>
      <a href='/'>Home</a>
      <form action="/stores/:id" method="post"> 
        <p>Whats the name of your new store?</p>
        <input name="store[name]"/>
        <button type="submit">Add Store</button>
        <a href='/stores'> Cancel </a>
      </form>
    </div>
  )
}

export default newStore