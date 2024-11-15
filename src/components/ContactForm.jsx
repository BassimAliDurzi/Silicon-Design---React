import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialist: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

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
    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === "") {
        newErrors[field] = `The ${field} field is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
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
          <label htmlFor="fullName">Full name</label>
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
