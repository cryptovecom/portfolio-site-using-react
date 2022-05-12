import { Link } from "react-router-dom";

//COMPONENTS
import Banner from "../../components/Banner";
import ProgressBar from "../../components/ProgressBar";
import Section from "../../components/Section/Section";

export default function Home(props) {
  const linkList = props.linkList.map((object, i) => {
    object.id = i;
    return object;
  });

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
              <li>
                <Link to="/streaming" className={`landing-list school-project`}>
                  <h2>Code</h2>
                  <div style={{ marginLeft: "1rem" }}>
                    <img
                      src="./images/icons/express.png"
                      alt="Express Icon"
                      className="tech-icon"
                    />
                    <img
                      src="./images/icons/node.png"
                      alt="Node Icon"
                      className="tech-icon"
                    />

                    <img
                      src="./images/icons/mongodb.png"
                      alt="MongoDB Icon"
                      className="tech-icon"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/music" className={`landing-list school-project`}>
                  <h2>Hear</h2>
                </Link>
              </li>
              <li>
                <Link
                  to="/photography"
                  className={`landing-list school-project`}
                >
                  <h2>See</h2>
                </Link>
              </li>
              {linkList.map((x) => (
                <li
                  className={`landing-list`}
                  key={x.id} // KEY PROP ADDED HERE!
                  style={{
                    backgroundImage: `url(./images/${x.img})`,
                  }}
                >
                  <a href={x.url} target="_blank" rel="noreferrer">
                    <h2>{x.title} </h2>{" "}
                    {x.class !== "none" && (
                      <img
                        src={`/images/icons/${x.class}.png`}
                        alt={`${x.title} Icon`}
                        className="tech-icon"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </section>
        <Section
          page="home"
          image="vsc"
          text="I am currently studying frontend development at Hyper Island."
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
                src="http://ghchart.rshah.org/iseneld"
                alt="My github contributions over the last year"
              />
            </a>
          </div>
        </section>
        <Section image="15" />
        <Banner text="This site is under construction 🚧" />
      </main>
    </>
  );
}
