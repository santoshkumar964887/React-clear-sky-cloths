import React from 'react';
import PreviewPic from '../PreviewPic/previewPic';
import './Preview.Style.scss';
const Preview=({title,item})=>(
    <div className='preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='prev'>
            {
                item.filter((items,index)=>index < 4).map((items)=>(
                    <PreviewPic key={items.id} items={items}/>
        
                ))

            }
        </div>
    </div>

);
export default Preview;