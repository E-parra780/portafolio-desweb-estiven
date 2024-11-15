import React from "react";
import "../styles/project.css";

const projectsData = [
  { title: "Calculadora", description: "Calculadora cienetífica", link: "#" },
  {
    title: "Programa facturación",
    description:
      "solución sencilla para facilitar la facturación en establecimientos comerciales",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section style={{ padding: "50px 20px" }}>
      <h2>Proyectos</h2>
      <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
        {projectsData.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} style={{ color: "#007bff" }}>
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
