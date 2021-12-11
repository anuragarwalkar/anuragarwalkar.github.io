import React from "react";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__left">anurag arwalkar</div>
      <div className="header__right">
        <div className="header__skill">about</div>
        <div className="header__skill">skills</div>
        <div className="header__skill">portfolio</div>
      </div>
    </div>
  );
}

export default Header;
