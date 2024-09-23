import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BBImg from "../../Images/Projects/BantayBayan.jpg";

function Project(props) {
  const setProjects = () => {
    let projects = [];
    for (let index = 0; index < props.length; index + 2) {
      projects.push(
        <Row xs={5} data-bs-theme="dark">
          <Col />
          <Col className="ps-5 project-card">
            <Card>
              <Card.Img className="project-card-img" src="" />
            </Card>
          </Col>
        </Row>
      );
    }
  };
  console.log(props);
  return (
    <Row xs={5} data-bs-theme="dark">
      <Col />
      <Col className="ps-5 project-card">
        <Card>
          <Card.Img className="project-card-img" src={BBImg} />
        </Card>
        <div className="project-container ">
          <div className="project-title fs-5">
            <div>BantayBayan</div>
            <div className="line" />
            <div>2017</div>
          </div>
          <div className="text-green project-language">
            Java JSP - MYSql - Bootstrap4 - MailAPI
          </div>
          <div className="project-content">
            A Management Information System, it connects civilians and village
            official digitally, aiding in submitting and receiving issues within
            the community.
          </div>
        </div>
      </Col>
      <Col className="pe-5 project-card">
        <Card>
          <Card.Img src={BBImg}></Card.Img>
          <Card.Title></Card.Title>
          <Card.Subtitle></Card.Subtitle>
          <Card.Text></Card.Text>
        </Card>
      </Col>
    </Row>
  );
}

export default Project;
