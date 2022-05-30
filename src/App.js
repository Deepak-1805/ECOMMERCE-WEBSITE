import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Postnav from './Components/Postnav';
import Signup from './Components/signup';
import Login from './Components/Login';
function App() {
  return (
    <>
    <Navbar/>
    <Postnav/>
     <Signup/> 
     <Login/> 
        </>
  );
}

export default App;
