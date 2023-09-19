import React, { useRef, useEffect } from 'react'
import './Hero.css'
import { Container, Row, Col } from 'reactstrap'
import { init } from 'ityped'
import heroImg from '../../assets/Hero_img.svg'
const Hero = () => {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ['Jimmy Yao', 'a Full Stack developer']
    })
  }, [])

  return (
    <section className="hero_section" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <p className="mb-3">Welcome to JIMWORLD!</p>
              <h5 className="mb-4">Hi,</h5>
              <h2 className="hero_title mb-5">
                I'm <span ref={textRef}></span>
              </h2>
              <p>
                Dedicated Software Engineer with a Bachelor of Computer Science and a passion for
                developing dynamic and scalable web applications. Experienced in HTML, CSS,
                TypeScript, JavaScript, React, Next.js, and Node.js. Proven ability to create
                user-friendly and responsive UIs and develop efficient back-end systems. Adept at
                delivering high-quality and reliable software solutions, driven by a commitment to
                excellence in all&nbsp;projects.
              </p>
              <div className="hero_btns d-flex align-items-center gap-4 mt-5">
                <a href="#contact" className="contact_btn">
                  <button className="btn">Contact Me </button>
                </a>

                <div className="social_links">
                  <span>
                    <a href="https://github.com/JIMMY-YA0" target="_blank" rel="noreferrer">
                      <i class="ri-github-fill"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://www.linkedin.com/in/jimmy-yao-cs/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i class="ri-linkedin-box-fill"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6" className="hero_img">
            <img src={heroImg} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
