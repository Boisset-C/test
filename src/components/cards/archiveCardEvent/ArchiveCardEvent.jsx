import "./archiveCardEvent.scss";

export function ArchiveCardEvent(props) {
  return (
    <div className="archive-replay-card-section">
      <div
        className="archive-replay-video-wrapper"
        dangerouslySetInnerHTML={props.iframe}
      ></div>
      <div className="archive-replay-card-text-wrapper">
        <h2 className="archive-replay-card-title">{props.name}</h2>
        <p className="archive-replay-card-description">{props.description}</p>
      </div>
    </div>
  );
}
