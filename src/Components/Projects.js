import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./Project-Page/ProjectCard";

import BantayBayanImage from "../Images/Projects/BantayBayan.jpg";
import RealifsImage from "../Images/Projects/Realifs.jpg";
import SolobitImage from "../Images/Projects/SoloBit.png";
import MyxaImage from "../Images/Projects/Myxa.png";

const projects = {
  0: {
    name: "Realifs",
    links: {
      source_code: "https://github.com/Fireryred/realifs",
      gallery: "https://fireryred.github.io/Portfolio/Pages/work/realifs.html",
    },
    image: RealifsImage,
    language: "React-Native - Firestore - Mongodb - DirectionAPI",
    description:
      "Think of Grab/Uber but instead of food, you are delivering donation, " +
      "It connects donor, delivery persons, and donation effort organization.",
  },
  1: {
    name: "Solobit",
    links: {
      source_code: "https://github.com/Fireryred/solo-bit-php/tree/develop",
      gallery: "https://fireryred.github.io/Portfolio/Pages/work/solobit.html",
    },
    image: SolobitImage,
    language: "PHP - Java - MySQL - Bootstrap",
    description:
      "An e-commerce webisite as a solo project with the goal of me getting " +
      "used to PHP, then later switched it to Java. it's a simple website " +
      "with checkout and reciept.",
  },
  2: {
    name: "Myxa",
    links: {
      source_code: "https://github.com/pvsmagbojos/Myxa",
      gallery: "https://fireryred.github.io/Portfolio/Pages/work/myxa.html",
    },
    image: MyxaImage,
    language: "Java - Firestore - MapsAPI - DirectionAPI",
    description:
      "Meal kit delivery service, like blue apron, is accesible through you " +
      "phone, and be able to plan your meals within the week with your phone.",
  },
  3: {
    name: "BantayBayan",
    links: {
      source_code: "",
      gallery:
        "https://fireryred.github.io/Portfolio/Pages/work/bantaybayan.html",
    },
    image: BantayBayanImage,
    language: "Java JSP - MYSql - Bootstrap4 - MailAPI",
    description:
      "A Management Information System, it connects civilians and village official digitally, aiding in submitting and receiving issues within the community.",
    full_description: [
      "BantayBayan is a Management Information System for civilians andgovernment official, it aims to ease the communication between them.Built with a team of seven highschool students.",
      "The website provides the goverment a centralized repositories of public concern as it lessens the needs to classify reports thus helping their service, it also will help the civilians to know that their concerns will be able to reach the relevant authorities.",
      "The aim of this website is to reinforce the Global Goal no.16 which is peace, justice and storng trust, to achive this we build a website which establish a strong foundation of trust between the government and it's citizen.",
      "The main task I did in this mini-thesis is to develop the website, we decided to use Java EE as the base and bootstrap for the UI, as for the database we used a local one, MySQLite as our website is not handling that much data. We added an automated mail response once the concern is resolve. We also added a simple authentication in this website.",
    ],
  },
};
const projectLength = Object.keys(projects).length;
function Projects(props) {
  return (
    <Container fluid className="sub-container" id="project">
      <div className="ref">
        <div
          ref={(div) => {
            props.handleRef(div, 2);
          }}
        />
      </div>
      <Row xs={5}>
        <Col />
        <Col xs={7} className="px-5">
          <div className="text-end heading-title">
            <div className="line" />
            <div>
              Projects<span className="text-green">.</span>
            </div>
          </div>
        </Col>
      </Row>
      <ProjectCard projects={projects} length={projectLength} />
    </Container>
  );
}

export default Projects;
