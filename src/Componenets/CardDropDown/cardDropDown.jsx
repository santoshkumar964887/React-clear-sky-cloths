import React from 'react';
import Buttons from '../Button/Button';
import {connect} from 'react-redux';
import './cardDropDown.style.scss';
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
const mapStateToProps=({cart:{cartItem}})=>({
    cartItem

})
export default connect(mapStateToProps)(CardDropDown);