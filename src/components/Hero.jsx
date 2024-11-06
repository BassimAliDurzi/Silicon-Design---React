import React from "react";
import appstore from "../assets/images/appstore.svg";
import googleplay from "../assets/images/googleplay.svg";
import imgBack from "../assets/images/iPhone 12 Pro back.svg";
import imgFront from "../assets/images/iPhone 12 Pro front.svg";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div>

        <div className="content">
          <p>
            We offer you a new generation of the mobile banking. Save, spend &
            manage money in your pocket.
          </p>
          <div className="buttons">
            <a className="btn-download-app" href="#">
              <img src={appstore} alt="appstore" />
            </a>
            <a className="btn-download-app" href="#">
              <img src={googleplay} alt="google play" />
            </a>
          </div>

          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span>Discover more</span>
          </a>
        </div>

        <div className="images">
          <img className="img-back" src={imgBack} alt="iPhone 12 Pro back" />
          <img className="img-front" src={imgFront} alt="iPhone 12 Pro front" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
