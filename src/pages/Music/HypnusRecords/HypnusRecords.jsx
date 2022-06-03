// COMPONENTS
import Banner from "../../../components/Banner";
import NavLink from "../../../components/NavLink";
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function HypnusRecords(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner text="Psychedelic deep techno record label." />
        <Section page="music/hypnusrecords" image="tejp" text="" height={39} />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Bandcamp" url="https://hypnus.bandcamp.com/" />
            <NavLink
              text="Discogs"
              url="https://www.discogs.com/label/640495-Hypnus-Records"
            />
            <NavLink
              text="Instagram"
              url="https://www.instagram.com/hypnusrecords/"
            />
            <NavLink text="Soundcloud" url="https://soundcloud.com/hypnus" />
            <NavLink
              text="Youtube Music"
              url="https://music.youtube.com/playlist?list=PLkgFfDkt471UKw84HV0EKW-_W0FLPRsaZ&feature=share"
            />
          </ul>
        </nav>
        <Section page="music" image="hypnus-basel" height={79} />
        <Banner text="Releasing every full moon since 2013." />
        <iframe
          className="youtube"
          src="https://www.youtube.com/embed/videoseries?list=PLkgFfDkt471UKw84HV0EKW-_W0FLPRsaZ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Banner
          text="This page is under construction 🚧"
          stylez={{ backgroundColor: "var(--color-yellow)" }}
        />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="The Memoir" blob="PODCAST" to="/music/thememoir" />
            <NavLink text="Go back" to="/music" />
          </ul>
        </nav>
      </main>
    </>
  );
}
