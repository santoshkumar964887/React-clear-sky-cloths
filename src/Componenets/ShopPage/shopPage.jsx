import React,{Component} from 'react';
import SHOP_DATA from './Shop.Data';
import Preview from '../PreviewCollection/Preview';
import './ShopPage.style.scss';
class ShopPage extends Component{
    constructor(){
        super();
        this.state={
            collections : SHOP_DATA
        };

    }
    render(){

        const {collections}=this.state;
        return(
            <div className='shopPage'>{

                collections.map(collections=>(

                    <Preview key={collections.id} title={collections.title} item={collections.items}/>
                ))
            }
                
            </div>
        )
    }
}
export default ShopPage;