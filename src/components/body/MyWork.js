import React from "react";

function MyWork() {
  return (
    <div className="section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="h4 text-center mb-4 title">Portfolio</div>
            <div className="nav-align-center">
              <ul className="nav nav-pills nav-pills-primary" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#web-development"
                    role="tablist"
                  >
                    <i className="fa fa-laptop" aria-hidden="true"></i>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#Photography"
                    role="tablist"
                  >
                    <i className="fa fa-camera" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content gallery mt-5">
          <div className="tab-pane active" id="web-development">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a
                      target="_blank"
                      href="https://github.com/anuragarwalkar/my-weather-app"
                    >
                      <figure className="cc-effect">
                        <img src="images/project_1.png" alt="Image" />
                        <figcaption>
                          <div className="h4">Weather App</div>
                          <p>Using open weather API</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a
                      target="_blank"
                      href="https://spacex-anurag.herokuapp.com/"
                    >
                      <figure className="cc-effect">
                        <img src="images/project_2.png" alt="Image" />
                        <figcaption>
                          <div className="h4">Space X Launches</div>
                          <p>
                            React server side rendering app using space x api
                          </p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a
                      target="_blank"
                      href="https://chat-buddy-289610.web.app/"
                    >
                      <figure className="cc-effect">
                        <img src="images/project_3.png" alt="Image" />
                        <figcaption>
                          <div className="h4">Chat Budyy</div>
                          <p>Created Realtime Chating Application</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a
                      href="https://www.npmjs.com/package/create-nodejs-typescript-app"
                      target="_blank"
                    >
                      <figure className="cc-effect">
                        <img src="images/project_4.png" alt="Image" />
                        <figcaption>
                          <div className="h4">
                            Node Typescript App Generator
                          </div>
                          <p>Node.js boilterplate code with typescript</p>
                        </figcaption>
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="Photography" role="tabpanel">
            <div className="ml-auto mr-auto">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a href="#Photography">
                      <figure className="cc-effect">
                        <img src="images/photography_1.jpg" alt="Image" />
                      </figure>
                    </a>
                  </div>
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a href="#Photography">
                      <figure className="cc-effect">
                        <img src="images/photography_3.jpg" alt="Image" />
                      </figure>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a href="#Photography">
                      <figure className="cc-effect">
                        <img src="images/photography_2.jpg" alt="Image" />
                      </figure>
                    </a>
                  </div>
                  <div
                    className="cc-porfolio-image img-raised"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <a href="#Photography">
                      <figure className="cc-effect">
                        <img src="images/photography_4.jpg" alt="Image" />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyWork;
