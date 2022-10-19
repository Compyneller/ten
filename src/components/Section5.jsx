import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import first from "../assets/WhatsApp Image 2022-10-19 at 09.45.55.jpg";
import second from "../assets/WhatsApp Image 2022-10-19 at 09.45.56ds.jpg";
import third from "../assets/WhatsApp Image 2022-10-19 at 09.45.56.jpg";
import { motion } from "framer-motion";
const Section5 = () => {
  return (
    <div className="py-5" style={{ background: "#002242", overflow: "hidden" }}>
      <Container className="text-center text-light">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}>
          BUY. SELL. TRADE
        </motion.h1>
        <motion.h5
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}>
          10 Swap enables you to buy, sell and trade cryptocurrencies in just
          three simple steps
        </motion.h5>
        <br />
        <Row className="g-3">
          <Col sm={12} md={6} lg={4}>
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2, bounce: 0.3 }}>
              <Card
                className="shadow"
                style={{ background: "#002242", border: "2px solid #00509D" }}>
                <Card.Body>
                  <motion.h3
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      duration: 2,
                      bounce: 0.3,
                      delay: 0.25,
                    }}>
                    Download the App
                  </motion.h3>
                  <Row className="g-3">
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <motion.img
                        src={first}
                        alt=""
                        className="w-100"
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          duration: 2,
                          bounce: 0.3,
                          delay: 0.5,
                        }}
                      />
                    </Col>
                    <Col
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      className="d-flex align-items-center">
                      <motion.p
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          duration: 2,
                          bounce: 0.3,
                          delay: 1,
                        }}>
                        Download our mobile app from the Play Store &App Store
                      </motion.p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 2, bounce: 0.3 }}>
              <Card
                className="shadow"
                style={{ background: "#002242", border: "2px solid #00509D" }}>
                <Card.Body>
                  <motion.h3>Complete KYC</motion.h3>
                  <Row className="g-3">
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <motion.img
                        initial={{ y: -300, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          duration: 2,
                          bounce: 0.3,
                          delay: 0.5,
                        }}
                        src={third}
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
                      <motion.p
                        initial={{ y: -300, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          duration: 2,
                          bounce: 0.3,
                          delay: 1,
                        }}>
                        Complete your KYC in under 5 minutes with just your ID &
                        a Selfie
                      </motion.p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0.3,
              }}>
              <Card
                className="shadow"
                style={{ background: "#002242", border: "2px solid #00509D" }}>
                <Card.Body>
                  <motion.h3
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      duration: 2,
                      bounce: 0.3,
                      delay: 0.25,
                    }}>
                    Trade
                  </motion.h3>
                  <Row className="g-3">
                    <Col xs={6} sm={6} md={6} lg={6}>
                      <motion.img
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          duration: 2,
                          bounce: 0.3,
                          delay: 0.5,
                        }}
                        src={second}
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
                      <motion.p
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          type: "spring",
                          duration: 2,
                          bounce: 0.3,
                          delay: 1,
                        }}>
                        One-click is what it takes to start trading in 100+
                        cryptocurrencies
                      </motion.p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section5;
