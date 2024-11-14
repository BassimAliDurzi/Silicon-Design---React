import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
        <h2>Get Online Consultation</h2>
        <form action="" className="form">
          <label htmlFor="fullName">Full name</label>
          <input type="text" id="fullName" />
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" />
          <label htmlFor="specialist">Specialist</label>
          <input type="text" id="specialist" />
          <input type="submit" value={"Make an appointment"} />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
