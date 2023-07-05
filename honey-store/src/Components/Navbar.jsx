import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div id='navbar'>
      <Link to={"/"}>Home</Link>
      <Link to={"/product"}>Product Page</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/addtocart"}>Cart</Link>
    </div>
  )
}

export default Navbar
