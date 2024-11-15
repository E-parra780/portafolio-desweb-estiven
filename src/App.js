import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importamos BrowserRouter, Routes y Route
import Home from "./pages/inicio"; // Importación sin la extensión .jsx
import AboutPage from "./pages/about"; // Importación sin la extensión .jsx
import ProjectsPage from "./pages/proyectos"; // Importación sin la extensión .jsx
import NotFound from "./pages/404"; // Importación sin la extensión .jsx

const App = () => {
  return (
    <Router>
      <div className="main-screen">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página de inicio */}
          <Route path="/about" element={<AboutPage />} />{" "}
          {/* Página sobre ti */}
          <Route path="/Proyectos" element={<ProjectsPage />} />{" "}
          {/* Página de proyectos */}
          <Route path="*" element={<NotFound />} /> {/* Ruta no encontrada */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
