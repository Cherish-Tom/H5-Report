import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'react-thunk';
import rootReducer from '../reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';



const middleware = [ thunk ];
if(process.env.NODE_ENV != 'production') {
    middleware.push(createLogger())
}
export default function configureStore(preloadedStore) {
    return createStore(
        rootReducer,
        preloadedStore,
        applyMiddleware(...middleware)
    );
};
