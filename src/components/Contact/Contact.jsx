import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Contact.css";
import Form from "../Form/Form";
const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Col lg="12" className="mb-5">
          <h2>Get In Touch</h2>
        </Col>
        <Row>
          <Col lg="6" md="6">
            <div className="contact_info_container d-flex align-items-center gap-5">
              <div className="single_info_box w-50">
                <h6>Address</h6>
                <p>17 Penny Pl, Adelaide, South Australia</p>
              </div>

              <div className="single_info_box w-50">
                <h6>Phone</h6>
                <p>0424391121</p>
              </div>
            </div>

            <div className="contact_info_container d-flex align-items-center gap-5">
              <div className="single_info_box w-50">
                <h6>Email</h6>
                <p>jimmyyaocs@gmail.com</p>
              </div>

              <div className="single_info_box w-50">
                <h6>Loaction</h6>
                <p>Adelaide (Reloaction available)</p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
