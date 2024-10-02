import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import image from "../../Images/SVG/image.svg";
import github from "../../Images/SVG/github.svg";

function ProjectModal(props) {
  const projectProp = props.project;
  const sourceCodeLink = projectProp.links.source_code;
  const galleryLink = projectProp.links.gallery;
  const placeholder = (
    <>
      <p className="modal-project-description">
        mollit ex tempor cillum est laborum incididunt enim pariatur consequat
        occaecat eiusmod deserunt eu velit sint commodo occaecat qui esse
      </p>
      <p className="modal-project-description">
        commodo quis ea est aliquip ad excepteur excepteur excepteur aute mollit
        do do ullamco sunt voluptate excepteur duis occaecat exercitation esse
        occaecat sunt elit minim voluptate adipisicing ea cillum ex
      </p>
      <p className="modal-project-description">
        reprehenderit labore aute mollit aute aliquip adipisicing aute pariatur
        qui eu tempor ipsum ipsum enim deserunt nostrud commodo incididunt ex
        fugiat sint in fugiat est anim mollit ipsum mollit in do amet proident
        aliqua magna et cupidatat irure laboris sunt
      </p>
    </>
  );
  console.log(projectProp);

  const isObjectEmpty = (objectName) => {
    for (let prop in objectName) {
      if (objectName.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };

  const fullDesc = projectProp.full_description.map((sentence) => (
    <p className="modal-project-description">{sentence}</p>
  ));

  return (
    <Modal
      data-bs-theme="dark"
      show={props.show}
      onHide={props.handleClose}
      dialogClassName="modal-project"
      centered={true}
    >
      <Modal.Header className="p-0">
        <img
          src={projectProp.image}
          alt={`${projectProp.name}`}
          className="mx-auto w-100"
        />
      </Modal.Header>
      <Modal.Body className="text-light">
        <p className="modal-project-title">{projectProp.name}</p>
        <p className="text-green modal-project-language">
          {projectProp.language}
        </p>
        {isObjectEmpty(projectProp.full_description) ? placeholder : fullDesc}
        <div className="modal-project-footer">
          <p>
            Project Links<span className="text-green">.</span>
          </p>
          <div>
            {sourceCodeLink === "" ? (
              <Button variant="link" className="text-green modal-link disabled">
                <img className="filter-green" alt="" src={github} />
                source code
              </Button>
            ) : (
              <Button
                variant="link"
                target="_blank"
                href={sourceCodeLink}
                className="text-green modal-link"
              >
                <img className="filter-green" alt="" src={github} />
                source code
              </Button>
            )}
            {galleryLink === "" ? (
              <Button variant="link" className="text-green modal-link disabled">
                <img className="filter-green" alt="" src={image} />
                image gallery
              </Button>
            ) : (
              <Button
                variant="link"
                target="_blank"
                href={galleryLink}
                className="text-green modal-link"
              >
                <img className="filter-green" alt="" src={image} />
                image gallery
              </Button>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectModal;
