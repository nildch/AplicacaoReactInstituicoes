import React from "react";
import { Carousel } from "react-bootstrap";

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/image/aluno.png"
          alt="Primeiro Slide"
        />
        <Carousel.Caption>
          <h3>Bem-vindo</h3>
          <p>Descubra nossas instituições de ensino.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/image/escola.jpg"
          alt="Segundo Slide"
        />
        <Carousel.Caption>
          <h3>Qualidade e Excelência</h3>
          <p>Oferecemos o melhor para os estudantes.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;