import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function HeaderNav() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container className="fluid">
        <Nav
          variant="underline"
          defaultActiveKey="./"
          className="justify-content-left"
        >
          <Nav.Item>
            <Nav.Link href="./">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-right">
          <Button variant="outline-success" href="./">
            Resume
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
