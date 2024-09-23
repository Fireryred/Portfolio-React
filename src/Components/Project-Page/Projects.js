import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "./Project";

import BantayBayanImage from "../../Images/Projects/BantayBayan.jpg";
import RealifsImage from "../../Images/Projects/Realifs.jpg";
import SolobitImage from "../../Images/Projects/SoloBit.png";
import MyxaImage from "../../Images/Projects/SoloBit.png";

const projects = {
  0: {
    name: "Realifs",
    image: { RealifsImage },
    language: "React-Native - Firestore - Mongodb - DirectionAPI",
    description:
      "Think of Grab/Uber but instead of food, you are delivering donation, " +
      "It connects donor, delivery persons (fetchers), and donation effort " +
      "organization (CSO administrators)",
  },
  1: {
    name: "Solobit",
    image: { SolobitImage },
    language: "PHP - Java - MySQL - Bootstrap",
    description:
      "An e-commerce webisite as a solo project with the goal of me getting " +
      "used to PHP, then later switched it to Java",
  },
  2: {
    name: "Myxa",
    image: { MyxaImage },
    language: "Java - Firestore - MapsAPI - DirectionAPI",
    description:
      "Meal kit delivery service, like blue apron, is accesible through you " +
      "phone. Be able to plan your meals with your phone",
  },
  3: {
    name: "BantayBayan",
    image: { BantayBayanImage },
    language: "Java JSP - MYSql - Bootstrap4 - MailAPI",
    description:
      "A Management Information System, it connects civilians and village " +
      "official digitally, aiding in submitting and receiving issues within " +
      "the community.",
  },
};
const projectLength = Object.keys(projects).length;
function Projects() {
  return (
    <section>
      <Container fluid className="min-vh-100 sub-container">
        <Row xs={5}>
          <Col />
          <Col xs={7} className="px-5">
            <div className="text-end heading-title mb-3">
              <div className="line" />
              <div>
                Projects<span className="text-green">.</span>
              </div>
            </div>
          </Col>
        </Row>
        <Project projects={projects} length={projectLength} />
      </Container>
    </section>
  );
}

export default Projects;
