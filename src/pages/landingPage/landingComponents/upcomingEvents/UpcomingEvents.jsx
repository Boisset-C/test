import { firstEvent, secondEvent } from "../../../../data/EventPageData";
import { UpcomingCard } from "../../../../components/cards/landingCards/upcomingCard";
import "./upcomingEvents.scss";

export function UpcomingEvents() {
  return (
    <>
      <h3 className="upcoming-events-title">Upcoming Events</h3>
      <div className="upcoming-container">
        <UpcomingCard
          title={firstEvent.title}
          description={firstEvent.description}
          date={firstEvent.date}
        />
        <UpcomingCard
          title={secondEvent.title}
          description={secondEvent.description}
          date={secondEvent.date}
        />
      </div>
    </>
  );
}
