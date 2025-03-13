import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

function PresentationCards() {
  return (
    <Container className="mt-4">
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="/image/card1.png" alt="Instituição de Excelência" />
            <Card.Body>
              <Card.Title>Instituição de Excelência</Card.Title>
              <Card.Text>
                Descubra uma educação de alta qualidade e um ambiente inspirador.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="/image/card2.jpg" alt="Ambiente Inovador" />
            <Card.Body>
              <Card.Title>Ambiente Inovador</Card.Title>
              <Card.Text>
                Tecnologia e inovação transformando a experiência de aprendizado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow">
            <Card.Img variant="top" src="/image/card3.jpg" alt="Professores Qualificados" />
            <Card.Body>
              <Card.Title>Professores Qualificados</Card.Title>
              <Card.Text>
                Nossa equipe de educadores é dedicada e altamente qualificada.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PresentationCards;