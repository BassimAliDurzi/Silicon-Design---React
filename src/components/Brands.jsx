import React, { useState } from "react";
import brand1 from "../assets/images/brand-1.svg";
import brand2 from "../assets/images/brand-2.svg";
import brand3 from "../assets/images/brand-3.svg";
import brand4 from "../assets/images/brand-4.svg";
import brand5 from "../assets/images/brand-5.svg";
import brand6 from "../assets/images/brand-6.svg";
import BrandLogo from "./BrandLogo";

const Brands = () => {
  const [logo, setLogo] = useState([
    { img: brand1, imgAlt: "brand-1" },
    { img: brand2, imgAlt: "brand-2" },
    { img: brand3, imgAlt: "brand-3" },
    { img: brand4, imgAlt: "brand-4" },
    { img: brand5, imgAlt: "brand-5" },
    { img: brand6, imgAlt: "brand-6" },
  ]);

  return (
    <section id="brands">
      <div className="container">
        {logo.map(
          (logo, index) => (
          <BrandLogo key={index} logo={logo} />
        ))}
      </div>
    </section>
  );
};

export default Brands;
