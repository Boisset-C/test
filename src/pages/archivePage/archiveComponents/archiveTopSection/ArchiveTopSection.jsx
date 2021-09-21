import { useWindowSize } from "../../../../hooks/useWindowSize";
import { DesktopNav } from "../../../../components/navigation/desktopNav/DesktopNav";
import { MobileNav } from "../../../../components/navigation/mobileNav/MobileNav";
import TopSectionBg from "../../../../assets/events-page-images/top-section-bg.png";
import "./archiveTopSection.scss";

export function ArchiveTopSection(props) {
  const { isMobile } = useWindowSize();
  return (
    <section>
      <div
        className="archive-top-section-container"
        style={{ backgroundImage: `url(${TopSectionBg})` }}
      >
        {isMobile ? null : <DesktopNav />}
        {isMobile ? <MobileNav /> : null}
        <h1 className="archive-page-title">{props.title}</h1>
      </div>
    </section>
  );
}
