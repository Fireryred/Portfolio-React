import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <>
      <Container fluid="sm" className="min-vh-100 align-middle">
        <Row xs={5} className="min-vh-100 p-5">
          <Col />
          <Col xs={5}>
            <h1>
              <b>Hey, I'm Gershom.</b>
            </h1>
            <h4>I'm a Software Engineer</h4>
            <p>
              I build programs for fun and recently have been dipping my toes on
              Godot 4. I still am working on my skills as a software developer.
              Let's connect
            </p>
            <Button variant="success">Contact me</Button>
          </Col>
          <Col />
          <Col />
        </Row>
      </Container>
    </>
  );
}

export default Home;
