import { useWindowSize } from "../../../../hooks/useWindowSize";
import { DesktopNav } from "../../../../components/navigation/desktopNav/DesktopNav";
import { MobileNav } from "../../../../components/navigation/mobileNav/MobileNav";
import TopSectionBg from "../../../../assets/events-page-images/top-section-bg.png";
import "./eventTopSection.scss";

export function EventTopSection(props) {
  const { isMobile } = useWindowSize();
  return (
    <section>
      <div
        className="event-top-section-container"
        style={{ backgroundImage: `url(${TopSectionBg})` }}
      >
        {isMobile ? null : <DesktopNav />}
        {isMobile ? <MobileNav /> : null}
        <h1 className="event-page-title">{props.title}</h1>
      </div>
    </section>
  );
}
