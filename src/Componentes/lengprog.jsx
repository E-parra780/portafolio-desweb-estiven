import { motion } from "framer-motion"; // Importamos Framer Motion para animaciones
import imgprogra from "./lengprog.png";

const imgprog = () => {
  return (
    <section>
      <motion.img
        src={imgprogra}
        alt="fotoimgprogra"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
};

export default imgprog;
