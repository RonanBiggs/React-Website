//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
// @ts-ignore
import { ParticlesComponent as Particles, BubblesComponent as Bubbles } from './components/Particles';

function App() {

  return (
    <>
    <div id="home">
       <Particles />
       <div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
       </div>
        
       <div className="particle-box">
       <Bubbles />
       </div>
       

       <div className="fixed-center">
        <p className="square-box"> just some stuff on the page</p>
       </div>

       <div id="news" className="fixed-center lower">
        <p className="square-box"> just some more stuff on the page</p>
       </div>
    </div>



    </>
  ) 
}

export default App
