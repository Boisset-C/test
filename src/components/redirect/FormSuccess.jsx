import { SideBarLogo } from "../icons/SideBarLogo";
import { Close } from "../icons/Close";
import { Link } from "react-router-dom";
import "./formSuccess.scss";

export function FormSuccess() {
  return (
    <article className="success-container">
      <div class="success-logos">
        <div>
          <SideBarLogo />
        </div>
        <div>
          <Link to="/">
            <Close />
          </Link>
        </div>
      </div>
      <h3 className="success-text">
        Thank you for registering! You can now access all future and past
        events.
      </h3>
      <div className="success-btn-wrapper">
        <Link className="success-btn" to="/">
          Done
        </Link>
      </div>
    </article>
  );
}
