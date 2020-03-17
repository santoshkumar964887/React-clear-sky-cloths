import React from 'react';
import Buttons from '../Button/Button';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './cardDropDown.style.scss';
import {CartAction} from '../../Redux/cart/Action';
import{selectCartItems} from '../../Redux/cart/cart.selector';
import CartItem from '../CartItem/cartItem';
const CardDropDown=({cartItem, history,dispatch})=>(
    <div className="cardDropDown">
        <div className="items">
            {  cartItem.length?(
                cartItem.map(item=><CartItem key={item.id} item={item}/>)
            ):
            (<div className="emptyMessage">
                Your cart is empty
            </div>)
            }
            </div>
        <Buttons onClick={()=>{
            
            history.push('/checkout');
            dispatch(CartAction());
        }} >GO TO CHECKOUT</Buttons>
    </div>


);
const mapStateToProps=(state)=>({
    cartItem:selectCartItems(state)

})
export default withRouter(connect(mapStateToProps)(CardDropDown));