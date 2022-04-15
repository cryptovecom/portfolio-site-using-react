import React, { useEffect, useState } from "react";

function Goals(props) {
  const [goals, setGoals] = useState();

  useEffect(() => {
    fetch("./data/courseGoals.json")
      .then((response) => response.json())
      .then((data) => setGoals(data));
  }, []);

  return (
    <>
      <section className="goals">
        <ul>
          {/* LOOPING THROUGH POSTS IN JSON */}
          {goals &&
            goals.map((post) => (
              <li key={post.id} className={`${post.status} card`}>
                <h6>{post.id}</h6>
                <h5>{post.description}</h5>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default Goals;
