import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
       <Link to={"/"}>Home</Link> 
       <Link to={"/quiz"}>Quiz</Link>
       <Link to={"/results"}>Results</Link>
       <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  )
}

export default NavBar