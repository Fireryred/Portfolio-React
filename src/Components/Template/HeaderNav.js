import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function HeaderNav() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container className="fluid">
        <Navbar.Brand href="./">Home</Navbar.Brand>
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
