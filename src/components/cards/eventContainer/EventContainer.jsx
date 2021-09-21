import "./eventContainer.scss";
import { TestCard } from "../../../components/cards/guest/TestCard";
import { UpcomingCardWithGuests } from "../landingCards/upcomingCardWithGuests/UpcomingCardWithGuests";
import {
  firstEvent,
  secondEvent,
  firstEventGuestOne,
  firstEventGuestTwo,
  secondEventGuestOne,
  secondEventGuestTwo,
} from "../../../data/EventPageData";

export function EventContainer() {
  return (
    <div className="event-test-card-container">
      <article className="event-flex">
        {/* FIRST EVENT */}
        <UpcomingCardWithGuests
          className="flex-item-upcoming-card"
          title={firstEvent.title}
          description={firstEvent.description}
          date={firstEvent.date}
        />
        <TestCard
          className="flex-item-test-card"
          image={secondEventGuestOne.image}
          name={secondEventGuestOne.name}
          bio={secondEventGuestOne.bio}
        />

        <TestCard
          className="flex-item-test-card"
          image={secondEventGuestTwo.image}
          name={secondEventGuestTwo.name}
          bio={secondEventGuestTwo.bio}
        />
      </article>

      <article className="event-flex">
        {/* SECOND EVENT */}
        <UpcomingCardWithGuests
          className="flex-item-upcoming-card"
          title={secondEvent.title}
          description={secondEvent.description}
          date={secondEvent.date}
        />

        <TestCard
          className="flex-item-test-card"
          image={firstEventGuestOne.image}
          name={firstEventGuestOne.name}
          bio={firstEventGuestOne.bio}
        />

        <TestCard
          className="flex-item-test-card"
          image={firstEventGuestTwo.image}
          name={firstEventGuestTwo.name}
          bio={firstEventGuestTwo.bio}
        />
      </article>
    </div>
  );
}
