import "../../reset.css";
import "./Header.css";

export default function Header({ toggleDarkMode, handleHornsSelect }) {
  return (
    <header>
      <div className="header-container">
        <h1 onClick={toggleDarkMode}>Beautiful Horned Beasts</h1>
        <form>
          <label htmlFor="horns">Filter by number of horns</label>
          <select
            id="horns"
            name="horns"
            onChange={(e) => handleHornsSelect(e.target.value)}
          >
            <option value="">-- All beasts--</option>
            <option value="1">1 horn</option>
            <option value="2">2 horns</option>
            <option value="3">3 horns</option>
            <option value="100">100 horns</option>
          </select>
        </form>
      </div>
    </header>
  );
}
