import "./nextEvent.scss";
import NextEventImage from "../../../../assets/landing-images/next-event-image.png";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export function NextEvent(props) {
  const { isMobile } = useWindowSize();

  return (
    <div className="next-event-container">
      <h2 className="next-event-title">{props.title}</h2>

      {/* image-summary wrapper groups image and text together */}
      <div className="image-summary-wrapper">
        <div className="next-text-wrapper">
          {isMobile ? null : (
            <h4 className="next-event-desktop-subheader">{props.subtitle}</h4>
          )}

          <div className="time">
            <div className="time-wrapper">
              <div className="event-day">{props.day}</div>
              <time>{props.time}</time>
              <small className="am">{props.AMorPM}</small>
              <span className="pst">{props.timeType}</span>
            </div>

            <p className="summary">{props.description}</p>
          </div>
        </div>

        <div className="image-wrapper">
          {isMobile ? (
            <h4 className="next-event-mobile-subheader">{props.subtitle}</h4>
          ) : null}
          <img src={NextEventImage} alt="person sitting at laptop" />
        </div>
      </div>
    </div>
  );
}
