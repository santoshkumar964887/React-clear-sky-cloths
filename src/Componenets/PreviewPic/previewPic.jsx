import React from 'react';
import Buttons from '../Button/Button';
import {connect} from 'react-redux';
import{addCartItem} from '../../Redux/cart/Action';
import './PreviewPic.style.scss';
const PreviewPic=({items,addCartItem})=>{
 const{id,name,price,imageUrl}=items;
    return(
    <div className="previewpic">
        <div className='image'
    style={
        {
          backgroundImage:`url(${imageUrl})`  
        }
    }
    />
       <div className="footer">
           <span className="name">
               {name}
           </span>
           <span className="price">

               ${price}
           </span>
           </div> 
           <Buttons onClick={()=>addCartItem(items)} Inverted>Add to cart</Buttons>


    </div>
)};
const mapDispatchToProps= dispatch=>({
    addCartItem: item=>dispatch(addCartItem(item))
});
export default connect(null,mapDispatchToProps)(PreviewPic);