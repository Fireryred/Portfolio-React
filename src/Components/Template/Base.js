import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Base() {
  return (
    <section>
      <Container fluid className="sub-container">
        <div className="ref">
          <div
            ref={(div) => {
              props.handleRef(div, 0);
            }}
          />
        </div>
        <Row xs={5}>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Base;
