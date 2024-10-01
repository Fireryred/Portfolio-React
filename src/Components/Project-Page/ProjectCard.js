import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import github from "../../Images/SVG/github.svg";
import image from "../../Images/SVG/image.svg";
import ProjectModal from "./ProjectModal";

function ProjectCard(props) {
  const [project, setProject] = useState(Object);
  const [showProject, setShowProject] = useState(false);

  const handleCloseProject = () => setShowProject(false);
  const handleShowProject = (project) => {
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
    let sourceCodeLink1 = projectProp1.links.source_code;
    let galleryLink1 = projectProp1.links.gallery;
    projects.push(
      <Row xs={5} data-bs-theme="dark" className="project-row">
        <Col />
        <Col className="ps-5 pe-3 project-card">
          <Card onClick={() => handleShowProject(projectProp)}>
            <Card.Img className="project-card-img" src={projectProp.image} />
          </Card>
          <div className="project-container ">
            <div className="project-title">
              <div>{projectProp.name}</div>
              <div className="line" />
              <div>
                {sourceCodeLink === "" ? (
                  <Button variant="link" className="disabled">
                    <img src={github} />
                  </Button>
                ) : (
                  <Button variant="link" target="_blank" href={sourceCodeLink}>
                    <img src={github} />
                  </Button>
                )}
                {galleryLink === "" ? (
                  <Button variant="link" className="disabled">
                    <img src={image} />
                  </Button>
                ) : (
                  <Button variant="link" target="_blank" href={galleryLink}>
                    <img src={image} />
                  </Button>
                )}
              </div>
            </div>
            <div className="text-green project-language">
              {projectProp.language}
            </div>
            <div className="project-content">
              {projectProp.description}
              <span
                onClick={() => handleShowProject(projectProp)}
                className="text-green project-more"
              >
                &nbsp;Learn More &gt;
              </span>
            </div>
          </div>
        </Col>

        <Col className="ps-3 pe-5 project-card">
          <Card onClick={() => handleShowProject(projectProp1)}>
            <Card.Img className="project-card-img" src={projectProp1.image} />
          </Card>
          <div className="project-container ">
            <div className="project-title">
              <div>{projectProp1.name}</div>
              <div className="line" />
              <div>
                {sourceCodeLink1 === "" ? (
                  <Button variant="link" className="disabled">
                    <img src={github} />
                  </Button>
                ) : (
                  <Button variant="link" target="_blank" href={sourceCodeLink1}>
                    <img src={github} />
                  </Button>
                )}
                {galleryLink1 === "" ? (
                  <Button variant="link" className="disabled">
                    <img src={image} />
                  </Button>
                ) : (
                  <Button variant="link" target="_blank" href={galleryLink1}>
                    <img src={image} />
                  </Button>
                )}
              </div>
            </div>
            <div className="text-green project-language">
              {projectProp1.language}
            </div>
            <div className="project-content">
              {projectProp1.description}
              <span
                onClick={() => handleShowProject(projectProp1)}
                className="text-green project-more"
              >
                &nbsp;Learn More &gt;
              </span>
            </div>
          </div>
        </Col>
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
