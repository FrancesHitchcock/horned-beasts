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

  const [selectedObject, setSelectedObject] = useState(data[0]);

  function handleImageClick(id) {
    const newObject = data.filter((item) => item._id === id)[0];
    setSelectedObject({ ...newObject });
    setModalVisible(true);
  }

  function handleModalCloseClick() {
    setModalVisible(false);
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
      <Header toggleDarkMode={toggleDarkMode} />
      <Main data={data} handleImageClick={handleImageClick} />
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
