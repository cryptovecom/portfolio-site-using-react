import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Michel Iseneld</Link>
      <nav>
        <ul>
          <li>
            <Link to="/streaming" className="streaming-link">
              *
            </Link>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
