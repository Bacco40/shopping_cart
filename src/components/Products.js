import React from "react";
import SingleProduct from './SingleProduct';

function Products({items,handleCartAdd}) {

  return (
    <div className="pages">
      <div className="products">
        {items.map((item, index) =>(
            <SingleProduct key={index} item={item} handleCartAdd={handleCartAdd}/>
        ))}
      </div>
    </div>
  );
}

export default Products;