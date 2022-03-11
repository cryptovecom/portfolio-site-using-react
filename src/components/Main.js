import React from "react";
import Header from "./Header";
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
              <ul>
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
            <h2>🚧 Under Construction 🚧</h2>
            <p>Building publicly to get some fire under my butt</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
