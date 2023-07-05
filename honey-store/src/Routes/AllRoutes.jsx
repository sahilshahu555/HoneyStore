import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Login from '../Pages/Auth/Login'
import SignUp from '../Pages/Auth/SignUp'
import ProductDetails from '../Pages/ProductDetails'
import NotFound from '../Pages/NotFound'
import AddToCart from '../Pages/AddToCart'
import ThankYou from '../Pages/ThankYou'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/addtocart" element={<AddToCart/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/*" element={<NotFound/>}/>

      </Routes>
    </div>
  )
}

export default AllRoutes