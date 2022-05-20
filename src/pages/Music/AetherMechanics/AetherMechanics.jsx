// COMPONENTS
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function AetherMechanics(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section
          page="music"
          image="/aethermechanics/aether1"
          text="Aether Mechanics"
          height={59}
        />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <li>
              <a
                href="https://aethermechanics.bandcamp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Bandcamp</h2>
                <span>{`>`}</span>
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/aethermechanics"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Soundcloud</h2>
                <span>{`>`}</span>
              </a>
            </li>
            <li>
              <a
                href="https://music.youtube.com/channel/UCGvPehEP20Gq9VV7R_JXYtQ?feature=share"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Youtube Music</h2>
                <span>{`>`}</span>
              </a>
            </li>
          </ul>
        </section>
        <Section page="music" image="aethermechanics/aether3" />
        <section>
          <div className="info">
            <h2>Under construction 🚧</h2>
          </div>
        </section>
      </main>
    </>
  );
}
