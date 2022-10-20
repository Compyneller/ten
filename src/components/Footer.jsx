import React from "react";
import logo from "../assets/Group 1.png";
import { Link } from "react-router-dom";
import sheild from "../assets/icons8-shield-100.png";
import alchemy from "../assets/Alchemy.67ed4ee30c45cc6a0b94.png";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div className=" py-5" style={{ background: "#212121" }}>
        <Container>
          <Row className="g-3 d-flex justify-content-center align-items-center">
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="d-flex flex-column align-items-center">
              <img src={logo} alt="" className="w-50" />
              <h1
                className="mx-auto text-light"
                style={{ fontWeight: "700", fontSize: "35px" }}>
                10 Swap
              </h1>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={2}
              className="d-flex flex-column align-items-center justify-content-center">
              <Link to="/pp" className="text-light">
                Privacy Policy
              </Link>
              <br />
              <Link to="/tc" className=" text-light">
                Terms and Conditions{" "}
              </Link>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={3}
              className="d-flex flex-column align-items-center justify-content-center">
              <p className="d-flex align-items-center text-light">
                Contact :
                <a
                  className="ms-2 text-light"
                  href="mailto:hello@10swap.finance">
                  hello@10swap.finance
                </a>
              </p>
              <div className="d-flex" style={{ gap: "1rem" }}>
                <a href="https://mobile.twitter.com/10Swap" target="_blank">
                  <i
                    style={{ fontSize: "30px", color: "#ffff" }}
                    className="fa-brands fa-twitter"></i>
                </a>

                <a href="https://t.me/help10SWAP" target="_blank">
                  <i
                    style={{ fontSize: "30px", color: "#ffff" }}
                    className="fa-brands fa-telegram"></i>
                </a>

                <a
                  href="https://www.instagram.com/10swap_app/?igshid=YmMyMTA2M2Y%3D"
                  target="_blank">
                  <i
                    style={{ fontSize: "30px", color: "#ffff" }}
                    className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="tel:18002035315">
                  <i
                    className="fa-solid fa-phone"
                    style={{ fontSize: "30px", color: "#ffff" }}></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="d-flex flex-column text-light justify-content-center align-items-center bg-dark py-3"
        style={{ background: "#212121" }}>
        <p className="text-light my-auto mb-2">
          10 swap is the trading name for Fireblocks Private Ltd.
        </p>
        <p className="text-light my-auto">
          ©10 SWAP all rights reserved. 10 SWAP is the trading name for Fire
          Blocks Private Limited and it's Corporate Access Number is 2023529536
        </p>
      </div>
    </>
  );
};

export default Footer;
