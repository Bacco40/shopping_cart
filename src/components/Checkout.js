import React from "react";
import Cart from "./Cart";

function Checkout({cart, updateQuantity}) {
  let total =0;
  for(let i=0;i<cart.length;i++){
    total=total+(cart[i].quantity*cart[i].price);
  }
  if(total===0){
    return(
      <div className="pages">
        <h1>Checkout</h1>
        <div className="cart">
          <div className="total">Your Cart is Empty</div>
        </div>
      </div>
    )
  }else{
    return (
    <div className="pages">
      <h1>Checkout</h1>
      <div className="cart">
        {cart.map((cart)=>(
          <Cart cart={cart} updateQuantity={updateQuantity}/>
        ))} 
        <div className="total">Total : {total} €</div>
      </div> 
    </div>
  );
  }
}

export default Checkout;