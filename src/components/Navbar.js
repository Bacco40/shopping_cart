import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import{faCartShopping} from '@fortawesome/free-solid-svg-icons';
library.add(faCartShopping);

function Navbar({quantity}) {
  return (
    <nav>
        <Link className='link' to='/shopping_cart'>
            <h2>Not-A-Store</h2> 
        </Link>
        <ul className="links">            
            <Link className='link' to='/products'>
                <li id="product">Products</li>
            </Link>
            <Link className='link' to='/contacts'>
                <li id="contacts">Contacts</li>
            </Link>
            <Link className='link' to='/cart'>
                <li id="cart">Cart &nbsp;<FontAwesomeIcon icon="fa-solid fa-cart-shopping" />&nbsp;{quantity > 0 && quantity}</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navbar;