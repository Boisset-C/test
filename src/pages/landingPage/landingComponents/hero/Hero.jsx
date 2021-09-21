import { useState } from "react";
import { ContactForm } from "../../../../components/form/ContactForm";
import heroImage from "../../../../assets/landing-images/hero-image.png";
import mobileHeroImage from "../../../../assets/landing-images/mobile-hero-image.png";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { DesktopNav } from "../../../../components/navigation/desktopNav/DesktopNav";
import { MobileNav } from "../../../../components/navigation/mobileNav/MobileNav";
import "./hero.scss";

export function Hero(props) {
  const { isMobile } = useWindowSize();
  const [formToggle, formSetToggle] = useState(false);

  return (
    <div
      className="hero-container"
      style={
        isMobile
          ? { backgroundImage: `url(${mobileHeroImage})` }
          : { backgroundImage: `url(${heroImage})` }
      }
    >
      <div className="white-overlay">
        {isMobile ? null : <DesktopNav />}
        {isMobile ? <MobileNav /> : null}

        <h1 className="hero-header">{props.name}</h1>
        <h1 className="hero-header">{props.subtitle}</h1>
        <p>{props.description}</p>
        <div className="button-wrapper">
          {!formToggle && (
            <button
              className="register-btn"
              onClick={() => formSetToggle(!formToggle)}
            >
              Register
            </button>
          )}
          {formToggle && (
            <div className="hero-overlay">
              <div className="hero-form">
                <ContactForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
