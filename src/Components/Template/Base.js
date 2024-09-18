import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Base() {
  return (
    <section>
      <Container fluid className="min-vh-100">
        <Row xs={5}>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Base;
