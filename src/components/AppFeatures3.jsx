import React, { useState } from "react";
import forecast from "../assets/images/forecast.svg";
import contacts from "../assets/images/contacts.svg";
import creditCard from "../assets/images/credit-card.svg";
import wallet from "../assets/images/wallet.svg";
import ReceiveInfo from "../components/ReceiveInfo";

const AppFeatures3 = () => {
  const [transaction, setTransaction] = useState([
    {
      img: creditCard,
      imgAlt: "creditCard",
      text: "Manage your payments online. Mollis congue egestas egestas fermentum fames.",
    },
    {
      img: wallet,
      imgAlt: "wallet",
      text: "A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.",
    },
  ]);

  return (
    <section id="app-features-3">
      <div className="container">
        <div className="transfer-features">
          <h3>Make your money transfer simple and clear</h3>
          <ul>
            <li>
              <i className="fa-regular fa-circle-check"></i>
              <span>Banking transactions are free for you</span>
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>
              <span>No monthly cash commission</span>
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>
              <span>Manage payments and transactions online</span>
            </li>
          </ul>
          <button className="learn-more">
            <span>Learn more</span>
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
        <div className="transfer-images">
          <img src={forecast} alt="forecast" />
        </div>
        <div className="receive-images">
          <img src={contacts} alt="contacts" />
        </div>
        <div className="receive-features">
          <h3>Receive payment from international bank details</h3>
          <div className="receive-info">
            {transaction.map((transaction, index) => (
              <ReceiveInfo
                key={index}
                img={transaction.img}
                imgAlt={transaction.imgAlt}
                text={transaction.text}
              />
            ))}
          </div>
          <button className="learn-more">
            <span>Learn more</span>
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures3;
