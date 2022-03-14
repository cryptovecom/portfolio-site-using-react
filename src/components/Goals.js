import React, { useEffect, useState } from "react";

function birthdayCalculator() {
  let birth = "October 20, 1988 04:40:00 GMT";
  let born = new Date(birth);
  let now = new Date();
  let elapsed = now - born;

  var daysSinceBorn = Math.floor(elapsed / (1000 * 3600 * 24));

  return daysSinceBorn;
}

function birthCalculatorYears() {
  let years = birthdayCalculator();

  return parseFloat(years / 365).toFixed(2);
}

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
          <li className="card">
            <h6>BIRTHDAY WIZARD</h6>
            <h5>
              Today it's been <b id="elapsed-days">{birthdayCalculator()}</b>{" "}
              days since I was born. <br />
              That's <b id="elapsed-years">{birthCalculatorYears()}</b> years!
              🧙✨
            </h5>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Goals;
