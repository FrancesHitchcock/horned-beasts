import { useState } from "react";

import "./reset.css";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  return (
    <div className="wrapper">
      <Header toggleDarkMode={toggleDarkMode} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
