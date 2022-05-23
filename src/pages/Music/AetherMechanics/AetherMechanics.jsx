// COMPONENTS
import NavLink from "../../../components/NavLink";
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
          text=""
          height={59}
        />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink
              text="Bandcamp"
              url="https://aethermechanics.bandcamp.com"
            />
            <NavLink
              text="Soundcloud"
              url="https://soundcloud.com/aethermechanics"
            />
            <NavLink
              text="Youtube Music"
              url="https://music.youtube.com/channel/UCGvPehEP20Gq9VV7R_JXYtQ?feature=share"
            />
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
