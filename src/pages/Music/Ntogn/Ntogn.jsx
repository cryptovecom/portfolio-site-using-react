// COMPONENTS
import Banner from "../../../components/Banner";
import NavLink from "../../../components/NavLink";
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function Ntogn(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner text="Sonic spells and roaring dragons." />
        <Section page="music/ntogn" image="ntogn" text="" height={49} />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Bandcamp" url="https://tomerecords.bandcamp.com/" />
            <NavLink
              text="Discogs"
              url="https://www.discogs.com/artist/3641884-Ntogn"
            />
            <NavLink text="Soundcloud" url="https://soundcloud.com/ntogn" />
            <NavLink
              text="Youtube Music"
              url="https://music.youtube.com/channel/UCsoEC0nREkeuQOjqdyXSVFg?feature=share"
            />
          </ul>
        </nav>
        <Section page="music/ntogn" image="tome7" />

        <iframe
          className="bandcamp"
          title="aether"
          style={{ height: "274px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3021143014/size=large/bgcol=eee/linkcol=333333/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://tomerecords.bandcamp.com/album/smedjan">
            Smedjan by Ntogn
          </a>
        </iframe>
        <Banner text="Smedjan" />
        <Section page="music/ntogn" image="tome6" />
        <iframe
          className="bandcamp"
          title="aether"
          style={{ height: "307px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3208485433/size=large/bgcol=eee/linkcol=333333/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://tomerecords.bandcamp.com/album/utopia">
            Utopia by Ntogn
          </a>
        </iframe>
        <Banner text="Utopia" />
        <Section page="music/ntogn" image="tome5" />
        <iframe
          className="bandcamp"
          title="aether"
          style={{ height: "274px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3199338464/size=large/bgcol=eee/linkcol=333333/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://tomerecords.bandcamp.com/album/sathurnus-2">
            Sathurnus by Ntogn
          </a>
        </iframe>
        <Banner text="Sathurnus" />
        <Section page="music/ntogn" image="tome3" />
        <iframe
          className="bandcamp"
          title="aether"
          style={{ height: "274px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2164860030/size=large/bgcol=eee/linkcol=333333/artwork=small/transparent=true/"
          seamless
        >
          <a href="https://tomerecords.bandcamp.com/album/bestiary">
            Bestiary by Ntogn
          </a>
        </iframe>
        <Banner text="Bestiary" />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Go back" to="/music" />
          </ul>
        </nav>
      </main>
    </>
  );
}
