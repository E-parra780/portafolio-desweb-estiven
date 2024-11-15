import React, { useState } from "react";
import "../styles/about.css";

const About = () => {
  const [description, setDescription] = useState(
    "Soy un desarrollador de software, me gustan los retos y aprender cosas nuevas a diario, abierto a explorar y desarrollar aplicaciones que te inspiren."
  );

  return (
    <section>
      <h2>Acerca de mí</h2>
      <p>{description}</p>
      <button
        onClick={() =>
          setDescription(
            "Me apasionan las nuevas tecnologías, el trabajo en equipo y la eficacia a la hora de desarrolar, adentrate conmigo en el mundo mágico de la programación "
          )
        }
      >
        Más
      </button>
    </section>
  );
};

export default About;
