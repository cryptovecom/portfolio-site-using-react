import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">Michel Iseneld</Link>
        <nav>
          <ul>
            <li>
              <Link to="/photo">👁️</Link>
            </li>
            <li>
              <Link to="/music">👂</Link>
            </li>
          </ul>
        </nav>
        <nav className="hover-menu">
          <h2>🗺️</h2>
          <ul>
            <li>
              <Link to="/photo">Photo</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/words">Words</Link>
            </li>
            <li>
              <Link to="/about">Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
