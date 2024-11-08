import React, { useState } from "react";
import FaqItems from "./FaqItems";

const FAQS = () => {
  const [faq, setFaq] = useState([
    {
      question: "Is any of my personal information stored in the App?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem.",
    },
    {
      question: "What formats can I download my transaction history in",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem.",
    },
    {
      question: "Can I schedule future transfers?",
      answer:
        "Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.",
    },
    {
      question: "When can I use Banking App services?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem.",
    },
    {
      question: "Can I create my own password that is easy for me to remember?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem.",
    },
    {
      question: "What happens if I forget or lose my password?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, autem.",
    },
  ]);

  return (
    <section id="faqs">
      <div className="container">
        <div className="contacts">
          <h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>
        <div className="questions">
          {faq.map((item, index) => (
            <FaqItems
              key={index}
              question={item.question}
              answer={item.answer}
            />
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
