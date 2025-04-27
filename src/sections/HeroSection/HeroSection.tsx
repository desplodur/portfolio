import React from "react";

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection;
