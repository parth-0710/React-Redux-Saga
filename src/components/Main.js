

import { addToCart ,removeFromCart,emptyCart} from '../redux/action.js';
import { useDispatch } from 'react-redux';
import {productList} from '../redux/productAction.js';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function Main() 
{
  const dispatch = useDispatch();
  const data=useSelector((state)=>state.productData);
  console.warn("data in main component from saga",data);

  const product = {
    name: 'i phone',
    category: 'mobile',
    price: 1000,
    color: 'red'
  }

  useEffect(()=>
  {
  dispatch(productList());
 },[])

  return (

    <div>
      <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button><br/>
      </div>
      <div>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button><br/>
      </div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(productList())}>Call Product List</button>
      </div>
      <div className='product-container'>
      {
        data.map((item)=><div className='product-item'>
        <img src={item.photo} alt=""/>
        <div>Name : {item.name}</div>
        <div>Color : {item.color}</div>
        <div>Brand : {item.brand}</div>
        <div>Price : {item.price}</div>
        <div>Category : {item.category}</div>
        <div>
        <button>Add To Cart</button>
        <button>Remove To Cart</button>
        </div>
        
        </div>)
      }

      </div>

    </div>
  );
}

export default Main;
