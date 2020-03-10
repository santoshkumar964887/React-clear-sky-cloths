import React from 'react';
import {withRouter} from 'react-router-dom';
import './Menu.item.style.scss';
const MenuItem=({title,imageUrl,size,linkUrl,history,match})=>(
    <div  className={`${size} menu`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(MenuItem);