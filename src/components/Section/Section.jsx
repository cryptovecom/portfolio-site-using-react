export default function Section({ image, text }) {
  return (
    <section className={`photo-${image}`}>{text && <h2>{text}</h2>}</section>
  );
}
