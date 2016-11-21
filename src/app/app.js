import React, {Component} from 'react';
import {render} from 'react-dom';
<<<<<<< HEAD
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
=======
import {Router,browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRouters from './app-routers';
injectTapEventPlugin();
render(<Router history={browserHistory} routes={AppRouters}/>, document.getElementById('app'));
>>>>>>> ba9ef2f07895a690fd869d6d90eb3d0e5fb7cd8e
