import React from "react";
import Header from "../Componentes/header";
import Footer from "../Componentes/footer";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div style={{ textAlign: "center", padding: "100px 20px" }}>
        <h1>Página no encontrada</h1>
        <p>Lo siento, la página que buscas no existe.</p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
