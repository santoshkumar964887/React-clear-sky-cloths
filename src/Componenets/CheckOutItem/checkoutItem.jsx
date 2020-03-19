import React from "react";
import "./checkoutItem.scss";
import { connect } from "react-redux";
import { ClearItemfromCart,addCartItem,RemoveItem} from "../../Redux/cart/Action";
const CheckoutItem = ({ cartItem, clearItem,addItem,RemoveItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="item">
      <div className="imgContainer">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="decrease" onClick={()=>addItem(cartItem)}>&#10133;</div>
        <span>{quantity}</span>
        <div className="decrease" onClick={()=>RemoveItem(cartItem)}>&#10134;</div>
      </span>

      <span className="price">${price}</span>
      <span className="removeButton" onClick={() => clearItem(cartItem)}>
        &#10060;
      </span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(ClearItemfromCart(item)),
  RemoveItem: item=> dispatch(RemoveItem(item)),
  addItem: item=>dispatch(addCartItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
