import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    // <section>
    <Container fluid className="min-vh-100 home-container">
      <Row xs={5}>
        <Col />
        <Col xs={6} className="ps-5">
          <p className="home-title">
            Hey, I'm Gershom<span className="text-green">.</span>
          </p>
          <p className="home-subtitle">
            I'm a <span className="text-green">Software Engineer</span>
          </p>
        </Col>
      </Row>
      <Row xs={5}>
        <Col />
        <Col xs={6} className="ps-5">
          <p className="home-content fs-5">
            I build programs for fun and recently have been dipping my toes on
            Godot 4. I still am working on my skills as a software developer.
            Let's connect
          </p>
          <Button variant="success">Contact me </Button>
        </Col>
      </Row>
    </Container>
    // </section>
  );
}

export default Home;
