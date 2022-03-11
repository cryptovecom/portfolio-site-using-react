import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Sandbox(props) {
  const [goals, setGoals] = useState();

  useEffect(() => {
    fetch("./data/courseGoals.json")
      .then((response) => response.json())
      .then((data) => setGoals(data));
  }, []);

  return (
    <>
      <Header />
      <section className="sandbox">
        <h1>Sandbox</h1>
        <ul>
          {/* LOOPING THROUGH POSTS IN JSON */}
          {goals &&
            goals.map((post) => (
              <li key={post.id}>
                <h2>
                  {post.id}: {post.description}
                </h2>
              </li>
            ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Sandbox;
