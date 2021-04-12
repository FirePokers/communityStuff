import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../css/navbar.css';

const NavBar = () => {

    const location = useLocation();

    console.log("current route:", location);

    return (
        <header className="navbar-container">
            <img src='/logo192.png' alt="Logo"/>

            <nav className="navbar panel in-from-top">
                <Link to="/inventory">Our Inventory</Link>
            
                <span className="navbar-right-cluster">
                <Link to="/login">Log in</Link>
                <Link to="/users/new">Register</Link>
                </span>
                
            </nav>
      
        </header>

    )
}

export default NavBar;