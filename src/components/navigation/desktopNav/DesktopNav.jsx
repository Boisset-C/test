import { NavLink } from "react-router-dom";
import { DesktopLogo } from "../../icons/DesktopLogo";
import "./desktopNav.scss";

export function DesktopNav() {
  return (
    <div className="nav-container">
      <nav>
        <ul className="navbar">
          <li className="desktop-link">
            <NavLink className="desktop-anchor" to="/landing">
              <DesktopLogo />
            </NavLink>
          </li>
          <li className="desktop-link">
            <NavLink
              className="desktop-anchor"
              activeClassName="desktop-active-link"
              to="/landing"
            >
              Home
            </NavLink>
          </li>
          <li className="desktop-link">
            <NavLink
              className="desktop-anchor"
              activeClassName="desktop-active-link"
              to="/events"
            >
              <span>Live Events</span>
            </NavLink>
          </li>
          <li className="desktop-link">
            <NavLink
              className="desktop-anchor"
              activeClassName="desktop-active-link"
              to="/archive"
            >
              Replays
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
