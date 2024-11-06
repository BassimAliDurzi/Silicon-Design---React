import "./assets/css/main.css";
import AppFeatures1 from "./components/AppFeatures1";
import AppFeatures2 from "./components/AppFeatures2";
import AppFeatures3 from "./components/AppFeatures3";
import Brands from "./components/Brands";
import ClientsReviews from "./components/ClientsReviews";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Brands />
        <AppFeatures1 />
        <AppFeatures2 />
        <AppFeatures3 />
        <ClientsReviews />
        <FAQS />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}

export default App;
