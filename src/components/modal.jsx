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
                    <h2> Info about {props.name}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={props.image} alt={props.name} />
                    <div className="mx-3">
                        <h2>
                            <b>{props.name}</b>
                        </h2>
                        <h4>Origin name: {props.origin.name}</h4>
                        <p>Gender: {props.gender}</p>
                        <p>Status: {props.status}</p>
                        <p>Species: {props.species}</p>
                        <p className={props.type === "" ? "d-none" : ""}>
                            Type: {props.type}
                        </p>
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
