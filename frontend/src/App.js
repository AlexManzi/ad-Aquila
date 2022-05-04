import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';
import Campaignpage from './pages/campaignpage'
import Pricing from './pages/pricing';
import Placeabuy from './pages/placeabuy';

function App() {
  let [loggedIn, setLoggedIn] = useState(null)
  let [user, setUser] = useState(
    {
      email: "",
      first_name: "",
      id: 0,
      last_name: "",
      organization: "",
      password_digest: ""
  })

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setLoggedIn(data));
      }
    });
  }, []);

  console.log(loggedIn)

  return (
    <div>
      <Navbar user={user} loggedIn={loggedIn}/>
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/login" element={<Login setUser={setUser} setLoggedIn={setLoggedIn} />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/pricing" element={<Pricing />}/>
        <Route exact path="/dashboard" element={<Dashboard user={user}/>}/>
        <Route exact path="/campaigns" element={<Campaignpage />}/>
        <Route exact path="/placebuy" element={<Placeabuy />}/>
      </Routes>
    </div>
    
      
  );
}

export default App;
