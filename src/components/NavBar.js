import React from 'react';

const NavBar = () => {
    return (
        <div className="navWrapper">
            <nav className="navBar">
                
                <div className='logo'>
                <h2> CF.Dev </h2>
                </div>

                <div className="navLinks">
                    <a> About </a>
                    <a> Projects </a>
                    <a> Skills </a>
                    <a> Contact </a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;

