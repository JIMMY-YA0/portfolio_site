import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./Projects.css";
import Port_img from "../../assets/Portfolio.JPG";
import Macro_img from "../../assets/MacroView.JPG";
import Linked_img from "../../assets/LinkedIn.JPG";
import BurgerMax_img from "../../assets/BurgerMax.JPG";
import Dashboard_img from "../../assets/AdminDashboard.JPG";
import Nasaproject_img from "../../assets/Nasaproject.JPG";

const projectsData = [
  {
    imgUrl: Dashboard_img,
    title: "Admin DashBoard",
    techStack: "Javascript, React, Redux, RTK query, Node.js, Express, Mui, MongoDB, Nivo Charts",
    url: "https://dashboard-frontend-w0qe.onrender.com/",
    github_url: "https://github.com/JIMMY-YA0/Admin-dashboard",
  },
  {
    imgUrl: Nasaproject_img,
    title: "Nasa Mission Control",
    techStack: "Javascript, Node.js, Express, MongoDB, Jest, Docker, AWS",
    url: "http://13.236.2.145:8000/",
    github_url: "https://github.com/JIMMY-YA0/Nasa-exoplanet-project",
  },
  {
    imgUrl: BurgerMax_img,
    title: "BurgerMax",
    techStack: "Javascript, Next.js, React, Redux, MongoDB, Cookie, Mui, Paypal API",
    url: "https://burgermax.vercel.app/",
    github_url: "https://github.com/JIMMY-YA0/BurgerMax",
  },

  {
    imgUrl: Macro_img,
    title: "MacroView",
    techStack: "Javascript, React, React router, TailwindCSS, Firebase Auth, Firebase Database",
    url: "https://macroview.web.app/Home",
    github_url: "https://github.com/JIMMY-YA0/Movies-React",
  },
  {
    imgUrl: Linked_img,
    title: "LinkedIn Clone",
    techStack: "Javascript, React, Redux, CSS, Mui, Firebase Auth, Firebase Database",
    url: "https://linkedin-clone-68.web.app/",
    github_url: "https://github.com/JIMMY-YA0/Linkedin_Clone",
  },
  {
    imgUrl: Port_img,
    title: "Portfolio Website",
    techStack: "Javascript, React, Redux, CSS, bootstrap, Firebase",
    url: "http://jimmyyao.com.au/",
    github_url: "https://github.com/JIMMY-YA0/portfolio_site",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Projects</h2>
          </Col>

          {projectsData.map((item, index) => {
            return (
              <Col lg="6" md="6" sm="6" key={index}>
                <div className="portfolio_card ">
                  <div className="portfolio_img justify-content-between">
                    <img src={item.imgUrl} alt="" className="w-100" />
                  </div>

                  <div className="portfolio_content">
                    <h5>{item.title}</h5>
                    <p className="techStack">Tech stack: {item.techStack}</p>
                    <div className="buttons">
                      <Button>
                        <a href={item.url} target="_blank">
                          View live Demo
                        </a>
                      </Button>
                      <Button>
                        <a href={item.github_url} target="_blank">
                          Source code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
