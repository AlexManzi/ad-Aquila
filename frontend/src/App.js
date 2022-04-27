import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Navbar from './components/navbar';

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path ="/" element={<Home />}/>
      </Routes>
    </div>
    
      
  );
}

export default App;
