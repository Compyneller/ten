import React from "react";
import { Card, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Section6 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5 text-center" style={{ background: "#00509D" }}>
      <Container>
        <h1>WHY STABLECOIN EXCHANGE?</h1>
        <h5>
          Stablecoin are cryptocurrencies without the volatility. They share a
          lot of the same powers as ETH but their value is steady, more like a
          traditional currency. So you have access to stable money that you can
          use on Ethereum.
        </h5>
        <Slider {...settings}>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Section6;
