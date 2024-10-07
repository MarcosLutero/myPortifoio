import React, { useRef } from "react";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import "./Corpo.css";

export default function Corpo({ darkMode }) {
  const contactRef = useRef(null);

  return (
    <div className={`corpo ${darkMode ? "dark-mode" : "light-mode"}`}>
      <About contactRef={contactRef} />
      <Projects />
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}
