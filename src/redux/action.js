import {ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from "./constant";

export const addToCart=(data)=>{
    console.warn("add action is called",data);
    return{
        type:ADD_TO_CART,
        data
    }
}

export const removeFromCart=(data)=>{
    console.warn("remove action is called",data);
    return{
        type:REMOVE_FROM_CART,
        data
    }
}

export const emptyCart=()=>{
    console.warn("empty cart action called");
    return{
        type:EMPTY_CART,
        
    }
}

