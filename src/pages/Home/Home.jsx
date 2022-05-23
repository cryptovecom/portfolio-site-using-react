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
        <Section
          image="1"
          text="Creative generalist exploring consciousness through art and
            technology."
        />
        <section className="respond">
          <section className="banner"></section>
          <section className="link-list">
            <ul>
              <NavLink text="Code" to="/streaming" />
              <NavLink text="Music" to="/music" />
              <NavLink text="Photo" to="/photo" />
              <NavLink text="Words" to="/words" />
            </ul>
          </section>
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
        <Banner text="Fail fast." />
        <Section image="15" />
        <Banner text="This site is under construction 🚧" />
      </main>
    </>
  );
}
