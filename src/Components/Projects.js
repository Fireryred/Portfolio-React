import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./Project-Page/ProjectCard";

import BantayBayanImage from "../Images/Projects/BantayBayan.jpg";
import RealifsImage from "../Images/Projects/Realifs.jpg";
import SolobitImage from "../Images/Projects/SoloBit.png";
import MyxaImage from "../Images/Projects/Myxa.png";
import RealifsLogo from "../Images/Projects/Realifs BG.svg";

const projects = {
  0: {
    name: "Realifs",
    links: {
      source_code: "https://github.com/Fireryred/realifs",
      gallery: "https://fireryred.github.io/Portfolio/Pages/work/realifs.html",
    },
    image: RealifsImage,
    logo: RealifsLogo,
    language: "React-Native - Firestore - Mongodb - DirectionAPI",
    description:
      "Think of Grab/Uber but instead of food, you are delivering donation, " +
      "It connects donor, delivery persons, and donation effort organization. ",
    full_description: [
      `REALIFS short for 'Real-time Integrated Fetching System', is a donation platform that asist Civil Society Organizations (CSO) and donor by providing real-time donation fetching and delivery`,
      `The mobile application will provide a donation platform that will store, organize and manage data of accounts and donation efforts. This includes a real-time communication and socket functionalities that handles GPS route navigaiton, donation tracking, chat features and a payment gateway for fetching fees`,
      `The main task I did in this capstone project is to develop the mobile application and QA the HR's website, we decided to use React-Native as we are interested in learning it and bootstrap for the UI. MapsAPI and DirectionAPI from google was used to track the fetchers during delivery, and CSO's donation effort. Firebase was used along side Mongodb, Firebase for your data management, and Mongodb for banking purposes. `,
    ],
  },
  1: {
    name: "Solobit",
    links: {
      source_code: "https://github.com/Fireryred/solo-bit-php/tree/develop",
      gallery: "https://fireryred.github.io/Portfolio/Pages/work/solobit.html",
    },
    image: SolobitImage,
    logo: "",
    language: "PHP - Java - MySQL - Bootstrap",
    description:
      "An e-commerce webisite as a solo project with the goal of me getting " +
      "used to PHP, then later switched it to Java. it's a simple website " +
      "with checkout and reciept. ",
    full_description: [],
  },
  2: {
    name: "Myxa",
    links: {
      source_code: "https://github.com/pvsmagbojos/Myxa",
      gallery: "https://fireryred.github.io/Portfolio/Pages/work/myxa.html",
    },
    image: MyxaImage,
    logo: "",
    language: "Java - Firestore - MapsAPI - DirectionAPI",
    description:
      "Meal kit delivery service, like blue apron, is accesible through you " +
      "phone, and be able to plan your meals within the week with your phone. ",
    full_description: [],
  },
  3: {
    name: "BantayBayan",
    links: {
      source_code: "",
      gallery:
        "https://fireryred.github.io/Portfolio/Pages/work/bantaybayan.html",
    },
    image: BantayBayanImage,
    logo: "",
    language: "Java JSP - MYSql - Bootstrap4 - MailAPI",
    description:
      "A Management Information System, it connects civilians and village official digitally, aiding in submitting and receiving issues within the community. ",
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
