import React from "react";
import {useState} from "react";
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import{faAnglesLeft, faPlus} from '@fortawesome/free-solid-svg-icons';
library.add(faAnglesLeft,faPlus);



function ItemDetail({items, handleCartAdd}) {
  const { id } = useParams();
  let item={};
  let [quantity,setQuantity] = useState(1);
  let [goCheck,setGoCheck] = useState(false);

  for(let i=0;i<items.length;i++){
      if(+items[i].id === +id){
          item=items[i];
      }
  }

  const handleUpdate = (e) =>{
    setGoCheck(true);
  }

  const updateQuantity = (e) =>{
    const{value} = e.target;
    if(quantity>=1){
      if(value==='+'){
        setQuantity(quantity + 1);
      }else if(quantity!==1){
        setQuantity(quantity - 1);
      }
    }
  }

  return (
    <div className="pages">
      <div className="itemDetail">
        <div className="imgDiv">
            <img className="bigImage" src={item.image} alt={item.title}/>
        </div>
        <div className="details2">
            <div className="title2">{item.title}</div>
            <div className="price">{item.description}</div>
            <div className="updateNumber">
                <button className="arrow" value="-" onClick={(e) => updateQuantity(e)}>-</button>
                <div className="number">{quantity}</div>
                <button className="arrow" value="+" onClick={(e) => updateQuantity(e)}>+</button>
            </div>
            <div >{item.price.toFixed(2)}€</div> 
            {goCheck===false && 
                <button className="add2" id={item.id} name={item.price} onClick={(e)=>{handleCartAdd(e);handleUpdate(e);}} value={quantity}>
                    <FontAwesomeIcon icon="fa-solid fa-plus" />&nbsp;&nbsp; Add to cart
                </button> 
            }
            {goCheck===true && 
                <Link className="back" to='/cart'>
                    <button className="add3">
                        Go to checkout &nbsp;&nbsp;<FontAwesomeIcon icon="fa-solid fa-circle-check" />
                    </button> 
                </Link>
            }
            <Link className="back" to='/products'>
                <button className="checkout2"><FontAwesomeIcon icon="fa-solid fa-angles-left" />&nbsp;&nbsp; Back to shop</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;