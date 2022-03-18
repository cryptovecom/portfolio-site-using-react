import React, { useEffect, useState } from "react";
import * as config from "../config";
import Header from "./Header";
import Footer from "./Footer";

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

  function httpPost() {
    let databody = {
      artist: "Posted",
      title: "With HTTP",
      url: `${config.CLIENT_BASE_URL}/audio/audio.mp3`,
      fav: false,
    };

    // let addTrack = (databody) => {
    //   setTracks((state) => [databody, ...state]);
    // };

    // addTrack();

    fetch(`${config.API_BASE_URL}/streaming-api/tracks`, {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function httpFav(id, favState) {
    console.log(`Favourite: ` + id);

    let databody = {
      fav: true,
    };

    favState === "unfav" ? (databody.fav = false) : (databody.fav = true);

    let mappedArray = tracks.map(idMap);

    function idMap(x) {
      console.log(x);
      if (x._id === id) {
        console.log(`FOUND IT!`);
        console.log(`Before: ` + x.fav);
        x.fav = !x.fav;
        console.log(`After: ` + x.fav);
      }
    }

    console.log(mappedArray);

    // setTracks(mappedArray);

    fetch(`${config.API_BASE_URL}/streaming-api/tracks/${id}`, {
      method: "PATCH",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function httpDelete(id) {
    console.log(`Delete: ` + id);

    let filteredArray = tracks.filter(idFilterer);

    function idFilterer(x) {
      return x._id !== id;
    }

    setTracks(filteredArray);

    fetch(`${config.API_BASE_URL}/streaming-api/tracks/${id}`, {
      method: "DELETE",
    });
  }

  function testSend(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
      <Header />
      <main>
        <section className="landing__top">
          <section className="streaming__banner">
            <aside></aside>
            <ul className="streaming__results">
              {tracks.map((x) => {
                if (x.fav) {
                  return (
                    <li key={x._id + "x"}>
                      <button className="button-play">
                        {x._id}
                        <audio controls>
                          <source src={x.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </button>
                      <button
                        className="button-do button-fav"
                        onClick={() => httpFav(x._id, "unfav", setTracks)}
                      >
                        ❤️
                      </button>
                    </li>
                  );
                } else return;
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
                  <button onClick={() => httpPost()}>Add content</button>
                </li>
              </ul>
              <form className="admin-panel" onSubmit={testSend}>
                <input
                  id="trackArtist"
                  type="text"
                  placeholder="Artist name.."
                  className="searchBar"
                ></input>
                <input
                  id="trackTitle"
                  type="text"
                  placeholder="Track title.."
                  className="searchBar"
                ></input>
                <input
                  id="trackURL"
                  type="text"
                  placeholder="MP3 URL.."
                  className="searchBar"
                ></input>
                <input type="submit"></input>
              </form>
            </div>
            <ul className="streaming__results">
              {tracks.map((x) => {
                return (
                  <li key={x._id}>
                    <button
                      className={`${x.fav ? "fav-green" : ""} button-play`}
                    >
                      {x._id}
                      <audio controls>
                        <source src={x.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </button>
                    <button
                      className="button-do button-fav"
                      onClick={() => httpFav(x._id)}
                    >
                      ❤️
                    </button>
                    <button
                      className="button-do button-del"
                      onClick={() => httpDelete(x._id)}
                    >
                      🗑️
                    </button>
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
