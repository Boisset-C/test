import "./eventsDetail.scss";

export function EventsDetail(props) {
  return (
    <section>
      <div className="event-broadcast-container">
        <h3 className="event-broadcast-title">{props.title}</h3>
        <h4 className="event-broad-subheader">{props.subheader}</h4>
        <p className="event-broadcast-description">{props.description}</p>
      </div>
    </section>
  );
}
