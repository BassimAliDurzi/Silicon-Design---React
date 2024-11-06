import React from "react";
import notification from "../assets/images/notification.svg";

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="container">
        <div className="notification">
          <img src={notification} alt="notification" />
          <h3>
            Subscribe to our newsletter{" "}
            <span>to stay informed about latest updates</span>
          </h3>
        </div>
        <form action="#" className="subscribe-form">
          <div>
            <input id="your-email" type="email" placeholder="Your email" />
            <input id="sub" type="submit" value="Subscribe" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
