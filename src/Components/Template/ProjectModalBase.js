function ProjectModalBase() {
  return (
    <Modal
      data-bs-theme="dark"
      show={props.show}
      onHide={props.handleClose}
      dialogClassName="project-modal"
      centered={true}
    >
      <Modal.Header className="p-0">
        <img src={BantayBayanImage} className="mx-auto w-100" />
      </Modal.Header>
      <Modal.Body className="text-light">
        <p className="modal-project-title">BantayBayan</p>
        <p className="text-green modal-project-language">
          Java JSP - MYSql - Bootstrap4 - MailAPI
        </p>
        <p className="modal-project-description">
          BantayBayan is a Management Information System for civilians and
          government official, it aims to ease the communication between them.
          Built with a team of seven highschool students.
          <br /> <br />
          The website provides the goverment a centralized repositories of
          public concern as it lessens the needs to classify reports thus
          helping their service, it also will help the civilians to know that
          their concerns will be able to reach the relevant authorities.
          <br /> <br />
          The aim of this website is to reinforce the Global Goal no.16 which is
          peace, justice and storng trust, to achive this we build a website
          which establish a strong foundation of trust between the government
          and it's citizen.
          <br /> <br />
          The main task I did in this mini-thesis is to develop the website, we
          decided to use Java EE as the base and bootstrap for the UI, as for
          the database we used a local one, MySQLite as our website is not
          handling that much data. We added an automated mail response once the
          concern is resolve. We also added a simple authentication in this
          website.
        </p>
        <div className="modal-project-footer">
          <p>
            Project Links<span className="text-green">.</span>
          </p>
          <div>
            <Button
              variant="link"
              target="_blank"
              className="text-green modal-link disabled"
            >
              <img className="filter-green" src={github} />
              source code
            </Button>
            <Button
              variant="link"
              target="_blank"
              className="text-green modal-link"
              href="https://fireryred.github.io/Portfolio/Pages/work/bantaybayan.html"
            >
              <img className="filter-green" src={image} />
              image gallery
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectModalBase;
