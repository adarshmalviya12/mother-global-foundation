import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
                <nav className="navbar">
                    <div className='navbar-logo'>
                        <img src={require('../../assests/logo.png')} alt="loading" />
                    </div>

                    <ul className='navbar__links'>
                        <li><NavLink to=''>Home</NavLink></li>
                        <li><NavLink to='gallary'>Gallary</NavLink></li>
                        <li><NavLink to="donar">Our Donars</NavLink></li>
                        <li> <NavLink to="#about">About us</NavLink> </li>
                        <li><NavLink to='contact'>Contact us</NavLink> </li>
                    </ul>

                    <div className="icon-container">
                        <i className="fa-solid fa-bars"></i>
                    </div>

                </nav>
        </>
    )
}

export default Navbar
