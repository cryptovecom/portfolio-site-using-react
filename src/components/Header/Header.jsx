import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">Michel Iseneld</Link>
        <nav>
          <ul>
            <li>
              <Link to="/log">Log</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
