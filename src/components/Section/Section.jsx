export default function Section({ page = "photo", image, text, height }) {
  return (
    <section
      className={`photo-section`}
      style={{
        backgroundImage: `url(/images/${page}/${image}.jpg)`,
        minHeight: `${height}vh`,
      }}
    >
      {text && <h2>{text}</h2>}
    </section>
  );
}
