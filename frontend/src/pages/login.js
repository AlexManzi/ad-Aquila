import React, { useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "./login.css"

function Login() {
  let [emailLogin, setEmailLogin] = useState('')
  let [passwordLogin, setPasswordLogin] = useState('')

  useEffect(() => {
      document.body.style.overflow = 'hidden';
    }  
  )

  function alertVibes() {
    alert('You are now logged in!')
  }

  function handleLogin(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin
      })
      })
      .then(resp => resp.json())
      .then((data) => window.location.reload());
      alertVibes()
  }

  function handleEmailLogin(e) {
    setEmailLogin(e.target.value)
  }

  function handlePasswordLogin(e) {
    setPasswordLogin(e.target.value)
  }

  
  return (
    <form>
    <div id="loginparent">
      <div id="loginbox">
        <h2 id="loginheading">Log in to your account</h2>
        <div id="logins">
        <input className='logininput' placeholder='Enter Email' onChange={handleEmailLogin}></input>
        <input type="password" className='logininput' placeholder='Enter Password' onChange={handlePasswordLogin}></input>
        <button id="loginbutton" className='logininput' type="submit" onClick={handleLogin}>Login</button>
        </div>
        <div id="signup">
        </div>
        <div id="sarea">
        <p>Dont have an account?</p><Link to="/signup"><p id="signup">Sign up!</p></Link>
        </div>
      </div>
    </div>
    </form>
  )
}

export default Login