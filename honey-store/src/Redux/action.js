export const getRequest=()=>{ return{type:"REQUEST"}}

export const getProductData=(payload)=>{ return{type:"PRODUCTSUCCESS",payload:payload} }

export const getProductDetailseData=(payload)=>{ return{type:"PRODUCTDETAILSSUCCESS",payload:payload} }

export const setCartData=(payload)=>{ return{type:"ADDTOCART",payload:payload} }
export const removeCartData=(payload)=>{ return{type:"REMOVETOCART",payload:payload} }

export const getError=()=>{return{type:"FAILUER"} }
