import { Link } from "react-router-dom";
import Nav from '../components/Nav';

function Header() {
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
        <Nav />
      </header>
      
    </>
    
  );
}

export default Header;
