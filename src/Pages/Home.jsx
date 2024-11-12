import React from "react";
import AppFeatures1 from "../components/AppFeatures1";
import AppFeatures2 from "../components/AppFeatures2";
import AppFeatures3 from "../components/AppFeatures3";
import Brands from "../components/Brands";
import ClientsReviews from "../components/ClientsReviews";
import FAQS from "../components/FAQS";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";


const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <AppFeatures1 />
      <AppFeatures2 />
      <AppFeatures3 />
      <ClientsReviews />
      <FAQS />
      <Subscribe />
    </>
  );
};

export default Home;
