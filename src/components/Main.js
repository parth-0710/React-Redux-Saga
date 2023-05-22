

import { addToCart ,removeFromCart,emptyCart} from '../redux/action.js';
import { useDispatch } from 'react-redux';


function Main() {
  const dispatch = useDispatch();
  const product = {
    name: 'i phone',
    category: 'mobile',
    price: 1000,
    color: 'red'
  }

  return (

    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button><br/>
      <div>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove From Cart</button><br/>
      </div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>


    </div>
  );
}

export default Main;
