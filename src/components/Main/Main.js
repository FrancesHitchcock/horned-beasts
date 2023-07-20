import "../../reset.css";
import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";

export default function Main({ data, handleImageClick, numOfHorns }) {
  const filteredData = numOfHorns
    ? data.filter((item) => item.horns === parseInt(numOfHorns))
    : [...data];

  const beastsCards = filteredData.map((item) => {
    return (
      <HornedBeast
        key={item._id}
        beast={item}
        handleImageClick={handleImageClick}
      />
    );
  });

  return (
    <main>
      <div className="main-container">{beastsCards}</div>
    </main>
  );
}
