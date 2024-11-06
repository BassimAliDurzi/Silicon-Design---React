import React from "react";
import logo from "../assets/images/logo.svg"

const Header = () => {
  return (
    <div className="container">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>

      <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">
          Features
        </a>
      </nav>

      <div id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label">Dark Mode</span>
        <label htmlFor="darkmode-switch" className="toggle-switch">
          <input id="darkmode-switch" type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <a href="#" id="auth-signin" className="btn-primary">
        <i className="fa-thin fa-user-large"></i>
        <span>Sign in / up</span>
      </a>

      <button className="btn-mobile">
        <i className="fa-regular fa-bars"></i>
      </button>
    </div>
  );
};

export default Header;
