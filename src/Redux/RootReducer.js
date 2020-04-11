import {combineReducers} from 'redux';
import UserReduser from './User.Reduce/UserReduser';
import CartReducer from './cart/Reducer';
import {persistReducer} from 'redux-persist';
import ShopReducers from './shop/ShopRedux';
import storage from 'redux-persist/lib/storage';
import DirectoryReducer from './Directory/Directry.reducer';

const persistConfig={
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer= combineReducers({
    user: UserReduser,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducers
    
});
export default persistReducer(persistConfig,rootReducer);