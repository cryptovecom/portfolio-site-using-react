import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// BLOG FUNCTION

function Streaming() {
  return (
    <>
      <Header />
      <main>
        <section className="landing__top">
          <section className="streaming__banner">
            <section></section>
            <section>
              <ul>
                <li>
                  <button className="favButton">Favourite</button>
                  <button className="delButton">🗑️</button>
                </li>
                <li>
                  <button className="favButton">Favourite</button>
                  <button className="delButton">🗑️</button>
                </li>
              </ul>
            </section>
          </section>
          <section className="streaming__main">
            <section className="results">
              <div className="toolbar">
                <input
                  type="text"
                  placeholder="Search.."
                  className="searchBar"
                ></input>
                <ul>
                  <li>Register</li>
                  <li>Log in</li>
                  <li>Add content</li>
                </ul>
              </div>
              <ul className="resultList">
                <li>
                  <button className="trackButton">Result</button>
                  <button className="favButton">❤️</button>
                </li>
                <li>
                  <button className="trackButton">Result</button>
                  <button className="favButton">❤️</button>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Streaming;
