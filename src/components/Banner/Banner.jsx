export default function Banner({ text, stylez }) {
  return (
    <section>
      <div className="info" style={stylez}>
        {text && <h2>{text}</h2>}
      </div>
    </section>
  );
}
