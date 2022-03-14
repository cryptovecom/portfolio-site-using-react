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
        <section className="landing__top">
          <section className="blog__banner">
            <h1 className="dragon-text">Free will is an illusion</h1>
          </section>
          <section className="landing-list">
            <aside className="card">
              <h6>WORK IN PROGRESS</h6>
              <p>
                This is a dummy site made as my very first school project to
                practice HTML, CSS and Javascript.
              </p>
              <p>
                It was later refactored using React.js and published to Netlify
                via&nbsp;
                <a
                  href="https://github.com/iseneld"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                .
              </p>
            </aside>
            <ul>
              {/* LOOPING THROUGH POSTS IN JSON */}
              {posts &&
                posts.map((post) => (
                  <li
                    key={post.id}
                    style={{
                      backgroundImage: `url(${post.previewImage})`,
                    }}
                  >
                    <h2>
                      <Link to={`${post.page}`}>{post.title}</Link>
                    </h2>
                  </li>
                ))}
            </ul>
            <aside id="since-born" className="card">
              <h6>BIRTHDAY WIZARD</h6>
              <p>
                Today it's been <b id="elapsed-days">{birthdayCalculator()}</b>{" "}
                days since I was born. <br />
                That's <b id="elapsed-years">{birthCalculatorYears()}</b> years!
                🧙✨
              </p>
            </aside>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
