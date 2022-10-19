import React from "react";
import logo from "../assets/Group 1.png";
import { Link } from "react-router-dom";
import sheild from "../assets/icons8-shield-100.png";
import alchemy from "../assets/Alchemy.67ed4ee30c45cc6a0b94.png";
const Footer = () => {
  return (
    <>
      <div className="footerContainer" style={{ overflowX: "hidden" }}>
        <div className="container text-light">
          <div className="row">
            <div className="col-12 col-lg-4 ">
              <div className="d-flex align-items-center justify-content-center flex-column footerSocialsIcons">
                <img src={logo} alt="" className="logoImage" />
                <h1
                  className="mx-auto"
                  style={{ fontWeight: "700", fontSize: "35px" }}>
                  10 Swap
                </h1>
              </div>
            </div>
            <div className="col-12 col-lg-4 footerSocialsIcons">
              <p style={{ fontSize: "20px " }}>
                Contact :{" "}
                <a href="mailto:hello@10swap.finance">hello@10swap.finance</a>{" "}
              </p>
              <p style={{ fontSize: "20px " }}>Follow Us :</p>
              <div
                className="d-flex w-100  align-items-center footerIcons "
                style={{ gap: "1rem" }}>
                <a href="https://mobile.twitter.com/INRDcoin" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>

                <a href="https://t.me/INRD8" target="_blank">
                  <i className="fa-brands fa-telegram"></i>
                </a>

                <a
                  href="https://discord.com/channels/961181494813016144/961181494813016146"
                  target="_blank">
                  <i className="fa-brands fa-discord"></i>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column align-items-end footerSocialsIcons">
              <div className="certificate">
                <div className="row">
                  <div className="col-2 d-flex align-items-center ">
                    <img src={sheild} alt="" className=" sheild" />
                  </div>
                  <div className="col-10 d-flex align-items-start justify-content-center  mt-2  flex-column">
                    <img className="w-50" src={alchemy} alt="" />
                    <h6>Certified Instructure</h6>
                  </div>
                </div>
              </div>
              <p className="my-4 text-secondary">
                © 2022 10 Swap. All right reserved
              </p>
            </div>
          </div>
          <br />
          <div
            className="w-100 d-flex justify-content-center"
            style={{ gap: "3rem" }}>
            <Link style={{ color: "#ffff" }} to="/pp" target="_blank">
              Privacy Policy
            </Link>
            <Link style={{ color: "#ffff" }} to="/tc" target="_blank">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
      <div
        className="d-flex text-light justify-content-center align-items-center bg-dark"
        style={{ background: "#212121" }}>
        <p className="text-light my-auto py-3">
          <b>10 swap is the trading name for Fireblocks Private Ltd</b>
        </p>
      </div>
    </>
  );
};

export default Footer;
