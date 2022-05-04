import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar({user, loggedIn}) {

    function handleLogout() {
        fetch("/logout", {
        method: "DELETE",
        })
    }

    const logOut = <h2 onClick={handleLogout} id="login">Logout</h2>
    const login = <Link to="/login" style={{textDecoration:"none"}}><h2 id="login">Login</h2></Link>
    let loginOut = (loggedIn ? logOut : login)

    const getStarted = <Link to ="/signup" style={{textDecoration:"none"}}><h2 id="getstarted">Get Started →</h2></Link>
    const dashboard = <Link to ="/dashboard" style={{textDecoration:"none"}}><h2 id="getstarted">My Dashboard</h2></Link>
    let dashStart = (loggedIn ? dashboard : getStarted)

    const pricing = <Link to="/pricing" style={{textDecoration:"none"}}><h2 id="pricing">Pricing</h2></Link>
    const placeBuy = <Link to="/placebuy" style={{textDecoration:"none"}}><h2 id="pricing">New Buy</h2></Link>
    let pricingBuy = (loggedIn ? placeBuy : pricing)

    return (
        <div id="navbar">
                <Link to="/" ><img src={require('../pics/adlogo.png')} alt="logo" id="logo"/></Link>
                <Link to="/" style={{textDecoration:"none"}}><h2 id="name">ad:Aquila</h2></Link>
                {pricingBuy}
                {loginOut}
                {dashStart}
        </div>
    )
}

export default Navbar