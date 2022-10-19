import React from "react";
import { Card, Container } from "react-bootstrap";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Section6 = () => {
  return (
    <div className="py-5 text-center" style={{ background: "#00509D" }}>
      <Container>
        <h1 className="text-light">WHY 10 SWAP EXCHANGE?</h1>
        <h5 className="text-light">
          10 Swap are cryptocurrencies without the volatility. They share a lot
          of the same powers as ETH but their value is steady, more like a
          traditional currency. So you have access to stable money that you can
          use on Ethereum.
        </h5>
        <br />
        <Splide
          aria-label="My Favorite Images"
          options={{
            rewind: true,
            width: "100%",
            gap: "1rem",
            type: "loop",
            perPage: 3,
            focus: "center",
            autoplay: true,
            arrows: true,
            interval: 2000,
            pagination: true,
            breakpoints: {
              950: {
                perPage: 1,
              },
            },
          }}>
          <SplideSlide>
            <Card className="shadow" style={{ height: "100%" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluent/344/global-warming.png"
                  height={90}
                  alt=""
                />
                <h5>GLOBAL</h5>
                <p>
                  10 Swap are global and can be sent over the internet. They're
                  easy to receive or send once you have an Ethereum account
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card className="shadow" style={{ height: "100%" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluency/344/change.png"
                  height={90}
                  alt=""
                />
                <h5>EXCHANGEABLE</h5>
                <p>
                  10 Swap are exchangeable for ETH and other Ethereum tokens.
                  Lots of dapps rely on 10 Swap.
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card className="shadow" style={{ height: "100%" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/external-ddara-lineal-color-ddara/344/external-demand-business-elements-ddara-lineal-color-ddara.png"
                  height={90}
                  alt=""
                />
                <h5>HIGH DEMAND</h5>
                <p>
                  Demand for 10 Swap is high, so you can earn interest for
                  lending yours. Make sure you're aware of the risks before
                  lending.
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card className="shadow" style={{ height: "100%" }}>
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluency/344/envelope-secured.png"
                  height={90}
                  alt=""
                />
                <h5>SECURED</h5>
                <p>
                  10 Swap are secured by cryptography. No one can forge
                  transaction on your behalf.
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
        </Splide>
      </Container>
    </div>
  );
};

export default Section6;
