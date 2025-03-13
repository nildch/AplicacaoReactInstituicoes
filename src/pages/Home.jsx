import React from "react";
import CarouselComponent from "../components/Carousell";
import PresentationCards from "../components/Cards";

function Home() {
  return (
    <div>
      <h2 className="text-center mt-4">Bem-vindo ao Censo Escolar</h2>
      <CarouselComponent />
      <PresentationCards />
    </div>
  );
}

export default Home;