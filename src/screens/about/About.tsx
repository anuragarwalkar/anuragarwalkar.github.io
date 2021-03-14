import React from "react";
import myPhoto from "../../assets/images/anurag_arwalkar.jpg";
import { AppLink } from "../../components/AppLink/AppLink";
import { Description, Links } from "../../constants/AboutMe";
import environment from "../../environment/environment";
import useTitle from "../../hooks/useTitle";
import "./About.scss";

const About = () => {
  useTitle("About");

  return (
    <div className="about">
      <div className="about__photo">
        <img src={myPhoto} alt="Anurag Arwalkar" />
      </div>
      <div className="about__info">
        <h1>About Me</h1>
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
