import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import AppRouters from './app-routers';
injectTapEventPlugin();


// let store = configureStore();
render(
        // <Provider store={store}>
            <Router history={browserHistory}
                    routes={AppRouters}
                    onUpdate={()=>window.scrollTo(0,0)}
            />,
        // </Provider>,
        document.getElementById('app')
    );
