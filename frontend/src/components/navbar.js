import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
    return (
        <div id="navbar">
                <Link to="/" ><img src={require('../pics/adlogo.png')} alt="logo" id="logo"/></Link>
                <Link to="/" style={{textDecoration:"none"}}><h2 id="name">ad:Aquila</h2></Link>
                <Link to="/pricing" style={{textDecoration:"none"}}><h2 id="pricing">Pricing</h2></Link>
                <Link to="/login" style={{textDecoration:"none"}}><h2 id="login">Login</h2></Link>
                <Link to ="/signup" style={{textDecoration:"none"}}><h2 id="getstarted">Get Started →</h2></Link>
        </div>
    )
}

export default Navbar