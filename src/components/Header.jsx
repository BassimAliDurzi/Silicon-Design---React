import React from "react";
import logo from "../assets/images/logo.svg";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header>
      <div className="container">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>

        <nav id="main-menu" className="navbar">
          <a className="nav-link" href="#app-features">
            Features
          </a>
        </nav>
        <DarkModeToggle />
        <a href="#" id="auth-signin" className="btn-primary">
          <i className="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </a>
        <button className="btn-mobile">
          <i className="fa-regular fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
