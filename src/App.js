import React, { useState } from "react";
import Header from "./components/header/Header";
import Corpo from "./components/Corpo/Corpo";
import "./app.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div id="app">
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Corpo darkMode={darkMode} />
    </div>
  );
};

export default App;
