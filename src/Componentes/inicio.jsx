import React from "react";
import { motion } from "framer-motion"; // Importamos Framer Motion para animaciones
import fotoEstiven from "./foto-estiven-portafolio.JPG";

import "../styles/hero.css";

const Hero = () => {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Bienvenido internauta, soy Estiven parra
      </motion.h1>
      <motion.p
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Soy desarrollador de software y este, es mi portafolio
      </motion.p>
      <motion.img
        src={fotoEstiven}
        alt="FotoEstiven"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
};

export default Hero;
