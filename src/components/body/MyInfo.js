import React from "react";
import backgroundImageMy from "../../static/images/cc-bg-1.jpg";

function MyInfo() {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div
            className="page-header-image"
            data-parallax="true"
            style={{ backgroundImage: `url(${backgroundImageMy})` }}
          ></div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a href="#">
                  <img
                    src="https://drive.google.com/uc?export=download&id=1abnwlUC4jNot4kPLaowVzD41ebu1q3_T"
                    alt="Image"
                  />
                </a>
              </div>
              <div className="h2 title">Anurag Arwalkar</div>
              <p className="category text-white">
                Full Stack JavaScript Developer
              </p>
              <a
                className="btn btn-primary"
                href="https://drive.google.com/u/0/uc?id=1Y249sFpZlvMI_s7kmdoDbI7AAShf9Nh1&export=download"
                data-aos="zoom-in"
                data-aos-anchor="data-aos-anchor"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://github.com/anuragarwalkar"
                  rel="tooltip"
                  title="Follow me on GitHub"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.youtube.com/anuragarwalkar"
                  rel="tooltip"
                  title="Follow me on YouTube"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>

                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://twitter.com/Anuragarwalkar"
                  rel="tooltip"
                  title="Follow me on Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.instagram.com/anuragarwalkar/"
                  rel="tooltip"
                  title="Follow me on Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyInfo;
