import React from 'react';
import Preview from '../PreviewCollection/Preview';
import './ShopPage.style.scss';
import {connect} from 'react-redux';
import {SelectCollections} from '../../Redux/shop/ShopSelector';
import {createStructuredSelector} from 'reselect';
const ShopPage =({collections})=>{
    

return(

            <div className='shopPage'>{

                collections.map(collections=>(

                    <Preview key={collections.id} title={collections.title} item={collections.items}/>
                ))
            }
                
            </div>
        )};
const mapStateToProps=createStructuredSelector(
    {
      collections : SelectCollections 
    }
);
export default connect(mapStateToProps) (ShopPage);