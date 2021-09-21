import "./upcomingCard.scss";

export function UpcomingCard(props) {
  return (
    <div className="card-container">
      <h5 className="title">{props.title}</h5>
      <p className="description">{props.description}</p>
      <p className="upcoming-card-time">{props.date}</p>
    </div>
  );
}
