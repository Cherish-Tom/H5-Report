import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
// import { createHashHistory } from 'history';
=======
>>>>>>> 45c2f93e51384d60f5d81e795eb086c5285b8128
import rootReducer from './reducers';
import {Router, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store/configureStore';
import AppRouters from './app-routers';
const store = configureStore();
<<<<<<< HEAD
// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
=======
>>>>>>> 45c2f93e51384d60f5d81e795eb086c5285b8128
injectTapEventPlugin();
render(
        <Provider store = {store}>
            <Router history={ browserHistory }
                    routes={AppRouters}
                    onUpdate={()=>window.scrollTo(0,0)}
            />
        </Provider>,
        document.getElementById('app')
      );
