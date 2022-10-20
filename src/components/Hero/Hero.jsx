import React from "react";
import "./Hero.scss";
import video from "../../assets/Earth - 17235.mp4";
import image from "../../assets/shubham-dhage-gC_aoAjQl2Q-unsplash-removebg.png";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <header className="hero-container">
      <Container>
        <Row className="g-3">
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center  text-light">
            <Container>
              <motion.h1
                className="ms-auto"
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5, duration: 2 }}
                style={{ textTransform: "uppercase" }}>
                Buy Sell Send Receive Crypto Worldwide
              </motion.h1>
              <motion.h5
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 2,
                  delay: 0.5,
                }}>
                10 SWAP is a global innovation functioning on seven blockchains
                to lead the way of modern capitalism.
              </motion.h5>
            </Container>
          </Col>
          <Col sm={12} lg={6}>
            {/* <video src={video} autoPlay loop muted /> */}
          </Col>
        </Row>
      </Container>
      <img src={image} alt="" className="w-100" />
    </header>
  );
};

export default Hero;
