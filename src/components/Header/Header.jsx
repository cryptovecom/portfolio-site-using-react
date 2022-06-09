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
          <Link to="/">🏠</Link>
          <ul>
            <li>
              <Link to="/music">Ear</Link>
            </li>
            <li>
              <Link to="/photo">Eye</Link>
            </li>
            <li>
              <Link to="/words">Mind</Link>
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
