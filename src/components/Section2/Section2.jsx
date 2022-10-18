import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Section2 = () => {
  return (
    <div className="py-5" style={{ background: "#00509D" }}>
      <Container>
        <Row className="g-3 text-center text-light">
          <Col sm={6} lg={3}>
            <h1>Buy</h1>
          </Col>
          <Col sm={6} lg={3}>
            <h1>Sell</h1>
          </Col>
          <Col sm={6} lg={3}>
            <h1>Deposit</h1>
          </Col>
          <Col sm={6} lg={3}>
            <h1>Withdraw</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
