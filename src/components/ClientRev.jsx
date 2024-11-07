import React, { useState } from "react";

const ClientRev = (review) => {
  return (
    <div className="client-review">
      <img src={review.quotes} className="quote-img" alt="quotes" />
      <img src={review.rating} className="rating-img" alt="rating1" />
      <p>{review.text}</p>
      <img
        className="client-img"
        src={review.genderImg}
        alt={review.genderImgAlt}
      />
      <h3 className="client-name">{review.name}</h3>
      <p className="client-job">{review.job}</p>
    </div>
  );
};

export default ClientRev;
