import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div id='navbar' style={{display:"flex",justifyContent:"space-around",
     alignItems:"center",
     gap:"10px"
    }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/product"}>Product Page</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/addtocart"}>Cart</Link>
    </div>
  )
}

export default Navbar
