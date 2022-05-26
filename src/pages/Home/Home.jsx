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
          text="Creative generalist exploring consciousness through are and technology."
        />
        <section className="respond">
          <section className="banner"></section>
          <nav className="link-list">
            <ul>
              <NavLink text="Code" to="/streaming" />
              <NavLink text="Sound" to="/music" />
              <NavLink text="Sight" to="/photo" />
              <NavLink text="Thought" to="/words" />
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
        <Banner text="Dreams are real." />
        <Section image="15" height={79} />
        <Banner text=" Nurtured by the eye." />
        <Section page="music" image="hd800s" height={79} />
        <Banner text="Ear." />
        <Section page="me" image="meditate" height={79} />
        <Banner text="Synthesized in the mind." />
        <Section page="music" image="hypnusrecords/zodiac" height={79} />
        <Banner text="Then we create." />
        <Section page="music" image="books-2" height={79} />
        <nav className="link-list" style={{ borderTop: "1rem solid black" }}>
          <ul>
            <NavLink text="About me" to="/about" />
          </ul>
        </nav>
      </main>
    </>
  );
}
