import { useEffect, useState } from "react";
import * as config from "../config";

export default function Streaming() {
  const [tracks, setTracks] = useState([]);
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
      fav: false,
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

    fetch(`${config.API_BASE_URL}/streaming-api/users/${user.role}`, {
      method: "PATCH",
      body: JSON.stringify({ favs: id }),
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

  function httpGetUser(e) {
    e.preventDefault();
    let userRole = e.nativeEvent.submitter.value;

    console.log(`GET req: `, userRole);

    fetch(`${config.API_BASE_URL}/streaming-api/users/${userRole}`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setUser(result[0]);
        console.log(`Fetched user: `, result[0]);
        setFavs(
          tracks.filter((track) => {
            return result[0].favs.indexOf(track._id) !== -1;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <main>
        <section className="landing__top">
          {/* LEFT SECTION - LEFT SECTION - LEFT SECTION */}
          <section className="streaming__banner">
            <aside>
              <h1>{user && user.user ? user.role : `Please log in!`}</h1>
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
                        onClick={() => httpFav(track._id)}
                      >
                        ❤️
                      </button>
                    </li>
                  );
                })}
            </ul>
          </section>
          {/* RIGHT SECTION - RIGHT SECTION - RIGHT SECTION */}
          <section className="streaming__main">
            <div className="toolbar">
              <form className="user-panel" onSubmit={httpGetUser}>
                <input
                  type="text"
                  placeholder="Search.."
                  className="searchBar"
                ></input>
                <input type="submit" value="User"></input>
                <input type="submit" value="Admin"></input>
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
              {tracks.map((track) => {
                return (
                  <li key={track._id}>
                    <button className={`button-play`}>
                      {track.artist} - {track.title}
                      <audio controls>
                        <source src={track.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </button>
                    {user && (
                      <button
                        className={`${
                          track.fav ? "fav-green" : ""
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
