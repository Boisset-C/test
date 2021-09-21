import {
  archiveDetailsBroadcast,
  archiveTopSection,
} from "../../data/ArchivePageData";
import { ArchiveBroadcast } from "./archiveComponents/archiveBroadcast";
import { ArchiveDetailsBroadcast } from "./archiveComponents/archiveDetailsBroadcast/ArchiveDetailsBroadcast";
import { ArchiveGuestList } from "./archiveComponents/archiveGuestList/ArchiveGuestList";
import { ArchiveReplaySection } from "./archiveComponents/archiveReplaySection";
import { ArchiveTopSection } from "./archiveComponents/archiveTopSection/ArchiveTopSection";
import { ArchiveUpcomingEvents } from "./archiveComponents/archiveUpcomingEvents";

function ArchivePage() {
  return (
    <>
      <div>
        <ArchiveTopSection title={archiveTopSection.title} />
      </div>
      <ArchiveBroadcast />
      <ArchiveDetailsBroadcast
        title={archiveDetailsBroadcast.title}
        subheader={archiveDetailsBroadcast.subheader}
        description={archiveDetailsBroadcast.description}
      />
      <ArchiveGuestList />
      <ArchiveReplaySection />
      <ArchiveUpcomingEvents />
    </>
  );
}

export default ArchivePage;
