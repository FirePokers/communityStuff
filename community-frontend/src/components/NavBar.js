import React from 'react';

const NavBar = (props) => {
    return (
        <header className="inventory-top-row">
            <img src='/logo192.png' alt="Logo"/>

            <ul>
                <li className="navLink">
                    <a href="/users">Users</a>
                </li>
                <li className="navLink">
                    <a href="/users/new">Create User</a>
                </li>

            </ul>
        </header>

    )
}

export default NavBar;