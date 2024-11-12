import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import DarkModeToggle from "./DarkModeToggle";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container">
      <Link to="/">
        <img src={logo} alt="logo" />
        <span className="company-name">Silicon</span>
      </Link>

      <div className="navbar">
        <nav id="main-menu">
          <div className={`nav-links ${showMenu ? "show" : ""}`}>
            <NavLink className="nav-link" to="/features">
              App Features
            </NavLink>
            <NavLink className="nav-link" to="/reviews">
              Reviews
            </NavLink>
            <NavLink className="nav-link" to="/faqs">
              FAQ
            </NavLink>
            <NavLink className="nav-link" to="/subscribe">
              Subscribe
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
        </nav>
      </div>

      <DarkModeToggle />

      <Link to="/" id="auth-signin" className="btn-primary">
        <i className="fa-thin fa-user-large"></i>
        <span>Sign in / up</span>
      </Link>

      <button
        className={`btn-mobile ${showMenu ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <i className="fa-regular fa-bars"></i>
      </button>
    </div>
  );
};

export default Navbar;
