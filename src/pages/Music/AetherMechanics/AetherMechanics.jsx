// COMPONENTS
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function AetherMechanics(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section page="music" image="studio-1" text="Bajs." height={59} />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <li>
              <a
                href="https://aethermechanics.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Aether Mechanics</h2>
                <span>{`>`}</span>
              </a>
            </li>
            <li>
              <a
                href="https://tomerecords.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Ntogn</h2>
                <span>{`>`}</span>
              </a>
            </li>
            <li>
              <a
                href="https://hypnus.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Hypnus Records</h2>
                <span>{`>`}</span>
              </a>
            </li>
          </ul>
        </section>
        <Section page="music" image="modular-1" />
        <section>
          <div className="info">
            <h2>Under construction..</h2>
          </div>
        </section>
      </main>
    </>
  );
}
