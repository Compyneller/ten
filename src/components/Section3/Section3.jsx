import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/Mobile.webp";
const Section3 = () => {
  return (
    <div className="py-5" style={{ background: "#002242" }}>
      <Container>
        <Row className="g-3">
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center text-light">
            <h1>TRUSTED PLATFORM ANYTIME & ANYWHERE</h1>
            <p>
              The Stablecoin mobile app adapts the full functionality of the
              Stablecoin platform for seamless ‘on-the-go’ trading
            </p>
          </Col>
          <Col sm={12} lg={6}>
            <img src={image} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
