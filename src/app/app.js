import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createHashHistory } from 'react-router/node_modules/history/lib';
import rootReducer from './reducers';
import {Router, browserHistory, useRouterHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import AppRouters from './app-routers';

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
injectTapEventPlugin();
render(
        <Provider store = {store}>
            <Router history={ appHistory }
                    routes={AppRouters}
                    onUpdate={()=>window.scrollTo(0,0)}
            />
        </Provider>,
        document.getElementById('app')
      );
