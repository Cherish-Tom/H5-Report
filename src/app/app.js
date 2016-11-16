import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRouters from './app-routers';
injectTapEventPlugin();
render(<Router history={browserHistory} routes={AppRouters}/>, document.getElementById('app'));
