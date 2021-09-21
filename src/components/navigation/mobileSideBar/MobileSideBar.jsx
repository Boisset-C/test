import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SideBarLogo } from "../../icons/SideBarLogo";
import { Close } from "../../icons/Close";
import "./mobileSideBar.scss";

export function MobileSideBar() {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      {toggle && (
        <>
          <nav className="sidebar-container">
            <ul className="sidebar-nav">
              <li className="sidebar-close-icon">
                <button onClick={() => setToggle(!toggle)}>
                  <Close />
                </button>
              </li>
              <li className="sidebar-logo">
                <NavLink to="/landing">
                  <SideBarLogo />
                </NavLink>
              </li>
              <li className="sidebar-list-item">
                <NavLink
                  className="sidebar-link"
                  activeClassName="sidebar-active-link"
                  to="/landing"
                >
                  Home
                </NavLink>
              </li>
              <li className="sidebar-list-item">
                <NavLink
                  className="sidebar-link"
                  activeClassName="sidebar-active-link"
                  to="/events"
                >
                  <span>Live Events</span>
                </NavLink>
              </li>
              <li className="sidebar-list-item">
                <NavLink
                  className="sidebar-link"
                  activeClassName="sidebar-active-link"
                  to="/archive"
                >
                  Replays
                </NavLink>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
