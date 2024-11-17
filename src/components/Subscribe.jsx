import React, { useState } from "react";
import notification from "../assets/images/notification.svg";

const Subscribe = () => {
  const [subscribe, setSubscribe] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    if (
      name === "email" &&
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)
    ) {
      errors = "Must be an valid email";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(subscribe.email)
    ) {
      newErrors.email = "Must be an valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubscribe({ ...subscribe, [name]: value });

    validateField(name, value);
  };

  const handleOk = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("form valid!");
    } else {
      console.log("form invalid!");
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
        <form className="subscribe-form" onSubmit={handleSubmit} noValidate>
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
