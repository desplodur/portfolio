import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of your project and technologies used.</p>
          <div className="project-links">
            <a href="#" className="project-link">
              Live Demo
            </a>
            <a href="#" className="project-link">
              Source Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of your project and technologies used.</p>
          <div className="project-links">
            <a href="#" className="project-link">
              Live Demo
            </a>
            <a href="#" className="project-link">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
