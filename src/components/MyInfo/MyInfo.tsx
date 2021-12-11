import React from "react";
import backgroundImage from "../../static/images/cc-bg-1.jpg";
import "./myInfo.scss";

const imgStyle = {
  backgroundImage: `url(${backgroundImage})`,
};

function MyInfo() {
  return (
    <div className="myInfo">
      <div className="myInfo__img" style={imgStyle}></div>
    </div>
  );
}

export default MyInfo;
