import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Photography(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <section className="main-2">
          <div className="info">
            <h2>More photos coming soon 🚧</h2>
          </div>
        </section>
        <Section image={1} />
        <Section image={2} />
        <Section image={3} />
        <Section image={4} />
      </main>
    </>
  );
}
