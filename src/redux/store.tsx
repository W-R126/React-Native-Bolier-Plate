import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/';

const middleware = [thunk];
const initialState = {};

export default createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);
