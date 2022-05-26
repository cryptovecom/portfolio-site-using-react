// COMPONENTS
import Banner from "../../../components/Banner";
import NavLink from "../../../components/NavLink";
import ProgressBar from "../../../components/ProgressBar";
import Section from "../../../components/Section";

export default function TheMemoir(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Banner text="The Memoir is an autobiographical podcast series where I invite electronic music creators to record a journey through their own music." />
        <Section page="music/thememoir" image="2020" text="" height={49} />
        <nav className="link-list">
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
        </nav>
        <section>
          <div className="info">
            <h2>
              Artworks by{" "}
              <a
                href="https://www.instagram.com/nieidda/"
                target="_blank"
                rel="noreferrer"
              >
                Gabriella Holmström
              </a>
              .
            </h2>
          </div>
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
