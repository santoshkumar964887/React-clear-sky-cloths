import {combineReducers} from 'redux';
import UserReduser from './User.Reduce/UserReduser';
import CartReducer from './cart/Reducer';

export default combineReducers({
    user: UserReduser,
    cart: CartReducer
});