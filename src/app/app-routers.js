import React from 'react';
import {render} from 'react-dom';
import {Route, IndexRoute} from 'react-router';
import NProgress from 'nprogress';
import Master from './components/index/Master';
import Index from './components/index/Index';

<<<<<<< HEAD
import Customer from './components/list/Customer';
import Audit from './components/list/Audit';
import Contact from './components/list/Contact';
import Order from './components/list/Order';
import Record from './components/list/Record';
=======
import CustomerList from './components/list/CustomerList';
import AuditList from './components/list/AuditList';
import ContactList from './components/list/ContactList';
import OrderList from './components/list/OrderList';
>>>>>>> ba9ef2f07895a690fd869d6d90eb3d0e5fb7cd8e


const AppRouters = (
    <Route path='/' component={Master}>
        <IndexRoute component={Index} />
<<<<<<< HEAD
        <Route path='customer' component={Customer} />
        <Route path='contact' component={Contact} />
        <Route path='record' component={Record} />
        <Route path='audit' component={Audit} />
        <Route path='order' component={Order} />
=======
        <Route path='CustomerList' component={CustomerList} />
        <Route path='AuditList' component={AuditList} />
        <Route path='ContactList' component={ContactList} />
        <Route path='OrderList' component={OrderList} />
>>>>>>> ba9ef2f07895a690fd869d6d90eb3d0e5fb7cd8e
    </Route>
)



export default AppRouters;
