import React from 'react';
import {render} from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import NProgress from 'nprogress';
import Master from './components/index/Master';
import Index from './components/index/Index';
import Customer from './components/list/Customer';
import Audit from './components/list/Audit';
import Contact from './components/list/Contact';
import Order from './components/list/Order';
import Record from './components/list/Record';


const AppRouters = (
    <Route path='/' component={Master}>
        <IndexRoute component={Index} />
        <Route path='/customer' component={Customer} />
        <Route path='/contact' component={Contact} />
        <Route path='/record' component={Record} />
        <Route path='/audit' component={Audit} />
        <Route path='/order' component={Order} />
    </Route>
)



export default AppRouters;
