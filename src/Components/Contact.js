import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import emailImage from "../Images/SVG/email.svg";
import Reveal from "./Animation/Reveal";

function Contact(props) {
  return (
    <Container fluid className="sub-container" id="contact">
      <div className="ref">
        <div
          ref={(div) => {
            props.handleRef(div, 3);
          }}
        />
      </div>
      <Row xs={5}>
        <Col />
        <Col xs={7} className="px-5 contact">
          <Reveal>
            <p className="contact-title">
              Contact<span className="text-green">.</span>
            </p>
          </Reveal>
          <Reveal>
            <p className="contact-content">
              Email me if you want to connect! You can also find me at
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/gershom-gruta/"
                className="text-green"
              >
                linkedin
              </a>
              &nbsp;or&nbsp;
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.jobstreet.com.ph/profile/gershom-gruta-YgYM0KhBRz"
                className="text-green"
              >
                jobstreet.
              </a>
            </p>
          </Reveal>
          <Reveal>
            <div className="contact-footer">
              <a
                className="contact-email"
                target="_blank"
                rel="noreferrer"
                href="mailto:gershomgruta06@gmail.com"
              >
                <img alt="" src={emailImage} />
                <span className="text-white">gershomgruta06@gmail.com</span>
              </a>
            </div>
          </Reveal>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default Contact;
