import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Curr from "./components/Curr";
import Tic from "./components/tic";
import Rps from "./components/rps";
import Resume from "./components/resume";
import Response from "./components/Response";

function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/Curr" element={<div className="Project-container"><Curr /></div>} />
        <Route path="/tic" element={<Tic />} />
        <Route path="/rps" element={<Rps />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/Response" element={<Response />} />
      </Routes>
    </Router>
  );
}

export default App;
