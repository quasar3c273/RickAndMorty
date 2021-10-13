import React from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalCharacter = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Info about {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={props.image} alt={props.name} />
                    <div className="mx-3">
                        <p>
                            <b>{props.name}</b>
                        </p>
                        <p>Gender: {props.gender}</p>
                        <p>Status: {props.status}</p>
                        <p>Race: {props.species}</p>
                        <p>Last known location: {props.location.name}</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalCharacter;
