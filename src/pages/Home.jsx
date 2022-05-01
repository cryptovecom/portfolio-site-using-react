import Goals from "../components/Goals";
import { Link } from "react-router-dom";

export default function Home(props) {
  const linkList = props.linkList.map((object, i) => {
    object.id = i;
    return object;
  });

  return (
    <>
      <main>
        <section className="photo-1">
          <h2>Creative generalist exploring consciousness through art and technology.</h2>
        </section>
        <section className="main-1 top">
          <section className="banner">
            <h2>I am currently studying frontend development at Hyper Island.</h2>
          </section>
          <section className="link-list">
            <section>
              <ul className="home-list">
                <li
                  style={{
                    background: `#af3333`,
                  }}
                >
                  <Link
                    to="/streaming"
                    className={`landing-list school-project`}
                  >
                    <h2>Data Interaction</h2>

                    <div>
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
        </section>
        <section className="photo-2">
        </section>
        <section className="main-2">
          <div>
            <h2>I'm learning!</h2>
            <br />
            <p>
              <img
                src="./images/icons/html5.png"
                alt="HTML5 Icon"
                className="tech-icon"
              />
              <img
                src="./images/icons/css3.png"
                alt="CSS3 Icon"
                className="tech-icon"
              />
              <img
                src="./images/icons/sass.png"
                alt="Sass Icon"
                className="tech-icon"
              />
              <img
                src="./images/icons/js.png"
                alt="Javascript Icon"
                className="tech-icon"
              />
              <img
                src="./images/icons/react.png"
                alt="React.js Icon"
                className="tech-icon"
              />
              <img
                src="./images/icons/node.png"
                alt="Node.js Icon"
                className="tech-icon"
              />
              <img
                src="./images/icons/express.png"
                alt="Express Icon"
                className="tech-icon"
              />
              <img
                src="./images/icons/mongodb.png"
                alt="MongoDB Icon"
                className="tech-icon"
              />
            </p>
            <p>
              Below you see the progress I've made with my course goalz.
            </p>
            <p>
              <span className="passed">Passed</span>{" "}
              <span className="wip">Learning</span>{" "}
              <span className="future">Future</span>
            </p>
          </div>
        </section>
        <Goals />
        <section className="photo-3">
        </section>
        <section className="main-2">
          <div>
            <h2>🚧 Under Construction 🚧</h2>
            <p>Moar coming! Idk wat 2 put, butt it prolly b gr8.</p>
          </div>
        </section>
      </main>
    </>
  );
}
