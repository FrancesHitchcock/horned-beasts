import "../../reset.css";
import "./SelectedBeast.css";

export default function SelectedBeast({
  selectedObject,
  handleModalCloseClick,
}) {
  return (
    <div className="selected-beast-modal">
      <div className="selected-beast-container">
        <div className="close-modal-container">
          <span className="close-modal-icon" onClick={handleModalCloseClick}>
            X
          </span>
        </div>

        <h2 className="selected-beast-name">{selectedObject.title}</h2>
        <img
          className="selected-beast-image"
          src={selectedObject.image_url}
          alt={selectedObject.title}
          title={selectedObject.title}
        />
        <p className="selected-beast-description">
          {selectedObject.description}
        </p>
      </div>
    </div>
  );
}
