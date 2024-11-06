import React from "react";

const AppFeatures1Item = (feature) => {
  return (
    <div className="feature">
      <div className="feature-img">
        <img src={feature.img} alt={feature.imgAlt} />
      </div>
      <div className="content">
        <h3>{feature.title}</h3>
        <p>{feature.text}</p>
      </div>
    </div>
  );
};

export default AppFeatures1Item;
