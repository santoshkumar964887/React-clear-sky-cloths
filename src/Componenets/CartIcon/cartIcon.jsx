import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Cart} from '../Asset/ShopingBag.svg';
import {CartAction} from '../../Redux/cart/Action';
import './cartIcon.style.scss';
const CartIcon=({CartAction,itemcount})=>(
    <div className="containerCart" onClick={CartAction}>
        <Cart className='icon'/>
<span className="countNumber">{itemcount}</span>
    </div>

);
const mapStateToProps=({cart:{cartItem}})=>({
    itemcount:cartItem.reduce((total,cartItem)=>total+cartItem.quantity,0)
});
const mapDishpatchToProps=(dispatch)=>({
    CartAction: ()=>dispatch(CartAction())

});
export default connect(mapStateToProps,mapDishpatchToProps)(CartIcon);