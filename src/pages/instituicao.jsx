import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import InstitutionFormModal from "../components/InstituicaoFormModal";
import { fetchInstitutions, addInstitution, updateInstitution, deleteInstitution } from "../service/api";

const InstitutionsPage = () => {
  const [institutions, setInstitutions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedInstitution, setSelectedInstitution] = useState(null);

  useEffect(() => {
    const loadInstitutions = async () => {
      const institutions = await fetchInstitutions();
      setInstitutions(institutions);
    };
    loadInstitutions();
  }, []);

  const handleAdd = () => {
    setSelectedInstitution(null);
    setShowModal(true);
  };

  const handleEdit = (institution) => {
    setSelectedInstitution(institution);
    setShowModal(true);
  };

  const handleSave = async (name, address) => {
    if (selectedInstitution) {
      await updateInstitution(selectedInstitution.id, name, address);
    } else {
      await addInstitution(name, address);
    }

    const institutions = await fetchInstitutions();
    setInstitutions(institutions);
    setShowModal(false);
  };

  const handleDelete = async (id) => {
    await deleteInstitution(id);
    const institutions = await fetchInstitutions();
    setInstitutions(institutions);
  };

  return (
    <Container className="institutions-content mt-4">
      <h2>Instituições de Ensino</h2>
      <Button variant="success" onClick={handleAdd} style={{ marginBottom: '10px' }}>
        Adicionar Instituição
      </Button>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {institutions.map((inst) => (
            <tr key={inst.id}>
              <td>{inst.name}</td>
              <td>{inst.address}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(inst)} style={{ marginRight: '10px' }}>
                  Editar
                </Button>
                <Button variant="danger" onClick={() => handleDelete(inst.id)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <InstitutionFormModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        institution={selectedInstitution}
        handleSave={handleSave}
      />

      
    
      <footer>
        <p></p>
      </footer>
    </Container>

    
  );
};

export default InstitutionsPage;
