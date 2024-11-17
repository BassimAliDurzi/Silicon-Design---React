import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialist: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "fullName" && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
      error = "Must be at least 2 character long and no numbers";
    } else if (
      name === "email" &&
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)
    ) {
      errors = "Must be an valid email";
    } else if (name === "specialist" && !/^[A-Öa-ö\s\-]{2,}$/.test(value)) {
      error = "Must be at least 2 character long and no numbers";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.fullName)) {
      newErrors.fullName = "Must be at least 2 character long and no numbers";
    }

    if (
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Must be an valid email";
    }

    if (!/^[A-Öa-ö\s\-]{2,}$/.test(formData.specialist)) {
      newErrors.specialist = "Must be at least 2 character long and no numbers";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

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
      "https://win24-assignment.azurewebsites.net/api/forms/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        specialist: "",
      });
    }
  };

  if (submitted) {
    return (
      <div className="informationBox">
        <h1>Thank you for your message!</h1>
        <p>We will contact you as soon as possible.</p>
        <button onClick={handleOk}>Ok</button>
      </div>
    );
  }

  return (
    <>
      <div className="contact-form">
        <h3>Get Online Consultation</h3>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Full Name"
          />
          <span>{errors.fullName && errors.fullName}</span>

          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
          />
          <span>{errors.email && errors.email}</span>

          <label htmlFor="specialist">Specialist</label>
          <input
            type="text"
            id="specialist"
            name="specialist"
            value={formData.specialist}
            onChange={handleChange}
            required
            placeholder="Specialist"
          />
          <span>{errors.specialist && errors.specialist}</span>

          <input id="submit" type="submit" value="Make an appointment" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
