import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modals.css";

function Modals({ show, onHide, src }) {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">project</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_body">
          <img src={src} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
