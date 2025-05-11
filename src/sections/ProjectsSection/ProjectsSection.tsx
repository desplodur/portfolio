import React from "react";
import data from "../../content/data.json";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        {data.projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.links.live} className="project-link">
                Live Demo
              </a>
              <a href={project.links.source} className="project-link">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
