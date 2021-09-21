import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarLogo } from "../icons/SideBarLogo";
import { FormSuccess } from "../../components/redirect/FormSuccess";
import { Close } from "../icons/Close";
import "./contactForm.scss";

export function ContactForm() {
  const nameEl = React.useRef(null);
  const [successToggle, successSetToggle] = useState(false); //toggles confirmationForm

  // prevent form default submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(nameEl.current.value);
  };

  return (
    <>
      {!successToggle && (
        <form
          onSubmit={handleSubmit}
          className="form-wrapper"

          /* name="contact-form"
      method="POST"
      data-netlify="true"
      */
        >
          <div class="contact-form-container">
            <div class="form-logos">
              <div>
                <SideBarLogo />
              </div>
              <div>
                <Link to="/">
                  <Close />
                </Link>
              </div>
            </div>
            <h3 className="contact-form-header">
              Register to get event access
            </h3>

            {/* <input type="hidden" name="form-name" value="contact-form" /> */}
            <label className="contact-label" htmlFor="name">
              Name
            </label>
            <br />
            <input
              ref={nameEl}
              className="contact-input"
              id="name"
              type="text"
              placeholder="E.g John Smith"
              name="name"
            />
            <br />
            <label className="contact-label" htmlFor="email">
              Email
            </label>
            <br />
            <input
              ref={nameEl}
              className="contact-input"
              id="email"
              type="text"
              placeholder="E.g john_smith@gmail.com"
              name="email"
            />
            <br />
            <input
              type="submit"
              value="submit"
              onClick={() => successSetToggle(!successToggle)}
              className="form-register-btn"
            />
          </div>
        </form>
      )}
      {successToggle && <FormSuccess />}
    </>
  );
}
