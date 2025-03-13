import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const InstitutionFormModal = ({ show, handleClose, institution, handleSave }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (institution) {
     
      setName(institution.name);
      setAddress(institution.address);
    } else {
    
      setName("");
      setAddress("");
    }
  }, [institution]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(name, address);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{institution ? "Editar Instituição" : "Adicionar Instituição"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="institutionName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="institutionAddress">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {institution ? "Salvar Alterações" : "Adicionar"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InstitutionFormModal;
