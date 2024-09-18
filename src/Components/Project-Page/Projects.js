import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <section>
      <Container fluid className="min-vh-100 sub-container">
        <Row xs={5}>
          <Col />
          <Col xs={7} className="px-5">
            <div className="text-end project-title mb-3">
              <div className="line" />
              <div>
                Projects<span className="text-success">.</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
