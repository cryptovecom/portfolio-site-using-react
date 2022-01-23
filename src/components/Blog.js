import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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

// BLOG FUNCTION

function Blog() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("./data/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        <section className="blog__banner">
          <h1 className="dragon-text">
            <span className="blog-animation">A </span>
            <span className="blog-animation">
              resp
              <wbr />
              onsive
            </span>
            <span className="blog-animation"> exercise</span>
          </h1>
        </section>

        <section className="landing-list">
          <ul>
            {posts &&
              posts.map((post) => (
                <li
                  key={post.id}
                  style={{
                    backgroundImage: `url(${post.previewImage})`,
                  }}
                >
                  <h2>
                    <Link to="/blog-post">{post.title}</Link>
                  </h2>
                  {/* <p>{post.shortSummary}</p> */}
                </li>
              ))}
          </ul>
        </section>

        <aside>
          <p>
            This is a dummy site made as my first school project to practice
            HTML, CSS, Javascript and http requests.
          </p>
          <p>
            It was later refactored using React.js and published to Netlify via
            Github.
          </p>
        </aside>
        <aside id="since-born">
          <p>
            Today it's been <b id="elapsed-days">{birthdayCalculator()}</b> days
            since I was born. <br />
            That's <b id="elapsed-years">{birthCalculatorYears()}</b> years!
            🧙✨
          </p>
        </aside>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
