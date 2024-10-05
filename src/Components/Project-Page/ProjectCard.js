import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import github from "../../Images/SVG/github.svg";
import image from "../../Images/SVG/image.svg";
import ProjectModal from "./ProjectModal";
import Reveal from "../Animation/Reveal";
import RevealCard from "../Animation/RevealCard";

function ProjectCard(props) {
  const [project, setProject] = useState(Object);
  const [showProject, setShowProject] = useState(false);

  const mainBodyRef = props.mainRef;

  const handleCloseProject = () => {
    mainBodyRef.current.classList.remove("modal-blur");
    setShowProject(false);
  };

  const handleShowProject = (project) => {
    mainBodyRef.current.classList.add("modal-blur");
    setProject(project);
    setShowProject(true);
  };

  const isObjectEmpty = (objectName) => {
    for (let prop in objectName) {
      if (objectName.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };

  let projects = [];

  for (let index = 0; index <= props.length - 1; index += 2) {
    let projectProp = props.projects[index];
    let sourceCodeLink = projectProp.links.source_code;
    let galleryLink = projectProp.links.gallery;

    let projectProp1 = props.projects[index + 1];
    let sourceCodeLink1 = "";
    let galleryLink1 = "";
    if (!isObjectEmpty(projectProp1)) {
      sourceCodeLink1 = projectProp1.links.source_code;
      galleryLink1 = projectProp1.links.gallery;
    }

    projects.push(
      <Row xs={5} data-bs-theme="dark" className="project-row">
        <Col />
        <Col className="ps-5 pe-3 project-card" key={index}>
          <RevealCard>
            <Card
              className="project-card-container"
              onClick={() => handleShowProject(projectProp)}
            >
              <Card.Img className="project-card-img" src={projectProp.image} />
            </Card>
          </RevealCard>
          <div className="project-container">
            <Reveal hasLine={true}>
              <div className="project-title">
                <div>{projectProp.name}</div>
                <div className="line" />
                <div>
                  {sourceCodeLink === "" ? (
                    <Button variant="link" className="disabled">
                      <img src={github} alt="" />
                    </Button>
                  ) : (
                    <Button
                      variant="link"
                      target="_blank"
                      href={sourceCodeLink}
                    >
                      <img src={github} alt="" />
                    </Button>
                  )}
                  {galleryLink === "" ? (
                    <Button variant="link" className="disabled">
                      <img src={image} alt="" />
                    </Button>
                  ) : (
                    <Button variant="link" target="_blank" href={galleryLink}>
                      <img src={image} alt="" />
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="text-green project-language">
                {projectProp.language}
              </div>
            </Reveal>
            <Reveal>
              <div className="project-content">
                {projectProp.description}
                <span
                  onClick={() => handleShowProject(projectProp)}
                  className="text-green project-more"
                >
                  Learn More &gt;
                </span>
              </div>
            </Reveal>
          </div>
        </Col>

        {!isObjectEmpty(projectProp1) ? (
          <Col className="ps-3 pe-5 project-card" key={index + 1}>
            <RevealCard>
              <Card
                className="project-card-container"
                onClick={() => handleShowProject(projectProp1)}
              >
                <Card.Img
                  className="project-card-img"
                  src={projectProp1.image}
                />
              </Card>
            </RevealCard>

            <div className="project-container ">
              <Reveal>
                <div className="project-title">
                  <div>{projectProp1.name}</div>
                  <div className="line" />
                  <div>
                    {sourceCodeLink1 === "" ? (
                      <Button variant="link" className="disabled">
                        <img src={github} alt="" />
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        target="_blank"
                        href={sourceCodeLink1}
                      >
                        <img src={github} alt="" />
                      </Button>
                    )}
                    {galleryLink1 === "" ? (
                      <Button variant="link" className="disabled">
                        <img src={image} alt="" />
                      </Button>
                    ) : (
                      <Button
                        variant="link"
                        target="_blank"
                        href={galleryLink1}
                      >
                        <img src={image} alt="" />
                      </Button>
                    )}
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div className="text-green project-language">
                  {projectProp1.language}
                </div>
              </Reveal>
              <Reveal>
                <div className="project-content">
                  {projectProp1.description}
                  <span
                    onClick={() => handleShowProject(projectProp1)}
                    className="text-green project-more"
                  >
                    Learn More &gt;
                  </span>
                </div>
              </Reveal>
            </div>
          </Col>
        ) : (
          ""
        )}
      </Row>
    );
  }
  return (
    <>
      {projects}
      {isObjectEmpty(project) ? (
        ""
      ) : (
        <ProjectModal
          project={project}
          show={showProject}
          handleClose={handleCloseProject}
        />
      )}
    </>
  );
}

export default ProjectCard;
