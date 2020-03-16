import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import RootReducer from './RootReducer';


const Middleware=[logger];
const store=createStore(RootReducer,applyMiddleware(...Middleware));
export default store;
