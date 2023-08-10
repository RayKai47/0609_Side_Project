import { createStore, applyMiddleware } from 'redux';
import { orderReducer } from './reducer/orderReducer.js';
import logger from 'redux-logger';

const store = createStore(orderReducer, applyMiddleware(logger));

export default store;