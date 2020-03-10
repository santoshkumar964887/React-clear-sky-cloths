import React from 'react';
import './Menu.item.style.scss';
const MenuItem=({title,imageUrl,size, id,linkUrl})=>(
    <div  className={`${size} menu`}>
    <div  style={{
        backgroundImage: `url(${imageUrl})`
    }
        
    }
    className='Background'
    
    />
    <div className="content">
        <h1 className="title">

            {title.toUpperCase()}
        </h1>
        <span className="subtitle">
            Shop Now
        </span>
    </div>
    </div>
)
export default MenuItem;