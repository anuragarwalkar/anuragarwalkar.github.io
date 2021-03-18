import React, { useState } from "react";
import { AppLink } from "../../components/AppLink/AppLink";
import { Description, Links } from "../../constants/AboutMe";
import environment from "../../environment/environment";
import useTitle from "../../hooks/useTitle";
import "./About.scss";

const About = () => {
  useTitle("About");

  const [myData, setMyState] = useState(0);

  return (
    <div className="about">
      <div className="about__photo">
        <img src={environment.profilePic} alt="Anurag Arwalkar" />
      </div>
      <div className="about__info">
        <h1>About Me arwalkar adsasd {myData}</h1>
        <button onClick={() => setMyState((item) => item + 1)}>
          Increment
        </button>
        <p>{Description}</p>
        <div className="about__info__download">
          <a
            className="about__info--download-btn btn"
            href={environment.downloadResume}
            download
          >
            <i className="fas fa-arrow-circle-down"></i> Download Resume
          </a>
        </div>
        <div className="about__info__social">
          {Links.map((item) => (
            <AppLink {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
