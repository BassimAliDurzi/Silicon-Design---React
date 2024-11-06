import React, { useState } from "react";
import quotes from "../assets/images/quotes.svg";
import rating1 from "../assets/images/rating1.svg";
import rating2 from "../assets/images/rating2.svg";
import ClientRev from "./ClientRev";
import ClientInfo from "./ClientInfo";
import female from "../assets/images/female.svg";
import male from "../assets/images/male.svg";

const ClientsReviews = () => {
  const [review, setReview] = useState([
    {
      quotes: quotes,
      rating: rating1,
      text: "Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.",
    },
    {
      quotes: quotes,
      rating: rating2,
      text: "Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.",
    },
  ]);

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
    <section id="clients-reviews">
      <div className="container">
        <h2>Clients are Loving Our App</h2>
        {review.map((review, index) => (
          <div key={index}>
            <ClientRev
              quotes={review.quotes}
              rating={review.rating}
              text={review.text}
            />
            <ClientInfo
              genderImg={client[index].genderImg}
              genderImgAlt={client[index].genderImgAlt}
              name={client[index].name}
              job={client[index].job}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsReviews;
