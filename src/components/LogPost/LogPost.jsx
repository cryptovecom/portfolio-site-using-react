export default function LogPost({ text, date }) {
  return (
    <article className="log">
      <p>{text}</p>
      <h6>{date}</h6>
    </article>
  );
}
