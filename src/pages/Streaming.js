import { useEffect, useState } from "react";
import * as config from "../config";

export default function Streaming() {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState([]);
  const [user, setUser] = useState(null);
  const [favs, setFavs] = useState([]);

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
        setSearch(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function httpPost(e) {
    e.preventDefault();
    let databody = {
      _id: `${Date.now()}`,
      artist: `${e.target[0].value}`,
      title: `${e.target[1].value}`,
      url: `${config.CLIENT_BASE_URL}/audio/${e.target[2].value}.mp3`,
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

    fetch(`${config.API_BASE_URL}/streaming-api/users/${user._id}/fav`, {
      method: "PATCH",
      body: JSON.stringify({ favs: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // ADD FUNCTION THAT UPDATES FAVS

    let favTrack = tracks.filter((track) => {
      return track._id === id;
    });

    console.log(`Favtrack: `, favTrack);

    setFavs([...favs, ...favTrack]);
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

  return (
    <>
      <main>
        <section className="landing__top">
          {/* LEFT SECTION - LEFT SECTION - LEFT SECTION */}
          <section className="streaming__banner">
            <aside>
              <h1>
                {user && user.user
                  ? `${user.role}: ${user.user}`
                  : `⚡ Please log in! `}
              </h1>
            </aside>
            <ul className="streaming__results">
              {user &&
                user.role &&
                favs.map((track) => {
                  return (
                    <li key={track._id + "x"}>
                      <button className="button-play">
                        {track.artist} - {track.title}
                        <audio controls>
                          <source src={track.url} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </button>
                      <button
                        className="button-do button-fav"
                        onClick={() => httpUnfav(track._id)}
                      >
                        ❤️
                      </button>
                    </li>
                  );
                })}
            </ul>
            <aside className="card how-to">
              <h6>HOW TO USE</h6>
              <ol>
                <li>
                  Enter a username and click <strong>Register</strong>.
                </li>
                <li>
                  Enter your username and click <strong>Login</strong>.
                </li>
                <li>You may now save favourites with the ❤️-button.</li>
                <li>
                  You can remove favourites with the ❤️-button on the list
                  above.
                </li>
                <li>
                  Audio doesn't work, yet, and there are still a few bugs
                  lurking!
                </li>
                <li>That's it, lol.</li>
              </ol>
            </aside>
            <aside className="card how-to">
              <h6>ABOUT THIS PROJECT</h6>
              <p>
                I built this app during the <strong>Data Interaction</strong>{" "}
                module at Hyper Island.
              </p>
              <p>
                The frontend was made in React and deployed through a pipeline
                between Github and Netlify. The Node.js API I built is hosted on
                Heroku and the MongoDB database is running as a MongoDB Atlas
                cluster.
              </p>
            </aside>
          </section>
          {/* RIGHT SECTION - RIGHT SECTION - RIGHT SECTION */}

          <section className="streaming__main">
            <div className="toolbar">
              <form className="user-panel" onSubmit={httpGetUser}>
                {user && user.role ? (
                  <>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="searchBar"
                      onChange={(e) => {
                        searchFn(e);
                      }}
                    ></input>
                    <input type="submit" value="Search"></input>
                    <input type="submit" value="Log out"></input>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter username.."
                      className="searchBar"
                    ></input>
                    <input type="submit" value="Login"></input>
                    <input type="submit" value="Register"></input>
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
                  <input type="submit" value="Upload"></input>
                </form>
              )}
            </div>

            <ul className="streaming__results">
              {search.map((track) => {
                return (
                  <li key={track._id}>
                    <button className={`button-play`}>
                      {track.artist} - {track.title}
                      <audio controls>
                        <source src={track.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </button>
                    {user && user.role && (
                      <button
                        className={`${
                          user.favs.indexOf(track._id) !== -1 ? "fav-green" : ""
                        } button-do button-fav`}
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
