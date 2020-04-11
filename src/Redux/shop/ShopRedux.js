import SHOP_DATA from '../../Componenets/ShopPage/Shop.Data';
const INITIAL_STATE={
    collections: SHOP_DATA
};
 const ShopReducers=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }

};
export default ShopReducers;
 