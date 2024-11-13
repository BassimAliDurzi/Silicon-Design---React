import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const ClientTestimonials = () => {
  const [testimonial, setTestimonial] = useState([]);

  const getTestimonial = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/testimonials"
    );

    const data = await res.json();
    setTestimonial(data);
  };

  useEffect(() => {
    getTestimonial();
  }, []);

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
