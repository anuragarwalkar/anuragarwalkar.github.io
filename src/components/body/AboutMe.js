import React from "react";

function AboutMe() {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="card" data-aos="fade-up" data-aos-offset="10">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">About</div>
                <p>
                  Hello! I am Anurag Arwalkar.
                  <i>
                    <b>Full Stack JavaScript</b>{" "}
                  </i>
                  Developer
                </p>
                <p>
                  A self-motivated IT professional is having
                  <i>
                    <b>
                      <span id="experiance"></span> years
                    </b>
                  </i>
                  of experience with great knowledge and proficiency in
                  JavaScript for developing web and cross-platform mobile
                  applications, as well as strong skills and ability in writing
                  clean and efficient code. Check out my GitHub account for more
                  info.
                  <a href="https://github.com/anuragarwalkar" target="_blank">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card-body">
                <div className="h4 mt-0 title">Basic Information</div>
                <div className="row">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Age:</strong>
                  </div>
                  <div className="col-sm-8" id="age">
                    24
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Email:</strong>
                  </div>
                  <div className="col-sm-8">
                    <a href="mailto:anuragarwalkar@gmail.com">
                      anuragarwalkar@gmail.com
                    </a>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Address:</strong>
                  </div>
                  <div className="col-sm-8">Pune, IND</div>
                </div>
                <div className="row mt-3">
                  <div className="col-sm-4">
                    <strong className="text-uppercase">Language:</strong>
                  </div>
                  <div className="col-sm-8">English, Hindi, Marathi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
