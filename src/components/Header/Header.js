import "../../reset.css";
import "./Header.css";

export default function Header({ toggleDarkMode }) {
  return (
    <header>
      <div className="header-container">
        <h1 onClick={toggleDarkMode}>Beautiful Horned Beasts</h1>
      </div>
    </header>
  );
}
