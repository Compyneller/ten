import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/10-SWAP_Logo-03_12-Oct'22.png";
const About = () => {
  return (
    <div className="py-5" style={{ background: "#002242" }}>
      <Container>
        <Row className="g-5 text-light">
          <Col sm={12} lg={6}>
            <h1>ABOUT 10 SWAP</h1>
            <br />
            <p>
              A change in outlook has happened with the acquaintance of crypto
              resources in the monetary world; 10 Swap is here to securely and
              safely guide India forward. 10 Swap was created with the excellent
              security and consistency norms both retail clients expect and
              institutional clients require. <br />
              <br />
              We are a digital/cryptocurrency trade which is completely
              incorporated into the Indian financial framework and made in light
              of individual clients. <br />
              <br />
              We began in 2022 with the extreme thought that anybody at any
              place, ought to have the option to effectively and safely send and
              get Bitcoin. Today, we offer a trusted and simple to-involve stage
              for getting to the more extensive crypto-economy. <br />
              <br />
              Our way of thinking is to draw in with controllers and financial
              establishments to set the norm for the Indian digital industry.
              Because of our hearty consistency system, we had the option to get
              banking administrations given by an India-based monetary
              foundation. Our client’s assets stay in India in an isolated
              financial balance, legitimately separate from 10 Swap’s working
              capital and agreeable with Indian financial regulations, giving an
              extra layer of wellbeing and security. <br />
              <br />
              While the way is new, the assumptions are not.Stable coin provides
              a user friendly platform to buy and sell crypto currencies which
              is also very safe to use.
            </p>
          </Col>
          <Col sm={12} lg={6} className="d-flex align-items-center">
            <img src={logo} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
