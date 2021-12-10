import React from "react";
import AboutMe from "./AboutMe";
import MyInfo from "./MyInfo";
import MySkills from "./MySkills";
import MyWork from "./MyWork";

function MainBody() {
  return (
    <div className="page-content">
      <div>
        <MyInfo />
        <AboutMe />
        <MySkills />
        <MyWork />
      </div>
    </div>
  );
}

export default MainBody;
