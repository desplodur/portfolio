import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import WorkSection from "./sections/WorkSection";
import SectionIndicator from "./components/SectionIndicator";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

const sections = ["hero", "work", "about", "contact"];

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
        threshold: 0.5,
      }
    );

    const elements: HTMLElement[] = [];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
        elements.push(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const moveDot = (e: MouseEvent) => {
      const app = document.querySelector(".app");
      if (app) {
        (app as HTMLElement).style.setProperty("--cursor-x", `${e.clientX}px`);
        (app as HTMLElement).style.setProperty("--cursor-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  return (
    <Router>
      <div className="app">
        <LanguageSwitcher />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SectionIndicator
                  sections={sections}
                  activeSection={activeSection}
                />
                <HeroSection />
                <WorkSection />
                <AboutSection />
                <ContactSection />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
