import React, { useState } from "react";
import quotes from "../assets/images/quotes.svg";
import StarRating from "./StarRating";

const Testimonial = ({ item }) => {
  return (
    <div className="client-review">
      <img src={quotes} className="quote-img" alt="quotes" />
      <StarRating starRating={item.starRating} />
      <p>{item.comment}</p>
      <img className="client-img" src={item.avatarUrl} alt="Client image" />
      <h3 className="client-name">{item.author}</h3>
      <p className="client-job">{item.jobRole}</p>
    </div>
  );
};

export default Testimonial;
