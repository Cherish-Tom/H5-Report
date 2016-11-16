import React from 'react';
import {render} from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import NProgress from 'nprogress';
import Master from './components/index/Master';
import Index from './components/index/Index';

import CustomerList from './components/list/CustomerList';
import AuditList from './components/list/AuditList';
import ContactList from './components/list/ContactList';
import OrderList from './components/list/OrderList';


const AppRouters = (
    <Route path='/' component={Master}>
        <IndexRoute component={Index} />
        <Route path='CustomerList' component={CustomerList} />
        <Route path='AuditList' component={AuditList} />
        <Route path='ContactList' component={ContactList} />
        <Route path='OrderList' component={OrderList} />
    </Route>
)



export default AppRouters;
