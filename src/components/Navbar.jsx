import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import DarkModeToggle from "./DarkModeToggle";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span className="company-name">Silicon</span>
        </Link>

        <nav id="main-menu" className={`${showMenu ? "show" : ""}`}>
          <div className="nav-links">
            <NavLink className={`nav-link ${showMenu ? "show" : ""} `} to="/" onClick={hideMenu}>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/features" onClick={hideMenu}>
              App Features
            </NavLink>
            <NavLink className="nav-link" to="/contact" onClick={hideMenu}>
              Contact
            </NavLink>
          </div>
        </nav>

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
    </div>
  );
};

export default Navbar;
