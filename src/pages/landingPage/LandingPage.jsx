import { BeneathHero } from "./landingComponents/beneathHero";
import { CallToAction } from "./landingComponents/cta";
import { EventPreview } from "./landingComponents/eventPreview";
import { GuestList } from "./landingComponents/guestList/GuestList";
import { Hero } from "./landingComponents/hero";
import { NextEvent } from "./landingComponents/nextEvent/NextEvent";
import { UpcomingEvents } from "./landingComponents/upcomingEvents/UpcomingEvents";
import {
  hero,
  beneathHero,
  eventPreview,
  nextEvent,
  callToAction,
} from "../../data/landingData";
import "./landingPage.scss";

function LandingPage() {
  return (
    <>
      <div>
        <Hero
          name={hero.title}
          subtitle={hero.subtitle}
          description={hero.description}
        />
        <BeneathHero
          subtitle={beneathHero.subtitle}
          description={beneathHero.description}
        />
      </div>
      <EventPreview description={eventPreview.description} />
      <NextEvent
        title={nextEvent.title}
        subtitle={nextEvent.subtitle}
        AMorPM={nextEvent.AMorPM}
        day={nextEvent.day}
        time={nextEvent.time}
        timeType={nextEvent.timeType}
        description={nextEvent.description}
      />
      <div className="bg-color-guestlist">
        <GuestList />
      </div>
      <CallToAction description={callToAction.description} />
      <UpcomingEvents />
    </>
  );
}

export default LandingPage;
