import React from 'react'

const initialState={
     isLoading: false,
     isError:false,
     productData:[],
     productDetails:{},
     cartItems:[],
     loginData: [],
}
const reducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case "REQUEST":{ return{ ...state,isLoading:true}}

        case "ADD_LOGIN_DATA":
           { return { ...state, loginData: [...state.loginData, payload] }}

        case "PRODUCTSUCCESS":{ return{ ...state,isLoading:false,productData:payload}}
        
        case "PRODUCTDETAILSSUCCESS":{ return{ ...state,isLoading:false,productDetails:payload}}

        case "ADDTOCART":{ return{ ...state,isLoading:false,cartItems:[...state.cartItems,payload]}}

        case "REMOVETOCART":{ return{ ...state,isLoading:false,cartItems:[...state.cartItems.filter((elm)=>{return elm.id !== payload.id})]}}

        case "FAILUER":{ return{ ...state,isError:true,isLoading:false,productData:[]}}

        case "RESETCART":{ return{ ...state,cartItems:[]}}

        default: {return state}
            
    }
}

export default reducer
