import React from 'react'

const newStore = () => {
  return (
    <div>
      <p>New store form here</p>
      <a href='/'>Home</a>
      <a href='/stores'>Back to subs</a>
      <a href='/stores/:id/edit'>Edit</a>
      <form action="/stores" method="post"> 
        <p>name</p>
        <input name="store[name]" />
        <button type="submit">Add Store</button>
      </form>
    </div>
  )
}

export default newStore