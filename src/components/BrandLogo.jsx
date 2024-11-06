import React from "react";

const BrandLogo = ({logo}) => {
  return (
    <div id="brand-1" className="brand-box">
      <img src={logo.img} alt="logo.imgAlt" />
    </div>
  );
};

export default BrandLogo;
