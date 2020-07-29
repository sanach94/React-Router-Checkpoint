import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Category'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AdminArea from './AdminArea';
import Products from './Products';
import Category from './Category';
import Home from './Home';
import Navbar from './Navbar';
import productItem from './CategoryItem';
import PrivateRoute from './privateRoute';
import Admin from './admin';
ReactDOM.render(
<BrowserRouter>
<Navbar/>
<switch>
<Route exact path="/"  component={App} />
<Route path="/Home"  component={Home} />
<Route path="/Category" component={Category} />
<Route path="/Products" component={Products} />
<Route path="/Login" component={AdminArea} />
<PrivateRoute path="/admin" component={Admin}/>
</switch>
</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
