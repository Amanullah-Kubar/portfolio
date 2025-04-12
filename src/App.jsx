import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './components/Pages/LandingPage'
import SkillsPage from './components/Pages/SkillsPage'
import ContactPage from './components/Pages/ContactPage'
import PortfolioPage from './components/Pages/PortfolioPage'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // duration of animation in ms
      once: false      // animate only once per scroll
    });
  }, []);

  return (
    <>



      <Navbar />

      <div id="home">
        <LandingPage />
      </div>

      <div id="about">
        <SkillsPage />
      </div>

      <div id="services">
        <PortfolioPage />
      </div>

      <div id="contact">
        <ContactPage />
      </div>

    </>
  )
}

export default App
