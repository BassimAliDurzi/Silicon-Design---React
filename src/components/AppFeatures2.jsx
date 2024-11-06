import React from "react";
import iphone12Pro from "../assets/images/iPhone 12 Pro.svg";
import iphone12Pro2 from "../assets/images/iPhone 12 Pro 2.svg";
import iphone12Pro3 from "../assets/images/iPhone 12 Pro 3.svg";
import showcaseScreens from "../assets/images/4 → 02-app-showcase-screens.png.svg";
import mobileMode from "../assets/images/iPhone 12 Pro (mobile mode).svg";
import appShowcaseScreens from "../assets/images/4 → 04-app-showcase-screens.png.svg";

const AppFeatures2 = () => {
  return (
    <section id="app-features-2">
      <div className="container">
        <h2>How Does It Work?</h2>
        <div className="app-images">
          <div className="desktop-images">
            <img src={iphone12Pro} alt="iPhone 12 Pro" />
            <img src={iphone12Pro2} alt="iPhone 12 Pro" />
            <img src={iphone12Pro3} alt="iPhone 12 Pro" />
          </div>
          <div className="tablet-images">
            <img src={showcaseScreens} alt="iPhone 12 Pro" />
            <img src={mobileMode} alt="iPhone 12 Pro" />
            <img src={appShowcaseScreens} alt="iPhone 12 Pro" />
          </div>
          <div className="mobile-images">
            <img src={mobileMode} alt="iPhone 12 Pro" />
          </div>
        </div>
        <div className="app-text">
          <div className="desktop-text">
            <h3>Latest transaction history</h3>
            <p>
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
              Arcu sociis tristique quisque hac in consectetur condimentum.{" "}
            </p>
          </div>
          <div className="tablet-text">
            <h3>Step 3. Transfers to people from your contact list</h3>
            <p>
              Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
          </div>
          <div className="mobile-text">
            <h3>Transfers to people from your contact list</h3>
            <p>
              Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
              Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures2;
