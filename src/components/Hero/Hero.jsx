import React, { useRef, useEffect } from "react";
import "./Hero.css";
import { Container, Row, Col } from "reactstrap";
import { init } from "ityped";
import heroImg from "../../assets/Hero_img.svg";
const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ["Jimmy Yao", "a Web Developer"],
    });
  }, []);

  return (
    <section className="hero_section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <p className="mb-3">Welcome to my world!</p>
              <h5 className="mb-4">Hi</h5>
              <h2 className="hero_title mb-5">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                Detail-oriented Front End Developer with experience working with HTML, CSS,
                JavaScript, React. Highly adept at both independent and collaborative projects, with
                an emphasis on landing page and website development.
              </p>
              <div className="hero_btns d-flex align-items-center gap-4 mt-5">
                <button className="btn hire_btn">
                  <a href="#contact">Hire Me</a>
                </button>
                <button className="btn contact_btn">
                  <a href="#contact">Contact</a>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero_img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
