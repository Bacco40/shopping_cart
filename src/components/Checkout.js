import React from "react";
import Cart from "./Cart";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import{faAnglesLeft, faCircleCheck} from '@fortawesome/free-solid-svg-icons';
library.add(faAnglesLeft, faCircleCheck);

function Checkout({cart, updateQuantity, handleCheckout ,complete}) {
  let total =0;
  for(let i=0;i<cart.length;i++){
    total=total+(cart[i].quantity*cart[i].price);
  }
  if(total === 0 && complete === 0){
    return(
      <div className="pages">
        <h1>Your shopping cart</h1>
        <div className="cart">
          <div className="total">Your Cart is Empty</div>
            <Link className="cartBottom" to='/products'>
              <button className="checkout2"><FontAwesomeIcon icon="fa-solid fa-angles-left" />&nbsp;&nbsp; Back to shop</button>
            </Link>
        </div>
      </div>
    )
  }else{
    if(complete === 0){
      return (
        <div className="pages">
          <h1>Your shopping cart</h1>
          <div className="cart">
            {cart.map((cart)=>(
              <Cart key={cart.id} cart={cart} updateQuantity={updateQuantity}/>
            ))} 
            <div className="cartBottom">
              <div className="total">Total : {total.toFixed(2)} €</div>
              <button className="checkout" onClick={handleCheckout}>Checkout&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon="fa-solid fa-circle-check" /></button>
            </div>
            <Link className="back" to='/products'>
              <button className="checkout2"><FontAwesomeIcon icon="fa-solid fa-angles-left" />&nbsp;&nbsp; Back to shop</button>
            </Link>
          </div>
        </div>
      );
    }else{
      return(
        <div className="pages">
          <h1>Your shopping cart</h1>
          <div className="cart">
            <div className="total">Thanks for your order!</div>
              <Link className="cartBottom" to='/products'>
                <button className="checkout2"><FontAwesomeIcon icon="fa-solid fa-angles-left" />&nbsp;&nbsp; Back to shop</button>
              </Link>
          </div>
        </div>
      )
    }
  }
}

export default Checkout;