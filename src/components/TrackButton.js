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

export const TrackButton = (track) => {
  return (
    <>
      <li key={track._id}>
        <button
          className={`button-play`}
          onClick={() => playPause(`track-${track._id}`)}
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
    </>
  );
};
