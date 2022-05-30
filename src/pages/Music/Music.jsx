// COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Music(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner text="I dabble with sound." />
        <Section page="music" image="/hypnusrecords/geonosis" height={59} />
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
        <Section page="music" image="studio-1" height={69} />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Aether Mechanics" to="/music/aethermechanics" />
            <NavLink text="Ntogn" to="/music/ntogn" />
          </ul>
        </nav>
        <Section page="music" image="/max4live/slink" height={59} />
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
        <Section page="music" image="modular-1" height={79} />
        <Banner text="Creativity as a way of life." />
        <Section page="music" image="modular-2" height={79} />
        <Banner text="Connecting." />
        <Section page="music" image="books" height={79} />
        <Banner text="Understanding." />
        <Section page="music" image="studio-2" height={79} />
        <Banner text="Recording." />
        <Section page="music" image="hypnus-bryssel" height={79} />
        <Banner text="Sharing." />
        <Section page="music" image="hypnus-monument" />
        <section>
          <div className="info">
            <h2>
              <a
                href="https://www.patreon.com/micheliseneld"
                target="_blank"
                rel="noreferrer"
              >
                Teaching
              </a>
              .
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
