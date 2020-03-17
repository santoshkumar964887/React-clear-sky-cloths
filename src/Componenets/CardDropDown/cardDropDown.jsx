import React from 'react';
import Buttons from '../Button/Button';
import {connect} from 'react-redux';
import './cardDropDown.style.scss';
import{selectCartItems} from '../../Redux/cart/cart.selector';
import CartItem from '../CartItem/cartItem';
const CardDropDown=({cartItem})=>(
    <div className="cardDropDown">
        <div className="items">
            { 
                cartItem.map(item=><CartItem key={item.id} item={item}/>)
            }
            </div>
        <Buttons >GO TO CHECKOUT</Buttons>
    </div>


);
const mapStateToProps=(state)=>({
    cartItem:selectCartItems(state)

})
export default connect(mapStateToProps)(CardDropDown);