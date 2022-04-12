import {Link} from 'react-router-dom';

const Nav = () => (
  <nav className="side">
      <ul>
        <Link to="/blog">Blog</Link>
        <li>Photography</li>
        <li>About</li>
      </ul>
  </nav>
);

export default Nav;
