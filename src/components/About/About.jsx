import React, { useState } from "react";
import "./About.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/about.JPG";
import Education from "./Education";
import Skills from "./Skills";
import Award from "./Award";
const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About me</h2>
          </Col>

          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button
                className={`about_btn ${aboutFilter === "ABOUT" ? "about_btn-active" : ""}`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About me
              </button>
              <button
                className={`about_btn ${aboutFilter === "EDUCATION" ? "about_btn-active" : ""}`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about_btn ${aboutFilter === "SKILLS" ? "about_btn-active" : ""}`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about_btn ${aboutFilter === "AWARD" ? "about_btn-active" : ""}`}
                onClick={() => setAboutFilter("AWARD")}
              >
                Award
              </button>
            </div>
          </Col>

          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about_content_wrapper d-flex gap-5">
                <div className="about_img w-50 h-50">
                  <img src={aboutImg} alt="" className="w-100" />
                </div>
                <div className="about_content">
                  <h2>I'm Jimmy Yao</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsam
                    exercitationem harum voluptate. Voluptates exercitationem mollitia accusamus
                    ullam, optio iste placeat possimus dolorum nisi praesentium tempora corporis
                    fugiat eos perferendis!
                  </p>
                  <div className="social_links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <span>
                      <a href="#">
                        <i class="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-github-fill"></i>
                      </a>
                    </span>
                    <span>
                      <a href="#">
                        <i class="ri-linkedin-box-fill"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}
            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
            {aboutFilter === "AWARD" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
