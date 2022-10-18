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
            <Card className="shadow">
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluent/344/global-warming.png"
                  height={90}
                  alt=""
                />
                <h5>GLOBAL</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam ipsum optio ipsa sapiente totam. Fuga omnis pariatur
                  repellendus explicabo quas aspernatur deleniti, minus animi
                  libero aut dicta assumenda maxime sequi.
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card className="shadow">
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluent/344/global-warming.png"
                  height={90}
                  alt=""
                />
                <h5>GLOBAL</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam ipsum optio ipsa sapiente totam. Fuga omnis pariatur
                  repellendus explicabo quas aspernatur deleniti, minus animi
                  libero aut dicta assumenda maxime sequi.
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card className="shadow">
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluent/344/global-warming.png"
                  height={90}
                  alt=""
                />
                <h5>GLOBAL</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam ipsum optio ipsa sapiente totam. Fuga omnis pariatur
                  repellendus explicabo quas aspernatur deleniti, minus animi
                  libero aut dicta assumenda maxime sequi.
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card className="shadow">
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluent/344/global-warming.png"
                  height={90}
                  alt=""
                />
                <h5>GLOBAL</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam ipsum optio ipsa sapiente totam. Fuga omnis pariatur
                  repellendus explicabo quas aspernatur deleniti, minus animi
                  libero aut dicta assumenda maxime sequi.
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card className="shadow">
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluent/344/global-warming.png"
                  height={90}
                  alt=""
                />
                <h5>GLOBAL</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam ipsum optio ipsa sapiente totam. Fuga omnis pariatur
                  repellendus explicabo quas aspernatur deleniti, minus animi
                  libero aut dicta assumenda maxime sequi.
                </p>
              </Card.Body>
            </Card>
          </SplideSlide>
          <SplideSlide>
            <Card className="shadow">
              <Card.Body className="d-flex flex-column align-items-center">
                <img
                  src="https://img.icons8.com/fluent/344/global-warming.png"
                  height={90}
                  alt=""
                />
                <h5>GLOBAL</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam ipsum optio ipsa sapiente totam. Fuga omnis pariatur
                  repellendus explicabo quas aspernatur deleniti, minus animi
                  libero aut dicta assumenda maxime sequi.
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
