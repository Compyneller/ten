import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const Section1 = () => {
  return (
    <div className="py-5" style={{ background: "#002242", overflow: "hidden" }}>
      <Container className="text-light text-center">
        <motion.h5
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 3 }}>
          We have offices in the four global financial capitals. Do you want to
          join us?
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.5,
            duration: 3,
            delay: 0.5,
          }}>
          GLOBAL PRESENCE
        </motion.h1>
        <br />
        <Row className="g-3">
          <Col xs={12} sm={6} md={4} lg={3}>
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: ".5" }}
              transition={{ type: "spring", bounce: 0.3, duration: 3 }}>
              <Card
                className="shadow"
                style={{ background: "#002242", border: "none" }}>
                <Card.Img
                  variant="top"
                  height={300}
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                />
                <Card.Body className="text-center text-light">
                  <h5>India</h5>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: ".5" }}
              transition={{ type: "spring", bounce: 0.3, duration: 3 }}>
              <Card
                className="shadow"
                style={{ background: "#002242", border: "none" }}>
                <Card.Img
                  variant="top"
                  height={300}
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2130&q=80"
                />
                <Card.Body className="text-center text-light">
                  <h5>Australia</h5>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: ".5" }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 3,
                delay: 1,
              }}>
              <Card
                className="shadow"
                style={{ background: "#002242", border: "none" }}>
                <Card.Img
                  variant="top"
                  height={300}
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                />
                <Card.Body className="text-center text-light">
                  <h5>Canada</h5>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <motion.div
              initial={{ scale: 2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: ".5" }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 3,
                delay: 1.5,
              }}>
              <Card
                className="shadow"
                style={{ background: "#002242", border: "none" }}>
                <Card.Img
                  variant="top"
                  height={300}
                  style={{ objectFit: "cover" }}
                  src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
                <Card.Body className="text-center text-light">
                  <h5>Europe</h5>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
