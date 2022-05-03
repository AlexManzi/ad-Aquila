import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';
import Campaignpage from './pages/campaignpage'
import Pricing from './pages/pricing';

function App() {

  // useEffect(() => {
  //   fetch("http://localhost:3000/sessions")

  // })


  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Home />}/>
        <Route exact path ="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/pricing" element={<Pricing />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exac path="/campaigns" element={<Campaignpage />}/>
      </Routes>
    </div>
    
      
  );
}

export default App;
