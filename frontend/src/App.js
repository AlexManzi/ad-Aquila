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
import Clientpage from './pages/clientpage';

function App() {
  let [loggedIn, setLoggedIn] = useState(null)
  let [user, setUser] = useState(
    {
      email: "",
      first_name: "",
      id: "",
      last_name: "",
      organization: "",
      password_digest: "",
      clients:{}
  })

  console.log(loggedIn)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json()
        .then((data) => setLoggedIn(data))
      }
    });
  }, []);

  // useEffect(() => {
  //   fetch(`/users/${iD}`).then((response) => {
  //     if (response.ok) {
  //       response.json().then((data) => setClientInfo(data));
  //     }
  //   });
  // }, [user]);


  return (
    <div>
      <Navbar loggedIn={loggedIn}/>
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/login" element={<Login setLoggedIn={setLoggedIn} />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/pricing" element={<Pricing />}/>
        <Route exact path="/dashboard" element={<Dashboard loggedIn={loggedIn}/>}/>
        <Route exact path="/campaigns" element={<Campaignpage loggedIn={loggedIn}/>}/>
        <Route exact path="/placebuy" element={<Placeabuy />}/>
        <Route exact path="/clientpage" element={<Clientpage />}/>
      </Routes>
    </div>
    
      
  );
}

export default App;
