import { useState } from "react";

import "./reset.css";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";

import data from "./data/data.json";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const [selectedObject, setSelectedObject] = useState({});

  const [numOfHorns, setNumOfHorns] = useState("");

  function handleHornsSelect(val) {
    setNumOfHorns(val);
  }

  function handleImageClick(beast) {
    setSelectedObject(beast);
    setModalVisible(true);
  }

  function handleModalCloseClick() {
    setModalVisible(false);
    setSelectedObject({});
  }

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
      <Header
        toggleDarkMode={toggleDarkMode}
        handleHornsSelect={handleHornsSelect}
      />
      <Main
        data={data}
        handleImageClick={handleImageClick}
        numOfHorns={numOfHorns}
      />
      <Footer />
      {modalVisible && (
        <SelectedBeast
          selectedObject={selectedObject}
          handleModalCloseClick={handleModalCloseClick}
        />
      )}
    </div>
  );
}

export default App;
