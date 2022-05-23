// COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Me(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section page="me" image="meditate" text="" height={79} />
        <Banner text="This is my face." />
        <Section page="me" image="ljus" />
        <Banner text="Find me here:" />
        <section className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Github" url="https://github.com/iseneld" />
            <NavLink
              text="Instagram"
              url="https://www.instagram.com/micheliseneld/"
            />
            <NavLink
              text="Linkedin"
              url="https://www.linkedin.com/in/micheliseneld/"
            />
            <NavLink
              text="Patreon"
              url="https://www.patreon.com/micheliseneld"
            />
            <NavLink text="Twitter" url="https://twitter.com/micheliseneld" />
            <NavLink
              text="Untappd"
              url="https://untappd.com/user/Enteogenisk"
            />
            <NavLink
              text="Vivino"
              url="https://www.vivino.com/users/micheliseneld"
            />
          </ul>
        </section>
        <section>
          <div className="info">
            <h2>This page is under construction 🚧</h2>
          </div>
        </section>
      </main>
    </>
  );
}
