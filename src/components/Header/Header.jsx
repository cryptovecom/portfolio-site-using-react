import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">Michel Iseneld</Link>
        <nav>
          <ul>
            <li>
              <Link to="/about">🦄</Link>
            </li>
          </ul>
        </nav>
        <nav className="hover-menu">
          <Link to="/">ᚨ</Link>
          <ul>
            <li>
              <Link to="/about">🧙</Link>
            </li>
            <li>
              <Link to="/photo">👁️</Link>
            </li>
            <li>
              <Link to="/music">👂</Link>
            </li>

            {/* <li>
              <Link to="/words">📓</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
