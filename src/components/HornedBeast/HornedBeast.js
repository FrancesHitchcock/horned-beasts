import { useState } from "react";

import "../../reset.css";
import "./HornedBeast.css";

export default function HornedBeast({ title, url, description }) {
  const [likes, setLikes] = useState(0);

  function handleImageClick() {
    setLikes(likes + 1);
  }

  return (
    <div className="horned-beast-container">
      <h2 className="beast-name">{title}</h2>
      <img
        className="beast-image"
        src={url}
        alt={title}
        title={title}
        onClick={handleImageClick}
      />
      <h4>
        <span className="likes">❤️</span> {likes}
      </h4>
      <p className="beast-description">{description}</p>
    </div>
  );
}
