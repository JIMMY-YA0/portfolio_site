import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Portfolio.css";
import Port_img from "../../assets/Portfolio.JPG";
import Macro_img from "../../assets/MacroView.JPG";
import Linked_img from "../../assets/LinkedIn.JPG";
import BurgerMax_img from "../../assets/BurgerMax.JPG";
import FoodDEL_img from "../../assets/FooDEL.JPG";

const portfolioData = [
  {
    imgUrl: BurgerMax_img,
    title: "BurgerMax",
    url: "https://burgermax.vercel.app/",
  },
  {
    imgUrl: Macro_img,
    title: "MacroView",
    url: "https://macroview.web.app/Home",
  },
  {
    imgUrl: Linked_img,
    title: "LinkedIn Clone",
    url: "https://linkedin-clone-68.web.app/",
  },
  {
    imgUrl: FoodDEL_img,
    title: "FoodDEL",
    url: "https://foodelivery-react-ts.web.app/",
  },
  {
    imgUrl: Port_img,
    title: "Portfolio Website",
    url: "http://jimmyyao.com.au/",
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
              <Col lg="6" md="6" sm="6" key={index}>
                <div className="portfolio_card ">
                  <div className="portfolio_img justify-content-between">
                    <img src={item.imgUrl} alt="" className="w-100" />
                  </div>

                  <div className="portfolio_content">
                    <h5>{item.title}</h5>
                    <a href={item.url} target="_blank">
                      View live Demo
                    </a>
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
