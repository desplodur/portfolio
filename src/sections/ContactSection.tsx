import React from "react";

const ContactSection: React.FC = () => {
  return (
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
  );
};

export default ContactSection;