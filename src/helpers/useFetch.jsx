import { useState, useEffect } from "react";
import * as config from "../config";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    fetch(`${config.API_BASE_URL}/${uri}`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);

    // setTracks(body);
    // setSearch(body);
  }, [uri]);

  return { data, loading, error };
}
