import React, { useState } from "react";
import notification from "../assets/images/notification.svg";

const Subscribe = () => {
  const [subscribe, setSubscribe] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscribe({ ...subscribe, [name]: value });

    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `The ${name} field is required`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleOk = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(subscribe).forEach((field) => {
      if (subscribe[field].trim() === "") {
        newErrors[field] = `The ${field} field is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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
        <form
          className="subscribe-form"
          onSubmit={handleSubmit}
          noValidate
        >
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
            <span>{errors.email && errors.email}</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
