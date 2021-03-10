import React from "react";
import myPhoto from "../../assets/images/anurag_arwalkar.jpg";
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
        <p>
          I Anurag Self-motivated IT professional with good knowledge and
          proficiency in HTML, CSS, JavaScript. Expertise in frameworks like
          React.js, Angular, Node.js and great knowledge of No SQL database like
          MongoDb as well as strong skills and ability in writing clean and
          efficient code. check out my work on GitHub.
        </p>
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
          <a
            className="about__info__social--youtube"
            href="https://www.youtube.com/anuragarwalkar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-youtube fa-lg"></i>
          </a>
          <a
            className="about__info__social--github"
            href="https://github.com/anuragarwalkar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            className="about__info__social--instagram"
            href="https://www.instagram.com/anuragarwalkar"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
