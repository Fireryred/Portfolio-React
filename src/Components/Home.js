import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Reveal from "./Animation/Reveal";

function Home(props) {
  return (
    // <section>
    <Container fluid className="home-container" id="home">
      <div className="ref">
        <div
          ref={(div) => {
            props.handleRef(div, 0);
          }}
        />
      </div>
      <Row xs={5}>
        <Col />
        <Col xs={6} className="ps-5">
          <Reveal>
            <p className="home-title">
              Hey, I'm Gershom<span className="text-green">.</span>
            </p>
            <p className="home-subtitle">
              I'm a <span className="text-green">Software Engineer</span>
            </p>
          </Reveal>
        </Col>
      </Row>
      <Row xs={5}>
        <Col />
        <Col xs={4} className="ps-5">
          <Reveal>
            <p className="home-content">
              I build programs for fun and recently have been dipping my toes on
              Godot 4. I still am working on my skills as a software developer.
              Let's connect
            </p>
          </Reveal>
          <Reveal>
            <Button variant="success" href="#contact">
              Contact me
            </Button>
          </Reveal>
        </Col>
      </Row>
    </Container>
    // </section>
  );
}

export default Home;
