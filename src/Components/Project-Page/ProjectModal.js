import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import image from "../../Images/SVG/image.svg";
import github from "../../Images/SVG/github.svg";

function ProjectModal(props) {
  const projectProp = props.project;
  const sourceCodeLink = projectProp.links.source_code;
  const galleryLink = projectProp.links.gallery;

  const fullDesc = projectProp.full_description.map((sentence) => (
    <p className="modal-project-description">{sentence}</p>
  ));

  return (
    <Modal
      data-bs-theme="dark"
      show={props.show}
      onHide={props.handleClose}
      className="modal-pop"
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
        {fullDesc}
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
