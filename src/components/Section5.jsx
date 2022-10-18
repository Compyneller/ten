import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Section5 = () => {
  return (
    <div className="py-5" style={{ background: "#002242" }}>
      <Container className="text-center text-light">
        <h1>BUY. SELL. TRADE</h1>
        <h5>
          10 Swap enables you to buy, sell and trade cryptocurrencies in just
          three simple steps
        </h5>
        <br />
        <Row className="g-3">
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow"
              style={{ background: "#002242", border: "2px solid #00509D" }}>
              <Card.Body>
                <h3>Download the App</h3>
                <Row className="g-3">
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <img
                      src="https://stablecoin.co.in/wp-content/uploads/2022/01/1-1.png"
                      alt=""
                      className="w-100"
                    />
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className="d-flex align-items-center">
                    <p>Download our mobile app on App Store for IOS users</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow"
              style={{ background: "#002242", border: "2px solid #00509D" }}>
              <Card.Body>
                <h3>Complete KYC</h3>
                <Row className="g-3">
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <img
                      src="https://stablecoin.co.in/wp-content/uploads/2022/01/2-1.png"
                      alt=""
                      className="w-100"
                    />
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className="d-flex align-items-center">
                    <p>
                      Complete your KYC in under 5 minutes with just your PAN,
                      Adhar & a Selfie
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card
              className="shadow"
              style={{ background: "#002242", border: "2px solid #00509D" }}>
              <Card.Body>
                <h3>Trade</h3>
                <Row className="g-3">
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <img
                      src="https://stablecoin.co.in/wp-content/uploads/2022/01/3-1.png"
                      alt=""
                      className="w-100"
                    />
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    className="d-flex align-items-center">
                    <p>
                      One-click is what it takes to start trading in 100+
                      cryptocurrencies
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section5;
