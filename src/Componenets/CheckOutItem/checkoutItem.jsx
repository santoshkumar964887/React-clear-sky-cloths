import React from 'react';
import './checkoutItem.scss';
import {connect} from 'react-redux';
import { ClearItemfromCart } from '../../Redux/cart/Action';
const CheckoutItem=({cartItem,clearItem})=>{
    const {name,imageUrl,price,quantity}=cartItem;
    return(
    <div className="item">
        <div className="imgContainer">
            <img src={imageUrl} alt=""/>
        </div>
<span className="name">{name}</span>
<span className="quantity">{quantity}</span>
<span className="price">${price}</span>
        <span className="removeButton" onClick={()=>clearItem(cartItem)}>&#10005;</span>
    </div>
)};
const mapDispatchToProps=dispatch=>({
    clearItem: item => dispatch(ClearItemfromCart(item))
});
export default connect(null,mapDispatchToProps)(CheckoutItem);
