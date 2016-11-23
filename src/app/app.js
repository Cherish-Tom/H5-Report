import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import AppRouters from './app-routers';
injectTapEventPlugin();
render(
        <Router history={browserHistory}
                routes={AppRouters}
                onUpdate={()=>window.scrollTo(0,0)}
        />,
        document.getElementById('app'));
