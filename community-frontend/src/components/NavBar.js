import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../css/navbar.css';



const NavBar = () => {

    const location = useLocation();

    console.log("current route:", location);

    return (
        <>
        

        
        <header className="navbar-container">

        <Link className='logo' to="/inventory"> <img src="./cs.png" alt="Logo"/>  </Link>

           

            <nav className="navbar panel in-from-top">
                <Link to="/inventory">Our Inventory</Link>
            
                <span className="navbar-right-cluster">
                <Link to="/">Log in</Link>
                <Link to="/usersnew">Register</Link>
                </span>
                
            </nav>
            
      
        </header>
        </>

    )
}

export default NavBar;