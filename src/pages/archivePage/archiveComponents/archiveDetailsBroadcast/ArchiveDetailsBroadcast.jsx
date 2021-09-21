import "./archiveDetailsBroadcast.scss";

export function ArchiveDetailsBroadcast(props) {
  return (
    <section>
      <div className="archive-broadcast-container">
        <h3 className="archive-broadcast-title">{props.title}</h3>
        <h4 className="archive-broad-subheader">{props.subheader}</h4>
        <p className="archive-broadcast-description">{props.description}</p>
      </div>
    </section>
  );
}
