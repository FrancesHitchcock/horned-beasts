import "../../reset.css";
import "./Main.css";

import data from "../../data/data.json";

import HornedBeast from "../HornedBeast/HornedBeast";

export default function Main() {
  const beastsCards = data.map((item) => {
    return (
      <HornedBeast
        key={item._id}
        url={item.image_url}
        title={item.title}
        description={item.description}
        keyword={item.keyword}
        horns={item.horns}
      />
    );
  });

  return (
    <main>
      <div className="main-container">{beastsCards}</div>
    </main>
  );
}
