import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "./Project-Page/ProjectCard";

import BantayBayanImage from "../Images/Projects/BantayBayan.jpg";
import RealifsImage from "../Images/Projects/Realifs.jpg";
import SolobitImage from "../Images/Projects/SoloBit.png";
import MyxaImage from "../Images/Projects/Myxa.png";
import ShipwreckImage from "../Images/Projects/shipwreck.png";

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
      "Think of Grab/Uber but instead of food, you are delivering donation, It connects donor, delivery persons, and donation effort organization. ",
    full_description: [
      `REALIFS short for 'Real-time Integrated Fetching System', is a donation platform that assist Civil Society Organizations (CSO) and donor by providing real-time donation fetching and delivery`,
      `The reason why we chose to create this is because it was pandemic and we saw the popularity of delivery apps, we thought about how donors can't donate due to them stuck at their houses. `,
      `The mobile application will provide a donation platform that will store, organize and manage data of accounts and donation efforts. This includes a real-time communication and socket functionalities that handles GPS route navigaiton, donation tracking, chat features and a payment gateway for fetching fees`,
      `The main task I did in this capstone project is to develop the mobile application and QA the HR's website, we decided to use React-Native as we are interested in learning it and bootstrap for the UI. MapsAPI and DirectionAPI from google was used to track the fetchers during delivery and CSO's donation effort. Firebase was used along side Mongodb, Firebase for the data and authentication, and Mongodb for banking purposes. `,
    ],
  },
  1: {
    name: "ShipWreck",
    links: {
      source_code: "https://github.com/Fireryred/Shipwreck-GameJam",
      gallery: "https://shionbluu.itch.io/shipwreck-gamejam",
    },
    image: ShipwreckImage,
    language: "Godot-4 - GDScript",
    description:
      "An unfinished rouge-like game, it has 3 enemies, the basic fish, a fast torpedo ship, and a slow tanky ship, your goal is to survive and earn high scores. ",
    full_description: [
      `ShipWreck is a duo-project. Its a game with the goal of scoring as much as you can while surviving an onslaught fish and ships, it has a timer, levels, cards(power-ups), hp, weapon switch.`,
      `The Game was a submission for Pirate Software - Game Jam 14, the theme surounding this game jam is "it's spreading" we decided to proceed with the sea, as the sea in this world was consuming the land and the only way to survive the situation at hand is to create a ship.`,
      `The project was a for fun entree, we did not enter with the goal to win but to have fun learning and implementing features. The first week of the jam we did not do anything as the only submission was only a game dev document, but it was revealed later that we need a prototype. Learning vector from scratch was fun, and the dread of asking why a certaain feature doesn't work but was logacally sound was also fun.`,
      `The game was strictly made only by using GDScript as I am willing to do features from scratch, all of the logic of the game was programmed by me, and all of its art and UI/UX is implemented by my duo.`,
    ],
  },
  2: {
    name: "Solobit",
    links: {
      source_code: "https://github.com/Fireryred/solo-bit-php/tree/develop",
      gallery: "https://fireryred.github.io/Portfolio/Pages/work/solobit.html",
    },
    image: SolobitImage,
    language: "PHP - Java - MySQL - Bootstrap",
    description:
      "An e-commerce webisite as a solo project with the goal of me getting used to PHP, then later switched it to Java. it's a simple website with checkout and reciept. ",
    full_description: [
      `Solobit is an e-commerce website, it has simple features like add to cart, checking wheter your credit-card is valid, storing previous data entered, checkout, and reciept send through email.`,
      `The website was created for learning purposes. It was for me to learn PHP and its syntax, it was a fun week assignment. Later on my college career we were tasked to create an e-commerce website to learn design patterns, so I decided to rebuild this website in Java JSP.`,
      `As said earlier the original time frame of this assignment was a week, but I faintly remember working on this project for 3 days as I was busy during that time, I manage to scrape by and present the project to my professor.`,
      `The website used PHP as the language and bootstrap for the UI, alongside MySQL as the database and MailAPI to send the receipt to its customer. It was later switch from PHP to Java to learn design patterns.`,
    ],
  },
  3: {
    name: "Myxa",
    links: {
      source_code: "https://github.com/pvsmagbojos/Myxa",
      gallery: "https://fireryred.github.io/Portfolio/Pages/work/myxa.html",
    },
    image: MyxaImage,
    language: "Java - Firestore - MapsAPI - DirectionAPI",
    description:
      "Meal kit delivery service, like blue apron, is accesible through you phone, and be able to plan your meals within the week with your phone. ",
    full_description: [
      `Myxa is a meal-kit delivery system, it delivers ingridients from recipies that are set by the consumers. Providing an easy way to the tedious task of meal-prep.`,
      `The app was created due to the time of creation, there was no meal-kit delivery application in the Philippines, so we decided to tackle and create a meal-kit delivery app.`,
      `The mobile application gives a wide variety of chioces of ingredients for food recipes, a more home-cooked and specific food recepies for users, to bridge suppliers and consumer. The application reduce time wasted on traving to market places, it also allows consumer to customize thier own recipe, and automate weekly orders.`,
      `The main task I was assigned was to implement and integrate maps and its tracker, java was used alongside with gradle. Firestore and Mmongodb for the database, Firestore Firebase was used as the primary way to store data and for authentication, and Mongodb for the banking features. MapsAPI and DirectionsAPI from google was used for its map and tracking features.`,
    ],
  },
  4: {
    name: "BantayBayan",
    links: {
      source_code: "",
      gallery:
        "https://fireryred.github.io/Portfolio/Pages/work/bantaybayan.html",
    },
    image: BantayBayanImage,
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
  5: {},
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
