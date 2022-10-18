import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/Mobile.webp";
import { motion } from "framer-motion";
const Section3 = () => {
  return (
    <div className="py-5" style={{ background: "#002242", overflow: "hidden" }}>
      <Container>
        <Row className="g-3">
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center text-light">
            <motion.h1
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.3, duration: 2 }}>
              TRUSTED PLATFORM ANYTIME & ANYWHERE
            </motion.h1>
            <motion.p
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                bounce: 0.3,
                duration: 2,
                delay: 0.25,
              }}>
              The Stablecoin mobile app adapts the full functionality of the
              Stablecoin platform for seamless ‘on-the-go’ trading
            </motion.p>
          </Col>
          <Col sm={12} lg={6}>
            <motion.img
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.3, duration: 2 }}
              src={image}
              alt=""
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
