import React, { useState } from "react";
import "./Navbar.scss";
import Backdrop from "../Backdrop/Backdrop";
import NavLink from "./NavLinks/NavLink";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const mobileNav = ["navbar__mobile-nav", showNav ? "show-nav" : ""];

  return (
    <div className="navbar">
      <div className={mobileNav.join(" ")}>
      <NavLink />
      </div>
      <div className="navbar__heading">
        <div className="navbar__heading--bars">
          <i
            className="fas fa-bars"
            onClick={() => {
              setShowNav(true);
            }}
          ></i>
        </div>
        <div>
          <h1>Anurag Arwalkar</h1>
          <span>Full Stack Web Developer</span>
        </div>
      </div>
      <Backdrop hide={() => setShowNav(false)} show={showNav}></Backdrop>
      <div className="navbar__menu">
        <NavLink />
      </div>
    </div>
  );
};

export default Navbar;
