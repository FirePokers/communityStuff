import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../css/navbar.css';



const NavBar = () => {

    const location = useLocation();
    const leftLinks = [];
    const rightLinks = [];

    const handleLogoutClick = () => {
        window.sessionStorage.removeItem("user");
        window.location ='/';
    }

    if(window.sessionStorage.getItem("user"))
    {
        leftLinks.push(<Link to="/userbookings">View Bookings</Link>);

        rightLinks.push(<Link to="/usersedit">Edit Details</Link>);
        rightLinks.push(<Link onClick={handleLogoutClick}>Log Out</Link>);
    }

    else
    {
        rightLinks.push(<Link to="/">Log in</Link>);
        rightLinks.push(<Link to="/usersnew">Register</Link>);
    }

    if (location.pathname != "/inventory")
    {
        leftLinks.push(<Link to="/inventory">Our Inventory</Link>);
    }
    return (
        <>
        <header className="navbar-container">

        <Link className='logo' to="/inventory"> <img src="./cs.png" alt="Logo"/>  </Link>

           

            <nav className="navbar panel in-from-top">
            
                <span className="navbar-left-cluster">
                    {leftLinks}
                </span>
                <span className="navbar-right-cluster">
                    {rightLinks}
                </span>
                
            </nav>
            
      
        </header>
        </>

    )
}

export default NavBar;