import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    // Observe all sections
    const sections = ["hero", "about", "skills", "projects", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="app">
      <div className="section-indicator">
        <a
          href="#hero"
          className={`indicator-dot ${
            activeSection === "hero" ? "active" : ""
          }`}
        />
        <a
          href="#about"
          className={`indicator-dot ${
            activeSection === "about" ? "active" : ""
          }`}
        />
        <a
          href="#skills"
          className={`indicator-dot ${
            activeSection === "skills" ? "active" : ""
          }`}
        />
        <a
          href="#projects"
          className={`indicator-dot ${
            activeSection === "projects" ? "active" : ""
          }`}
        />
        <a
          href="#contact"
          className={`indicator-dot ${
            activeSection === "contact" ? "active" : ""
          }`}
        />
      </div>

      <section id="hero" className="section">
        <h2 className="section-heading">Hero</h2>
        <div className="hero-content">
          <h1>
            Hi, I'm <span className="highlight">Your Name</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p className="hero-description">
            I build exceptional digital experiences with modern technologies.
          </p>
          <button className="cta-button">View My Work</button>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-heading">About</h2>
        <div className="about-content">
          <p>
            I'm a passionate developer with expertise in building web
            applications. With a strong foundation in both frontend and backend
            technologies, I create efficient, scalable, and user-friendly
            solutions.
          </p>
        </div>
      </section>

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

      <section id="contact" className="section">
        <h2 className="section-heading">Contact</h2>
        <div className="contact-content">
          <p>I'm always open to new opportunities and collaborations.</p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              Email
            </a>
            <a href="https://github.com/yourusername" className="contact-link">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
