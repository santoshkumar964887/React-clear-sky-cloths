import React from 'react';
import './cartItem.style.scss';
const CartItem=({item:{imageUrl,price,name,quantity}})=>(
    <div className="cartItem">
        <img src={imageUrl} alt="items"/>
        <div className="itemDetail">
<span className="name">{name}</span>
<span className="price">{quantity}*${price}</span>

        </div>
    </div>
);
export default CartItem;