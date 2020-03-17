import React from 'react';
import './checkoutItem.scss';
const CheckoutItem=({cartItem:{name,imageUrl,price,quantity}})=>(
    <div className="item">
        <div className="imgContainer">
            <img src={imageUrl} alt=""/>
        </div>
<span className="name">{name}</span>
<span className="quantity">{quantity}</span>
<span className="price">${price}</span>
        <span className="removeButton">&#10005;</span>
    </div>
);
export default CheckoutItem;
