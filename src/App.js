import React, { useRef, useState } from "react";
import Header from "./components/header/Header";
import Corpo from "./components/Corpo/Corpo";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Função para rolar para a seção
  const scrollToSection = (section) => {
    switch (section) {
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} scrollToSection={scrollToSection} />
      <Corpo aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} darkMode={darkMode} />
    </div>
  );
}

export default App;
