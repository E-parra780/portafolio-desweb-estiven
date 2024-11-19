import React from "react";
import Header from "../Componentes/header";
import About from "../Componentes/sobreMi";
import Footer from "../Componentes/footer";
import Game from "../Componentes/TriviaGame";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Game />
      <Footer />
    </div>
  );
};

export default AboutPage;
