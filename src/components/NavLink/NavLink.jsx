import { Link } from "react-router-dom";

export default function NavLink({ text, url, to, blob }) {
  if (url) {
    return (
      <li>
        <a href={url} target="_blank" rel="noreferrer">
          <h2>{text}</h2>
          <span>{`>`}</span>
        </a>
      </li>
    );
  } else if (blob && to) {
    return (
      <li>
        <Link to={to}>
          <div>
            <h2>{text}</h2>
            <span>{blob}</span>
          </div>
          <span>{`>`}</span>
        </Link>
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
