import "./eventUpcomingEvents.scss";
import { EventContainer } from "../../../../components/cards/eventContainer/EventContainer";

export function EventUpcomingEvents() {
  return (
    <section>
      <h3 className="eue-header">Don't Miss these Upcoming Events!</h3>
      <div className="eue-container-container">
        <EventContainer />
      </div>
    </section>
  );
}
