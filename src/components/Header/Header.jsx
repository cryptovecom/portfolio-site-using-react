import { Link } from "react-router-dom";
import ProgressBar from '../ProgressBar';

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">Michel Iseneld</Link>
        <nav>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
