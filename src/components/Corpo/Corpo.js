import React from "react";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import "./Corpo.css";

export default function Corpo({ darkMode, aboutRef, projectsRef, contactRef }) {
  return (
    <div className={`corpo ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div ref={aboutRef}>
        <About contactRef={contactRef} />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
