import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Details = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Details
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <img className="w-50" src={props.product.image} alt="" />
            <Modal.Title>{props.product.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.product.description}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">OK</Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Details;
