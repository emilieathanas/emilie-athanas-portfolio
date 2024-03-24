import React, { useEffect, useState } from 'react';
import './components/Navbar.css';
import './components/App.css';
import './components/Header.css';
import './components/AboutMe.css';
import './components/Projects.css';
import './index.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
    <Navbar/>
    <div class = "background">
      <Header/>
      <AboutMe/>
      <Projects/>
    

    </div>

    </>
  );
}
