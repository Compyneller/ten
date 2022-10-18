import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const Section4 = () => {
  return (
    <div className="py-5" style={{ background: "#00509D", overflow: "hidden" }}>
      <Container className="text-light">
        <Row className="g-3">
          <Col xs={12} sm={6} md={4} lg={4}>
            <motion.div
              style={{ height: "100%" }}
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.3, duration: 2 }}>
              <Card
                style={{
                  height: "100%",
                  background: "#00509D",
                  border: " none",
                }}
                className="shadow">
                <Card.Body>
                  <img
                    src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-friendly-football-soccer-flaticons-flat-flat-icons.png"
                    height={90}
                    alt=""
                  />
                  <h5>USER-FRIENDLY</h5>
                  <p>
                    The platform is user-friendly offering guidance and tutorial
                    for first time users.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <motion.div
              style={{ height: "100%" }}
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 2,
                delay: 0.25,
              }}>
              <Card
                style={{
                  height: "100%",
                  background: "#00509D",
                  border: " none",
                }}
                className="shadow">
                <Card.Body>
                  <img
                    src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-secure-real-estate-wanicon-flat-wanicon.png"
                    height={90}
                    alt=""
                  />
                  <h5>SECURE</h5>
                  <p>
                    Security above everything. The platform is safe and private.
                  </p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={4}>
            <motion.div
              style={{ height: "100%" }}
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 2,
                delay: 0.5,
              }}>
              <Card
                style={{
                  height: "100%",
                  background: "#00509D",
                  border: " none",
                }}
                className="shadow">
                <Card.Body>
                  <img
                    src="https://img.icons8.com/external-wanicon-flat-wanicon/344/external-fast-customer-services-wanicon-flat-wanicon.png"
                    height={90}
                    alt=""
                  />
                  <h5>LIGHTNING QUICK</h5>
                  <p>High performance and high speed transactions.</p>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
