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
          text="A creative generalist exploring consciousness through art and technology."
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
        <Section
          page="home"
          image="vsc"
          text="I am currently studying frontend development at Hyper Island."
          height={54}
        />
        {/* <Banner text="Fail fast." /> */}
        <Section page="me" image="hand" height={79} />
        <Banner text="Imagination is reality." />
        <Section image="15" height={79} />
        <Banner text="It's nurtured by the eye." />
        <Section page="music" image="hd800s" height={79} />
        <Banner text="Ear." />
        <Section page="me" image="meditate" height={79} />
        <Banner text="Growing in our minds." />
        <Section page="music" image="hypnusrecords/zodiac" height={79} />
        <Banner text="Manifested by creativity." />
        <Section page="music" image="books-2" height={79} />
        <section className="respond">
          <section className="banner"></section>
          <nav className="link-list">
            <ul>
              <NavLink text="Code" to="/streaming" />
              <NavLink text="Sound" to="/music" />
              <NavLink text="Light" to="/photo" />
              <NavLink text="Mind" to="/words" />
            </ul>
          </nav>
        </section>
        <nav className="link-list" style={{ borderTop: "1rem solid black" }}>
          <ul>
            <NavLink text="About me" to="/about" />
          </ul>
        </nav>
      </main>
    </>
  );
}
