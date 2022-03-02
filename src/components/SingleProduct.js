import React from "react";

function SingleProduct({item, handleCartAdd}) {
    const {image,title,price,category} = item;
    if(category ==="men's clothing" || category === "women's clothing"){
        return (
            <div className="singleProduct">
                <img src={image} alt={title}/><hr/>
                <div className="info">
                    <div className="detail">
                       <div className="title">{title}</div>
                        <div className="price">{price}€</div>  
                    </div>
                    <button className="add" id={item.id} name={price} onClick={handleCartAdd} value="1">Add to cart</button>
                </div>
            </div>
        );
    }else{return null}
}

export default SingleProduct;