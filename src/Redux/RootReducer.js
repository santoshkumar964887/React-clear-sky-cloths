import {combineReducers} from 'redux';
import UserReduser from './User.Reduce/UserReduser';

export default combineReducers({
    user : UserReduser
});