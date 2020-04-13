import React from 'react';
import CatageryPage from '../../Pages/Catagery/Catagery';
import './ShopPage.style.scss';
import {Route} from 'react-router-dom';
import CollectionOverVeiw from '../CollectionsOverVeiw/CollectionOverveiw';


const ShopPage =({match})=>{
    

return(

            <div className='shopPage'>
                <Route exact path={`${match.path}`} component={CollectionOverVeiw}/>
                <Route path={`${match.path}/:catageryID`} component={CatageryPage}/>
                
            </div>
        )};

export default ShopPage;