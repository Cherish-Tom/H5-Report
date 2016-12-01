import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Master from './components/index/Master';
import Index from './components/index/Index';
import Customer from './components/list/Customer';
import Setting from './components/list/Setting';
import About from './components/list/About';
import Audit from './components/list/Audit';
import Contact from './components/list/Contact';
import Order from './components/list/Order';
import Record from './components/list/Record';
import Photo from './components/list/Photo';
import Check from './components/list/Check';
import Bulletin from './components/list/Bulletin';
import Details from './components/public/Details';
const AppRouters = (
    <Route path='/' component={Master}>
        <IndexRoute component={Index} />
<<<<<<< HEAD
        <Route path='/customer' component={Customer} />
        <Route path='/setting' component={Setting}>
            <Route path='/about' component={About} />
        </Route>
        <Route path='/contact' component={Contact} />
        <Route path='/record' component={Record} />
        <Route path='/audit' component={Audit} />
        <Route path='/check' component={Check} />
        <Route path='/order' component={Order} />
        <Route path='/photo' component={Photo} />
        <Route path='/bulletin' component={Bulletin} />
        <Route path='/customer/:id' component={Details} />
=======
        <Route path='customer' component={Customer} />
        <Route path='setting' component={Setting}>
            <Route path='/about' component={About} />
        </Route>
        <Route path='contact' component={Contact} />
        <Route path='record' component={Record} />
        <Route path='audit' component={Audit} />
        <Route path='check' component={Check} />
        <Route path='order' component={Order} />
        <Route path='photo' component={Photo} />
        <Route path='bulletin' component={Bulletin} />
        <Route path='customer/:id' component={Details} />
>>>>>>> 45c2f93e51384d60f5d81e795eb086c5285b8128
    </Route>
)
export default AppRouters;
