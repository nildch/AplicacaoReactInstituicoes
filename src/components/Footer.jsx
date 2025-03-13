import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Instituições de Ensino</h5>
            <p>© 2025 Instituições de Ensino. Todos os direitos reservados.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>
              <a href="/privacy" className="text-white text-decoration-none">
                Política de Privacidade
              </a>{" "}
              |{" "}
              <a href="/terms" className="text-white text-decoration-none">
                Termos de Uso
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
