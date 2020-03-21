import {combineReducers} from 'redux';
import UserReduser from './User.Reduce/UserReduser';
import CartReducer from './cart/Reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig={
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer= combineReducers({
    user: UserReduser,
    cart: CartReducer
});
export default persistReducer(persistConfig,rootReducer);