import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
                <li>
                  <h5>Favorite</h5>
                  <button>🗑️</button>
                </li>
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
            <section className="toolbar">
              <ul>
                <li>Register</li>
                <li>Log in</li>
                <li>Add content</li>
              </ul>
            </section>
            <section>
              <h1>Streaming</h1>
              <p>
                Great Media Group has decided to relaunch, the new focus is
                purely around what you choose to be invested in. No algorithms,
                no big data, just you and your favorite content.
              </p>
              <p>
                They require a new platform, and know that API first is the way
                to go when building something new and great as to support their
                web, mobile and beyond.
              </p>
              <ul className="indent">
                <li>New users should be able to register</li>
                <li>Admin users should be able to add new content</li>
                <li>User should be able to find content</li>
                <li>Users should be able to save content to a Favorite</li>
                <li>
                  The Favorite should be front and center throughout the entire
                  experience
                </li>
              </ul>
            </section>
            <section className="results">
              <h2>Search</h2>
              <ul>
                <li>
                  <h5>Result</h5>
                  <button>❤️</button>
                </li>
                <li>
                  <h5>Result</h5>
                  <button>❤️</button>
                </li>
                <li>
                  <h5>Result</h5>
                  <button>❤️</button>
                </li>
                <li>
                  <h5>Result</h5>
                  <button>❤️</button>
                </li>
                <li>
                  <h5>Result</h5>
                  <button>❤️</button>
                </li>
                <li>
                  <h5>Result</h5>
                  <button>❤️</button>
                </li>
                <li>
                  <h5>Result</h5>
                  <button>❤️</button>
                </li>
                <li>
                  <h5>Result</h5>
                  <button>❤️</button>
                </li>
                <li>
                  <h5>Result</h5>
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
