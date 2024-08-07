import React from 'react'
import { useState } from 'react'
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar"
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
