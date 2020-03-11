import React from 'react';
import './PreviewPic.style.scss';
const PreviewPic=(props)=>(
    <div className="previewpic">
        <div className='image'
    style={
        {
          backgroundImage:`url(${props.imageUrl})`  
        }
    }
    />
       <div className="footer">
           <span className="name">
               {props.name}
           </span>
           <span className="price">

               ${props.price}
           </span>
           </div> 


    </div>
);
export default PreviewPic;