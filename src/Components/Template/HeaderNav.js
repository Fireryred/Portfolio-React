import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function HeaderNav() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container className="fluid">
        <Navbar.Brand href="./">Home</Navbar.Brand>
        <Nav className="justify-content-right">
          <Nav.Link href="./">Works</Nav.Link>
          <Nav.Link href="./">About</Nav.Link>
          <Nav.Link href="./">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
