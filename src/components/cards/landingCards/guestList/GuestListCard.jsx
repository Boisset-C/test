import "./guestListCardStyle.scss";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export function GuestListCard(props) {
  const { isMobile } = useWindowSize();
  return (
    <section className="wrapper">
      {isMobile ? <p className="position">{props.position}</p> : null}
      <div className="guest-list-card-image-wrapper">
        <img src={props.image} alt="speaker" />
      </div>

      <div className="text-wrap">
        {isMobile ? null : <p className="position">{props.position}</p>}
        <p className="name">{props.name}</p>
        <p className="bio">{props.bio}</p>
      </div>
    </section>
  );
}
