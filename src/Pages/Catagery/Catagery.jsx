import React from 'react';
import './Catagery.style.scss';
import {connect} from 'react-redux';
import {SelectCategery} from '../../Redux/shop/ShopSelector';
import  PreviewPic from '../../Componenets/PreviewPic/previewPic';
const  CatageryPage=({collection})=>{
    console.log(collection.items);
    console.log("dsbvhjsnhj ")
    const{title,items}=collection;
    return(
    <div className="catagery">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item=>(<PreviewPic key={item.id} items={item}/>))
            }
        </div>
    </div>
)};
const mapStateToProps=(state, ownProps)=>({
    collection:SelectCategery(ownProps.match.params.catageryID)(state)
})
export default connect(mapStateToProps)(CatageryPage);