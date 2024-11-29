import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [faq, setFaq] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      const res = await fetch(
        "https://win24-assignment.azurewebsites.net/api/faq"
      );
      const data = await res.json();
      setFaq(data);
    };

    const fetchTestimonial = async () => {
      const res = await fetch(
        "https://win24-assignment.azurewebsites.net/api/testimonials"
      );

      const data = await res.json();
      setTestimonial(data);
    };

    fetchFaq();
    fetchTestimonial();
  }, []);

  return (
    <AppContext.Provider value={{ faq, testimonial }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
