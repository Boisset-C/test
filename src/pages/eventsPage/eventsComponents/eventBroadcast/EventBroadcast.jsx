import "./eventBroadcast.scss";
import ReactPlayer from "react-player";

export function EventBroadcast(props) {
  return (
    <section className="broadcast-container">
      <h5 className="event-start-time">{props.announcement}</h5>
      <div className="live-stream-wrapper">
        <ReactPlayer
          url="https://vimeo.com/601261020"
          className="react-player-event-broadcast"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
}
