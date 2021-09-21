import "./eventPreview.scss";
import { useState } from "react";
import ReactPlayer from "react-player";
import { ContactForm } from "../../../../components/form/ContactForm";

export function EventPreview(props) {
  const [formToggle, formSetToggle] = useState(false);

  return (
    <>
      {!formToggle && (
        <section className="event-preview">
          <div className="preview-video-wrapper">
            <ReactPlayer
              url="https://vimeo.com/562894711"
              controls={true}
              height="100%"
              width="100%"
            />
          </div>

          <div className="event-preview-text-wrapper">
            <h4 className="event-preview-text">{props.description}</h4>

            <button
              className="event-preview-btn"
              onClick={() => formSetToggle(!formToggle)}
            >
              Register Now
            </button>
          </div>
        </section>
      )}
      {formToggle && (
        <div className="preview-overlay">
          <div className="preview-form">
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
}

//need to finish setting up contact form
