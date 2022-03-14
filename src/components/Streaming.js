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
              </ul>
            </section>
          </section>
          <section className="streaming__main">
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
              <ul>
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
            <section>
              <h2>Register</h2>
              <h2>Log in</h2>
            </section>
            <section>
              <h2>Add Content</h2>
            </section>
            <section>
              <h2>Search Content</h2>
              <h3>List of results</h3>
              <h3>Add to favorites</h3>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Streaming;
