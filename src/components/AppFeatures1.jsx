import React, { useState } from "react";
import appImage from "../assets/images/app-image.svg";
import creditCard from "../assets/images/credit-card.svg";
import shield from "../assets/images/shield.svg";
import barsGraphic from "../assets/images/bars-graphic.svg";
import communication from "../assets/images/communication.svg";
import wallet from "../assets/images/wallet.svg";
import happy from "../assets/images/happy.svg";
import AppFeatures1Item from "./AppFeatures1Item";

const AppFeatures1 = () => {
  const [feature, setFeature] = useState([
    {
      img: creditCard,
      imgAlt: "credit-card",
      title: "Easy Payments",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.",
    },
    {
      img: shield,
      imgAlt: "shield",
      title: "Data Security",
      text: "Augue pulvinar justo, fermentum fames aliquam accumsan Fvestibulum non.",
    },
    {
      img: barsGraphic,
      imgAlt: "bars-graphic",
      title: "Cost Statistics",
      text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.",
    },
    {
      img: communication,
      imgAlt: "communication",
      title: "Support 24/7",
      text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.",
    },
    {
      img: wallet,
      imgAlt: "wallet",
      title: "Regular Cashback",
      text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.",
    },
    {
      img: happy,
      imgAlt: "happy",
      title: "Top Standards",
      text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.",
    },
  ]);

  return (
    <section id="app-features">
      <div className="container">
        <div className="app-image">
          <img src={appImage} alt="app-image" />
        </div>
        <div className="features">
          <h2>App Features</h2>
          <p id="app-features-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
          <div className="feature-group">
            {feature.map((feature, index) => (
              <AppFeatures1Item
                key={index}
                img={feature.img}
                imgAlt={feature.imgAlt}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures1;
