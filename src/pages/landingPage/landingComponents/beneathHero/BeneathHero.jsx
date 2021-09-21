import "./beneathHero.scss";
import FoldImage from "../../../../assets/landing-images/fold-image.png";
import { useWindowSize } from "../../../../hooks/useWindowSize";

export function BeneathHero(props) {
  const { isMobile } = useWindowSize();
  return (
    <div className="beneath-container">
      <div className="beneath-text-wrapper">
        <h2 className="text-fold1">{props.subtitle}</h2>
        {isMobile ? null : <h2 className="text-fold2">{props.description}</h2>}
      </div>

      <figure className="fold-image">
        <img src={FoldImage} alt="soldier and his family" />
      </figure>

      {isMobile ? <h2 className="text-fold2">{props.description}</h2> : null}
    </div>
  );
}
