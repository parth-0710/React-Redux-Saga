
import { ADD_TO_CART,REMOVE_FROM_CART,EMPTY_CART} from "./constant";
export const cartData=(data=[],action)=>{
    
    
    // if(action.type===ADD_TO_CART){
    //     return data
    // }
    // else{
    //     return "no action called";
    // }
    // return 100;
    switch(action.type){
        case ADD_TO_CART:
            console.warn("ADD_TO_CART is called",action);
            return [action.data,...data];

            case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART is called",action);
            data.length=data.length?data.length-1:[]
            return [...data];

            case EMPTY_CART:
            console.warn("EMPTY_CART is called",action);
            data=[];
            return [...data];
       
    default:
        return data;
    }

}