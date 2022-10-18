import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Section2 = () => {
  return (
    <div className="py-5" style={{ background: "#00509D", overflow: "hidden" }}>
      <Container>
        <Row className="g-3 text-center text-light">
          <Col xs={6} sm={6} lg={3}>
            <img
              src="https://img.icons8.com/bubbles/344/buy.png"
              height={90}
              alt=""
            />
            <h1>Buy</h1>
          </Col>
          <Col xs={6} sm={6} lg={3}>
            <img
              src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/344/external-sell-stock-market-wanicon-lineal-color-wanicon.png"
              height={90}
              alt=""
            />
            <h1>Sell</h1>
          </Col>
          <Col xs={6} sm={6} lg={3}>
            <img
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-deposit-banking-flaticons-lineal-color-flat-icons-3.png"
              height={90}
              alt=""
            />
            <h1>Deposit</h1>
          </Col>
          <Col xs={6} sm={6} lg={3}>
            <img
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-withdrawal-banking-flaticons-flat-flat-icons.png"
              height={90}
              alt=""
            />
            <h1>Withdraw</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
