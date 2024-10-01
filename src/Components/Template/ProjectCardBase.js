import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCardBase() {
  return (
    <>
      <ProjectModal show={showProject} handleClose={handleCloseProject} />
      <Row xs={5} data-bs-theme="dark">
        <Col />
        <Col className="ps-5 project-card">
          <Card className="project-btn" onClick={handleShowProject}>
            <Card.Img className="project-card-img" src={BBImg} />
          </Card>
          <div className="project-container ">
            <div className="project-title">
              <div>BantayBayan</div>
              <div className="line" />
              <div>
                <Button variant="link" target="_blank" className="disabled">
                  <img src={github} />
                </Button>
                <Button
                  variant="link"
                  target="_blank"
                  href="https://fireryred.github.io/Portfolio/Pages/work/bantaybayan.html"
                >
                  <img src={image} />
                </Button>
              </div>
            </div>
            <div className="text-green project-language">
              Java JSP - MYSql - Bootstrap4 - MailAPI
            </div>
            <div className="project-content">
              A Management Information System, it connects civilians and village
              official digitally, aiding in submitting and resolving issues
              within the community.
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ProjectCardBase;
