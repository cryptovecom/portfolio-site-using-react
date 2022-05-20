import { Link } from "react-router-dom";

// COMPONENTS
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Music(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section
          page="music"
          image="studio-1"
          text="Aural dreamweaving."
          height={59}
        />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <li>
              <Link to="/music/aethermechanics">
                <h2>Aether Mechanics</h2>
                <span>{`>`}</span>
              </Link>
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
                href="https://soundcloud.com/hypnus-memoirs"
                target="_blank"
                rel="noreferrer"
              >
                <h2>The Memoir</h2>
                <span>{`>`}</span>
              </a>
            </li>
          </ul>
        </section>
        <Section page="music" image="modular-1" />
        <Section page="music" image="modular-2" />
        <Section page="music" image="books" />
        <Section page="music" image="studio-2" />
        <Section page="music" image="hypnus-basel" />
        <Section page="music" image="hypnus-bryssel" />
        <Section page="music" image="hypnus-monument" />
        <section>
          <div className="info">
            <h2>
              I'll teach you sound design at{" "}
              <a
                href="https://www.patreon.com/micheliseneld"
                target="_blank"
                rel="noreferrer"
              >
                Patreon
              </a>{" "}
              🎛️
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
