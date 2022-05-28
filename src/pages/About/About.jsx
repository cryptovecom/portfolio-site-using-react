// COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import Section from "../../components/Section";

export default function Me(props) {
  return (
    <>
      <main>
        <Section page="me" image="odin" text="" height={79} />
        <Banner text="This page is under construction 🚧" />
        <Section page="me" image="ljus" height={79} />
        <Banner
          text="Find me here:"
          stylez={{
            backgroundColor: "var(--color-blood)",
            color: "var(--color-white)",
          }}
        />
        <nav className="link-list">
          <ul style={{ borderTop: "1rem solid var(--color-dark)" }}>
            <NavLink text="Archidekt" url="https://archidekt.com/user/130955" />
            <NavLink
              text="Facebook"
              url="https://www.facebook.com/micheliseneld/"
            />
            <NavLink text="Github" url="https://github.com/iseneld" />
            <NavLink
              text="Goodreads"
              url="https://www.goodreads.com/user/show/15854773-michel-iseneld"
            />
            <NavLink
              text="Instagram"
              url="https://www.instagram.com/micheliseneld/"
            />
            <NavLink
              text="Linkedin"
              url="https://www.linkedin.com/in/micheliseneld/"
            />
            <NavLink
              text="Modulargrid"
              url="https://www.modulargrid.net/e/users/view/157916"
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
        </nav>
        <Banner
          text=" #FFB532 💖"
          stylez={{
            backgroundColor: "var(--color-yellow)",
          }}
        />
      </main>
    </>
  );
}
