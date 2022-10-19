import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/Group 1.png";
import { Link } from "react-router-dom";
const NavBarComp = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ backgroundImage: "linear-gradient(to right , #002242, #000)" }}>
      <Container>
        <Navbar.Brand as={Link} href="/">
          <img src={logo} height={70} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="mailto:hello@10swap.finance">Help</Nav.Link>
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} href="#link">
              Playstore
            </Nav.Link>
            <Nav.Link as={Link} href="#link">
              Appstore
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComp;
