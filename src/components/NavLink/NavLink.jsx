export default function NavLink({ text, url }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <h2>{text}</h2>
        <span>{`>`}</span>
      </a>
    </li>
  );
}
