import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import RootReducer from './RootReducer';


const Middleware=[logger];
export const store=createStore(RootReducer,applyMiddleware(...Middleware));
export const persistor=persistStore(store);

