// COMPONENTS
import Banner from "../../../components/Banner";
import NavLink from "../../../components/NavLink";
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function AetherMechanics(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner text="A musical space opera." />
        <Section
          page="music"
          image="/aethermechanics/aether1"
          text=""
          height={49}
        />
        <nav className="link-list">
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
        </nav>
        <Section page="music" image="aethermechanics/aether3" />
        <Banner text="Made by modular." />
        <Section page="music" image="modular-3" height={79} />
        <Banner text="Mechanical field recordings." />
        <Section page="music" image="studio-2" height={79} />
        <section>
          <div className="info">
            <h2>Under construction 🚧</h2>
          </div>
        </section>
      </main>
    </>
  );
}
