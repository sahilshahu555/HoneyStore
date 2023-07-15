import {useState,useEffect} from 'react'
// import { Container } from '@chakra-ui/react'
import productImage from "../Images/product.png"
import axios from "axios"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getError, getProductData, getRequest } from '../Redux/action'

const Product = () => {
  let productData=useSelector((store)=>store.productData)
  const Dispatch=useDispatch()
  const [page,setPage]=useState(1);
  const [sort,setSort]=useState("");
  const [sortBy,setSortBy]=useState("name");
  const [sortOrder, setSortOrder] = useState("asc")
  const [limit,setLimit]=useState(12);

  
  const getHoney = (params) => {
    const queryParams = {}
  
    if (params.page) { queryParams._page = params.page }
  
    if (params.limit) { queryParams._limit = params.limit }
  
    if (params.sortBy) { queryParams._sort = params.sortBy }
  
    if (params.sortOrder) { queryParams._order = params.sortOrder }
  
    return axios({
       method: "get", 
       url: `https://backendhoneystore.onrender.com/honeyData`,  
       params: queryParams
    })
  }

    const getData=(page, limit, sortBy, sortOrder)=>{
      // let url=`http://localhost:8080/honeyData?_page=${page}&_limit=8`;

    Dispatch(getRequest())
    // axios.get(url)
    getHoney({ page, limit, sortBy, sortOrder })
    .then((res)=>Dispatch(getProductData(res.data))).catch(()=>Dispatch(getError()))
    }

useEffect(()=>{
    getData(page, limit, sortBy, sortOrder);
},[page, limit, sortBy, sortOrder ])

let total= Math.ceil(40/limit);

const arr=[total];
for(let i=0; i<total; i++){
  arr[i]=i+1;
}

 
   


  return (
    <div id='product'>
        <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)",padding:"10px"}}>
         <img src={productImage} alt="product" style={{margin:"auto",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} />
        </div>
        
     
{/* PAGINATION */}
      {/* <div className='pagination'>
        {arr.map((elm,id)=>(
          <button key={id} disabled={page===elm} onClick={()=>setPage(elm)}
          style={{backgroundColor:page===elm? "red": 'lightgreen'}}
          >{elm}</button>
        ))} 
      </div> */}

{/* SHORTING by Price */}
      <div id='sorting'>
        <div>
         <div>
          <b>Sort By :- </b>
          <select value={sortBy} onChange={(e)=>{setSortBy(e.target.value);setPage(1); }}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          </div>
            <div>

              {/*  */}
              <b>Sort Order:-</b>
            <select value={sortOrder} onChange={(e)=>{setSortOrder(e.target.value); setPage(1);}}>
             <option value="asc">{sortBy==="price"|| sortBy==="rating"? "Low to High":"ASCENDING"}</option>
             <option value="desc">{sortBy==="price"|| sortBy==="rating"? "High to Low":"DESCENDING"}</option>
            </select>
              {/*  */}
           
          </div>
        </div>
        

          <div className='pagination'>
          {arr.map((elm,id)=>(
            <button key={id} disabled={page===elm} onClick={()=>setPage(elm)}
            style={{backgroundColor:page===elm? "black": 'rgb(40, 140, 110)'}}
            >{elm}</button>
          ))} 
        </div>

        <div id="sort_order_section">
            <b>Limit By :- </b>
            <select value={limit} onChange={(e)=>{setLimit(e.target.value);setPage(1); }}>
              <option value="8">8</option>
              <option value="12">12</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
        </div>
      </div>


      <div id='allProducts' 
      style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"10px",padding:"20px"}}
      >
       {productData?.map((elm)=>(
      <Link to={  `/product/${elm.id}`} key={elm.id}>
        <div  id="product-item"
               style={{
                       padding :"20px",
                       borderRadius:"10px",
                        width:"90%",
                        margin:"20px"
                    }}
        >
          <img src={elm.image} alt=""  
           style={{width:"10vw",margin:"auto"}}
          />
          <h1> {elm.name}</h1>
          <b>Rating : {elm.rating}</b> <br />
          <b>Price : ₹ {elm.price}</b><br />
          <button>View Details</button>
        </div>
        </Link>
      ))}
      </div>

      <div className='pagination'>
        {arr.map((elm,id)=>(
          <button key={id} disabled={page===elm} onClick={()=>setPage(elm)}
          style={{backgroundColor:page===elm? "gray": 'white'}}
          >{elm}</button>
        ))} 
      </div>
    </div>
    
  )
}

export default Product
