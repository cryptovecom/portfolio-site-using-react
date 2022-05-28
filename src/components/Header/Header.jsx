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

            <li>
              <Link to="/words">🧠</Link>
            </li>
            <li>
              <Link to="/streaming">🤖</Link>
            </li>
            {/* <li><Link to="/log"> </Link></li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
