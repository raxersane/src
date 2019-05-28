import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Customers from './pages/customers.js';
import Orders from './pages/orders.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';

const router = 
	<Router>
		<nav className='menu'>
			<Link to="/">Home</Link>
			<Link to="/orders">Orders</Link>
			<Link to="/customers">Customers</Link>
		</nav>
		<div>
		  <Route path="/"/>
		  <Route path="/orders" component={Orders} />
		  <Route path="/customers" component={Customers} />
		</div>
	</Router>;

ReactDOM.render(
	router, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();