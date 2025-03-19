import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import InstitutionForm from "./InstitutionForm";

const InstitutionFormModal = ({ show, handleClose, institution, handleSave }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{institution ? "Editar Instituição" : "Adicionar Instituição"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InstitutionForm institution={institution} handleSave={handleSave} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InstitutionFormModal;
