import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

import facebook from "../../Images/SVG/facebook.svg";
import github from "../../Images/SVG/github.svg";
import linkedin from "../../Images/SVG/linkedin.svg";
import twitter from "../../Images/SVG/twitter.svg";

import "../../CSS/footer.css";

function FooterNav() {
  return (
    <footer>
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
    </footer>
  );
}

export default FooterNav;
