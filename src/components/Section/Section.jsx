export default function Section({ page = "photo", image, text }) {
  return (
    <section
      className={`photo-section`}
      style={{ backgroundImage: `url(/images/${page}/${image}.jpg)` }}
    >
      {text && <h2>{text}</h2>}
    </section>
  );
}
