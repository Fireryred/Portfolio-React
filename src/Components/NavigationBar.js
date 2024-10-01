import { useEffect, useRef, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

import github from "../Images/SVG/github.svg";
import facebook from "../Images/SVG/facebook.svg";
import twitter from "../Images/SVG/twitter.svg";
import linkedin from "../Images/SVG/linkedin.svg";
import resume from "../PDF/Gershom_Gruta_Resume.pdf";

import "../CSS/footer.css";

function NavigationBar(props) {
  const observerRefs = props.refs;
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const observerCallback = async (e, key) => {
    if (e.length && e[0].isIntersecting) {
      setVisibleKey(key);
    }
  };

  useEffect(() => {
    if (observerRefs.current?.length && observers.current) {
      Array.from(Array(10).keys()).forEach((_u, key) => {
        observers.current[key] = new IntersectionObserver((e) =>
          observerCallback(e, key)
        );
        if (observerRefs.current[key]) {
          observers.current[key].observe(observerRefs.current[key]);
        }
      });
    }
    return () =>
      observers.current?.forEach((observer) => observer?.current?.disconnect());
  }, [observerRefs, observers]);

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
              <Nav.Link
                className={0 === visibleKey ? "active" : ""}
                href="#home"
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={1 === visibleKey ? "active" : ""}
                href="#about"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={2 === visibleKey ? "active" : ""}
                href="#project"
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={3 === visibleKey ? "active" : ""} href="">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-right">
            <Button variant="outline-success" target="_blank" href={resume}>
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
