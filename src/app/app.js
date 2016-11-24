import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import {Router, browserHistory, useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import AppRouters from './app-routers';
injectTapEventPlugin();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
render(
        <Router history={ browserHistory }
                routes={AppRouters}
                onUpdate={()=>window.scrollTo(0,0)}
        />,
        document.getElementById('app'));
