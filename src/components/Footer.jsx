import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="py-5 bg-dark text-light text-center">
      <Container>
        <p style={{ fontSize: "12px" }}>
          The purpose of this website is solely to display information regarding
          the products and services available on the 10 Swap.co.in App. It is
          not intended to offer access to any of such products and services. You
          may obtain access to such products and services on the 10 Swap.co.in
          App.Please note that the availability of the products and services on
          the 10 Swap.co.in App is subject to jurisdictional limitations. 10
          Swap.co.in may not offer certain products, features and/or services on
          the 10 Swap.co.in App in certain jurisdictions due to potential or
          actual regulatory restrictions.
        </p>
        <p style={{ fontSize: "12px" }}>
          10 Swap is the trading name of Trackon Canada Private Limited and it
          is situated at the address – 1200- 1015 4 ST SW, Calgary, Alberta, T2R
          1J4, Canada
        </p>
      </Container>
    </div>
  );
};

export default Footer;
