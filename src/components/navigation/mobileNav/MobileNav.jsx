import React, { useState } from "react";
import { MobileLogo } from "../../icons/MobileLogo";
import { Burger } from "../../icons/Burger";
import { MobileSideBar } from "../mobileSideBar/MobileSideBar";
import "./mobileNav.scss";

export function MobileNav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="mobile-container">
        <a href="/">
          <MobileLogo />
        </a>

        <button onClick={() => setToggle(!toggle)}>
          <Burger />
        </button>
        {toggle && <MobileSideBar />}
      </div>
    </>
  );
}
