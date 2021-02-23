import React, { Component } from 'react';
import Register from '../containers/register';
import {HashRouter,Route} from 'react-router-dom';
import Header from './Header';
import Products from '../containers/products';

export default class App extends Component {
  render() {
    return (
       <React.Fragment>
            {/* <Register/> */}
             <HashRouter>
             <Header/> 
              <Route path="/register" component={Register}></Route>
              <Route path="/products" component={Products}></Route>
             
             </HashRouter>
       </React.Fragment>
    );
  }
}
