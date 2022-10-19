import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { section2Data } from "../../data/Data";

const Section2 = () => {
  return (
    <div className="py-5" style={{ background: "#00509D", overflow: "hidden" }}>
      <Container>
        <Row className="g-3 text-center text-light">
          {section2Data.map((items, index) => {
            return (
              <Col xs={6} sm={6} lg={3}>
                <img src={items.img} height={50} alt="" />
                <h4 style={{ fontWeight: "bold" }}>{items.name}</h4>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
