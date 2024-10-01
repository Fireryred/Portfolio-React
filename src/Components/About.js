import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <Badge pill bg="dark" className="my-1 me-1 about-skill" key={skill.id}>
      {skill.skill}
    </Badge>
  ));
  const softSkillList = SOFTSKILL.map((skill) => (
    <Badge pill bg="dark" className="my-1 me-1 about-skill" key={skill.id}>
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
          <div className="heading-title mb-3">
            <div>
              About<span className="text-green">.</span>
            </div>
            <div className="line" />
          </div>
        </Col>
      </Row>
      <Row xs={5}>
        <Col />
        <Col xs={5} className="ps-5 about-content">
          <p>
            Hello! I'm Gershom, I'm a graduate as a Software Engineer at
            iAcademy. I specialize in backend, primarily Java, but love building
            software with whatever tools are right for the job.
          </p>
          <p>
            During breaks, my favorite pastime is solving puzzles from various
            video games. It really makes my brain think about multiple solutions
            and force myself to look in another perspective if the current
            solution doesn't work.
          </p>
          <p>
            Recently I've been attending some Game Jam so that I can learn new
            stuff while preserving my knowledge, I'm happy that I can transfer
            the things that I learned from college from the game jam.
          </p>
          <p>
            I'm actively looking for a job where I can grow as a developer and
            be able to use my skills. If you have a position open that I might
            be able to demonstrate my skills, let's connect.
          </p>
          <Button variant="success">Contact me</Button>
        </Col>
        <Col>
          <p className="about-skill-title">Tech Skills</p>
          {techSkillList}
          <p className="about-skill-title pt-5">Soft Skills</p>
          {softSkillList}
        </Col>
      </Row>
    </Container>
    // </section>
  );
}

export default About;
