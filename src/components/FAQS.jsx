import React, { useContext } from "react";
import FaqItems from "./FaqItems";
import { AppContext } from "../contexts/AppContext";

const FAQS = () => {
  const { faq } = useContext(AppContext);

  return (
    <section id="faqs">
      <div className="container">
        <div className="contacts">
          <h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>
        <div className="questions">
          {faq.map((item) => (
            <FaqItems key={item.id} item={item} />
          ))}
        </div>
        <div className="contact-methods">
          <div className="phone">
            <i id="phone-icon" className="fa-solid fa-phone-volume"></i>
            <p>Still have questions?</p>
            <button id="contact-phone">
              <span>Contact us</span>
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
          <div className="sms">
            <i id="sms-icon" className="fa-solid fa-comment-dots"></i>
            <p>Don't like phone calls?</p>
            <button id="contact-sms">
              <span>Contact us</span>
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <button className="contact-us">Contact us now</button>
      </div>
    </section>
  );
};

export default FAQS;
