import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams,Link} from "react-router-dom"
import { getError, getProductDetailseData, getRequest, setCartData } from '../Redux/action'
import axios from 'axios'

const ProductDetails = () => {
  const {id}=useParams()
  const {productDetails,cartItems}=useSelector((store)=>store);
  const Dispatch=useDispatch();

  useEffect(() => {
    Dispatch(getRequest())
    axios.get(`https://backendhoneystore.onrender.com/honeyData/${id}`)
    .then((res)=> Dispatch(getProductDetailseData(res.data)))
    .catch(()=> Dispatch(getError()))
  }, [])
  
const addToCart=(elm)=>{
  Dispatch(setCartData(elm));
}

   console.log(cartItems)
  console.log(productDetails);
  return (
    <div id='productDetails'>
      <div id="left">
        <img src={productDetails.image} alt="" />
        <img src={productDetails.image2} alt="" />
      </div>
      <div id="right">
        <div id="productInfo">
          <h1>{productDetails.name}</h1>
          <b> Rating:- {productDetails.rating}</b>  <br/>
          <b> Price :- ₹ {productDetails.price}</b> <br/>
          <div>

         <button onClick={()=>{addToCart(productDetails)}}>Add to Cart</button>
        <Link to="/product"><button >Return</button></Link> 
          </div>


        </div>
        <div id="aboutProduct">
          <h2>Product Description</h2>
          <p>{productDetails.description}</p>
          
          <h2>Ingredients</h2>
          
            <span>100 % pure Honey</span>
          
          
        </div>
        
      </div>

    </div>
  )
}

export default ProductDetails
