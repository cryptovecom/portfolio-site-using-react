import React, { useEffect, useState } from "react";
import * as config from "../config";
import Header from "./Header";
import Footer from "./Footer";

// BLOG FUNCTION

function Streaming() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${config.API_BASE_URL}/streaming-api/users`, {
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setUsers(result);
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
                <li>{users[1].user}</li>
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
                <li>
                  <button className="trackButton">Result</button>
                  <button className="favButton">❤️</button>
                </li>
                <li>
                  <button className="trackButton">Result</button>
                  <button className="favButton">❤️</button>
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
