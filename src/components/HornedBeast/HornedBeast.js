import { useState } from "react";

import "../../reset.css";
import "./HornedBeast.css";

export default function HornedBeast({ beast, handleImageClick }) {
  const [likes, setLikes] = useState(0);

  function handleLikesClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="horned-beast-container">
      <h2 className="beast-name">{beast.title}</h2>
      <img
        className="beast-image"
        src={beast.image_url}
        alt={beast.title}
        title={beast.title}
        onClick={() => handleImageClick(beast)}
      />
      <h4>
        <span className="likes" onClick={handleLikesClick}>
          ❤️
        </span>{" "}
        {likes}
      </h4>
      {/* <p className="beast-description">{description}</p> */}
    </div>
  );
}
