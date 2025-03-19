import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const InstitutionForm = ({ institution, handleSave }) => {
  return (
    <Formik
      initialValues={{
        name: institution ? institution.name : "",
        address: institution ? institution.address : "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Nome da instituição é obrigatório";
        }
        if (!values.address) {
          errors.address = "Endereço é obrigatório";
        }
        return errors;
      }}
      onSubmit={(values) => {
        handleSave(values.name, values.address);
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Nome da Instituição:</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Digite o nome da instituição"
          />
          <ErrorMessage name="name" component="div" className="text-danger" />
        </div>

        <div>
          <label htmlFor="address">Endereço:</label>
          <Field
            type="text"
            id="address"
            name="address"
            placeholder="Digite o endereço da instituição"
          />
          <ErrorMessage name="address" component="div" className="text-danger" />
        </div>

        <button type="submit">Salvar</button>
      </Form>
    </Formik>
  );
};

export default InstitutionForm;
