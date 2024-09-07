import HeaderNav from "./Template/HeaderNav";
import FooterNav from "./Template/FooterNav";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <>
      <HeaderNav />
      <Container data-bs-theme="dark">
        <h1>Hey, I'm Gershom</h1>
        <h4>I'm a Software Engineer</h4>
      </Container>
      <FooterNav />
    </>
  );
}

export default Home;
