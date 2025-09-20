import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/resume";
import Response from "./components/Response";
import ProjectFrame from "./components/ProjectFrame";

function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/Response" element={<Response />} />
        <Route path="/Projects/tic" element={<ProjectFrame file="/Projects/tic.html"/>} />
        <Route path="/Projects/rps" element={<ProjectFrame file="/Projects/rps.html" />} />
        <Route path="/Projects/Curr" element={<ProjectFrame file="/Projects/Curr.html" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
