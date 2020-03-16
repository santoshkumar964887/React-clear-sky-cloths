import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Cart} from '../Asset/ShopingBag.svg';
import {CartAction} from '../../Redux/cart/Action';
import './cartIcon.style.scss';
const CartIcon=({CartAction})=>(
    <div className="containerCart" onClick={CartAction}>
        <Cart className='icon'/>
        <span className="countNumber">0</span>
    </div>

);
const mapDishpatchToProps=(dispatch)=>({
    CartAction: ()=>dispatch(CartAction())

});
export default connect(null,mapDishpatchToProps)(CartIcon);