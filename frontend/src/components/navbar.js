import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div id="navbar">
                <img src={require('../pics/adlogo.png')} alt="logo" id="logo" />
                <h2 id="name">ad:Aquila</h2>
                <h2 id="pricing">Pricing</h2>
                <h2 id="login">Login</h2>
                <h2 id="getstarted">Get Started →</h2>
        </div>
    )
}

export default Navbar