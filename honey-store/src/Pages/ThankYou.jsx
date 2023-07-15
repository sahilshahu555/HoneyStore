import React from 'react'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getReset } from '../Redux/action';

const ThankYou = () => {
const Dispatch=useDispatch();
  return (
    <div>
     
      
        <button onClick={()=>Dispatch(getReset())}>
        <Link to="/">
        <h1 id='a3' >Click here to redirecting Home Page</h1>
        <img src="https://d1v7g7y4y70yfq.cloudfront.net/02-Blog/Main-Blog-Illustrations/blog-2020-04-07-how_to_say_thank_you_in_business.png?d=800" alt=""  />
        
        </Link></button>
    </div>
  )
}

export default ThankYou
