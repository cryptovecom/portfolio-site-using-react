import React, { useEffect, useState } from "react";
import * as config from "../config";
import Header from "./Header";
import Footer from "./Footer";

// BLOG FUNCTION

function httpPost(e) {
  // e.preventDefault();
  let databody = {
    artist: "Michel",
    title: "Track Title POST",
    url: `${config.CLIENT_BASE_URL}/audio/audio.mp3`,
  };

  fetch(`${config.API_BASE_URL}/streaming-api/tracks`, {
    method: "POST",
    body: JSON.stringify(databody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function httpDelete(e) {
  // // e.preventDefault();
  // let databody = {
  //   artist: "Michel",
  //   title: "Track Title POST",
  //   url: `${config.CLIENT_BASE_URL}/audio/audio.mp3`,
  // };

  fetch(`${config.API_BASE_URL}/streaming-api/tracks/Michel`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

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
            <aside></aside>
            <ul className="streaming__results">
              {tracks &&
                tracks.map((x) => {
                  return (
                    <li key={x._id + "x"}>
                      <button className="button-play">
                        {x.artist} - {x.title}
                        <audio controls>
                          <source src={x.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </button>
                      <button
                        className="button-do button-del"
                        onClick={httpDelete}
                      >
                        🗑️
                      </button>
                    </li>
                  );
                })}
            </ul>
          </section>
          <section className="streaming__main">
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
                  <button onClick={httpPost}>Add content</button>
                </li>
              </ul>
            </div>
            <ul className="streaming__results">
              {tracks &&
                tracks.map((x) => {
                  return (
                    <li key={x._id}>
                      <button className="button-play">
                        {x.artist} - {x.title}
                        <audio controls>
                          <source src={x.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </button>
                      <button className="button-do button-fav">❤️</button>
                    </li>
                  );
                })}
            </ul>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Streaming;
