import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <>
      <section id="contact-Info">
        <div className="container">
          <h2 id="title">Contact Us</h2>
          <div className="contact-us">
            <div className="email-us">
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
              <div className="info">
                <h3>Email us</h3>
                <p>
                  Please feel free to contact us. We will respond as soon as
                  possible.
                </p>
                <button>
                  <span>Leave message</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="career">
              <div className="icon">
                <i className="fa-light fa-briefcase"></i>
              </div>
              <div className="info">
                <h3>Career</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, rem.
                </p>
                <button>
                  <span>Send an application</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <ContactForm />
          <div className="locations">
            <h3 id="title">Our Locations</h3>
            <div className="location" id="vaxjo">
              <h3>Växjö</h3>
              <div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <span>Storgatan 82A, 352 27 Växjö</span>
              </div>
              <div className="phone">
                <i className="fa-solid fa-phone-volume"></i>
                <span>040-641 63 00</span>
              </div>
              <div className="work-hours">
                <i className="fa-regular fa-clock"></i>
                <div className="hours">
                  <span>
                    <b>Mon-Fri</b> 08:00 am - 05:00 pm
                  </span>
                  <br />
                  <span>
                    <b>Sat-Sun</b> Close
                  </span>
                </div>
              </div>
            </div>
            <div className="location" id="goteborg">
              <h3>Götebory</h3>
              <div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <span>Pumpgatan 1, 417 55 Göteborg</span>
              </div>
              <div className="phone">
                <i className="fa-solid fa-phone-volume"></i>
                <span>040-641 63 00</span>
              </div>
              <div className="work-hours">
                <i className="fa-regular fa-clock"></i>
                <div className="hours">
                  <span>
                    <b>Mon-Fri</b> 08:00 am - 05:00 pm
                  </span>
                  <br />
                  <span>
                    <b>Sat-Sun</b> Close
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
