import React, { useEffect, useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import Banner from "../../components/Banner";

function Goals(props) {
  const [goals, setGoals] = useState();

  useEffect(() => {
    fetch("./data/courseGoals.json")
      .then((response) => response.json())
      .then((data) => setGoals(data));
  }, []);

  return (
    <>
      <ProgressBar />
      <Banner text="My current course goal progress:" />
      <section className="goals">
        <ul>
          {/* LOOPING THROUGH POSTS IN JSON */}
          {goals &&
            goals.map((post) => (
              <li key={post.id} className={`${post.status} card`}>
                <h6>{post.id}</h6>
                <p>{post.description}</p>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default Goals;
