import React, { useState } from "react";
import notification from "../assets/images/notification.svg";

const Subscribe = () => {
  const [subscribe, setSubscribe] = useState({
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscribe({ ...subscribe, [name]: value });
  };

  const handleOk = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscribe),
      }
    );

    if (res.ok) {
      setSubmitted(true);
      setSubscribe({
        email: "",
      });
    }
  };

  if (submitted) {
    return (
      <div className="informationBox">
        <h1>Thank you for subscribe!</h1>
        <p>Now you will recieve our latest updates</p>
        <button onClick={handleOk}>Ok</button>
      </div>
    );
  }

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
        <form action="#" className="subscribe-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              id="your-email"
              name="email"
              value={subscribe.email}
              onChange={handleChange}
              required
              placeholder="Your email"
            />
            <input id="sub" type="submit" value="Subscribe" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
