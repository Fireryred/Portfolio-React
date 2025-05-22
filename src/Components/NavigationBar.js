import { useEffect, useRef, useState } from "react";

import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import github from "../Images/SVG/github.svg";
import facebook from "../Images/SVG/facebook.svg";
import twitter from "../Images/SVG/twitter.svg";
import linkedin from "../Images/SVG/linkedin.svg";
import resume from "../PDF/Gershom_Gruta_Resume.pdf";

import "../CSS/nav.css";
import RevealNav from "./Animation/RevealNav";
import RevealCard from "./Animation/RevealCard";

function NavigationBar(props) {
  const items = ["Home", "About", "Project", "Contact"];
  const observerRefs = props.refs;
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const item = items.map((item, key) => (
    <RevealNav delay={key}>
      <Nav.Item as={"li"}>
        <a
          className={`${key === visibleKey ? "active" : ""}`}
          activeKey="./"
          href={`#${item.toLowerCase()}`}
        >
          {item}
        </a>
      </Nav.Item>
    </RevealNav>
  ));

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
      <Navbar
        key={"md"}
        expand={"md"}
        data-bs-theme="dark"
        sticky="top"
        className="nav-bgcolor"
      >
        <Container>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            id="offcanvas-nav"
            data-bs-theme="dark"
            className="offcanvas-nav"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvas-nav">
                Gershom Gruta
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                as={"ul"}
                variant="underline"
                className="justify-content-left"
              >
                {item}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <RevealNav>
            <Nav placement="end">
              <Button
                className="resume-btn"
                variant="outline-success"
                target="_blank"
                href={resume}
              >
                My Resumé
              </Button>
            </Nav>
          </RevealNav>
        </Container>
      </Navbar>
      <Navbar
        expand="lg"
        fixed="bottom"
        data-bs-theme="dark"
        className="nav-bgcolor"
      >
        <Container className="justify-content-center">
          <RevealCard>
            <Nav className="footer-nav">
              <Nav.Link
                target="_blank"
                href="https://github.com/Fireryred"
                className="footer-link"
              >
                <img src={github} alt="" className="footer-svg" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.linkedin.com/in/gershom-gruta/"
                className="footer-link"
              >
                <img src={linkedin} alt="" className="footer-svg" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.facebook.com/Abbyssof/"
                className="footer-link"
              >
                <img src={facebook} alt="" className="footer-svg" />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://x.com/GershomGruta"
                className="footer-link"
              >
                <img src={twitter} alt="" className="footer-svg" />
              </Nav.Link>
            </Nav>
          </RevealCard>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
