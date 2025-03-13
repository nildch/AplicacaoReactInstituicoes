import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Header";
import Home from "./pages/Home";
import Institutions from "./pages/instituicao";
import Footer from "./components/Footer"; 
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institutions" element={<Institutions />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;