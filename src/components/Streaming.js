import React, { useEffect, useState } from "react";
import * as config from "../config";
import Header from "./Header";
import Footer from "./Footer";

// BLOG FUNCTION

function Streaming() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/streaming-api/tracks`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setTracks(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
                  <li>
                    <button>Add content</button>
                  </li>
                </ul>
              </div>
              <ul className="resultList">
                {tracks &&
                  tracks.map((x) => {
                    return (
                      <li>
                        <button className="trackButton">{x.artist}</button>
                        <button className="favButton">❤️</button>
                      </li>
                    );
                  })}
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
