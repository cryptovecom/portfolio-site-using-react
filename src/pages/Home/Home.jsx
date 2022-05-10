import { Link } from "react-router-dom";
// import Section from "../../components/Section/Section";

export default function Home(props) {
  const linkList = props.linkList.map((object, i) => {
    object.id = i;
    return object;
  });

  return (
    <>
      <main>
        {/* <Section /> */}
        <section className="photo-1">
          <h2>
            Creative generalist exploring consciousness through art and
            technology.
          </h2>
        </section>
        <section className="respond">
          <section className="banner"></section>
          <section className="link-list">
            <ul>
              <li>
                <Link to="/streaming" className={`landing-list school-project`}>
                  <h2>A useless mern project</h2>
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
                <Link
                  to="/photography"
                  className={`landing-list school-project`}
                >
                  <h2>Photography</h2>
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
        <section className="photo-5">
          <h2>I am currently studying frontend development at Hyper Island.</h2>
        </section>
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
        <section className="photo-3"></section>
        <section>
          <div className="info">
            <h2>This site is under construction 🚧</h2>
          </div>
        </section>
      </main>
    </>
  );
}
