import React from "react";
import {Routes,Route}from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact"

function App(){
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="resume" element={<Resume />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App