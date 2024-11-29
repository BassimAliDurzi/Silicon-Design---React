import React, { useContext } from "react";
import Testimonial from "./Testimonial";
import { AppContext } from "../contexts/AppContext";

const ClientTestimonials = () => {
  const { testimonial } = useContext(AppContext);

  return (
    <section id="clients-reviews">
      <div className="container">
        <h2>Clients are Loving Our App</h2>
        {testimonial.map((testimonial) => (
          <Testimonial key={testimonial.id} item={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default ClientTestimonials;
