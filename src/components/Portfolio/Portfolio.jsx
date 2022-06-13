import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Portfolio.css";
import img01 from "../../assets/portfolio.png";

const portfolioData = [
  {
    imgUrl: img01,
    title: "React Landing Page",
    url: "#",
  },
  {
    imgUrl: img01,
    title: "React Landing Page 2",
    url: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio_top mb-5">
            <h6>Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {portfolioData.map((item, index) => {
            return (
              <Col lg="4" md="6" sm="6" key={index}>
                <div className="portfolio_card">
                  <div className="portfolio_img">
                    <img src={item.imgUrl} alt="" className="w-100" />
                  </div>

                  <div className="portfolio_content">
                    <h5>{item.title}</h5>
                    <a href={item.url}>View live Demo</a>
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
