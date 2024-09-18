import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
function Project() {
  return (
    <Row xs={5}>
      <Col>
        <Card>
          <Card.Img></Card.Img>
          <Card.Title></Card.Title>
          <Card.Subtitle></Card.Subtitle>
          <Card.Text></Card.Text>
        </Card>
      </Col>
    </Row>
  );
}

export default Project;
