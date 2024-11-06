import React, { useState } from "react";
import ClientInfo from "./ClientInfo";
import female from "../assets/images/female.svg";
import male from "../assets/images/male.svg";

const ClientRev = (review) => {
  const [client, setClient] = useState([
    {
      genderImg: female,
      genderImgAlt: "female",
      name: "Fannie Summers",
      job: "Designer",
    },
    {
      genderImg: male,
      genderImgAlt: "male",
      name: "Albert Flores",
      job: "Developer",
    },
  ]);

  return (
    <div className="client-review">
      <img src={review.quotes} className="quote-img" alt="review.quoteAlt" />
      <img src={review.rating} className="rating-img" alt="review.ratingAlt" />
      <p>{review.text}</p>
    </div>
  );
};

export default ClientRev;
