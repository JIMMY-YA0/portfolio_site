import React, { useState } from "react";
import "./About.css";
import { Container, Row, Col } from "reactstrap";
import Education from "./Education";
import Skills from "./Skills";
import Volunteer from "./Volunteer";
const About = () => {
  const [aboutFilter, setAboutFilter] = useState("SKILLS");

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About me</h2>
          </Col>

          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              {/* <button
                className={`about_btn ${aboutFilter === "ABOUT" ? "about_btn-active" : ""}`}
                onClick={() => setAboutFilter("ABOUT")}
              >
                About me
              </button> */}

              <button
                className={`about_btn ${aboutFilter === "SKILLS" ? "about_btn-active" : ""}`}
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about_btn ${aboutFilter === "EDUCATION" ? "about_btn-active" : ""}`}
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about_btn ${aboutFilter === "VOLUNTEER" ? "about_btn-active" : ""}`}
                onClick={() => setAboutFilter("VOLUNTEER")}
              >
                Volunteer
              </button>
            </div>
          </Col>

          <Col lg="8" md="9">
            {
              // aboutFilter === "ABOUT" && (
              //   <div className="about_content_wrapper d-flex gap-5">
              //     <div className="about_img w-50 h-50">
              //       <img src={aboutImg} alt="" className="w-100" />
              //     </div>
              //     <div className="about_content">
              //       <h2>I'm Jimmy Yao</h2>
              //       <p>
              //         Detail-oriented Web Developer with experience working with HTML, CSS,
              //         JavaScript, React, Next.Js and NodeJs. Highly adept at both independent and
              //         collaborative projects, with great emphasis on website development.
              //       </p>
              //       <div className="social_links">
              //         <h6 className="mb-3">Connect with me:</h6>
              //         <span>
              //           <a href="https://github.com/JIMMY-YA0" target="_blank">
              //             <i class="ri-github-fill"></i>
              //           </a>
              //         </span>
              //         <span>
              //           <a href="https://www.linkedin.com/in/jimmy-yao-cs/" target="_blank">
              //             <i class="ri-linkedin-box-fill"></i>
              //           </a>
              //         </span>
              //       </div>
              //     </div>
              //   </div>
              // )
            }

            {aboutFilter === "SKILLS" && <Skills />}
            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "VOLUNTEER" && <Volunteer />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
