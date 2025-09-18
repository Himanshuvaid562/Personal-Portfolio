import React, { Component } from "react";
import Himanshu from "./Himanshu.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="container">
          <h1>
            <b>My Personal Portfolio</b>
          </h1>
          <h5>
            <b>Hi, I'm Himanshu Vaid</b>
          </h5>
          <h5>
            <b>
              B.Tech CSE | Aspiring Full Stack Developer | CyberSecurity
              Enthusiast
            </b>
          </h5>
          <h5>
            [
            <a
              href="https://github.com/Himanshuvaid562"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            ] | [
            <a
              href="https://www.linkedin.com/in/himanshu-vaid-086539215/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            ] | [<Link to="/resume">Resume</Link>]
          </h5>
          <img src={Himanshu} alt="Himanshu.png" />
        </div>
      </motion.div>
    );
  }
}
