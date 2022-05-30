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
        <Banner text="A techno space opera." />
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
        <Section page="music" image="modular-3" height={79} />
        <Banner text="Made by modular." />
        <Section page="music" image="studio-2" height={79} />
        <Banner text="Industrial field recordings." />
        <Section page="music" image="aethermechanics/norrbacka-1" height={69} />
        <Section page="music" image="aethermechanics/norrbacka-3" height={69} />
        <Section page="music" image="aethermechanics/norrbacka-2" height={69} />
        <Section page="music" image="aethermechanics/aether3" />
        <iframe
          className="bandcamp"
          title="vaccine"
          style={{ height: "410px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3377475822/size=large/bgcol=ffffff/linkcol=e99708/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://aethermechanics.bandcamp.com/album/vaccine">
            Vaccine by Aether Mechanics
          </a>
        </iframe>
        <Banner text="Vaccine" />
        <Section page="music" image="aethermechanics/aether2" />
        <iframe
          className="bandcamp"
          title="magnetic"
          style={{ height: "410px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=631192131/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://aethermechanics.bandcamp.com/album/magnetic-meditation-devices">
            Magnetic Meditation Devices by Aether Mechanics
          </a>
        </iframe>
        <Banner text="Magnetic Meditation Devices" />
        <Section page="music" image="aethermechanics/aether1" />
        <iframe
          className="bandcamp"
          title="aether"
          style={{ height: "410px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=1102521977/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://aethermechanics.bandcamp.com/album/aether-mechanics">
            Aether Mechanics by Aether Mechanics
          </a>
        </iframe>
        <Banner text="Aether Mechanics, self-titled album." />

        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Go back" to="/music" />
          </ul>
        </nav>
      </main>
    </>
  );
}
