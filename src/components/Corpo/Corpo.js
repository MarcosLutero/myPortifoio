import React from "react";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import "./Corpo.css"; // Certifique-se de que o CSS está sendo importado corretamente

export default function Corpo({ darkMode }) {
  return (
    <div className={`corpo ${darkMode ? "dark-mode" : "light-mode"}`}>
        <About />
        <Projects />
        <Contact />
      </div>
  );
}
