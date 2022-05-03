import React, {useState} from 'react'
import './signup.css'

function Signup() {

  let [fname, setFName] = useState('')
  let [lname, setLName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [organization, setOrganization] = useState('')


  function handleFName(e) {
    setFName(e.target.value)
  }

  function handleLName(e) {
    setLName(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleOrganization(e) {
    setOrganization(e.target.value)
  }

  function handleSubmitLogin(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
        organization: organization
      })
    })
      .then((r) => r.json())
      .then((user) => console.log(user))
    }

  return (
    <form onSubmit={handleSubmitLogin}>
    <div id="signuppage">
      <h2 id="signupheading">Get your next Campaign on Track</h2>
      <div id="signupbox">
        <div id="names">
          <input className='inputs' placeholder='First Name' onChange={handleFName}></input>
          <input className='inputs' placeholder='Last Name' onChange={handleLName}></input>
        </div>
        <input className='inputs' placeholder='Enter Your Email' onChange={handleEmail}></input>
        <input className='inputs' placeholder='Enter Your Password' onChange={handlePassword}></input>
        <input className='inputs' placeholder='Enter Your Organization' onChange={handleOrganization}></input>
        <button onClick={handleSubmitLogin}>Sign up!</button>
      </div>
    </div>
    </form>
  )
}

export default Signup