import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function HeaderNav() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container className="fluid">
        <Navbar.Brand href="./">Home</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
