import { useEffect, useRef, useState } from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import github from "../Images/SVG/github.svg";
import facebook from "../Images/SVG/facebook.svg";
import twitter from "../Images/SVG/twitter.svg";
import linkedin from "../Images/SVG/linkedin.svg";
import resume from "../PDF/Gershom_Gruta_Resume.pdf";

import "../CSS/nav.css";

function NavigationBar(props) {
  const items = ["Home", "About", "Project", "Contact"];
  const observerRefs = props.refs;
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const item = items.map((item, key) => (
    <Nav.Item>
      <a
        className={`${key === visibleKey ? "active" : ""}`}
        activeKey="./"
        href={`#${item.toLowerCase()}`}
      >
        {item}
      </a>
    </Nav.Item>
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
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Nav variant="underline" className="justify-content-left">
            {item}
          </Nav>
          <Nav className="justify-content-right">
            <Button variant="outline-success" target="_blank" href={resume}>
              My Resumé
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand="lg" fixed="bottom" bg="dark" data-bs-theme="dark">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Link target="_blank" href="https://github.com/Fireryred">
              <img src={github} alt="" className="footer-svg" />
            </Nav.Link>
            <Nav.Link
              target="_blank"
              href="https://www.linkedin.com/in/gershom-gruta/"
            >
              <img src={linkedin} alt="" className="footer-svg" />
            </Nav.Link>
            <Nav.Link target="_blank" href="https://www.facebook.com/Abbyssof/">
              <img src={facebook} alt="" className="footer-svg" />
            </Nav.Link>
            <Nav.Link target="_blank" href="https://x.com/GershomGruta">
              <img src={twitter} alt="" className="footer-svg" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
