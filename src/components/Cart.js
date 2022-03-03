import React from "react";

function Cart({cart, updateQuantity}) {
  if(cart.quantity>0){
    const partialTotal = cart.quantity*cart.price;
      return (
    <div className="cartItem">
        <img className="imgCart" src={cart.image} alt={cart.id}/>
        <div className="details">
        <div className="Title">{cart.title}</div>
        <div className="updateNumber">
            <button className="arrow" id={cart.id} value="-" onClick={updateQuantity}>-</button>
            <div className="number">{cart.quantity}</div>
            <button className="arrow" id={cart.id} value="+" onClick={updateQuantity}>+</button>
        </div>
        <div className="partialTotal" id={cart.id}>&nbsp;{partialTotal.toFixed(2)} €</div>
        </div>
    </div>
  );
  }else{return null}
}

export default Cart;