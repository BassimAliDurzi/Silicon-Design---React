import React from "react";
import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header>
      <div class="container">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>

        <nav id="main-menu" class="navbar">
          <a class="nav-link" href="#">
            Features
          </a>
        </nav>

        <div id="darkmode-toggle-switch" class="btn-toggle-switch">
          <span class="label">Dark Mode</span>
          <label for="darkmode-switch" class="toggle-switch">
            <input id="darkmode-switch" type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>

        <a href="#" id="auth-signin" class="btn-primary">
          <i class="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </a>

        <button class="btn-mobile">
          <i class="fa-regular fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
