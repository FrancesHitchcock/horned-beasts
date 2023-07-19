import "../../reset.css";
import "./SelectedBeast.css";

export default function SelectedBeast({ selectedObject }) {
  return (
    <div className="selected-beast-container">
      <h1>{selectedObject.title}</h1>
    </div>
  );
}
