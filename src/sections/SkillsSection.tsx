import React from "react";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-heading">Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>SQL</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;