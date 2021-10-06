import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../components/images/logo.png';
import './Header.css';
const Header = () => {

   const activeStyle={
        fontWeight: "bold",
        color: "red"
      }

    return (
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <nav>
                <NavLink
                    activeStyle ={activeStyle}
                    activeClassName="selected" 
                    
                    to="/shop">Shop</NavLink>

                <NavLink
                    activeStyle ={activeStyle}
                    activeClassName="selected" 

                    to="/orders">Orders</NavLink>

                <NavLink
                    activeStyle ={activeStyle}
                    activeClassName="selected" 

                    to="/review">Review</NavLink>

                <NavLink
                    activeStyle ={activeStyle}
                    activeClassName="selected" 

                    to="/inventory">Manage Inventory</NavLink>

            </nav>
        </div>
    );
};

export default Header;