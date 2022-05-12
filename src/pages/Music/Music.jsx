import { Link } from "react-router-dom";

// COMPONENTS
import Banner from "../../components/Banner";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Music(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section page="music" image="studio" text="Aural dreamweaving." />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <li>
              <a
                href="https://aethermechanics.bandcamp.com/"
                className={`landing-list school-project`}
                target="_blank"
                rel="noreferrer"
              >
                <h2>Aether Mechanics</h2>
              </a>
            </li>
            <li>
              <a
                href="https://tomerecords.bandcamp.com/"
                className={`landing-list school-project`}
                target="_blank"
                rel="noreferrer"
              >
                <h2>Ntogn</h2>
              </a>
            </li>
            {/* <li>
              <a
                href="https://aedirecords.bandcamp.com/"
                className={`landing-list school-project`}
                target="_blank"
                rel="noreferrer"
              >
                <h2>Aedi Records</h2>
              </a>
            </li> */}
            <li>
              <a
                href="https://hypnus.bandcamp.com/"
                className={`landing-list school-project`}
                target="_blank"
                rel="noreferrer"
              >
                <h2>Hypnus Records</h2>
              </a>
            </li>
            {/* <li>
              <a
                href="https://kabalion.bandcamp.com/"
                className={`landing-list school-project`}
                target="_blank"
                rel="noreferrer"
              >
                <h2>Kabalion Records</h2>
              </a>
            </li> */}
          </ul>
        </section>
        <Section page="music" image="ntogn" />
        <Section page="music" image="hypnus" />
        <Section page="music" image="aethermechanics" />
        <Banner text="Under construction 🚧" />
      </main>
    </>
  );
}
