import React, { useState } from "react";
import quotes from "../assets/images/quotes.svg";
import rating1 from "../assets/images/rating1.svg";
import rating2 from "../assets/images/rating2.svg";
import ClientRev from "./ClientRev";
import female from "../assets/images/female.svg";
import male from "../assets/images/male.svg";

const ClientsReviews = () => {
  const [review, setReview] = useState([
    {
      quotes: quotes,
      rating: rating1,
      text: "Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.",
      genderImg: female,
      genderImgAlt: "female",
      name: "Fannie Summers",
      job: "Designer",
    },
    {
      quotes: quotes,
      rating: rating2,
      text: "Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.",
      genderImg: male,
      genderImgAlt: "male",
      name: "Albert Flores",
      job: "Developer",
    },
  ]);

  return (
    <section id="clients-reviews">
      <div className="container">
        <h2>Clients are Loving Our App</h2>
        {review.map((review, index) => (
          <ClientRev
          key={index}
          quotes={review.quotes}
          rating={review.rating}
          text={review.text}
          genderImg={review.genderImg}
          genderImgAlt={review.genderImgAlt}
          name={review.name}
          job={review.job}
        />
        ))}
      </div>
    </section>
  );
};

export default ClientsReviews;
