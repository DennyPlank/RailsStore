import React, { useState } from 'react'
const Counter = () => {
  const [count, setCount] = useState(0);
  const [totalClickCount, setTotalClickCount] = useState(0);

  const add = () => {
    setCount(count + 1)
    setTotalClickCount(totalClickCount + 1)
  }
  const minus = () => {
    setCount(count - 1)
    setTotalClickCount(totalClickCount + 1)
  }
  
  return (
    <div>
      <p> Demo here </p>
      <p> count: {count} </p>
      <p> total click count: {totalClickCount} </p>
      
      <button onClick={add}>add</button>
      <button onClick={minus}>subtract</button>
    </div>
  );
}

export default Counter;
