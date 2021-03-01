import React, { Component } from 'react';
import Register from '../containers/register';
import {HashRouter,Route} from 'react-router-dom';
import Header from './Header';
import Products from '../containers/products';
import Dashboard from '../containers/dashboard';
import Login from '../containers/login';
import AdminDashboard from '../containers/admin_dashboard';
import AddProduct from '../containers/AddProduct';

export default class App extends Component {
  render() {
    return (
       <React.Fragment>
            {/* <Register/> */}
             <HashRouter>
             <Header/> 
              <Route path="/register" component={Register}></Route>
              <Route path="/products" component={Products}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/admin-dashboard" component={AdminDashboard}></Route>
              <Route path="/addProduct" component={AddProduct}></Route>
             
             </HashRouter>
       </React.Fragment>
    );
  }
}
