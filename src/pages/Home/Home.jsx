//COMPONENTS
import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section";

export default function Home(props) {
  return (
    <>
      <ProgressBar />
      <main>
        <Section image="1" text="Creative generalist entrepreneur." />
        <section className="respond">
          <section className="banner"></section>
          <nav className="link-list">
            <ul>
              <NavLink text="Code" to="/streaming" />
              <NavLink text="Sound" to="/music" />
              <NavLink text="Photography" to="/photo" />
              <NavLink text="Thoughts" to="/words" />
              <NavLink text="About me" to="/about" />
            </ul>
          </nav>
        </section>
        <Section
          page="home"
          image="vsc"
          text="I am currently studying frontend development at Hyper Island."
          height={54}
        />
        <section>
          <div className="info">
            <a
              className="github-contributions"
              href="https://github.com/iseneld"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://ghchart.rshah.org/iseneld"
                alt="My github contributions over the last year"
              />
            </a>
          </div>
        </section>
        {/* <Banner text="Fail fast." /> */}
        <Section page="me" image="hand" height={79} />
        <Banner text="Pulling dreams into reality." />
        <Section page="me" image="meditate" height={79} />
        <Banner text="Mind." />
        <Section page="music" image="hd800s" height={79} />
        <Banner text="Ear." />
        <Section image="15" height={79} />
        <Banner text="&#38; Eye." />
      </main>
    </>
  );
}
