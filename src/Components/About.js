import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import github from "../Images/SVG/github.svg";
import facebook from "../Images/SVG/facebook.svg";
import twitter from "../Images/SVG/twitter.svg";
import linkedin from "../Images/SVG/linkedin.svg";
import arrow from "../Images/SVG/arrow.svg";
import Reveal from "./Animation/Reveal";

const TECHSKILL = [
  { id: "tech-0", skill: "Java" },
  { id: "tech-1", skill: "SQL" },
  { id: "tech-2", skill: "NoSQL" },
  { id: "tech-3", skill: "Godot 4" },
  { id: "tech-4", skill: "React.js" },
  { id: "tech-5", skill: "React Native" },
  { id: "tech-6", skill: "OOP" },
  { id: "tech-7", skill: "RDBMS" },
  { id: "tech-8", skill: "Troubleshooting" },
];
const SOFTSKILL = [
  { id: "soft-0", skill: "Critical Thinking" },
  { id: "soft-1", skill: "Adaptability" },
  { id: "soft-2", skill: "Self-Reliant" },
  { id: "soft-3", skill: "Self-Motivation" },
  { id: "soft-4", skill: "Attention to details" },
  { id: "soft-5", skill: "Cooperative" },
];

function About(props) {
  const techSkillList = TECHSKILL.map((skill) => (
    <Badge pill bg="" className="my-1 me-1 about-skill" key={skill.id}>
      {skill.skill}
    </Badge>
  ));
  const softSkillList = SOFTSKILL.map((skill) => (
    <Badge pill bg="" className="my-1 me-1 about-skill" key={skill.id}>
      {skill.skill}
    </Badge>
  ));
  return (
    // <section>
    <Container fluid className="sub-container" id="about">
      <div className="ref">
        <div
          ref={(div) => {
            props.handleRef(div, 1);
          }}
        />
      </div>
      <Row xs={5}>
        <Col />
        <Col xs={7} className="px-5">
          <Reveal>
            <div className="heading-title mb-3">
              <div>
                About<span className="text-green">.</span>
              </div>
              <div className="line" />
            </div>
          </Reveal>
        </Col>
      </Row>
      <Row xs={5}>
        <Col />
        <Col xs={5} className="ps-5 about-content">
          <Reveal>
            <p>
              Hello! I'm Gershom, I'm a graduate as a Software Engineer at
              iAcademy. I specialize in backend, primarily Java, but love
              building software with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p>
              During breaks, my favorite pastime is solving puzzles from various
              video games. It really makes my brain think about multiple
              solutions and force myself to look in another perspective if the
              current solution doesn't work.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Recently I've been attending some Game Jam so that I can learn new
              stuff while preserving my knowledge, I'm happy that I can transfer
              the things that I learned from college from the game jam.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I'm actively looking for a job where I can grow as a developer and
              be able to use my skills. If you have a position open that I might
              be able to demonstrate my skills, let's connect.
            </p>
          </Reveal>
          <Reveal>
            <div>
              <span className="text-green about-footer">
                <p>
                  My links{" "}
                  <img className="about-link-arrow" alt="" src={arrow} />
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Fireryred"
                >
                  <img className="about-link" alt="" src={github} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/gershom-gruta"
                >
                  <img className="about-link" alt="" src={linkedin} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/Abbyssof"
                >
                  <img className="about-link" alt="" src={facebook} />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://x.com/GershomGruta"
                >
                  <img className="about-link" alt="" src={twitter} />
                </a>
              </span>
            </div>
          </Reveal>
        </Col>
        <Col>
          <Reveal>
            <p className="about-skill-title">Tech Skills</p>
          </Reveal>
          <Reveal>{techSkillList}</Reveal>
          <Reveal>
            <p className="about-skill-title pt-5">Soft Skills</p>
          </Reveal>
          <Reveal>{softSkillList}</Reveal>
        </Col>
      </Row>
    </Container>
    // </section>
  );
}

export default About;
