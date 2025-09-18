import React from "react";
import { Link } from "react-router-dom";
import SearchNavigator from "./SearchNavigator";
import {motion} from 'framer-motion';

export default function Navbar() {
  return (
    <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
          >
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-textarea">
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About Me
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Projects
              </a>
              <ul className="dropdown-menu">
                {/* <li>
                  <a className="dropdown-item" href="#">
                    Secure Chatting Web App
                  </a>
                </li> */}
                <li>
                  <Link className="dropdown-item" to="/Curr">
                    Currency Convertor
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link to="/tic" className="dropdown-item">
                    Tic-Tak-Toe
                  </Link>
                </li>
                <li>
                  <Link to="/rps" className="dropdown-item">
                    Rock-Paper-Scissors
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <SearchNavigator />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </motion.div>
  );
}
