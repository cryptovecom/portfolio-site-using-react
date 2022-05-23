// COMPONENTS
import NavLink from "../../components/NavLink";
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
          height={49}
        />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Aether Mechanics" to="/music/aethermechanics" />
            <NavLink text="Hypnus Records" to="/music/hypnusrecords" />
            <NavLink text="Ntogn" to="/music/ntogn" />
            <NavLink text="The Memoir" to="/music/thememoir" />
          </ul>
        </section>
        <Section page="music" image="modular-1" />
        <Section page="music" image="modular-2" />
        <Section page="music" image="books" />
        <Section page="music" image="studio-2" />
        <Section page="music" image="hypnus-bryssel" />
        <Section page="music" image="hypnus-monument" />
        <section>
          <div className="info">
            <h2>
              I teach sound design at{" "}
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
