import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function About() {
  return (
    <section>
      <Container fluid="sm" className="min-vh-100 pt-5">
        <Row xs={5}>
          <Col />
          <Col xs={5}>
            <h1>
              <b>About.</b>
            </h1>
            <p>
              Hello! I'm Gershom, I'm a graduate as a Software Engineer at
              iAcademy. I specialize in backend, primarily Java, but love
              building software with whatever tools are right for the job.
            </p>
            <Button variant="success">Contact me</Button>
          </Col>
          <Col>
            <h5>Actively Using</h5>
            <div className=""></div>
            <h5>Currently learning</h5>
          </Col>
          <Col />
        </Row>
      </Container>
    </section>
  );
}

export default About;
