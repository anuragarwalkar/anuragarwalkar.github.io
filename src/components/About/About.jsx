import React from "react";
import "./About.scss";
import myPhoto from "../../Assets/images/anurag_arwalkar.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__photo">
        <img src={myPhoto} alt="Anurag Arwalkar" />
      </div>
      <div className="about__info">
        <h1>About Me</h1>
        <p>
          I Anurag working as a Full Stack Web developer having a total of 4.5
          years of experience in this industry and from last 2 Years doing
          programming, Apart from web development I like to share my skills
          through YouTube. Check out my GitHub or YouTube page for more info
        </p>
        <button className="about__info--download-btn btn"><i className="fas fa-arrow-circle-down"></i> Download Resume</button>
        <div style={{marginTop:'1rem'}}>
          <a
            href="https:/www.youtube.com/anuragcreation7/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-youtube fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/anuragarwalkar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/anuragarwalkar/"
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
