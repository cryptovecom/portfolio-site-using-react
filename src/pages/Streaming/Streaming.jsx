import { useEffect, useState } from "react";
import * as config from "../../config";

// COMPONENTS
import Banner from "../../components/Banner";
import ProgressBar from "../../components/ProgressBar";

export default function Streaming() {
  const [favs, setFavs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState({
    id: null,
    playing: false,
  });
  const [search, setSearch] = useState([]);
  const [sort, setSort] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [user, setUser] = useState(null);
  const [none, setNone] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      const result = await fetch(
        `${config.API_BASE_URL}/streaming-api/tracks`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const body = await result.json();
      setLoading(false);
      setTracks(body);
      setSearch(body);
    };
    fetchTracks();
  }, []);

  function httpPost(e) {
    e.preventDefault();
    let databody = {
      _id: `${Date.now()}`,
      artist: `${e.target[0].value}`,
      title: `${e.target[1].value}`,
      url: `/audio/${e.target[2].value}.mp3`,
    };

    console.log(`Add: ` + databody._id);
    setTracks([...tracks, databody]);

    fetch(`${config.API_BASE_URL}/streaming-api/tracks`, {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  function httpFav(id) {
    console.log(`User info: `, user);
    console.log(`favs: `, favs);

    if (favs.map((track) => track._id).indexOf(id) === -1) {
      fetch(`${config.API_BASE_URL}/streaming-api/users/${user._id}/fav`, {
        method: "PATCH",
        body: JSON.stringify({ favs: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let favTrack = tracks.filter((track) => {
        return track._id === id;
      });

      console.log(`Favtrack: `, favTrack);

      setFavs([...favs, ...favTrack]);
    }
  }

  function httpUnfav(id) {
    fetch(`${config.API_BASE_URL}/streaming-api/users/${user._id}&${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setFavs(
      favs.filter((track) => {
        return track._id !== id;
      })
    );
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

  function httpGetUser(e) {
    e.preventDefault();
    let buttonValue = e.nativeEvent.submitter.value;
    let textValue = e.nativeEvent.target[0].value;

    console.log(`Text: `, textValue);
    console.log(`Button: `, buttonValue);

    if (buttonValue === "Login") {
      fetch(`${config.API_BASE_URL}/streaming-api/users/${textValue}`, {
        headers: {
          "content-type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          setUser(result[0]);
          setFavs(
            tracks.filter((track) => {
              return result[0].favs.indexOf(track._id) !== -1;
            })
          );
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (buttonValue === "Register") {
      let databody = {
        _id: `${Date.now()}`,
        user: textValue,
        role: `User`,
        favs: [],
      };

      fetch(`${config.API_BASE_URL}/streaming-api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(databody),
      });
    } else if (buttonValue === "Log out") {
      setUser([]);
    } else {
      console.log("Login error");
    }
  }

  function searchFn(e) {
    e.preventDefault();
    let searchValue = e.nativeEvent.target.value;

    let filteredArray = tracks.filter((track) => {
      return (
        track.artist.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1
      );
    });

    setSearch(filteredArray);
  }

  function sortFn(e) {
    e.preventDefault();
    setSort(!sort);
  }

  function playPause(audioId, btnId) {
    var selector = document.getElementById(audioId);
    var selector2 = document.getElementById(play.id);
    var btnSelector1 = document.getElementById(btnId);
    var btnSelector2 = document.getElementById(play.btn);

    if (!play.playing || audioId !== play.id) {
      selector.play();
      btnSelector1.classList.toggle("playing");
      play && play.id && selector2.pause();
      play && play.btn && btnSelector2.classList.toggle("playing");
      setPlay({
        id: audioId,
        btn: btnId,
        playing: !play.playing,
      });
    } else {
      selector.pause();
      btnSelector1.classList.toggle("playing");
      setPlay({
        id: null,
        btn: null,
        playing: !play.playing,
      });
      console.log(`Pause: `, play);
    }
  }

  return (
    <>
      <ProgressBar />
      <main>
        <section className="respond">
          {/* LEFT SECTION - LEFT SECTION - LEFT SECTION */}
          <section className="streaming__banner">
            {/* <section className="rumpa">
              <h1>
                {user && user.user
                  ? `${user.role}: ${user.user}`
                  : `⚡ Please log in! `}
              </h1>
            </section> */}
            {user && user.role && (
              <button className="info-toggle" onClick={() => setNone(!none)}>
                {none ? "i" : "♪"}
              </button>
            )}
            <div className={`user-panel__favs ${none ? "none" : ""}`}>
              <aside className="card how-to">
                <h6>THE BRIEF</h6>
                <p>
                  I built this app during the <strong>Data Interaction</strong>{" "}
                  module at Hyper Island in March, 2022.
                </p>
                <details>
                  <summary>The brief:</summary>
                  <blockquote>
                    <p>
                      Great Media Group has decided to relaunch, the new focus
                      is purely around what you choose to be invested in. No
                      algorithms, no big data, just you and your favorite
                      content. They require a new platform, and know that API
                      first is the way to go when building something new and
                      great as to support their web, mobile and beyond.
                    </p>
                    <ul>
                      <li>New users should be able to register</li>
                      <li>Admin users should be able to add new content</li>
                      <li>User should be able to find content</li>
                      <li>
                        Users should be able to save content to a list of
                        favorites
                      </li>
                      <li>
                        The list of favorites should be front and center
                        throughout the entire experience
                      </li>
                    </ul>
                  </blockquote>
                </details>
                <details>
                  <summary>My solution:</summary>
                  <p>
                    Client-side made with React.js and deployed through Netlify
                    and Github pipelines. I built a Node.js Express API that is
                    hosted on Heroku and a MongoDB database running as an Atlas
                    cluster.
                  </p>
                  <p>
                    <img
                      src="./images/icons/react.png"
                      alt="React Icon"
                      className="tech-icon"
                    />
                    <img
                      src="./images/icons/node.png"
                      alt="Node Icon"
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
                </details>
                <details open>
                  <summary>How to use:</summary>
                  <ol>
                    <li>
                      Enter a username and click <strong>Register</strong>.
                    </li>
                    <li>
                      Enter your username and click <strong>Login</strong>.
                    </li>
                    {user && user.user && (
                      <>
                        <li>
                          You may now save favourites with the ❤️-buttons.
                        </li>
                        <li>
                          .. and remove them with the 💔-buttons on the list
                          above.
                        </li>
                        <li>
                          To search for artists, clear your username and start
                          typing!
                        </li>
                      </>
                    )}
                  </ol>
                </details>
              </aside>
            </div>
            <div className={`user-panel__info ${!none ? "none" : ""}`}>
              <ul className="streaming__results">
                {user &&
                  user.role &&
                  favs
                    .sort((a, b) => {
                      if (sort) {
                        return a.artist < b.artist ? -1 : 1;
                      } else {
                        return a.artist > b.artist ? -1 : 1;
                      }
                    })
                    .map((track) => {
                      return (
                        <li key={track._id + "x"}>
                          <button
                            className="button-play"
                            id={`fav-btn-${track._id}`}
                            onClick={() =>
                              playPause(
                                `fav-${track._id}`,
                                `fav-btn-${track._id}`
                              )
                            }
                          >
                            {track.artist} - {track.title}
                            <audio id={`fav-${track._id}`} controls>
                              <source src={track.url} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          </button>
                          <button
                            className="button-do button-fav"
                            onClick={() => httpUnfav(track._id)}
                          >
                            💔
                          </button>
                        </li>
                      );
                    })}
              </ul>
            </div>
          </section>

          {/* RIGHT SECTION - RIGHT SECTION - RIGHT SECTION */}

          <section className="streaming__main">
            <div className="toolbar">
              <form className="user-panel" onSubmit={httpGetUser}>
                {user && user.role ? (
                  <>
                    <input
                      type="text"
                      placeholder="Search artists..."
                      className="searchBar"
                      onChange={(e) => {
                        searchFn(e);
                      }}
                    ></input>
                    <div>
                      <input type="submit" value="Search" />
                      <input
                        type="button"
                        value={sort ? "A : Z" : "Z : A"}
                        onClick={sortFn}
                      />
                      <input
                        type="submit"
                        value="Log out"
                        onClick={() => setNone(!none)}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter username.."
                      className="searchBar"
                    />
                    <div>
                      <input type="submit" value="Login" />
                      <input type="submit" value="Register" />
                    </div>
                  </>
                )}
              </form>

              {user && user.role === "Admin" && (
                <form className="admin-panel" onSubmit={httpPost}>
                  <input
                    id="trackArtist"
                    type="text"
                    placeholder="Artist name.."
                    className="searchBar"
                  />
                  <input
                    id="trackTitle"
                    type="text"
                    placeholder="Track title.."
                    className="searchBar"
                  />
                  <input
                    id="trackURL"
                    type="text"
                    placeholder="MP3 URL.."
                    className="searchBar"
                  />
                  <input type="submit" value="Upload" />
                </form>
              )}
            </div>
            <ul className="streaming__results">
              {loading && <li>Audio loading...</li>}
              {search
                .sort((a, b) => {
                  if (sort) {
                    return a.artist < b.artist ? -1 : 1;
                  } else {
                    return a.artist > b.artist ? -1 : 1;
                  }
                })
                .map((track) => {
                  return (
                    <li key={track._id}>
                      <button
                        className={`button-play`}
                        id={`track-btn-${track._id}`}
                        onClick={() =>
                          playPause(
                            `track-${track._id}`,
                            `track-btn-${track._id}`
                          )
                        }
                      >
                        {track.artist} - {track.title}
                        <audio id={`track-${track._id}`} controls>
                          <source src={track.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </button>
                      {user && user.role && (
                        <button
                          className={`button-do button-fav`}
                          onClick={() => httpFav(track._id)}
                        >
                          ❤️
                        </button>
                      )}
                      {user && user.role === "Admin" && (
                        <button
                          className="button-do button-del"
                          onClick={() => httpDelete(track._id)}
                        >
                          🗑️
                        </button>
                      )}
                    </li>
                  );
                })}
            </ul>
          </section>
        </section>
      </main>
    </>
  );
}
