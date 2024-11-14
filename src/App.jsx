import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/theme.css";
import "./assets/css/contact.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
import ClientTestimonialsPage from "./Pages/ClientTestimonialsPage";
import Faqs from "./Pages/Faqs";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SubscribePage from "./Pages/SubscribePage";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="custom-margin-bottom">
          <Header />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route
              path="/clientTestimonials"
              element={<ClientTestimonialsPage />}
            />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subscribe" element={<SubscribePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
