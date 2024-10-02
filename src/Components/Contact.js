function Contact() {
  return (
    <section>
      <Container fluid className="sub-container" id="contact">
        <div className="ref">
          <div
            ref={(div) => {
              props.handleRef(div, 0);
            }}
          />
        </div>
        <Row xs={5}>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
