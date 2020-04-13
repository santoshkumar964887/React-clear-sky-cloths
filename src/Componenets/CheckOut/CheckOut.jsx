import React from 'react';
import './checkOut.style.scss';
import {connect} from 'react-redux';
import{createStructuredSelector} from 'reselect';
import {selectCartItems,selectTotal} from '../../Redux/cart/cart.selector';
import CheckoutItem from '../CheckOutItem/checkoutItem';
import StripeCheckoutButton from '../StripeButton/StripeButtons';

const CheackOut=({cartItem, totalPrice})=>(
    <div className="checkout">
        <div className="checkoutHeader">
            <div className="headerBlock">
                <span>Product</span>

            </div>
            <div className="headerBlock">
                <span>Description</span>

            </div>
            <div className="headerBlock">
                <span>Quantity</span>

            </div>
            <div className="headerBlock">
                <span>Price</span>

            </div>
            <div className="headerBlock">
                <span>Remove</span>

            </div>
        </div>
        {
            cartItem.map(items=><CheckoutItem key={items.id} cartItem={items}/>)
        }
        <div className="total">
    <span>TOTAL:${totalPrice}</span>
        </div>
        <div className="warningMessage">
            *Please use the following format card for Payment
            <br/>
            4242 4242 4242 4242 - exp: 01/02 -cvv:123
        </div>
        <StripeCheckoutButton price={totalPrice}/>
    </div>
);
const mapStateToProps= createStructuredSelector({
    cartItem:selectCartItems,
    totalPrice:selectTotal
});
export default connect(mapStateToProps)(CheackOut);