import React from "react";
import { AppLink } from "../../components/AppLink/AppLink";
import Skills from "../../components/skill/Skills";
import { Description, Links } from "../../constants/AboutMe";
import environment from "../../environment/environment";
import useTitle from "../../hooks/useTitle";
import "./About.scss";

const About = () => {
  useTitle("About");

  return (
    <div className="about" id="#about">
      <div className="about__photo">
        <img src={environment.profilePic} alt="Anurag Arwalkar" />
      </div>
      <div className="about__info">
        <h1>About Me 👋</h1>
        <p>{Description}</p>
        <Skills />
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
