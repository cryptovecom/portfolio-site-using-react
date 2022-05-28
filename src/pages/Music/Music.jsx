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
          image="/hypnusrecords/geonosis"
          text="Curated."
          height={59}
        />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink
              text="Hypnus Records"
              blob="RECORD LABEL"
              to="/music/hypnusrecords"
            />
            <NavLink text="The Memoir" blob="PODCAST" to="/music/thememoir" />
          </ul>
        </nav>
        <Section page="music" image="studio-1" text="Created." height={59} />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Aether Mechanics" to="/music/aethermechanics" />
            <NavLink text="Ntogn" to="/music/ntogn" />
          </ul>
        </nav>
        <Section
          page="music"
          image="/max4live/slink"
          text="Designed."
          height={49}
        />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink
              text="Calculus"
              url="https://hypnusrecords.com/shop/p/calculus"
              blob="PLUG-IN"
            />
            <NavLink
              text="Slink"
              url="https://www.ableton.com/en/packs/slink-devices/"
              blob="PLUG-IN"
            />
            <NavLink
              text="The Spellbook"
              url="https://hypnusrecords.com/shop/p/spellbook"
              blob="PLUG-IN"
            />
          </ul>
        </nav>
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
