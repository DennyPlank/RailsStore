import React from "react";

const Home = (props) => {
  return (
    <div>
      <p> Welcome to StoreDepot! </p>
      <a href ='/'> Home </a>
      <a href ='/stores'> View All </a>
      <a href ='/store'> View One </a>
      <a href ='/stores/new'> Edit </a>
      <a> Delete </a>
    </div>
  )
}

export default Home;