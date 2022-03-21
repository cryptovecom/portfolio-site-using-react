import React from "react";
import Header from "./Header";
import Goals from "./Goals";
import Footer from "./Footer";

function Main(props) {
  const linkList = props.linkList.map((object, i) => {
    object.id = i;
    return object;
  });

  return (
    <>
      <Header />
      <main>
        <section className="landing__top">
          <section className="landing__banner">
            <h1>This is my first school project using React.js</h1>
          </section>
          <section className="landing-list">
            <div className="michel"></div>
            <section>
              <h1>🔗</h1>
              <ul className="home-list">
                {linkList.map((x) => (
                  <li
                    className={`landing-list`}
                    key={x.id} // KEY PROP ADDED HERE!
                    style={{
                      backgroundImage: `url(./images/${x.img})`,
                    }}
                  >
                    <h2>
                      <a href={x.url} target="_blank" rel="noreferrer">
                        {x.title}{" "}
                      </a>
                    </h2>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
        <section className="landing__second">
          <div>
            <h2>I'm learning!</h2>
            <p>
              Below you see the progress I've made with the course goals at
              Hyper Island's{" "}
              <a
                href="https://www.hyperisland.com/programs-and-courses/frontend-developer"
                target="_blank"
                rel="noreferrer"
              >
                frontend developer program
              </a>
              .
            </p>
            <p>
              <span className="passed">Passed</span>{" "}
              <span className="wip">Learning</span>{" "}
              <span className="future">Soon</span>
            </p>
          </div>
        </section>
        <Goals />
        <section className="landing__second">
          <div>
            <h2>🚧 Under Construction 🚧</h2>
            <p>Moar coming! Idk wat 2 put, butt it prolly b gr8.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
