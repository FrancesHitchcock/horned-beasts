import "../../reset.css";
import "./HornedBeast.css";

export default function HornedBeast({ title, url, description }) {
  return (
    <div className="horned-beast-container">
      <h2 className="beast-name">{title}</h2>
      <img className="beast-image" src={url} alt={title} title={title} />
      <p className="beast-description">{description}</p>
    </div>
  );
}
