import "./callToAction.scss";
import { ContactForm } from "../../../../components/form/ContactForm";
import { useState } from "react";

export function CallToAction(props) {
  const [formToggle, formSetToggle] = useState(false);

  return (
    <>
      {!formToggle && (
        <section className="cta-wrapper">
          <p className="cta-description">{props.description}</p>
          <button
            className="register-btn"
            onClick={() => formSetToggle(!formToggle)}
          >
            Register Now
          </button>
        </section>
      )}
      {formToggle && (
        <div className="cta-overlay">
          <div className="cta-form">
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}
