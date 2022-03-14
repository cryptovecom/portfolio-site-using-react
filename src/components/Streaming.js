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
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
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
                  <div>
                    <button>▶️</button>
                    <h5>Result</h5>
                  </div>
                  <button>❤️</button>
                </li>
                <li>
                  <div>
                    <button>▶️</button>
                    <h5>Result</h5>
                  </div>
                  <button>❤️</button>
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
