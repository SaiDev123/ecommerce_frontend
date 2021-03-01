import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">

  <a className="navbar-brand" href="#">Home</a>

  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">login</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/register">register</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/products">Products</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/addProduct">Add Product</NavLink>
    </li>
  </ul>
</nav>
            </div>
        )
    }

}
export default Header;