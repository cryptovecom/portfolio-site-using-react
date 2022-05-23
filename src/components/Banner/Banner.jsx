export default function Banner({ text }) {
  return (
    <section>
      <div className="info">{text && <h2>{text}</h2>}</div>
    </section>
  );
}
