import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as reducer from '../reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const middleware = [ thunk ];
if(process.env.NODE_ENV != 'production') {
    middleware.push(createLogger());
}
export default function configureStore() {
    return createStore(
        combineReducers(reducer),
        applyMiddleware(...middleware)
    );
};
