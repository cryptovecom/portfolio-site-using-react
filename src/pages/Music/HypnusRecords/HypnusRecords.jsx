// COMPONENTS
import NavLink from "../../../components/NavLink";
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function HypnusRecords(props) {
  return (
    <>
      <ProgressBar />
      <main>
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
        <Section page="music" image="hypnus-basel" />
        <section>
          <div className="info">
            <h2>Under construction 🚧</h2>
          </div>
        </section>
      </main>
    </>
  );
}
