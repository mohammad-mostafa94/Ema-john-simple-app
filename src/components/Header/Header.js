import React from 'react';
import logo from '../../components/images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <nav>
                <a href="product">Product</a>
                <a href="/orders">Orders</a>
                <a href="/review">Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;