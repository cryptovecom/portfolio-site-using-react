import { Link } from "react-router-dom";

export default function NavLink({ text, url, to }) {
  if (url) {
    return (
      <li>
        <a href={url} target="_blank" rel="noreferrer">
          <h2>{text}</h2>
          <span>{`>`}</span>
        </a>
      </li>
    );
  } else {
    return (
      <li>
        <Link to={to}>
          <h2>{text}</h2>
          <span>{`>`}</span>
        </Link>
      </li>
    );
  }
}
