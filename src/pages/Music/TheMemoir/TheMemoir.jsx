// COMPONENTS
import NavLink from "../../../components/NavLink";
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function TheMemoir(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section page="music/thememoir" image="2020" text="" height={69} />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink
              text="Soundcloud"
              url="https://soundcloud.com/hypnus-memoirs"
            />
            <NavLink
              text="Youtube"
              url="https://youtube.com/playlist?list=PLkgFfDkt471WvjPNrswaGkfvKf2MwwRVO"
            />
          </ul>
        </section>
        <Section page="music/thememoir" image="2020-b" />
        <section>
          <div className="info">
            <h2>Under construction 🚧</h2>
          </div>
        </section>
      </main>
    </>
  );
}
