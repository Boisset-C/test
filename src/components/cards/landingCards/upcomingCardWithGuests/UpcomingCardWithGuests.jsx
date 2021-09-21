import "./upcomingCardWithGuests.scss";

export function UpcomingCardWithGuests(props) {
  return (
    <div className="ucwg-container">
      <h5 className="ucwg-title">{props.title}</h5>
      <p className="ucwg-description">{props.description}</p>
      <p className="ucwg-upcoming-card-time">{props.date}</p>
    </div>
  );
}
