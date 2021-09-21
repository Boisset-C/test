import "./footer.scss";
import IconOne from "../../icons/footer-icons/IconOne.svg";
import IconTwo from "../../icons/footer-icons/IconTwo.svg";
import IconThree from "../../icons/footer-icons/IconThree.svg";
import IconFour from "../../icons/footer-icons/IconFour.svg";

export function Footer() {
  return (
    <footer>
      <p className="footer-title">Special thanks to our partners</p>

      <div className="icon-container">
        <div className="partner-svg">
          <img src={IconOne} alt="partnered logo" />
        </div>
        <div className="partner-svg">
          <img src={IconTwo} alt="partnered logo" />
        </div>
        <div className="partner-svg">
          <img src={IconThree} alt="partnered logo" />
        </div>
        <div className="partner-svg">
          <img src={IconFour} alt="partnered logo" />
        </div>
      </div>
    </footer>
  );
}
