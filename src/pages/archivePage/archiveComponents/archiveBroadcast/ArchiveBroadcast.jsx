import "./archiveBroadcast.scss";
import ReactPlayer from "react-player";

export function ArchiveBroadcast() {
  return (
    <section className="archive-container">
      <h5 className="archive-replay">Most recent event replay</h5>
      <div className="archive-stream-wrapper">
        <ReactPlayer
          url="https://vimeo.com/607568204"
          className="react-player-archive-broadcast"
          controls={true}
          width="100%"
          height="400px"
        />
      </div>
    </section>
  );
}
