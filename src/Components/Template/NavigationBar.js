import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

import github from "../../Images/SVG/github.svg";
import facebook from "../../Images/SVG/facebook.svg";
import twitter from "../../Images/SVG/twitter.svg";
import linkedin from "../../Images/SVG/linkedin.svg";

import "../../CSS/footer.css";

function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Nav
            variant="underline"
            defaultActiveKey="./"
            className="justify-content-left"
          >
            <Nav.Item>
              <Nav.Link href="./">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#project">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-right">
            <Button variant="outline-success" href="./">
              Resume
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand="lg" fixed="bottom" bg="dark" data-bs-theme="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link href="./">
              <Image src={github} className="footer-svg" />
            </Nav.Link>
            <Nav.Link href="./">
              <Image src={facebook} className="footer-svg" />
            </Nav.Link>
            <Nav.Link href="./">
              <Image src={twitter} className="footer-svg" />
            </Nav.Link>
            <Nav.Link href="./">
              <Image src={linkedin} className="footer-svg" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
